import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
  } from "react-router-dom";
  

var lang = 'enus'
//MainPage is the default page
class MainPage extends React.Component {
    
    async componentDidMount() {
        if (this.props.language === undefined) {
            lang = 'enus'
        }
        else {
            lang = this.props.language
        }
        var dat
        await fetch('http://localhost:8000/heroesapi/?lang=' + lang).then(value => value.json()).then(value => {dat = value})
        this.setState(Heroes(dat))
    }


    render() {
        return this.state
    }
}
//HeroPortrait is the target image of said Hero 
class HeroPortrait extends React.Component {
    
    render() {
        var imagesource='http://localhost:8000/heroesapi/image/portrait/' + this.props.value
        return(
            <h1 className="Portrait">
                <img
                src={imagesource}
                width='92'
                height='93'
                alt='new'
                ></img>
                
            </h1>
        )
    }
}
//Hero is a set of HeroPortrait and HeroName 
class Hero extends React.Component {
    render() {
        return(
            <button className="Hero">
                <Link to={'/' + lang + '/' + this.props.value['herolink'] + '/0000000'}>
                    <HeroPortrait value={this.props.value['portraitlink']}></HeroPortrait>
                    {this.props.name}
                </Link>
            </button>
        )
    }
}
//Heroes returns a Heroes component from the list of heroes
function Heroes(heroes_data) {
    var heroes_render = []
    for (let hero in heroes_data){
        if(heroes_data.hasOwnProperty(hero)){
            heroes_render.push(
                <Hero
                key={hero}
                value={heroes_data[hero]}
                name={hero}
                />
            )
        } 
    }
    return(
        <div>
            {heroes_render}
        </div>

   )
}

//HeroPage is the page for a certain Hero
class HeroPage extends React.Component {
    
    async componentDidMount() {
        var herodat;
        lang = this.props.language
        console.log(this.props.language)
        var fetchurl ='http://localhost:8000/heroesapi/' + this.props.link + '?lang=' + lang;
        await fetch(fetchurl).then(value => value.json()).then(value => {herodat = value['herodata']})
        var Abilities = 

            <div id='skills'>                
                <HeroSkill
                    value={herodat['abilities']['trait'][0]}
                />
                <HeroSkill
                    value={herodat['abilities']['basic'][0]}
                />
                <HeroSkill
                    value={herodat['abilities']['basic'][1]}
                />
                <HeroSkill
                    value={herodat['abilities']['basic'][2]}
                />

            </div>

        var Talents = 
            <div id='talents'>
                <div id='column'>
                    <Column
                        value={herodat['talents']['level1']}
                    />
                </div>
                <div id='column'>
                    <Column
                        value={herodat['talents']['level4']}
                    />
                </div>
                <div id='column'>
                    <Column
                        value={herodat['talents']['level7']}
                    />
                </div>
                <div id='column'>
                    <Column
                        value={herodat['talents']['level10']}
                    />
                </div>
                <div id='column'>
                    <Column
                        value={herodat['talents']['level13']}
                    />
                </div>
                <div id='column'>
                    <Column
                        value={herodat['talents']['level16']}
                    />
                </div>
                <div id='column'>
                    <Column
                        value={herodat['talents']['level20']}
                    />
                </div>
            </div>
        var All = 
            <div>
                {Abilities}
                {Talents}
            </div>
        
            
        this.setState(All)
        //this.setState(Talents)

        

    }
    
    render() {
        return (
            <div>

                <div>
                    {this.state}
                </div>
            </div>
        )
    }
}
//HeroSkill will render the skills of a certain Hero
class HeroSkill extends React.Component{
    constructor(props) {
        super(props)
        this.state = {hover: false}
    }
    render() {
        const Tooltip = {
            'display': this.state.hover ? 'block' : 'none',
            'position': 'absolute',
            'backgroundColor': 'white',
            'width': '400px',
            'borderStyle': 'solid',
            'borderColor': 'grey',
            'padding': '3px',
            'zIndex': '99999',
        }

        if (this.props.value === undefined) {
            return(
                <div id="skill">
                    <SkillImage
                        value={'hud_btn_bg_ability_cancel.png'}
                        id="undefined"
                        name="ubdefined"
                        description="Skill does not exist"
                    />
                </div>
            )
        }
        else {
           
            return(
                <div 
                    id="skill"
                    onMouseOver={() => this.setState({hover: true})}
                    onMouseOut={() => this.setState({hover: false})}
                >
                    <SkillImage
                        value={this.props.value['icon']}
                        name={this.props.value['name']}
                        description={this.props.value['fullTooltip']}
                        id={this.props.value['nameId']}
                    />
                    <span
                        id="tooltip"
                        style={Tooltip}
                    >
                        <Description
                            name={this.props.value['name']}
                            value={this.props.value['fullTooltip']}
                        />
                    
                    </span>
                </div>
            )
        }
    }
}
//SkillImage will return the image of a given skill, talent url
class SkillImage extends React.Component {


