(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,a){e.exports=a(25)},25:function(e,t,a){"use strict";a.r(t);var n,i,s,l,o=a(3),r=a(15),c=a.n(r),h=a(6),u=a(7),p=a(9),d=a(8),b=a(10),v=a(0),g=a.n(v),m=a(21),E=a.n(m),S=(a(31),a(2)),y=a(5),f="enus",O=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={language:void 0,page:void 0},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e;return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return f=void 0===this.props.language?(navigator.language||navigator.userLanguage).toLowerCase().replace("-",""):this.props.language,this.setState({language:f}),t.next=4,c.a.awrap(fetch("%PUBLIC_URL%/files/json/herodata_77692_"+f+".json").then((function(e){return e.json()})).then((function(t){e=t})));case 4:this.setState({page:j(e)});case 5:case"end":return t.stop()}}),null,this)}},{key:"componentDidUpdate",value:function(){f!==this.props.language&&(this.componentDidMount(),this.render())}},{key:"render",value:function(){return void 0!==this.state.page?this.state.page:null}}]),t}(g.a.Component),k=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e="%PUBLIC_URL%/files/images/heroportraits/"+this.props.value;return g.a.createElement("h1",{className:"Portrait"},g.a.createElement("img",{src:e,width:"92",height:"93",alt:"new"}))}}]),t}(g.a.Component),w=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return g.a.createElement("button",{className:"Hero"},g.a.createElement(S.b,{to:"/"+this.props.value.herolink+"/0000000"},g.a.createElement(k,{value:this.props.value.portraitlink}),this.props.name))}}]),t}(g.a.Component);function j(e){var t=[];for(var a in e)e.hasOwnProperty(a)&&t.push(g.a.createElement(w,{key:e[a].name,value:{herolink:a,portraitlink:e[a].portraits.target},name:e[a].name}));return g.a.createElement("div",null,t)}var A=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={data:void 0,singleHeroic:!1,hasActivable:!0,specialMount:!1,isViking:!1,hasAlternative:!1,qAlt:"empty",wAlt:"empty",eAlt:"empty",showAlternativeSkills:!1,component:!1},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){f!==this.props.language&&(this.componentDidMount(),this.render())}},{key:"componentDidMount",value:function(){var e,t=this;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return f=void 0===this.props.language?(navigator.language||navigator.userLanguage).toLowerCase().replace("-",""):this.props.language,a.next=3,c.a.awrap(fetch("%PUBLIC_URL%/files/json/herodata_77692_"+f+".json").then((function(e){return e.json()})).then((function(a){e=a[t.props.link]})));case 3:this.setState({data:e}),"HeroDeathwing"!==e.unitId&&"HeroTracer"!==e.unitId||this.setState({singleHeroic:!0}),void 0===e.abilities.activable&&this.setState({hasActivable:!1}),"Mount"!==e.abilities.mount[0].nameId&&this.setState({specialMount:!0}),"HeroLostVikingsController"===e.unitId&&this.setState({isViking:!0}),"HeroSamuro"===e.unitId&&this.setState({hasActivable:!1}),"HeroAbathur"===e.unitId&&(this.setState({hasAlternative:!0}),this.setState({qAlt:e.heroUnits[0].AbathurSymbiote.abilities.basic[0]}),this.setState({wAlt:e.heroUnits[0].AbathurSymbiote.abilities.basic[1]}),this.setState({eAlt:e.heroUnits[0].AbathurSymbiote.abilities.basic[2]})),"HeroAlexstrasza"===e.unitId&&(this.setState({hasAlternative:!0}),this.setState({qAlt:e.heroUnits[0].HeroAlexstraszaDragon.abilities.basic[0]}),this.setState({wAlt:e.heroUnits[0].HeroAlexstraszaDragon.abilities.basic[1]}),this.setState({eAlt:e.heroUnits[0].HeroAlexstraszaDragon.abilities.basic[2]})),"HeroChen"===e.unitId&&(this.setState({hasAlternative:!0}),this.setState({qAlt:e.subAbilities[0]["ChenStormEarthFire|ChenStormEarthFire|Heroic"].basic[0]}),this.setState({wAlt:e.subAbilities[0]["ChenStormEarthFire|ChenStormEarthFire|Heroic"].basic[1]}),this.setState({eAlt:e.subAbilities[0]["ChenStormEarthFire|ChenStormEarthFire|Heroic"].basic[2]})),"HeroDeathwing"===e.unitId&&(this.setState({hasAlternative:!0}),this.setState({wAlt:e.subAbilities[0]["DeathwingFormSwitch|DeathwingFormSwitch|Active"].basic[0]}),this.setState({eAlt:e.subAbilities[0]["DeathwingFormSwitch|DeathwingFormSwitch|Active"].basic[1]})),"HeroDVaMech"===e.unitId&&(this.setState({hasAlternative:!0}),this.setState({eAlt:e.heroUnits[0].HeroDVaPilot.abilities.basic[2]})),"HeroGreymane"===e.unitId&&(this.setState({hasAlternative:!0}),this.setState({qAlt:e.subAbilities[0]["GreymaneWorgenForm|GreymaneWorgenForm|Trait|True"].basic[0]}),this.setState({eAlt:e.subAbilities[0]["GreymaneWorgenForm|GreymaneWorgenForm|Trait|True"].basic[1]})),"HeroLeoric"===e.unitId&&(this.setState({hasAlternative:!0}),this.setState({qAlt:e.subAbilities[0]["LeoricUndyingTrait|LeoricUndyingTrait|Trait|True"].basic[0]}),this.setState({wAlt:e.subAbilities[0]["LeoricUndyingTrait|LeoricUndyingTrait|Trait|True"].basic[1]})),"HeroRagnaros"===e.unitId&&(this.setState({hasAlternative:!0}),this.setState({qAlt:e.heroUnits[0].RagnarosBigRag.abilities.basic[0]}),this.setState({wAlt:e.heroUnits[0].RagnarosBigRag.abilities.basic[1]}),this.setState({eAlt:e.heroUnits[0].RagnarosBigRag.abilities.basic[2]})),"HeroUther"===e.unitId&&(this.setState({hasAlternative:!0}),this.setState({qAlt:e.subAbilities[0]["UtherEternalDevotion|UtherEternalDevotion|Trait"].basic[0]})),"HeroValeera"===e.unitId&&(this.setState({hasAlternative:!0}),this.setState({qAlt:e.subAbilities[0]["ValeeraStealth|ValeeraStealth|Trait"].basic[0]}),this.setState({wAlt:e.subAbilities[0]["ValeeraStealth|ValeeraStealth|Trait"].basic[1]}),this.setState({wAlt:e.subAbilities[0]["ValeeraStealth|ValeeraStealth|Trait"].basic[2]})),this.setState({component:!0});case 20:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){var e=this;return this.state.component?g.a.createElement("div",null,g.a.createElement("div",{id:"HeroTitle"},this.state.data.name,", ",this.state.data.title),g.a.createElement("div",{id:"skills"},g.a.createElement(C,{value:this.state.data.abilities.trait[0],button:"D"}),g.a.createElement(C,{value:this.state.data.abilities.basic[0],button:"Q"}),g.a.createElement(C,{value:this.state.data.abilities.basic[1],button:"W"}),g.a.createElement(C,{value:this.state.data.abilities.basic[2],button:"E"}),g.a.createElement(C,{value:this.state.data.abilities.heroic[0],style:{display:this.state.singleHeroic?"block":"none"},button:"R"}),g.a.createElement(C,{value:this.state.hasActivable?this.state.data.abilities.activable[0]:void 0,style:{display:this.state.hasActivable?"block":"none"},button:"1"}),g.a.createElement(C,{value:this.state.isViking?this.state.data.abilities.activable[1]:void 0,style:{display:this.state.isViking?"block":"none"},button:"2"}),g.a.createElement(C,{value:this.state.isViking?this.state.data.abilities.activable[2]:void 0,style:{display:this.state.isViking?"block":"none"},button:"3"}),g.a.createElement(C,{value:this.state.isViking?this.state.data.abilities.activable[3]:void 0,style:{display:this.state.isViking?"block":"none"},button:"4"}),g.a.createElement(T,{value:this.state.data.abilities.mount[0],style:{display:this.state.specialMount?"block":"none"},button:"Z"}),g.a.createElement("button",{id:"showAlternativeSkills",style:{display:this.state.hasAlternative?"inline-block":"none"},onClick:function(){e.setState({showAlternativeSkills:!e.state.showAlternativeSkills})}},"\u2193")),g.a.createElement("div",{id:"alternativeSkills",style:{display:this.state.showAlternativeSkills?"block":"none"}},g.a.createElement(C,{value:"empty"}),g.a.createElement(C,{value:this.state.qAlt,button:"Q"}),g.a.createElement(C,{value:this.state.wAlt,button:"W"}),g.a.createElement(C,{value:this.state.eAlt,button:"E"})),g.a.createElement("div",{id:"talents"},g.a.createElement("div",{id:"column"},g.a.createElement(L,{value:this.state.data.talents.level1})),g.a.createElement("div",{id:"column"},g.a.createElement(L,{value:this.state.data.talents.level4})),g.a.createElement("div",{id:"column"},g.a.createElement(L,{value:this.state.data.talents.level7})),g.a.createElement("div",{id:"column"},g.a.createElement(L,{value:this.state.data.talents.level10})),g.a.createElement("div",{id:"column"},g.a.createElement(L,{value:this.state.data.talents.level13})),g.a.createElement("div",{id:"column"},g.a.createElement(L,{value:this.state.data.talents.level16})),g.a.createElement("div",{id:"column"},g.a.createElement(L,{value:this.state.data.talents.level20})))):g.a.createElement("div",null)}}]),t}(g.a.Component),T=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={hover:!1},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;void 0!==this.props.value&&(n=this.props.value.hasOwnProperty("cooldownTooltip")?this.props.value.cooldownTooltip:void 0);var t={display:this.state.hover?"block":"none",position:"absolute",backgroundColor:"white",width:"400px",borderStyle:"solid",borderColor:"grey",padding:"3px",zIndex:"99999"};return g.a.createElement("div",{id:"mount",style:this.props.style,onMouseOver:function(){return e.setState({hover:!0})},onMouseOut:function(){return e.setState({hover:!1})}},g.a.createElement(R,{value:this.props.value.icon,id:this.props.value.nameId,name:this.props.value.name,description:this.props.value.fullTooltip}),g.a.createElement("span",{id:"tooltip",style:t},g.a.createElement(H,{name:this.props.value.name,energycost:i,lifecost:s,cooldown:n,value:this.props.value.fullTooltip})),this.props.button)}}]),t}(g.a.Component),C=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={hover:!1},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;void 0!==this.props.value&&(i=this.props.value.hasOwnProperty("energyTooltip")?this.props.value.energyTooltip:void 0,s=this.props.value.hasOwnProperty("lifeTooltip")?this.props.value.lifeTooltip:void 0,n=this.props.value.hasOwnProperty("cooldownTooltip")?this.props.value.cooldownTooltip.replace("<n/>",", "):void 0);var t={display:this.state.hover?"block":"none",position:"absolute",backgroundColor:"white",width:"450px",borderStyle:"solid",borderColor:"grey",padding:"3px",zIndex:"99999"};return"empty"===this.props.value?g.a.createElement("div",{id:"emptySkill"}):void 0===this.props.value?g.a.createElement("div",{id:"skill",style:this.props.style},g.a.createElement(R,{value:"hud_btn_bg_ability_cancel.png",id:"undefined",name:"undefined",description:"Skill does not exist"})):g.a.createElement("div",{id:"skill",style:this.props.style,onMouseOver:function(){return e.setState({hover:!0})},onMouseOut:function(){return e.setState({hover:!1})}},g.a.createElement(R,{value:this.props.value.icon,id:this.props.value.nameId,name:this.props.value.name,description:this.props.value.fullTooltip}),g.a.createElement("span",{id:"tooltip",style:t},g.a.createElement(H,{name:this.props.value.name,energycost:i,lifecost:s,cooldown:n,value:this.props.value.fullTooltip})),this.props.button)}}]),t}(g.a.Component),R=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e="%PUBLIC_URL%/files/images/abilitytalents/"+this.props.value;return g.a.createElement("img",{src:e,width:"100",height:"100",alt:"new"})}}]),t}(g.a.Component),L=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=[];for(var t in this.props.value)e.push(g.a.createElement(U,{key:this.props.value[t].nameId,value:this.props.value[t]}));return e}}]),t}(g.a.Component),U=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={hover:!1},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;i=this.props.value.hasOwnProperty("energyTooltip")?this.props.value.energyTooltip:void 0,s=this.props.value.hasOwnProperty("lifeTooltip")?this.props.value.lifeTooltip:void 0,n=this.props.value.hasOwnProperty("cooldownTooltip")?this.props.value.cooldownTooltip:void 0;var t={display:this.state.hover?"block":"none",position:"absolute",backgroundColor:"white",width:"400px",borderStyle:"solid",borderColor:"grey",padding:"3px",zIndex:"99999"};return g.a.createElement("div",{id:"talent",onMouseOver:function(){return e.setState({hover:!0})},onMouseOut:function(){return e.setState({hover:!1})}},g.a.createElement(R,{value:this.props.value.icon}),g.a.createElement("span",{id:"tooltip",style:t},g.a.createElement(H,{name:this.props.value.name,energycost:i,lifecost:s,cooldown:n,value:this.props.value.fullTooltip})))}}]),t}(g.a.Component),H=function(e){function t(){return Object(h.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){l=void 0===this.props.energycost&&void 0===this.props.lifecost&&void 0===this.props.cooldown?{display:"none"}:{display:"block"};var e=[];for(var t in this.props.value.split("<n/>"))e.push(this.props.value.split("<n/>")[t],g.a.createElement("br",null));return g.a.createElement("div",null,g.a.createElement("div",{id:"discriptionTitle"},this.props.name),g.a.createElement("div",{id:"necessity",style:l},g.a.createElement("div",{id:"costs"},this.props.energycost,this.props.lifecost),g.a.createElement("div",{id:"cooldown"},this.props.cooldown)),e)}}]),t}(g.a.Component),I=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={hover:!1,language:f},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t={display:this.state.hover?"block":"none",position:"absolute",backgroundColor:"white",width:"auto",borderStyle:"solid",borderColor:"grey",padding:"3px",zIndex:"99999"};return g.a.createElement("div",{id:"TopBar"},g.a.createElement(S.b,{to:"/SILVER",id:"HomeButton"},g.a.createElement("div",{id:"Home"},g.a.createElement("img",{id:"Bunker",alt:"Go Home",src:"%PUBLIC_URL%/files/images/units/storm_temp_btn-building-terran-bunker.png"})),"Silver City"),g.a.createElement("div",{id:"Languages",onMouseOver:function(){return e.setState({hover:!0})},onMouseOut:function(){return e.setState({hover:!1})}},"LANG",g.a.createElement("span",{style:t},g.a.createElement(S.b,{to:window.location.pathname,id:"Langs",onClick:this.props.changeDEDE},"Deutsch"),g.a.createElement("br",null),g.a.createElement(S.b,{to:window.location.pathname,id:"Langs",onClick:this.props.changeENUS},"English"),g.a.createElement("br",null),g.a.createElement(S.b,{to:window.location.pathname,id:"Langs",onClick:this.props.changeESES},"Espa\xf1ol(EU)"),g.a.createElement("br",null),g.a.createElement(S.b,{to:window.location.pathname,id:"Langs",onClick:this.props.changeESMX},"Espa\xf1ol(AL)"),g.a.createElement("br",null),g.a.createElement(S.b,{to:window.location.pathname,id:"Langs",onClick:this.props.changeFRFR},"Fran\xe7ais"),g.a.createElement("br",null),g.a.createElement(S.b,{to:window.location.pathname,id:"Langs",onClick:this.props.changeITIT},"Italiano"),g.a.createElement("br",null),g.a.createElement(S.b,{to:window.location.pathname,id:"Langs",onClick:this.props.changeKOKR},"\ud55c\uad6d\uc5b4"),g.a.createElement("br",null),g.a.createElement(S.b,{to:window.location.pathname,id:"Langs",onClick:this.props.changePLPL},"Polski"),g.a.createElement("br",null),g.a.createElement(S.b,{to:window.location.pathname,id:"Langs",onClick:this.props.changePTBR},"Portugu\xeas"),g.a.createElement("br",null),g.a.createElement(S.b,{to:window.location.pathname,id:"Langs",onClick:this.props.changeRURU},"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"),g.a.createElement("br",null),g.a.createElement(S.b,{to:window.location.pathname,id:"Langs",onClick:this.props.changeZHCN},"\u7b80\u4f53\u4e2d\u6587"),g.a.createElement("br",null),g.a.createElement(S.b,{to:window.location.pathname,id:"Langs",onClick:this.props.changeZHTW},"\u7e41\u9ad4\u4e2d\u6587"),g.a.createElement("br",null))))}}]),t}(g.a.Component);function P(e){var t=Object(y.f)().herolink,a=Object(y.f)().talents;return void 0===a&&(a="0000000"),g.a.createElement(A,{id:"HeroPage",link:t,language:e.language})}var D=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={language:f},a.changeDEDE=a.changeDEDE.bind(Object(o.a)(a)),a.changeENUS=a.changeENUS.bind(Object(o.a)(a)),a.changeESES=a.changeESES.bind(Object(o.a)(a)),a.changeESMX=a.changeESMX.bind(Object(o.a)(a)),a.changeFRFR=a.changeFRFR.bind(Object(o.a)(a)),a.changeITIT=a.changeITIT.bind(Object(o.a)(a)),a.changeKOKR=a.changeKOKR.bind(Object(o.a)(a)),a.changePLPL=a.changePLPL.bind(Object(o.a)(a)),a.changePTBR=a.changePTBR.bind(Object(o.a)(a)),a.changeRURU=a.changeRURU.bind(Object(o.a)(a)),a.changeZHCN=a.changeZHCN.bind(Object(o.a)(a)),a.changeZHTW=a.changeZHTW.bind(Object(o.a)(a)),a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"changeDEDE",value:function(){this.setState({language:"dede"})}},{key:"changeENUS",value:function(){this.setState({language:"enus"})}},{key:"changeESES",value:function(){this.setState({language:"eses"})}},{key:"changeESMX",value:function(){this.setState({language:"esmx"})}},{key:"changeFRFR",value:function(){this.setState({language:"frfr"})}},{key:"changeITIT",value:function(){this.setState({language:"itit"})}},{key:"changeKOKR",value:function(){this.setState({language:"kokr"})}},{key:"changePLPL",value:function(){this.setState({language:"plpl"})}},{key:"changePTBR",value:function(){this.setState({language:"ptbr"})}},{key:"changeRURU",value:function(){this.setState({language:"ruru"})}},{key:"changeZHCN",value:function(){this.setState({language:"zhcn"})}},{key:"changeZHTW",value:function(){this.setState({language:"zhtw"})}},{key:"render",value:function(){return g.a.createElement(S.a,null,g.a.createElement("div",null,g.a.createElement(I,{changeDEDE:this.changeDEDE,changeENUS:this.changeENUS,changeESES:this.changeESES,changeESMX:this.changeESMX,changeFRFR:this.changeFRFR,changeITIT:this.changeITIT,changeKOKR:this.changeKOKR,changePLPL:this.changePLPL,changePTBR:this.changePTBR,changeRURU:this.changeRURU,changeZHCN:this.changeZHCN,changeZHTW:this.changeZHTW}),g.a.createElement(y.c,null,g.a.createElement(y.a,{exact:!0,path:"/"},g.a.createElement(O,{language:this.state.language})),g.a.createElement(y.a,{exact:!0,path:"/:herolink/:talents",children:g.a.createElement(P,{language:this.state.language})}))))}}]),t}(g.a.Component);E.a.render(g.a.createElement(D,null),document.getElementById("root"))},31:function(e,t,a){}},[[24,1,2]]]);
//# sourceMappingURL=main.ac9078ba.chunk.js.map