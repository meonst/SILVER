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
        this.setState(makepage(dat))
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
//Heroes is a set of all the Hero components
class Heroes extends React.Component {
    render() {
        return (
            <div>
                {this.props.data}           
            </div>
        )
    }
}
//makepage returns a Heroes component from the list of heroes
function makepage(heroes_data) {
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
       <Heroes
       data={heroes_render}
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
                    </Switch>
                </div>
            </Router>
        )
    }
}
//HeroPage is a page of a certain Hero

class HeroPage extends React.Component {
    
    async componentDidMount() {
        var herodat;
        var fetchurl ='http://localhost:8000/heroesapi/' + this.props.link + lang;
        await fetch(fetchurl).then(value => value.json()).then(value => {herodat = value})
        this.setState(herodat)
        console.log(this.state)
        console.log(this.state['herodata'])
    }
    
    render() {
        return (
            <h3>
                {this.props.link}
                
            </h3>
        )
    }
}

function GetHeroLink() {
    let { herolink } = useParams();
    return (
        <HeroPage
        link={herolink}
        />
    )
}



//Rendering the RealPage
ReactDOM.render(
    <RealPage/>,
    document.getElementById('root')
)
