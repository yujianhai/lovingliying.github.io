(function(){"use strict";var t={3800:function(t,e,i){var n=i(6369),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Home")],1)},a=[],o=function(){var t=this,e=t._self._c;return e("div",{staticStyle:{height:"100%"}},[e("video",{attrs:{src:i(8947),autoplay:"autoplay",width:"0px",height:"0px",id:"nanxiaVideo",controls:""}}),t.open?e("XinNeiRon"):e("FengMian",{on:{handleOpen:t.changeOpen}})],1)},r=[],l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("div",{staticClass:"container",on:{click:t.openIt}},[e("div",{staticClass:"envelope"}),e("div",{class:["card",t.open?"card-animation":""],attrs:{id:"test"}},[e("h1",{staticClass:"message"},[t._v("小理同学，你好哇")]),t._m(0)]),e("div",{staticClass:"cover"}),e("div",{class:["lid",t.open?"lid-animation":""]}),e("div",{staticClass:"shadow"})])])},c=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"pikachu"},[e("div",{staticClass:"limbs"}),e("div",{staticClass:"heart"}),e("div",{staticClass:"arms"}),e("div",{staticClass:"smile"})])}],d={data(){return{open:!1}},methods:{openIt(){this.open=!0,setTimeout((()=>{this.$emit("handleOpen",!0)}),3e3),console.log("哈哈哈哈哈")}}},u=d,v=i(1001),f=(0,v.Z)(u,l,c,!1,null,"9702526c",null),p=f.exports,h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"container"},[e("div",{staticClass:"litter-head"},[t._v(" 小理你好哇 ")]),e("div",{staticClass:"litter-body"},[t._l(t.words,(function(i,n){return e("div",{key:n,staticClass:"word"},[t._v(" "+t._s(i)+" ")])})),e("div",{staticClass:"finish"},[t._v(" 余建海 ")])],2),e("div",{staticClass:"date"},[t._v(" 小理宝宝的 "),e("div",[t._v(t._s(t.date.day)+" 天")]),e("div",[t._v(t._s(t.date.hour)+" 时")]),e("div",[t._v(t._s(t.date.minute)+" 分")]),e("div",[t._v(t._s(t.date.second)+" 秒")])])]),t._m(0)])},m=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"pikachu"},[e("div",{staticClass:"head"},[e("div",{staticClass:"ears left brown"},[e("div",{staticClass:"ears-inside yellow"})]),e("div",{staticClass:"ears right brown"},[e("div",{staticClass:"ears-inside yellow"})]),e("div",{staticClass:"face yellow"},[e("span",{staticClass:"eye left brown"}),e("span",{staticClass:"eye right brown"}),e("span",{staticClass:"mouth"}),e("span",{staticClass:"cachete left"}),e("span",{staticClass:"cachete right"})])]),e("div",{staticClass:"body yellow"},[e("div",{staticClass:"heart"}),e("div",{staticClass:"paw left yellow"}),e("div",{staticClass:"paw right yellow"})]),e("div",{staticClass:"leg left yellow-dark"}),e("div",{staticClass:"leg right yellow-dark"}),e("div",{staticClass:"tail"})])}],y={data(){return{words:["希望你每天都开心，因为你真的很好很好很好，","我会一直陪着你。","在这平静的日子里，除了想你，少有波澜"],date:{day:521},timer:null}},methods:{getTime(){var t=new Date("2022-11-27 5:21:13"),e=new Date;t=t.getTime(),e=e.getTime();var i=e-t;let n=Math.floor(i/864e5),s=Math.floor((i-24*n*60*60*1e3)/36e5),a=Math.floor((i-24*n*60*60*1e3-36e5*s)/6e4),o=Math.floor(i/1e3%60,10);this.date.day=n,this.date={day:n,hour:s,minute:a,second:o}}},mounted(){this.getTime(),this.timer=setInterval((()=>{this.getTime()}))},beforeDestory(){clearInterval(this.timer)}},C=y,g=(0,v.Z)(C,h,m,!1,null,"0d3c7c92",null),_=g.exports,w={data(){return{open:!1,autoplay:!0}},components:{FengMian:p,XinNeiRon:_},methods:{changeOpen(t){this.open=t,console.log("this.open",this.open);var e=document.getElementById("nanxiaVideo");e.play()}},mounted(){}},b=w,O=(0,v.Z)(b,o,r,!1,null,"50c5fe3c",null),x=O.exports,k={name:"App",components:{Home:x}},T=k,M=(0,v.Z)(T,s,a,!1,null,null,null),P=M.exports,Z=(i(743),i(364)),j=i.n(Z);n.ZP.config.productionTip=!1,n.ZP.prototype.$eventBus=new n.ZP,n.ZP.use(j()),new n.ZP({render:t=>t(P)}).$mount("#app")},8947:function(t,e,i){t.exports=i.p+"media/nanxia.247f2656.mp4"}},e={};function i(n){var s=e[n];if(void 0!==s)return s.exports;var a=e[n]={id:n,loaded:!1,exports:{}};return t[n](a,a.exports,i),a.loaded=!0,a.exports}i.m=t,function(){i.amdO={}}(),function(){var t=[];i.O=function(e,n,s,a){if(!n){var o=1/0;for(d=0;d<t.length;d++){n=t[d][0],s=t[d][1],a=t[d][2];for(var r=!0,l=0;l<n.length;l++)(!1&a||o>=a)&&Object.keys(i.O).every((function(t){return i.O[t](n[l])}))?n.splice(l--,1):(r=!1,a<o&&(o=a));if(r){t.splice(d--,1);var c=s();void 0!==c&&(e=c)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[n,s,a]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var n in e)i.o(e,n)&&!i.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){i.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){i.p=""}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,a,o=n[0],r=n[1],l=n[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(s in r)i.o(r,s)&&(i.m[s]=r[s]);if(l)var d=l(i)}for(e&&e(n);c<o.length;c++)a=o[c],i.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return i.O(d)},n=self["webpackChunkliying"]=self["webpackChunkliying"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(3800)}));n=i.O(n)})();
//# sourceMappingURL=app.a450d7d5.js.map