(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,r,t){e.exports=t(22)},17:function(e,r,t){},19:function(e,r,t){},22:function(e,r,t){"use strict";t.r(r);var s=t(0),n=t.n(s),l=t(10),o=t.n(l),a=t(11),c=t(2),i=t(3),p=t(5),m=t(4),u=t(6),g=t(1),d=(t(17),t(7)),h=function(e){function r(){return Object(c.a)(this,r),Object(p.a)(this,Object(m.a)(r).apply(this,arguments))}return Object(u.a)(r,e),Object(i.a)(r,[{key:"render",value:function(){var e;return this.props.img&&(e=this.props.img.startsWith("http")?this.props.img:"mapimgs/"+this.props.img),n.a.createElement(d.ArcherElement,{id:this.props.index,relations:this.props.relations},n.a.createElement("div",{id:this.props.index,className:"mapTile",style:{backgroundColor:"#ddd",top:this.props.style.marginTop,left:this.props.style.marginLeft}},n.a.createElement("div",{className:"mapImgContainer",style:{backgroundImage:'url("'.concat(e,'")')}}),n.a.createElement("div",{className:"mapName"},n.a.createElement("div",null,this.props.name)),n.a.createElement("div",{className:"mapDetails"},n.a.createElement("div",null,this.props.powerScrolls&&n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{src:"powerScroll.png",alt:"Power Scroll"}),this.props.powerScrolls)||""),n.a.createElement("div",null,this.props.dualScrolls&&n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{src:"dualScroll.png",alt:"Dual Scroll"}),this.props.dualScrolls)||""),this.props.scrollFragments&&n.a.createElement(n.a.Fragment,null,", Fragments: ",this.props.scrollFragments)||"")))}}]),r}(s.Component),w=(t(19),t(8)),b=function e(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(c.a)(this,e),this.bsc=r,this.bscProperties=t},S=function e(r,t){Object(c.a)(this,e),this.rune=r,this.runeProperties=t},f={prisonQuarters:0,promenade:1,toxicSewers:2,arboretum:3,ramparts:4,ancientSewers:6,corruptedPrison:5,morass:7,prisonDepths:8,ossuary:9,blackBridge:10,nest:11,insufferableCrypt:12,stiltVillage:13,fracturedShrines:14,graveyard:15,slumberingSanctuary:16,undyingShores:17,clockTower:18,forgottenSepulcher:19,cavern:20,mausoleum:21,clockRoom:22,guardiansHaven:23,highPeakCastle:24,distillery:25,infestedShipwreck:26,throneRoom:27,lighthouse:28},F={badSeed:0,fatalFalls:1,QueenAndTheSea:2},v={vine:0,teleportation:1,ram:2,spider:3},E=[{name:"Prisoners' Quarters",edges:[f.promenade],powerScrolls:2,runeProperties:[new S(v.vine,{edges:[f.toxicSewers]}),new S(v.teleportation,{edges:[f.arboretum]})],img:"./prisonersQuarters.webp",top:0,left:0},{name:"Promenade of the Condemned",edges:[f.ramparts],powerScrolls:1,dualScrolls:2,scrollFragments:0,bscProperties:[new b(1,{powerScrolls:1}),new b(3,{scrollFragments:1}),new b(4,{scrollFragments:1})],runeProperties:[new S(v.teleportation,{edges:[f.ossuary,f.morass]}),new S(v.spider,f.prisonDepths)],img:"./promenade.png",top:20,left:0},{name:"Toxic Sewers",edges:[f.ramparts],powerScrolls:1,dualScrolls:2,scrollFragments:0,bscProperties:[new b(1,{powerScrolls:1}),new b(3,{scrollFragments:2}),new b(4,{scrollFragments:1})],runeProperties:[new S(v.ram,{edges:[f.ancientSewers]}),new S(v.spider,{edges:[f.corruptedPrison]})],img:"https://static.wikia.nocookie.net/deadcells_gamepedia_en/images/f/fe/Toxic_Sewers.png/revision/latest?cb=20180829190525",top:20,left:40},{name:"Dilapidated Arboretum",edges:[f.ramparts,f.morass],powerScrolls:1,bscProperties:[new b(1,{powerScrolls:1}),new b(3,{scrollFragments:1}),new b(4,{scrollFragments:1})],runeProperties:[new S(v.spider,f.prisonDepths)],dualScrolls:2,img:"./arboretum.webp",scrollFragments:0,top:20,left:-40},{name:"Ramparts",edges:[f.blackBridge],powerScrolls:3,dualScrolls:2,scrollFragments:0,bscProperties:[new b(3,{edges:[f.insufferableCrypt]}),new b(2,{powerScrolls:1}),new b(3,{scrollFragments:1}),new b(4,{scrollFragments:1})],top:60,left:20},{name:"Corrupted Prison",edges:[f.ancientSewers],bscProperties:[new b(1,{edges:[f.ramparts]})],powerScrolls:1,top:40,left:35},{name:"Ancient Sewers",edges:[f.insufferableCrypt],powerScrolls:3,dualScrolls:2,scrollFragments:0,bscProperties:[new b(2,{powerScrolls:1}),new b(3,{scrollFragments:3}),new b(4,{scrollFragments:2})],top:60,left:40},{name:"Morass of the Banished",edges:[f.nest],powerScrolls:3,dualScrolls:2,scrollFragments:0,bscProperties:[new b(2,{powerScrolls:1}),new b(3,{scrollFragments:2}),new b(4,{scrollFragments:2})],top:60,left:-20},{name:"Prison Depths",edges:[f.morass,f.ossuary],powerScrolls:1,bscProperties:[new b(1,{edges:[f.ancientSewers]})],top:40,left:-40},{name:"Ossuary",edges:[f.blackBridge],powerScrolls:2,dualScrolls:2,scrollFragments:0,bscProperties:[new b(2,{powerScrolls:1}),new b(3,{scrollFragments:2}),new b(4,{scrollFragments:1})],top:60,left:-40},{name:"Black Bridge",edges:[f.stiltVillage,f.fracturedShrines,f.slumberingSanctuary],scrollFragments:0,bscProperties:[new b(3,{scrollFragments:2}),new b(4,{scrollFragments:1})],powerScrolls:0,top:80,left:-40},{name:"Nest",edges:[f.stiltVillage,f.fracturedShrines],scrollFragments:0,bscProperties:[new b(3,{scrollFragments:3}),new b(4,{scrollFragments:1})],runeProperties:[new S(v.spider,{edges:[f.graveyard]})],powerScrolls:0,top:80,left:0},{name:"Insufferable Crypt",edges:[f.slumberingSanctuary],scrollFragments:0,powerScrolls:0,bscProperties:[new b(3,{scrollFragments:3}),new b(4,{scrollFragments:1})],runeProperties:[new S(v.spider,{edges:[f.graveyard]})],top:80,left:40},{name:"Stilt Village",edges:[f.undyingShores,f.clockTower,f.forgottenSepulcher],powerScrolls:3,dualScrolls:1,scrollFragments:0,bscProperties:[new b(3,{powerScrolls:1}),new b(3,{scrollFragments:1}),new b(4,{scrollFragments:1})],top:100,left:-40},{name:"Fractured Shrines",edges:[f.undyingShores,f.clockTower,f.forgottenSepulcher],powerScrolls:3,dualScrolls:1,scrollFragments:0,bscProperties:[new b(3,{powerScrolls:1}),new b(3,{scrollFragments:1}),new b(4,{scrollFragments:1})],top:100,left:-20},{name:"Graveyard",edges:[f.undyingShores,f.clockTower,f.forgottenSepulcher],powerScrolls:3,dualScrolls:1,scrollFragments:0,bscProperties:[new b(1,{edges:[f.cavern]}),new b(3,{powerScrolls:1}),new b(3,{scrollFragments:2}),new b(4,{scrollFragments:1})],top:100,left:0},{name:"Slumbering Sanctuary",edges:[f.clockTower,f.forgottenSepulcher],powerScrolls:3,dualScrolls:1,scrollFragments:0,bscProperties:[new b(2,{edges:[f.cavern]}),new b(3,{powerScrolls:1}),new b(3,{scrollFragments:3}),new b(4,{scrollFragments:1})],top:100,left:20},{name:"Undying Shores",edges:[f.mausoleum],powerScrolls:4,dualScrolls:2,scrollFragments:0,bscProperties:[new b(4,{powerScrolls:1}),new b(3,{scrollFragments:3}),new b(4,{scrollFragments:1})],top:120,left:-40},{name:"Clock Tower",edges:[f.clockRoom],powerScrolls:4,dualScrolls:2,scrollFragments:0,bscProperties:[new b(4,{powerScrolls:1}),new b(3,{scrollFragments:3}),new b(4,{scrollFragments:1})],top:120,left:-20},{name:"Forgotten Sepulcher",edges:[f.clockRoom],powerScrolls:4,dualScrolls:2,scrollFragments:0,bscProperties:[new b(2,{edges:[f.guardiansHaven]}),new b(4,{powerScrolls:1}),new b(3,{scrollFragments:2}),new b(4,{scrollFragments:1})],top:120,left:0},{name:"Cavern",edges:[f.mausoleum,f.guardiansHaven],powerScrolls:4,dualScrolls:2,scrollFragments:0,bscProperties:[new b(4,{powerScrolls:1}),new b(3,{scrollFragments:4}),new b(4,{scrollFragments:1})],top:120,left:20},{name:"Mausoleum",edges:[f.infestedShipwreck,f.highPeakCastle],dlc:F.fatalFalls,scrollFragments:0,bscProperties:[new b(1,{edges:[f.distillery]}),new b(3,{scrollFragments:2}),new b(4,{scrollFragments:1})],powerScrolls:0,top:140,left:-40},{name:"Clock Room",edges:[f.highPeakCastle,f.distillery,f.infestedShipwreck],scrollFragments:0,powerScrolls:0,bscProperties:[new b(1,{edges:[f.distillery]}),new b(3,{scrollFragments:2}),new b(4,{scrollFragments:1})],top:140,left:-20},{name:"Guardian's Haven",edges:[f.highPeakCastle,f.distillery,f.infestedShipwreck,f.throneRoom],scrollFragments:0,bscProperties:[new b(3,{scrollFragments:3}),new b(4,{scrollFragments:1})],powerScrolls:0,top:140,left:0},{name:"High Peak Castle",edges:[f.throneRoom],powerScrolls:2,dualScrolls:2,scrollFragments:0,bscProperties:[new b(3,{scrollFragments:3}),new b(4,{scrollFragments:1})],top:160,left:0},{name:"Derelict Distillery",edges:[f.lighthouse,f.throneRoom],powerScrolls:2,dualScrolls:2,scrollFragments:0,bscProperties:[new b(3,{scrollFragments:1}),new b(4,{scrollFragments:1})],top:160,left:-20},{name:"Infested Shipwreck",edges:[f.lighthouse],powerScrolls:2,dualScrolls:2,scrollFragments:0,bscProperties:[new b(3,{scrollFragments:1}),new b(4,{scrollFragments:1})],top:160,left:-40},{name:"Throne Room",top:180,left:20},{name:"Lighthouse",dlc:F.QueenAndTheSea,top:180,left:0}],k=Array.from(E);function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2?arguments[2]:void 0),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:E).map(function(e){var r=e.edges&&e.edges.map(function(e){return e});return Object(w.a)({},e,{edges:r})});return r.forEach(function(r,t){r.bscProperties&&r.bscProperties.forEach(function(t){t.bsc<=e&&(r.powerScrolls+=t.bscProperties.powerScrolls||0,r.scrollFragments+=t.bscProperties.scrollFragments||0,t.bscProperties.edges&&t.bscProperties.edges.forEach(function(e){r.edges.push(e)}))})}),r}(e);return t=function(e,r){var t=r.map(function(e){var r=e.edges&&e.edges.map(function(e){return e});return Object(w.a)({},e,{edges:r})});return t.forEach(function(r,t){r.runeProperties&&r.runeProperties.forEach(function(t){console.log(t),e[t.rune]&&(r.powerScrolls+=t.runeProperties.powerScrolls||0,r.scrollFragments+=t.runeProperties.scrollFragments||0,t.runeProperties.edges&&t.runeProperties.edges.forEach(function(s){console.log(t,e),r.edges.push(s)}))})}),console.log(k),t}(r,t),console.log(t),t}var P=function(e){function r(e){var t;return Object(c.a)(this,r),(t=Object(p.a)(this,Object(m.a)(r).call(this,e))).toggleMenu=t.toggleMenu.bind(Object(g.a)(Object(g.a)(t))),t.state={open:!0},t}return Object(u.a)(r,e),Object(i.a)(r,[{key:"toggleMenu",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"menu",className:this.state.open?"settingsMenuOpen":"settingsMenuClosed"},n.a.createElement("section",null,n.a.createElement("img",{src:"./bsc.png",alt:"Boss Stem Cells"}),n.a.createElement("input",{type:"radio",name:"bscOptions",id:"bsc0",className:"optionButton",onClick:function(){return e.props.bscSet(0)},checked:0==this.props.bsc}),n.a.createElement("label",{for:"bsc0"},n.a.createElement("h1",null,"0")),n.a.createElement("input",{type:"radio",name:"bscOptions",id:"bsc1",className:"optionButton",onClick:function(){return e.props.bscSet(1)}}),n.a.createElement("label",{for:"bsc1"},n.a.createElement("h1",null,"I")),n.a.createElement("input",{type:"radio",name:"bscOptions",id:"bsc2",className:"optionButton",onClick:function(){return e.props.bscSet(2)}}),n.a.createElement("label",{for:"bsc2"},n.a.createElement("h1",null,"II")),n.a.createElement("input",{type:"radio",name:"bscOptions",id:"bsc3",className:"optionButton",onClick:function(){return e.props.bscSet(3)}}),n.a.createElement("label",{for:"bsc3"},n.a.createElement("h1",null,"III")),n.a.createElement("input",{type:"radio",name:"bscOptions",id:"bsc4",className:"optionButton",onClick:function(){return e.props.bscSet(4)}}),n.a.createElement("label",{for:"bsc4"},n.a.createElement("h1",null,"IV")),n.a.createElement("input",{type:"radio",name:"bscOptions",id:"bsc5",className:"optionButton",onClick:function(){return e.props.bscSet(5)}}),n.a.createElement("label",{for:"bsc5"},n.a.createElement("h1",null,"V"))),n.a.createElement("section",null,n.a.createElement("input",{type:"checkbox",name:"vineRune",id:"vineRune",checked:this.props.runes[v.vine],onClick:function(){e.props.runeToggle(v.vine)}}),n.a.createElement("label",{htmlFor:"vineRune"},n.a.createElement("img",{src:"/deadcellsmap/runes/vineRune.webp"})),n.a.createElement("input",{type:"checkbox",name:"teleRune",id:"teleRune",checked:this.props.runes[v.teleportation],onClick:function(){return e.props.runeToggle(v.teleportation)}}),n.a.createElement("label",{htmlFor:"teleRune"},n.a.createElement("img",{src:"/deadcellsmap/runes/teleRune.webp"})),n.a.createElement("input",{type:"checkbox",name:"ramRune",id:"ramRune",checked:this.props.runes[v.ram],onClick:function(){e.props.runeToggle(v.ram)}}),n.a.createElement("label",{htmlFor:"ramRune"},n.a.createElement("img",{src:"/deadcellsmap/runes/ramRune.webp"})),n.a.createElement("input",{type:"checkbox",name:"spiderRune",id:"spiderRune",checked:this.props.runes[v.spider],onClick:function(){e.props.runeToggle(v.spider)}}),n.a.createElement("label",{htmlFor:"spiderRune"},n.a.createElement("img",{src:"/deadcellsmap/runes/spiderRune.png"})))),n.a.createElement("button",{id:"settingsButton",onClick:this.toggleMenu,className:this.state.open?"settingsButtonOpen":"settingsButtonClosed"},n.a.createElement("img",{src:"./settings.svg",alt:"Boss Stem Cells"})))}}]),r}(s.Component),O=(t(21),function(e){function r(e){var t;Object(c.a)(this,r),(t=Object(p.a)(this,Object(m.a)(r).call(this,e))).dlcEnum=F,t.biomesEnum=f,t.runesEnum=v;var s=[!0,!0,!0,!0],l=[t.dlcEnum.badSeed,t.dlcEnum.fatalFalls,t.dlcEnum.QueenAndTheSea];return t.state={reset:0,bsc:0,scrollX:0,scrollY:0,lastX:0,lastY:0,graph:y(0,l,s),runes:s,dlc:l},t.archerRef=n.a.createRef(),t.containerRef=n.a.createRef(),t.mapList=t.mapList.bind(Object(g.a)(Object(g.a)(t))),t.onMouseDown=t.onMouseDown.bind(Object(g.a)(Object(g.a)(t))),t.onMouseUp=t.onMouseUp.bind(Object(g.a)(Object(g.a)(t))),t.onMouseMove=t.onMouseMove.bind(Object(g.a)(Object(g.a)(t))),t.bscSet=t.bscSet.bind(Object(g.a)(Object(g.a)(t))),t.runeToggle=t.runeToggle.bind(Object(g.a)(Object(g.a)(t))),t}return Object(u.a)(r,e),Object(i.a)(r,[{key:"bscSet",value:function(e){this.setState({bsc:e,graph:y(e,this.state.dlc,this.state.runes)})}},{key:"runeToggle",value:function(e){var r=Object(a.a)(this.state.runes);r[e]=!r[e],this.setState({runes:r,graph:y(this.state.bsc,this.state.dlc,r)})}},{key:"onMouseDown",value:function(e){console.log(e.button),1!=e.button&&this.setState({isScrolling:!0,lastY:e.clientY})}},{key:"onMouseLeave",value:function(e){}},{key:"onMouseUp",value:function(){this.setState({isScrolling:!1})}},{key:"onMouseMove",value:function(e){if(this.state.isScrolling){var r=this.state.lastY-e.clientY;this.setState({scrollX:this.state.scrollX,scrollY:this.state.scrollY+r,lastY:e.clientY}),this.archerRef.current.refreshScreen(),window.scroll(0,this.state.scrollY+r),this.state.scrollY<0&&this.setState({scrollY:0})}}},{key:"getRelationsArray",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return this.state.graph[e].edges?this.state.graph[e].edges.map(function(e,r){return{targetId:e,targetAnchor:"top",sourceAnchor:"bottom",style:{strokeColor:"lightblue"}}}):[]}},{key:"mapList",value:function(){var e=this,r=this.state.graph.map(function(r,t){return n.a.createElement(h,{name:r.name,index:t,relations:e.getRelationsArray(t),style:{marginTop:"".concat(10+2*r.top,"vh"),marginLeft:"".concat(40+r.left,"vw")},powerScrolls:r.powerScrolls,dualScrolls:r.dualScrolls,scrollFragments:r.scrollFragments,img:r.img})});return r}},{key:"render",value:function(){return this.archerRef.current&&this.archerRef.current.refreshScreen(),console.log("production"),console.log("gownos perma zygbi"),n.a.createElement(n.a.Fragment,null,n.a.createElement(P,{bscSet:this.bscSet,runeToggle:this.runeToggle,runes:this.state.runes,bsc:this.state.bsc}),n.a.createElement("div",{id:"archerMajorContainer"},n.a.createElement(d.ArcherContainer,{lineStyle:"straight",ref:this.archerRef},n.a.createElement("div",{id:"container",ref:this.containerRef,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseMove:this.onMouseMove,onMouseLeave:this.onMouseLeave},this.mapList()))))}}]),r}(n.a.Component));o.a.render(n.a.createElement(O,null),document.getElementById("root"))}},[[12,2,1]]]);
//# sourceMappingURL=main.4625dc4e.chunk.js.map