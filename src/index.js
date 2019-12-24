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

var lang = (navigator.language || navigator.userLanguage).toLowerCase().replace('-', '');
console.log(lang)
const version = '77692'
var cooldown, energycost, lifecost, necessityStyle
//MainPage is the default page
class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            language: undefined,
            page: undefined
        }
    }
    async componentDidMount() {
        var dat
        if (this.props.language === undefined) {
            lang = (navigator.language || navigator.userLanguage).toLowerCase().replace('-', '')
        }
        else {
            lang = this.props.language
        }
        this.setState({language: lang})
        await fetch('files/json/herodata_' + version + '_' + lang + '.json').then((value) => value.json()).then(value => {dat = value})
        this.setState({page: Heroes(dat)})
    }
    componentDidUpdate() {
        if (lang !== this.props.language) {
            this.componentDidMount()
            this.render()
        }
    }


    render() {
        var mustRender
        if (this.state.page === undefined) {mustRender = false} else {mustRender = true}
        return mustRender ? this.state.page : null
    }
}
//HeroPortrait is the target image of said Hero 
class HeroPortrait extends React.Component {
    
    render() {
        var imagesource='http://localhost:3000/files/images/heroportraits/' + this.props.value
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
                key={heroes_data[hero]['name']}
                value={{
                    'herolink': hero,
                    'portraitlink': heroes_data[hero]['portraits']['target']
                }}
                name={heroes_data[hero]['name']}
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
    
    constructor(props) {
        super(props)
        this.state = {
            data: undefined,
            singleHeroic: false,
            hasActivable: true,
            specialMount: false,
            isViking: false,
            hasAlternative: false,
            qAlt: 'empty',
            wAlt: 'empty',
            eAlt: 'empty',
            showAlternativeSkills: false,
            component: false,
        }
    }
    componentDidUpdate() {
        if (lang !== this.props.language) {
            this.componentDidMount()
            this.render()
        }
    }

    async componentDidMount() {
        var herodat;
        if (this.props.language === undefined) {
            lang = (navigator.language || navigator.userLanguage).toLowerCase().replace('-', '')
        }
        else {
            lang = this.props.language
        }
        await fetch('http://localhost:3000/files/json/herodata_' + version + '_' + lang + '.json').then(value => value.json()).then(value => {herodat = value[this.props.link]})
        this.setState({data: herodat})
        if (herodat['unitId'] === 'HeroDeathwing' || herodat['unitId'] === 'HeroTracer') {this.setState({singleHeroic: true})}
        if (herodat['abilities']['activable'] === undefined) {this.setState({hasActivable: false})}
        if (herodat['abilities']['mount'][0]['nameId'] !== 'Mount') {this.setState({specialMount: true})}
        if (herodat['unitId'] === 'HeroLostVikingsController') {this.setState({isViking: true})}
        if (herodat['unitId'] === 'HeroSamuro') {this.setState({hasActivable: false})}
        //Alternative Skills
        //Abathur
        if (herodat['unitId'] === 'HeroAbathur') {
            this.setState({hasAlternative: true})
            this.setState({qAlt: herodat['heroUnits'][0]['AbathurSymbiote']['abilities']['basic'][0]})
            this.setState({wAlt: herodat['heroUnits'][0]['AbathurSymbiote']['abilities']['basic'][1]})
            this.setState({eAlt: herodat['heroUnits'][0]['AbathurSymbiote']['abilities']['basic'][2]})
        }
        //Alexstrasza
        if (herodat['unitId'] === 'HeroAlexstrasza') {
            this.setState({hasAlternative: true})
            this.setState({qAlt: herodat['heroUnits'][0]['HeroAlexstraszaDragon']['abilities']['basic'][0]})
            this.setState({wAlt: herodat['heroUnits'][0]['HeroAlexstraszaDragon']['abilities']['basic'][1]})
            this.setState({eAlt: herodat['heroUnits'][0]['HeroAlexstraszaDragon']['abilities']['basic'][2]})
        }
        //Chen
        if (herodat['unitId'] === 'HeroChen') {
            this.setState({hasAlternative: true})
            this.setState({qAlt: herodat['subAbilities'][0]['ChenStormEarthFire|ChenStormEarthFire|Heroic']['basic'][0]})
            this.setState({wAlt: herodat['subAbilities'][0]['ChenStormEarthFire|ChenStormEarthFire|Heroic']['basic'][1]})
            this.setState({eAlt: herodat['subAbilities'][0]['ChenStormEarthFire|ChenStormEarthFire|Heroic']['basic'][2]})
        }
        //Deathwing
        if (herodat['unitId'] === 'HeroDeathwing') {
            this.setState({hasAlternative: true})
            this.setState({wAlt: herodat['subAbilities'][0]['DeathwingFormSwitch|DeathwingFormSwitch|Active']['basic'][0]})
            this.setState({eAlt: herodat['subAbilities'][0]['DeathwingFormSwitch|DeathwingFormSwitch|Active']['basic'][1]})
        }
        //D.Va
        if (herodat['unitId'] === 'HeroDVaMech') {
            this.setState({hasAlternative: true})
            this.setState({eAlt: herodat['heroUnits'][0]['HeroDVaPilot']['abilities']['basic'][2]})
        }
        //Greymane
        if (herodat['unitId'] === 'HeroGreymane') {
            this.setState({hasAlternative: true})
            this.setState({qAlt: herodat['subAbilities'][0]['GreymaneWorgenForm|GreymaneWorgenForm|Trait|True']['basic'][0]})
            this.setState({eAlt: herodat['subAbilities'][0]['GreymaneWorgenForm|GreymaneWorgenForm|Trait|True']['basic'][1]})
        }
        //Leoric
        if (herodat['unitId'] === 'HeroLeoric') {
            this.setState({hasAlternative: true})
            this.setState({qAlt: herodat['subAbilities'][0]['LeoricUndyingTrait|LeoricUndyingTrait|Trait|True']['basic'][0]})
            this.setState({wAlt: herodat['subAbilities'][0]['LeoricUndyingTrait|LeoricUndyingTrait|Trait|True']['basic'][1]})
        }
        //Ragnaros
        if (herodat['unitId'] === 'HeroRagnaros') {
            this.setState({hasAlternative: true})
            this.setState({qAlt: herodat['heroUnits'][0]['RagnarosBigRag']['abilities']['basic'][0]})
            this.setState({wAlt: herodat['heroUnits'][0]['RagnarosBigRag']['abilities']['basic'][1]})
            this.setState({eAlt: herodat['heroUnits'][0]['RagnarosBigRag']['abilities']['basic'][2]})
        }
        //Uther
        if (herodat['unitId'] === 'HeroUther') {
            this.setState({hasAlternative: true})
            this.setState({qAlt: herodat['subAbilities'][0]['UtherEternalDevotion|UtherEternalDevotion|Trait']['basic'][0]})
        }
        //Valeera
        if (herodat['unitId'] === 'HeroValeera') {
            this.setState({hasAlternative: true})
            this.setState({qAlt: herodat['subAbilities'][0]['ValeeraStealth|ValeeraStealth|Trait']['basic'][0]})
            this.setState({wAlt: herodat['subAbilities'][0]['ValeeraStealth|ValeeraStealth|Trait']['basic'][1]})
            this.setState({wAlt: herodat['subAbilities'][0]['ValeeraStealth|ValeeraStealth|Trait']['basic'][2]})
        }

        this.setState({component: true})
    }
    
    render() {
        return (
            this.state.component ?
            <div>
                <div id='HeroTitle'>{this.state.data['name']}, {this.state.data['title']}</div>
                <div id='skills'>             
                    <HeroSkill
                        value={this.state.data['abilities']['trait'][0]}
                        button='D'
                    />

                    <HeroSkill
                        value={this.state.data['abilities']['basic'][0]}
                        button='Q'
                    />

                    <HeroSkill
                        value={this.state.data['abilities']['basic'][1]}
                        button='W'
                    />

                    <HeroSkill
                        value={this.state.data['abilities']['basic'][2]}
                        button='E'
                    />

                    <HeroSkill
                        value={this.state.data['abilities']['heroic'][0]}
                        style={{'display': this.state.singleHeroic ? 'block' : 'none'}}
                        button='R'
                    />
                    <HeroSkill
                        value={this.state.hasActivable ? this.state.data['abilities']['activable'][0] : undefined}
                        style={{'display': this.state.hasActivable ? 'block' : 'none'}}
                        button='1'
                    />
                    <HeroSkill
                        value={this.state.isViking ? this.state.data['abilities']['activable'][1] : undefined}
                        style={{'display': this.state.isViking ? 'block' : 'none'}}
                        button='2'
                    />
                    <HeroSkill
                        value={this.state.isViking ? this.state.data['abilities']['activable'][2] : undefined}
                        style={{'display': this.state.isViking ? 'block' : 'none'}}
                        button='3'
                    />
                    <HeroSkill
                        value={this.state.isViking ? this.state.data['abilities']['activable'][3] : undefined}
                        style={{'display': this.state.isViking ? 'block' : 'none'}}
                        button='4'
                    />
                    <Mount
                        value={this.state.data['abilities']['mount'][0]}
                        style={{'display': this.state.specialMount ? 'block' : 'none'}}
                        button='Z'
                    />
                    <button
                        id='showAlternativeSkills'
                        style={{'display': this.state.hasAlternative ? 'inline-block' : 'none'}}
                        onClick={() => {this.setState({showAlternativeSkills: !this.state.showAlternativeSkills})}}
                    >
                        ↓
                    </button>
                </div>
                <div
                id='alternativeSkills'
                style={{'display': this.state.showAlternativeSkills ? 'block' : 'none'}}
                >
                    
                    <HeroSkill
                        value='empty'
                    />
                    <HeroSkill
                        value={this.state.qAlt}
                        button='Q'
                    />
                    <HeroSkill
                        value={this.state.wAlt}
                        button='W'
                    />
                    <HeroSkill
                        value={this.state.eAlt}
                        button='E'
                    />
                </div>
                <div id='talents'>
                <div id='column'>
                    <Column
                        value={this.state.data['talents']['level1']}
                    />
                </div>
                <div id='column'>
                    <Column
                        value={this.state.data['talents']['level4']}
                    />
                </div>
                <div id='column'>
                    <Column
                        value={this.state.data['talents']['level7']}
                    />
                </div>
                <div id='column'>
                    <Column
                        value={this.state.data['talents']['level10']}
                    />
                </div>
                <div id='column'>
                    <Column
                        value={this.state.data['talents']['level13']}
                    />
                </div>
                <div id='column'>
                    <Column
                        value={this.state.data['talents']['level16']}
                    />
                </div>
                <div id='column'>
                    <Column
                        value={this.state.data['talents']['level20']}
                    />
                </div>
            </div>
            </div>

            : <div></div>
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
                {this.props.button}
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
                cooldown = this.props.value['cooldownTooltip'].replace('<n/>', ', ')
            } else {cooldown = undefined}
        }

        const Tooltip = {
            'display': this.state.hover ? 'block' : 'none',
            'position': 'absolute',
            'backgroundColor': 'white',
            'width': '450px',
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
                    {this.props.button}
                </div>
            )
        }
    }
}
//SkillImage will return the image of a given skill, talent url
class SkillImage extends React.Component {


