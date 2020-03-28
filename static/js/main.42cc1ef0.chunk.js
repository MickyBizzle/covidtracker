(this.webpackJsonpcovidtracker=this.webpackJsonpcovidtracker||[]).push([[0],{34:function(e,t,a){e.exports=a(51)},39:function(e,t,a){},40:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),o=a.n(r),l=(a(39),a(3)),s=(a(40),a(15)),i=a(16),u=a(56),m=[0,100,1e3,1e4],f=["#39b54a","#d8d52b","#eac435","#f56416","#ff0000"],d=Object(n.memo)((function(e){var t=e.setTooltipContent,a=e.setSelectedCountry,n=e.countryData,r=e.mostCases,o=e.normalizeCountry,l=Object(u.a)().domain([].concat(Object(s.a)(m),[r])).range(f),d=function(e){var t=n.find((function(t){return t.Country===o(e)}));return t?l(t.TotalConfirmed):"black"},E=window.innerHeight,b=window.innerWidth;return c.a.createElement(i.ComposableMap,{"data-tip":"",height:E,width:b},c.a.createElement(i.ZoomableGroup,{zoom:2,translateExtent:[[0,0],[b,E]]},c.a.createElement(i.Geographies,{geography:"https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"},(function(e){return e.geographies.map((function(e){var r=e.properties.name;return c.a.createElement(i.Geography,{stroke:"#000",strokeWidth:.05,key:e.rsmKey,geography:e,onClick:function(){return a({abr:e.properties["Alpha-2"],data:n.find((function(e){return e.Country===o(r)}))})},onMouseEnter:function(){t(r)},onMouseLeave:function(){t("")},fill:d(r),style:{hover:{fill:"#5eaeff",outline:"none"}}})}))}))))})),E=a(31),b=(a(44),function(e){var t=e.mostCases,a=Object(n.useRef)(),r=Object(n.useState)(0),o=Object(l.a)(r,2),i=(o[0],o[1]),u=Object(n.useState)(Object(s.a)(m)),d=Object(l.a)(u,2),E=d[0],b=d[1];return Object(n.useEffect)((function(){i(a.current.clientHeight)}),[a]),Object(n.useEffect)((function(){t&&b([].concat(Object(s.a)(E),[t]))}),[t]),c.a.createElement("div",{className:"legend"},c.a.createElement("div",{className:"legendTitle"},c.a.createElement("span",null,"Total Confirmed Cases")),c.a.createElement("div",{className:"legendContainer"},c.a.createElement("div",{className:"labels",ref:a},E.slice(0).reverse().map((function(e,t){return c.a.createElement("div",{className:"label",key:t},e+" - ")}))),c.a.createElement("div",{className:"colorBar",style:{background:"linear-gradient(to top, ".concat(f,")")}})),c.a.createElement("div",{className:"legendContainer",style:{height:30}},c.a.createElement("div",{className:"labels",style:{justifyContent:"center"}},c.a.createElement("div",{className:"label",style:{fontSize:14}},"No data -"," ")),c.a.createElement("div",{className:"colorBar",style:{backgroundColor:"black"}})))});a(45);var v=Object(n.memo)((function(e){var t=e.abr,a=e.data,n=e.clear;return c.a.createElement("div",{className:"card"},c.a.createElement("button",{onClick:n},"X"),a?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"cardTitle"},c.a.createElement("img",{src:"https://www.countryflags.io/".concat(t,"/flat/64.png"),alt:"".concat(a.Country," flag")}),c.a.createElement("span",null,a.Country)),c.a.createElement("div",{className:"cardContent"},c.a.createElement("div",{className:"totals"},c.a.createElement("p",null,"Total Confirmed: ".concat(a.TotalConfirmed)),c.a.createElement("p",{style:{color:"#ff0000"}},"Total Deaths: ".concat(a.TotalDeaths)),c.a.createElement("p",{style:{color:"#39b54a"}},"Total Recovered: ".concat(a.TotalRecovered))),c.a.createElement("div",{className:"new"},c.a.createElement("p",null,"New Confirmed: ".concat(a.NewConfirmed)),c.a.createElement("p",{style:{color:"#ff0000"}},"New Deaths: ".concat(a.NewDeaths)),c.a.createElement("p",{style:{color:"#39b54a"}},"New Recovered: ".concat(a.NewRecovered))))):c.a.createElement("div",{className:"cardTitle"},"No data available for this Country"))}),(function(e,t){return e.data===t.data})),p=(a(46),function(){return c.a.createElement("div",{className:"bottomInfo"},c.a.createElement("span",null,"Data from"," ",c.a.createElement("a",{href:"https://covid19api.com/",target:"blank"},"covid19api.com")," ","Datasource does not feature all countries."," "),c.a.createElement("span",null,"Made by Michael Ballard"))}),C=(a(47),function(){var e=Object(n.useState)(!0),t=Object(l.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){setTimeout((function(){r(!1)}),3e3)}),[]);var o=function(){r(!a)};return c.a.createElement("div",{className:"help"},c.a.createElement("div",{className:"mouseOver",onMouseEnter:o,onMouseLeave:o},c.a.createElement("span",null,"?")),c.a.createElement("div",{className:"instructionContainer".concat(a?" show":"")},c.a.createElement("span",null,"Click and drag to move. Scroll to zoom. Click a country to view stats.")))});var h=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),s=Object(l.a)(o,2),i=s[0],u=s[1],m=Object(n.useState)(),f=Object(l.a)(m,2),h=(f[0],f[1]),g=Object(n.useState)(),y=Object(l.a)(g,2),j=y[0],O=y[1],N=Object(n.useState)(),w=Object(l.a)(N,2),T=w[0],k=w[1];return Object(n.useEffect)((function(){fetch("https://api.covid19api.com/summary").then((function(e){return e.json()})).then((function(e){var t=e.Date,a=e.Countries;a.sort((function(e,t){return e.TotalConfirmed>t.TotalConfirmed})),h(t),u(a)}))}),[]),Object(n.useEffect)((function(){var e=i.length>0?i.sort((function(e,t){return t.TotalConfirmed-e.TotalConfirmed}))[0].TotalConfirmed:null;O(e)}),[i,j]),c.a.createElement("div",null,i.length>0?c.a.createElement(c.a.Fragment,null,T?c.a.createElement(v,Object.assign({},T,{clear:function(){k()}})):null,c.a.createElement(b,{mostCases:j}),c.a.createElement(E.a,null,a),c.a.createElement(p,null),c.a.createElement(C,null),c.a.createElement(d,{setTooltipContent:r,countryData:i,mostCases:j,setSelectedCountry:k,selectedCountry:T,normalizeCountry:function(e){switch(e){case"United States of America":return"US";case"Czech Republic":return"Czechia";case"Democratic Republic of the Congo":return"Republic of the Congo";default:return e}}})):null)};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.42cc1ef0.chunk.js.map