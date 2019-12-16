import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

var lang = '?lang=enus'
//MainPage is the default page
class MainPage extends React.Component {
    async componentDidMount() {
        var dat
        await fetch('http://localhost:8000/heroesapi/' + lang).then(value => value.json()).then(value => {dat = value})
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
                <Link to={'/' + this.props.value['herolink'] + '/0000000'}>
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
        var fetchurl ='http://localhost:8000/heroesapi/' + this.props.link + lang;
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
                {this.props.link}
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
            'marginLeft': '103px',
            'marginTop': '7px',
            'zIndex': '99999',
        }

        if (this.props.value === undefined) {
            return(
                <SkillImage
                    value={'hud_btn_bg_ability_cancel.png'}
                    name="Skill does not exist"
                    description="Skill does not exist"
                />
            )
        }
        else {
            return(
                <div 
                    id='skill'
                    onMouseOver={() => this.setState({hover: true})}
                    onMouseOut={() => this.setState({hover: false})}
                >
                    <SkillImage
                        value={this.props.value['icon']}
                        name={this.props.value['name']}
                        description={this.props.value['fullTooltip']}
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
}
//SkillImage will return the image of a given skill, talent url
class SkillImage extends React.Component {


    render() {
        var imagesource='http://localhost:8000/heroesapi/image/abilitytalent/' + this.props.value
        return (
            <img

                id="skill"
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
            'paddingLeft': '3px',
            'marginLeft': '103px',
            'marginTop': '7px',
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
        var line = new DOMParser().parseFromString(this.props.value, 'text/html')
        var description = line.getElementsByTagName('body')[0]['innerText']
        return(
            
            <div>
                <div id="discriptionTitle">
                    {this.props.name}
                </div>
                {description}
            </div>
            )
        
    }
}



//getHeroLink will get which hero to show
function GetHeroLink() {
    let { herolink } = useParams();
    let { talents } = useParams();
    console.log(talents)
    return (
        <HeroPage 
        id='HeroPage'
        link={herolink}
        />
    )
}
//RealPage will be the rendered page through react router
class RealPage extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                        <MainPage />
                        </Route>

                        <Route exact path="/:herolink" children={<GetHeroLink/>}>
                        </Route>

                        <Route path="/:herolink/:talents" children={<GetHeroLink/>}>
                        </Route>
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
