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
        console.log(this.state)
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
                <Link to={'/' + this.props.value['herolink']}>
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
//RealPage will be the rendered page through react router

class HeroPage extends React.Component {
    
    async componentDidMount() {
        var herodat;
        var fetchurl ='http://localhost:8000/heroesapi/' + this.props.link + lang;
        await fetch(fetchurl).then(value => value.json()).then(value => {herodat = value['herodata']})
        console.log(herodat)



        var Abilities = 

            <div>                
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
            <div id='talent'>
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

class HeroSkill extends React.Component{
    render() {
        if (this.props.value === undefined) {
            return(
                <SkillImage
                    value={'hud_btn_bg_ability_cancel.png'}
                />
            )
        }
        else {
            return(
                <SkillImage
                    value={this.props.value['icon']}
                />
            )
        }
    }
}


class SkillImage extends React.Component {
    
    render() {
        var imagesource='http://localhost:8000/heroesapi/image/abilitytalent/' + this.props.value
        return (
            <img
                src={imagesource}
                width='92'
                height='93'
                alt='new'
            />
        )
    }
}

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

class Talent extends React.Component {
    render() {
        return(
            <SkillImage
                id="skill"
                value={this.props.value["icon"]}
            />
        )
    }
}





function GetHeroLink() {
    let { herolink } = useParams();
    return (
        <HeroPage 
        id='HeroPage'
        link={herolink}
        />
    )
}

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
                    </Switch>
                </div>
            </Router>
        )
    }
}
//HeroPage is a page of a certain Hero


//Rendering the RealPage
ReactDOM.render(
    <RealPage/>,
    document.getElementById('root')
)
