(function(){"use strict";var e={924:function(e,n,t){var o=t(6369),i=function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("Home")],1)},r=[],a=function(){var e=this,n=e._self._c;return n("div",{staticStyle:{height:"100%"}},[n("TopNav",{on:{handleOpen:e.changeOpen}}),e.open?"信封"===e.open?n("XinNeiRon"):"第二页"===e.open?n("TwoPage"):e._e():n("FengMian",{on:{handleOpen:e.changeOpen}})],1)},u=[],s=function(){var e=this,n=e._self._c;return n("div",{staticClass:"main"},[n("div",{staticClass:"container",on:{click:function(n){return e.openIt("信封")}}},[n("div",{staticClass:"envelope"}),n("div",{class:["card",e.open?"card-animation":""],attrs:{id:"test"}},[n("h1",{staticClass:"message"},[e._v("小理同学，你好哇")]),e._m(0)]),n("div",{staticClass:"cover"}),n("div",{class:["lid",e.open?"lid-animation":""]}),n("div",{staticClass:"shadow"})])])},c=[function(){var e=this,n=e._self._c;return n("div",{staticClass:"pikachu"},[n("div",{staticClass:"limbs"}),n("div",{staticClass:"heart"}),n("div",{staticClass:"arms"}),n("div",{staticClass:"smile"})])}],l={data(){return{open:""}},created(){this.$eventBus.$on("open-xing",(()=>{this.openIt("信封")}))},methods:{openIt(e){this.open=e;const n=document.getElementById("nx");n.volume=.5,n.play(),console.log("信封============="),setTimeout((()=>{this.$emit("handleOpen",e)}),3e3)}}},f=l,d=t(1001),p=(0,d.Z)(f,s,c,!1,null,"5efba221",null),v=p.exports,m=function(){var e=this,n=e._self._c;return n("div",{staticClass:"qita"},[n("div",{staticClass:"left-button",on:{click:function(n){return e.openIt("")}}},[e._v("回到封面")]),n("div",{staticClass:"left-button",on:{click:function(n){return e.openIt("第二页")}}},[e._v("其他内容")]),n("div",{staticClass:"left-button",on:{click:function(n){return e.openIt("信封")}}},[e._v("写给小理")])])},h=[],g={methods:{openIt(e){const n=Array.from(document.getElementsByClassName("music"));n.forEach((e=>{e.pause()})),console.log("music",n);let t=null;"信封"==e?this.$eventBus.$emit("open-xing"):"第二页"==e?(t=document.getElementById("cxqd"),t.play(),t.volume=.3,this.$emit("handleOpen",e)):""===e&&(t=document.getElementById("windy"),this.$emit("handleOpen",e),t.volume=.3),t.volume=.5,t.play()}},async awaiwMethods(){return Promise((e=>{setTimeout((()=>{e()}),3e3)}))}},y=g,b=(0,d.Z)(y,m,h,!1,null,"78b1d298",null),C=b.exports,w={data(){return{open:"",autoplay:!0}},components:{FengMian:v,TopNav:C,XinNeiRon:()=>t.e(903).then(t.bind(t,903)),TwoPage:()=>t.e(789).then(t.bind(t,9789))},methods:{changeOpen(e){this.open=e,console.log("页面",this.open)}},mounted(){}},O=w,_=(0,d.Z)(O,a,u,!1,null,"84b7c1aa",null),k=_.exports,E={name:"App",components:{Home:k}},T=E,x=(0,d.Z)(T,i,r,!1,null,null,null),P=x.exports;t(865);o.ZP.config.productionTip=!1,o.ZP.prototype.$eventBus=new o.ZP,new o.ZP({render:e=>e(P)}).$mount("#app")}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,o,i,r){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],i=e[l][1],r=e[l][2];for(var u=!0,s=0;s<o.length;s++)(!1&r||a>=r)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(u=!1,r<a&&(a=r));if(u){e.splice(l--,1);var c=i();void 0!==c&&(n=c)}}return n}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[o,i,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{789:"335e0c32",903:"eb8c7e69"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{789:"9d9d24b1",903:"8479f905"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="liying:";t.l=function(o,i,r,a){if(e[o])e[o].push(i);else{var u,s;if(void 0!==r)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==n+r){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+r),u.src=o),e[o]=[i];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var i=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),i&&i.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,i){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(t){if(r.onerror=r.onload=null,"load"===t.type)o();else{var a=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,r.parentNode.removeChild(r),i(s)}};return r.onerror=r.onload=a,r.href=n,t?t.parentNode.insertBefore(r,t.nextSibling):document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var i=t[o],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===n))return i}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){i=a[o],r=i.getAttribute("data-href");if(r===e||r===n)return i}},o=function(o){return new Promise((function(i,r){var a=t.miniCssF(o),u=t.p+a;if(n(a,u))return i();e(o,u,null,i,r)}))},i={143:0};t.f.miniCss=function(e,n){var t={789:1,903:1};i[e]?n.push(i[e]):0!==i[e]&&t[e]&&n.push(i[e]=o(e).then((function(){i[e]=0}),(function(n){throw delete i[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var i=t.o(e,n)?e[n]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(t,o){i=e[n]=[t,o]}));o.push(i[2]=r);var a=t.p+t.u(n),u=new Error,s=function(o){if(t.o(e,n)&&(i=e[n],0!==i&&(e[n]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,i[1](u)}};t.l(a,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var i,r,a=o[0],u=o[1],s=o[2],c=0;if(a.some((function(n){return 0!==e[n]}))){for(i in u)t.o(u,i)&&(t.m[i]=u[i]);if(s)var l=s(t)}for(n&&n(o);c<a.length;c++)r=a[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(l)},o=self["webpackChunkliying"]=self["webpackChunkliying"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(924)}));o=t.O(o)})();
//# sourceMappingURL=app.7fa5d773.js.map