    render() {
        var imagesource='http://localhost:8000/heroesapi/image/abilitytalent/' + this.props.value
        return (
            <img
                src={imagesource}
                width='100'
                height='100'
                alt='new'
            />

        )
    }
}
//Column will return all the talents of a certain tier
class Column extends React.Component {
    render() {
        var column = []
        for (let i in this.props.value){
            column.push(
                <Talent
                    key={this.props.value[i]['nameId']}
                    value={this.props.value[i]}
                />
            )
            
        } 
        return(column)
    }
}
//Talent will return a talent
class Talent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {hover: false}
    }
    render() {
        const Tooltip = {
            'display': this.state.hover ? 'block' : 'none',
            'position' : 'absolute',
            'backgroundColor': 'white',
            'width': '400px',
            'borderStyle': 'solid',
            'borderColor': 'grey',
            'padding': '3px',
            'zIndex': '99999',
        }
        
        return(
            <div 
                id='talent'
                onMouseOver={() => this.setState({hover: true})}
                onMouseOut={() => this.setState({hover: false})}
            >
                <SkillImage  
                    value={this.props.value["icon"]}
                />
                <span
                    id='tooltip'
                    style={Tooltip}
                >
                    <Description
                        name={this.props.value['name']}
                        value={this.props.value['fullTooltip']}
                    />
                    
                </span>
            </div>
        )
    }
}

//Do you like Tooltips? Well I do!
class Description extends React.Component {
    render() {
        return(
            
            <div>
                <div id="discriptionTitle">
                    {this.props.name}
                </div>
                {this.props.value}
                
            </div>
            )
        
    }
}
//TopBar will be the top bar
class TopBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {hover: false}
    }
    render() {
        const LanguageBar = {
            'display': this.state.hover ? 'block' : 'none',
            'position' : 'absolute',
            'backgroundColor': 'white',
            'width': '400px',
            'borderStyle': 'solid',
            'borderColor': 'grey',
            'padding': '3px',
            'zIndex': '99999',
        }
        
        const sliced = window.location.pathname.slice(5)
        return(
            <div
                id='TopBar'
            >
                <Link
                    to={'/' + lang}
                    id='HomeButton'
                >
                    <div
                        id='Home'
                    >
                        <img
                            id='Bunker'
                            alt='Go Home'
                            src='http://localhost:8000/heroesapi/image/unit/storm_temp_btn-building-terran-bunker.png'
                        />
                    </div>
                    Silver City
                </Link>
                <div
                    id="Languages"
                    onMouseOver={() => this.setState({hover: true})}
                    onMouseOut={() => this.setState({hover: false})}
                >
                    LANG
                    <span
                        style={LanguageBar}
                    >
                        <Link
                            to={'/enus' + sliced}
                        >
                            English
                        </Link>

                        <Link
                            to={'/kokr' + sliced}
                        >
                            한국어
                        </Link>
                    </span>
                
                </div>

                
            </div>
        )
    }
    
}



//getHeroLink will get which hero to show
function GetHeroLink() {
    let { language } = useParams();
    let { herolink } = useParams();
    let { talents } = useParams();
    if (talents === undefined) {talents = '0000000';}
    return (
        <HeroPage 
        id='HeroPage'
        link={herolink}
        language={language}
        />
    )
}
function MainPageLanguage() {
    let { language } = useParams();
    return (
        <MainPage
            language={language}
        />
    )
}



//RealPage will be the rendered page through react router
class RealPage extends React.Component {
    
    render() {
        return (
            <Router>
                <div>
                    <TopBar/>
                    <Switch>
                        <Route exact path="/">
                            <MainPage/>
                        </Route>
                        <Route exact path="/:language" children={<MainPageLanguage/>}/>
                        <Route path="/:language/:herolink/:talents" children={<GetHeroLink/>}/>
                    
                    </Switch>
                </div>
            </Router>
        )
    }
}


//Rendering the RealPage
ReactDOM.render(
    <RealPage/>,
    document.getElementById('root')
)