    render() {
        var imagesource='http://localhost:3000/files/images/abilitytalents/' + this.props.value
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
        var lineBreaked = []
        for (let line in this.props.value.split("<n/>")) {lineBreaked.push(this.props.value.split("<n/>")[line], <br/>)}
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
                {lineBreaked}
                
            </div>
            )
        
    }
}
//TopBar will be the top bar
class TopBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false,
            language: lang,
        }
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
        
        return(
            <div
                id='TopBar'
            >
                <Link
                    to={'/'}
                    id='HomeButton'
                >
                    <div
                        id='Home'
                    >
                        <img
                            id='Bunker'
                            alt='Go Home'
                            src='http://localhost:3000/files/images/units/storm_temp_btn-building-terran-bunker.png'
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
                        <Link to={window.location.pathname} id='Langs' onClick={this.props.changeDEDE}>Deutsch</Link><br/>
                        <Link to={window.location.pathname} id='Langs' onClick={this.props.changeENUS}>English</Link><br/>
                        <Link to={window.location.pathname} id='Langs' onClick={this.props.changeESES}>Español(EU)</Link><br/>
                        <Link to={window.location.pathname} id='Langs' onClick={this.props.changeESMX}>Español(AL)</Link><br/>
                        <Link to={window.location.pathname} id='Langs' onClick={this.props.changeFRFR}>Français</Link><br/>
                        <Link to={window.location.pathname} id='Langs' onClick={this.props.changeITIT}>Italiano</Link><br/>
                        <Link to={window.location.pathname} id='Langs' onClick={this.props.changeKOKR}>한국어</Link><br/>
                        <Link to={window.location.pathname} id='Langs' onClick={this.props.changePLPL}>Polski</Link><br/>
                        <Link to={window.location.pathname} id='Langs' onClick={this.props.changePTBR}>Português</Link><br/>
                        <Link to={window.location.pathname} id='Langs' onClick={this.props.changeRURU}>Русский</Link><br/>
                        <Link to={window.location.pathname} id='Langs' onClick={this.props.changeZHCN}>简体中文</Link><br/>
                        <Link to={window.location.pathname} id='Langs' onClick={this.props.changeZHTW}>繁體中文</Link><br/>
                    </span>
                
                </div>

                
            </div>
        )
    }
    
}



