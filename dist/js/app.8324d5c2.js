(function(t){function e(e){for(var r,a,i=e[0],u=e[1],f=e[2],p=0,l=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&l.push(c[a][0]),c[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(l.length)l.shift()();return o.push.apply(o,f||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var u=n[i];0!==c[u]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},c={app:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/VueLearningCards/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},5205:function(t,e,n){"use strict";n("a78e")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=Object(r["d"])("h2",null,"The card",-1);function o(t,e,n,o,a,i){var u=Object(r["i"])("Card");return Object(r["f"])(),Object(r["c"])(r["a"],null,[c,Object(r["e"])(u)],64)}var a=["textContent"],i=["textContent"];function u(t,e,n,c,o,u){return Object(r["f"])(),Object(r["c"])(r["a"],null,[Object(r["d"])("div",{class:"card",onClick:e[0]||(e[0]=function(){return u.flipCard&&u.flipCard.apply(u,arguments)})},[o.flipped?(Object(r["f"])(),Object(r["c"])("h2",{key:1,textContent:Object(r["j"])(u.back)},null,8,i)):(Object(r["f"])(),Object(r["c"])("h2",{key:0,textContent:Object(r["j"])(u.front)},null,8,a))]),Object(r["d"])("div",null,[Object(r["d"])("button",{onClick:e[1]||(e[1]=function(){return u.previous&&u.previous.apply(u,arguments)})},"prev"),Object(r["d"])("button",{onClick:e[2]||(e[2]=function(){return u.next&&u.next.apply(u,arguments)})},"next")])],64)}var f=n("e428"),d={data:function(){return{flipped:!1,index:0,cards:f.cards}},methods:{flipCard:function(){this.flipped=!this.flipped},next:function(){this.index=Math.min(this.index+1,this.cards.length-1)},previous:function(){this.index=Math.max(this.index-1,0)}},computed:{front:function(){return this.cards[this.index].front},back:function(){return this.cards[this.index].back}}},p=(n("7ba4"),n("6b0d")),l=n.n(p);const s=l()(d,[["render",u],["__scopeId","data-v-9c694094"]]);var b=s,h={name:"App",components:{Card:b}};n("5205");const O=l()(h,[["render",o]]);var j=O;Object(r["b"])(j).mount("#app")},"7ba4":function(t,e,n){"use strict";n("bfe7")},a78e:function(t,e,n){},bfe7:function(t,e,n){},e428:function(t){t.exports=JSON.parse('{"cards":[{"front":"Front of card 1","back":"Back of card 1"},{"front":"Front of card 2","back":"Back of card 2"},{"front":"Front of card 3","back":"Back of card 3"}]}')}});
//# sourceMappingURL=app.8324d5c2.js.map