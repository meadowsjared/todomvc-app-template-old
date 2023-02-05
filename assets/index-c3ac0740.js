(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Pr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Or(t){if(O(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=pe(s)?th(s):Or(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(pe(t))return t;if(ie(t))return t}}const Ju=/;(?![^(]*\))/g,Zu=/:([^]+)/,eh=/\/\*.*?\*\//gs;function th(t){const e={};return t.replace(eh,"").split(Ju).forEach(n=>{if(n){const s=n.split(Zu);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function bn(t){let e="";if(pe(t))e=t;else if(O(t))for(let n=0;n<t.length;n++){const s=bn(t[n]);s&&(e+=s+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const nh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sh=Pr(nh);function cc(t){return!!t||t===""}function ih(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Zs(t[s],e[s]);return n}function Zs(t,e){if(t===e)return!0;let n=Uo(t),s=Uo(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=jn(t),s=jn(e),n||s)return t===e;if(n=O(t),s=O(e),n||s)return n&&s?ih(t,e):!1;if(n=ie(t),s=ie(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Zs(t[o],e[o]))return!1}}return String(t)===String(e)}function ac(t,e){return t.findIndex(n=>Zs(n,e))}const Ki=t=>pe(t)?t:t==null?"":O(t)||ie(t)&&(t.toString===fc||!L(t.toString))?JSON.stringify(t,uc,2):String(t),uc=(t,e)=>e&&e.__v_isRef?uc(t,e.value):sn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:ti(e)?{[`Set(${e.size})`]:[...e.values()]}:ie(e)&&!O(e)&&!dc(e)?String(e):e,se={},nn=[],Ye=()=>{},rh=()=>!1,oh=/^on[^a-z]/,ei=t=>oh.test(t),Dr=t=>t.startsWith("onUpdate:"),be=Object.assign,Mr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lh=Object.prototype.hasOwnProperty,V=(t,e)=>lh.call(t,e),O=Array.isArray,sn=t=>ls(t)==="[object Map]",ti=t=>ls(t)==="[object Set]",Uo=t=>ls(t)==="[object Date]",L=t=>typeof t=="function",pe=t=>typeof t=="string",jn=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",hc=t=>ie(t)&&L(t.then)&&L(t.catch),fc=Object.prototype.toString,ls=t=>fc.call(t),ch=t=>ls(t).slice(8,-1),dc=t=>ls(t)==="[object Object]",Fr=t=>pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ss=Pr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ni=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ah=/-(\w)/g,pn=ni(t=>t.replace(ah,(e,n)=>n?n.toUpperCase():"")),uh=/\B([A-Z])/g,wn=ni(t=>t.replace(uh,"-$1").toLowerCase()),pc=ni(t=>t.charAt(0).toUpperCase()+t.slice(1)),xi=ni(t=>t?`on${pc(t)}`:""),Kn=(t,e)=>!Object.is(t,e),xs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},As=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ks=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Wo;const hh=()=>Wo||(Wo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Pe;class _c{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Pe,!e&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Pe;try{return Pe=this,e()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function gc(t){return new _c(t)}function fh(t,e=Pe){e&&e.active&&e.effects.push(t)}function dh(){return Pe}function ph(t){Pe&&Pe.cleanups.push(t)}const Lr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},mc=t=>(t.w&wt)>0,yc=t=>(t.n&wt)>0,_h=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=wt},gh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];mc(i)&&!yc(i)?i.delete(t):e[n++]=i,i.w&=~wt,i.n&=~wt}e.length=n}},zi=new WeakMap;let Mn=0,wt=1;const qi=30;let je;const Ht=Symbol(""),Gi=Symbol("");class Br{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fh(this,s)}run(){if(!this.active)return this.fn();let e=je,n=mt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=je,je=this,mt=!0,wt=1<<++Mn,Mn<=qi?_h(this):Ho(this),this.fn()}finally{Mn<=qi&&gh(this),wt=1<<--Mn,je=this.parent,mt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){je===this?this.deferStop=!0:this.active&&(Ho(this),this.onStop&&this.onStop(),this.active=!1)}}function Ho(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let mt=!0;const vc=[];function In(){vc.push(mt),mt=!1}function Tn(){const t=vc.pop();mt=t===void 0?!0:t}function Oe(t,e,n){if(mt&&je){let s=zi.get(t);s||zi.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Lr()),Cc(i)}}function Cc(t,e){let n=!1;Mn<=qi?yc(t)||(t.n|=wt,n=!mc(t)):n=!t.has(je),n&&(t.add(je),je.deps.push(t))}function ct(t,e,n,s,i,r){const o=zi.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&O(t)){const c=ks(s);o.forEach((a,h)=>{(h==="length"||h>=c)&&l.push(a)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":O(t)?Fr(n)&&l.push(o.get("length")):(l.push(o.get(Ht)),sn(t)&&l.push(o.get(Gi)));break;case"delete":O(t)||(l.push(o.get(Ht)),sn(t)&&l.push(o.get(Gi)));break;case"set":sn(t)&&l.push(o.get(Ht));break}if(l.length===1)l[0]&&Yi(l[0]);else{const c=[];for(const a of l)a&&c.push(...a);Yi(Lr(c))}}function Yi(t,e){const n=O(t)?t:[...t];for(const s of n)s.computed&&Vo(s);for(const s of n)s.computed||Vo(s)}function Vo(t,e){(t!==je||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const mh=Pr("__proto__,__v_isRef,__isVue"),Ec=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jn)),yh=Ur(),vh=Ur(!1,!0),Ch=Ur(!0),$o=Eh();function Eh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=$(this);for(let r=0,o=this.length;r<o;r++)Oe(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map($)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){In();const s=$(this)[e].apply(this,n);return Tn(),s}}),t}function Ur(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Lh:Sc:e?Tc:Ic).get(s))return s;const o=O(s);if(!t&&o&&V($o,i))return Reflect.get($o,i,r);const l=Reflect.get(s,i,r);return(jn(i)?Ec.has(i):mh(i))||(t||Oe(s,"get",i),e)?l:oe(l)?o&&Fr(i)?l:l.value:ie(l)?t?xc(l):ii(l):l}}const bh=bc(),wh=bc(!0);function bc(t=!1){return function(n,s,i,r){let o=n[s];if(_n(o)&&oe(o)&&!oe(i))return!1;if(!t&&(!Ps(i)&&!_n(i)&&(o=$(o),i=$(i)),!O(n)&&oe(o)&&!oe(i)))return o.value=i,!0;const l=O(n)&&Fr(s)?Number(s)<n.length:V(n,s),c=Reflect.set(n,s,i,r);return n===$(r)&&(l?Kn(i,o)&&ct(n,"set",s,i):ct(n,"add",s,i)),c}}function Ih(t,e){const n=V(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ct(t,"delete",e,void 0),s}function Th(t,e){const n=Reflect.has(t,e);return(!jn(e)||!Ec.has(e))&&Oe(t,"has",e),n}function Sh(t){return Oe(t,"iterate",O(t)?"length":Ht),Reflect.ownKeys(t)}const wc={get:yh,set:bh,deleteProperty:Ih,has:Th,ownKeys:Sh},xh={get:Ch,set(t,e){return!0},deleteProperty(t,e){return!0}},Nh=be({},wc,{get:vh,set:wh}),Wr=t=>t,si=t=>Reflect.getPrototypeOf(t);function ms(t,e,n=!1,s=!1){t=t.__v_raw;const i=$(t),r=$(e);n||(e!==r&&Oe(i,"get",e),Oe(i,"get",r));const{has:o}=si(i),l=s?Wr:n?$r:zn;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function ys(t,e=!1){const n=this.__v_raw,s=$(n),i=$(t);return e||(t!==i&&Oe(s,"has",t),Oe(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function vs(t,e=!1){return t=t.__v_raw,!e&&Oe($(t),"iterate",Ht),Reflect.get(t,"size",t)}function jo(t){t=$(t);const e=$(this);return si(e).has.call(e,t)||(e.add(t),ct(e,"add",t,t)),this}function Ko(t,e){e=$(e);const n=$(this),{has:s,get:i}=si(n);let r=s.call(n,t);r||(t=$(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Kn(e,o)&&ct(n,"set",t,e):ct(n,"add",t,e),this}function zo(t){const e=$(this),{has:n,get:s}=si(e);let i=n.call(e,t);i||(t=$(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&ct(e,"delete",t,void 0),r}function qo(){const t=$(this),e=t.size!==0,n=t.clear();return e&&ct(t,"clear",void 0,void 0),n}function Cs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=$(o),c=e?Wr:t?$r:zn;return!t&&Oe(l,"iterate",Ht),o.forEach((a,h)=>s.call(i,c(a),c(h),r))}}function Es(t,e,n){return function(...s){const i=this.__v_raw,r=$(i),o=sn(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),h=n?Wr:e?$r:zn;return!e&&Oe(r,"iterate",c?Gi:Ht),{next(){const{value:u,done:d}=a.next();return d?{value:u,done:d}:{value:l?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function pt(t){return function(...e){return t==="delete"?!1:this}}function Rh(){const t={get(r){return ms(this,r)},get size(){return vs(this)},has:ys,add:jo,set:Ko,delete:zo,clear:qo,forEach:Cs(!1,!1)},e={get(r){return ms(this,r,!1,!0)},get size(){return vs(this)},has:ys,add:jo,set:Ko,delete:zo,clear:qo,forEach:Cs(!1,!0)},n={get(r){return ms(this,r,!0)},get size(){return vs(this,!0)},has(r){return ys.call(this,r,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:Cs(!0,!1)},s={get(r){return ms(this,r,!0,!0)},get size(){return vs(this,!0)},has(r){return ys.call(this,r,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:Cs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Es(r,!1,!1),n[r]=Es(r,!0,!1),e[r]=Es(r,!1,!0),s[r]=Es(r,!0,!0)}),[t,n,e,s]}const[Ah,kh,Ph,Oh]=Rh();function Hr(t,e){const n=e?t?Oh:Ph:t?kh:Ah;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(V(n,i)&&i in s?n:s,i,r)}const Dh={get:Hr(!1,!1)},Mh={get:Hr(!1,!0)},Fh={get:Hr(!0,!1)},Ic=new WeakMap,Tc=new WeakMap,Sc=new WeakMap,Lh=new WeakMap;function Bh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uh(t){return t.__v_skip||!Object.isExtensible(t)?0:Bh(ch(t))}function ii(t){return _n(t)?t:Vr(t,!1,wc,Dh,Ic)}function Wh(t){return Vr(t,!1,Nh,Mh,Tc)}function xc(t){return Vr(t,!0,xh,Fh,Sc)}function Vr(t,e,n,s,i){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Uh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function yt(t){return _n(t)?yt(t.__v_raw):!!(t&&t.__v_isReactive)}function _n(t){return!!(t&&t.__v_isReadonly)}function Ps(t){return!!(t&&t.__v_isShallow)}function Nc(t){return yt(t)||_n(t)}function $(t){const e=t&&t.__v_raw;return e?$(e):t}function gn(t){return As(t,"__v_skip",!0),t}const zn=t=>ie(t)?ii(t):t,$r=t=>ie(t)?xc(t):t;function Rc(t){mt&&je&&(t=$(t),Cc(t.dep||(t.dep=Lr())))}function Ac(t,e){t=$(t),t.dep&&Yi(t.dep)}function oe(t){return!!(t&&t.__v_isRef===!0)}function Vt(t){return Hh(t,!1)}function Hh(t,e){return oe(t)?t:new Vh(t,e)}class Vh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:$(e),this._value=n?e:zn(e)}get value(){return Rc(this),this._value}set value(e){const n=this.__v_isShallow||Ps(e)||_n(e);e=n?e:$(e),Kn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:zn(e),Ac(this))}}function ce(t){return oe(t)?t.value:t}const $h={get:(t,e,n)=>ce(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return oe(i)&&!oe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function kc(t){return yt(t)?t:new Proxy(t,$h)}function jh(t){const e=O(t)?new Array(t.length):{};for(const n in t)e[n]=zh(t,n);return e}class Kh{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function zh(t,e,n){const s=t[e];return oe(s)?s:new Kh(t,e,n)}var Pc;class qh{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Pc]=!1,this._dirty=!0,this.effect=new Br(e,()=>{this._dirty||(this._dirty=!0,Ac(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=$(this);return Rc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Pc="__v_isReadonly";function Gh(t,e,n=!1){let s,i;const r=L(t);return r?(s=t,i=Ye):(s=t.get,i=t.set),new qh(s,i,r||!i,n)}function vt(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){ri(r,e,n)}return i}function Be(t,e,n,s){if(L(t)){const r=vt(t,e,n,s);return r&&hc(r)&&r.catch(o=>{ri(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Be(t[r],e,n,s));return i}function ri(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const a=r.ec;if(a){for(let h=0;h<a.length;h++)if(a[h](t,o,l)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){vt(c,null,10,[t,o,l]);return}}Yh(t,n,i,s)}function Yh(t,e,n,s=!0){console.error(t)}let qn=!1,Qi=!1;const Ee=[];let nt=0;const rn=[];let it=null,Dt=0;const Oc=Promise.resolve();let jr=null;function Dc(t){const e=jr||Oc;return t?e.then(this?t.bind(this):t):e}function Qh(t){let e=nt+1,n=Ee.length;for(;e<n;){const s=e+n>>>1;Gn(Ee[s])<t?e=s+1:n=s}return e}function Kr(t){(!Ee.length||!Ee.includes(t,qn&&t.allowRecurse?nt+1:nt))&&(t.id==null?Ee.push(t):Ee.splice(Qh(t.id),0,t),Mc())}function Mc(){!qn&&!Qi&&(Qi=!0,jr=Oc.then(Lc))}function Xh(t){const e=Ee.indexOf(t);e>nt&&Ee.splice(e,1)}function Jh(t){O(t)?rn.push(...t):(!it||!it.includes(t,t.allowRecurse?Dt+1:Dt))&&rn.push(t),Mc()}function Go(t,e=qn?nt+1:0){for(;e<Ee.length;e++){const n=Ee[e];n&&n.pre&&(Ee.splice(e,1),e--,n())}}function Fc(t){if(rn.length){const e=[...new Set(rn)];if(rn.length=0,it){it.push(...e);return}for(it=e,it.sort((n,s)=>Gn(n)-Gn(s)),Dt=0;Dt<it.length;Dt++)it[Dt]();it=null,Dt=0}}const Gn=t=>t.id==null?1/0:t.id,Zh=(t,e)=>{const n=Gn(t)-Gn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Lc(t){Qi=!1,qn=!0,Ee.sort(Zh);const e=Ye;try{for(nt=0;nt<Ee.length;nt++){const n=Ee[nt];n&&n.active!==!1&&vt(n,null,14)}}finally{nt=0,Ee.length=0,Fc(),qn=!1,jr=null,(Ee.length||rn.length)&&Lc()}}function ef(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||se;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:d}=s[h]||se;d&&(i=n.map(g=>pe(g)?g.trim():g)),u&&(i=n.map(ks))}let l,c=s[l=xi(e)]||s[l=xi(pn(e))];!c&&r&&(c=s[l=xi(wn(e))]),c&&Be(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Be(a,t,6,i)}}function Bc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!L(t)){const c=a=>{const h=Bc(a,e,!0);h&&(l=!0,be(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(ie(t)&&s.set(t,null),null):(O(r)?r.forEach(c=>o[c]=null):be(o,r),ie(t)&&s.set(t,o),o)}function oi(t,e){return!t||!ei(e)?!1:(e=e.slice(2).replace(/Once$/,""),V(t,e[0].toLowerCase()+e.slice(1))||V(t,wn(e))||V(t,e))}let Le=null,li=null;function Os(t){const e=Le;return Le=t,li=t&&t.type.__scopeId||null,e}function Uc(t){li=t}function Wc(){li=null}function tf(t,e=Le,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&sl(-1);const r=Os(e);let o;try{o=t(...i)}finally{Os(r),s._d&&sl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ni(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:c,emit:a,render:h,renderCache:u,data:d,setupState:g,ctx:C,inheritAttrs:I}=t;let k,F;const ue=Os(t);try{if(n.shapeFlag&4){const X=i||s;k=tt(h.call(X,X,u,r,g,d,C)),F=c}else{const X=e;k=tt(X.length>1?X(r,{attrs:c,slots:l,emit:a}):X(r,null)),F=e.props?c:nf(c)}}catch(X){Bn.length=0,ri(X,t,1),k=Ue(Qe)}let D=k;if(F&&I!==!1){const X=Object.keys(F),{shapeFlag:G}=D;X.length&&G&7&&(o&&X.some(Dr)&&(F=sf(F,o)),D=It(D,F))}return n.dirs&&(D=It(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),k=D,Os(ue),k}const nf=t=>{let e;for(const n in t)(n==="class"||n==="style"||ei(n))&&((e||(e={}))[n]=t[n]);return e},sf=(t,e)=>{const n={};for(const s in t)(!Dr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function rf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Yo(s,o,a):!!o;if(c&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(o[d]!==s[d]&&!oi(a,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Yo(s,o,a):!0:!!o;return!1}function Yo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!oi(n,r))return!0}return!1}function of({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const lf=t=>t.__isSuspense;function cf(t,e){e&&e.pendingBranch?O(t)?e.effects.push(...t):e.effects.push(t):Jh(t)}function af(t,e){if(ve){let n=ve.provides;const s=ve.parent&&ve.parent.provides;s===n&&(n=ve.provides=Object.create(s)),n[t]=e}}function Fn(t,e,n=!1){const s=ve||Le;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&L(e)?e.call(s.proxy):e}}const bs={};function on(t,e,n){return Hc(t,e,n)}function Hc(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=se){const l=ve;let c,a=!1,h=!1;if(oe(t)?(c=()=>t.value,a=Ps(t)):yt(t)?(c=()=>t,s=!0):O(t)?(h=!0,a=t.some(D=>yt(D)||Ps(D)),c=()=>t.map(D=>{if(oe(D))return D.value;if(yt(D))return Bt(D);if(L(D))return vt(D,l,2)})):L(t)?e?c=()=>vt(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return u&&u(),Be(t,l,3,[d])}:c=Ye,e&&s){const D=c;c=()=>Bt(D())}let u,d=D=>{u=F.onStop=()=>{vt(D,l,4)}},g;if(Qn)if(d=Ye,e?n&&Be(e,l,3,[c(),h?[]:void 0,d]):c(),i==="sync"){const D=sd();g=D.__watcherHandles||(D.__watcherHandles=[])}else return Ye;let C=h?new Array(t.length).fill(bs):bs;const I=()=>{if(F.active)if(e){const D=F.run();(s||a||(h?D.some((X,G)=>Kn(X,C[G])):Kn(D,C)))&&(u&&u(),Be(e,l,3,[D,C===bs?void 0:h&&C[0]===bs?[]:C,d]),C=D)}else F.run()};I.allowRecurse=!!e;let k;i==="sync"?k=I:i==="post"?k=()=>Se(I,l&&l.suspense):(I.pre=!0,l&&(I.id=l.uid),k=()=>Kr(I));const F=new Br(c,k);e?n?I():C=F.run():i==="post"?Se(F.run.bind(F),l&&l.suspense):F.run();const ue=()=>{F.stop(),l&&l.scope&&Mr(l.scope.effects,F)};return g&&g.push(ue),ue}function uf(t,e,n){const s=this.proxy,i=pe(t)?t.includes(".")?Vc(s,t):()=>s[t]:t.bind(s,s);let r;L(e)?r=e:(r=e.handler,n=e);const o=ve;mn(this);const l=Hc(i,r.bind(s),n);return o?mn(o):$t(),l}function Vc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Bt(t,e){if(!ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),oe(t))Bt(t.value,e);else if(O(t))for(let n=0;n<t.length;n++)Bt(t[n],e);else if(ti(t)||sn(t))t.forEach(n=>{Bt(n,e)});else if(dc(t))for(const n in t)Bt(t[n],e);return t}function hf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zc(()=>{t.isMounted=!0}),qc(()=>{t.isUnmounting=!0}),t}const Fe=[Function,Array],ff={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},setup(t,{slots:e}){const n=oa(),s=hf();let i;return()=>{const r=e.default&&jc(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const I of r)if(I.type!==Qe){o=I;break}}const l=$(t),{mode:c}=l;if(s.isLeaving)return Ri(o);const a=Qo(o);if(!a)return Ri(o);const h=Xi(a,l,s,n);Ji(a,h);const u=n.subTree,d=u&&Qo(u);let g=!1;const{getTransitionKey:C}=a.type;if(C){const I=C();i===void 0?i=I:I!==i&&(i=I,g=!0)}if(d&&d.type!==Qe&&(!Mt(a,d)||g)){const I=Xi(d,l,s,n);if(Ji(d,I),c==="out-in")return s.isLeaving=!0,I.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Ri(o);c==="in-out"&&a.type!==Qe&&(I.delayLeave=(k,F,ue)=>{const D=$c(s,d);D[String(d.key)]=d,k._leaveCb=()=>{F(),k._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=ue})}return o}}},df=ff;function $c(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Xi(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:a,onEnterCancelled:h,onBeforeLeave:u,onLeave:d,onAfterLeave:g,onLeaveCancelled:C,onBeforeAppear:I,onAppear:k,onAfterAppear:F,onAppearCancelled:ue}=e,D=String(t.key),X=$c(n,t),G=(x,Y)=>{x&&Be(x,s,9,Y)},De=(x,Y)=>{const z=Y[1];G(x,Y),O(x)?x.every(fe=>fe.length<=1)&&z():x.length<=1&&z()},K={mode:r,persisted:o,beforeEnter(x){let Y=l;if(!n.isMounted)if(i)Y=I||l;else return;x._leaveCb&&x._leaveCb(!0);const z=X[D];z&&Mt(t,z)&&z.el._leaveCb&&z.el._leaveCb(),G(Y,[x])},enter(x){let Y=c,z=a,fe=h;if(!n.isMounted)if(i)Y=k||c,z=F||a,fe=ue||h;else return;let Me=!1;const We=x._enterCb=He=>{Me||(Me=!0,He?G(fe,[x]):G(z,[x]),K.delayedLeave&&K.delayedLeave(),x._enterCb=void 0)};Y?De(Y,[x,We]):We()},leave(x,Y){const z=String(t.key);if(x._enterCb&&x._enterCb(!0),n.isUnmounting)return Y();G(u,[x]);let fe=!1;const Me=x._leaveCb=We=>{fe||(fe=!0,Y(),We?G(C,[x]):G(g,[x]),x._leaveCb=void 0,X[z]===t&&delete X[z])};X[z]=t,d?De(d,[x,Me]):Me()},clone(x){return Xi(x,e,n,s)}};return K}function Ri(t){if(ai(t))return t=It(t),t.children=null,t}function Qo(t){return ai(t)?t.children?t.children[0]:void 0:t}function Ji(t,e){t.shapeFlag&6&&t.component?Ji(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function jc(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===$e?(o.patchFlag&128&&i++,s=s.concat(jc(o.children,e,l))):(e||o.type!==Qe)&&s.push(l!=null?It(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function ci(t){return L(t)?{setup:t,name:t.name}:t}const Ns=t=>!!t.type.__asyncLoader,ai=t=>t.type.__isKeepAlive;function pf(t,e){Kc(t,"a",e)}function _f(t,e){Kc(t,"da",e)}function Kc(t,e,n=ve){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ui(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ai(i.parent.vnode)&&gf(s,e,n,i),i=i.parent}}function gf(t,e,n,s){const i=ui(e,t,s,!0);Gc(()=>{Mr(s[e],i)},n)}function ui(t,e,n=ve,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;In(),mn(n);const l=Be(e,n,t,o);return $t(),Tn(),l});return s?i.unshift(r):i.push(r),r}}const ht=t=>(e,n=ve)=>(!Qn||t==="sp")&&ui(t,(...s)=>e(...s),n),mf=ht("bm"),zc=ht("m"),yf=ht("bu"),vf=ht("u"),qc=ht("bum"),Gc=ht("um"),Cf=ht("sp"),Ef=ht("rtg"),bf=ht("rtc");function wf(t,e=ve){ui("ec",t,e)}function Zi(t,e){const n=Le;if(n===null)return t;const s=di(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,c,a=se]=e[r];o&&(L(o)&&(o={mounted:o,updated:o}),o.deep&&Bt(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:c,modifiers:a}))}return t}function Rt(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(In(),Be(c,n,8,[t.el,l,t,e]),Tn())}}const If=Symbol();function Tf(t,e,n,s){let i;const r=n&&n[s];if(O(t)||pe(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ie(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const a=o[l];i[l]=e(t[a],a,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const er=t=>t?la(t)?di(t)||t.proxy:er(t.parent):null,Ln=be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>er(t.parent),$root:t=>er(t.root),$emit:t=>t.emit,$options:t=>zr(t),$forceUpdate:t=>t.f||(t.f=()=>Kr(t.update)),$nextTick:t=>t.n||(t.n=Dc.bind(t.proxy)),$watch:t=>uf.bind(t)}),Ai=(t,e)=>t!==se&&!t.__isScriptSetup&&V(t,e),Sf={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ai(s,e))return o[e]=1,s[e];if(i!==se&&V(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&V(a,e))return o[e]=3,r[e];if(n!==se&&V(n,e))return o[e]=4,n[e];tr&&(o[e]=0)}}const h=Ln[e];let u,d;if(h)return e==="$attrs"&&Oe(t,"get",e),h(t);if((u=l.__cssModules)&&(u=u[e]))return u;if(n!==se&&V(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,V(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ai(i,e)?(i[e]=n,!0):s!==se&&V(s,e)?(s[e]=n,!0):V(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==se&&V(t,o)||Ai(e,o)||(l=r[0])&&V(l,o)||V(s,o)||V(Ln,o)||V(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:V(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let tr=!0;function xf(t){const e=zr(t),n=t.proxy,s=t.ctx;tr=!1,e.beforeCreate&&Xo(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:h,beforeMount:u,mounted:d,beforeUpdate:g,updated:C,activated:I,deactivated:k,beforeDestroy:F,beforeUnmount:ue,destroyed:D,unmounted:X,render:G,renderTracked:De,renderTriggered:K,errorCaptured:x,serverPrefetch:Y,expose:z,inheritAttrs:fe,components:Me,directives:We,filters:He}=e;if(a&&Nf(a,s,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const J=o[le];L(J)&&(s[le]=J.bind(n))}if(i){const le=i.call(n,n);ie(le)&&(t.data=ii(le))}if(tr=!0,r)for(const le in r){const J=r[le],xt=L(J)?J.bind(n,n):L(J.get)?J.get.bind(n,n):Ye,_s=!L(J)&&L(J.set)?J.set.bind(n):Ye,Nt=aa({get:xt,set:_s});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:Je=>Nt.value=Je})}if(l)for(const le in l)Yc(l[le],s,n,le);if(c){const le=L(c)?c.call(n):c;Reflect.ownKeys(le).forEach(J=>{af(J,le[J])})}h&&Xo(h,t,"c");function Ie(le,J){O(J)?J.forEach(xt=>le(xt.bind(n))):J&&le(J.bind(n))}if(Ie(mf,u),Ie(zc,d),Ie(yf,g),Ie(vf,C),Ie(pf,I),Ie(_f,k),Ie(wf,x),Ie(bf,De),Ie(Ef,K),Ie(qc,ue),Ie(Gc,X),Ie(Cf,Y),O(z))if(z.length){const le=t.exposed||(t.exposed={});z.forEach(J=>{Object.defineProperty(le,J,{get:()=>n[J],set:xt=>n[J]=xt})})}else t.exposed||(t.exposed={});G&&t.render===Ye&&(t.render=G),fe!=null&&(t.inheritAttrs=fe),Me&&(t.components=Me),We&&(t.directives=We)}function Nf(t,e,n=Ye,s=!1){O(t)&&(t=nr(t));for(const i in t){const r=t[i];let o;ie(r)?"default"in r?o=Fn(r.from||i,r.default,!0):o=Fn(r.from||i):o=Fn(r),oe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Xo(t,e,n){Be(O(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yc(t,e,n,s){const i=s.includes(".")?Vc(n,s):()=>n[s];if(pe(t)){const r=e[t];L(r)&&on(i,r)}else if(L(t))on(i,t.bind(n));else if(ie(t))if(O(t))t.forEach(r=>Yc(r,e,n,s));else{const r=L(t.handler)?t.handler.bind(n):e[t.handler];L(r)&&on(i,r,t)}}function zr(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>Ds(c,a,o,!0)),Ds(c,e,o)),ie(e)&&r.set(e,c),c}function Ds(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ds(t,r,n,!0),i&&i.forEach(o=>Ds(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Rf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Rf={data:Jo,props:kt,emits:kt,methods:kt,computed:kt,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:kt,directives:kt,watch:kf,provide:Jo,inject:Af};function Jo(t,e){return e?t?function(){return be(L(t)?t.call(this,this):t,L(e)?e.call(this,this):e)}:e:t}function Af(t,e){return kt(nr(t),nr(e))}function nr(t){if(O(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Te(t,e){return t?[...new Set([].concat(t,e))]:e}function kt(t,e){return t?be(be(Object.create(null),t),e):e}function kf(t,e){if(!t)return e;if(!e)return t;const n=be(Object.create(null),t);for(const s in e)n[s]=Te(t[s],e[s]);return n}function Pf(t,e,n,s=!1){const i={},r={};As(r,fi,1),t.propsDefaults=Object.create(null),Qc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Wh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Of(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=$(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(oi(t.emitsOptions,d))continue;const g=e[d];if(c)if(V(r,d))g!==r[d]&&(r[d]=g,a=!0);else{const C=pn(d);i[C]=sr(c,l,C,g,t,!1)}else g!==r[d]&&(r[d]=g,a=!0)}}}else{Qc(t,e,i,r)&&(a=!0);let h;for(const u in l)(!e||!V(e,u)&&((h=wn(u))===u||!V(e,h)))&&(c?n&&(n[u]!==void 0||n[h]!==void 0)&&(i[u]=sr(c,l,u,void 0,t,!0)):delete i[u]);if(r!==l)for(const u in r)(!e||!V(e,u))&&(delete r[u],a=!0)}a&&ct(t,"set","$attrs")}function Qc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ss(c))continue;const a=e[c];let h;i&&V(i,h=pn(c))?!r||!r.includes(h)?n[h]=a:(l||(l={}))[h]=a:oi(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=$(n),a=l||se;for(let h=0;h<r.length;h++){const u=r[h];n[u]=sr(i,c,u,a[u],t,!V(a,u))}}return o}function sr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=V(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&L(c)){const{propsDefaults:a}=i;n in a?s=a[n]:(mn(i),s=a[n]=c.call(null,e),$t())}else s=c}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===wn(n))&&(s=!0))}return s}function Xc(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!L(t)){const h=u=>{c=!0;const[d,g]=Xc(u,e,!0);be(o,d),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!r&&!c)return ie(t)&&s.set(t,nn),nn;if(O(r))for(let h=0;h<r.length;h++){const u=pn(r[h]);Zo(u)&&(o[u]=se)}else if(r)for(const h in r){const u=pn(h);if(Zo(u)){const d=r[h],g=o[u]=O(d)||L(d)?{type:d}:Object.assign({},d);if(g){const C=nl(Boolean,g.type),I=nl(String,g.type);g[0]=C>-1,g[1]=I<0||C<I,(C>-1||V(g,"default"))&&l.push(u)}}}const a=[o,l];return ie(t)&&s.set(t,a),a}function Zo(t){return t[0]!=="$"}function el(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function tl(t,e){return el(t)===el(e)}function nl(t,e){return O(e)?e.findIndex(n=>tl(n,t)):L(e)&&tl(e,t)?0:-1}const Jc=t=>t[0]==="_"||t==="$stable",qr=t=>O(t)?t.map(tt):[tt(t)],Df=(t,e,n)=>{if(e._n)return e;const s=tf((...i)=>qr(e(...i)),n);return s._c=!1,s},Zc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Jc(i))continue;const r=t[i];if(L(r))e[i]=Df(i,r,s);else if(r!=null){const o=qr(r);e[i]=()=>o}}},ea=(t,e)=>{const n=qr(e);t.slots.default=()=>n},Mf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=$(e),As(e,"_",n)):Zc(e,t.slots={})}else t.slots={},e&&ea(t,e);As(t.slots,fi,1)},Ff=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=se;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(be(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Zc(e,i)),o=e}else e&&(ea(t,e),o={default:1});if(r)for(const l in i)!Jc(l)&&!(l in o)&&delete i[l]};function ta(){return{app:null,config:{isNativeTag:rh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lf=0;function Bf(t,e){return function(s,i=null){L(s)||(s=Object.assign({},s)),i!=null&&!ie(i)&&(i=null);const r=ta(),o=new Set;let l=!1;const c=r.app={_uid:Lf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:id,get config(){return r.config},set config(a){},use(a,...h){return o.has(a)||(a&&L(a.install)?(o.add(a),a.install(c,...h)):L(a)&&(o.add(a),a(c,...h))),c},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),c},component(a,h){return h?(r.components[a]=h,c):r.components[a]},directive(a,h){return h?(r.directives[a]=h,c):r.directives[a]},mount(a,h,u){if(!l){const d=Ue(s,i);return d.appContext=r,h&&e?e(d,a):t(d,a,u),l=!0,c._container=a,a.__vue_app__=c,di(d.component)||d.component.proxy}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(a,h){return r.provides[a]=h,c}};return c}}function ir(t,e,n,s,i=!1){if(O(t)){t.forEach((d,g)=>ir(d,e&&(O(e)?e[g]:e),n,s,i));return}if(Ns(s)&&!i)return;const r=s.shapeFlag&4?di(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,h=l.refs===se?l.refs={}:l.refs,u=l.setupState;if(a!=null&&a!==c&&(pe(a)?(h[a]=null,V(u,a)&&(u[a]=null)):oe(a)&&(a.value=null)),L(c))vt(c,l,12,[o,h]);else{const d=pe(c),g=oe(c);if(d||g){const C=()=>{if(t.f){const I=d?V(u,c)?u[c]:h[c]:c.value;i?O(I)&&Mr(I,r):O(I)?I.includes(r)||I.push(r):d?(h[c]=[r],V(u,c)&&(u[c]=h[c])):(c.value=[r],t.k&&(h[t.k]=c.value))}else d?(h[c]=o,V(u,c)&&(u[c]=o)):g&&(c.value=o,t.k&&(h[t.k]=o))};o?(C.id=-1,Se(C,n)):C()}}}const Se=cf;function Uf(t){return Wf(t)}function Wf(t,e){const n=hh();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:h,parentNode:u,nextSibling:d,setScopeId:g=Ye,insertStaticContent:C}=t,I=(f,p,_,y=null,m=null,w=null,S=!1,b=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!Mt(f,p)&&(y=gs(f),Je(f,m,w,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:v,ref:R,shapeFlag:N}=p;switch(v){case hi:k(f,p,_,y);break;case Qe:F(f,p,_,y);break;case ki:f==null&&ue(p,_,y,S);break;case $e:Me(f,p,_,y,m,w,S,b,T);break;default:N&1?G(f,p,_,y,m,w,S,b,T):N&6?We(f,p,_,y,m,w,S,b,T):(N&64||N&128)&&v.process(f,p,_,y,m,w,S,b,T,Xt)}R!=null&&m&&ir(R,f&&f.ref,w,p||f,!p)},k=(f,p,_,y)=>{if(f==null)s(p.el=l(p.children),_,y);else{const m=p.el=f.el;p.children!==f.children&&a(m,p.children)}},F=(f,p,_,y)=>{f==null?s(p.el=c(p.children||""),_,y):p.el=f.el},ue=(f,p,_,y)=>{[f.el,f.anchor]=C(f.children,p,_,y,f.el,f.anchor)},D=({el:f,anchor:p},_,y)=>{let m;for(;f&&f!==p;)m=d(f),s(f,_,y),f=m;s(p,_,y)},X=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},G=(f,p,_,y,m,w,S,b,T)=>{S=S||p.type==="svg",f==null?De(p,_,y,m,w,S,b,T):Y(f,p,m,w,S,b,T)},De=(f,p,_,y,m,w,S,b)=>{let T,v;const{type:R,props:N,shapeFlag:A,transition:M,dirs:H}=f;if(T=f.el=o(f.type,w,N&&N.is,N),A&8?h(T,f.children):A&16&&x(f.children,T,null,y,m,w&&R!=="foreignObject",S,b),H&&Rt(f,null,y,"created"),N){for(const q in N)q!=="value"&&!Ss(q)&&r(T,q,null,N[q],w,f.children,y,m,st);"value"in N&&r(T,"value",null,N.value),(v=N.onVnodeBeforeMount)&&et(v,y,f)}K(T,f,f.scopeId,S,y),H&&Rt(f,null,y,"beforeMount");const Z=(!m||m&&!m.pendingBranch)&&M&&!M.persisted;Z&&M.beforeEnter(T),s(T,p,_),((v=N&&N.onVnodeMounted)||Z||H)&&Se(()=>{v&&et(v,y,f),Z&&M.enter(T),H&&Rt(f,null,y,"mounted")},m)},K=(f,p,_,y,m)=>{if(_&&g(f,_),y)for(let w=0;w<y.length;w++)g(f,y[w]);if(m){let w=m.subTree;if(p===w){const S=m.vnode;K(f,S,S.scopeId,S.slotScopeIds,m.parent)}}},x=(f,p,_,y,m,w,S,b,T=0)=>{for(let v=T;v<f.length;v++){const R=f[v]=b?_t(f[v]):tt(f[v]);I(null,R,p,_,y,m,w,S,b)}},Y=(f,p,_,y,m,w,S)=>{const b=p.el=f.el;let{patchFlag:T,dynamicChildren:v,dirs:R}=p;T|=f.patchFlag&16;const N=f.props||se,A=p.props||se;let M;_&&At(_,!1),(M=A.onVnodeBeforeUpdate)&&et(M,_,p,f),R&&Rt(p,f,_,"beforeUpdate"),_&&At(_,!0);const H=m&&p.type!=="foreignObject";if(v?z(f.dynamicChildren,v,b,_,y,H,w):S||J(f,p,b,null,_,y,H,w,!1),T>0){if(T&16)fe(b,p,N,A,_,y,m);else if(T&2&&N.class!==A.class&&r(b,"class",null,A.class,m),T&4&&r(b,"style",N.style,A.style,m),T&8){const Z=p.dynamicProps;for(let q=0;q<Z.length;q++){const he=Z[q],Ve=N[he],Jt=A[he];(Jt!==Ve||he==="value")&&r(b,he,Ve,Jt,m,f.children,_,y,st)}}T&1&&f.children!==p.children&&h(b,p.children)}else!S&&v==null&&fe(b,p,N,A,_,y,m);((M=A.onVnodeUpdated)||R)&&Se(()=>{M&&et(M,_,p,f),R&&Rt(p,f,_,"updated")},y)},z=(f,p,_,y,m,w,S)=>{for(let b=0;b<p.length;b++){const T=f[b],v=p[b],R=T.el&&(T.type===$e||!Mt(T,v)||T.shapeFlag&70)?u(T.el):_;I(T,v,R,null,y,m,w,S,!0)}},fe=(f,p,_,y,m,w,S)=>{if(_!==y){if(_!==se)for(const b in _)!Ss(b)&&!(b in y)&&r(f,b,_[b],null,S,p.children,m,w,st);for(const b in y){if(Ss(b))continue;const T=y[b],v=_[b];T!==v&&b!=="value"&&r(f,b,v,T,S,p.children,m,w,st)}"value"in y&&r(f,"value",_.value,y.value)}},Me=(f,p,_,y,m,w,S,b,T)=>{const v=p.el=f?f.el:l(""),R=p.anchor=f?f.anchor:l("");let{patchFlag:N,dynamicChildren:A,slotScopeIds:M}=p;M&&(b=b?b.concat(M):M),f==null?(s(v,_,y),s(R,_,y),x(p.children,_,R,m,w,S,b,T)):N>0&&N&64&&A&&f.dynamicChildren?(z(f.dynamicChildren,A,_,m,w,S,b),(p.key!=null||m&&p===m.subTree)&&na(f,p,!0)):J(f,p,_,R,m,w,S,b,T)},We=(f,p,_,y,m,w,S,b,T)=>{p.slotScopeIds=b,f==null?p.shapeFlag&512?m.ctx.activate(p,_,y,S,T):He(p,_,y,m,w,S,T):we(f,p,T)},He=(f,p,_,y,m,w,S)=>{const b=f.component=Qf(f,y,m);if(ai(f)&&(b.ctx.renderer=Xt),Xf(b),b.asyncDep){if(m&&m.registerDep(b,Ie),!f.el){const T=b.subTree=Ue(Qe);F(null,T,p,_)}return}Ie(b,f,p,_,m,w,S)},we=(f,p,_)=>{const y=p.component=f.component;if(rf(f,p,_))if(y.asyncDep&&!y.asyncResolved){le(y,p,_);return}else y.next=p,Xh(y.update),y.update();else p.el=f.el,y.vnode=p},Ie=(f,p,_,y,m,w,S)=>{const b=()=>{if(f.isMounted){let{next:R,bu:N,u:A,parent:M,vnode:H}=f,Z=R,q;At(f,!1),R?(R.el=H.el,le(f,R,S)):R=H,N&&xs(N),(q=R.props&&R.props.onVnodeBeforeUpdate)&&et(q,M,R,H),At(f,!0);const he=Ni(f),Ve=f.subTree;f.subTree=he,I(Ve,he,u(Ve.el),gs(Ve),f,m,w),R.el=he.el,Z===null&&of(f,he.el),A&&Se(A,m),(q=R.props&&R.props.onVnodeUpdated)&&Se(()=>et(q,M,R,H),m)}else{let R;const{el:N,props:A}=p,{bm:M,m:H,parent:Z}=f,q=Ns(p);if(At(f,!1),M&&xs(M),!q&&(R=A&&A.onVnodeBeforeMount)&&et(R,Z,p),At(f,!0),N&&Si){const he=()=>{f.subTree=Ni(f),Si(N,f.subTree,f,m,null)};q?p.type.__asyncLoader().then(()=>!f.isUnmounted&&he()):he()}else{const he=f.subTree=Ni(f);I(null,he,_,y,f,m,w),p.el=he.el}if(H&&Se(H,m),!q&&(R=A&&A.onVnodeMounted)){const he=p;Se(()=>et(R,Z,he),m)}(p.shapeFlag&256||Z&&Ns(Z.vnode)&&Z.vnode.shapeFlag&256)&&f.a&&Se(f.a,m),f.isMounted=!0,p=_=y=null}},T=f.effect=new Br(b,()=>Kr(v),f.scope),v=f.update=()=>T.run();v.id=f.uid,At(f,!0),v()},le=(f,p,_)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Of(f,p.props,y,_),Ff(f,p.children,_),In(),Go(),Tn()},J=(f,p,_,y,m,w,S,b,T=!1)=>{const v=f&&f.children,R=f?f.shapeFlag:0,N=p.children,{patchFlag:A,shapeFlag:M}=p;if(A>0){if(A&128){_s(v,N,_,y,m,w,S,b,T);return}else if(A&256){xt(v,N,_,y,m,w,S,b,T);return}}M&8?(R&16&&st(v,m,w),N!==v&&h(_,N)):R&16?M&16?_s(v,N,_,y,m,w,S,b,T):st(v,m,w,!0):(R&8&&h(_,""),M&16&&x(N,_,y,m,w,S,b,T))},xt=(f,p,_,y,m,w,S,b,T)=>{f=f||nn,p=p||nn;const v=f.length,R=p.length,N=Math.min(v,R);let A;for(A=0;A<N;A++){const M=p[A]=T?_t(p[A]):tt(p[A]);I(f[A],M,_,null,m,w,S,b,T)}v>R?st(f,m,w,!0,!1,N):x(p,_,y,m,w,S,b,T,N)},_s=(f,p,_,y,m,w,S,b,T)=>{let v=0;const R=p.length;let N=f.length-1,A=R-1;for(;v<=N&&v<=A;){const M=f[v],H=p[v]=T?_t(p[v]):tt(p[v]);if(Mt(M,H))I(M,H,_,null,m,w,S,b,T);else break;v++}for(;v<=N&&v<=A;){const M=f[N],H=p[A]=T?_t(p[A]):tt(p[A]);if(Mt(M,H))I(M,H,_,null,m,w,S,b,T);else break;N--,A--}if(v>N){if(v<=A){const M=A+1,H=M<R?p[M].el:y;for(;v<=A;)I(null,p[v]=T?_t(p[v]):tt(p[v]),_,H,m,w,S,b,T),v++}}else if(v>A)for(;v<=N;)Je(f[v],m,w,!0),v++;else{const M=v,H=v,Z=new Map;for(v=H;v<=A;v++){const ke=p[v]=T?_t(p[v]):tt(p[v]);ke.key!=null&&Z.set(ke.key,v)}let q,he=0;const Ve=A-H+1;let Jt=!1,Fo=0;const An=new Array(Ve);for(v=0;v<Ve;v++)An[v]=0;for(v=M;v<=N;v++){const ke=f[v];if(he>=Ve){Je(ke,m,w,!0);continue}let Ze;if(ke.key!=null)Ze=Z.get(ke.key);else for(q=H;q<=A;q++)if(An[q-H]===0&&Mt(ke,p[q])){Ze=q;break}Ze===void 0?Je(ke,m,w,!0):(An[Ze-H]=v+1,Ze>=Fo?Fo=Ze:Jt=!0,I(ke,p[Ze],_,null,m,w,S,b,T),he++)}const Lo=Jt?Hf(An):nn;for(q=Lo.length-1,v=Ve-1;v>=0;v--){const ke=H+v,Ze=p[ke],Bo=ke+1<R?p[ke+1].el:y;An[v]===0?I(null,Ze,_,Bo,m,w,S,b,T):Jt&&(q<0||v!==Lo[q]?Nt(Ze,_,Bo,2):q--)}}},Nt=(f,p,_,y,m=null)=>{const{el:w,type:S,transition:b,children:T,shapeFlag:v}=f;if(v&6){Nt(f.component.subTree,p,_,y);return}if(v&128){f.suspense.move(p,_,y);return}if(v&64){S.move(f,p,_,Xt);return}if(S===$e){s(w,p,_);for(let N=0;N<T.length;N++)Nt(T[N],p,_,y);s(f.anchor,p,_);return}if(S===ki){D(f,p,_);return}if(y!==2&&v&1&&b)if(y===0)b.beforeEnter(w),s(w,p,_),Se(()=>b.enter(w),m);else{const{leave:N,delayLeave:A,afterLeave:M}=b,H=()=>s(w,p,_),Z=()=>{N(w,()=>{H(),M&&M()})};A?A(w,H,Z):Z()}else s(w,p,_)},Je=(f,p,_,y=!1,m=!1)=>{const{type:w,props:S,ref:b,children:T,dynamicChildren:v,shapeFlag:R,patchFlag:N,dirs:A}=f;if(b!=null&&ir(b,null,_,f,!0),R&256){p.ctx.deactivate(f);return}const M=R&1&&A,H=!Ns(f);let Z;if(H&&(Z=S&&S.onVnodeBeforeUnmount)&&et(Z,p,f),R&6)Xu(f.component,_,y);else{if(R&128){f.suspense.unmount(_,y);return}M&&Rt(f,null,p,"beforeUnmount"),R&64?f.type.remove(f,p,_,m,Xt,y):v&&(w!==$e||N>0&&N&64)?st(v,p,_,!1,!0):(w===$e&&N&384||!m&&R&16)&&st(T,p,_),y&&Do(f)}(H&&(Z=S&&S.onVnodeUnmounted)||M)&&Se(()=>{Z&&et(Z,p,f),M&&Rt(f,null,p,"unmounted")},_)},Do=f=>{const{type:p,el:_,anchor:y,transition:m}=f;if(p===$e){Qu(_,y);return}if(p===ki){X(f);return}const w=()=>{i(_),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:b}=m,T=()=>S(_,w);b?b(f.el,w,T):T()}else w()},Qu=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},Xu=(f,p,_)=>{const{bum:y,scope:m,update:w,subTree:S,um:b}=f;y&&xs(y),m.stop(),w&&(w.active=!1,Je(S,f,p,_)),b&&Se(b,p),Se(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},st=(f,p,_,y=!1,m=!1,w=0)=>{for(let S=w;S<f.length;S++)Je(f[S],p,_,y,m)},gs=f=>f.shapeFlag&6?gs(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),Mo=(f,p,_)=>{f==null?p._vnode&&Je(p._vnode,null,null,!0):I(p._vnode||null,f,p,null,null,null,_),Go(),Fc(),p._vnode=f},Xt={p:I,um:Je,m:Nt,r:Do,mt:He,mc:x,pc:J,pbc:z,n:gs,o:t};let Ti,Si;return e&&([Ti,Si]=e(Xt)),{render:Mo,hydrate:Ti,createApp:Bf(Mo,Ti)}}function At({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function na(t,e,n=!1){const s=t.children,i=e.children;if(O(s)&&O(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=_t(i[r]),l.el=o.el),n||na(o,l)),l.type===hi&&(l.el=o.el)}}function Hf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Vf=t=>t.__isTeleport,$e=Symbol(void 0),hi=Symbol(void 0),Qe=Symbol(void 0),ki=Symbol(void 0),Bn=[];let ze=null;function rt(t=!1){Bn.push(ze=t?null:[])}function $f(){Bn.pop(),ze=Bn[Bn.length-1]||null}let Yn=1;function sl(t){Yn+=t}function sa(t){return t.dynamicChildren=Yn>0?ze||nn:null,$f(),Yn>0&&ze&&ze.push(t),t}function ln(t,e,n,s,i,r){return sa(re(t,e,n,s,i,r,!0))}function rr(t,e,n,s,i){return sa(Ue(t,e,n,s,i,!0))}function jf(t){return t?t.__v_isVNode===!0:!1}function Mt(t,e){return t.type===e.type&&t.key===e.key}const fi="__vInternal",ia=({key:t})=>t??null,Rs=({ref:t,ref_key:e,ref_for:n})=>t!=null?pe(t)||oe(t)||L(t)?{i:Le,r:t,k:e,f:!!n}:t:null;function re(t,e=null,n=null,s=0,i=null,r=t===$e?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ia(e),ref:e&&Rs(e),scopeId:li,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Le};return l?(Gr(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=pe(n)?8:16),Yn>0&&!o&&ze&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&ze.push(c),c}const Ue=Kf;function Kf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===If)&&(t=Qe),jf(t)){const l=It(t,e,!0);return n&&Gr(l,n),Yn>0&&!r&&ze&&(l.shapeFlag&6?ze[ze.indexOf(t)]=l:ze.push(l)),l.patchFlag|=-2,l}if(td(t)&&(t=t.__vccOpts),e){e=zf(e);let{class:l,style:c}=e;l&&!pe(l)&&(e.class=bn(l)),ie(c)&&(Nc(c)&&!O(c)&&(c=be({},c)),e.style=Or(c))}const o=pe(t)?1:lf(t)?128:Vf(t)?64:ie(t)?4:L(t)?2:0;return re(t,e,n,s,i,o,r,!0)}function zf(t){return t?Nc(t)||fi in t?be({},t):t:null}function It(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?qf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&ia(l),ref:e&&e.ref?n&&i?O(i)?i.concat(Rs(e)):[i,Rs(e)]:Rs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$e?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&It(t.ssContent),ssFallback:t.ssFallback&&It(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function ra(t=" ",e=0){return Ue(hi,null,t,e)}function il(t="",e=!1){return e?(rt(),rr(Qe,null,t)):Ue(Qe,null,t)}function tt(t){return t==null||typeof t=="boolean"?Ue(Qe):O(t)?Ue($e,null,t.slice()):typeof t=="object"?_t(t):Ue(hi,null,String(t))}function _t(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:It(t)}function Gr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(O(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Gr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(fi in e)?e._ctx=Le:i===3&&Le&&(Le.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else L(e)?(e={default:e,_ctx:Le},n=32):(e=String(e),s&64?(n=16,e=[ra(e)]):n=8);t.children=e,t.shapeFlag|=n}function qf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=bn([e.class,s.class]));else if(i==="style")e.style=Or([e.style,s.style]);else if(ei(i)){const r=e[i],o=s[i];o&&r!==o&&!(O(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function et(t,e,n,s=null){Be(t,e,7,[n,s])}const Gf=ta();let Yf=0;function Qf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Gf,r={uid:Yf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new _c(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xc(s,i),emitsOptions:Bc(s,i),emit:null,emitted:null,propsDefaults:se,inheritAttrs:s.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ef.bind(null,r),t.ce&&t.ce(r),r}let ve=null;const oa=()=>ve||Le,mn=t=>{ve=t,t.scope.on()},$t=()=>{ve&&ve.scope.off(),ve=null};function la(t){return t.vnode.shapeFlag&4}let Qn=!1;function Xf(t,e=!1){Qn=e;const{props:n,children:s}=t.vnode,i=la(t);Pf(t,n,i,e),Mf(t,s);const r=i?Jf(t,e):void 0;return Qn=!1,r}function Jf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=gn(new Proxy(t.ctx,Sf));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?ed(t):null;mn(t),In();const r=vt(s,t,0,[t.props,i]);if(Tn(),$t(),hc(r)){if(r.then($t,$t),e)return r.then(o=>{rl(t,o,e)}).catch(o=>{ri(o,t,0)});t.asyncDep=r}else rl(t,r,e)}else ca(t,e)}function rl(t,e,n){L(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=kc(e)),ca(t,n)}let ol;function ca(t,e,n){const s=t.type;if(!t.render){if(!e&&ol&&!s.render){const i=s.template||zr(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,a=be(be({isCustomElement:r,delimiters:l},o),c);s.render=ol(i,a)}}t.render=s.render||Ye}mn(t),In(),xf(t),Tn(),$t()}function Zf(t){return new Proxy(t.attrs,{get(e,n){return Oe(t,"get","$attrs"),e[n]}})}function ed(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Zf(t))},slots:t.slots,emit:t.emit,expose:e}}function di(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(kc(gn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ln)return Ln[n](t)},has(e,n){return n in e||n in Ln}}))}function td(t){return L(t)&&"__vccOpts"in t}const aa=(t,e)=>Gh(t,e,Qn),nd=Symbol(""),sd=()=>Fn(nd),id="3.2.45",rd="http://www.w3.org/2000/svg",Ft=typeof document<"u"?document:null,ll=Ft&&Ft.createElement("template"),od={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Ft.createElementNS(rd,t):Ft.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ft.createTextNode(t),createComment:t=>Ft.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ft.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ll.innerHTML=s?`<svg>${t}</svg>`:t;const l=ll.content;if(s){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ld(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function cd(t,e,n){const s=t.style,i=pe(n);if(n&&!i){for(const r in n)or(s,r,n[r]);if(e&&!pe(e))for(const r in e)n[r]==null&&or(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const cl=/\s*!important$/;function or(t,e,n){if(O(n))n.forEach(s=>or(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ad(t,e);cl.test(n)?t.setProperty(wn(s),n.replace(cl,""),"important"):t[s]=n}}const al=["Webkit","Moz","ms"],Pi={};function ad(t,e){const n=Pi[e];if(n)return n;let s=pn(e);if(s!=="filter"&&s in t)return Pi[e]=s;s=pc(s);for(let i=0;i<al.length;i++){const r=al[i]+s;if(r in t)return Pi[e]=r}return e}const ul="http://www.w3.org/1999/xlink";function ud(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ul,e.slice(6,e.length)):t.setAttributeNS(ul,e,n);else{const r=sh(e);n==null||r&&!cc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function hd(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=cc(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Lt(t,e,n,s){t.addEventListener(e,n,s)}function fd(t,e,n,s){t.removeEventListener(e,n,s)}function dd(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=pd(e);if(s){const a=r[e]=md(s,i);Lt(t,l,a,c)}else o&&(fd(t,l,o,c),r[e]=void 0)}}const hl=/(?:Once|Passive|Capture)$/;function pd(t){let e;if(hl.test(t)){e={};let s;for(;s=t.match(hl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):wn(t.slice(2)),e]}let Oi=0;const _d=Promise.resolve(),gd=()=>Oi||(_d.then(()=>Oi=0),Oi=Date.now());function md(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Be(yd(s,n.value),e,5,[s])};return n.value=t,n.attached=gd(),n}function yd(t,e){if(O(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const fl=/^on[a-z]/,vd=(t,e,n,s,i=!1,r,o,l,c)=>{e==="class"?ld(t,s,i):e==="style"?cd(t,n,s):ei(e)?Dr(e)||dd(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cd(t,e,s,i))?hd(t,e,s,r,o,l,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ud(t,e,s,i))};function Cd(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&fl.test(e)&&L(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||fl.test(e)&&pe(n)?!1:e in t}const Ed={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};df.props;const Ms=t=>{const e=t.props["onUpdate:modelValue"]||!1;return O(e)?n=>xs(e,n):e};function bd(t){t.target.composing=!0}function dl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ua={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Ms(i);const r=s||i.props&&i.props.type==="number";Lt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=ks(l)),t._assign(l)}),n&&Lt(t,"change",()=>{t.value=t.value.trim()}),e||(Lt(t,"compositionstart",bd),Lt(t,"compositionend",dl),Lt(t,"change",dl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Ms(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&ks(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},wd={deep:!0,created(t,e,n){t._assign=Ms(n),Lt(t,"change",()=>{const s=t._modelValue,i=Id(t),r=t.checked,o=t._assign;if(O(s)){const l=ac(s,i),c=l!==-1;if(r&&!c)o(s.concat(i));else if(!r&&c){const a=[...s];a.splice(l,1),o(a)}}else if(ti(s)){const l=new Set(s);r?l.add(i):l.delete(i),o(l)}else o(ha(t,r))})},mounted:pl,beforeUpdate(t,e,n){t._assign=Ms(n),pl(t,e,n)}};function pl(t,{value:e,oldValue:n},s){t._modelValue=e,O(e)?t.checked=ac(e,s.props.value)>-1:ti(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Zs(e,ha(t,!0)))}function Id(t){return"_value"in t?t._value:t.value}function ha(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Td=["ctrl","shift","alt","meta"],Sd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Td.some(n=>t[`${n}Key`]&&!e.includes(n))},xd=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=Sd[e[i]];if(r&&r(n,e))return}return t(n,...s)},Nd=be({patchProp:vd},od);let _l;function Rd(){return _l||(_l=Uf(Nd))}const Ad=(...t)=>{const e=Rd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=kd(s);if(!i)return;const r=e._component;!L(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function kd(t){return pe(t)?document.querySelector(t):t}var Pd=!1;/*!
  * pinia v2.0.29
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let fa;const pi=t=>fa=t,da=Symbol();function lr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Un;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Un||(Un={}));function Od(){const t=gc(!0),e=t.run(()=>Vt({}));let n=[],s=[];const i=gn({install(r){pi(i),i._a=r,r.provide(da,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!Pd?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const pa=()=>{};function gl(t,e,n,s=pa){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&dh()&&ph(i),i}function Zt(t,...e){t.slice().forEach(n=>{n(...e)})}function cr(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];lr(i)&&lr(s)&&t.hasOwnProperty(n)&&!oe(s)&&!yt(s)?t[n]=cr(i,s):t[n]=s}return t}const Dd=Symbol();function Md(t){return!lr(t)||!t.hasOwnProperty(Dd)}const{assign:gt}=Object;function Fd(t){return!!(oe(t)&&t.effect)}function Ld(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const h=jh(n.state.value[t]);return gt(h,r,Object.keys(o||{}).reduce((u,d)=>(u[d]=gn(aa(()=>{pi(n);const g=n._s.get(t);return o[d].call(g,g)})),u),{}))}return c=_a(t,a,e,n,s,!0),c.$reset=function(){const u=i?i():{};this.$patch(d=>{gt(d,u)})},c}function _a(t,e,n={},s,i,r){let o;const l=gt({actions:{}},n),c={deep:!0};let a,h,u=gn([]),d=gn([]),g;const C=s.state.value[t];!r&&!C&&(s.state.value[t]={}),Vt({});let I;function k(K){let x;a=h=!1,typeof K=="function"?(K(s.state.value[t]),x={type:Un.patchFunction,storeId:t,events:g}):(cr(s.state.value[t],K),x={type:Un.patchObject,payload:K,storeId:t,events:g});const Y=I=Symbol();Dc().then(()=>{I===Y&&(a=!0)}),h=!0,Zt(u,x,s.state.value[t])}const F=pa;function ue(){o.stop(),u=[],d=[],s._s.delete(t)}function D(K,x){return function(){pi(s);const Y=Array.from(arguments),z=[],fe=[];function Me(we){z.push(we)}function We(we){fe.push(we)}Zt(d,{args:Y,name:K,store:G,after:Me,onError:We});let He;try{He=x.apply(this&&this.$id===t?this:G,Y)}catch(we){throw Zt(fe,we),we}return He instanceof Promise?He.then(we=>(Zt(z,we),we)).catch(we=>(Zt(fe,we),Promise.reject(we))):(Zt(z,He),He)}}const X={_p:s,$id:t,$onAction:gl.bind(null,d),$patch:k,$reset:F,$subscribe(K,x={}){const Y=gl(u,K,x.detached,()=>z()),z=o.run(()=>on(()=>s.state.value[t],fe=>{(x.flush==="sync"?h:a)&&K({storeId:t,type:Un.direct,events:g},fe)},gt({},c,x)));return Y},$dispose:ue},G=ii(X);s._s.set(t,G);const De=s._e.run(()=>(o=gc(),o.run(()=>e())));for(const K in De){const x=De[K];if(oe(x)&&!Fd(x)||yt(x))r||(C&&Md(x)&&(oe(x)?x.value=C[K]:cr(x,C[K])),s.state.value[t][K]=x);else if(typeof x=="function"){const Y=D(K,x);De[K]=Y,l.actions[K]=x}}return gt(G,De),gt($(G),De),Object.defineProperty(G,"$state",{get:()=>s.state.value[t],set:K=>{k(x=>{gt(x,K)})}}),s._p.forEach(K=>{gt(G,o.run(()=>K({store:G,app:s._a,pinia:s,options:l})))}),C&&r&&n.hydrate&&n.hydrate(G.$state,C),a=!0,h=!0,G}function Bd(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(l,c){const a=oa();return l=l||a&&Fn(da,null),l&&pi(l),l=fa,l._s.has(s)||(r?_a(s,e,i,l):Ld(s,i,l)),l._s.get(s)}return o.$id=s,o}const Ud=ci({__name:"Button",props:{active:{type:Boolean},label:null},emits:["click"],setup(t){return(e,n)=>(rt(),ln("a",{class:bn({selected:t.active}),href:"#/",onClick:n[0]||(n[0]=s=>e.$emit("click",t.label.value))},Ki(t.label.displayText),3))}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E=function(t,e){if(!t)throw Sn(e)},Sn=function(t){return new Error("Firebase Database ("+ga.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Yr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,h=r>>2,u=(r&3)<<4|l>>4;let d=(l&15)<<2|a>>6,g=a&63;c||(g=64,o||(d=64)),s.push(n[h],n[u],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ma(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||u==null)throw Error();const d=r<<2|l>>4;if(s.push(d),a!==64){const g=l<<4&240|a>>2;if(s.push(g),u!==64){const C=a<<6&192|u;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ya=function(t){const e=ma(t);return Yr.encodeByteArray(e,!0)},Fs=function(t){return ya(t).replace(/\./g,"")},ar=function(t){try{return Yr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t){return va(void 0,t)}function va(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Vd(n)||(t[n]=va(t[n],e[n]));return t}function Vd(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ca(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($d())}function jd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ea(){return ga.NODE_ADMIN===!0}function Kd(){try{return typeof indexedDB=="object"}catch{return!1}}function zd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function qd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=()=>qd().__FIREBASE_DEFAULTS__,Yd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Qd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ar(t[1]);return e&&JSON.parse(e)},ba=()=>{try{return Gd()||Yd()||Qd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xd=t=>{var e,n;return(n=(e=ba())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Jd=t=>{const e=Xd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Zd=()=>{var t;return(t=ba())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Fs(JSON.stringify(n)),Fs(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="FirebaseError";class cs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=tp,Object.setPrototypeOf(this,cs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wa.prototype.create)}}class wa{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?np(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new cs(i,l,s)}}function np(t,e){return t.replace(sp,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const sp=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Xn(ar(r[0])||""),n=Xn(ar(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},ip=function(t){const e=Ia(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},rp=function(t){const e=Ia(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function yn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ml(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ls(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ur(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(yl(r)&&yl(o)){if(!ur(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function yl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)s[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const d=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,h;for(let u=0;u<80;u++){u<40?u<20?(a=l^r&(o^l),h=1518500249):(a=r^o^l,h=1859775393):u<60?(a=r&o|l&(r|o),h=2400959708):(a=r^o^l,h=3395469782);const d=(i<<5|i>>>27)+a+c+h+s[u]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Qr(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){return t&&t._delegate?t._delegate:t}class Jn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new _i;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hp(e))try{this.getOrInitializeService({instanceIdentifier:Pt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Pt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pt){return this.instances.has(e)}getOptions(e=Pt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:up(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Pt){return this.component?this.component.multipleInstances?e:Pt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function up(t){return t===Pt?void 0:t}function hp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ap(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const dp={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},pp=ee.INFO,_p={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},gp=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=_p[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ta{constructor(e){this.name=e,this._logLevel=pp,this._logHandler=gp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const mp=(t,e)=>e.some(n=>t instanceof n);let vl,Cl;function yp(){return vl||(vl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vp(){return Cl||(Cl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sa=new WeakMap,hr=new WeakMap,xa=new WeakMap,Di=new WeakMap,Xr=new WeakMap;function Cp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Ct(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sa.set(n,t)}).catch(()=>{}),Xr.set(e,t),e}function Ep(t){if(hr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});hr.set(t,e)}let fr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bp(t){fr=t(fr)}function wp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Mi(this),e,...n);return xa.set(s,e.sort?e.sort():[e]),Ct(s)}:vp().includes(t)?function(...e){return t.apply(Mi(this),e),Ct(Sa.get(this))}:function(...e){return Ct(t.apply(Mi(this),e))}}function Ip(t){return typeof t=="function"?wp(t):(t instanceof IDBTransaction&&Ep(t),mp(t,yp())?new Proxy(t,fr):t)}function Ct(t){if(t instanceof IDBRequest)return Cp(t);if(Di.has(t))return Di.get(t);const e=Ip(t);return e!==t&&(Di.set(t,e),Xr.set(e,t)),e}const Mi=t=>Xr.get(t);function Tp(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Ct(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ct(o.result),c.oldVersion,c.newVersion,Ct(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Sp=["get","getKey","getAll","getAllKeys","count"],xp=["put","add","delete","clear"],Fi=new Map;function El(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fi.get(e))return Fi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=xp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Sp.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return Fi.set(e,r),r}bp(t=>({...t,get:(e,n,s)=>El(e,n)||t.get(e,n,s),has:(e,n)=>!!El(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Rp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dr="@firebase/app",bl="0.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new Ta("@firebase/app"),Ap="@firebase/app-compat",kp="@firebase/analytics-compat",Pp="@firebase/analytics",Op="@firebase/app-check-compat",Dp="@firebase/app-check",Mp="@firebase/auth",Fp="@firebase/auth-compat",Lp="@firebase/database",Bp="@firebase/database-compat",Up="@firebase/functions",Wp="@firebase/functions-compat",Hp="@firebase/installations",Vp="@firebase/installations-compat",$p="@firebase/messaging",jp="@firebase/messaging-compat",Kp="@firebase/performance",zp="@firebase/performance-compat",qp="@firebase/remote-config",Gp="@firebase/remote-config-compat",Yp="@firebase/storage",Qp="@firebase/storage-compat",Xp="@firebase/firestore",Jp="@firebase/firestore-compat",Zp="firebase",e_="9.15.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="[DEFAULT]",t_={[dr]:"fire-core",[Ap]:"fire-core-compat",[Pp]:"fire-analytics",[kp]:"fire-analytics-compat",[Dp]:"fire-app-check",[Op]:"fire-app-check-compat",[Mp]:"fire-auth",[Fp]:"fire-auth-compat",[Lp]:"fire-rtdb",[Bp]:"fire-rtdb-compat",[Up]:"fire-fn",[Wp]:"fire-fn-compat",[Hp]:"fire-iid",[Vp]:"fire-iid-compat",[$p]:"fire-fcm",[jp]:"fire-fcm-compat",[Kp]:"fire-perf",[zp]:"fire-perf-compat",[qp]:"fire-rc",[Gp]:"fire-rc-compat",[Yp]:"fire-gcs",[Qp]:"fire-gcs-compat",[Xp]:"fire-fst",[Jp]:"fire-fst-compat","fire-js":"fire-js",[Zp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new Map,_r=new Map;function n_(t,e){try{t.container.addComponent(e)}catch(n){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Us(t){const e=t.name;if(_r.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;_r.set(e,t);for(const n of Bs.values())n_(n,t);return!0}function s_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Et=new wa("app","Firebase",i_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Et.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=e_;function Na(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:pr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Et.create("bad-app-name",{appName:String(i)});if(n||(n=Zd()),!n)throw Et.create("no-options");const r=Bs.get(i);if(r){if(ur(n,r.options)&&ur(s,r.config))return r;throw Et.create("duplicate-app",{appName:i})}const o=new fp(i);for(const c of _r.values())o.addComponent(c);const l=new r_(n,s,o);return Bs.set(i,l),l}function l_(t=pr){const e=Bs.get(t);if(!e&&t===pr)return Na();if(!e)throw Et.create("no-app",{appName:t});return e}function cn(t,e,n){var s;let i=(s=t_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kt.warn(l.join(" "));return}Us(new Jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="firebase-heartbeat-database",a_=1,Zn="firebase-heartbeat-store";let Li=null;function Ra(){return Li||(Li=Tp(c_,a_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zn)}}}).catch(t=>{throw Et.create("idb-open",{originalErrorMessage:t.message})})),Li}async function u_(t){try{return(await Ra()).transaction(Zn).objectStore(Zn).get(Aa(t))}catch(e){if(e instanceof cs)Kt.warn(e.message);else{const n=Et.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kt.warn(n.message)}}}async function wl(t,e){try{const s=(await Ra()).transaction(Zn,"readwrite");return await s.objectStore(Zn).put(e,Aa(t)),s.done}catch(n){if(n instanceof cs)Kt.warn(n.message);else{const s=Et.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kt.warn(s.message)}}}function Aa(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=1024,f_=30*24*60*60*1e3;class d_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new __(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Il();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=f_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Il(),{heartbeatsToSend:n,unsentEntries:s}=p_(this._heartbeatsCache.heartbeats),i=Fs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Il(){return new Date().toISOString().substring(0,10)}function p_(t,e=h_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Tl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class __{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kd()?zd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await u_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Tl(t){return Fs(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(t){Us(new Jn("platform-logger",e=>new Np(e),"PRIVATE")),Us(new Jn("heartbeat",e=>new d_(e),"PRIVATE")),cn(dr,bl,t),cn(dr,bl,"esm2017"),cn("fire-js","")}g_("");const Sl="@firebase/database",xl="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka="";function m_(t){ka=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Xn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ft(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new y_(e)}}catch{}return new v_},Ut=Pa("localStorage"),gr=Pa("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new Ta("@firebase/database"),C_=function(){let t=1;return function(){return t++}}(),Oa=function(t){const e=cp(t),n=new lp;n.update(e);const s=n.digest();return Yr.encodeByteArray(s)},us=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=us.apply(null,s):typeof s=="object"?e+=me(s):e+=s,e+=" "}return e};let jt=null,Nl=!0;const E_=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(an.logLevel=ee.VERBOSE,jt=an.log.bind(an),e&&gr.set("logging_enabled",!0)):typeof t=="function"?jt=t:(jt=null,gr.remove("logging_enabled"))},Ce=function(...t){if(Nl===!0&&(Nl=!1,jt===null&&gr.get("logging_enabled")===!0&&E_(!0)),jt){const e=us.apply(null,t);jt(e)}},hs=function(t){return function(...e){Ce(t,...e)}},mr=function(...t){const e="FIREBASE INTERNAL ERROR: "+us(...t);an.error(e)},at=function(...t){const e=`FIREBASE FATAL ERROR: ${us(...t)}`;throw an.error(e),new Error(e)},Re=function(...t){const e="FIREBASE WARNING: "+us(...t);an.warn(e)},b_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Re("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Da=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},w_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},vn="[MIN_NAME]",zt="[MAX_NAME]",xn=function(t,e){if(t===e)return 0;if(t===vn||e===zt)return-1;if(e===vn||t===zt)return 1;{const n=Rl(t),s=Rl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},I_=function(t,e){return t===e?0:t<e?-1:1},kn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},Jr=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=me(e[s]),n+=":",n+=Jr(t[e[s]]);return n+="}",n},Ma=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ae(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Fa=function(t){E(!Da(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const h=a.join("");let u="";for(c=0;c<64;c+=8){let d=parseInt(h.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},T_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},S_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function x_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const N_=new RegExp("^-?(0*)\\d{1,10}$"),R_=-2147483648,A_=2147483647,Rl=function(t){if(N_.test(t)){const e=Number(t);if(e>=R_&&e<=A_)return e}return null},Nn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Re("Exception was thrown by user callback.",n),e},Math.floor(0))}},k_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Re(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Re(e)}}class un{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}un.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="5",La="v",Ba="s",Ua="r",Wa="f",Ha=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Va="ls",$a="p",yr="ac",ja="websocket",Ka="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ut.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ut.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function D_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function qa(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let s;if(e===ja)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ka)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);D_(t)&&(n.ns=t.namespace);const i=[];return Ae(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.counters_={}}incrementCounter(e,n=1){ft(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Hd(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi={},Ui={};function eo(t){const e=t.toString();return Bi[e]||(Bi[e]=new M_),Bi[e]}function F_(t,e){const n=t.toString();return Ui[n]||(Ui[n]=e()),Ui[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Nn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="start",B_="close",U_="pLPCommand",W_="pRTLPCB",Ga="id",Ya="pw",Qa="ser",H_="cb",V_="seg",$_="ts",j_="d",K_="dframe",Xa=1870,Ja=30,z_=Xa-Ja,q_=25e3,G_=3e4;class tn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=hs(e),this.stats_=eo(n),this.urlFn=c=>(this.appCheckToken&&(c[yr]=this.appCheckToken),qa(n,Ka,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new L_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(G_)),w_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new to((...r)=>{const[o,l,c,a,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Al)this.id=l,this.password=c;else if(o===B_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Al]="t",s[Qa]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[H_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[La]=Zr,this.transportSessionId&&(s[Ba]=this.transportSessionId),this.lastSessionId&&(s[Va]=this.lastSessionId),this.applicationId&&(s[$a]=this.applicationId),this.appCheckToken&&(s[yr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ha.test(location.hostname)&&(s[Ua]=Wa);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){tn.forceAllow_=!0}static forceDisallow(){tn.forceDisallow_=!0}static isAvailable(){return tn.forceAllow_?!0:!tn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!T_()&&!S_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ya(n),i=Ma(s,z_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[K_]="t",s[Ga]=e,s[Ya]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class to{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=C_(),window[U_+this.uniqueCallbackIdentifier]=e,window[W_+this.uniqueCallbackIdentifier]=n,this.myIFrame=to.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ce("frame writing exception"),l.stack&&Ce(l.stack),Ce(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ga]=this.myID,e[Ya]=this.myPW,e[Qa]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ja+s.length<=Xa;){const o=this.pendingSegs.shift();s=s+"&"+V_+i+"="+o.seg+"&"+$_+i+"="+o.ts+"&"+j_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(q_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y_=16384,Q_=45e3;let Ws=null;typeof MozWebSocket<"u"?Ws=MozWebSocket:typeof WebSocket<"u"&&(Ws=WebSocket);class Ke{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=hs(this.connId),this.stats_=eo(n),this.connURL=Ke.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[La]=Zr,typeof location<"u"&&location.hostname&&Ha.test(location.hostname)&&(o[Ua]=Wa),n&&(o[Ba]=n),s&&(o[Va]=s),i&&(o[yr]=i),r&&(o[$a]=r),qa(e,ja,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ut.set("previous_websocket_failure",!0);try{let s;Ea(),this.mySock=new Ws(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ke.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ws!==null&&!Ke.forceDisallow_}static previouslyFailed(){return Ut.isInMemoryStorage||Ut.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ut.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Xn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ma(n,Y_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Q_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ke.responsesRequiredToBeHealthy=2;Ke.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[tn,Ke]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ke&&Ke.isAvailable();let s=n&&!Ke.previouslyFailed();if(e.webSocketOnly&&(n||Re("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ke];else{const i=this.transports_=[];for(const r of es.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}es.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=6e4,J_=5e3,Z_=10*1024,eg=100*1024,Wi="t",kl="d",tg="s",Pl="r",ng="e",Ol="o",Dl="a",Ml="n",Fl="p",sg="h";class ig{constructor(e,n,s,i,r,o,l,c,a,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=hs("c:"+this.id+":"),this.transportManager_=new es(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Wn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>eg?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Z_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wi in e){const n=e[Wi];n===Dl?this.upgradeIfSecondaryHealthy_():n===Pl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ol&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=kn("t",e),s=kn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Dl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ml,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=kn("t",e),s=kn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=kn(Wi,e);if(kl in e){const s=e[kl];if(n===sg)this.onHandshake_(s);else if(n===Ml){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===tg?this.onConnectionShutdown_(s):n===Pl?this.onReset_(s):n===ng?mr("Server Error: "+s):n===Ol?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):mr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Zr!==s&&Re("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Wn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(X_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(J_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ut.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e){this.allowedEvents_=e,this.listeners_={},E(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){E(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends eu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ca()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Hs}getInitialEvent(e){return E(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll=32,Bl=768;class Q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function j(){return new Q("")}function B(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Tt(t){return t.pieces_.length-t.pieceNum_}function te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Q(t.pieces_,e)}function tu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function rg(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function nu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function su(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Q(e,0)}function de(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Q)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Q(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function xe(t,e){const n=B(t),s=B(e);if(n===null)return e;if(n===s)return xe(te(t),te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function no(t,e){if(Tt(t)!==Tt(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function qe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Tt(t)>Tt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class og{constructor(e,n){this.errorPrefix_=n,this.parts_=nu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=gi(this.parts_[s]);iu(this)}}function lg(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=gi(e),iu(t)}function cg(t){const e=t.parts_.pop();t.byteLength_-=gi(e),t.parts_.length>0&&(t.byteLength_-=1)}function iu(t){if(t.byteLength_>Bl)throw new Error(t.errorPrefix_+"has a key path longer than "+Bl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ll)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ll+") or object contains a cycle "+Ot(t))}function Ot(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so extends eu{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new so}getInitialEvent(e){return E(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=1e3,ag=60*5*1e3,Ul=30*1e3,ug=1.3,hg=3e4,fg="server_kill",Wl=3;class lt extends Za{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=lt.nextPersistentConnectionId_++,this.log_=hs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Pn,this.maxReconnectDelay_=ag,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Ea())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");so.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Hs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(me(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new _i,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;lt.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ft(e,"w")){const s=yn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Re(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||rp(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ul)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=ip(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):mr("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Pn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Pn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hg&&(this.reconnectDelay_=Pn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ug)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+lt.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(u){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(u)};this.realtime_={close:c,sendRequest:a};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,l=new ig(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Re(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(fg)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Re(u),c())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ml(this.interruptReasons_)&&(this.reconnectDelay_=Pn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Jr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Q(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wl&&(this.reconnectDelay_=Ul,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ka.replace(/\./g,"-")]=1,Ca()?e["framework.cordova"]=1:jd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Hs.getInstance().currentlyOnline();return ml(this.interruptReasons_)&&e}}lt.nextPersistentConnectionId_=0;lt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new U(vn,e),i=new U(vn,n);return this.compare(s,i)!==0}minPost(){return U.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws;class ru extends mi{static get __EMPTY_NODE(){return ws}static set __EMPTY_NODE(e){ws=e}compare(e,n){return xn(e.name,n.name)}isDefinedOn(e){throw Sn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(zt,ws)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,ws)}toString(){return".key"}}const hn=new ru;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ge{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ge.RED,this.left=i??Ne.EMPTY_NODE,this.right=r??Ne.EMPTY_NODE}copy(e,n,s,i,r){return new ge(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ne.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ge.RED=!0;ge.BLACK=!1;class dg{copy(e,n,s,i,r){return this}insert(e,n,s){return new ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ne{constructor(e,n=Ne.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ne(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ge.BLACK,null,null))}remove(e){return new Ne(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ge.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Is(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Is(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Is(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Is(this.root_,null,this.comparator_,!0,e)}}Ne.EMPTY_NODE=new dg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(t,e){return xn(t.name,e.name)}function io(t,e){return xn(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vr;function _g(t){vr=t}const ou=function(t){return typeof t=="number"?"number:"+Fa(t):"string:"+t},lu=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ft(e,".sv"),"Priority must be a string or number.")}else E(t===vr||t.isEmpty(),"priority of unexpected type.");E(t===vr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hl;class _e{constructor(e,n=_e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),lu(this.priorityNode_)}static set __childrenNodeConstructor(e){Hl=e}static get __childrenNodeConstructor(){return Hl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:B(e)===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=B(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||Tt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,_e.__childrenNodeConstructor.EMPTY_NODE.updateChild(te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ou(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Fa(this.value_):e+=this.value_,this.lazyHash_=Oa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _e.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=_e.VALUE_TYPE_ORDER.indexOf(n),r=_e.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+n),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cu,au;function gg(t){cu=t}function mg(t){au=t}class yg extends mi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?xn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(zt,new _e("[PRIORITY-POST]",au))}makePost(e,n){const s=cu(e);return new U(n,new _e("[PRIORITY-POST]",s))}toString(){return".priority"}}const ae=new yg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=Math.log(2);class Cg{constructor(e){const n=r=>parseInt(Math.log(r)/vg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vs=function(t,e,n,s){t.sort(e);const i=function(c,a){const h=a-c;let u,d;if(h===0)return null;if(h===1)return u=t[c],d=n?n(u):u,new ge(d,u.node,ge.BLACK,null,null);{const g=parseInt(h/2,10)+c,C=i(c,g),I=i(g+1,a);return u=t[g],d=n?n(u):u,new ge(d,u.node,ge.BLACK,C,I)}},r=function(c){let a=null,h=null,u=t.length;const d=function(C,I){const k=u-C,F=u;u-=C;const ue=i(k+1,F),D=t[k],X=n?n(D):D;g(new ge(X,D.node,I,null,ue))},g=function(C){a?(a.left=C,a=C):(h=C,a=C)};for(let C=0;C<c.count;++C){const I=c.nextBitIsOne(),k=Math.pow(2,c.count-(C+1));I?d(k,ge.BLACK):(d(k,ge.BLACK),d(k,ge.RED))}return h},o=new Cg(t.length),l=r(o);return new Ne(s||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hi;const en={};class ot{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(en&&ae,"ChildrenNode.ts has not been loaded"),Hi=Hi||new ot({".priority":en},{".priority":ae}),Hi}get(e){const n=yn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ne?n:null}hasIndex(e){return ft(this.indexSet_,e.toString())}addIndex(e,n){E(e!==hn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(U.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Vs(s,e.getCompare()):l=en;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const h=Object.assign({},this.indexes_);return h[c]=l,new ot(h,a)}addToIndexes(e,n){const s=Ls(this.indexes_,(i,r)=>{const o=yn(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===en)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(U.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),Vs(l,o.getCompare())}else return en;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new U(e.name,l))),c.insert(e,e.node)}});return new ot(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ls(this.indexes_,i=>{if(i===en)return i;{const r=n.get(e.name);return r?i.remove(new U(e.name,r)):i}});return new ot(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let On;class P{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&lu(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return On||(On=new P(new Ne(io),null,ot.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||On}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?On:n}}getChild(e){const n=B(e);return n===null?this:this.getImmediateChild(n).getChild(te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new U(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?On:this.priorityNode_;return new P(i,o,r)}}updateChild(e,n){const s=B(e);if(s===null)return n;{E(B(e)!==".priority"||Tt(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(te(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ae,(o,l)=>{n[o]=l.val(e),s++,r&&P.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ou(this.getPriority().val())+":"),this.forEachChild(ae,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Oa(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new U(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===fs?-1:0}withIndex(e){if(e===hn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===hn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ae),i=n.getIterator(ae);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===hn?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Eg extends P{constructor(){super(new Ne(io),P.EMPTY_NODE,ot.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const fs=new Eg;Object.defineProperties(U,{MIN:{value:new U(vn,P.EMPTY_NODE)},MAX:{value:new U(zt,fs)}});ru.__EMPTY_NODE=P.EMPTY_NODE;_e.__childrenNodeConstructor=P;_g(fs);mg(fs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=!0;function ye(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _e(n,ye(e))}if(!(t instanceof Array)&&bg){const n=[];let s=!1;if(Ae(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=ye(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new U(o,c)))}}),n.length===0)return P.EMPTY_NODE;const r=Vs(n,pg,o=>o.name,io);if(s){const o=Vs(n,ae.getCompare());return new P(r,ye(e),new ot({".priority":o},{".priority":ae}))}else return new P(r,ye(e),ot.Default)}else{let n=P.EMPTY_NODE;return Ae(t,(s,i)=>{if(ft(t,s)&&s.substring(0,1)!=="."){const r=ye(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ye(e))}}gg(ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg extends mi{constructor(e){super(),this.indexPath_=e,E(!W(e)&&B(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?xn(e.name,n.name):r}makePost(e,n){const s=ye(e),i=P.EMPTY_NODE.updateChild(this.indexPath_,s);return new U(n,i)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,fs);return new U(zt,e)}toString(){return nu(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig extends mi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?xn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const s=ye(e);return new U(n,s)}toString(){return".value"}}const Tg=new Ig;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(t){return{type:"value",snapshotNode:t}}function Cn(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ts(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ns(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Sg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ts(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(Cn(n,s)):o.trackChildChange(ns(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ae,(i,r)=>{n.hasChild(i)||s.trackChildChange(ts(i,r))}),n.isLeafNode()||n.forEachChild(ae,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ns(i,r,o))}else s.trackChildChange(Cn(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.indexedFilter_=new ro(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ss.getStartPost_(e),this.endPost_=ss.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new U(n,s))||(s=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=P.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(P.EMPTY_NODE);const r=this;return n.forEachChild(ae,(o,l)=>{r.matches(new U(o,l))||(i=i.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ss(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new U(n,s))||(s=P.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=P.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(P.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,g)=>u(g,d)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const c=new U(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(l.hasChild(n)){const u=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,a,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,c);if(h&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(ns(n,s,u)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ts(n,u));const I=l.updateImmediateChild(n,P.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Cn(d.name,d.node)),I.updateImmediateChild(d.name,d.node)):I}}else return s.isEmpty()?e:h&&o(a,c)>=0?(r!=null&&(r.trackChildChange(ts(a.name,a.node)),r.trackChildChange(Cn(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,P.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:vn}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:zt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ae}copy(){const e=new oo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ng(t){return t.loadsAllData()?new ro(t.getIndex()):t.hasLimit()?new xg(t):new ss(t)}function Vl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ae?n="$priority":t.index_===Tg?n="$value":t.index_===hn?n="$key":(E(t.index_ instanceof wg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=me(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+me(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=me(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $l(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ae&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends Za{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=hs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=$s.getListenId_(e,s),l={};this.listens_[o]=l;const c=Vl(e._queryParams);this.restRequest_(r+".json",c,(a,h)=>{let u=h;if(a===404&&(u=null,a=null),a===null&&this.onDataUpdate_(r,u,!1,s),yn(this.listens_,o)===l){let d;a?a===401?d="permission_denied":d="rest_error:"+a:d="ok",i(d,null)}})}unlisten(e,n){const s=$s.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Vl(e._queryParams),s=e._path.toString(),i=new _i;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+op(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Xn(l.responseText)}catch{Re("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Re("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(){return{value:null,children:new Map}}function hu(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=B(e);t.children.has(s)||t.children.set(s,js());const i=t.children.get(s);e=te(e),hu(i,e,n)}}function Cr(t,e,n){t.value!==null?n(e,t.value):Ag(t,(s,i)=>{const r=new Q(e.toString()+"/"+s);Cr(i,r,n)})}function Ag(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ae(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl=10*1e3,Pg=30*1e3,Og=5*60*1e3;class Dg{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new kg(e);const s=jl+(Pg-jl)*Math.random();Wn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ae(e,(i,r)=>{r>0&&ft(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Wn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Og))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ge||(Ge={}));function fu(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function lo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function co(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ge.ACK_USER_WRITE,this.source=fu()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Q(e));return new Ks(j(),n,this.revert)}}else return E(B(this.path)===e,"operationForChild called for unrelated child."),new Ks(te(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,n){this.source=e,this.path=n,this.type=Ge.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new is(this.source,j()):new is(this.source,te(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ge.OVERWRITE}operationForChild(e){return W(this.path)?new qt(this.source,j(),this.snap.getImmediateChild(e)):new qt(this.source,te(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ge.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new Q(e));return n.isEmpty()?null:n.value?new qt(this.source,j(),n.value):new rs(this.source,j(),n)}else return E(B(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new rs(this.source,te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=B(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Fg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Sg(o.childName,o.snapshotNode))}),Dn(t,i,"child_removed",e,s,n),Dn(t,i,"child_added",e,s,n),Dn(t,i,"child_moved",r,s,n),Dn(t,i,"child_changed",e,s,n),Dn(t,i,"value",e,s,n),i}function Dn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>Bg(t,l,c)),o.forEach(l=>{const c=Lg(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function Lg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Bg(t,e,n){if(e.childName==null||n.childName==null)throw Sn("Should only compare child_ events.");const s=new U(e.childName,e.snapshotNode),i=new U(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t,e){return{eventCache:t,serverCache:e}}function Hn(t,e,n,s){return yi(new Gt(e,n,s),t.serverCache)}function du(t,e,n,s){return yi(t.eventCache,new Gt(e,n,s))}function Er(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Yt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi;const Ug=()=>(Vi||(Vi=new Ne(I_)),Vi);class ne{constructor(e,n=Ug()){this.value=e,this.children=n}static fromObject(e){let n=new ne(null);return Ae(e,(s,i)=>{n=n.set(new Q(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:j(),value:this.value};if(W(e))return null;{const s=B(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(te(e),n);return r!=null?{path:de(new Q(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=B(e),s=this.children.get(n);return s!==null?s.subtree(te(e)):new ne(null)}}set(e,n){if(W(e))return new ne(n,this.children);{const s=B(e),r=(this.children.get(s)||new ne(null)).set(te(e),n),o=this.children.insert(s,r);return new ne(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new ne(null):new ne(null,this.children);{const n=B(e),s=this.children.get(n);if(s){const i=s.remove(te(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ne(null):new ne(this.value,r)}else return this}}get(e){if(W(e))return this.value;{const n=B(e),s=this.children.get(n);return s?s.get(te(e)):null}}setTree(e,n){if(W(e))return n;{const s=B(e),r=(this.children.get(s)||new ne(null)).setTree(te(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ne(this.value,o)}}fold(e){return this.fold_(j(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(de(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,j(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(W(e))return null;{const r=B(e),o=this.children.get(r);return o?o.findOnPath_(te(e),de(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,j(),n)}foreachOnPath_(e,n,s){if(W(e))return this;{this.value&&s(n,this.value);const i=B(e),r=this.children.get(i);return r?r.foreachOnPath_(te(e),de(n,i),s):new ne(null)}}foreach(e){this.foreach_(j(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(de(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.writeTree_=e}static empty(){return new Xe(new ne(null))}}function Vn(t,e,n){if(W(e))return new Xe(new ne(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=xe(i,e);return r=r.updateChild(o,n),new Xe(t.writeTree_.set(i,r))}else{const i=new ne(n),r=t.writeTree_.setTree(e,i);return new Xe(r)}}}function Kl(t,e,n){let s=t;return Ae(n,(i,r)=>{s=Vn(s,de(e,i),r)}),s}function zl(t,e){if(W(e))return Xe.empty();{const n=t.writeTree_.setTree(e,new ne(null));return new Xe(n)}}function br(t,e){return Qt(t,e)!=null}function Qt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xe(n.path,e)):null}function ql(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ae,(s,i)=>{e.push(new U(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new U(s,i.value))}),e}function bt(t,e){if(W(e))return t;{const n=Qt(t,e);return n!=null?new Xe(new ne(n)):new Xe(t.writeTree_.subtree(e))}}function wr(t){return t.writeTree_.isEmpty()}function En(t,e){return pu(j(),t.writeTree_,e)}function pu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=pu(de(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(de(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t,e){return yu(e,t)}function Wg(t,e,n,s,i){E(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Vn(t.visibleWrites,e,n)),t.lastWriteId=s}function Hg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Vg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&$g(l,s.path)?i=!1:qe(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return jg(t),!0;if(s.snap)t.visibleWrites=zl(t.visibleWrites,s.path);else{const l=s.children;Ae(l,c=>{t.visibleWrites=zl(t.visibleWrites,de(s.path,c))})}return!0}else return!1}function $g(t,e){if(t.snap)return qe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qe(de(t.path,n),e))return!0;return!1}function jg(t){t.visibleWrites=_u(t.allWrites,Kg,j()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Kg(t){return t.visible}function _u(t,e,n){let s=Xe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)qe(n,o)?(l=xe(n,o),s=Vn(s,l,r.snap)):qe(o,n)&&(l=xe(o,n),s=Vn(s,j(),r.snap.getChild(l)));else if(r.children){if(qe(n,o))l=xe(n,o),s=Kl(s,l,r.children);else if(qe(o,n))if(l=xe(o,n),W(l))s=Kl(s,j(),r.children);else{const c=yn(r.children,B(l));if(c){const a=c.getChild(te(l));s=Vn(s,j(),a)}}}else throw Sn("WriteRecord should have .snap or .children")}}return s}function gu(t,e,n,s,i){if(!s&&!i){const r=Qt(t.visibleWrites,e);if(r!=null)return r;{const o=bt(t.visibleWrites,e);if(wr(o))return n;if(n==null&&!br(o,j()))return null;{const l=n||P.EMPTY_NODE;return En(o,l)}}}else{const r=bt(t.visibleWrites,e);if(!i&&wr(r))return n;if(!i&&n==null&&!br(r,j()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(qe(a.path,e)||qe(e,a.path))},l=_u(t.allWrites,o,e),c=n||P.EMPTY_NODE;return En(l,c)}}}function zg(t,e,n){let s=P.EMPTY_NODE;const i=Qt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ae,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=bt(t.visibleWrites,e);return n.forEachChild(ae,(o,l)=>{const c=En(bt(r,new Q(o)),l);s=s.updateImmediateChild(o,c)}),ql(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=bt(t.visibleWrites,e);return ql(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function qg(t,e,n,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=de(e,n);if(br(t.visibleWrites,r))return null;{const o=bt(t.visibleWrites,r);return wr(o)?i.getChild(n):En(o,i.getChild(n))}}function Gg(t,e,n,s){const i=de(e,n),r=Qt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=bt(t.visibleWrites,i);return En(o,s.getNode().getImmediateChild(n))}else return null}function Yg(t,e){return Qt(t.visibleWrites,e)}function Qg(t,e,n,s,i,r,o){let l;const c=bt(t.visibleWrites,e),a=Qt(c,j());if(a!=null)l=a;else if(n!=null)l=En(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const h=[],u=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=d.getNext();for(;g&&h.length<i;)u(g,s)!==0&&h.push(g),g=d.getNext();return h}else return[]}function Xg(){return{visibleWrites:Xe.empty(),allWrites:[],lastWriteId:-1}}function zs(t,e,n,s){return gu(t.writeTree,t.treePath,e,n,s)}function uo(t,e){return zg(t.writeTree,t.treePath,e)}function Gl(t,e,n,s){return qg(t.writeTree,t.treePath,e,n,s)}function qs(t,e){return Yg(t.writeTree,de(t.treePath,e))}function Jg(t,e,n,s,i,r){return Qg(t.writeTree,t.treePath,e,n,s,i,r)}function ho(t,e,n){return Gg(t.writeTree,t.treePath,e,n)}function mu(t,e){return yu(de(t.treePath,e),t.writeTree)}function yu(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ns(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ts(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Cn(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ns(s,e.snapshotNode,i.oldSnap));else throw Sn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const vu=new em;class fo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Gt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ho(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Yt(this.viewCache_),r=Jg(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(t){return{filter:t}}function nm(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function sm(t,e,n,s,i){const r=new Zg;let o,l;if(n.type===Ge.OVERWRITE){const a=n;a.source.fromUser?o=Ir(t,e,a.path,a.snap,s,i,r):(E(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!W(a.path),o=Gs(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===Ge.MERGE){const a=n;a.source.fromUser?o=rm(t,e,a.path,a.children,s,i,r):(E(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Tr(t,e,a.path,a.children,s,i,l,r))}else if(n.type===Ge.ACK_USER_WRITE){const a=n;a.revert?o=cm(t,e,a.path,s,i,r):o=om(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===Ge.LISTEN_COMPLETE)o=lm(t,e,n.path,s,r);else throw Sn("Unknown operation type: "+n.type);const c=r.getChanges();return im(e,o,c),{viewCache:o,changes:c}}function im(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Er(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(uu(Er(e)))}}function Cu(t,e,n,s,i,r){const o=e.eventCache;if(qs(s,n)!=null)return e;{let l,c;if(W(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=Yt(e),h=a instanceof P?a:P.EMPTY_NODE,u=uo(s,h);l=t.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const a=zs(s,Yt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=B(n);if(a===".priority"){E(Tt(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const u=Gl(s,n,h,c);u!=null?l=t.filter.updatePriority(h,u):l=o.getNode()}else{const h=te(n);let u;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const d=Gl(s,n,o.getNode(),c);d!=null?u=o.getNode().getImmediateChild(a).updateChild(h,d):u=o.getNode().getImmediateChild(a)}else u=ho(s,a,e.serverCache);u!=null?l=t.filter.updateChild(o.getNode(),a,u,h,i,r):l=o.getNode()}}return Hn(e,l,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function Gs(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const h=o?t.filter:t.filter.getIndexedFilter();if(W(n))a=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,s);a=h.updateFullNode(c.getNode(),g,null)}else{const g=B(n);if(!c.isCompleteForPath(n)&&Tt(n)>1)return e;const C=te(n),k=c.getNode().getImmediateChild(g).updateChild(C,s);g===".priority"?a=h.updatePriority(c.getNode(),k):a=h.updateChild(c.getNode(),g,k,C,vu,null)}const u=du(e,a,c.isFullyInitialized()||W(n),h.filtersNodes()),d=new fo(i,u,r);return Cu(t,u,n,i,d,l)}function Ir(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const h=new fo(i,e,r);if(W(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Hn(e,a,!0,t.filter.filtersNodes());else{const u=B(n);if(u===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=Hn(e,a,l.isFullyInitialized(),l.isFiltered());else{const d=te(n),g=l.getNode().getImmediateChild(u);let C;if(W(d))C=s;else{const I=h.getCompleteChild(u);I!=null?tu(d)===".priority"&&I.getChild(su(d)).isEmpty()?C=I:C=I.updateChild(d,s):C=P.EMPTY_NODE}if(g.equals(C))c=e;else{const I=t.filter.updateChild(l.getNode(),u,C,d,h,o);c=Hn(e,I,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Yl(t,e){return t.eventCache.isCompleteForChild(e)}function rm(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const h=de(n,c);Yl(e,B(h))&&(l=Ir(t,l,h,a,i,r,o))}),s.foreach((c,a)=>{const h=de(n,c);Yl(e,B(h))||(l=Ir(t,l,h,a,i,r,o))}),l}function Ql(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Tr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;W(n)?a=s:a=new ne(null).setTree(n,s);const h=e.serverCache.getNode();return a.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const g=e.serverCache.getNode().getImmediateChild(u),C=Ql(t,g,d);c=Gs(t,c,new Q(u),C,i,r,o,l)}}),a.children.inorderTraversal((u,d)=>{const g=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!g){const C=e.serverCache.getNode().getImmediateChild(u),I=Ql(t,C,d);c=Gs(t,c,new Q(u),I,i,r,o,l)}}),c}function om(t,e,n,s,i,r,o){if(qs(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(W(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Gs(t,e,n,c.getNode().getChild(n),i,r,l,o);if(W(n)){let a=new ne(null);return c.getNode().forEachChild(hn,(h,u)=>{a=a.set(new Q(h),u)}),Tr(t,e,n,a,i,r,l,o)}else return e}else{let a=new ne(null);return s.foreach((h,u)=>{const d=de(n,h);c.isCompleteForPath(d)&&(a=a.set(h,c.getNode().getChild(d)))}),Tr(t,e,n,a,i,r,l,o)}}function lm(t,e,n,s,i){const r=e.serverCache,o=du(e,r.getNode(),r.isFullyInitialized()||W(n),r.isFiltered());return Cu(t,o,n,s,vu,i)}function cm(t,e,n,s,i,r){let o;if(qs(s,n)!=null)return e;{const l=new fo(s,e,i),c=e.eventCache.getNode();let a;if(W(n)||B(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=zs(s,Yt(e));else{const u=e.serverCache.getNode();E(u instanceof P,"serverChildren would be complete if leaf node"),h=uo(s,u)}h=h,a=t.filter.updateFullNode(c,h,r)}else{const h=B(n);let u=ho(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=c.getImmediateChild(h)),u!=null?a=t.filter.updateChild(c,h,u,te(n),l,r):e.eventCache.getNode().hasChild(h)?a=t.filter.updateChild(c,h,P.EMPTY_NODE,te(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=zs(s,Yt(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||qs(s,j())!=null,Hn(e,a,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ro(s.getIndex()),r=Ng(s);this.processor_=tm(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(P.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(P.EMPTY_NODE,l.getNode(),null),h=new Gt(c,o.isFullyInitialized(),i.filtersNodes()),u=new Gt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=yi(u,h),this.eventGenerator_=new Mg(this.query_)}get query(){return this.query_}}function um(t){return t.viewCache_.serverCache.getNode()}function hm(t,e){const n=Yt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(B(e)).isEmpty())?n.getChild(e):null}function Xl(t){return t.eventRegistrations_.length===0}function fm(t,e){t.eventRegistrations_.push(e)}function Jl(t,e,n){const s=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Zl(t,e,n,s){e.type===Ge.MERGE&&e.source.queryId!==null&&(E(Yt(t.viewCache_),"We should always have a full cache before handling merges"),E(Er(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=sm(t.processor_,i,e,n,s);return nm(t.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Eu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function dm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ae,(r,o)=>{s.push(Cn(r,o))}),n.isFullyInitialized()&&s.push(uu(n.getNode())),Eu(t,s,n.getNode(),e)}function Eu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Fg(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ys;class pm{constructor(){this.views=new Map}}function _m(t){E(!Ys,"__referenceConstructor has already been defined"),Ys=t}function gm(){return E(Ys,"Reference.ts has not been loaded"),Ys}function mm(t){return t.views.size===0}function po(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),Zl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Zl(o,e,n,s));return r}}function ym(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=zs(n,i?s:null),c=!1;l?c=!0:s instanceof P?(l=uo(n,s),c=!1):(l=P.EMPTY_NODE,c=!1);const a=yi(new Gt(l,c,!1),new Gt(s,i,!1));return new am(e,a)}return o}function vm(t,e,n,s,i,r){const o=ym(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),fm(o,n),dm(o,n)}function Cm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=St(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(Jl(a,n,s)),Xl(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(Jl(c,n,s)),Xl(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!St(t)&&r.push(new(gm())(e._repo,e._path)),{removed:r,events:o}}function bu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function fn(t,e){let n=null;for(const s of t.views.values())n=n||hm(s,e);return n}function wu(t,e){if(e._queryParams.loadsAllData())return vi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Iu(t,e){return wu(t,e)!=null}function St(t){return vi(t)!=null}function vi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qs;function Em(t){E(!Qs,"__referenceConstructor has already been defined"),Qs=t}function bm(){return E(Qs,"Reference.ts has not been loaded"),Qs}let wm=1;class ec{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ne(null),this.pendingWriteTree_=Xg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Tu(t,e,n,s,i){return Wg(t.pendingWriteTree_,e,n,s,i),i?ds(t,new qt(fu(),e,n)):[]}function Wt(t,e,n=!1){const s=Hg(t.pendingWriteTree_,e);if(Vg(t.pendingWriteTree_,e)){let r=new ne(null);return s.snap!=null?r=r.set(j(),!0):Ae(s.children,o=>{r=r.set(new Q(o),!0)}),ds(t,new Ks(s.path,r,n))}else return[]}function Ci(t,e,n){return ds(t,new qt(lo(),e,n))}function Im(t,e,n){const s=ne.fromObject(n);return ds(t,new rs(lo(),e,s))}function Tm(t,e){return ds(t,new is(lo(),e))}function Sm(t,e,n){const s=go(t,n);if(s){const i=mo(s),r=i.path,o=i.queryId,l=xe(r,e),c=new is(co(o),l);return yo(t,r,c)}else return[]}function Sr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Iu(o,e))){const c=Cm(o,e,n,s);mm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const h=a.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(r,(d,g)=>St(g));if(h&&!u){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=Rm(d);for(let C=0;C<g.length;++C){const I=g[C],k=I.query,F=Nu(t,I);t.listenProvider_.startListening($n(k),Xs(t,k),F.hashFn,F.onComplete)}}}!u&&a.length>0&&!s&&(h?t.listenProvider_.stopListening($n(e),null):a.forEach(d=>{const g=t.queryToTagMap.get(Ei(d));t.listenProvider_.stopListening($n(d),g)}))}Am(t,a)}return l}function xm(t,e,n,s){const i=go(t,s);if(i!=null){const r=mo(i),o=r.path,l=r.queryId,c=xe(o,e),a=new qt(co(l),c,n);return yo(t,o,a)}else return[]}function Nm(t,e,n,s){const i=go(t,s);if(i){const r=mo(i),o=r.path,l=r.queryId,c=xe(o,e),a=ne.fromObject(n),h=new rs(co(l),c,a);return yo(t,o,h)}else return[]}function tc(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const C=xe(d,i);r=r||fn(g,C),o=o||St(g)});let l=t.syncPointTree_.get(i);l?(o=o||St(l),r=r||fn(l,j())):(l=new pm,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=P.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,C)=>{const I=fn(C,j());I&&(r=r.updateImmediateChild(g,I))}));const a=Iu(l,e);if(!a&&!e._queryParams.loadsAllData()){const d=Ei(e);E(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=km();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const h=ao(t.pendingWriteTree_,i);let u=vm(l,e,n,h,r,c);if(!a&&!o&&!s){const d=wu(l,e);u=u.concat(Pm(t,e,d))}return u}function _o(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=xe(o,e),a=fn(l,c);if(a)return a});return gu(i,e,r,n,!0)}function ds(t,e){return Su(e,t.syncPointTree_,null,ao(t.pendingWriteTree_,j()))}function Su(t,e,n,s){if(W(t.path))return xu(t,e,n,s);{const i=e.get(j());n==null&&i!=null&&(n=fn(i,j()));let r=[];const o=B(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,h=mu(s,o);r=r.concat(Su(l,c,a,h))}return i&&(r=r.concat(po(i,t,s,n))),r}}function xu(t,e,n,s){const i=e.get(j());n==null&&i!=null&&(n=fn(i,j()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=mu(s,o),h=t.operationForChild(o);h&&(r=r.concat(xu(h,l,c,a)))}),i&&(r=r.concat(po(i,t,s,n))),r}function Nu(t,e){const n=e.query,s=Xs(t,n);return{hashFn:()=>(um(e)||P.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Sm(t,n._path,s):Tm(t,n._path);{const r=x_(i,n);return Sr(t,n,null,r)}}}}function Xs(t,e){const n=Ei(e);return t.queryToTagMap.get(n)}function Ei(t){return t._path.toString()+"$"+t._queryIdentifier}function go(t,e){return t.tagToQueryMap.get(e)}function mo(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Q(t.substr(0,e))}}function yo(t,e,n){const s=t.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=ao(t.pendingWriteTree_,e);return po(s,n,i,null)}function Rm(t){return t.fold((e,n,s)=>{if(n&&St(n))return[vi(n)];{let i=[];return n&&(i=bu(n)),Ae(s,(r,o)=>{i=i.concat(o)}),i}})}function $n(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(bm())(t._repo,t._path):t}function Am(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ei(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function km(){return wm++}function Pm(t,e,n){const s=e._path,i=Xs(t,e),r=Nu(t,n),o=t.listenProvider_.startListening($n(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)E(!St(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,h,u)=>{if(!W(a)&&h&&St(h))return[vi(h).query];{let d=[];return h&&(d=d.concat(bu(h).map(g=>g.query))),Ae(u,(g,C)=>{d=d.concat(C)}),d}});for(let a=0;a<c.length;++a){const h=c[a];t.listenProvider_.stopListening($n(h),Xs(t,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vo(n)}node(){return this.node_}}class Co{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new Co(this.syncTree_,n)}node(){return _o(this.syncTree_,this.path_)}}const Om=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},nc=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Dm(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Mm(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Dm=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},Mm=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Fm=function(t,e,n,s){return Eo(e,new Co(n,t),s)},Ru=function(t,e,n){return Eo(t,new vo(e),n)};function Eo(t,e,n){const s=t.getPriority().val(),i=nc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=nc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new _e(l,ye(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new _e(i))),o.forEachChild(ae,(l,c)=>{const a=Eo(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function wo(t,e){let n=e instanceof Q?e:new Q(e),s=t,i=B(n);for(;i!==null;){const r=yn(s.node.children,i)||{children:{},childCount:0};s=new bo(i,s,r),n=te(n),i=B(n)}return s}function Rn(t){return t.node.value}function Au(t,e){t.node.value=e,xr(t)}function ku(t){return t.node.childCount>0}function Lm(t){return Rn(t)===void 0&&!ku(t)}function bi(t,e){Ae(t.node.children,(n,s)=>{e(new bo(n,t,s))})}function Pu(t,e,n,s){n&&!s&&e(t),bi(t,i=>{Pu(i,e,!0,s)}),n&&s&&e(t)}function Bm(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ps(t){return new Q(t.parent===null?t.name:ps(t.parent)+"/"+t.name)}function xr(t){t.parent!==null&&Um(t.parent,t.name,t)}function Um(t,e,n){const s=Lm(n),i=ft(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,xr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,xr(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=/[\[\].#$\/\u0000-\u001F\u007F]/,Hm=/[\[\].#$\u0000-\u001F\u007F]/,$i=10*1024*1024,Ou=function(t){return typeof t=="string"&&t.length!==0&&!Wm.test(t)},Du=function(t){return typeof t=="string"&&t.length!==0&&!Hm.test(t)},Vm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Du(t)},$m=function(t,e,n,s){s&&e===void 0||Io(Qr(t,"value"),e,n)},Io=function(t,e,n){const s=n instanceof Q?new og(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ot(s));if(typeof e=="function")throw new Error(t+"contains a function "+Ot(s)+" with contents = "+e.toString());if(Da(e))throw new Error(t+"contains "+e.toString()+" "+Ot(s));if(typeof e=="string"&&e.length>$i/3&&gi(e)>$i)throw new Error(t+"contains a string greater than "+$i+" utf8 bytes "+Ot(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ae(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ou(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ot(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);lg(s,o),Io(t,l,s),cg(s)}),i&&r)throw new Error(t+' contains ".value" child '+Ot(s)+" in addition to actual children.")}},Mu=function(t,e,n,s){if(!(s&&n===void 0)&&!Du(n))throw new Error(Qr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jm=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Mu(t,e,n,s)},Fu=function(t,e){if(B(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Km=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ou(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Vm(n))throw new Error(Qr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function To(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!no(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Lu(t,e,n){To(t,n),Bu(t,s=>no(s,e))}function ut(t,e,n){To(t,n),Bu(t,s=>qe(s,e)||qe(e,s))}function Bu(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(qm(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function qm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();jt&&Ce("event: "+n.toString()),Nn(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="repo_interrupt",Ym=25;class Qm{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=js(),this.transactionQueueTree_=new bo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Xm(t,e,n){if(t.stats_=eo(t.repoInfo_),t.forceRestClient_||k_())t.server_=new $s(t.repoInfo_,(s,i,r,o)=>{sc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ic(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new lt(t.repoInfo_,e,(s,i,r,o)=>{sc(t,s,i,r,o)},s=>{ic(t,s)},s=>{Zm(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=F_(t.repoInfo_,()=>new Dg(t.stats_,t.server_)),t.infoData_=new Rg,t.infoSyncTree_=new ec({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Ci(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),xo(t,"connected",!1),t.serverSyncTree_=new ec({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);ut(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Jm(t){const n=t.infoData_.getNode(new Q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function So(t){return Om({timestamp:Jm(t)})}function sc(t,e,n,s,i){t.dataUpdateCount++;const r=new Q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Ls(n,a=>ye(a));o=Nm(t.serverSyncTree_,r,c,i)}else{const c=ye(n);o=xm(t.serverSyncTree_,r,c,i)}else if(s){const c=Ls(n,a=>ye(a));o=Im(t.serverSyncTree_,r,c)}else{const c=ye(n);o=Ci(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=wi(t,r)),ut(t.eventQueue_,l,o)}function ic(t,e){xo(t,"connected",e),e===!1&&ty(t)}function Zm(t,e){Ae(e,(n,s)=>{xo(t,n,s)})}function xo(t,e,n){const s=new Q("/.info/"+e),i=ye(n);t.infoData_.updateSnapshot(s,i);const r=Ci(t.infoSyncTree_,s,i);ut(t.eventQueue_,s,r)}function Uu(t){return t.nextWriteId_++}function ey(t,e,n,s,i){No(t,"set",{path:e.toString(),value:n,priority:s});const r=So(t),o=ye(n,s),l=_o(t.serverSyncTree_,e),c=Ru(o,l,r),a=Uu(t),h=Tu(t.serverSyncTree_,e,c,a,!0);To(t.eventQueue_,h),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const C=d==="ok";C||Re("set at "+e+" failed: "+d);const I=Wt(t.serverSyncTree_,a,!C);ut(t.eventQueue_,e,I),iy(t,i,d,g)});const u=ju(t,e);wi(t,u),ut(t.eventQueue_,u,[])}function ty(t){No(t,"onDisconnectEvents");const e=So(t),n=js();Cr(t.onDisconnect_,j(),(i,r)=>{const o=Fm(i,r,t.serverSyncTree_,e);hu(n,i,o)});let s=[];Cr(n,j(),(i,r)=>{s=s.concat(Ci(t.serverSyncTree_,i,r));const o=ju(t,i);wi(t,o)}),t.onDisconnect_=js(),ut(t.eventQueue_,j(),s)}function ny(t,e,n){let s;B(e._path)===".info"?s=tc(t.infoSyncTree_,e,n):s=tc(t.serverSyncTree_,e,n),Lu(t.eventQueue_,e._path,s)}function rc(t,e,n){let s;B(e._path)===".info"?s=Sr(t.infoSyncTree_,e,n):s=Sr(t.serverSyncTree_,e,n),Lu(t.eventQueue_,e._path,s)}function sy(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Gm)}function No(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function iy(t,e,n,s){e&&Nn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Wu(t,e,n){return _o(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function Ro(t,e=t.transactionQueueTree_){if(e||Ii(t,e),Rn(e)){const n=Vu(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&ry(t,ps(e),n)}else ku(e)&&bi(e,n=>{Ro(t,n)})}function ry(t,e,n){const s=n.map(a=>a.currentWriteId),i=Wu(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const h=n[a];E(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=xe(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{No(t,"transaction put response",{path:c.toString(),status:a});let h=[];if(a==="ok"){const u=[];for(let d=0;d<n.length;d++)n[d].status=2,h=h.concat(Wt(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&u.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ii(t,wo(t.transactionQueueTree_,e)),Ro(t,t.transactionQueueTree_),ut(t.eventQueue_,e,h);for(let d=0;d<u.length;d++)Nn(u[d])}else{if(a==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Re("transaction at "+c.toString()+" failed: "+a);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=a}wi(t,e)}},o)}function wi(t,e){const n=Hu(t,e),s=ps(n),i=Vu(t,n);return oy(t,i,s),s}function oy(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=xe(n,c.path);let h=!1,u;if(E(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,u=c.abortReason,i=i.concat(Wt(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Ym)h=!0,u="maxretry",i=i.concat(Wt(t.serverSyncTree_,c.currentWriteId,!0));else{const d=Wu(t,c.path,o);c.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){Io("transaction failed: Data returned ",g,c.path);let C=ye(g);typeof g=="object"&&g!=null&&ft(g,".priority")||(C=C.updatePriority(d.getPriority()));const k=c.currentWriteId,F=So(t),ue=Ru(C,d,F);c.currentOutputSnapshotRaw=C,c.currentOutputSnapshotResolved=ue,c.currentWriteId=Uu(t),o.splice(o.indexOf(k),1),i=i.concat(Tu(t.serverSyncTree_,c.path,ue,c.currentWriteId,c.applyLocally)),i=i.concat(Wt(t.serverSyncTree_,k,!0))}else h=!0,u="nodata",i=i.concat(Wt(t.serverSyncTree_,c.currentWriteId,!0))}ut(t.eventQueue_,n,i),i=[],h&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(u==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(u),!1,null))))}Ii(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Nn(s[l]);Ro(t,t.transactionQueueTree_)}function Hu(t,e){let n,s=t.transactionQueueTree_;for(n=B(e);n!==null&&Rn(s)===void 0;)s=wo(s,n),e=te(e),n=B(e);return s}function Vu(t,e){const n=[];return $u(t,e,n),n.sort((s,i)=>s.order-i.order),n}function $u(t,e,n){const s=Rn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);bi(e,i=>{$u(t,i,n)})}function Ii(t,e){const n=Rn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Au(e,n.length>0?n:void 0)}bi(e,s=>{Ii(t,s)})}function ju(t,e){const n=ps(Hu(t,e)),s=wo(t.transactionQueueTree_,e);return Bm(s,i=>{ji(t,i)}),ji(t,s),Pu(s,i=>{ji(t,i)}),n}function ji(t,e){const n=Rn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Wt(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Au(e,void 0):n.length=r+1,ut(t.eventQueue_,ps(e),i);for(let o=0;o<s.length;o++)Nn(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function cy(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Re(`Invalid query segment '${n}' in query '${t}'`)}return e}const oc=function(t,e){const n=ay(t),s=n.namespace;n.domain==="firebase.com"&&at(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&at("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||b_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new za(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Q(n.pathString)}},ay=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let h=t.indexOf("/");h===-1&&(h=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(h,u)),h<u&&(i=ly(t.substring(h,u)));const d=cy(t.substring(Math.min(t.length,u)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const g=e.slice(0,a);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const C=e.indexOf(".");s=e.substring(0,C).toLowerCase(),n=e.substring(C+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class zu{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return W(this._path)?null:tu(this._path)}get ref(){return new dt(this._repo,this._path)}get _queryIdentifier(){const e=$l(this._queryParams),n=Jr(e);return n==="{}"?"default":n}get _queryObject(){return $l(this._queryParams)}isEqual(e){if(e=as(e),!(e instanceof Ao))return!1;const n=this._repo===e._repo,s=no(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+rg(this._path)}}class dt extends Ao{constructor(e,n){super(e,n,new oo,!1)}get parent(){const e=su(this._path);return e===null?null:new dt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class os{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Q(e),s=Js(this.ref,e);return new os(this._node.getChild(n),s,ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new os(i,Js(this.ref,s),ae)))}hasChild(e){const n=new Q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Nr(t,e){return t=as(t),t._checkNotDeleted("ref"),e!==void 0?Js(t._root,e):t._root}function Js(t,e){return t=as(t),B(t._path)===null?jm("child","path",e,!1):Mu("child","path",e,!1),new dt(t._repo,de(t._path,e))}function hy(t){return Fu("remove",t._path),Rr(t,null)}function Rr(t,e){t=as(t),Fu("set",t._path),$m("set",e,t._path,!1);const n=new _i;return ey(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class ko{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Ku("value",this,new os(e.snapshotNode,new dt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zu(this,e,n):null}matches(e){return e instanceof ko?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Po{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zu(this,e,n):null}createEvent(e,n){E(e.childName!=null,"Child events should have a childName.");const s=Js(new dt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Ku(e.type,this,new os(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Po?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function fy(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,a=(h,u)=>{rc(t._repo,t,l),c(h,u)};a.userCallback=n.userCallback,a.context=n.context,n=a}const o=new uy(n,r||void 0),l=e==="value"?new ko(o):new Po(e,o);return ny(t._repo,t,l),()=>rc(t._repo,t,l)}function dy(t,e,n,s){return fy(t,"value",e,n,s)}_m(dt);Em(dt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py="FIREBASE_DATABASE_EMULATOR_HOST",Ar={};let _y=!1;function gy(t,e,n,s){t.repoInfo_=new za(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),s&&(t.authTokenProvider_=s)}function my(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||at("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=oc(r,i),l=o.repoInfo,c,a;typeof process<"u"&&process.env&&(a=process.env[py]),a?(c=!0,r=`http://${a}?ns=${l.namespace}`,o=oc(r,i),l=o.repoInfo):c=!o.repoInfo.secure;const h=i&&c?new un(un.OWNER):new O_(t.name,t.options,e);Km("Invalid Firebase Database URL",o),W(o.path)||at("Database URL must point to the root of a Firebase Database (not including a child path).");const u=vy(l,t,h,new P_(t.name,n));return new Cy(u,t)}function yy(t,e){const n=Ar[e];(!n||n[t.key]!==t)&&at(`Database ${e}(${t.repoInfo_}) has already been deleted.`),sy(t),delete n[t.key]}function vy(t,e,n,s){let i=Ar[e.name];i||(i={},Ar[e.name]=i);let r=i[t.toURLString()];return r&&at("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Qm(t,_y,n,s),i[t.toURLString()]=r,r}class Cy{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Xm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dt(this._repo,j())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yy(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&at("Cannot call "+e+" on a deleted database.")}}function Ey(t=l_(),e){const n=s_(t,"database").getImmediate({identifier:e}),s=Jd("database");return s&&by(n,...s),n}function by(t,e,n,s={}){t=as(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&at("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&at('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new un(un.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:ep(s.mockUserToken,t.app.options.projectId);r=new un(o)}gy(i,e,n,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(t){m_(o_),Us(new Jn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return my(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),cn(Sl,xl,t),cn(Sl,xl,"esm2017")}lt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};lt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};wy();var Iy="firebase",Ty="9.15.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn(Iy,Ty,"app");const Sy={apiKey:"AIzaSyDYbAbripgwbZKFfTCSqXzu116Lde_kwnE",authDomain:"todomvc-app-template-test.firebaseapp.com",databaseURL:"https://todomvc-app-template-test-default-rtdb.firebaseio.com",projectId:"todomvc-app-template-test",storageBucket:"todomvc-app-template-test.appspot.com",messagingSenderId:"492184533263",appId:"1:492184533263:web:d98c399c38d7f0c593667a"},xy=Na(Sy),kr=Ey(xy),lc=Nr(kr,"todos");var dn=(t=>(t[t.UNSORTED=0]="UNSORTED",t[t.ASCENDING=1]="ASCENDING",t[t.DESCENDING=2]="DESCENDING",t))(dn||{});function Ts(t,e){return{checked:!1,message:t,id:e,key:e}}function Ny(t,e,n){switch(n){case dn.ASCENDING:return t.checked===e.checked?0:t.checked?1:-1;case dn.DESCENDING:return t.checked===e.checked?0:t.checked?-1:1;case dn.UNSORTED:return t.id===e.id?0:t.id>e.id?1:-1}}function Ry(t){const e=t.val()&&Object.entries(t.val()).map(([n,s])=>(s.key=parseInt(n),s));return(e==null?void 0:e.filter(n=>n!==void 0))??[]}function Ay(){return[Ts("Welcome to TodoMVC",0),Ts("This is a sample todo",1),Ts("Click on the words to edit a todo",2),Ts("Click on the X to delete a todo",3)]}const qu=Bd("todos",{state:()=>({_displayedTodos:[],_filter:"all",_sort:dn.ASCENDING,maxId:0}),getters:{todos:t=>{if(!t._displayedTodos)return;const e=t._displayedTodos;switch(e.sort((n,s)=>Ny(n,s,t._sort)),t._filter){case"unchecked":return e.filter(n=>!n.checked);case"checked":return e.filter(n=>n.checked);default:return e}},tasksLeft:t=>{var e;return((e=t._displayedTodos)==null?void 0:e.filter(n=>!n.checked).length)??0},filter:t=>t._filter,sort:t=>t._sort},actions:{destroyTodo(t){const e=Nr(kr,"todos/"+t.key);hy(e).then(()=>{}).catch(n=>{console.warn(`Todo ${t.id} could not be saved.`,n)})},clearCompleted(){this._displayedTodos&&(this._displayedTodos=this._displayedTodos.filter(t=>!t.checked),this.saveAllTodos())},loadData(){dy(lc,t=>{this._displayedTodos=Ry(t);const e=this._displayedTodos.reduce((n,s)=>s.id>n?s.id:n,0);this.maxId=e+1})},setFilter(t){this._filter=t},setSort(t){this._sort=t},updateTodo(t){if(!this._displayedTodos)return;const e=this._displayedTodos.findIndex(n=>t.id===n.id);this._displayedTodos[e]=t,this.saveTodo(t)},addTodo(t){var n,s;const e={checked:!1,message:t,id:this.maxId++,key:(((n=this._displayedTodos)==null?void 0:n.reduce((i,r)=>(r.key>i,r.key),0))??-1)+1};(s=this._displayedTodos)==null||s.push(e),this.saveTodo(e)},saveAllTodos(){var t;(t=this._displayedTodos)==null||t.forEach((e,n)=>{e.key=n}),Rr(lc,this._displayedTodos).then(()=>{}).catch(e=>{console.warn("Data could not be saved."+e)})},saveTodo(t){const e=Nr(kr,"todos/"+t.key);Rr(e,t).then(()=>{}).catch(n=>{console.warn(`Todo ${t.key} could not be saved.`,n)})},loadOnboardingTodos(){this._displayedTodos=Ay(),this.saveAllTodos()}}}),ky={class:"background"},Py=ci({__name:"EmptyTodos",setup(t){const e=qu();function n(){e.loadOnboardingTodos()}return(s,i)=>(rt(),ln("div",ky,[re("p",{class:"message",onClick:n},"Load new onboarding Todos?")]))}});const Oo=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Oy=Oo(Py,[["__scopeId","data-v-f0980a39"]]),Dy=t=>(Uc("data-v-064692d8"),t=t(),Wc(),t),My={class:"view"},Fy=Dy(()=>re("input",{class:"edit",value:"Create a TodoMVC template"},null,-1)),Ly=ci({__name:"Todo",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue","destroyTodo"],setup(t,{emit:e}){const n=t,s=Vt(n.modelValue.checked),i=Vt(n.modelValue.message);on(()=>n.modelValue,l=>{l.checked!==s.value&&(s.value=l.checked),l.message!==i.value&&(i.value=l.message)}),on(()=>i.value,l=>{const c=n.modelValue;c.message=l,e("update:modelValue",c)});function r(){const l=n.modelValue;l.checked=n.modelValue.checked,s.value=n.modelValue.checked,e("update:modelValue",l)}function o(){e("destroyTodo")}return(l,c)=>(rt(),ln("li",null,[re("div",My,[Zi(re("input",{"onUpdate:modelValue":[c[0]||(c[0]=a=>n.modelValue.checked=a),r],class:"toggle",title:"click to toggle checked",type:"checkbox"},null,512),[[wd,n.modelValue.checked]]),re("label",null,[Zi(re("input",{"onUpdate:modelValue":c[1]||(c[1]=a=>oe(i)?i.value=a:null),type:"text",class:bn({completed:ce(s)})},null,2),[[ua,ce(i)]])]),re("button",{class:"destroy",title:"delete todo",onClick:o})]),Fy]))}});const By=Oo(Ly,[["__scopeId","data-v-064692d8"]]),Gu=t=>(Uc("data-v-3c6df346"),t=t(),Wc(),t),Uy={class:"todoapp"},Wy=["onSubmit"],Hy=Gu(()=>re("h1",null,"Jared's Todos",-1)),Vy={class:"main"},$y=Gu(()=>re("input",{id:"sort-todos",class:"toggle-all",type:"checkbox"},null,-1)),jy={key:0,class:"todo-list"},Ky={class:"footer"},zy={class:"todo-count"},qy={class:"filters"},Gy=ci({__name:"App",setup(t){const e=qu();e.loadData(),Vt(0);const n=dn,s=Vt(e.sort),i=Vt("");function r(u){e.destroyTodo(u)}function o(){e.clearCompleted()}function l(u){e.setFilter(u)}function c(){s.value=(s.value+1)%3,e.setSort(s.value)}function a(){setTimeout(()=>{e.addTodo(i.value),i.value=""},0)}function h(u){e.updateTodo(u)}return(u,d)=>{const g=By,C=Oy,I=Ud;return rt(),ln("section",Uy,[re("form",{class:"header",onSubmit:xd(a,["prevent"])},[Hy,Zi(re("input",{type:"text","onUpdate:modelValue":d[0]||(d[0]=k=>oe(i)?i.value=k:null),class:"new-todo",placeholder:"What needs to be done?",autofocus:""},null,512),[[ua,ce(i)]])],40,Wy),re("section",Vy,[$y,re("label",{for:"sort-todos",title:"Sort todos",class:bn(["sort-arrow",{"sort-arrow-right":ce(s)===ce(n).UNSORTED,"sort-arrow-up":ce(s)===ce(n).ASCENDING,"sort-arrow-down":ce(s)===ce(n).DESCENDING}]),onClick:c},"Sort todos",2),ce(e).todos?(rt(),ln("ul",jy,[(rt(!0),ln($e,null,Tf(ce(e).todos,k=>(rt(),rr(g,{key:k.id,modelValue:ce(e).todos[ce(e).todos.findIndex(F=>k.id===F.id)],"onUpdate:modelValue":[F=>ce(e).todos[ce(e).todos.findIndex(ue=>k.id===ue.id)]=F,F=>h(k)],onDestroyTodo:F=>r(k)},null,8,["modelValue","onUpdate:modelValue","onDestroyTodo"]))),128)),ce(e).todos.length===0?(rt(),rr(C,{key:0})):il("",!0)])):il("",!0)]),re("footer",Ky,[re("span",zy,[re("strong",null,Ki(ce(e).tasksLeft),1),ra(" item"+Ki(ce(e).tasksLeft===1?"":"s")+" left",1)]),re("ul",qy,[re("li",null,[Ue(I,{type:"button",active:ce(e).filter==="all",label:{displayText:"All",value:"all"},onClick:l},null,8,["active"])]),re("li",null,[Ue(I,{type:"button",active:ce(e).filter==="unchecked",label:{displayText:"Unchecked",value:"unchecked"},onClick:l},null,8,["active"])]),re("li",null,[Ue(I,{type:"button",active:ce(e).filter==="checked",label:{displayText:"Checked",value:"checked"},onClick:l},null,8,["active"])])]),re("button",{type:"button",class:"clear-completed",onClick:o}," Clear completed ")])])}}});const Yy=Oo(Gy,[["__scopeId","data-v-3c6df346"]]),Yu=Ad(Yy),Qy=Od();Yu.use(Qy);Yu.mount("#app");
