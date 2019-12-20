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
var cooldown, energycost, lifecost, necessityStyle, specialMount, singleHeroic, hasActivable, isViking, hasAlternative, qAlt, wAlt, eAlt
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
        var fetchurl ='http://localhost:8000/heroesapi/' + this.props.link + '?lang=' + lang;
        await fetch(fetchurl).then(value => value.json()).then(value => {herodat = value['herodata']})
        console.log(herodat)
        if (herodat['unitId'] === 'HeroDeathwing' || herodat['unitId'] === 'HeroTracer') {singleHeroic = true} else {singleHeroic = false}
        if (herodat['abilities']['activable'] === undefined) {hasActivable = false} else {hasActivable = true}
        if (herodat['abilities']['mount'][0]['nameId'] !== 'Mount') {specialMount = true} else {specialMount = false}
        if (herodat['unitId'] === 'HeroLostVikingsController') {isViking = true} else {isViking = false}
        qAlt = 'empty'; wAlt = 'empty'; eAlt = 'empty'
        

        //Alternative Skills
        hasAlternative = false

        //Abathur
        if (herodat['unitId'] === 'HeroAbathur') {
            hasAlternative = true
            qAlt = herodat['heroUnits'][0]['AbathurSymbiote']['abilities']['basic'][0]
            wAlt = herodat['heroUnits'][0]['AbathurSymbiote']['abilities']['basic'][1]
            eAlt = herodat['heroUnits'][0]['AbathurSymbiote']['abilities']['basic'][2]
        }
        //Alexstrasza
        if (herodat['unitId'] === 'HeroAlexstrasza') {
            hasAlternative = true
            qAlt = herodat['heroUnits'][0]['HeroAlexstraszaDragon']['abilities']['basic'][0]
            wAlt = herodat['heroUnits'][0]['HeroAlexstraszaDragon']['abilities']['basic'][1]
            eAlt = herodat['heroUnits'][0]['HeroAlexstraszaDragon']['abilities']['basic'][2]
        }
        //Chen
        if (herodat['unitId'] === 'HeroChen') {
            hasAlternative = true
            qAlt = herodat['subAbilities'][0]['ChenStormEarthFire|ChenStormEarthFire|Heroic']['basic'][0]
            wAlt = herodat['subAbilities'][0]['ChenStormEarthFire|ChenStormEarthFire|Heroic']['basic'][1]
            eAlt = herodat['subAbilities'][0]['ChenStormEarthFire|ChenStormEarthFire|Heroic']['basic'][2]
        }
        //Deathwing
        if (herodat['unitId'] === 'HeroDeathwing') {
            hasAlternative = true
            wAlt = herodat['subAbilities'][0]['DeathwingFormSwitch|DeathwingFormSwitch|Active']['basic'][0]
            eAlt = herodat['subAbilities'][0]['DeathwingFormSwitch|DeathwingFormSwitch|Active']['basic'][1]
        }
        //D.Va
        if (herodat['unitId'] === 'HeroDVaMech') {
            hasAlternative = true
            eAlt = herodat['heroUnits'][0]['HeroDVaPilot']['abilities']['basic'][2]
        }
        //Greymane
        if (herodat['unitId'] === 'HeroGreymane') {
            hasAlternative = true
            qAlt = herodat['subAbilities'][0]['GreymaneWorgenForm|GreymaneWorgenForm|Trait|True']['basic'][0]
            eAlt = herodat['subAbilities'][0]['GreymaneWorgenForm|GreymaneWorgenForm|Trait|True']['basic'][1]
        }
        //Leoric
        if (herodat['unitId'] === 'HeroLeoric') {
            hasAlternative = true
            qAlt = herodat['subAbilities'][0]['LeoricUndyingTrait|LeoricUndyingTrait|Trait|True']['basic'][0]
            wAlt = herodat['subAbilities'][0]['LeoricUndyingTrait|LeoricUndyingTrait|Trait|True']['basic'][1]
        }
        //Ragnaros
        if (herodat['unitId'] === 'HeroRagnaros') {
            hasAlternative = true
            qAlt = herodat['heroUnits'][0]['RagnarosBigRag']['abilities']['basic'][0]
            wAlt = herodat['heroUnits'][0]['RagnarosBigRag']['abilities']['basic'][1]
            eAlt = herodat['heroUnits'][0]['RagnarosBigRag']['abilities']['basic'][2]
        }
        //Uther
        if (herodat['unitId'] === 'HeroUther') {
            hasAlternative = true
            qAlt = herodat['subAbilities'][0]['UtherEternalDevotion|UtherEternalDevotion|Trait']['basic'][0]
        }
        var Abilities = 
            <div>
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

                    <HeroSkill
                        value={herodat['abilities']['heroic'][0]}
                        style={{'display': singleHeroic ? 'block' : 'none'}}
                    />
                    <HeroSkill
                        value={hasActivable ? herodat['abilities']['activable'][0] : undefined}
                        style={{'display': hasActivable ? 'block' : 'none'}}
                    />
                    <HeroSkill
                        value={isViking ? herodat['abilities']['activable'][1] : undefined}
                        style={{'display': isViking ? 'block' : 'none'}}
                    />
                    <HeroSkill
                        value={isViking ? herodat['abilities']['activable'][2] : undefined}
                        style={{'display': isViking ? 'block' : 'none'}}
                    />
                    <HeroSkill
                        value={isViking ? herodat['abilities']['activable'][3] : undefined}
                        style={{'display': isViking ? 'block' : 'none'}}
                    />
                    <Mount
                        value={herodat['abilities']['mount'][0]}
                        style={{'display': specialMount ? 'block' : 'none'}}
                    />
                </div>
                <div id='alternativeSkills'>
                    <HeroSkill
                        value='empty'
                    />
                    <HeroSkill
                        value={qAlt}
                    />
                    <HeroSkill
                        value={wAlt}
                    />
                    <HeroSkill
                        value={eAlt}
                    />
                </div>
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
class Mount extends React.Component{
    constructor(props) {
        super(props)
        this.state = {hover: false}
    }
    render() {
        if (this.props.value !== undefined) {
            if (this.props.value.hasOwnProperty('cooldownTooltip')) {
                cooldown = this.props.value['cooldownTooltip']
            } else {cooldown = undefined}
        }
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
        return(
            <div 
                id="mount"
                style={this.props.style}
                onMouseOver={() => this.setState({hover: true})}
                onMouseOut={() => this.setState({hover: false})}
            >
                <SkillImage
                    value={this.props.value['icon']}
                    id={this.props.value['nameId']}
                    name={this.props.value['name']}
                    description={this.props.value['fullTooltip']}
                />
                <span
                    id="tooltip"
                    style={Tooltip}
                >
                    <Description
                        name={this.props.value['name']}
                        energycost={energycost}
                        lifecost={lifecost}
                        cooldown={cooldown}
                        value={this.props.value['fullTooltip']}
                    />
                
                </span>
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
        if (this.props.value !== undefined) {
            if (this.props.value.hasOwnProperty('energyTooltip')) {
                energycost = this.props.value['energyTooltip']
            } else {energycost = undefined}
            if (this.props.value.hasOwnProperty('lifeTooltip')) {
                lifecost = this.props.value['lifeTooltip']
            } else {lifecost = undefined}
            if (this.props.value.hasOwnProperty('cooldownTooltip')) {
                cooldown = this.props.value['cooldownTooltip']
            } else {cooldown = undefined}
        }

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
        if (this.props.value === 'empty') {
            return(
                <div id="emptySkill"/>
            )
        }

        if (this.props.value === undefined) {
            return(
                <div 
                    id="skill"
                    style={this.props.style}
                >
                    <SkillImage
                        value={'hud_btn_bg_ability_cancel.png'}
                        id="undefined"
                        name="undefined"
                        description="Skill does not exist"
                    />
                </div>
            )
        }
        else {
           
            return(
                <div 
                    id="skill"
                    style={this.props.style}
                    onMouseOver={() => this.setState({hover: true})}
                    onMouseOut={() => this.setState({hover: false})}
                >
                    <SkillImage
                        value={this.props.value['icon']}
                        id={this.props.value['nameId']}
                        name={this.props.value['name']}
                        description={this.props.value['fullTooltip']}
                    />
                    <span
                        id="tooltip"
                        style={Tooltip}
                    >
                        <Description
                            name={this.props.value['name']}
                            energycost={energycost}
                            lifecost={lifecost}
                            cooldown={cooldown}
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
        if (this.props.value.hasOwnProperty('energyTooltip')) {
            energycost = this.props.value['energyTooltip']
        } else {energycost = undefined}
        if (this.props.value.hasOwnProperty('lifeTooltip')) {
            lifecost = this.props.value['lifeTooltip']
        } else {lifecost = undefined}
        if (this.props.value.hasOwnProperty('cooldownTooltip')) {
            cooldown = this.props.value['cooldownTooltip']
        } else {cooldown = undefined}

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
                        energycost={energycost}
                        lifecost={lifecost}
                        cooldown={cooldown}
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
        if (this.props.energycost === undefined && this.props.lifecost === undefined && this.props.cooldown === undefined) {
            necessityStyle = {'display': 'none'}} else {necessityStyle = {'display': 'block'}}
        return(
            
            <div>
                <div id="discriptionTitle">
                    {this.props.name}
                </div>
                <div id='necessity' style={necessityStyle}>
                    <div id='costs'>
                        {this.props.energycost}
                        {this.props.lifecost}
                    </div>
                    <div id='cooldown'>
                        {this.props.cooldown}
                    </div>
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
            'width': 'auto',
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
                    <span style={LanguageBar}>
                        <Link to={'/refresh/dede' + sliced} id='Langs'>Deutsch</Link><br/>
                        <Link to={'/refresh/enus' + sliced} id='Langs'>English</Link><br/>
                        <Link to={'/refresh/eses' + sliced} id='Langs'>Español(EU)</Link><br/>
                        <Link to={'/refresh/esmx' + sliced} id='Langs'>Español(AL)</Link><br/>
                        <Link to={'/refresh/frfr' + sliced} id='Langs'>Français</Link><br/>
                        <Link to={'/refresh/itit' + sliced} id='Langs'>Italiano</Link><br/>
                        <Link to={'/refresh/kokr' + sliced} id='Langs'>한국어</Link><br/>
                        <Link to={'/refresh/plpl' + sliced} id='Langs'>Polski</Link><br/>
                        <Link to={'/refresh/ptbr' + sliced} id='Langs'>Português</Link><br/>
                        <Link to={'/refresh/ruru' + sliced} id='Langs'>Русский</Link><br/>
                        <Link to={'/refresh/zhcn' + sliced} id='Langs'>简体中文</Link><br/>
                        <Link to={'/refresh/zhtw' + sliced} id='Langs'>繁體中文</Link><br/>
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
                        <Route path="/refresh" children={<Refresh/>}/>
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

function Refresh() {
    var new_path = window.location.pathname.slice(8)
    window.location.pathname = new_path
    return(<div/>)
}

//Rendering the RealPage
ReactDOM.render(
    <RealPage/>,
    document.getElementById('root')
)
