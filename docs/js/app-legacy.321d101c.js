(function(){"use strict";var n={283:function(n,t,r){r(6992),r(8674),r(9601),r(7727);var e=r(9567),o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("section",{staticClass:"center"},[e("div",[e("img",{staticClass:"logo",attrs:{src:r(4490),alt:"logo"}}),e("div",{staticClass:"list"},n._l(n.personajes,(function(n,t){return e("Personaje",{key:t,attrs:{nombrePersonaje:n.nombre,imagenPersonaje:n.imagen}})})),1)])])},a=[],i=function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("div",{staticClass:"listItem"},[r("img",{staticClass:"avatar",attrs:{src:n.imagenPersonaje,alt:""}}),r("h1",[n._v(n._s(n.nombrePersonaje))])])},c=[],s={name:"personaje",props:{nombrePersonaje:String,imagenPersonaje:String}},u=s,l=r(1001),p=(0,l.Z)(u,i,c,!1,null,null,null),f=p.exports,m={name:"App",data:function(){return{personajes:[{nombre:"Rick Sanchez",imagen:"https://rickandmortyapi.com/api/character/avatar/1.jpeg"},{nombre:"Morty Smith",imagen:"https://rickandmortyapi.com/api/character/avatar/2.jpeg"},{nombre:"Summer Smith",imagen:"https://rickandmortyapi.com/api/character/avatar/3.jpeg"},{nombre:"Beth Smith",imagen:"https://rickandmortyapi.com/api/character/avatar/4.jpeg"}]}},components:{Personaje:f}},g=m,h=(0,l.Z)(g,o,a,!1,null,null,null),v=h.exports;e.Z.config.productionTip=!1,new e.Z({render:function(n){return n(v)}}).$mount("#app")},4490:function(n,t,r){n.exports=r.p+"img/rick-and-morty-logo.836f2487.svg"}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var a=t[e]={exports:{}};return n[e](a,a.exports,r),a.exports}r.m=n,function(){var n=[];r.O=function(t,e,o,a){if(!e){var i=1/0;for(l=0;l<n.length;l++){e=n[l][0],o=n[l][1],a=n[l][2];for(var c=!0,s=0;s<e.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((function(n){return r.O[n](e[s])}))?e.splice(s--,1):(c=!1,a<i&&(i=a));if(c){n.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[e,o,a]}}(),function(){r.d=function(n,t){for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){r.p="/rick-and-morty/"}(),function(){var n={143:0};r.O.j=function(t){return 0===n[t]};var t=function(t,e){var o,a,i=e[0],c=e[1],s=e[2],u=0;if(i.some((function(t){return 0!==n[t]}))){for(o in c)r.o(c,o)&&(r.m[o]=c[o]);if(s)var l=s(r)}for(t&&t(e);u<i.length;u++)a=i[u],r.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return r.O(l)},e=self["webpackChunksingle_file_component"]=self["webpackChunksingle_file_component"]||[];e.forEach(t.bind(null,0)),e.push=t.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(283)}));e=r.O(e)})();
//# sourceMappingURL=app-legacy.321d101c.js.map