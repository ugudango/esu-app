/*!
  * vue-router v4.0.10
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const t="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,e=C=>t?Symbol(C):"_vr_"+C,r=e("rvlm"),M=e("rvd"),i=e("r"),u=e("rl"),A=e("rvl"),o="undefined"!==typeof window;function c(C){return C.__esModule||t&&"Module"===C[Symbol.toStringTag]}const f=Object.assign;function d(C,H){const V={};for(const L in H){const n=H[L];V[L]=Array.isArray(n)?n.map(C):C(n)}return V}let a=()=>{};const l=/\/$/,m=C=>C.replace(l,"");function s(C,H,V="/"){let L,n={},t="",e="";const r=H.indexOf("?"),M=H.indexOf("#",r>-1?r:0);return r>-1&&(L=H.slice(0,r),t=H.slice(r+1,M>-1?M:H.length),n=C(t)),M>-1&&(L=L||H.slice(0,M),e=H.slice(M,H.length)),L=y(null!=L?L:H,V),{fullPath:L+(t&&"?")+t+e,path:L,query:n,hash:e}}function Z(C,H){let V=H.query?C(H.query):"";return H.path+(V&&"?")+V+(H.hash||"")}function p(C,H){return H&&C.toLowerCase().startsWith(H.toLowerCase())?C.slice(H.length)||"/":C}function S(C,H,V){let L=H.matched.length-1,n=V.matched.length-1;return L>-1&&L===n&&h(H.matched[L],V.matched[n])&&O(H.params,V.params)&&C(H.query)===C(V.query)&&H.hash===V.hash}function h(C,H){return(C.aliasOf||C)===(H.aliasOf||H)}function O(C,H){if(Object.keys(C).length!==Object.keys(H).length)return!1;for(let V in C)if(!g(C[V],H[V]))return!1;return!0}function g(C,H){return Array.isArray(C)?v(C,H):Array.isArray(H)?v(H,C):C===H}function v(C,H){return Array.isArray(H)?C.length===H.length&&C.every(((C,V)=>C===H[V])):1===C.length&&C[0]===H}function y(C,H){if(C.startsWith("/"))return C;if(!C)return H;const V=H.split("/"),L=C.split("/");let n,t,e=V.length-1;for(n=0;n<L.length;n++)if(t=L[n],1!==e&&"."!==t){if(".."!==t)break;e--}return V.slice(0,e).join("/")+"/"+L.slice(n-(n===L.length?1:0)).join("/")}var b,k;(function(C){C["pop"]="pop",C["push"]="push"})(b||(b={})),function(C){C["back"]="back",C["forward"]="forward",C["unknown"]=""}(k||(k={}));function w(C){if(!C)if(o){const H=document.querySelector("base");C=H&&H.getAttribute("href")||"/",C=C.replace(/^\w+:\/\/[^\/]+/,"")}else C="/";return"/"!==C[0]&&"#"!==C[0]&&(C="/"+C),m(C)}const B=/^[^#]+#/;function x(C,H){return C.replace(B,"#")+H}function P(C,H){const V=document.documentElement.getBoundingClientRect(),L=C.getBoundingClientRect();return{behavior:H.behavior,left:L.left-V.left-(H.left||0),top:L.top-V.top-(H.top||0)}}const T=()=>({left:window.pageXOffset,top:window.pageYOffset});function F(C){let H;if("el"in C){let V=C.el;const L="string"===typeof V&&V.startsWith("#");0;const n="string"===typeof V?L?document.getElementById(V.slice(1)):document.querySelector(V):V;if(!n)return;H=P(n,C)}else H=C;"scrollBehavior"in document.documentElement.style?window.scrollTo(H):window.scrollTo(null!=H.left?H.left:window.pageXOffset,null!=H.top?H.top:window.pageYOffset)}function R(C,H){const V=history.state?history.state.position-H:-1;return V+C}const E=new Map;function D(C,H){E.set(C,H)}function _(C){const H=E.get(C);return E.delete(C),H}let N=()=>location.protocol+"//"+location.host;function I(C,H){const{pathname:V,search:L,hash:n}=H,t=C.indexOf("#");if(t>-1){let H=n.includes(C.slice(t))?C.slice(t).length:1,V=n.slice(H);return"/"!==V[0]&&(V="/"+V),p(V,"")}const e=p(V,C);return e+L+n}function W(C,H,V,L){let n=[],t=[],e=null;const r=({state:t})=>{const r=I(C,location),M=V.value,i=H.value;let u=0;if(t){if(V.value=r,H.value=t,e&&e===M)return void(e=null);u=i?t.position-i.position:0}else L(r);n.forEach((C=>{C(V.value,M,{delta:u,type:b.pop,direction:u?u>0?k.forward:k.back:k.unknown})}))};function M(){e=V.value}function i(C){n.push(C);const H=()=>{const H=n.indexOf(C);H>-1&&n.splice(H,1)};return t.push(H),H}function u(){const{history:C}=window;C.state&&C.replaceState(f({},C.state,{scroll:T()}),"")}function A(){for(const C of t)C();t=[],window.removeEventListener("popstate",r),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",r),window.addEventListener("beforeunload",u),{pauseListeners:M,listen:i,destroy:A}}function G(C,H,V,L=!1,n=!1){return{back:C,current:H,forward:V,replaced:L,position:window.history.length,scroll:n?T():null}}function U(C){const{history:H,location:V}=window;let L={value:I(C,V)},n={value:H.state};function t(L,t,e){const r=C.indexOf("#"),M=r>-1?(V.host&&document.querySelector("base")?C:C.slice(r))+L:N()+C+L;try{H[e?"replaceState":"pushState"](t,"",M),n.value=t}catch(i){console.error(i),V[e?"replace":"assign"](M)}}function e(C,V){const e=f({},H.state,G(n.value.back,C,n.value.forward,!0),V,{position:n.value.position});t(C,e,!0),L.value=C}function r(C,V){const e=f({},n.value,H.state,{forward:C,scroll:T()});t(e.current,e,!0);const r=f({},G(L.value,C,null),{position:e.position+1},V);t(C,r,!1),L.value=C}return n.value||t(L.value,{back:null,current:L.value,forward:null,position:H.length-1,replaced:!0,scroll:null},!0),{location:L,state:n,push:r,replace:e}}function j(C){C=w(C);const H=U(C),V=W(C,H.state,H.location,H.replace);function L(C,H=!0){H||V.pauseListeners(),history.go(C)}const n=f({location:"",base:C,go:L,createHref:x.bind(null,C)},H,V);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>H.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>H.state.value}),n}function Q(C){return C=location.host?C||location.pathname+location.search:"",C.includes("#")||(C+="#"),j(C)}function z(C){return"string"===typeof C||C&&"object"===typeof C}function K(C){return"string"===typeof C||"symbol"===typeof C}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},q=e("nf");var J;(function(C){C[C["aborted"]=4]="aborted",C[C["cancelled"]=8]="cancelled",C[C["duplicated"]=16]="duplicated"})(J||(J={}));function Y(C,H){return f(new Error,{type:C,[q]:!0},H)}function X(C,H){return C instanceof Error&&q in C&&(null==H||!!(C.type&H))}const CC="[^/]+?",HC={sensitive:!1,strict:!1,start:!0,end:!0},VC=/[.+*?^${}()[\]/\\]/g;function LC(C,H){const V=f({},HC,H);let L=[],n=V.start?"^":"";const t=[];for(const u of C){const C=u.length?[]:[90];V.strict&&!u.length&&(n+="/");for(let H=0;H<u.length;H++){const L=u[H];let e=40+(V.sensitive?.25:0);if(0===L.type)H||(n+="/"),n+=L.value.replace(VC,"\\$&"),e+=40;else if(1===L.type){const{value:C,repeatable:V,optional:r,regexp:M}=L;t.push({name:C,repeatable:V,optional:r});const A=M||CC;if(A!==CC){e+=10;try{new RegExp(`(${A})`)}catch(i){throw new Error(`Invalid custom RegExp for param "${C}" (${A}): `+i.message)}}let o=V?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;H||(o=r&&u.length<2?`(?:/${o})`:"/"+o),r&&(o+="?"),n+=o,e+=20,r&&(e+=-8),V&&(e+=-20),".*"===A&&(e+=-50)}C.push(e)}L.push(C)}if(V.strict&&V.end){const C=L.length-1;L[C][L[C].length-1]+=.7000000000000001}V.strict||(n+="/?"),V.end?n+="$":V.strict&&(n+="(?:/|$)");const e=new RegExp(n,V.sensitive?"":"i");function r(C){const H=C.match(e),V={};if(!H)return null;for(let L=1;L<H.length;L++){const C=H[L]||"",n=t[L-1];V[n.name]=C&&n.repeatable?C.split("/"):C}return V}function M(H){let V="",L=!1;for(const n of C){L&&V.endsWith("/")||(V+="/"),L=!1;for(const C of n)if(0===C.type)V+=C.value;else if(1===C.type){const{value:t,repeatable:e,optional:r}=C,M=t in H?H[t]:"";if(Array.isArray(M)&&!e)throw new Error(`Provided param "${t}" is an array but it is not repeatable (* or + modifiers)`);const i=Array.isArray(M)?M.join("/"):M;if(!i){if(!r)throw new Error(`Missing required param "${t}"`);n.length<2&&(V.endsWith("/")?V=V.slice(0,-1):L=!0)}V+=i}}return V}return{re:e,score:L,keys:t,parse:r,stringify:M}}function nC(C,H){let V=0;while(V<C.length&&V<H.length){const L=H[V]-C[V];if(L)return L;V++}return C.length<H.length?1===C.length&&80===C[0]?-1:1:C.length>H.length?1===H.length&&80===H[0]?1:-1:0}function tC(C,H){let V=0;const L=C.score,n=H.score;while(V<L.length&&V<n.length){const C=nC(L[V],n[V]);if(C)return C;V++}return n.length-L.length}const eC={type:0,value:""},rC=/[a-zA-Z0-9_]/;function MC(C){if(!C)return[[]];if("/"===C)return[[eC]];if(!C.startsWith("/"))throw new Error(`Invalid path "${C}"`);function H(C){throw new Error(`ERR (${V})/"${i}": ${C}`)}let V=0,L=V;const n=[];let t;function e(){t&&n.push(t),t=[]}let r,M=0,i="",u="";function A(){i&&(0===V?t.push({type:0,value:i}):1===V||2===V||3===V?(t.length>1&&("*"===r||"+"===r)&&H(`A repeatable param (${i}) must be alone in its segment. eg: '/:ids+.`),t.push({type:1,value:i,regexp:u,repeatable:"*"===r||"+"===r,optional:"*"===r||"?"===r})):H("Invalid state to consume buffer"),i="")}function o(){i+=r}while(M<C.length)if(r=C[M++],"\\"!==r||2===V)switch(V){case 0:"/"===r?(i&&A(),e()):":"===r?(A(),V=1):o();break;case 4:o(),V=L;break;case 1:"("===r?V=2:rC.test(r)?o():(A(),V=0,"*"!==r&&"?"!==r&&"+"!==r&&M--);break;case 2:")"===r?"\\"==u[u.length-1]?u=u.slice(0,-1)+r:V=3:u+=r;break;case 3:A(),V=0,"*"!==r&&"?"!==r&&"+"!==r&&M--,u="";break;default:H("Unknown state");break}else L=V,V=4;return 2===V&&H(`Unfinished custom RegExp for param "${i}"`),A(),e(),n}function iC(C,H,V){const L=LC(MC(C.path),V);const n=f(L,{record:C,parent:H,children:[],alias:[]});return H&&!n.record.aliasOf===!H.record.aliasOf&&H.children.push(n),n}function uC(C,H){const V=[],L=new Map;function n(C){return L.get(C)}function t(C,V,L){let n=!L,r=oC(C);r.aliasOf=L&&L.record;const i=aC(H,C),u=[r];if("alias"in C){const H="string"===typeof C.alias?[C.alias]:C.alias;for(const C of H)u.push(f({},r,{components:L?L.record.components:r.components,path:C,aliasOf:L?L.record:r}))}let A,o;for(const H of u){let{path:u}=H;if(V&&"/"!==u[0]){let C=V.record.path,L="/"===C[C.length-1]?"":"/";H.path=V.record.path+(u&&L+u)}if(A=iC(H,V,i),L?L.alias.push(A):(o=o||A,o!==A&&o.alias.push(A),n&&C.name&&!fC(A)&&e(C.name)),"children"in r){let C=r.children;for(let H=0;H<C.length;H++)t(C[H],A,L&&L.children[H])}L=L||A,M(A)}return o?()=>{e(o)}:a}function e(C){if(K(C)){const H=L.get(C);H&&(L.delete(C),V.splice(V.indexOf(H),1),H.children.forEach(e),H.alias.forEach(e))}else{let H=V.indexOf(C);H>-1&&(V.splice(H,1),C.record.name&&L.delete(C.record.name),C.children.forEach(e),C.alias.forEach(e))}}function r(){return V}function M(C){let H=0;while(H<V.length&&tC(C,V[H])>=0)H++;V.splice(H,0,C),C.record.name&&!fC(C)&&L.set(C.record.name,C)}function i(C,H){let n,t,e,r={};if("name"in C&&C.name){if(n=L.get(C.name),!n)throw Y(1,{location:C});e=n.record.name,r=f(AC(H.params,n.keys.filter((C=>!C.optional)).map((C=>C.name))),C.params),t=n.stringify(r)}else if("path"in C)t=C.path,n=V.find((C=>C.re.test(t))),n&&(r=n.parse(t),e=n.record.name);else{if(n=H.name?L.get(H.name):V.find((C=>C.re.test(H.path))),!n)throw Y(1,{location:C,currentLocation:H});e=n.record.name,r=f({},H.params,C.params),t=n.stringify(r)}const M=[];let i=n;while(i)M.unshift(i.record),i=i.parent;return{name:e,path:t,params:r,matched:M,meta:dC(M)}}return H=aC({strict:!1,end:!0,sensitive:!1},H),C.forEach((C=>t(C))),{addRoute:t,resolve:i,removeRoute:e,getRoutes:r,getRecordMatcher:n}}function AC(C,H){let V={};for(let L of H)L in C&&(V[L]=C[L]);return V}function oC(C){return{path:C.path,redirect:C.redirect,name:C.name,meta:C.meta||{},aliasOf:void 0,beforeEnter:C.beforeEnter,props:cC(C),children:C.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in C?C.components||{}:{default:C.component}}}function cC(C){const H={},V=C.props||!1;if("component"in C)H.default=V;else for(let L in C.components)H[L]="boolean"===typeof V?V:V[L];return H}function fC(C){while(C){if(C.record.aliasOf)return!0;C=C.parent}return!1}function dC(C){return C.reduce(((C,H)=>f(C,H.meta)),{})}function aC(C,H){let V={};for(let L in C)V[L]=L in H?H[L]:C[L];return V}const lC=/#/g,mC=/&/g,sC=/\//g,ZC=/=/g,pC=/\?/g,SC=/\+/g,hC=/%5B/g,OC=/%5D/g,gC=/%5E/g,vC=/%60/g,yC=/%7B/g,bC=/%7C/g,kC=/%7D/g,wC=/%20/g;function BC(C){return encodeURI(""+C).replace(bC,"|").replace(hC,"[").replace(OC,"]")}function xC(C){return BC(C).replace(yC,"{").replace(kC,"}").replace(gC,"^")}function PC(C){return BC(C).replace(SC,"%2B").replace(wC,"+").replace(lC,"%23").replace(mC,"%26").replace(vC,"`").replace(yC,"{").replace(kC,"}").replace(gC,"^")}function TC(C){return PC(C).replace(ZC,"%3D")}function FC(C){return BC(C).replace(lC,"%23").replace(pC,"%3F")}function RC(C){return FC(C).replace(sC,"%2F")}function EC(C){try{return decodeURIComponent(""+C)}catch(H){}return""+C}function DC(C){const H={};if(""===C||"?"===C)return H;const V="?"===C[0],L=(V?C.slice(1):C).split("&");for(let n=0;n<L.length;++n){const C=L[n].replace(SC," ");let V=C.indexOf("="),t=EC(V<0?C:C.slice(0,V)),e=V<0?null:EC(C.slice(V+1));if(t in H){let C=H[t];Array.isArray(C)||(C=H[t]=[C]),C.push(e)}else H[t]=e}return H}function _C(C){let H="";for(let V in C){const L=C[V];if(V=TC(V),null==L){void 0!==L&&(H+=(H.length?"&":"")+V);continue}let n=Array.isArray(L)?L.map((C=>C&&PC(C))):[L&&PC(L)];n.forEach((C=>{void 0!==C&&(H+=(H.length?"&":"")+V,null!=C&&(H+="="+C))}))}return H}function NC(C){const H={};for(let V in C){let L=C[V];void 0!==L&&(H[V]=Array.isArray(L)?L.map((C=>null==C?null:""+C)):null==L?L:""+L)}return H}function IC(){let C=[];function H(H){return C.push(H),()=>{const V=C.indexOf(H);V>-1&&C.splice(V,1)}}function V(){C=[]}return{add:H,list:()=>C,reset:V}}function WC(C,H,V,L,n){const t=L&&(L.enterCallbacks[n]=L.enterCallbacks[n]||[]);return()=>new Promise(((e,r)=>{const M=C=>{!1===C?r(Y(4,{from:V,to:H})):C instanceof Error?r(C):z(C)?r(Y(2,{from:H,to:C})):(t&&L.enterCallbacks[n]===t&&"function"===typeof C&&t.push(C),e())},i=C.call(L&&L.instances[n],H,V,M);let u=Promise.resolve(i);C.length<3&&(u=u.then(M)),u.catch((C=>r(C)))}))}function GC(C,H,V,L){const n=[];for(const t of C)for(const C in t.components){let e=t.components[C];if("beforeRouteEnter"===H||t.instances[C])if(UC(e)){let r=e.__vccOpts||e;const M=r[H];M&&n.push(WC(M,V,L,t,C))}else{let r=e();0,n.push((()=>r.then((n=>{if(!n)return Promise.reject(new Error(`Couldn't resolve component "${C}" at "${t.path}"`));const e=c(n)?n.default:n;t.components[C]=e;let r=e.__vccOpts||e;const M=r[H];return M&&WC(M,V,L,t,C)()}))))}}return n}function UC(C){return"object"===typeof C||"displayName"in C||"props"in C||"__vccOpts"in C}function jC(C){const H=(0,L.f3)(i),V=(0,L.f3)(u),t=(0,L.Fl)((()=>H.resolve((0,n.SU)(C.to)))),e=(0,L.Fl)((()=>{let{matched:C}=t.value,{length:H}=C;const L=C[H-1];let n=V.matched;if(!L||!n.length)return-1;let e=n.findIndex(h.bind(null,L));if(e>-1)return e;let r=qC(C[H-2]);return H>1&&qC(L)===r&&n[n.length-1].path!==r?n.findIndex(h.bind(null,C[H-2])):e})),r=(0,L.Fl)((()=>e.value>-1&&$C(V.params,t.value.params))),M=(0,L.Fl)((()=>e.value>-1&&e.value===V.matched.length-1&&O(V.params,t.value.params)));function A(V={}){return KC(V)?H[(0,n.SU)(C.replace)?"replace":"push"]((0,n.SU)(C.to)).catch(a):Promise.resolve()}return{route:t,href:(0,L.Fl)((()=>t.value.href)),isActive:r,isExactActive:M,navigate:A}}const QC=(0,L.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:jC,setup(C,{slots:H}){const V=(0,n.qj)(jC(C)),{options:t}=(0,L.f3)(i),e=(0,L.Fl)((()=>({[JC(C.activeClass,t.linkActiveClass,"router-link-active")]:V.isActive,[JC(C.exactActiveClass,t.linkExactActiveClass,"router-link-exact-active")]:V.isExactActive})));return()=>{const n=H.default&&H.default(V);return C.custom?n:(0,L.h)("a",{"aria-current":V.isExactActive?C.ariaCurrentValue:null,href:V.href,onClick:V.navigate,class:e.value},n)}}}),zC=QC;function KC(C){if(!(C.metaKey||C.altKey||C.ctrlKey||C.shiftKey)&&!C.defaultPrevented&&(void 0===C.button||0===C.button)){if(C.currentTarget&&C.currentTarget.getAttribute){const H=C.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(H))return}return C.preventDefault&&C.preventDefault(),!0}}function $C(C,H){for(let V in H){let L=H[V],n=C[V];if("string"===typeof L){if(L!==n)return!1}else if(!Array.isArray(n)||n.length!==L.length||L.some(((C,H)=>C!==n[H])))return!1}return!0}function qC(C){return C?C.aliasOf?C.aliasOf.path:C.path:""}const JC=(C,H,V)=>null!=C?C:null!=H?H:V,YC=(0,L.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(C,{attrs:H,slots:V}){const t=(0,L.f3)(A),e=(0,L.Fl)((()=>C.route||t.value)),i=(0,L.f3)(M,0),u=(0,L.Fl)((()=>e.value.matched[i]));(0,L.JJ)(M,i+1),(0,L.JJ)(r,u),(0,L.JJ)(A,e);const o=(0,n.iH)();return(0,L.YP)((()=>[o.value,u.value,C.name]),(([C,H,V],[L,n,t])=>{H&&(H.instances[V]=C,n&&n!==H&&C&&C===L&&(H.leaveGuards.size||(H.leaveGuards=n.leaveGuards),H.updateGuards.size||(H.updateGuards=n.updateGuards))),!C||!H||n&&h(H,n)&&L||(H.enterCallbacks[V]||[]).forEach((H=>H(C)))}),{flush:"post"}),()=>{const n=e.value,t=u.value,r=t&&t.components[C.name],M=C.name;if(!r)return XC(V.default,{Component:r,route:n});const i=t.props[C.name],A=i?!0===i?n.params:"function"===typeof i?i(n):i:null,c=C=>{C.component.isUnmounted&&(t.instances[M]=null)},d=(0,L.h)(r,f({},A,H,{onVnodeUnmounted:c,ref:o}));return XC(V.default,{Component:d,route:n})||d}}});function XC(C,H){if(!C)return null;const V=C(H);return 1===V.length?V[0]:V}const CH=YC;function HH(C){const H=uC(C.routes,C);let V=C.parseQuery||DC,t=C.stringifyQuery||_C,e=C.history;const r=IC(),M=IC(),c=IC(),l=(0,n.XI)($);let m=$;o&&C.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const p=d.bind(null,(C=>""+C)),h=d.bind(null,RC),O=d.bind(null,EC);function g(C,V){let L,n;return K(C)?(L=H.getRecordMatcher(C),n=V):n=C,H.addRoute(n,L)}function v(C){let V=H.getRecordMatcher(C);V&&H.removeRoute(V)}function y(){return H.getRoutes().map((C=>C.record))}function k(C){return!!H.getRecordMatcher(C)}function w(C,L){if(L=f({},L||l.value),"string"===typeof C){let n=s(V,C,L.path),t=H.resolve({path:n.path},L),r=e.createHref(n.fullPath);return f(n,t,{params:O(t.params),hash:EC(n.hash),redirectedFrom:void 0,href:r})}let n;"path"in C?n=f({},C,{path:s(V,C.path,L.path).path}):(n=f({},C,{params:h(C.params)}),L.params=h(L.params));let r=H.resolve(n,L);const M=C.hash||"";r.params=p(O(r.params));const i=Z(t,f({},C,{hash:xC(M),path:r.path}));let u=e.createHref(i);return f({fullPath:i,hash:M,query:t===_C?NC(C.query):C.query},r,{redirectedFrom:void 0,href:u})}function B(C){return"string"===typeof C?s(V,C,l.value.path):f({},C)}function x(C,H){if(m!==C)return Y(8,{from:H,to:C})}function P(C){return I(C)}function E(C){return P(f(B(C),{replace:!0}))}function N(C){const H=C.matched[C.matched.length-1];if(H&&H.redirect){const{redirect:V}=H;let L="function"===typeof V?V(C):V;return"string"===typeof L&&(L=L.includes("?")||L.includes("#")?L=B(L):{path:L},L.params={}),f({query:C.query,hash:C.hash,params:C.params},L)}}function I(C,H){const V=m=w(C),L=l.value,n=C.state,e=C.force,r=!0===C.replace,M=N(V);if(M)return I(f(B(M),{state:n,force:e,replace:r}),H||V);const i=V;let u;return i.redirectedFrom=H,!e&&S(t,L,V)&&(u=Y(16,{to:i,from:L}),nC(L,L,!0,!1)),(u?Promise.resolve(u):G(i,L)).catch((C=>X(C)?C:HC(C,i,L))).then((C=>{if(C){if(X(C,2))return I(f(B(C.to),{state:n,force:e,replace:r}),H||i)}else C=j(i,L,!0,r,n);return U(i,L,C),C}))}function W(C,H){const V=x(C,H);return V?Promise.reject(V):Promise.resolve()}function G(C,H){let V;const[L,n,t]=LH(C,H);V=GC(L.reverse(),"beforeRouteLeave",C,H);for(const r of L)r.leaveGuards.forEach((L=>{V.push(WC(L,C,H))}));const e=W.bind(null,C,H);return V.push(e),VH(V).then((()=>{V=[];for(const L of r.list())V.push(WC(L,C,H));return V.push(e),VH(V)})).then((()=>{V=GC(n,"beforeRouteUpdate",C,H);for(const L of n)L.updateGuards.forEach((L=>{V.push(WC(L,C,H))}));return V.push(e),VH(V)})).then((()=>{V=[];for(const L of C.matched)if(L.beforeEnter&&!H.matched.includes(L))if(Array.isArray(L.beforeEnter))for(const n of L.beforeEnter)V.push(WC(n,C,H));else V.push(WC(L.beforeEnter,C,H));return V.push(e),VH(V)})).then((()=>(C.matched.forEach((C=>C.enterCallbacks={})),V=GC(t,"beforeRouteEnter",C,H),V.push(e),VH(V)))).then((()=>{V=[];for(const L of M.list())V.push(WC(L,C,H));return V.push(e),VH(V)})).catch((C=>X(C,8)?C:Promise.reject(C)))}function U(C,H,V){for(const L of c.list())L(C,H,V)}function j(C,H,V,L,n){const t=x(C,H);if(t)return t;const r=H===$,M=o?history.state:{};V&&(L||r?e.replace(C.fullPath,f({scroll:r&&M&&M.scroll},n)):e.push(C.fullPath,n)),l.value=C,nC(C,H,V,r),LC()}let Q;function z(){Q=e.listen(((C,H,V)=>{let L=w(C);const n=N(L);if(n)return void I(f(n,{replace:!0}),L).catch(a);m=L;const t=l.value;o&&D(R(t.fullPath,V.delta),T()),G(L,t).catch((C=>X(C,12)?C:X(C,2)?(I(C.to,L).then((C=>{X(C,20)&&!V.delta&&V.type===b.pop&&e.go(-1,!1)})).catch(a),Promise.reject()):(V.delta&&e.go(-V.delta,!1),HC(C,L,t)))).then((C=>{C=C||j(L,t,!1),C&&(V.delta?e.go(-V.delta,!1):V.type===b.pop&&X(C,20)&&e.go(-1,!1)),U(L,t,C)})).catch(a)}))}let q,J=IC(),CC=IC();function HC(C,H,V){LC(C);const L=CC.list();return L.length?L.forEach((L=>L(C,H,V))):console.error(C),Promise.reject(C)}function VC(){return q&&l.value!==$?Promise.resolve():new Promise(((C,H)=>{J.add([C,H])}))}function LC(C){q||(q=!0,z(),J.list().forEach((([H,V])=>C?V(C):H())),J.reset())}function nC(H,V,n,t){const{scrollBehavior:e}=C;if(!o||!e)return Promise.resolve();let r=!n&&_(R(H.fullPath,0))||(t||!n)&&history.state&&history.state.scroll||null;return(0,L.Y3)().then((()=>e(H,V,r))).then((C=>C&&F(C))).catch((C=>HC(C,H,V)))}const tC=C=>e.go(C);let eC;const rC=new Set,MC={currentRoute:l,addRoute:g,removeRoute:v,hasRoute:k,getRoutes:y,resolve:w,options:C,push:P,replace:E,go:tC,back:()=>tC(-1),forward:()=>tC(1),beforeEach:r.add,beforeResolve:M.add,afterEach:c.add,onError:CC.add,isReady:VC,install(C){const H=this;C.component("RouterLink",zC),C.component("RouterView",CH),C.config.globalProperties.$router=H,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,n.SU)(l)}),o&&!eC&&l.value===$&&(eC=!0,P(e.location).catch((C=>{0})));const V={};for(let n in $)V[n]=(0,L.Fl)((()=>l.value[n]));C.provide(i,H),C.provide(u,(0,n.qj)(V)),C.provide(A,l);let t=C.unmount;rC.add(C),C.unmount=function(){rC.delete(C),rC.size<1&&(Q(),l.value=$,eC=!1,q=!1),t()}}};return MC}function VH(C){return C.reduce(((C,H)=>C.then((()=>H()))),Promise.resolve())}function LH(C,H){const V=[],L=[],n=[],t=Math.max(H.matched.length,C.matched.length);for(let e=0;e<t;e++){const t=H.matched[e];t&&(C.matched.find((C=>h(C,t)))?L.push(t):V.push(t));const r=C.matched[e];r&&(H.matched.find((C=>h(C,r)))||n.push(r))}return[V,L,n]}function nH(){return(0,L.f3)(u)}},4709:function(C,H,V){"use strict";V.d(H,{MT:function(){return z}});var L=V(6252),n=V(2262);function t(){return e().__VUE_DEVTOOLS_GLOBAL_HOOK__}function e(){return"undefined"!==typeof navigator?window:"undefined"!==typeof V.g?V.g:{}}const r="devtools-plugin:setup";function M(C,H){const V=t();if(V)V.emit(r,C,H);else{const V=e(),L=V.__VUE_DEVTOOLS_PLUGINS__=V.__VUE_DEVTOOLS_PLUGINS__||[];L.push({pluginDescriptor:C,setupFn:H})}}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var i="store";function u(C,H){Object.keys(C).forEach((function(V){return H(C[V],V)}))}function A(C){return null!==C&&"object"===typeof C}function o(C){return C&&"function"===typeof C.then}function c(C,H){return function(){return C(H)}}function f(C,H,V){return H.indexOf(C)<0&&(V&&V.prepend?H.unshift(C):H.push(C)),function(){var V=H.indexOf(C);V>-1&&H.splice(V,1)}}function d(C,H){C._actions=Object.create(null),C._mutations=Object.create(null),C._wrappedGetters=Object.create(null),C._modulesNamespaceMap=Object.create(null);var V=C.state;l(C,V,[],C._modules.root,!0),a(C,V,H)}function a(C,H,V){var L=C._state;C.getters={},C._makeLocalGettersCache=Object.create(null);var t=C._wrappedGetters,e={};u(t,(function(H,V){e[V]=c(H,C),Object.defineProperty(C.getters,V,{get:function(){return e[V]()},enumerable:!0})})),C._state=(0,n.qj)({data:H}),C.strict&&h(C),L&&V&&C._withCommit((function(){L.data=null}))}function l(C,H,V,L,n){var t=!V.length,e=C._modules.getNamespace(V);if(L.namespaced&&(C._modulesNamespaceMap[e],C._modulesNamespaceMap[e]=L),!t&&!n){var r=O(H,V.slice(0,-1)),M=V[V.length-1];C._withCommit((function(){r[M]=L.state}))}var i=L.context=m(C,e,V);L.forEachMutation((function(H,V){var L=e+V;Z(C,L,H,i)})),L.forEachAction((function(H,V){var L=H.root?V:e+V,n=H.handler||H;p(C,L,n,i)})),L.forEachGetter((function(H,V){var L=e+V;S(C,L,H,i)})),L.forEachChild((function(L,t){l(C,H,V.concat(t),L,n)}))}function m(C,H,V){var L=""===H,n={dispatch:L?C.dispatch:function(V,L,n){var t=g(V,L,n),e=t.payload,r=t.options,M=t.type;return r&&r.root||(M=H+M),C.dispatch(M,e)},commit:L?C.commit:function(V,L,n){var t=g(V,L,n),e=t.payload,r=t.options,M=t.type;r&&r.root||(M=H+M),C.commit(M,e,r)}};return Object.defineProperties(n,{getters:{get:L?function(){return C.getters}:function(){return s(C,H)}},state:{get:function(){return O(C.state,V)}}}),n}function s(C,H){if(!C._makeLocalGettersCache[H]){var V={},L=H.length;Object.keys(C.getters).forEach((function(n){if(n.slice(0,L)===H){var t=n.slice(L);Object.defineProperty(V,t,{get:function(){return C.getters[n]},enumerable:!0})}})),C._makeLocalGettersCache[H]=V}return C._makeLocalGettersCache[H]}function Z(C,H,V,L){var n=C._mutations[H]||(C._mutations[H]=[]);n.push((function(H){V.call(C,L.state,H)}))}function p(C,H,V,L){var n=C._actions[H]||(C._actions[H]=[]);n.push((function(H){var n=V.call(C,{dispatch:L.dispatch,commit:L.commit,getters:L.getters,state:L.state,rootGetters:C.getters,rootState:C.state},H);return o(n)||(n=Promise.resolve(n)),C._devtoolHook?n.catch((function(H){throw C._devtoolHook.emit("vuex:error",H),H})):n}))}function S(C,H,V,L){C._wrappedGetters[H]||(C._wrappedGetters[H]=function(C){return V(L.state,L.getters,C.state,C.getters)})}function h(C){(0,L.YP)((function(){return C._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function O(C,H){return H.reduce((function(C,H){return C[H]}),C)}function g(C,H,V){return A(C)&&C.type&&(V=H,H=C,C=C.type),{type:C,payload:H,options:V}}var v="vuex bindings",y="vuex:mutations",b="vuex:actions",k="vuex",w=0;function B(C,H){M({id:"org.vuejs.vuex",app:C,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[v]},(function(V){V.addTimelineLayer({id:y,label:"Vuex Mutations",color:x}),V.addTimelineLayer({id:b,label:"Vuex Actions",color:x}),V.addInspector({id:k,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),V.on.getInspectorTree((function(V){if(V.app===C&&V.inspectorId===k)if(V.filter){var L=[];D(L,H._modules.root,V.filter,""),V.rootNodes=L}else V.rootNodes=[E(H._modules.root,"")]})),V.on.getInspectorState((function(V){if(V.app===C&&V.inspectorId===k){var L=V.nodeId;s(H,L),V.state=_(I(H._modules,L),"root"===L?H.getters:H._makeLocalGettersCache,L)}})),V.on.editInspectorState((function(V){if(V.app===C&&V.inspectorId===k){var L=V.nodeId,n=V.path;"root"!==L&&(n=L.split("/").filter(Boolean).concat(n)),H._withCommit((function(){V.set(H._state.data,n,V.state.value)}))}})),H.subscribe((function(C,H){var L={};C.payload&&(L.payload=C.payload),L.state=H,V.notifyComponentUpdate(),V.sendInspectorTree(k),V.sendInspectorState(k),V.addTimelineEvent({layerId:y,event:{time:Date.now(),title:C.type,data:L}})})),H.subscribeAction({before:function(C,H){var L={};C.payload&&(L.payload=C.payload),C._id=w++,C._time=Date.now(),L.state=H,V.addTimelineEvent({layerId:b,event:{time:C._time,title:C.type,groupId:C._id,subtitle:"start",data:L}})},after:function(C,H){var L={},n=Date.now()-C._time;L.duration={_custom:{type:"duration",display:n+"ms",tooltip:"Action duration",value:n}},C.payload&&(L.payload=C.payload),L.state=H,V.addTimelineEvent({layerId:b,event:{time:Date.now(),title:C.type,groupId:C._id,subtitle:"end",data:L}})}})}))}var x=8702998,P=6710886,T=16777215,F={label:"namespaced",textColor:T,backgroundColor:P};function R(C){return C&&"root"!==C?C.split("/").slice(-2,-1)[0]:"Root"}function E(C,H){return{id:H||"root",label:R(H),tags:C.namespaced?[F]:[],children:Object.keys(C._children).map((function(V){return E(C._children[V],H+V+"/")}))}}function D(C,H,V,L){L.includes(V)&&C.push({id:L||"root",label:L.endsWith("/")?L.slice(0,L.length-1):L||"Root",tags:H.namespaced?[F]:[]}),Object.keys(H._children).forEach((function(n){D(C,H._children[n],V,L+n+"/")}))}function _(C,H,V){H="root"===V?H:H[V];var L=Object.keys(H),n={state:Object.keys(C.state).map((function(H){return{key:H,editable:!0,value:C.state[H]}}))};if(L.length){var t=N(H);n.getters=Object.keys(t).map((function(C){return{key:C.endsWith("/")?R(C):C,editable:!1,value:W((function(){return t[C]}))}}))}return n}function N(C){var H={};return Object.keys(C).forEach((function(V){var L=V.split("/");if(L.length>1){var n=H,t=L.pop();L.forEach((function(C){n[C]||(n[C]={_custom:{value:{},display:C,tooltip:"Module",abstract:!0}}),n=n[C]._custom.value})),n[t]=W((function(){return C[V]}))}else H[V]=W((function(){return C[V]}))})),H}function I(C,H){var V=H.split("/").filter((function(C){return C}));return V.reduce((function(C,L,n){var t=C[L];if(!t)throw new Error('Missing module "'+L+'" for path "'+H+'".');return n===V.length-1?t:t._children}),"root"===H?C:C.root._children)}function W(C){try{return C()}catch(H){return H}}var G=function(C,H){this.runtime=H,this._children=Object.create(null),this._rawModule=C;var V=C.state;this.state=("function"===typeof V?V():V)||{}},U={namespaced:{configurable:!0}};U.namespaced.get=function(){return!!this._rawModule.namespaced},G.prototype.addChild=function(C,H){this._children[C]=H},G.prototype.removeChild=function(C){delete this._children[C]},G.prototype.getChild=function(C){return this._children[C]},G.prototype.hasChild=function(C){return C in this._children},G.prototype.update=function(C){this._rawModule.namespaced=C.namespaced,C.actions&&(this._rawModule.actions=C.actions),C.mutations&&(this._rawModule.mutations=C.mutations),C.getters&&(this._rawModule.getters=C.getters)},G.prototype.forEachChild=function(C){u(this._children,C)},G.prototype.forEachGetter=function(C){this._rawModule.getters&&u(this._rawModule.getters,C)},G.prototype.forEachAction=function(C){this._rawModule.actions&&u(this._rawModule.actions,C)},G.prototype.forEachMutation=function(C){this._rawModule.mutations&&u(this._rawModule.mutations,C)},Object.defineProperties(G.prototype,U);var j=function(C){this.register([],C,!1)};function Q(C,H,V){if(H.update(V),V.modules)for(var L in V.modules){if(!H.getChild(L))return void 0;Q(C.concat(L),H.getChild(L),V.modules[L])}}j.prototype.get=function(C){return C.reduce((function(C,H){return C.getChild(H)}),this.root)},j.prototype.getNamespace=function(C){var H=this.root;return C.reduce((function(C,V){return H=H.getChild(V),C+(H.namespaced?V+"/":"")}),"")},j.prototype.update=function(C){Q([],this.root,C)},j.prototype.register=function(C,H,V){var L=this;void 0===V&&(V=!0);var n=new G(H,V);if(0===C.length)this.root=n;else{var t=this.get(C.slice(0,-1));t.addChild(C[C.length-1],n)}H.modules&&u(H.modules,(function(H,n){L.register(C.concat(n),H,V)}))},j.prototype.unregister=function(C){var H=this.get(C.slice(0,-1)),V=C[C.length-1],L=H.getChild(V);L&&L.runtime&&H.removeChild(V)},j.prototype.isRegistered=function(C){var H=this.get(C.slice(0,-1)),V=C[C.length-1];return!!H&&H.hasChild(V)};function z(C){return new K(C)}var K=function(C){var H=this;void 0===C&&(C={});var V=C.plugins;void 0===V&&(V=[]);var L=C.strict;void 0===L&&(L=!1);var n=C.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new j(C),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=n;var t=this,e=this,r=e.dispatch,M=e.commit;this.dispatch=function(C,H){return r.call(t,C,H)},this.commit=function(C,H,V){return M.call(t,C,H,V)},this.strict=L;var i=this._modules.root.state;l(this,i,[],this._modules.root),a(this,i),V.forEach((function(C){return C(H)}))},$={state:{configurable:!0}};K.prototype.install=function(C,H){C.provide(H||i,this),C.config.globalProperties.$store=this;var V=void 0!==this._devtools&&this._devtools;V&&B(C,this)},$.state.get=function(){return this._state.data},$.state.set=function(C){0},K.prototype.commit=function(C,H,V){var L=this,n=g(C,H,V),t=n.type,e=n.payload,r=(n.options,{type:t,payload:e}),M=this._mutations[t];M&&(this._withCommit((function(){M.forEach((function(C){C(e)}))})),this._subscribers.slice().forEach((function(C){return C(r,L.state)})))},K.prototype.dispatch=function(C,H){var V=this,L=g(C,H),n=L.type,t=L.payload,e={type:n,payload:t},r=this._actions[n];if(r){try{this._actionSubscribers.slice().filter((function(C){return C.before})).forEach((function(C){return C.before(e,V.state)}))}catch(i){0}var M=r.length>1?Promise.all(r.map((function(C){return C(t)}))):r[0](t);return new Promise((function(C,H){M.then((function(H){try{V._actionSubscribers.filter((function(C){return C.after})).forEach((function(C){return C.after(e,V.state)}))}catch(i){0}C(H)}),(function(C){try{V._actionSubscribers.filter((function(C){return C.error})).forEach((function(H){return H.error(e,V.state,C)}))}catch(i){0}H(C)}))}))}},K.prototype.subscribe=function(C,H){return f(C,this._subscribers,H)},K.prototype.subscribeAction=function(C,H){var V="function"===typeof C?{before:C}:C;return f(V,this._actionSubscribers,H)},K.prototype.watch=function(C,H,V){var n=this;return(0,L.YP)((function(){return C(n.state,n.getters)}),H,Object.assign({},V))},K.prototype.replaceState=function(C){var H=this;this._withCommit((function(){H._state.data=C}))},K.prototype.registerModule=function(C,H,V){void 0===V&&(V={}),"string"===typeof C&&(C=[C]),this._modules.register(C,H),l(this,this.state,C,this._modules.get(C),V.preserveState),a(this,this.state)},K.prototype.unregisterModule=function(C){var H=this;"string"===typeof C&&(C=[C]),this._modules.unregister(C),this._withCommit((function(){var V=O(H.state,C.slice(0,-1));delete V[C[C.length-1]]})),d(this)},K.prototype.hasModule=function(C){return"string"===typeof C&&(C=[C]),this._modules.isRegistered(C)},K.prototype.hotUpdate=function(C){this._modules.update(C),d(this,!0)},K.prototype._withCommit=function(C){var H=this._committing;this._committing=!0,C(),this._committing=H},Object.defineProperties(K.prototype,$);Y((function(C,H){var V={};return q(H).forEach((function(H){var L=H.key,n=H.val;V[L]=function(){var H=this.$store.state,V=this.$store.getters;if(C){var L=X(this.$store,"mapState",C);if(!L)return;H=L.context.state,V=L.context.getters}return"function"===typeof n?n.call(this,H,V):H[n]},V[L].vuex=!0})),V})),Y((function(C,H){var V={};return q(H).forEach((function(H){var L=H.key,n=H.val;V[L]=function(){var H=[],V=arguments.length;while(V--)H[V]=arguments[V];var L=this.$store.commit;if(C){var t=X(this.$store,"mapMutations",C);if(!t)return;L=t.context.commit}return"function"===typeof n?n.apply(this,[L].concat(H)):L.apply(this.$store,[n].concat(H))}})),V})),Y((function(C,H){var V={};return q(H).forEach((function(H){var L=H.key,n=H.val;n=C+n,V[L]=function(){if(!C||X(this.$store,"mapGetters",C))return this.$store.getters[n]},V[L].vuex=!0})),V})),Y((function(C,H){var V={};return q(H).forEach((function(H){var L=H.key,n=H.val;V[L]=function(){var H=[],V=arguments.length;while(V--)H[V]=arguments[V];var L=this.$store.dispatch;if(C){var t=X(this.$store,"mapActions",C);if(!t)return;L=t.context.dispatch}return"function"===typeof n?n.apply(this,[L].concat(H)):L.apply(this.$store,[n].concat(H))}})),V}));function q(C){return J(C)?Array.isArray(C)?C.map((function(C){return{key:C,val:C}})):Object.keys(C).map((function(H){return{key:H,val:C[H]}})):[]}function J(C){return Array.isArray(C)||A(C)}function Y(C){return function(H,V){return"string"!==typeof H?(V=H,H=""):"/"!==H.charAt(H.length-1)&&(H+="/"),C(H,V)}}function X(C,H,V){var L=C._modulesNamespaceMap[V];return L}}}]);
//# sourceMappingURL=chunk-vendors-legacy.b98685e5.js.map