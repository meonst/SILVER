import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



var lang = '?lang=enus'
async function get_heroes_api() {
    var dat = []
    await fetch('http://127.0.0.1:8000/heroesapi/' + lang).then(value => value.json()).then(value => dat.push(value))
    ReactDOM.render(
        makepage(dat[0]),
        document.getElementById('root')
    )
}
class Portrait extends React.Component {
    render() {
        var imagesource='http://127.0.0.1:8000/heroesapi/image/portrait/' + this.props.value
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
class Heroname extends React.Component {
    render() {
        return(
            <button className="Hero">
            <Portrait value={this.props.value['portraitlink']}></Portrait>
            {this.props.name}
        </button>
        )
    }
}
class Hero extends React.Component {
    render() {
        return (
            <div>
                {this.props.data}           
            </div>
        )
    }
}
function makepage(heroes_data) {
    var heroes_render = []
    for (let hero in heroes_data){
        if(heroes_data.hasOwnProperty(hero)){
            heroes_render.push(
                <Heroname
                value={heroes_data[hero]}
                name={hero}
                />
            )
        } 
    }
    /*
    ReactDOM.render(    
        <Hero
        data={heroes_render}
        />,
        document.getElementById('root')
    );
    */
   return(
       <Hero
       data={heroes_render}
       />
   )
}

get_heroes_api()
/*
ReactDOM.render(
    get_heroes_api(),
    document.getElementById('root')
)
*/