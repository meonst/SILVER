(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,a){e.exports=a(25)},25:function(e,t,a){"use strict";a.r(t);var i,n,s,r,o,l=a(2),c=a(14),h=a.n(c),u=a(5),p=a(6),d=a(8),b=a(7),v=a(9),g=a(0),m=a.n(g),E=a(21),S=a.n(E),y=(a(31),a(15)),f=a(3),k="enus",O=[];O[0]={borderColor:"whitesmoke"},O[1]={borderColor:"gold"},O[2]={borderColor:"silver"},O[3]={borderColor:"red"};var j=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={language:void 0,page:void 0},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e;return h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return k=void 0===this.props.language?(navigator.language||navigator.userLanguage).toLowerCase().replace("-",""):this.props.language,this.setState({language:k}),t.next=4,h.a.awrap(fetch("https://min.hyeok.org/SILVER/files/json/herodata_77692_"+k+".json").then((function(e){return e.json()})).then((function(t){e=t})));case 4:this.setState({page:T(e)});case 5:case"end":return t.stop()}}),null,this)}},{key:"componentDidUpdate",value:function(){k!==this.props.language&&(this.componentDidMount(),this.render())}},{key:"render",value:function(){return void 0!==this.state.page?this.state.page:null}}]),t}(m.a.Component),A=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e="https://min.hyeok.org/SILVER/files/images/heroportraits/"+this.props.value;return m.a.createElement("h1",{className:"Portrait"},m.a.createElement("img",{src:e,width:"92",height:"93",alt:"new"}))}}]),t}(m.a.Component),w=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return m.a.createElement("button",{className:"Hero"},m.a.createElement(y.b,{to:"/"+this.props.value.herolink},m.a.createElement(A,{value:this.props.value.portraitlink}),this.props.name))}}]),t}(m.a.Component);function T(e){var t=[];for(var a in e)e.hasOwnProperty(a)&&t.push(m.a.createElement(w,{key:e[a].name,value:{herolink:a,portraitlink:e[a].portraits.target},name:e[a].name}));return m.a.createElement("div",null,t)}var C=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={data:void 0,singleHeroic:!1,hasActivable:!0,specialMount:!1,isViking:!1,hasAlternative:!1,qAlt:"empty",wAlt:"empty",eAlt:"empty",showAlternativeSkills:!1,component:!1},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(){k!==this.props.language&&(this.componentDidMount(),this.render())}},{key:"componentDidMount",value:function(){var e,t=this;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return k=void 0===this.props.language?(navigator.language||navigator.userLanguage).toLowerCase().replace("-",""):this.props.language,a.next=3,h.a.awrap(fetch("https://min.hyeok.org/SILVER/files/json/herodata_77692_"+k+".json").then((function(e){return e.json()})).then((function(a){e=a[t.props.link]})));case 3:this.setState({data:e}),"HeroDeathwing"!==e.unitId&&"HeroTracer"!==e.unitId||this.setState({singleHeroic:!0}),void 0===e.abilities.activable&&this.setState({hasActivable:!1}),"Mount"!==e.abilities.mount[0].nameId&&this.setState({specialMount:!0}),"HeroLostVikingsController"===e.unitId&&this.setState({isViking:!0}),"HeroSamuro"===e.unitId&&this.setState({hasActivable:!1}),"HeroAbathur"===e.unitId&&(this.setState({hasAlternative:!0}),this.setState({qAlt:e.heroUnits[0].AbathurSymbiote.abilities.basic[0]}),this.setState({wAlt:e.heroUnits[0].AbathurSymbiote.abilities.basic[1]}),this.setState({eAlt:e.heroUnits[0].AbathurSymbiote.abilities.basic[2]})),"HeroAlexstrasza"===e.unitId&&(this.setState({hasAlternative:!0}),this.setState({qAlt:e.heroUnits[0].HeroAlexstraszaDragon.abilities.basic[0]}),this.setState({wAlt:e.heroUnits[0].HeroAlexstraszaDragon.abilities.basic[1]}),this.setState({eAlt:e.heroUnits[0].HeroAlexstraszaDragon.abilities.basic[2]})),"HeroChen"===e.unitId&&(this.setState({hasAlternative:!0}),this.setState({qAlt:e.subAbilities[0]["ChenStormEarthFire|ChenStormEarthFire|Heroic"].basic[0]}),this.setState({wAlt:e.subAbilities[0]["ChenStormEarthFire|ChenStormEarthFire|Heroic"].basic[1]}),this.setState({eAlt:e.subAbilities[0]["ChenStormEarthFire|ChenStormEarthFire|Heroic"].basic[2]})),"HeroDeathwing"===e.unitId&&(this.setState({hasAlternative:!0}),this.setState({wAlt:e.subAbilities[0]["DeathwingFormSwitch|DeathwingFormSwitch|Active"].basic[0]}),this.setState({eAlt:e.subAbilities[0]["DeathwingFormSwitch|DeathwingFormSwitch|Active"].basic[1]})),"HeroDVaMech"===e.unitId&&(this.setState({hasAlternative:!0}),this.setState({eAlt:e.heroUnits[0].HeroDVaPilot.abilities.basic[2]})),"HeroGreymane"===e.unitId&&(this.setState({hasAlternative:!0}),this.setState({qAlt:e.subAbilities[0]["GreymaneWorgenForm|GreymaneWorgenForm|Trait|True"].basic[0]}),this.setState({eAlt:e.subAbilities[0]["GreymaneWorgenForm|GreymaneWorgenForm|Trait|True"].basic[1]})),"HeroLeoric"===e.unitId&&(this.setState({hasAlternative:!0}),this.setState({qAlt:e.subAbilities[0]["LeoricUndyingTrait|LeoricUndyingTrait|Trait|True"].basic[0]}),this.setState({wAlt:e.subAbilities[0]["LeoricUndyingTrait|LeoricUndyingTrait|Trait|True"].basic[1]})),"HeroRagnaros"===e.unitId&&(this.setState({hasAlternative:!0}),this.setState({qAlt:e.heroUnits[0].RagnarosBigRag.abilities.basic[0]}),this.setState({wAlt:e.heroUnits[0].RagnarosBigRag.abilities.basic[1]}),this.setState({eAlt:e.heroUnits[0].RagnarosBigRag.abilities.basic[2]})),"HeroUther"===e.unitId&&(this.setState({hasAlternative:!0}),this.setState({qAlt:e.subAbilities[0]["UtherEternalDevotion|UtherEternalDevotion|Trait"].basic[0]})),"HeroValeera"===e.unitId&&(this.setState({hasAlternative:!0}),this.setState({qAlt:e.subAbilities[0]["ValeeraStealth|ValeeraStealth|Trait"].basic[0]}),this.setState({wAlt:e.subAbilities[0]["ValeeraStealth|ValeeraStealth|Trait"].basic[1]}),this.setState({eAlt:e.subAbilities[0]["ValeeraStealth|ValeeraStealth|Trait"].basic[2]})),this.setState({component:!0});case 20:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this;return this.state.component?m.a.createElement("div",null,m.a.createElement("div",{id:"HeroTitle"},this.state.data.name,", ",this.state.data.title),m.a.createElement("div",{id:"skills"},m.a.createElement(L,{value:this.state.data.abilities.trait[0],button:"D"}),m.a.createElement(L,{value:this.state.data.abilities.basic[0],button:"Q"}),m.a.createElement(L,{value:this.state.data.abilities.basic[1],button:"W"}),m.a.createElement(L,{value:this.state.data.abilities.basic[2],button:"E"}),m.a.createElement(L,{value:this.state.data.abilities.heroic[0],style:{display:this.state.singleHeroic?"block":"none"},button:"R"}),m.a.createElement(L,{value:this.state.hasActivable?this.state.data.abilities.activable[0]:void 0,style:{display:this.state.hasActivable?"block":"none"},button:"1"}),m.a.createElement(L,{value:this.state.isViking?this.state.data.abilities.activable[1]:void 0,style:{display:this.state.isViking?"block":"none"},button:"2"}),m.a.createElement(L,{value:this.state.isViking?this.state.data.abilities.activable[2]:void 0,style:{display:this.state.isViking?"block":"none"},button:"3"}),m.a.createElement(L,{value:this.state.isViking?this.state.data.abilities.activable[3]:void 0,style:{display:this.state.isViking?"block":"none"},button:"4"}),m.a.createElement(R,{value:this.state.data.abilities.mount[0],style:{display:this.state.specialMount?"block":"none"},button:"Z"}),m.a.createElement("button",{id:"showAlternativeSkills",style:{display:this.state.hasAlternative?"inline-block":"none"},onClick:function(){e.setState({showAlternativeSkills:!e.state.showAlternativeSkills})}},"\u2193")),m.a.createElement("div",{id:"alternativeSkills",style:{display:this.state.showAlternativeSkills?"block":"none"}},m.a.createElement(L,{value:"empty"}),m.a.createElement(L,{value:this.state.qAlt,button:"Q"}),m.a.createElement(L,{value:this.state.wAlt,button:"W"}),m.a.createElement(L,{value:this.state.eAlt,button:"E"})),m.a.createElement("div",{id:"talents"},m.a.createElement("div",{id:"column"},m.a.createElement(I,{value:this.state.data.talents.level1,tier:1})),m.a.createElement("div",{id:"column"},m.a.createElement(I,{value:this.state.data.talents.level4,tier:2})),m.a.createElement("div",{id:"column"},m.a.createElement(I,{value:this.state.data.talents.level7,tier:3})),m.a.createElement("div",{id:"column"},m.a.createElement(I,{value:this.state.data.talents.level10,tier:4})),m.a.createElement("div",{id:"column"},m.a.createElement(I,{value:this.state.data.talents.level13,tier:5})),m.a.createElement("div",{id:"column"},m.a.createElement(I,{value:this.state.data.talents.level16,tier:6})),m.a.createElement("div",{id:"column"},m.a.createElement(I,{value:this.state.data.talents.level20,tier:7})),m.a.createElement("button",{id:"copyLink",onClick:function(){return alert(window.location+"/"+o.join(""))}},"Copy Link"))):m.a.createElement("div",null)}}]),t}(m.a.Component),R=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={hover:!1},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;void 0!==this.props.value&&(i=this.props.value.hasOwnProperty("cooldownTooltip")?this.props.value.cooldownTooltip:void 0);var t={display:this.state.hover?"block":"none",position:"absolute",backgroundColor:"white",width:"400px",borderStyle:"solid",borderColor:"grey",padding:"3px",zIndex:"99999"};return m.a.createElement("div",{id:"mount",style:this.props.style,onMouseOver:function(){return e.setState({hover:!0})},onMouseOut:function(){return e.setState({hover:!1})}},m.a.createElement(H,{value:this.props.value.icon,id:this.props.value.nameId,name:this.props.value.name,description:this.props.value.fullTooltip}),m.a.createElement("span",{id:"tooltip",style:t},m.a.createElement(D,{name:this.props.value.name,energycost:n,lifecost:s,cooldown:i,value:this.props.value.fullTooltip})),this.props.button)}}]),t}(m.a.Component),L=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={hover:!1},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;void 0!==this.props.value&&(n=this.props.value.hasOwnProperty("energyTooltip")?this.props.value.energyTooltip:void 0,s=this.props.value.hasOwnProperty("lifeTooltip")?this.props.value.lifeTooltip:void 0,i=this.props.value.hasOwnProperty("cooldownTooltip")?this.props.value.cooldownTooltip.replace("<n/>",", "):void 0);var t={display:this.state.hover?"block":"none",position:"absolute",backgroundColor:"white",width:"450px",borderStyle:"solid",borderColor:"grey",padding:"3px",zIndex:"99999"};return"empty"===this.props.value?m.a.createElement("div",{id:"emptySkill"}):void 0===this.props.value?m.a.createElement("div",{id:"skill",style:this.props.style},m.a.createElement(H,{value:"hud_btn_bg_ability_cancel.png",id:"undefined",name:"undefined",description:"Skill does not exist"})):m.a.createElement("div",{id:"skill",style:this.props.style,onMouseOver:function(){return e.setState({hover:!0})},onMouseOut:function(){return e.setState({hover:!1})}},m.a.createElement(H,{value:this.props.value.icon,id:this.props.value.nameId,name:this.props.value.name,description:this.props.value.fullTooltip}),m.a.createElement("span",{id:"tooltip",style:t},m.a.createElement(D,{name:this.props.value.name,energycost:n,lifecost:s,cooldown:i,value:this.props.value.fullTooltip})),this.props.button)}}]),t}(m.a.Component),H=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e="https://min.hyeok.org/SILVER/files/images/abilitytalents/"+this.props.value;return m.a.createElement("img",{src:e,width:"100",height:"100",alt:"new"})}}]),t}(m.a.Component),I=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=[];for(var t in this.props.value)e.push(m.a.createElement(U,{key:this.props.value[t].nameId,value:this.props.value[t],tier:this.props.tier}));return e}}]),t}(m.a.Component),U=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={hover:!1},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"changeState",value:function(){o[5*this.props.tier+this.props.value.sort-6]=String((parseInt(o[5*this.props.tier+this.props.value.sort-6],10)+1)%4),console.log(o)}},{key:"render",value:function(){var e=this;console.log(this.props.tier,this.props.value.sort),n=this.props.value.hasOwnProperty("energyTooltip")?this.props.value.energyTooltip:void 0,s=this.props.value.hasOwnProperty("lifeTooltip")?this.props.value.lifeTooltip:void 0,i=this.props.value.hasOwnProperty("cooldownTooltip")?this.props.value.cooldownTooltip:void 0;var t={display:this.state.hover?"block":"none",position:"absolute",backgroundColor:"white",width:"400px",borderStyle:"solid",borderColor:"grey",padding:"3px",zIndex:"99999"};return m.a.createElement("div",{id:"talent",onMouseOver:function(){return e.setState({hover:!0})},onMouseOut:function(){return e.setState({hover:!1})},onClick:function(){return e.changeState()},style:O[o[5*this.props.tier+this.props.value.sort-6]]},m.a.createElement(H,{value:this.props.value.icon}),m.a.createElement("span",{id:"tooltip",style:t},m.a.createElement(D,{name:this.props.value.name,energycost:n,lifecost:s,cooldown:i,value:this.props.value.fullTooltip})))}}]),t}(m.a.Component),D=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){r=void 0===this.props.energycost&&void 0===this.props.lifecost&&void 0===this.props.cooldown?{display:"none"}:{display:"block"};var e=[];for(var t in this.props.value.split("<n/>"))e.push(this.props.value.split("<n/>")[t],m.a.createElement("br",null));return m.a.createElement("div",null,m.a.createElement("div",{id:"discriptionTitle"},this.props.name),m.a.createElement("div",{id:"necessity",style:r},m.a.createElement("div",{id:"costs"},this.props.energycost,this.props.lifecost),m.a.createElement("div",{id:"cooldown"},this.props.cooldown)),e)}}]),t}(m.a.Component),P=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={hover:!1,language:k},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t={display:this.state.hover?"block":"none",position:"absolute",backgroundColor:"white",width:"auto",borderStyle:"solid",borderColor:"grey",padding:"3px",zIndex:"99999"};return m.a.createElement("div",{id:"TopBar"},m.a.createElement(y.b,{to:"/",id:"HomeButton"},m.a.createElement("div",{id:"Home"},m.a.createElement("img",{id:"Bunker",alt:"Go Home",src:"https://min.hyeok.org/SILVER/files/images/units/storm_temp_btn-building-terran-bunker.png"})),"Silver City"),m.a.createElement("div",{id:"Languages",onMouseOver:function(){return e.setState({hover:!0})},onMouseOut:function(){return e.setState({hover:!1})}},"LANG",m.a.createElement("span",{style:t},m.a.createElement("button",{id:"Langs",onClick:this.props.changeDEDE},"Deutsch"),m.a.createElement("br",null),m.a.createElement("button",{id:"Langs",onClick:this.props.changeENUS},"English"),m.a.createElement("br",null),m.a.createElement("button",{id:"Langs",onClick:this.props.changeESES},"Espa\xf1ol(EU)"),m.a.createElement("br",null),m.a.createElement("button",{id:"Langs",onClick:this.props.changeESMX},"Espa\xf1ol(AL)"),m.a.createElement("br",null),m.a.createElement("button",{id:"Langs",onClick:this.props.changeFRFR},"Fran\xe7ais"),m.a.createElement("br",null),m.a.createElement("button",{id:"Langs",onClick:this.props.changeITIT},"Italiano"),m.a.createElement("br",null),m.a.createElement("button",{id:"Langs",onClick:this.props.changeKOKR},"\ud55c\uad6d\uc5b4"),m.a.createElement("br",null),m.a.createElement("button",{id:"Langs",onClick:this.props.changePLPL},"Polski"),m.a.createElement("br",null),m.a.createElement("button",{id:"Langs",onClick:this.props.changePTBR},"Portugu\xeas"),m.a.createElement("br",null),m.a.createElement("button",{id:"Langs",onClick:this.props.changeRURU},"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"),m.a.createElement("br",null),m.a.createElement("button",{id:"Langs",onClick:this.props.changeZHCN},"\u7b80\u4f53\u4e2d\u6587"),m.a.createElement("br",null),m.a.createElement("button",{id:"Langs",onClick:this.props.changeZHTW},"\u7e41\u9ad4\u4e2d\u6587"),m.a.createElement("br",null))))}}]),t}(m.a.Component);function F(e){var t=Object(f.f)().herolink,a=Object(f.f)().givenTalent;return o=void 0===a?"00000000000000000000000000000000000".split(""):35!==a.length||isNaN(a)?"00000000000000000000000000000000000".split(""):a.split(""),console.log(o),m.a.createElement(C,{id:"HeroPage",link:t,language:e.language})}var x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={language:k},a.changeDEDE=a.changeDEDE.bind(Object(l.a)(a)),a.changeENUS=a.changeENUS.bind(Object(l.a)(a)),a.changeESES=a.changeESES.bind(Object(l.a)(a)),a.changeESMX=a.changeESMX.bind(Object(l.a)(a)),a.changeFRFR=a.changeFRFR.bind(Object(l.a)(a)),a.changeITIT=a.changeITIT.bind(Object(l.a)(a)),a.changeKOKR=a.changeKOKR.bind(Object(l.a)(a)),a.changePLPL=a.changePLPL.bind(Object(l.a)(a)),a.changePTBR=a.changePTBR.bind(Object(l.a)(a)),a.changeRURU=a.changeRURU.bind(Object(l.a)(a)),a.changeZHCN=a.changeZHCN.bind(Object(l.a)(a)),a.changeZHTW=a.changeZHTW.bind(Object(l.a)(a)),a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"changeDEDE",value:function(){this.setState({language:"dede"})}},{key:"changeENUS",value:function(){this.setState({language:"enus"})}},{key:"changeESES",value:function(){this.setState({language:"eses"})}},{key:"changeESMX",value:function(){this.setState({language:"esmx"})}},{key:"changeFRFR",value:function(){this.setState({language:"frfr"})}},{key:"changeITIT",value:function(){this.setState({language:"itit"})}},{key:"changeKOKR",value:function(){this.setState({language:"kokr"})}},{key:"changePLPL",value:function(){this.setState({language:"plpl"})}},{key:"changePTBR",value:function(){this.setState({language:"ptbr"})}},{key:"changeRURU",value:function(){this.setState({language:"ruru"})}},{key:"changeZHCN",value:function(){this.setState({language:"zhcn"})}},{key:"changeZHTW",value:function(){this.setState({language:"zhtw"})}},{key:"render",value:function(){return m.a.createElement(y.a,{basename:"/"},m.a.createElement("div",null,m.a.createElement(P,{changeDEDE:this.changeDEDE,changeENUS:this.changeENUS,changeESES:this.changeESES,changeESMX:this.changeESMX,changeFRFR:this.changeFRFR,changeITIT:this.changeITIT,changeKOKR:this.changeKOKR,changePLPL:this.changePLPL,changePTBR:this.changePTBR,changeRURU:this.changeRURU,changeZHCN:this.changeZHCN,changeZHTW:this.changeZHTW}),m.a.createElement(f.c,null,m.a.createElement(f.a,{exact:!0,path:"/"},m.a.createElement(j,{language:this.state.language})),m.a.createElement(f.a,{exact:!0,path:"/:herolink/:givenTalent",children:m.a.createElement(F,{language:this.state.language})}),m.a.createElement(f.a,{exact:!0,path:"/:herolink/",children:m.a.createElement(F,{language:this.state.language})}))))}}]),t}(m.a.Component);S.a.render(m.a.createElement(x,null),document.getElementById("root"))},31:function(e,t,a){}},[[24,1,2]]]);
//# sourceMappingURL=main.6ea492e9.chunk.js.map