//getHeroLink will get which hero to show
function GetHeroLink(props) {
    let { herolink } = useParams();
    let { talents } = useParams();
    if (talents === undefined) {talents = '0000000';}
    return (
        <HeroPage 
        id='HeroPage'
        link={herolink}
        language={props.language}
        />
    )
}



//RealPage will be the rendered page through react router
class RealPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            language: lang,
        }
        this.changeDEDE = this.changeDEDE.bind(this)
        this.changeENUS = this.changeENUS.bind(this)
        this.changeESES = this.changeESES.bind(this)
        this.changeESMX = this.changeESMX.bind(this)
        this.changeFRFR = this.changeFRFR.bind(this)
        this.changeITIT = this.changeITIT.bind(this)
        this.changeKOKR = this.changeKOKR.bind(this)
        this.changePLPL = this.changePLPL.bind(this)
        this.changePTBR = this.changePTBR.bind(this)
        this.changeRURU = this.changeRURU.bind(this)
        this.changeZHCN = this.changeZHCN.bind(this)
        this.changeZHTW = this.changeZHTW.bind(this)
    }
    changeDEDE() {
        this.setState({
            language: 'dede'
        })
    }
    changeENUS() {
        this.setState({
            language: 'enus'
        })
    }
    changeESES() {
        this.setState({
            language: 'eses'
        })
    }
    changeESMX() {
        this.setState({
            language: 'esmx'
        })
    }
    changeFRFR() {
        this.setState({
            language: 'frfr'
        })
    }
    changeITIT() {
        this.setState({
            language: 'itit'
        })
    }
    changeKOKR() {
        this.setState({
            language: 'kokr'
        })
    }
    changePLPL() {
        this.setState({
            language: 'plpl'
        })
    }
    changePTBR() {
        this.setState({
            language: 'ptbr'
        })
    }
    changeRURU() {
        this.setState({
            language: 'ruru'
        })
    }
    changeZHCN() {
        this.setState({
            language: 'zhcn'
        })
    }
    changeZHTW() {
        this.setState({
            language: 'zhtw'
        })
    }

    render() {
        return (
            <Router>
                <div>
                    <TopBar 
                        changeDEDE={this.changeDEDE}
                        changeENUS={this.changeENUS}
                        changeESES={this.changeESES}
                        changeESMX={this.changeESMX}
                        changeFRFR={this.changeFRFR}
                        changeITIT={this.changeITIT}
                        changeKOKR={this.changeKOKR}
                        changePLPL={this.changePLPL}
                        changePTBR={this.changePTBR}
                        changeRURU={this.changeRURU}
                        changeZHCN={this.changeZHCN}
                        changeZHTW={this.changeZHTW}
                        />
                    <Switch>
                        <Route exact path="/">
                            <MainPage
                            language={this.state.language}
                            />
                        </Route>
                        <Route exact path="/:herolink/:talents" children={<GetHeroLink language={this.state.language}/>}/>
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
