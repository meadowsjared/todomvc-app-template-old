(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Pr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Or(t){if(P(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=pe(s)?th(s):Or(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(pe(t))return t;if(ie(t))return t}}const Ju=/;(?![^(]*\))/g,Zu=/:([^]+)/,eh=/\/\*.*?\*\//gs;function th(t){const e={};return t.replace(eh,"").split(Ju).forEach(n=>{if(n){const s=n.split(Zu);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function wn(t){let e="";if(pe(t))e=t;else if(P(t))for(let n=0;n<t.length;n++){const s=wn(t[n]);s&&(e+=s+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const nh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sh=Pr(nh);function cc(t){return!!t||t===""}function ih(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Zs(t[s],e[s]);return n}function Zs(t,e){if(t===e)return!0;let n=Uo(t),s=Uo(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=jn(t),s=jn(e),n||s)return t===e;if(n=P(t),s=P(e),n||s)return n&&s?ih(t,e):!1;if(n=ie(t),s=ie(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Zs(t[o],e[o]))return!1}}return String(t)===String(e)}function ac(t,e){return t.findIndex(n=>Zs(n,e))}const Ki=t=>pe(t)?t:t==null?"":P(t)||ie(t)&&(t.toString===fc||!F(t.toString))?JSON.stringify(t,uc,2):String(t),uc=(t,e)=>e&&e.__v_isRef?uc(t,e.value):on(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:ti(e)?{[`Set(${e.size})`]:[...e.values()]}:ie(e)&&!P(e)&&!dc(e)?String(e):e,se={},rn=[],Ye=()=>{},rh=()=>!1,oh=/^on[^a-z]/,ei=t=>oh.test(t),Dr=t=>t.startsWith("onUpdate:"),be=Object.assign,Mr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lh=Object.prototype.hasOwnProperty,V=(t,e)=>lh.call(t,e),P=Array.isArray,on=t=>ls(t)==="[object Map]",ti=t=>ls(t)==="[object Set]",Uo=t=>ls(t)==="[object Date]",F=t=>typeof t=="function",pe=t=>typeof t=="string",jn=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",hc=t=>ie(t)&&F(t.then)&&F(t.catch),fc=Object.prototype.toString,ls=t=>fc.call(t),ch=t=>ls(t).slice(8,-1),dc=t=>ls(t)==="[object Object]",Fr=t=>pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ss=Pr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ni=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ah=/-(\w)/g,_n=ni(t=>t.replace(ah,(e,n)=>n?n.toUpperCase():"")),uh=/\B([A-Z])/g,Xt=ni(t=>t.replace(uh,"-$1").toLowerCase()),pc=ni(t=>t.charAt(0).toUpperCase()+t.slice(1)),xi=ni(t=>t?`on${pc(t)}`:""),Kn=(t,e)=>!Object.is(t,e),xs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},As=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ks=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Wo;const hh=()=>Wo||(Wo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Pe;class _c{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Pe,!e&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Pe;try{return Pe=this,e()}finally{Pe=n}}}on(){Pe=this}off(){Pe=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function gc(t){return new _c(t)}function fh(t,e=Pe){e&&e.active&&e.effects.push(t)}function dh(){return Pe}function ph(t){Pe&&Pe.cleanups.push(t)}const Lr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},mc=t=>(t.w&It)>0,yc=t=>(t.n&It)>0,_h=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=It},gh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];mc(i)&&!yc(i)?i.delete(t):e[n++]=i,i.w&=~It,i.n&=~It}e.length=n}},zi=new WeakMap;let Mn=0,It=1;const qi=30;let je;const Vt=Symbol(""),Gi=Symbol("");class Br{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,fh(this,s)}run(){if(!this.active)return this.fn();let e=je,n=yt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=je,je=this,yt=!0,It=1<<++Mn,Mn<=qi?_h(this):Ho(this),this.fn()}finally{Mn<=qi&&gh(this),It=1<<--Mn,je=this.parent,yt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){je===this?this.deferStop=!0:this.active&&(Ho(this),this.onStop&&this.onStop(),this.active=!1)}}function Ho(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let yt=!0;const vc=[];function In(){vc.push(yt),yt=!1}function Tn(){const t=vc.pop();yt=t===void 0?!0:t}function Oe(t,e,n){if(yt&&je){let s=zi.get(t);s||zi.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Lr()),Cc(i)}}function Cc(t,e){let n=!1;Mn<=qi?yc(t)||(t.n|=It,n=!mc(t)):n=!t.has(je),n&&(t.add(je),je.deps.push(t))}function at(t,e,n,s,i,r){const o=zi.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&P(t)){const c=ks(s);o.forEach((a,u)=>{(u==="length"||u>=c)&&l.push(a)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":P(t)?Fr(n)&&l.push(o.get("length")):(l.push(o.get(Vt)),on(t)&&l.push(o.get(Gi)));break;case"delete":P(t)||(l.push(o.get(Vt)),on(t)&&l.push(o.get(Gi)));break;case"set":on(t)&&l.push(o.get(Vt));break}if(l.length===1)l[0]&&Yi(l[0]);else{const c=[];for(const a of l)a&&c.push(...a);Yi(Lr(c))}}function Yi(t,e){const n=P(t)?t:[...t];for(const s of n)s.computed&&Vo(s);for(const s of n)s.computed||Vo(s)}function Vo(t,e){(t!==je||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const mh=Pr("__proto__,__v_isRef,__isVue"),Ec=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jn)),yh=Ur(),vh=Ur(!1,!0),Ch=Ur(!0),$o=Eh();function Eh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=$(this);for(let r=0,o=this.length;r<o;r++)Oe(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map($)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){In();const s=$(this)[e].apply(this,n);return Tn(),s}}),t}function Ur(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Lh:Sc:e?Tc:Ic).get(s))return s;const o=P(s);if(!t&&o&&V($o,i))return Reflect.get($o,i,r);const l=Reflect.get(s,i,r);return(jn(i)?Ec.has(i):mh(i))||(t||Oe(s,"get",i),e)?l:oe(l)?o&&Fr(i)?l:l.value:ie(l)?t?xc(l):ii(l):l}}const bh=bc(),wh=bc(!0);function bc(t=!1){return function(n,s,i,r){let o=n[s];if(gn(o)&&oe(o)&&!oe(i))return!1;if(!t&&(!Ps(i)&&!gn(i)&&(o=$(o),i=$(i)),!P(n)&&oe(o)&&!oe(i)))return o.value=i,!0;const l=P(n)&&Fr(s)?Number(s)<n.length:V(n,s),c=Reflect.set(n,s,i,r);return n===$(r)&&(l?Kn(i,o)&&at(n,"set",s,i):at(n,"add",s,i)),c}}function Ih(t,e){const n=V(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&at(t,"delete",e,void 0),s}function Th(t,e){const n=Reflect.has(t,e);return(!jn(e)||!Ec.has(e))&&Oe(t,"has",e),n}function Sh(t){return Oe(t,"iterate",P(t)?"length":Vt),Reflect.ownKeys(t)}const wc={get:yh,set:bh,deleteProperty:Ih,has:Th,ownKeys:Sh},xh={get:Ch,set(t,e){return!0},deleteProperty(t,e){return!0}},Nh=be({},wc,{get:vh,set:wh}),Wr=t=>t,si=t=>Reflect.getPrototypeOf(t);function ms(t,e,n=!1,s=!1){t=t.__v_raw;const i=$(t),r=$(e);n||(e!==r&&Oe(i,"get",e),Oe(i,"get",r));const{has:o}=si(i),l=s?Wr:n?$r:zn;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function ys(t,e=!1){const n=this.__v_raw,s=$(n),i=$(t);return e||(t!==i&&Oe(s,"has",t),Oe(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function vs(t,e=!1){return t=t.__v_raw,!e&&Oe($(t),"iterate",Vt),Reflect.get(t,"size",t)}function jo(t){t=$(t);const e=$(this);return si(e).has.call(e,t)||(e.add(t),at(e,"add",t,t)),this}function Ko(t,e){e=$(e);const n=$(this),{has:s,get:i}=si(n);let r=s.call(n,t);r||(t=$(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Kn(e,o)&&at(n,"set",t,e):at(n,"add",t,e),this}function zo(t){const e=$(this),{has:n,get:s}=si(e);let i=n.call(e,t);i||(t=$(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&at(e,"delete",t,void 0),r}function qo(){const t=$(this),e=t.size!==0,n=t.clear();return e&&at(t,"clear",void 0,void 0),n}function Cs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=$(o),c=e?Wr:t?$r:zn;return!t&&Oe(l,"iterate",Vt),o.forEach((a,u)=>s.call(i,c(a),c(u),r))}}function Es(t,e,n){return function(...s){const i=this.__v_raw,r=$(i),o=on(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?Wr:e?$r:zn;return!e&&Oe(r,"iterate",c?Gi:Vt),{next(){const{value:h,done:d}=a.next();return d?{value:h,done:d}:{value:l?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function _t(t){return function(...e){return t==="delete"?!1:this}}function Rh(){const t={get(r){return ms(this,r)},get size(){return vs(this)},has:ys,add:jo,set:Ko,delete:zo,clear:qo,forEach:Cs(!1,!1)},e={get(r){return ms(this,r,!1,!0)},get size(){return vs(this)},has:ys,add:jo,set:Ko,delete:zo,clear:qo,forEach:Cs(!1,!0)},n={get(r){return ms(this,r,!0)},get size(){return vs(this,!0)},has(r){return ys.call(this,r,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:Cs(!0,!1)},s={get(r){return ms(this,r,!0,!0)},get size(){return vs(this,!0)},has(r){return ys.call(this,r,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:Cs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Es(r,!1,!1),n[r]=Es(r,!0,!1),e[r]=Es(r,!1,!0),s[r]=Es(r,!0,!0)}),[t,n,e,s]}const[Ah,kh,Ph,Oh]=Rh();function Hr(t,e){const n=e?t?Oh:Ph:t?kh:Ah;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(V(n,i)&&i in s?n:s,i,r)}const Dh={get:Hr(!1,!1)},Mh={get:Hr(!1,!0)},Fh={get:Hr(!0,!1)},Ic=new WeakMap,Tc=new WeakMap,Sc=new WeakMap,Lh=new WeakMap;function Bh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uh(t){return t.__v_skip||!Object.isExtensible(t)?0:Bh(ch(t))}function ii(t){return gn(t)?t:Vr(t,!1,wc,Dh,Ic)}function Wh(t){return Vr(t,!1,Nh,Mh,Tc)}function xc(t){return Vr(t,!0,xh,Fh,Sc)}function Vr(t,e,n,s,i){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Uh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function vt(t){return gn(t)?vt(t.__v_raw):!!(t&&t.__v_isReactive)}function gn(t){return!!(t&&t.__v_isReadonly)}function Ps(t){return!!(t&&t.__v_isShallow)}function Nc(t){return vt(t)||gn(t)}function $(t){const e=t&&t.__v_raw;return e?$(e):t}function mn(t){return As(t,"__v_skip",!0),t}const zn=t=>ie(t)?ii(t):t,$r=t=>ie(t)?xc(t):t;function Rc(t){yt&&je&&(t=$(t),Cc(t.dep||(t.dep=Lr())))}function Ac(t,e){t=$(t),t.dep&&Yi(t.dep)}function oe(t){return!!(t&&t.__v_isRef===!0)}function $t(t){return Hh(t,!1)}function Hh(t,e){return oe(t)?t:new Vh(t,e)}class Vh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:$(e),this._value=n?e:zn(e)}get value(){return Rc(this),this._value}set value(e){const n=this.__v_isShallow||Ps(e)||gn(e);e=n?e:$(e),Kn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:zn(e),Ac(this))}}function ce(t){return oe(t)?t.value:t}const $h={get:(t,e,n)=>ce(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return oe(i)&&!oe(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function kc(t){return vt(t)?t:new Proxy(t,$h)}function jh(t){const e=P(t)?new Array(t.length):{};for(const n in t)e[n]=zh(t,n);return e}class Kh{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function zh(t,e,n){const s=t[e];return oe(s)?s:new Kh(t,e,n)}var Pc;class qh{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Pc]=!1,this._dirty=!0,this.effect=new Br(e,()=>{this._dirty||(this._dirty=!0,Ac(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=$(this);return Rc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Pc="__v_isReadonly";function Gh(t,e,n=!1){let s,i;const r=F(t);return r?(s=t,i=Ye):(s=t.get,i=t.set),new qh(s,i,r||!i,n)}function Ct(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){ri(r,e,n)}return i}function Be(t,e,n,s){if(F(t)){const r=Ct(t,e,n,s);return r&&hc(r)&&r.catch(o=>{ri(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Be(t[r],e,n,s));return i}function ri(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const a=r.ec;if(a){for(let u=0;u<a.length;u++)if(a[u](t,o,l)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Ct(c,null,10,[t,o,l]);return}}Yh(t,n,i,s)}function Yh(t,e,n,s=!0){console.error(t)}let qn=!1,Qi=!1;const Ee=[];let nt=0;const ln=[];let it=null,Mt=0;const Oc=Promise.resolve();let jr=null;function Dc(t){const e=jr||Oc;return t?e.then(this?t.bind(this):t):e}function Qh(t){let e=nt+1,n=Ee.length;for(;e<n;){const s=e+n>>>1;Gn(Ee[s])<t?e=s+1:n=s}return e}function Kr(t){(!Ee.length||!Ee.includes(t,qn&&t.allowRecurse?nt+1:nt))&&(t.id==null?Ee.push(t):Ee.splice(Qh(t.id),0,t),Mc())}function Mc(){!qn&&!Qi&&(Qi=!0,jr=Oc.then(Lc))}function Xh(t){const e=Ee.indexOf(t);e>nt&&Ee.splice(e,1)}function Jh(t){P(t)?ln.push(...t):(!it||!it.includes(t,t.allowRecurse?Mt+1:Mt))&&ln.push(t),Mc()}function Go(t,e=qn?nt+1:0){for(;e<Ee.length;e++){const n=Ee[e];n&&n.pre&&(Ee.splice(e,1),e--,n())}}function Fc(t){if(ln.length){const e=[...new Set(ln)];if(ln.length=0,it){it.push(...e);return}for(it=e,it.sort((n,s)=>Gn(n)-Gn(s)),Mt=0;Mt<it.length;Mt++)it[Mt]();it=null,Mt=0}}const Gn=t=>t.id==null?1/0:t.id,Zh=(t,e)=>{const n=Gn(t)-Gn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Lc(t){Qi=!1,qn=!0,Ee.sort(Zh);const e=Ye;try{for(nt=0;nt<Ee.length;nt++){const n=Ee[nt];n&&n.active!==!1&&Ct(n,null,14)}}finally{nt=0,Ee.length=0,Fc(),qn=!1,jr=null,(Ee.length||ln.length)&&Lc()}}function ef(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||se;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=s[u]||se;d&&(i=n.map(g=>pe(g)?g.trim():g)),h&&(i=n.map(ks))}let l,c=s[l=xi(e)]||s[l=xi(_n(e))];!c&&r&&(c=s[l=xi(Xt(e))]),c&&Be(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Be(a,t,6,i)}}function Bc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!F(t)){const c=a=>{const u=Bc(a,e,!0);u&&(l=!0,be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(ie(t)&&s.set(t,null),null):(P(r)?r.forEach(c=>o[c]=null):be(o,r),ie(t)&&s.set(t,o),o)}function oi(t,e){return!t||!ei(e)?!1:(e=e.slice(2).replace(/Once$/,""),V(t,e[0].toLowerCase()+e.slice(1))||V(t,Xt(e))||V(t,e))}let Le=null,li=null;function Os(t){const e=Le;return Le=t,li=t&&t.type.__scopeId||null,e}function Uc(t){li=t}function Wc(){li=null}function tf(t,e=Le,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&sl(-1);const r=Os(e);let o;try{o=t(...i)}finally{Os(r),s._d&&sl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ni(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:c,emit:a,render:u,renderCache:h,data:d,setupState:g,ctx:C,inheritAttrs:E}=t;let O,U;const he=Os(t);try{if(n.shapeFlag&4){const X=i||s;O=tt(u.call(X,X,h,r,g,d,C)),U=c}else{const X=e;O=tt(X.length>1?X(r,{attrs:c,slots:l,emit:a}):X(r,null)),U=e.props?c:nf(c)}}catch(X){Bn.length=0,ri(X,t,1),O=Ue(Qe)}let D=O;if(U&&E!==!1){const X=Object.keys(U),{shapeFlag:G}=D;X.length&&G&7&&(o&&X.some(Dr)&&(U=sf(U,o)),D=Tt(D,U))}return n.dirs&&(D=Tt(D),D.dirs=D.dirs?D.dirs.concat(n.dirs):n.dirs),n.transition&&(D.transition=n.transition),O=D,Os(he),O}const nf=t=>{let e;for(const n in t)(n==="class"||n==="style"||ei(n))&&((e||(e={}))[n]=t[n]);return e},sf=(t,e)=>{const n={};for(const s in t)(!Dr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function rf(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Yo(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==s[d]&&!oi(a,d))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Yo(s,o,a):!0:!!o;return!1}function Yo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!oi(n,r))return!0}return!1}function of({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const lf=t=>t.__isSuspense;function cf(t,e){e&&e.pendingBranch?P(t)?e.effects.push(...t):e.effects.push(t):Jh(t)}function af(t,e){if(ve){let n=ve.provides;const s=ve.parent&&ve.parent.provides;s===n&&(n=ve.provides=Object.create(s)),n[t]=e}}function Fn(t,e,n=!1){const s=ve||Le;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&F(e)?e.call(s.proxy):e}}const bs={};function cn(t,e,n){return Hc(t,e,n)}function Hc(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=se){const l=ve;let c,a=!1,u=!1;if(oe(t)?(c=()=>t.value,a=Ps(t)):vt(t)?(c=()=>t,s=!0):P(t)?(u=!0,a=t.some(D=>vt(D)||Ps(D)),c=()=>t.map(D=>{if(oe(D))return D.value;if(vt(D))return Ut(D);if(F(D))return Ct(D,l,2)})):F(t)?e?c=()=>Ct(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Be(t,l,3,[d])}:c=Ye,e&&s){const D=c;c=()=>Ut(D())}let h,d=D=>{h=U.onStop=()=>{Ct(D,l,4)}},g;if(Qn)if(d=Ye,e?n&&Be(e,l,3,[c(),u?[]:void 0,d]):c(),i==="sync"){const D=sd();g=D.__watcherHandles||(D.__watcherHandles=[])}else return Ye;let C=u?new Array(t.length).fill(bs):bs;const E=()=>{if(U.active)if(e){const D=U.run();(s||a||(u?D.some((X,G)=>Kn(X,C[G])):Kn(D,C)))&&(h&&h(),Be(e,l,3,[D,C===bs?void 0:u&&C[0]===bs?[]:C,d]),C=D)}else U.run()};E.allowRecurse=!!e;let O;i==="sync"?O=E:i==="post"?O=()=>Se(E,l&&l.suspense):(E.pre=!0,l&&(E.id=l.uid),O=()=>Kr(E));const U=new Br(c,O);e?n?E():C=U.run():i==="post"?Se(U.run.bind(U),l&&l.suspense):U.run();const he=()=>{U.stop(),l&&l.scope&&Mr(l.scope.effects,U)};return g&&g.push(he),he}function uf(t,e,n){const s=this.proxy,i=pe(t)?t.includes(".")?Vc(s,t):()=>s[t]:t.bind(s,s);let r;F(e)?r=e:(r=e.handler,n=e);const o=ve;yn(this);const l=Hc(i,r.bind(s),n);return o?yn(o):jt(),l}function Vc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ut(t,e){if(!ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),oe(t))Ut(t.value,e);else if(P(t))for(let n=0;n<t.length;n++)Ut(t[n],e);else if(ti(t)||on(t))t.forEach(n=>{Ut(n,e)});else if(dc(t))for(const n in t)Ut(t[n],e);return t}function hf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zc(()=>{t.isMounted=!0}),qc(()=>{t.isUnmounting=!0}),t}const Fe=[Function,Array],ff={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},setup(t,{slots:e}){const n=oa(),s=hf();let i;return()=>{const r=e.default&&jc(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const E of r)if(E.type!==Qe){o=E;break}}const l=$(t),{mode:c}=l;if(s.isLeaving)return Ri(o);const a=Qo(o);if(!a)return Ri(o);const u=Xi(a,l,s,n);Ji(a,u);const h=n.subTree,d=h&&Qo(h);let g=!1;const{getTransitionKey:C}=a.type;if(C){const E=C();i===void 0?i=E:E!==i&&(i=E,g=!0)}if(d&&d.type!==Qe&&(!Ft(a,d)||g)){const E=Xi(d,l,s,n);if(Ji(d,E),c==="out-in")return s.isLeaving=!0,E.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Ri(o);c==="in-out"&&a.type!==Qe&&(E.delayLeave=(O,U,he)=>{const D=$c(s,d);D[String(d.key)]=d,O._leaveCb=()=>{U(),O._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=he})}return o}}},df=ff;function $c(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Xi(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:a,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:g,onLeaveCancelled:C,onBeforeAppear:E,onAppear:O,onAfterAppear:U,onAppearCancelled:he}=e,D=String(t.key),X=$c(n,t),G=(x,Y)=>{x&&Be(x,s,9,Y)},De=(x,Y)=>{const z=Y[1];G(x,Y),P(x)?x.every(fe=>fe.length<=1)&&z():x.length<=1&&z()},K={mode:r,persisted:o,beforeEnter(x){let Y=l;if(!n.isMounted)if(i)Y=E||l;else return;x._leaveCb&&x._leaveCb(!0);const z=X[D];z&&Ft(t,z)&&z.el._leaveCb&&z.el._leaveCb(),G(Y,[x])},enter(x){let Y=c,z=a,fe=u;if(!n.isMounted)if(i)Y=O||c,z=U||a,fe=he||u;else return;let Me=!1;const We=x._enterCb=He=>{Me||(Me=!0,He?G(fe,[x]):G(z,[x]),K.delayedLeave&&K.delayedLeave(),x._enterCb=void 0)};Y?De(Y,[x,We]):We()},leave(x,Y){const z=String(t.key);if(x._enterCb&&x._enterCb(!0),n.isUnmounting)return Y();G(h,[x]);let fe=!1;const Me=x._leaveCb=We=>{fe||(fe=!0,Y(),We?G(C,[x]):G(g,[x]),x._leaveCb=void 0,X[z]===t&&delete X[z])};X[z]=t,d?De(d,[x,Me]):Me()},clone(x){return Xi(x,e,n,s)}};return K}function Ri(t){if(ai(t))return t=Tt(t),t.children=null,t}function Qo(t){return ai(t)?t.children?t.children[0]:void 0:t}function Ji(t,e){t.shapeFlag&6&&t.component?Ji(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function jc(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===$e?(o.patchFlag&128&&i++,s=s.concat(jc(o.children,e,l))):(e||o.type!==Qe)&&s.push(l!=null?Tt(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function ci(t){return F(t)?{setup:t,name:t.name}:t}const Ns=t=>!!t.type.__asyncLoader,ai=t=>t.type.__isKeepAlive;function pf(t,e){Kc(t,"a",e)}function _f(t,e){Kc(t,"da",e)}function Kc(t,e,n=ve){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ui(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ai(i.parent.vnode)&&gf(s,e,n,i),i=i.parent}}function gf(t,e,n,s){const i=ui(e,t,s,!0);Gc(()=>{Mr(s[e],i)},n)}function ui(t,e,n=ve,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;In(),yn(n);const l=Be(e,n,t,o);return jt(),Tn(),l});return s?i.unshift(r):i.push(r),r}}const ft=t=>(e,n=ve)=>(!Qn||t==="sp")&&ui(t,(...s)=>e(...s),n),mf=ft("bm"),zc=ft("m"),yf=ft("bu"),vf=ft("u"),qc=ft("bum"),Gc=ft("um"),Cf=ft("sp"),Ef=ft("rtg"),bf=ft("rtc");function wf(t,e=ve){ui("ec",t,e)}function Zi(t,e){const n=Le;if(n===null)return t;const s=di(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,c,a=se]=e[r];o&&(F(o)&&(o={mounted:o,updated:o}),o.deep&&Ut(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:c,modifiers:a}))}return t}function At(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(In(),Be(c,n,8,[t.el,l,t,e]),Tn())}}const If=Symbol();function Tf(t,e,n,s){let i;const r=n&&n[s];if(P(t)||pe(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ie(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const a=o[l];i[l]=e(t[a],a,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const er=t=>t?la(t)?di(t)||t.proxy:er(t.parent):null,Ln=be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>er(t.parent),$root:t=>er(t.root),$emit:t=>t.emit,$options:t=>zr(t),$forceUpdate:t=>t.f||(t.f=()=>Kr(t.update)),$nextTick:t=>t.n||(t.n=Dc.bind(t.proxy)),$watch:t=>uf.bind(t)}),Ai=(t,e)=>t!==se&&!t.__isScriptSetup&&V(t,e),Sf={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ai(s,e))return o[e]=1,s[e];if(i!==se&&V(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&V(a,e))return o[e]=3,r[e];if(n!==se&&V(n,e))return o[e]=4,n[e];tr&&(o[e]=0)}}const u=Ln[e];let h,d;if(u)return e==="$attrs"&&Oe(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==se&&V(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,V(d,e))return d[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ai(i,e)?(i[e]=n,!0):s!==se&&V(s,e)?(s[e]=n,!0):V(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==se&&V(t,o)||Ai(e,o)||(l=r[0])&&V(l,o)||V(s,o)||V(Ln,o)||V(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:V(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let tr=!0;function xf(t){const e=zr(t),n=t.proxy,s=t.ctx;tr=!1,e.beforeCreate&&Xo(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:C,activated:E,deactivated:O,beforeDestroy:U,beforeUnmount:he,destroyed:D,unmounted:X,render:G,renderTracked:De,renderTriggered:K,errorCaptured:x,serverPrefetch:Y,expose:z,inheritAttrs:fe,components:Me,directives:We,filters:He}=e;if(a&&Nf(a,s,null,t.appContext.config.unwrapInjectedRef),o)for(const le in o){const J=o[le];F(J)&&(s[le]=J.bind(n))}if(i){const le=i.call(n,n);ie(le)&&(t.data=ii(le))}if(tr=!0,r)for(const le in r){const J=r[le],Nt=F(J)?J.bind(n,n):F(J.get)?J.get.bind(n,n):Ye,_s=!F(J)&&F(J.set)?J.set.bind(n):Ye,Rt=aa({get:Nt,set:_s});Object.defineProperty(s,le,{enumerable:!0,configurable:!0,get:()=>Rt.value,set:Je=>Rt.value=Je})}if(l)for(const le in l)Yc(l[le],s,n,le);if(c){const le=F(c)?c.call(n):c;Reflect.ownKeys(le).forEach(J=>{af(J,le[J])})}u&&Xo(u,t,"c");function Ie(le,J){P(J)?J.forEach(Nt=>le(Nt.bind(n))):J&&le(J.bind(n))}if(Ie(mf,h),Ie(zc,d),Ie(yf,g),Ie(vf,C),Ie(pf,E),Ie(_f,O),Ie(wf,x),Ie(bf,De),Ie(Ef,K),Ie(qc,he),Ie(Gc,X),Ie(Cf,Y),P(z))if(z.length){const le=t.exposed||(t.exposed={});z.forEach(J=>{Object.defineProperty(le,J,{get:()=>n[J],set:Nt=>n[J]=Nt})})}else t.exposed||(t.exposed={});G&&t.render===Ye&&(t.render=G),fe!=null&&(t.inheritAttrs=fe),Me&&(t.components=Me),We&&(t.directives=We)}function Nf(t,e,n=Ye,s=!1){P(t)&&(t=nr(t));for(const i in t){const r=t[i];let o;ie(r)?"default"in r?o=Fn(r.from||i,r.default,!0):o=Fn(r.from||i):o=Fn(r),oe(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Xo(t,e,n){Be(P(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yc(t,e,n,s){const i=s.includes(".")?Vc(n,s):()=>n[s];if(pe(t)){const r=e[t];F(r)&&cn(i,r)}else if(F(t))cn(i,t.bind(n));else if(ie(t))if(P(t))t.forEach(r=>Yc(r,e,n,s));else{const r=F(t.handler)?t.handler.bind(n):e[t.handler];F(r)&&cn(i,r,t)}}function zr(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>Ds(c,a,o,!0)),Ds(c,e,o)),ie(e)&&r.set(e,c),c}function Ds(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ds(t,r,n,!0),i&&i.forEach(o=>Ds(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Rf[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Rf={data:Jo,props:Pt,emits:Pt,methods:Pt,computed:Pt,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:Pt,directives:Pt,watch:kf,provide:Jo,inject:Af};function Jo(t,e){return e?t?function(){return be(F(t)?t.call(this,this):t,F(e)?e.call(this,this):e)}:e:t}function Af(t,e){return Pt(nr(t),nr(e))}function nr(t){if(P(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Te(t,e){return t?[...new Set([].concat(t,e))]:e}function Pt(t,e){return t?be(be(Object.create(null),t),e):e}function kf(t,e){if(!t)return e;if(!e)return t;const n=be(Object.create(null),t);for(const s in e)n[s]=Te(t[s],e[s]);return n}function Pf(t,e,n,s=!1){const i={},r={};As(r,fi,1),t.propsDefaults=Object.create(null),Qc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Wh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Of(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=$(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(oi(t.emitsOptions,d))continue;const g=e[d];if(c)if(V(r,d))g!==r[d]&&(r[d]=g,a=!0);else{const C=_n(d);i[C]=sr(c,l,C,g,t,!1)}else g!==r[d]&&(r[d]=g,a=!0)}}}else{Qc(t,e,i,r)&&(a=!0);let u;for(const h in l)(!e||!V(e,h)&&((u=Xt(h))===h||!V(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=sr(c,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!V(e,h))&&(delete r[h],a=!0)}a&&at(t,"set","$attrs")}function Qc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ss(c))continue;const a=e[c];let u;i&&V(i,u=_n(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:oi(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=$(n),a=l||se;for(let u=0;u<r.length;u++){const h=r[u];n[h]=sr(i,c,h,a[h],t,!V(a,h))}}return o}function sr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=V(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&F(c)){const{propsDefaults:a}=i;n in a?s=a[n]:(yn(i),s=a[n]=c.call(null,e),jt())}else s=c}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Xt(n))&&(s=!0))}return s}function Xc(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!F(t)){const u=h=>{c=!0;const[d,g]=Xc(h,e,!0);be(o,d),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return ie(t)&&s.set(t,rn),rn;if(P(r))for(let u=0;u<r.length;u++){const h=_n(r[u]);Zo(h)&&(o[h]=se)}else if(r)for(const u in r){const h=_n(u);if(Zo(h)){const d=r[u],g=o[h]=P(d)||F(d)?{type:d}:Object.assign({},d);if(g){const C=nl(Boolean,g.type),E=nl(String,g.type);g[0]=C>-1,g[1]=E<0||C<E,(C>-1||V(g,"default"))&&l.push(h)}}}const a=[o,l];return ie(t)&&s.set(t,a),a}function Zo(t){return t[0]!=="$"}function el(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function tl(t,e){return el(t)===el(e)}function nl(t,e){return P(e)?e.findIndex(n=>tl(n,t)):F(e)&&tl(e,t)?0:-1}const Jc=t=>t[0]==="_"||t==="$stable",qr=t=>P(t)?t.map(tt):[tt(t)],Df=(t,e,n)=>{if(e._n)return e;const s=tf((...i)=>qr(e(...i)),n);return s._c=!1,s},Zc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Jc(i))continue;const r=t[i];if(F(r))e[i]=Df(i,r,s);else if(r!=null){const o=qr(r);e[i]=()=>o}}},ea=(t,e)=>{const n=qr(e);t.slots.default=()=>n},Mf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=$(e),As(e,"_",n)):Zc(e,t.slots={})}else t.slots={},e&&ea(t,e);As(t.slots,fi,1)},Ff=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=se;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(be(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Zc(e,i)),o=e}else e&&(ea(t,e),o={default:1});if(r)for(const l in i)!Jc(l)&&!(l in o)&&delete i[l]};function ta(){return{app:null,config:{isNativeTag:rh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lf=0;function Bf(t,e){return function(s,i=null){F(s)||(s=Object.assign({},s)),i!=null&&!ie(i)&&(i=null);const r=ta(),o=new Set;let l=!1;const c=r.app={_uid:Lf++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:id,get config(){return r.config},set config(a){},use(a,...u){return o.has(a)||(a&&F(a.install)?(o.add(a),a.install(c,...u)):F(a)&&(o.add(a),a(c,...u))),c},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),c},component(a,u){return u?(r.components[a]=u,c):r.components[a]},directive(a,u){return u?(r.directives[a]=u,c):r.directives[a]},mount(a,u,h){if(!l){const d=Ue(s,i);return d.appContext=r,u&&e?e(d,a):t(d,a,h),l=!0,c._container=a,a.__vue_app__=c,di(d.component)||d.component.proxy}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(a,u){return r.provides[a]=u,c}};return c}}function ir(t,e,n,s,i=!1){if(P(t)){t.forEach((d,g)=>ir(d,e&&(P(e)?e[g]:e),n,s,i));return}if(Ns(s)&&!i)return;const r=s.shapeFlag&4?di(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===se?l.refs={}:l.refs,h=l.setupState;if(a!=null&&a!==c&&(pe(a)?(u[a]=null,V(h,a)&&(h[a]=null)):oe(a)&&(a.value=null)),F(c))Ct(c,l,12,[o,u]);else{const d=pe(c),g=oe(c);if(d||g){const C=()=>{if(t.f){const E=d?V(h,c)?h[c]:u[c]:c.value;i?P(E)&&Mr(E,r):P(E)?E.includes(r)||E.push(r):d?(u[c]=[r],V(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,V(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(C.id=-1,Se(C,n)):C()}}}const Se=cf;function Uf(t){return Wf(t)}function Wf(t,e){const n=hh();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=Ye,insertStaticContent:C}=t,E=(f,p,_,y=null,m=null,I=null,S=!1,w=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!Ft(f,p)&&(y=gs(f),Je(f,m,I,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:v,ref:R,shapeFlag:N}=p;switch(v){case hi:O(f,p,_,y);break;case Qe:U(f,p,_,y);break;case ki:f==null&&he(p,_,y,S);break;case $e:Me(f,p,_,y,m,I,S,w,T);break;default:N&1?G(f,p,_,y,m,I,S,w,T):N&6?We(f,p,_,y,m,I,S,w,T):(N&64||N&128)&&v.process(f,p,_,y,m,I,S,w,T,Zt)}R!=null&&m&&ir(R,f&&f.ref,I,p||f,!p)},O=(f,p,_,y)=>{if(f==null)s(p.el=l(p.children),_,y);else{const m=p.el=f.el;p.children!==f.children&&a(m,p.children)}},U=(f,p,_,y)=>{f==null?s(p.el=c(p.children||""),_,y):p.el=f.el},he=(f,p,_,y)=>{[f.el,f.anchor]=C(f.children,p,_,y,f.el,f.anchor)},D=({el:f,anchor:p},_,y)=>{let m;for(;f&&f!==p;)m=d(f),s(f,_,y),f=m;s(p,_,y)},X=({el:f,anchor:p})=>{let _;for(;f&&f!==p;)_=d(f),i(f),f=_;i(p)},G=(f,p,_,y,m,I,S,w,T)=>{S=S||p.type==="svg",f==null?De(p,_,y,m,I,S,w,T):Y(f,p,m,I,S,w,T)},De=(f,p,_,y,m,I,S,w)=>{let T,v;const{type:R,props:N,shapeFlag:A,transition:M,dirs:H}=f;if(T=f.el=o(f.type,I,N&&N.is,N),A&8?u(T,f.children):A&16&&x(f.children,T,null,y,m,I&&R!=="foreignObject",S,w),H&&At(f,null,y,"created"),N){for(const q in N)q!=="value"&&!Ss(q)&&r(T,q,null,N[q],I,f.children,y,m,st);"value"in N&&r(T,"value",null,N.value),(v=N.onVnodeBeforeMount)&&et(v,y,f)}K(T,f,f.scopeId,S,y),H&&At(f,null,y,"beforeMount");const Z=(!m||m&&!m.pendingBranch)&&M&&!M.persisted;Z&&M.beforeEnter(T),s(T,p,_),((v=N&&N.onVnodeMounted)||Z||H)&&Se(()=>{v&&et(v,y,f),Z&&M.enter(T),H&&At(f,null,y,"mounted")},m)},K=(f,p,_,y,m)=>{if(_&&g(f,_),y)for(let I=0;I<y.length;I++)g(f,y[I]);if(m){let I=m.subTree;if(p===I){const S=m.vnode;K(f,S,S.scopeId,S.slotScopeIds,m.parent)}}},x=(f,p,_,y,m,I,S,w,T=0)=>{for(let v=T;v<f.length;v++){const R=f[v]=w?gt(f[v]):tt(f[v]);E(null,R,p,_,y,m,I,S,w)}},Y=(f,p,_,y,m,I,S)=>{const w=p.el=f.el;let{patchFlag:T,dynamicChildren:v,dirs:R}=p;T|=f.patchFlag&16;const N=f.props||se,A=p.props||se;let M;_&&kt(_,!1),(M=A.onVnodeBeforeUpdate)&&et(M,_,p,f),R&&At(p,f,_,"beforeUpdate"),_&&kt(_,!0);const H=m&&p.type!=="foreignObject";if(v?z(f.dynamicChildren,v,w,_,y,H,I):S||J(f,p,w,null,_,y,H,I,!1),T>0){if(T&16)fe(w,p,N,A,_,y,m);else if(T&2&&N.class!==A.class&&r(w,"class",null,A.class,m),T&4&&r(w,"style",N.style,A.style,m),T&8){const Z=p.dynamicProps;for(let q=0;q<Z.length;q++){const ue=Z[q],Ve=N[ue],en=A[ue];(en!==Ve||ue==="value")&&r(w,ue,Ve,en,m,f.children,_,y,st)}}T&1&&f.children!==p.children&&u(w,p.children)}else!S&&v==null&&fe(w,p,N,A,_,y,m);((M=A.onVnodeUpdated)||R)&&Se(()=>{M&&et(M,_,p,f),R&&At(p,f,_,"updated")},y)},z=(f,p,_,y,m,I,S)=>{for(let w=0;w<p.length;w++){const T=f[w],v=p[w],R=T.el&&(T.type===$e||!Ft(T,v)||T.shapeFlag&70)?h(T.el):_;E(T,v,R,null,y,m,I,S,!0)}},fe=(f,p,_,y,m,I,S)=>{if(_!==y){if(_!==se)for(const w in _)!Ss(w)&&!(w in y)&&r(f,w,_[w],null,S,p.children,m,I,st);for(const w in y){if(Ss(w))continue;const T=y[w],v=_[w];T!==v&&w!=="value"&&r(f,w,v,T,S,p.children,m,I,st)}"value"in y&&r(f,"value",_.value,y.value)}},Me=(f,p,_,y,m,I,S,w,T)=>{const v=p.el=f?f.el:l(""),R=p.anchor=f?f.anchor:l("");let{patchFlag:N,dynamicChildren:A,slotScopeIds:M}=p;M&&(w=w?w.concat(M):M),f==null?(s(v,_,y),s(R,_,y),x(p.children,_,R,m,I,S,w,T)):N>0&&N&64&&A&&f.dynamicChildren?(z(f.dynamicChildren,A,_,m,I,S,w),(p.key!=null||m&&p===m.subTree)&&na(f,p,!0)):J(f,p,_,R,m,I,S,w,T)},We=(f,p,_,y,m,I,S,w,T)=>{p.slotScopeIds=w,f==null?p.shapeFlag&512?m.ctx.activate(p,_,y,S,T):He(p,_,y,m,I,S,T):we(f,p,T)},He=(f,p,_,y,m,I,S)=>{const w=f.component=Qf(f,y,m);if(ai(f)&&(w.ctx.renderer=Zt),Xf(w),w.asyncDep){if(m&&m.registerDep(w,Ie),!f.el){const T=w.subTree=Ue(Qe);U(null,T,p,_)}return}Ie(w,f,p,_,m,I,S)},we=(f,p,_)=>{const y=p.component=f.component;if(rf(f,p,_))if(y.asyncDep&&!y.asyncResolved){le(y,p,_);return}else y.next=p,Xh(y.update),y.update();else p.el=f.el,y.vnode=p},Ie=(f,p,_,y,m,I,S)=>{const w=()=>{if(f.isMounted){let{next:R,bu:N,u:A,parent:M,vnode:H}=f,Z=R,q;kt(f,!1),R?(R.el=H.el,le(f,R,S)):R=H,N&&xs(N),(q=R.props&&R.props.onVnodeBeforeUpdate)&&et(q,M,R,H),kt(f,!0);const ue=Ni(f),Ve=f.subTree;f.subTree=ue,E(Ve,ue,h(Ve.el),gs(Ve),f,m,I),R.el=ue.el,Z===null&&of(f,ue.el),A&&Se(A,m),(q=R.props&&R.props.onVnodeUpdated)&&Se(()=>et(q,M,R,H),m)}else{let R;const{el:N,props:A}=p,{bm:M,m:H,parent:Z}=f,q=Ns(p);if(kt(f,!1),M&&xs(M),!q&&(R=A&&A.onVnodeBeforeMount)&&et(R,Z,p),kt(f,!0),N&&Si){const ue=()=>{f.subTree=Ni(f),Si(N,f.subTree,f,m,null)};q?p.type.__asyncLoader().then(()=>!f.isUnmounted&&ue()):ue()}else{const ue=f.subTree=Ni(f);E(null,ue,_,y,f,m,I),p.el=ue.el}if(H&&Se(H,m),!q&&(R=A&&A.onVnodeMounted)){const ue=p;Se(()=>et(R,Z,ue),m)}(p.shapeFlag&256||Z&&Ns(Z.vnode)&&Z.vnode.shapeFlag&256)&&f.a&&Se(f.a,m),f.isMounted=!0,p=_=y=null}},T=f.effect=new Br(w,()=>Kr(v),f.scope),v=f.update=()=>T.run();v.id=f.uid,kt(f,!0),v()},le=(f,p,_)=>{p.component=f;const y=f.vnode.props;f.vnode=p,f.next=null,Of(f,p.props,y,_),Ff(f,p.children,_),In(),Go(),Tn()},J=(f,p,_,y,m,I,S,w,T=!1)=>{const v=f&&f.children,R=f?f.shapeFlag:0,N=p.children,{patchFlag:A,shapeFlag:M}=p;if(A>0){if(A&128){_s(v,N,_,y,m,I,S,w,T);return}else if(A&256){Nt(v,N,_,y,m,I,S,w,T);return}}M&8?(R&16&&st(v,m,I),N!==v&&u(_,N)):R&16?M&16?_s(v,N,_,y,m,I,S,w,T):st(v,m,I,!0):(R&8&&u(_,""),M&16&&x(N,_,y,m,I,S,w,T))},Nt=(f,p,_,y,m,I,S,w,T)=>{f=f||rn,p=p||rn;const v=f.length,R=p.length,N=Math.min(v,R);let A;for(A=0;A<N;A++){const M=p[A]=T?gt(p[A]):tt(p[A]);E(f[A],M,_,null,m,I,S,w,T)}v>R?st(f,m,I,!0,!1,N):x(p,_,y,m,I,S,w,T,N)},_s=(f,p,_,y,m,I,S,w,T)=>{let v=0;const R=p.length;let N=f.length-1,A=R-1;for(;v<=N&&v<=A;){const M=f[v],H=p[v]=T?gt(p[v]):tt(p[v]);if(Ft(M,H))E(M,H,_,null,m,I,S,w,T);else break;v++}for(;v<=N&&v<=A;){const M=f[N],H=p[A]=T?gt(p[A]):tt(p[A]);if(Ft(M,H))E(M,H,_,null,m,I,S,w,T);else break;N--,A--}if(v>N){if(v<=A){const M=A+1,H=M<R?p[M].el:y;for(;v<=A;)E(null,p[v]=T?gt(p[v]):tt(p[v]),_,H,m,I,S,w,T),v++}}else if(v>A)for(;v<=N;)Je(f[v],m,I,!0),v++;else{const M=v,H=v,Z=new Map;for(v=H;v<=A;v++){const ke=p[v]=T?gt(p[v]):tt(p[v]);ke.key!=null&&Z.set(ke.key,v)}let q,ue=0;const Ve=A-H+1;let en=!1,Fo=0;const An=new Array(Ve);for(v=0;v<Ve;v++)An[v]=0;for(v=M;v<=N;v++){const ke=f[v];if(ue>=Ve){Je(ke,m,I,!0);continue}let Ze;if(ke.key!=null)Ze=Z.get(ke.key);else for(q=H;q<=A;q++)if(An[q-H]===0&&Ft(ke,p[q])){Ze=q;break}Ze===void 0?Je(ke,m,I,!0):(An[Ze-H]=v+1,Ze>=Fo?Fo=Ze:en=!0,E(ke,p[Ze],_,null,m,I,S,w,T),ue++)}const Lo=en?Hf(An):rn;for(q=Lo.length-1,v=Ve-1;v>=0;v--){const ke=H+v,Ze=p[ke],Bo=ke+1<R?p[ke+1].el:y;An[v]===0?E(null,Ze,_,Bo,m,I,S,w,T):en&&(q<0||v!==Lo[q]?Rt(Ze,_,Bo,2):q--)}}},Rt=(f,p,_,y,m=null)=>{const{el:I,type:S,transition:w,children:T,shapeFlag:v}=f;if(v&6){Rt(f.component.subTree,p,_,y);return}if(v&128){f.suspense.move(p,_,y);return}if(v&64){S.move(f,p,_,Zt);return}if(S===$e){s(I,p,_);for(let N=0;N<T.length;N++)Rt(T[N],p,_,y);s(f.anchor,p,_);return}if(S===ki){D(f,p,_);return}if(y!==2&&v&1&&w)if(y===0)w.beforeEnter(I),s(I,p,_),Se(()=>w.enter(I),m);else{const{leave:N,delayLeave:A,afterLeave:M}=w,H=()=>s(I,p,_),Z=()=>{N(I,()=>{H(),M&&M()})};A?A(I,H,Z):Z()}else s(I,p,_)},Je=(f,p,_,y=!1,m=!1)=>{const{type:I,props:S,ref:w,children:T,dynamicChildren:v,shapeFlag:R,patchFlag:N,dirs:A}=f;if(w!=null&&ir(w,null,_,f,!0),R&256){p.ctx.deactivate(f);return}const M=R&1&&A,H=!Ns(f);let Z;if(H&&(Z=S&&S.onVnodeBeforeUnmount)&&et(Z,p,f),R&6)Xu(f.component,_,y);else{if(R&128){f.suspense.unmount(_,y);return}M&&At(f,null,p,"beforeUnmount"),R&64?f.type.remove(f,p,_,m,Zt,y):v&&(I!==$e||N>0&&N&64)?st(v,p,_,!1,!0):(I===$e&&N&384||!m&&R&16)&&st(T,p,_),y&&Do(f)}(H&&(Z=S&&S.onVnodeUnmounted)||M)&&Se(()=>{Z&&et(Z,p,f),M&&At(f,null,p,"unmounted")},_)},Do=f=>{const{type:p,el:_,anchor:y,transition:m}=f;if(p===$e){Qu(_,y);return}if(p===ki){X(f);return}const I=()=>{i(_),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(f.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:w}=m,T=()=>S(_,I);w?w(f.el,I,T):T()}else I()},Qu=(f,p)=>{let _;for(;f!==p;)_=d(f),i(f),f=_;i(p)},Xu=(f,p,_)=>{const{bum:y,scope:m,update:I,subTree:S,um:w}=f;y&&xs(y),m.stop(),I&&(I.active=!1,Je(S,f,p,_)),w&&Se(w,p),Se(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},st=(f,p,_,y=!1,m=!1,I=0)=>{for(let S=I;S<f.length;S++)Je(f[S],p,_,y,m)},gs=f=>f.shapeFlag&6?gs(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),Mo=(f,p,_)=>{f==null?p._vnode&&Je(p._vnode,null,null,!0):E(p._vnode||null,f,p,null,null,null,_),Go(),Fc(),p._vnode=f},Zt={p:E,um:Je,m:Rt,r:Do,mt:He,mc:x,pc:J,pbc:z,n:gs,o:t};let Ti,Si;return e&&([Ti,Si]=e(Zt)),{render:Mo,hydrate:Ti,createApp:Bf(Mo,Ti)}}function kt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function na(t,e,n=!1){const s=t.children,i=e.children;if(P(s)&&P(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=gt(i[r]),l.el=o.el),n||na(o,l)),l.type===hi&&(l.el=o.el)}}function Hf(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Vf=t=>t.__isTeleport,$e=Symbol(void 0),hi=Symbol(void 0),Qe=Symbol(void 0),ki=Symbol(void 0),Bn=[];let ze=null;function rt(t=!1){Bn.push(ze=t?null:[])}function $f(){Bn.pop(),ze=Bn[Bn.length-1]||null}let Yn=1;function sl(t){Yn+=t}function sa(t){return t.dynamicChildren=Yn>0?ze||rn:null,$f(),Yn>0&&ze&&ze.push(t),t}function an(t,e,n,s,i,r){return sa(re(t,e,n,s,i,r,!0))}function rr(t,e,n,s,i){return sa(Ue(t,e,n,s,i,!0))}function jf(t){return t?t.__v_isVNode===!0:!1}function Ft(t,e){return t.type===e.type&&t.key===e.key}const fi="__vInternal",ia=({key:t})=>t??null,Rs=({ref:t,ref_key:e,ref_for:n})=>t!=null?pe(t)||oe(t)||F(t)?{i:Le,r:t,k:e,f:!!n}:t:null;function re(t,e=null,n=null,s=0,i=null,r=t===$e?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ia(e),ref:e&&Rs(e),scopeId:li,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Le};return l?(Gr(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=pe(n)?8:16),Yn>0&&!o&&ze&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&ze.push(c),c}const Ue=Kf;function Kf(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===If)&&(t=Qe),jf(t)){const l=Tt(t,e,!0);return n&&Gr(l,n),Yn>0&&!r&&ze&&(l.shapeFlag&6?ze[ze.indexOf(t)]=l:ze.push(l)),l.patchFlag|=-2,l}if(td(t)&&(t=t.__vccOpts),e){e=zf(e);let{class:l,style:c}=e;l&&!pe(l)&&(e.class=wn(l)),ie(c)&&(Nc(c)&&!P(c)&&(c=be({},c)),e.style=Or(c))}const o=pe(t)?1:lf(t)?128:Vf(t)?64:ie(t)?4:F(t)?2:0;return re(t,e,n,s,i,o,r,!0)}function zf(t){return t?Nc(t)||fi in t?be({},t):t:null}function Tt(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?qf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&ia(l),ref:e&&e.ref?n&&i?P(i)?i.concat(Rs(e)):[i,Rs(e)]:Rs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$e?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Tt(t.ssContent),ssFallback:t.ssFallback&&Tt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function ra(t=" ",e=0){return Ue(hi,null,t,e)}function il(t="",e=!1){return e?(rt(),rr(Qe,null,t)):Ue(Qe,null,t)}function tt(t){return t==null||typeof t=="boolean"?Ue(Qe):P(t)?Ue($e,null,t.slice()):typeof t=="object"?gt(t):Ue(hi,null,String(t))}function gt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Tt(t)}function Gr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(P(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Gr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(fi in e)?e._ctx=Le:i===3&&Le&&(Le.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:Le},n=32):(e=String(e),s&64?(n=16,e=[ra(e)]):n=8);t.children=e,t.shapeFlag|=n}function qf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=wn([e.class,s.class]));else if(i==="style")e.style=Or([e.style,s.style]);else if(ei(i)){const r=e[i],o=s[i];o&&r!==o&&!(P(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function et(t,e,n,s=null){Be(t,e,7,[n,s])}const Gf=ta();let Yf=0;function Qf(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Gf,r={uid:Yf++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new _c(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xc(s,i),emitsOptions:Bc(s,i),emit:null,emitted:null,propsDefaults:se,inheritAttrs:s.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ef.bind(null,r),t.ce&&t.ce(r),r}let ve=null;const oa=()=>ve||Le,yn=t=>{ve=t,t.scope.on()},jt=()=>{ve&&ve.scope.off(),ve=null};function la(t){return t.vnode.shapeFlag&4}let Qn=!1;function Xf(t,e=!1){Qn=e;const{props:n,children:s}=t.vnode,i=la(t);Pf(t,n,i,e),Mf(t,s);const r=i?Jf(t,e):void 0;return Qn=!1,r}function Jf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=mn(new Proxy(t.ctx,Sf));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?ed(t):null;yn(t),In();const r=Ct(s,t,0,[t.props,i]);if(Tn(),jt(),hc(r)){if(r.then(jt,jt),e)return r.then(o=>{rl(t,o,e)}).catch(o=>{ri(o,t,0)});t.asyncDep=r}else rl(t,r,e)}else ca(t,e)}function rl(t,e,n){F(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=kc(e)),ca(t,n)}let ol;function ca(t,e,n){const s=t.type;if(!t.render){if(!e&&ol&&!s.render){const i=s.template||zr(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,a=be(be({isCustomElement:r,delimiters:l},o),c);s.render=ol(i,a)}}t.render=s.render||Ye}yn(t),In(),xf(t),Tn(),jt()}function Zf(t){return new Proxy(t.attrs,{get(e,n){return Oe(t,"get","$attrs"),e[n]}})}function ed(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Zf(t))},slots:t.slots,emit:t.emit,expose:e}}function di(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(kc(mn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ln)return Ln[n](t)},has(e,n){return n in e||n in Ln}}))}function td(t){return F(t)&&"__vccOpts"in t}const aa=(t,e)=>Gh(t,e,Qn),nd=Symbol(""),sd=()=>Fn(nd),id="3.2.45",rd="http://www.w3.org/2000/svg",Lt=typeof document<"u"?document:null,ll=Lt&&Lt.createElement("template"),od={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Lt.createElementNS(rd,t):Lt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Lt.createTextNode(t),createComment:t=>Lt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Lt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ll.innerHTML=s?`<svg>${t}</svg>`:t;const l=ll.content;if(s){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function ld(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function cd(t,e,n){const s=t.style,i=pe(n);if(n&&!i){for(const r in n)or(s,r,n[r]);if(e&&!pe(e))for(const r in e)n[r]==null&&or(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const cl=/\s*!important$/;function or(t,e,n){if(P(n))n.forEach(s=>or(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=ad(t,e);cl.test(n)?t.setProperty(Xt(s),n.replace(cl,""),"important"):t[s]=n}}const al=["Webkit","Moz","ms"],Pi={};function ad(t,e){const n=Pi[e];if(n)return n;let s=_n(e);if(s!=="filter"&&s in t)return Pi[e]=s;s=pc(s);for(let i=0;i<al.length;i++){const r=al[i]+s;if(r in t)return Pi[e]=r}return e}const ul="http://www.w3.org/1999/xlink";function ud(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ul,e.slice(6,e.length)):t.setAttributeNS(ul,e,n);else{const r=sh(e);n==null||r&&!cc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function hd(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=cc(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Bt(t,e,n,s){t.addEventListener(e,n,s)}function fd(t,e,n,s){t.removeEventListener(e,n,s)}function dd(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=pd(e);if(s){const a=r[e]=md(s,i);Bt(t,l,a,c)}else o&&(fd(t,l,o,c),r[e]=void 0)}}const hl=/(?:Once|Passive|Capture)$/;function pd(t){let e;if(hl.test(t)){e={};let s;for(;s=t.match(hl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xt(t.slice(2)),e]}let Oi=0;const _d=Promise.resolve(),gd=()=>Oi||(_d.then(()=>Oi=0),Oi=Date.now());function md(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Be(yd(s,n.value),e,5,[s])};return n.value=t,n.attached=gd(),n}function yd(t,e){if(P(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const fl=/^on[a-z]/,vd=(t,e,n,s,i=!1,r,o,l,c)=>{e==="class"?ld(t,s,i):e==="style"?cd(t,n,s):ei(e)?Dr(e)||dd(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cd(t,e,s,i))?hd(t,e,s,r,o,l,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),ud(t,e,s,i))};function Cd(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&fl.test(e)&&F(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||fl.test(e)&&pe(n)?!1:e in t}const Ed={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};df.props;const Ms=t=>{const e=t.props["onUpdate:modelValue"]||!1;return P(e)?n=>xs(e,n):e};function bd(t){t.target.composing=!0}function dl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ua={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Ms(i);const r=s||i.props&&i.props.type==="number";Bt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=ks(l)),t._assign(l)}),n&&Bt(t,"change",()=>{t.value=t.value.trim()}),e||(Bt(t,"compositionstart",bd),Bt(t,"compositionend",dl),Bt(t,"change",dl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Ms(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&ks(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},wd={deep:!0,created(t,e,n){t._assign=Ms(n),Bt(t,"change",()=>{const s=t._modelValue,i=Id(t),r=t.checked,o=t._assign;if(P(s)){const l=ac(s,i),c=l!==-1;if(r&&!c)o(s.concat(i));else if(!r&&c){const a=[...s];a.splice(l,1),o(a)}}else if(ti(s)){const l=new Set(s);r?l.add(i):l.delete(i),o(l)}else o(ha(t,r))})},mounted:pl,beforeUpdate(t,e,n){t._assign=Ms(n),pl(t,e,n)}};function pl(t,{value:e,oldValue:n},s){t._modelValue=e,P(e)?t.checked=ac(e,s.props.value)>-1:ti(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Zs(e,ha(t,!0)))}function Id(t){return"_value"in t?t._value:t.value}function ha(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Td={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Sd=(t,e)=>n=>{if(!("key"in n))return;const s=Xt(n.key);if(e.some(i=>i===s||Td[i]===s))return t(n)},xd=be({patchProp:vd},od);let _l;function Nd(){return _l||(_l=Uf(xd))}const Rd=(...t)=>{const e=Nd().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Ad(s);if(!i)return;const r=e._component;!F(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Ad(t){return pe(t)?document.querySelector(t):t}var kd=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let fa;const pi=t=>fa=t,da=Symbol();function lr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Un;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Un||(Un={}));function Pd(){const t=gc(!0),e=t.run(()=>$t({}));let n=[],s=[];const i=mn({install(r){pi(i),i._a=r,r.provide(da,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!kd?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const pa=()=>{};function gl(t,e,n,s=pa){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&dh()&&ph(i),i}function tn(t,...e){t.slice().forEach(n=>{n(...e)})}function cr(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];lr(i)&&lr(s)&&t.hasOwnProperty(n)&&!oe(s)&&!vt(s)?t[n]=cr(i,s):t[n]=s}return t}const Od=Symbol();function Dd(t){return!lr(t)||!t.hasOwnProperty(Od)}const{assign:mt}=Object;function Md(t){return!!(oe(t)&&t.effect)}function Fd(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const u=jh(n.state.value[t]);return mt(u,r,Object.keys(o||{}).reduce((h,d)=>(h[d]=mn(aa(()=>{pi(n);const g=n._s.get(t);return o[d].call(g,g)})),h),{}))}return c=_a(t,a,e,n,s,!0),c.$reset=function(){const h=i?i():{};this.$patch(d=>{mt(d,h)})},c}function _a(t,e,n={},s,i,r){let o;const l=mt({actions:{}},n),c={deep:!0};let a,u,h=mn([]),d=mn([]),g;const C=s.state.value[t];!r&&!C&&(s.state.value[t]={}),$t({});let E;function O(K){let x;a=u=!1,typeof K=="function"?(K(s.state.value[t]),x={type:Un.patchFunction,storeId:t,events:g}):(cr(s.state.value[t],K),x={type:Un.patchObject,payload:K,storeId:t,events:g});const Y=E=Symbol();Dc().then(()=>{E===Y&&(a=!0)}),u=!0,tn(h,x,s.state.value[t])}const U=pa;function he(){o.stop(),h=[],d=[],s._s.delete(t)}function D(K,x){return function(){pi(s);const Y=Array.from(arguments),z=[],fe=[];function Me(we){z.push(we)}function We(we){fe.push(we)}tn(d,{args:Y,name:K,store:G,after:Me,onError:We});let He;try{He=x.apply(this&&this.$id===t?this:G,Y)}catch(we){throw tn(fe,we),we}return He instanceof Promise?He.then(we=>(tn(z,we),we)).catch(we=>(tn(fe,we),Promise.reject(we))):(tn(z,He),He)}}const X={_p:s,$id:t,$onAction:gl.bind(null,d),$patch:O,$reset:U,$subscribe(K,x={}){const Y=gl(h,K,x.detached,()=>z()),z=o.run(()=>cn(()=>s.state.value[t],fe=>{(x.flush==="sync"?u:a)&&K({storeId:t,type:Un.direct,events:g},fe)},mt({},c,x)));return Y},$dispose:he},G=ii(X);s._s.set(t,G);const De=s._e.run(()=>(o=gc(),o.run(()=>e())));for(const K in De){const x=De[K];if(oe(x)&&!Md(x)||vt(x))r||(C&&Dd(x)&&(oe(x)?x.value=C[K]:cr(x,C[K])),s.state.value[t][K]=x);else if(typeof x=="function"){const Y=D(K,x);De[K]=Y,l.actions[K]=x}}return mt(G,De),mt($(G),De),Object.defineProperty(G,"$state",{get:()=>s.state.value[t],set:K=>{O(x=>{mt(x,K)})}}),s._p.forEach(K=>{mt(G,o.run(()=>K({store:G,app:s._a,pinia:s,options:l})))}),C&&r&&n.hydrate&&n.hydrate(G.$state,C),a=!0,u=!0,G}function Ld(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(l,c){const a=oa();return l=l||a&&Fn(da,null),l&&pi(l),l=fa,l._s.has(s)||(r?_a(s,e,i,l):Fd(s,i,l)),l._s.get(s)}return o.$id=s,o}const Bd=ci({__name:"Button",props:{active:{type:Boolean},label:null},emits:["click"],setup(t){return(e,n)=>(rt(),an("a",{class:wn({selected:t.active}),href:"#/",onClick:n[0]||(n[0]=s=>e.$emit("click",t.label.value))},Ki(t.label.displayText),3))}});/**
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
 */const b=function(t,e){if(!t)throw Sn(e)},Sn=function(t){return new Error("Firebase Database ("+ga.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const ma=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ud=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Yr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let d=(l&15)<<2|a>>6,g=a&63;c||(g=64,o||(d=64)),s.push(n[u],n[h],n[d],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ma(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ud(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||h==null)throw Error();const d=r<<2|l>>4;if(s.push(d),a!==64){const g=l<<4&240|a>>2;if(s.push(g),h!==64){const C=a<<6&192|h;s.push(C)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ya=function(t){const e=ma(t);return Yr.encodeByteArray(e,!0)},Fs=function(t){return ya(t).replace(/\./g,"")},ar=function(t){try{return Yr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Wd(t){return va(void 0,t)}function va(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Hd(n)||(t[n]=va(t[n],e[n]));return t}function Hd(t){return t!=="__proto__"}/**
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
 */function Vd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ca(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vd())}function $d(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ea(){return ga.NODE_ADMIN===!0}function jd(){try{return typeof indexedDB=="object"}catch{return!1}}function Kd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function zd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qd=()=>zd().__FIREBASE_DEFAULTS__,Gd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ar(t[1]);return e&&JSON.parse(e)},ba=()=>{try{return qd()||Gd()||Yd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qd=t=>{var e,n;return(n=(e=ba())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xd=t=>{const e=Qd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Jd=()=>{var t;return(t=ba())===null||t===void 0?void 0:t.config};/**
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
 */function Zd(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Fs(JSON.stringify(n)),Fs(JSON.stringify(o)),l].join(".")}/**
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
 */const ep="FirebaseError";class cs extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ep,Object.setPrototypeOf(this,cs.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wa.prototype.create)}}class wa{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?tp(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new cs(i,l,s)}}function tp(t,e){return t.replace(np,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const np=/\{\$([^}]+)}/g;/**
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
 */const Ia=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Xn(ar(r[0])||""),n=Xn(ar(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},sp=function(t){const e=Ia(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ip=function(t){const e=Ia(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function dt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ml(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ls(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ur(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(yl(r)&&yl(o)){if(!ur(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function yl(t){return t!==null&&typeof t=="object"}/**
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
 */function rp(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class op{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let h=0;h<80;h++){h<40?h<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):h<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const d=(i<<5|i>>>27)+a+c+u+s[h]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Qr(t,e){return`${t} failed: ${e} argument `}/**
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
 */const lp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,b(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Ot="[DEFAULT]";/**
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
 */class cp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new _i;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(up(e))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ot){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ot){return this.instances.has(e)}getOptions(e=Ot){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ap(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ot){return this.component?this.component.multipleInstances?e:Ot:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ap(t){return t===Ot?void 0:t}function up(t){return t.instantiationMode==="EAGER"}/**
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
 */class hp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const fp={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},dp=ee.INFO,pp={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},_p=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=pp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ta{constructor(e){this.name=e,this._logLevel=dp,this._logHandler=_p,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const gp=(t,e)=>e.some(n=>t instanceof n);let vl,Cl;function mp(){return vl||(vl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yp(){return Cl||(Cl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sa=new WeakMap,hr=new WeakMap,xa=new WeakMap,Di=new WeakMap,Xr=new WeakMap;function vp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Et(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sa.set(n,t)}).catch(()=>{}),Xr.set(e,t),e}function Cp(t){if(hr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});hr.set(t,e)}let fr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ep(t){fr=t(fr)}function bp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Mi(this),e,...n);return xa.set(s,e.sort?e.sort():[e]),Et(s)}:yp().includes(t)?function(...e){return t.apply(Mi(this),e),Et(Sa.get(this))}:function(...e){return Et(t.apply(Mi(this),e))}}function wp(t){return typeof t=="function"?bp(t):(t instanceof IDBTransaction&&Cp(t),gp(t,mp())?new Proxy(t,fr):t)}function Et(t){if(t instanceof IDBRequest)return vp(t);if(Di.has(t))return Di.get(t);const e=wp(t);return e!==t&&(Di.set(t,e),Xr.set(e,t)),e}const Mi=t=>Xr.get(t);function Ip(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Et(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Et(o.result),c.oldVersion,c.newVersion,Et(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Tp=["get","getKey","getAll","getAllKeys","count"],Sp=["put","add","delete","clear"],Fi=new Map;function El(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fi.get(e))return Fi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Sp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Tp.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return Fi.set(e,r),r}Ep(t=>({...t,get:(e,n,s)=>El(e,n)||t.get(e,n,s),has:(e,n)=>!!El(e,n)||t.has(e,n)}));/**
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
 */class xp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Np(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Np(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dr="@firebase/app",bl="0.9.0";/**
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
 */const zt=new Ta("@firebase/app"),Rp="@firebase/app-compat",Ap="@firebase/analytics-compat",kp="@firebase/analytics",Pp="@firebase/app-check-compat",Op="@firebase/app-check",Dp="@firebase/auth",Mp="@firebase/auth-compat",Fp="@firebase/database",Lp="@firebase/database-compat",Bp="@firebase/functions",Up="@firebase/functions-compat",Wp="@firebase/installations",Hp="@firebase/installations-compat",Vp="@firebase/messaging",$p="@firebase/messaging-compat",jp="@firebase/performance",Kp="@firebase/performance-compat",zp="@firebase/remote-config",qp="@firebase/remote-config-compat",Gp="@firebase/storage",Yp="@firebase/storage-compat",Qp="@firebase/firestore",Xp="@firebase/firestore-compat",Jp="firebase",Zp="9.15.0";/**
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
 */const pr="[DEFAULT]",e_={[dr]:"fire-core",[Rp]:"fire-core-compat",[kp]:"fire-analytics",[Ap]:"fire-analytics-compat",[Op]:"fire-app-check",[Pp]:"fire-app-check-compat",[Dp]:"fire-auth",[Mp]:"fire-auth-compat",[Fp]:"fire-rtdb",[Lp]:"fire-rtdb-compat",[Bp]:"fire-fn",[Up]:"fire-fn-compat",[Wp]:"fire-iid",[Hp]:"fire-iid-compat",[Vp]:"fire-fcm",[$p]:"fire-fcm-compat",[jp]:"fire-perf",[Kp]:"fire-perf-compat",[zp]:"fire-rc",[qp]:"fire-rc-compat",[Gp]:"fire-gcs",[Yp]:"fire-gcs-compat",[Qp]:"fire-fst",[Xp]:"fire-fst-compat","fire-js":"fire-js",[Jp]:"fire-js-all"};/**
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
 */const Bs=new Map,_r=new Map;function t_(t,e){try{t.container.addComponent(e)}catch(n){zt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Us(t){const e=t.name;if(_r.has(e))return zt.debug(`There were multiple attempts to register component ${e}.`),!1;_r.set(e,t);for(const n of Bs.values())t_(n,t);return!0}function n_(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const s_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bt=new wa("app","Firebase",s_);/**
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
 */class i_{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}/**
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
 */const r_=Zp;function Na(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:pr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw bt.create("bad-app-name",{appName:String(i)});if(n||(n=Jd()),!n)throw bt.create("no-options");const r=Bs.get(i);if(r){if(ur(n,r.options)&&ur(s,r.config))return r;throw bt.create("duplicate-app",{appName:i})}const o=new hp(i);for(const c of _r.values())o.addComponent(c);const l=new i_(n,s,o);return Bs.set(i,l),l}function o_(t=pr){const e=Bs.get(t);if(!e&&t===pr)return Na();if(!e)throw bt.create("no-app",{appName:t});return e}function un(t,e,n){var s;let i=(s=e_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zt.warn(l.join(" "));return}Us(new Jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const l_="firebase-heartbeat-database",c_=1,Zn="firebase-heartbeat-store";let Li=null;function Ra(){return Li||(Li=Ip(l_,c_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zn)}}}).catch(t=>{throw bt.create("idb-open",{originalErrorMessage:t.message})})),Li}async function a_(t){try{return(await Ra()).transaction(Zn).objectStore(Zn).get(Aa(t))}catch(e){if(e instanceof cs)zt.warn(e.message);else{const n=bt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zt.warn(n.message)}}}async function wl(t,e){try{const s=(await Ra()).transaction(Zn,"readwrite");return await s.objectStore(Zn).put(e,Aa(t)),s.done}catch(n){if(n instanceof cs)zt.warn(n.message);else{const s=bt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zt.warn(s.message)}}}function Aa(t){return`${t.name}!${t.options.appId}`}/**
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
 */const u_=1024,h_=30*24*60*60*1e3;class f_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new p_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Il();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=h_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Il(),{heartbeatsToSend:n,unsentEntries:s}=d_(this._heartbeatsCache.heartbeats),i=Fs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Il(){return new Date().toISOString().substring(0,10)}function d_(t,e=u_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Tl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class p_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jd()?Kd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await a_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Tl(t){return Fs(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function __(t){Us(new Jn("platform-logger",e=>new xp(e),"PRIVATE")),Us(new Jn("heartbeat",e=>new f_(e),"PRIVATE")),un(dr,bl,t),un(dr,bl,"esm2017"),un("fire-js","")}__("");const Sl="@firebase/database",xl="0.14.0";/**
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
 */let ka="";function g_(t){ka=t}/**
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
 */class m_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Xn(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class y_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return dt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Pa=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new m_(e)}}catch{}return new y_},Wt=Pa("localStorage"),gr=Pa("sessionStorage");/**
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
 */const hn=new Ta("@firebase/database"),v_=function(){let t=1;return function(){return t++}}(),Oa=function(t){const e=lp(t),n=new op;n.update(e);const s=n.digest();return Yr.encodeByteArray(s)},us=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=us.apply(null,s):typeof s=="object"?e+=me(s):e+=s,e+=" "}return e};let Kt=null,Nl=!0;const C_=function(t,e){b(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(hn.logLevel=ee.VERBOSE,Kt=hn.log.bind(hn),e&&gr.set("logging_enabled",!0)):typeof t=="function"?Kt=t:(Kt=null,gr.remove("logging_enabled"))},Ce=function(...t){if(Nl===!0&&(Nl=!1,Kt===null&&gr.get("logging_enabled")===!0&&C_(!0)),Kt){const e=us.apply(null,t);Kt(e)}},hs=function(t){return function(...e){Ce(t,...e)}},mr=function(...t){const e="FIREBASE INTERNAL ERROR: "+us(...t);hn.error(e)},ut=function(...t){const e=`FIREBASE FATAL ERROR: ${us(...t)}`;throw hn.error(e),new Error(e)},Re=function(...t){const e="FIREBASE WARNING: "+us(...t);hn.warn(e)},E_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Re("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Da=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},b_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Cn="[MIN_NAME]",qt="[MAX_NAME]",xn=function(t,e){if(t===e)return 0;if(t===Cn||e===qt)return-1;if(e===Cn||t===qt)return 1;{const n=Rl(t),s=Rl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},w_=function(t,e){return t===e?0:t<e?-1:1},kn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},Jr=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=me(e[s]),n+=":",n+=Jr(t[e[s]]);return n+="}",n},Ma=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ae(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Fa=function(t){b(!Da(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let h="";for(c=0;c<64;c+=8){let d=parseInt(u.substr(c,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},I_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},T_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function S_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const x_=new RegExp("^-?(0*)\\d{1,10}$"),N_=-2147483648,R_=2147483647,Rl=function(t){if(x_.test(t)){const e=Number(t);if(e>=N_&&e<=R_)return e}return null},Nn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Re("Exception was thrown by user callback.",n),e},Math.floor(0))}},A_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class k_{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Re(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class P_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Re(e)}}class fn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}fn.OWNER="owner";/**
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
 */class za{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function O_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function qa(t,e,n){b(typeof e=="string","typeof type must == string"),b(typeof n=="object","typeof params must == object");let s;if(e===ja)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ka)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);O_(t)&&(n.ns=t.namespace);const i=[];return Ae(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class D_{constructor(){this.counters_={}}incrementCounter(e,n=1){dt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Wd(this.counters_)}}/**
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
 */const Bi={},Ui={};function eo(t){const e=t.toString();return Bi[e]||(Bi[e]=new D_),Bi[e]}function M_(t,e){const n=t.toString();return Ui[n]||(Ui[n]=e()),Ui[n]}/**
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
 */class F_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Nn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Al="start",L_="close",B_="pLPCommand",U_="pRTLPCB",Ga="id",Ya="pw",Qa="ser",W_="cb",H_="seg",V_="ts",$_="d",j_="dframe",Xa=1870,Ja=30,K_=Xa-Ja,z_=25e3,q_=3e4;class sn{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=hs(e),this.stats_=eo(n),this.urlFn=c=>(this.appCheckToken&&(c[yr]=this.appCheckToken),qa(n,Ka,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new F_(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(q_)),b_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new to((...r)=>{const[o,l,c,a,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Al)this.id=l,this.password=c;else if(o===L_)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Al]="t",s[Qa]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[W_]=this.scriptTagHolder.uniqueCallbackIdentifier),s[La]=Zr,this.transportSessionId&&(s[Ba]=this.transportSessionId),this.lastSessionId&&(s[Va]=this.lastSessionId),this.applicationId&&(s[$a]=this.applicationId),this.appCheckToken&&(s[yr]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ha.test(location.hostname)&&(s[Ua]=Wa);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){sn.forceAllow_=!0}static forceDisallow(){sn.forceDisallow_=!0}static isAvailable(){return sn.forceAllow_?!0:!sn.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!I_()&&!T_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=ya(n),i=Ma(s,K_);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[j_]="t",s[Ga]=e,s[Ya]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class to{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=v_(),window[B_+this.uniqueCallbackIdentifier]=e,window[U_+this.uniqueCallbackIdentifier]=n,this.myIFrame=to.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ce("frame writing exception"),l.stack&&Ce(l.stack),Ce(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ga]=this.myID,e[Ya]=this.myPW,e[Qa]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ja+s.length<=Xa;){const o=this.pendingSegs.shift();s=s+"&"+H_+i+"="+o.seg+"&"+V_+i+"="+o.ts+"&"+$_+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(z_)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const G_=16384,Y_=45e3;let Ws=null;typeof MozWebSocket<"u"?Ws=MozWebSocket:typeof WebSocket<"u"&&(Ws=WebSocket);class Ke{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=hs(this.connId),this.stats_=eo(n),this.connURL=Ke.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[La]=Zr,typeof location<"u"&&location.hostname&&Ha.test(location.hostname)&&(o[Ua]=Wa),n&&(o[Ba]=n),s&&(o[Va]=s),i&&(o[yr]=i),r&&(o[$a]=r),qa(e,ja,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wt.set("previous_websocket_failure",!0);try{let s;Ea(),this.mySock=new Ws(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ke.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ws!==null&&!Ke.forceDisallow_}static previouslyFailed(){return Wt.isInMemoryStorage||Wt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Xn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(b(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ma(n,G_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Y_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ke.responsesRequiredToBeHealthy=2;Ke.healthyTimeout=3e4;/**
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
 */class es{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[sn,Ke]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Ke&&Ke.isAvailable();let s=n&&!Ke.previouslyFailed();if(e.webSocketOnly&&(n||Re("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Ke];else{const i=this.transports_=[];for(const r of es.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}es.globalTransportInitialized_=!1;/**
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
 */const Q_=6e4,X_=5e3,J_=10*1024,Z_=100*1024,Wi="t",kl="d",eg="s",Pl="r",tg="e",Ol="o",Dl="a",Ml="n",Fl="p",ng="h";class sg{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=hs("c:"+this.id+":"),this.transportManager_=new es(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Wn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Z_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>J_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wi in e){const n=e[Wi];n===Dl?this.upgradeIfSecondaryHealthy_():n===Pl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ol&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=kn("t",e),s=kn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Dl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ml,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=kn("t",e),s=kn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=kn(Wi,e);if(kl in e){const s=e[kl];if(n===ng)this.onHandshake_(s);else if(n===Ml){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===eg?this.onConnectionShutdown_(s):n===Pl?this.onReset_(s):n===tg?mr("Server Error: "+s):n===Ol?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):mr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Zr!==s&&Re("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Wn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Q_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(X_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class eu{constructor(e){this.allowedEvents_=e,this.listeners_={},b(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){b(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Hs extends eu{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ca()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Hs}getInitialEvent(e){return b(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ll=32,Bl=768;class Q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function j(){return new Q("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function St(t){return t.pieces_.length-t.pieceNum_}function te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Q(t.pieces_,e)}function tu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ig(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function nu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function su(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Q(e,0)}function de(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Q)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Q(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function xe(t,e){const n=L(t),s=L(e);if(n===null)return e;if(n===s)return xe(te(t),te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function no(t,e){if(St(t)!==St(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function qe(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(St(t)>St(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class rg{constructor(e,n){this.errorPrefix_=n,this.parts_=nu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=gi(this.parts_[s]);iu(this)}}function og(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=gi(e),iu(t)}function lg(t){const e=t.parts_.pop();t.byteLength_-=gi(e),t.parts_.length>0&&(t.byteLength_-=1)}function iu(t){if(t.byteLength_>Bl)throw new Error(t.errorPrefix_+"has a key path longer than "+Bl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ll)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ll+") or object contains a cycle "+Dt(t))}function Dt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class so extends eu{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new so}getInitialEvent(e){return b(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Pn=1e3,cg=60*5*1e3,Ul=30*1e3,ag=1.3,ug=3e4,hg="server_kill",Wl=3;class ct extends Za{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=ct.nextPersistentConnectionId_++,this.log_=hs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Pn,this.maxReconnectDelay_=cg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Ea())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");so.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Hs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(me(r)),b(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new _i,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),b(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;ct.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&dt(e,"w")){const s=vn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Re(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ip(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ul)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=sp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),b(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):mr("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){b(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Pn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Pn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ug&&(this.reconnectDelay_=Pn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ag)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ct.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(h){b(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,l=new sg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Re(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(hg)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Re(h),c())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ml(this.interruptReasons_)&&(this.reconnectDelay_=Pn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Jr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Q(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wl&&(this.reconnectDelay_=Ul,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ka.replace(/\./g,"-")]=1,Ca()?e["framework.cordova"]=1:$d()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Hs.getInstance().currentlyOnline();return ml(this.interruptReasons_)&&e}}ct.nextPersistentConnectionId_=0;ct.nextConnectionId_=0;/**
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
 */class B{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new B(e,n)}}/**
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
 */class mi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new B(Cn,e),i=new B(Cn,n);return this.compare(s,i)!==0}minPost(){return B.MIN}}/**
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
 */let ws;class ru extends mi{static get __EMPTY_NODE(){return ws}static set __EMPTY_NODE(e){ws=e}compare(e,n){return xn(e.name,n.name)}isDefinedOn(e){throw Sn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return B.MIN}maxPost(){return new B(qt,ws)}makePost(e,n){return b(typeof e=="string","KeyIndex indexValue must always be a string."),new B(e,ws)}toString(){return".key"}}const dn=new ru;/**
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
 */class Is{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ge{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ge.RED,this.left=i??Ne.EMPTY_NODE,this.right=r??Ne.EMPTY_NODE}copy(e,n,s,i,r){return new ge(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ne.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ge.RED=!0;ge.BLACK=!1;class fg{copy(e,n,s,i,r){return this}insert(e,n,s){return new ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ne{constructor(e,n=Ne.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ne(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ge.BLACK,null,null))}remove(e){return new Ne(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ge.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Is(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Is(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Is(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Is(this.root_,null,this.comparator_,!0,e)}}Ne.EMPTY_NODE=new fg;/**
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
 */function dg(t,e){return xn(t.name,e.name)}function io(t,e){return xn(t,e)}/**
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
 */let vr;function pg(t){vr=t}const ou=function(t){return typeof t=="number"?"number:"+Fa(t):"string:"+t},lu=function(t){if(t.isLeafNode()){const e=t.val();b(typeof e=="string"||typeof e=="number"||typeof e=="object"&&dt(e,".sv"),"Priority must be a string or number.")}else b(t===vr||t.isEmpty(),"priority of unexpected type.");b(t===vr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Hl;class _e{constructor(e,n=_e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,b(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),lu(this.priorityNode_)}static set __childrenNodeConstructor(e){Hl=e}static get __childrenNodeConstructor(){return Hl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:L(e)===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=L(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(b(s!==".priority"||St(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,_e.__childrenNodeConstructor.EMPTY_NODE.updateChild(te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ou(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Fa(this.value_):e+=this.value_,this.lazyHash_=Oa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _e.__childrenNodeConstructor?-1:(b(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=_e.VALUE_TYPE_ORDER.indexOf(n),r=_e.VALUE_TYPE_ORDER.indexOf(s);return b(i>=0,"Unknown leaf type: "+n),b(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let cu,au;function _g(t){cu=t}function gg(t){au=t}class mg extends mi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?xn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return B.MIN}maxPost(){return new B(qt,new _e("[PRIORITY-POST]",au))}makePost(e,n){const s=cu(e);return new B(n,new _e("[PRIORITY-POST]",s))}toString(){return".priority"}}const ae=new mg;/**
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
 */const yg=Math.log(2);class vg{constructor(e){const n=r=>parseInt(Math.log(r)/yg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vs=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let h,d;if(u===0)return null;if(u===1)return h=t[c],d=n?n(h):h,new ge(d,h.node,ge.BLACK,null,null);{const g=parseInt(u/2,10)+c,C=i(c,g),E=i(g+1,a);return h=t[g],d=n?n(h):h,new ge(d,h.node,ge.BLACK,C,E)}},r=function(c){let a=null,u=null,h=t.length;const d=function(C,E){const O=h-C,U=h;h-=C;const he=i(O+1,U),D=t[O],X=n?n(D):D;g(new ge(X,D.node,E,null,he))},g=function(C){a?(a.left=C,a=C):(u=C,a=C)};for(let C=0;C<c.count;++C){const E=c.nextBitIsOne(),O=Math.pow(2,c.count-(C+1));E?d(O,ge.BLACK):(d(O,ge.BLACK),d(O,ge.RED))}return u},o=new vg(t.length),l=r(o);return new Ne(s||e,l)};/**
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
 */let Hi;const nn={};class ot{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return b(nn&&ae,"ChildrenNode.ts has not been loaded"),Hi=Hi||new ot({".priority":nn},{".priority":ae}),Hi}get(e){const n=vn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ne?n:null}hasIndex(e){return dt(this.indexSet_,e.toString())}addIndex(e,n){b(e!==dn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(B.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Vs(s,e.getCompare()):l=nn;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new ot(u,a)}addToIndexes(e,n){const s=Ls(this.indexes_,(i,r)=>{const o=vn(this.indexSet_,r);if(b(o,"Missing index implementation for "+r),i===nn)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(B.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),Vs(l,o.getCompare())}else return nn;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new B(e.name,l))),c.insert(e,e.node)}});return new ot(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ls(this.indexes_,i=>{if(i===nn)return i;{const r=n.get(e.name);return r?i.remove(new B(e.name,r)):i}});return new ot(s,this.indexSet_)}}/**
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
 */let On;class k{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&lu(this.priorityNode_),this.children_.isEmpty()&&b(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return On||(On=new k(new Ne(io),null,ot.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||On}updatePriority(e){return this.children_.isEmpty()?this:new k(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?On:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild(te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(b(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new B(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?On:this.priorityNode_;return new k(i,o,r)}}updateChild(e,n){const s=L(e);if(s===null)return n;{b(L(e)!==".priority"||St(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(te(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ae,(o,l)=>{n[o]=l.val(e),s++,r&&k.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ou(this.getPriority().val())+":"),this.forEachChild(ae,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Oa(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new B(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new B(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new B(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,B.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,B.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===fs?-1:0}withIndex(e){if(e===dn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new k(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===dn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ae),i=n.getIterator(ae);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===dn?null:this.indexMap_.get(e.toString())}}k.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Cg extends k{constructor(){super(new Ne(io),k.EMPTY_NODE,ot.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return k.EMPTY_NODE}isEmpty(){return!1}}const fs=new Cg;Object.defineProperties(B,{MIN:{value:new B(Cn,k.EMPTY_NODE)},MAX:{value:new B(qt,fs)}});ru.__EMPTY_NODE=k.EMPTY_NODE;_e.__childrenNodeConstructor=k;pg(fs);gg(fs);/**
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
 */const Eg=!0;function ye(t,e=null){if(t===null)return k.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),b(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _e(n,ye(e))}if(!(t instanceof Array)&&Eg){const n=[];let s=!1;if(Ae(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=ye(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new B(o,c)))}}),n.length===0)return k.EMPTY_NODE;const r=Vs(n,dg,o=>o.name,io);if(s){const o=Vs(n,ae.getCompare());return new k(r,ye(e),new ot({".priority":o},{".priority":ae}))}else return new k(r,ye(e),ot.Default)}else{let n=k.EMPTY_NODE;return Ae(t,(s,i)=>{if(dt(t,s)&&s.substring(0,1)!=="."){const r=ye(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ye(e))}}_g(ye);/**
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
 */class bg extends mi{constructor(e){super(),this.indexPath_=e,b(!W(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?xn(e.name,n.name):r}makePost(e,n){const s=ye(e),i=k.EMPTY_NODE.updateChild(this.indexPath_,s);return new B(n,i)}maxPost(){const e=k.EMPTY_NODE.updateChild(this.indexPath_,fs);return new B(qt,e)}toString(){return nu(this.indexPath_,0).join("/")}}/**
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
 */class wg extends mi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?xn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return B.MIN}maxPost(){return B.MAX}makePost(e,n){const s=ye(e);return new B(n,s)}toString(){return".value"}}const Ig=new wg;/**
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
 */function uu(t){return{type:"value",snapshotNode:t}}function En(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ts(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ns(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Tg(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ro{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){b(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ts(n,l)):b(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(En(n,s)):o.trackChildChange(ns(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ae,(i,r)=>{n.hasChild(i)||s.trackChildChange(ts(i,r))}),n.isLeafNode()||n.forEachChild(ae,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ns(i,r,o))}else s.trackChildChange(En(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?k.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ss{constructor(e){this.indexedFilter_=new ro(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ss.getStartPost_(e),this.endPost_=ss.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new B(n,s))||(s=k.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=k.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(k.EMPTY_NODE);const r=this;return n.forEachChild(ae,(o,l)=>{r.matches(new B(o,l))||(i=i.updateImmediateChild(o,k.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Sg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ss(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new B(n,s))||(s=k.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=k.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=k.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(k.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,k.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,g)=>h(g,d)}else o=this.index_.getCompare();const l=e;b(l.numChildren()===this.limit_,"");const c=new B(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const h=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,a,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const g=d==null?1:o(d,c);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(ns(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ts(n,h));const E=l.updateImmediateChild(n,k.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(En(d.name,d.node)),E.updateImmediateChild(d.name,d.node)):E}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(ts(a.name,a.node)),r.trackChildChange(En(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,k.EMPTY_NODE)):e}}/**
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
 */class oo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return b(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return b(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Cn}hasEnd(){return this.endSet_}getIndexEndValue(){return b(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return b(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:qt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return b(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ae}copy(){const e=new oo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xg(t){return t.loadsAllData()?new ro(t.getIndex()):t.hasLimit()?new Sg(t):new ss(t)}function Vl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ae?n="$priority":t.index_===Ig?n="$value":t.index_===dn?n="$key":(b(t.index_ instanceof bg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=me(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+me(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=me(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $l(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ae&&(e.i=t.index_.toString()),e}/**
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
 */class $s extends Za{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=hs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(b(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=$s.getListenId_(e,s),l={};this.listens_[o]=l;const c=Vl(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let h=u;if(a===404&&(h=null,a=null),a===null&&this.onDataUpdate_(r,h,!1,s),vn(this.listens_,o)===l){let d;a?a===401?d="permission_denied":d="rest_error:"+a:d="ok",i(d,null)}})}unlisten(e,n){const s=$s.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Vl(e._queryParams),s=e._path.toString(),i=new _i;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+rp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Xn(l.responseText)}catch{Re("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Re("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class Ng{constructor(){this.rootNode_=k.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function js(){return{value:null,children:new Map}}function hu(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=L(e);t.children.has(s)||t.children.set(s,js());const i=t.children.get(s);e=te(e),hu(i,e,n)}}function Cr(t,e,n){t.value!==null?n(e,t.value):Rg(t,(s,i)=>{const r=new Q(e.toString()+"/"+s);Cr(i,r,n)})}function Rg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Ag{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ae(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const jl=10*1e3,kg=30*1e3,Pg=5*60*1e3;class Og{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ag(e);const s=jl+(kg-jl)*Math.random();Wn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ae(e,(i,r)=>{r>0&&dt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Wn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Pg))}}/**
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
 */class Ks{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ge.ACK_USER_WRITE,this.source=fu()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return b(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Q(e));return new Ks(j(),n,this.revert)}}else return b(L(this.path)===e,"operationForChild called for unrelated child."),new Ks(te(this.path),this.affectedTree,this.revert)}}/**
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
 */class Gt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ge.OVERWRITE}operationForChild(e){return W(this.path)?new Gt(this.source,j(),this.snap.getImmediateChild(e)):new Gt(this.source,te(this.path),this.snap)}}/**
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
 */class rs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ge.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new Q(e));return n.isEmpty()?null:n.value?new Gt(this.source,j(),n.value):new rs(this.source,j(),n)}else return b(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new rs(this.source,te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Yt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Dg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Mg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Tg(o.childName,o.snapshotNode))}),Dn(t,i,"child_removed",e,s,n),Dn(t,i,"child_added",e,s,n),Dn(t,i,"child_moved",r,s,n),Dn(t,i,"child_changed",e,s,n),Dn(t,i,"value",e,s,n),i}function Dn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>Lg(t,l,c)),o.forEach(l=>{const c=Fg(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function Fg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Lg(t,e,n){if(e.childName==null||n.childName==null)throw Sn("Should only compare child_ events.");const s=new B(e.childName,e.snapshotNode),i=new B(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function yi(t,e){return{eventCache:t,serverCache:e}}function Hn(t,e,n,s){return yi(new Yt(e,n,s),t.serverCache)}function du(t,e,n,s){return yi(t.eventCache,new Yt(e,n,s))}function Er(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Qt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Vi;const Bg=()=>(Vi||(Vi=new Ne(w_)),Vi);class ne{constructor(e,n=Bg()){this.value=e,this.children=n}static fromObject(e){let n=new ne(null);return Ae(e,(s,i)=>{n=n.set(new Q(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:j(),value:this.value};if(W(e))return null;{const s=L(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(te(e),n);return r!=null?{path:de(new Q(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=L(e),s=this.children.get(n);return s!==null?s.subtree(te(e)):new ne(null)}}set(e,n){if(W(e))return new ne(n,this.children);{const s=L(e),r=(this.children.get(s)||new ne(null)).set(te(e),n),o=this.children.insert(s,r);return new ne(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new ne(null):new ne(null,this.children);{const n=L(e),s=this.children.get(n);if(s){const i=s.remove(te(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ne(null):new ne(this.value,r)}else return this}}get(e){if(W(e))return this.value;{const n=L(e),s=this.children.get(n);return s?s.get(te(e)):null}}setTree(e,n){if(W(e))return n;{const s=L(e),r=(this.children.get(s)||new ne(null)).setTree(te(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ne(this.value,o)}}fold(e){return this.fold_(j(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(de(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,j(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(W(e))return null;{const r=L(e),o=this.children.get(r);return o?o.findOnPath_(te(e),de(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,j(),n)}foreachOnPath_(e,n,s){if(W(e))return this;{this.value&&s(n,this.value);const i=L(e),r=this.children.get(i);return r?r.foreachOnPath_(te(e),de(n,i),s):new ne(null)}}foreach(e){this.foreach_(j(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(de(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Xe{constructor(e){this.writeTree_=e}static empty(){return new Xe(new ne(null))}}function Vn(t,e,n){if(W(e))return new Xe(new ne(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=xe(i,e);return r=r.updateChild(o,n),new Xe(t.writeTree_.set(i,r))}else{const i=new ne(n),r=t.writeTree_.setTree(e,i);return new Xe(r)}}}function Kl(t,e,n){let s=t;return Ae(n,(i,r)=>{s=Vn(s,de(e,i),r)}),s}function zl(t,e){if(W(e))return Xe.empty();{const n=t.writeTree_.setTree(e,new ne(null));return new Xe(n)}}function br(t,e){return Jt(t,e)!=null}function Jt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(xe(n.path,e)):null}function ql(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ae,(s,i)=>{e.push(new B(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new B(s,i.value))}),e}function wt(t,e){if(W(e))return t;{const n=Jt(t,e);return n!=null?new Xe(new ne(n)):new Xe(t.writeTree_.subtree(e))}}function wr(t){return t.writeTree_.isEmpty()}function bn(t,e){return pu(j(),t.writeTree_,e)}function pu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(b(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=pu(de(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(de(t,".priority"),s)),n}}/**
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
 */function ao(t,e){return yu(e,t)}function Ug(t,e,n,s,i){b(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Vn(t.visibleWrites,e,n)),t.lastWriteId=s}function Wg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Hg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);b(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Vg(l,s.path)?i=!1:qe(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return $g(t),!0;if(s.snap)t.visibleWrites=zl(t.visibleWrites,s.path);else{const l=s.children;Ae(l,c=>{t.visibleWrites=zl(t.visibleWrites,de(s.path,c))})}return!0}else return!1}function Vg(t,e){if(t.snap)return qe(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qe(de(t.path,n),e))return!0;return!1}function $g(t){t.visibleWrites=_u(t.allWrites,jg,j()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jg(t){return t.visible}function _u(t,e,n){let s=Xe.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)qe(n,o)?(l=xe(n,o),s=Vn(s,l,r.snap)):qe(o,n)&&(l=xe(o,n),s=Vn(s,j(),r.snap.getChild(l)));else if(r.children){if(qe(n,o))l=xe(n,o),s=Kl(s,l,r.children);else if(qe(o,n))if(l=xe(o,n),W(l))s=Kl(s,j(),r.children);else{const c=vn(r.children,L(l));if(c){const a=c.getChild(te(l));s=Vn(s,j(),a)}}}else throw Sn("WriteRecord should have .snap or .children")}}return s}function gu(t,e,n,s,i){if(!s&&!i){const r=Jt(t.visibleWrites,e);if(r!=null)return r;{const o=wt(t.visibleWrites,e);if(wr(o))return n;if(n==null&&!br(o,j()))return null;{const l=n||k.EMPTY_NODE;return bn(o,l)}}}else{const r=wt(t.visibleWrites,e);if(!i&&wr(r))return n;if(!i&&n==null&&!br(r,j()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(qe(a.path,e)||qe(e,a.path))},l=_u(t.allWrites,o,e),c=n||k.EMPTY_NODE;return bn(l,c)}}}function Kg(t,e,n){let s=k.EMPTY_NODE;const i=Jt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ae,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=wt(t.visibleWrites,e);return n.forEachChild(ae,(o,l)=>{const c=bn(wt(r,new Q(o)),l);s=s.updateImmediateChild(o,c)}),ql(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=wt(t.visibleWrites,e);return ql(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function zg(t,e,n,s,i){b(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=de(e,n);if(br(t.visibleWrites,r))return null;{const o=wt(t.visibleWrites,r);return wr(o)?i.getChild(n):bn(o,i.getChild(n))}}function qg(t,e,n,s){const i=de(e,n),r=Jt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=wt(t.visibleWrites,i);return bn(o,s.getNode().getImmediateChild(n))}else return null}function Gg(t,e){return Jt(t.visibleWrites,e)}function Yg(t,e,n,s,i,r,o){let l;const c=wt(t.visibleWrites,e),a=Jt(c,j());if(a!=null)l=a;else if(n!=null)l=bn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),d=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=d.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=d.getNext();return u}else return[]}function Qg(){return{visibleWrites:Xe.empty(),allWrites:[],lastWriteId:-1}}function zs(t,e,n,s){return gu(t.writeTree,t.treePath,e,n,s)}function uo(t,e){return Kg(t.writeTree,t.treePath,e)}function Gl(t,e,n,s){return zg(t.writeTree,t.treePath,e,n,s)}function qs(t,e){return Gg(t.writeTree,de(t.treePath,e))}function Xg(t,e,n,s,i,r){return Yg(t.writeTree,t.treePath,e,n,s,i,r)}function ho(t,e,n){return qg(t.writeTree,t.treePath,e,n)}function mu(t,e){return yu(de(t.treePath,e),t.writeTree)}function yu(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Jg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;b(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),b(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ns(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ts(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,En(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ns(s,e.snapshotNode,i.oldSnap));else throw Sn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Zg{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const vu=new Zg;class fo{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Yt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ho(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Qt(this.viewCache_),r=Xg(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function em(t){return{filter:t}}function tm(t,e){b(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),b(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function nm(t,e,n,s,i){const r=new Jg;let o,l;if(n.type===Ge.OVERWRITE){const a=n;a.source.fromUser?o=Ir(t,e,a.path,a.snap,s,i,r):(b(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!W(a.path),o=Gs(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===Ge.MERGE){const a=n;a.source.fromUser?o=im(t,e,a.path,a.children,s,i,r):(b(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Tr(t,e,a.path,a.children,s,i,l,r))}else if(n.type===Ge.ACK_USER_WRITE){const a=n;a.revert?o=lm(t,e,a.path,s,i,r):o=rm(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===Ge.LISTEN_COMPLETE)o=om(t,e,n.path,s,r);else throw Sn("Unknown operation type: "+n.type);const c=r.getChanges();return sm(e,o,c),{viewCache:o,changes:c}}function sm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Er(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(uu(Er(e)))}}function Cu(t,e,n,s,i,r){const o=e.eventCache;if(qs(s,n)!=null)return e;{let l,c;if(W(n))if(b(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=Qt(e),u=a instanceof k?a:k.EMPTY_NODE,h=uo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const a=zs(s,Qt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=L(n);if(a===".priority"){b(St(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Gl(s,n,u,c);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=te(n);let h;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const d=Gl(s,n,o.getNode(),c);d!=null?h=o.getNode().getImmediateChild(a).updateChild(u,d):h=o.getNode().getImmediateChild(a)}else h=ho(s,a,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),a,h,u,i,r):l=o.getNode()}}return Hn(e,l,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function Gs(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(W(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),g,null)}else{const g=L(n);if(!c.isCompleteForPath(n)&&St(n)>1)return e;const C=te(n),O=c.getNode().getImmediateChild(g).updateChild(C,s);g===".priority"?a=u.updatePriority(c.getNode(),O):a=u.updateChild(c.getNode(),g,O,C,vu,null)}const h=du(e,a,c.isFullyInitialized()||W(n),u.filtersNodes()),d=new fo(i,h,r);return Cu(t,h,n,i,d,l)}function Ir(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new fo(i,e,r);if(W(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Hn(e,a,!0,t.filter.filtersNodes());else{const h=L(n);if(h===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=Hn(e,a,l.isFullyInitialized(),l.isFiltered());else{const d=te(n),g=l.getNode().getImmediateChild(h);let C;if(W(d))C=s;else{const E=u.getCompleteChild(h);E!=null?tu(d)===".priority"&&E.getChild(su(d)).isEmpty()?C=E:C=E.updateChild(d,s):C=k.EMPTY_NODE}if(g.equals(C))c=e;else{const E=t.filter.updateChild(l.getNode(),h,C,d,u,o);c=Hn(e,E,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Yl(t,e){return t.eventCache.isCompleteForChild(e)}function im(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=de(n,c);Yl(e,L(u))&&(l=Ir(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=de(n,c);Yl(e,L(u))||(l=Ir(t,l,u,a,i,r,o))}),l}function Ql(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Tr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;W(n)?a=s:a=new ne(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),C=Ql(t,g,d);c=Gs(t,c,new Q(h),C,i,r,o,l)}}),a.children.inorderTraversal((h,d)=>{const g=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!g){const C=e.serverCache.getNode().getImmediateChild(h),E=Ql(t,C,d);c=Gs(t,c,new Q(h),E,i,r,o,l)}}),c}function rm(t,e,n,s,i,r,o){if(qs(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(W(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Gs(t,e,n,c.getNode().getChild(n),i,r,l,o);if(W(n)){let a=new ne(null);return c.getNode().forEachChild(dn,(u,h)=>{a=a.set(new Q(u),h)}),Tr(t,e,n,a,i,r,l,o)}else return e}else{let a=new ne(null);return s.foreach((u,h)=>{const d=de(n,u);c.isCompleteForPath(d)&&(a=a.set(u,c.getNode().getChild(d)))}),Tr(t,e,n,a,i,r,l,o)}}function om(t,e,n,s,i){const r=e.serverCache,o=du(e,r.getNode(),r.isFullyInitialized()||W(n),r.isFiltered());return Cu(t,o,n,s,vu,i)}function lm(t,e,n,s,i,r){let o;if(qs(s,n)!=null)return e;{const l=new fo(s,e,i),c=e.eventCache.getNode();let a;if(W(n)||L(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=zs(s,Qt(e));else{const h=e.serverCache.getNode();b(h instanceof k,"serverChildren would be complete if leaf node"),u=uo(s,h)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=L(n);let h=ho(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?a=t.filter.updateChild(c,u,h,te(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,k.EMPTY_NODE,te(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=zs(s,Qt(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||qs(s,j())!=null,Hn(e,a,o,t.filter.filtersNodes())}}/**
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
 */class cm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ro(s.getIndex()),r=xg(s);this.processor_=em(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(k.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(k.EMPTY_NODE,l.getNode(),null),u=new Yt(c,o.isFullyInitialized(),i.filtersNodes()),h=new Yt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=yi(h,u),this.eventGenerator_=new Dg(this.query_)}get query(){return this.query_}}function am(t){return t.viewCache_.serverCache.getNode()}function um(t,e){const n=Qt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function Xl(t){return t.eventRegistrations_.length===0}function hm(t,e){t.eventRegistrations_.push(e)}function Jl(t,e,n){const s=[];if(n){b(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Zl(t,e,n,s){e.type===Ge.MERGE&&e.source.queryId!==null&&(b(Qt(t.viewCache_),"We should always have a full cache before handling merges"),b(Er(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=nm(t.processor_,i,e,n,s);return tm(t.processor_,r.viewCache),b(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Eu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function fm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ae,(r,o)=>{s.push(En(r,o))}),n.isFullyInitialized()&&s.push(uu(n.getNode())),Eu(t,s,n.getNode(),e)}function Eu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Mg(t.eventGenerator_,e,n,i)}/**
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
 */let Ys;class dm{constructor(){this.views=new Map}}function pm(t){b(!Ys,"__referenceConstructor has already been defined"),Ys=t}function _m(){return b(Ys,"Reference.ts has not been loaded"),Ys}function gm(t){return t.views.size===0}function po(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return b(r!=null,"SyncTree gave us an op for an invalid query."),Zl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Zl(o,e,n,s));return r}}function mm(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=zs(n,i?s:null),c=!1;l?c=!0:s instanceof k?(l=uo(n,s),c=!1):(l=k.EMPTY_NODE,c=!1);const a=yi(new Yt(l,c,!1),new Yt(s,i,!1));return new cm(e,a)}return o}function ym(t,e,n,s,i,r){const o=mm(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),hm(o,n),fm(o,n)}function vm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=xt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(Jl(a,n,s)),Xl(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(Jl(c,n,s)),Xl(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!xt(t)&&r.push(new(_m())(e._repo,e._path)),{removed:r,events:o}}function bu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function pn(t,e){let n=null;for(const s of t.views.values())n=n||um(s,e);return n}function wu(t,e){if(e._queryParams.loadsAllData())return vi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Iu(t,e){return wu(t,e)!=null}function xt(t){return vi(t)!=null}function vi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Qs;function Cm(t){b(!Qs,"__referenceConstructor has already been defined"),Qs=t}function Em(){return b(Qs,"Reference.ts has not been loaded"),Qs}let bm=1;class ec{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ne(null),this.pendingWriteTree_=Qg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Tu(t,e,n,s,i){return Ug(t.pendingWriteTree_,e,n,s,i),i?ds(t,new Gt(fu(),e,n)):[]}function Ht(t,e,n=!1){const s=Wg(t.pendingWriteTree_,e);if(Hg(t.pendingWriteTree_,e)){let r=new ne(null);return s.snap!=null?r=r.set(j(),!0):Ae(s.children,o=>{r=r.set(new Q(o),!0)}),ds(t,new Ks(s.path,r,n))}else return[]}function Ci(t,e,n){return ds(t,new Gt(lo(),e,n))}function wm(t,e,n){const s=ne.fromObject(n);return ds(t,new rs(lo(),e,s))}function Im(t,e){return ds(t,new is(lo(),e))}function Tm(t,e,n){const s=go(t,n);if(s){const i=mo(s),r=i.path,o=i.queryId,l=xe(r,e),c=new is(co(o),l);return yo(t,r,c)}else return[]}function Sr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Iu(o,e))){const c=vm(o,e,n,s);gm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const u=a.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(d,g)=>xt(g));if(u&&!h){const d=t.syncPointTree_.subtree(r);if(!d.isEmpty()){const g=Nm(d);for(let C=0;C<g.length;++C){const E=g[C],O=E.query,U=Nu(t,E);t.listenProvider_.startListening($n(O),Xs(t,O),U.hashFn,U.onComplete)}}}!h&&a.length>0&&!s&&(u?t.listenProvider_.stopListening($n(e),null):a.forEach(d=>{const g=t.queryToTagMap.get(Ei(d));t.listenProvider_.stopListening($n(d),g)}))}Rm(t,a)}return l}function Sm(t,e,n,s){const i=go(t,s);if(i!=null){const r=mo(i),o=r.path,l=r.queryId,c=xe(o,e),a=new Gt(co(l),c,n);return yo(t,o,a)}else return[]}function xm(t,e,n,s){const i=go(t,s);if(i){const r=mo(i),o=r.path,l=r.queryId,c=xe(o,e),a=ne.fromObject(n),u=new rs(co(l),c,a);return yo(t,o,u)}else return[]}function tc(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(d,g)=>{const C=xe(d,i);r=r||pn(g,C),o=o||xt(g)});let l=t.syncPointTree_.get(i);l?(o=o||xt(l),r=r||pn(l,j())):(l=new dm,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=k.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,C)=>{const E=pn(C,j());E&&(r=r.updateImmediateChild(g,E))}));const a=Iu(l,e);if(!a&&!e._queryParams.loadsAllData()){const d=Ei(e);b(!t.queryToTagMap.has(d),"View does not exist, but we have a tag");const g=Am();t.queryToTagMap.set(d,g),t.tagToQueryMap.set(g,d)}const u=ao(t.pendingWriteTree_,i);let h=ym(l,e,n,u,r,c);if(!a&&!o&&!s){const d=wu(l,e);h=h.concat(km(t,e,d))}return h}function _o(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=xe(o,e),a=pn(l,c);if(a)return a});return gu(i,e,r,n,!0)}function ds(t,e){return Su(e,t.syncPointTree_,null,ao(t.pendingWriteTree_,j()))}function Su(t,e,n,s){if(W(t.path))return xu(t,e,n,s);{const i=e.get(j());n==null&&i!=null&&(n=pn(i,j()));let r=[];const o=L(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=mu(s,o);r=r.concat(Su(l,c,a,u))}return i&&(r=r.concat(po(i,t,s,n))),r}}function xu(t,e,n,s){const i=e.get(j());n==null&&i!=null&&(n=pn(i,j()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=mu(s,o),u=t.operationForChild(o);u&&(r=r.concat(xu(u,l,c,a)))}),i&&(r=r.concat(po(i,t,s,n))),r}function Nu(t,e){const n=e.query,s=Xs(t,n);return{hashFn:()=>(am(e)||k.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Tm(t,n._path,s):Im(t,n._path);{const r=S_(i,n);return Sr(t,n,null,r)}}}}function Xs(t,e){const n=Ei(e);return t.queryToTagMap.get(n)}function Ei(t){return t._path.toString()+"$"+t._queryIdentifier}function go(t,e){return t.tagToQueryMap.get(e)}function mo(t){const e=t.indexOf("$");return b(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Q(t.substr(0,e))}}function yo(t,e,n){const s=t.syncPointTree_.get(e);b(s,"Missing sync point for query tag that we're tracking");const i=ao(t.pendingWriteTree_,e);return po(s,n,i,null)}function Nm(t){return t.fold((e,n,s)=>{if(n&&xt(n))return[vi(n)];{let i=[];return n&&(i=bu(n)),Ae(s,(r,o)=>{i=i.concat(o)}),i}})}function $n(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Em())(t._repo,t._path):t}function Rm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ei(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Am(){return bm++}function km(t,e,n){const s=e._path,i=Xs(t,e),r=Nu(t,n),o=t.listenProvider_.startListening($n(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)b(!xt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,h)=>{if(!W(a)&&u&&xt(u))return[vi(u).query];{let d=[];return u&&(d=d.concat(bu(u).map(g=>g.query))),Ae(h,(g,C)=>{d=d.concat(C)}),d}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening($n(u),Xs(t,u))}}return o}/**
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
 */class vo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vo(n)}node(){return this.node_}}class Co{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new Co(this.syncTree_,n)}node(){return _o(this.syncTree_,this.path_)}}const Pm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},nc=function(t,e,n){if(!t||typeof t!="object")return t;if(b(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Om(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Dm(t[".sv"],e);b(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Om=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:b(!1,"Unexpected server value: "+t)}},Dm=function(t,e,n){t.hasOwnProperty("increment")||b(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&b(!1,"Unexpected increment value: "+s);const i=e.node();if(b(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Mm=function(t,e,n,s){return Eo(e,new Co(n,t),s)},Ru=function(t,e,n){return Eo(t,new vo(e),n)};function Eo(t,e,n){const s=t.getPriority().val(),i=nc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=nc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new _e(l,ye(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new _e(i))),o.forEachChild(ae,(l,c)=>{const a=Eo(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
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
 */class bo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function wo(t,e){let n=e instanceof Q?e:new Q(e),s=t,i=L(n);for(;i!==null;){const r=vn(s.node.children,i)||{children:{},childCount:0};s=new bo(i,s,r),n=te(n),i=L(n)}return s}function Rn(t){return t.node.value}function Au(t,e){t.node.value=e,xr(t)}function ku(t){return t.node.childCount>0}function Fm(t){return Rn(t)===void 0&&!ku(t)}function bi(t,e){Ae(t.node.children,(n,s)=>{e(new bo(n,t,s))})}function Pu(t,e,n,s){n&&!s&&e(t),bi(t,i=>{Pu(i,e,!0,s)}),n&&s&&e(t)}function Lm(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ps(t){return new Q(t.parent===null?t.name:ps(t.parent)+"/"+t.name)}function xr(t){t.parent!==null&&Bm(t.parent,t.name,t)}function Bm(t,e,n){const s=Fm(n),i=dt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,xr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,xr(t))}/**
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
 */const Um=/[\[\].#$\/\u0000-\u001F\u007F]/,Wm=/[\[\].#$\u0000-\u001F\u007F]/,$i=10*1024*1024,Ou=function(t){return typeof t=="string"&&t.length!==0&&!Um.test(t)},Du=function(t){return typeof t=="string"&&t.length!==0&&!Wm.test(t)},Hm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Du(t)},Vm=function(t,e,n,s){s&&e===void 0||Io(Qr(t,"value"),e,n)},Io=function(t,e,n){const s=n instanceof Q?new rg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Dt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Dt(s)+" with contents = "+e.toString());if(Da(e))throw new Error(t+"contains "+e.toString()+" "+Dt(s));if(typeof e=="string"&&e.length>$i/3&&gi(e)>$i)throw new Error(t+"contains a string greater than "+$i+" utf8 bytes "+Dt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ae(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ou(o)))throw new Error(t+" contains an invalid key ("+o+") "+Dt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);og(s,o),Io(t,l,s),lg(s)}),i&&r)throw new Error(t+' contains ".value" child '+Dt(s)+" in addition to actual children.")}},Mu=function(t,e,n,s){if(!(s&&n===void 0)&&!Du(n))throw new Error(Qr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$m=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Mu(t,e,n,s)},Fu=function(t,e){if(L(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},jm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ou(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Hm(n))throw new Error(Qr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Km{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function To(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!no(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Lu(t,e,n){To(t,n),Bu(t,s=>no(s,e))}function ht(t,e,n){To(t,n),Bu(t,s=>qe(s,e)||qe(e,s))}function Bu(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(zm(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function zm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Kt&&Ce("event: "+n.toString()),Nn(s)}}}/**
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
 */const qm="repo_interrupt",Gm=25;class Ym{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Km,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=js(),this.transactionQueueTree_=new bo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Qm(t,e,n){if(t.stats_=eo(t.repoInfo_),t.forceRestClient_||A_())t.server_=new $s(t.repoInfo_,(s,i,r,o)=>{sc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ic(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ct(t.repoInfo_,e,(s,i,r,o)=>{sc(t,s,i,r,o)},s=>{ic(t,s)},s=>{Jm(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=M_(t.repoInfo_,()=>new Og(t.stats_,t.server_)),t.infoData_=new Ng,t.infoSyncTree_=new ec({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Ci(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),xo(t,"connected",!1),t.serverSyncTree_=new ec({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);ht(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Xm(t){const n=t.infoData_.getNode(new Q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function So(t){return Pm({timestamp:Xm(t)})}function sc(t,e,n,s,i){t.dataUpdateCount++;const r=new Q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Ls(n,a=>ye(a));o=xm(t.serverSyncTree_,r,c,i)}else{const c=ye(n);o=Sm(t.serverSyncTree_,r,c,i)}else if(s){const c=Ls(n,a=>ye(a));o=wm(t.serverSyncTree_,r,c)}else{const c=ye(n);o=Ci(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=wi(t,r)),ht(t.eventQueue_,l,o)}function ic(t,e){xo(t,"connected",e),e===!1&&ey(t)}function Jm(t,e){Ae(e,(n,s)=>{xo(t,n,s)})}function xo(t,e,n){const s=new Q("/.info/"+e),i=ye(n);t.infoData_.updateSnapshot(s,i);const r=Ci(t.infoSyncTree_,s,i);ht(t.eventQueue_,s,r)}function Uu(t){return t.nextWriteId_++}function Zm(t,e,n,s,i){No(t,"set",{path:e.toString(),value:n,priority:s});const r=So(t),o=ye(n,s),l=_o(t.serverSyncTree_,e),c=Ru(o,l,r),a=Uu(t),u=Tu(t.serverSyncTree_,e,c,a,!0);To(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(d,g)=>{const C=d==="ok";C||Re("set at "+e+" failed: "+d);const E=Ht(t.serverSyncTree_,a,!C);ht(t.eventQueue_,e,E),sy(t,i,d,g)});const h=ju(t,e);wi(t,h),ht(t.eventQueue_,h,[])}function ey(t){No(t,"onDisconnectEvents");const e=So(t),n=js();Cr(t.onDisconnect_,j(),(i,r)=>{const o=Mm(i,r,t.serverSyncTree_,e);hu(n,i,o)});let s=[];Cr(n,j(),(i,r)=>{s=s.concat(Ci(t.serverSyncTree_,i,r));const o=ju(t,i);wi(t,o)}),t.onDisconnect_=js(),ht(t.eventQueue_,j(),s)}function ty(t,e,n){let s;L(e._path)===".info"?s=tc(t.infoSyncTree_,e,n):s=tc(t.serverSyncTree_,e,n),Lu(t.eventQueue_,e._path,s)}function rc(t,e,n){let s;L(e._path)===".info"?s=Sr(t.infoSyncTree_,e,n):s=Sr(t.serverSyncTree_,e,n),Lu(t.eventQueue_,e._path,s)}function ny(t){t.persistentConnection_&&t.persistentConnection_.interrupt(qm)}function No(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function sy(t,e,n,s){e&&Nn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Wu(t,e,n){return _o(t.serverSyncTree_,e,n)||k.EMPTY_NODE}function Ro(t,e=t.transactionQueueTree_){if(e||Ii(t,e),Rn(e)){const n=Vu(t,e);b(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&iy(t,ps(e),n)}else ku(e)&&bi(e,n=>{Ro(t,n)})}function iy(t,e,n){const s=n.map(a=>a.currentWriteId),i=Wu(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];b(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=xe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{No(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const h=[];for(let d=0;d<n.length;d++)n[d].status=2,u=u.concat(Ht(t.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&h.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();Ii(t,wo(t.transactionQueueTree_,e)),Ro(t,t.transactionQueueTree_),ht(t.eventQueue_,e,u);for(let d=0;d<h.length;d++)Nn(h[d])}else{if(a==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Re("transaction at "+c.toString()+" failed: "+a);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=a}wi(t,e)}},o)}function wi(t,e){const n=Hu(t,e),s=ps(n),i=Vu(t,n);return ry(t,i,s),s}function ry(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=xe(n,c.path);let u=!1,h;if(b(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Ht(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Gm)u=!0,h="maxretry",i=i.concat(Ht(t.serverSyncTree_,c.currentWriteId,!0));else{const d=Wu(t,c.path,o);c.currentInputSnapshot=d;const g=e[l].update(d.val());if(g!==void 0){Io("transaction failed: Data returned ",g,c.path);let C=ye(g);typeof g=="object"&&g!=null&&dt(g,".priority")||(C=C.updatePriority(d.getPriority()));const O=c.currentWriteId,U=So(t),he=Ru(C,d,U);c.currentOutputSnapshotRaw=C,c.currentOutputSnapshotResolved=he,c.currentWriteId=Uu(t),o.splice(o.indexOf(O),1),i=i.concat(Tu(t.serverSyncTree_,c.path,he,c.currentWriteId,c.applyLocally)),i=i.concat(Ht(t.serverSyncTree_,O,!0))}else u=!0,h="nodata",i=i.concat(Ht(t.serverSyncTree_,c.currentWriteId,!0))}ht(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(d){setTimeout(d,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Ii(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Nn(s[l]);Ro(t,t.transactionQueueTree_)}function Hu(t,e){let n,s=t.transactionQueueTree_;for(n=L(e);n!==null&&Rn(s)===void 0;)s=wo(s,n),e=te(e),n=L(e);return s}function Vu(t,e){const n=[];return $u(t,e,n),n.sort((s,i)=>s.order-i.order),n}function $u(t,e,n){const s=Rn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);bi(e,i=>{$u(t,i,n)})}function Ii(t,e){const n=Rn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Au(e,n.length>0?n:void 0)}bi(e,s=>{Ii(t,s)})}function ju(t,e){const n=ps(Hu(t,e)),s=wo(t.transactionQueueTree_,e);return Lm(s,i=>{ji(t,i)}),ji(t,s),Pu(s,i=>{ji(t,i)}),n}function ji(t,e){const n=Rn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(b(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(b(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ht(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Au(e,void 0):n.length=r+1,ht(t.eventQueue_,ps(e),i);for(let o=0;o<s.length;o++)Nn(s[o])}}/**
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
 */function oy(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ly(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Re(`Invalid query segment '${n}' in query '${t}'`)}return e}const oc=function(t,e){const n=cy(t),s=n.namespace;n.domain==="firebase.com"&&ut(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ut("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||E_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new za(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Q(n.pathString)}},cy=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=oy(t.substring(u,h)));const d=ly(t.substring(Math.min(t.length,h)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const g=e.slice(0,a);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const C=e.indexOf(".");s=e.substring(0,C).toLowerCase(),n=e.substring(C+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class ay{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return b(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ao{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return W(this._path)?null:tu(this._path)}get ref(){return new pt(this._repo,this._path)}get _queryIdentifier(){const e=$l(this._queryParams),n=Jr(e);return n==="{}"?"default":n}get _queryObject(){return $l(this._queryParams)}isEqual(e){if(e=as(e),!(e instanceof Ao))return!1;const n=this._repo===e._repo,s=no(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ig(this._path)}}class pt extends Ao{constructor(e,n){super(e,n,new oo,!1)}get parent(){const e=su(this._path);return e===null?null:new pt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class os{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Q(e),s=Js(this.ref,e);return new os(this._node.getChild(n),s,ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new os(i,Js(this.ref,s),ae)))}hasChild(e){const n=new Q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Nr(t,e){return t=as(t),t._checkNotDeleted("ref"),e!==void 0?Js(t._root,e):t._root}function Js(t,e){return t=as(t),L(t._path)===null?$m("child","path",e,!1):Mu("child","path",e,!1),new pt(t._repo,de(t._path,e))}function uy(t){return Fu("remove",t._path),Rr(t,null)}function Rr(t,e){t=as(t),Fu("set",t._path),Vm("set",e,t._path,!1);const n=new _i;return Zm(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class ko{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Ku("value",this,new os(e.snapshotNode,new pt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zu(this,e,n):null}matches(e){return e instanceof ko?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Po{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zu(this,e,n):null}createEvent(e,n){b(e.childName!=null,"Child events should have a childName.");const s=Js(new pt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Ku(e.type,this,new os(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Po?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function hy(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,a=(u,h)=>{rc(t._repo,t,l),c(u,h)};a.userCallback=n.userCallback,a.context=n.context,n=a}const o=new ay(n,r||void 0),l=e==="value"?new ko(o):new Po(e,o);return ty(t._repo,t,l),()=>rc(t._repo,t,l)}function fy(t,e,n,s){return hy(t,"value",e,n,s)}pm(pt);Cm(pt);/**
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
 */const dy="FIREBASE_DATABASE_EMULATOR_HOST",Ar={};let py=!1;function _y(t,e,n,s){t.repoInfo_=new za(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),s&&(t.authTokenProvider_=s)}function gy(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ut("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=oc(r,i),l=o.repoInfo,c,a;typeof process<"u"&&process.env&&(a=process.env[dy]),a?(c=!0,r=`http://${a}?ns=${l.namespace}`,o=oc(r,i),l=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new fn(fn.OWNER):new P_(t.name,t.options,e);jm("Invalid Firebase Database URL",o),W(o.path)||ut("Database URL must point to the root of a Firebase Database (not including a child path).");const h=yy(l,t,u,new k_(t.name,n));return new vy(h,t)}function my(t,e){const n=Ar[e];(!n||n[t.key]!==t)&&ut(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ny(t),delete n[t.key]}function yy(t,e,n,s){let i=Ar[e.name];i||(i={},Ar[e.name]=i);let r=i[t.toURLString()];return r&&ut("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Ym(t,py,n,s),i[t.toURLString()]=r,r}class vy{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Qm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new pt(this._repo,j())),this._rootInternal}_delete(){return this._rootInternal!==null&&(my(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ut("Cannot call "+e+" on a deleted database.")}}function Cy(t=o_(),e){const n=n_(t,"database").getImmediate({identifier:e}),s=Xd("database");return s&&Ey(n,...s),n}function Ey(t,e,n,s={}){t=as(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ut("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ut('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new fn(fn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Zd(s.mockUserToken,t.app.options.projectId);r=new fn(o)}_y(i,e,n,r)}/**
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
 */function by(t){g_(r_),Us(new Jn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return gy(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),un(Sl,xl,t),un(Sl,xl,"esm2017")}ct.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ct.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};by();var wy="firebase",Iy="9.15.0";/**
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
 */un(wy,Iy,"app");const Ty={apiKey:"AIzaSyDYbAbripgwbZKFfTCSqXzu116Lde_kwnE",authDomain:"todomvc-app-template-test.firebaseapp.com",databaseURL:"https://todomvc-app-template-test-default-rtdb.firebaseio.com",projectId:"todomvc-app-template-test",storageBucket:"todomvc-app-template-test.appspot.com",messagingSenderId:"492184533263",appId:"1:492184533263:web:d98c399c38d7f0c593667a"},Sy=Na(Ty),kr=Cy(Sy),lc=Nr(kr,"todos");var lt=(t=>(t[t.UNSORTED=0]="UNSORTED",t[t.ASCENDING=1]="ASCENDING",t[t.DESCENDING=2]="DESCENDING",t))(lt||{});function Ts(t,e){return{checked:!1,message:t,id:e,key:e}}function xy(t,e,n){switch(n){case lt.ASCENDING:return t.checked===e.checked?0:t.checked?1:-1;case lt.DESCENDING:return t.checked===e.checked?0:t.checked?-1:1;case lt.UNSORTED:return t.id===e.id?0:t.id>e.id?1:-1}}function Ny(t){const e=t.val()&&Object.entries(t.val()).map(([n,s])=>(s.key=parseInt(n),s));return(e==null?void 0:e.filter(n=>n!==void 0))??[]}function Ry(){return[Ts("Welcome to TodoMVC",0),Ts("This is a sample todo",1),Ts("Click on the words to edit a todo",2),Ts("Click on the X to delete a todo",3)]}const qu=Ld("todos",{state:()=>({_displayedTodos:[],_filter:"all",_sort:lt.UNSORTED,maxId:0}),getters:{todos:t=>{if(!t._displayedTodos)return;const e=t._displayedTodos;switch(e.sort((n,s)=>xy(n,s,t._sort)),t._filter){case"unchecked":return e.filter(n=>!n.checked);case"checked":return e.filter(n=>n.checked);default:return e}},tasksLeft:t=>{var e;return((e=t._displayedTodos)==null?void 0:e.filter(n=>!n.checked).length)??0},filter:t=>t._filter},actions:{destroyTodo(t){const e=Nr(kr,"todos/"+t.key);uy(e).then(()=>{}).catch(n=>{console.warn(`Todo ${t.id} could not be saved.`,n)})},clearCompleted(){this._displayedTodos&&(this._displayedTodos=this._displayedTodos.filter(t=>!t.checked),this.saveAllTodos())},loadData(){fy(lc,t=>{this._displayedTodos=Ny(t);const e=this._displayedTodos.reduce((n,s)=>s.id>n?s.id:n,0);this.maxId=e+1})},setFilter(t){this._filter=t},setSort(t){this._sort=t},updateTodo(t){if(!this._displayedTodos)return;const e=this._displayedTodos.findIndex(n=>t.id===n.id);this._displayedTodos[e]=t,this.saveTodo(t)},addTodo(t){var n,s;const e={checked:!1,message:t,id:this.maxId++,key:(((n=this._displayedTodos)==null?void 0:n.reduce((i,r)=>(r.key>i,r.key),0))??-1)+1};(s=this._displayedTodos)==null||s.push(e),this.saveTodo(e)},saveAllTodos(){var t;(t=this._displayedTodos)==null||t.forEach((e,n)=>{e.key=n}),Rr(lc,this._displayedTodos).then(()=>{}).catch(e=>{console.warn("Data could not be saved."+e)})},saveTodo(t){const e=Nr(kr,"todos/"+t.key);Rr(e,t).then(()=>{}).catch(n=>{console.warn(`Todo ${t.key} could not be saved.`,n)})},loadOnboardingTodos(){this._displayedTodos=Ry(),this.saveAllTodos()}}}),Ay={class:"background"},ky=ci({__name:"EmptyTodos",setup(t){const e=qu();function n(){e.loadOnboardingTodos()}return(s,i)=>(rt(),an("div",Ay,[re("p",{class:"message",onClick:n},"Load new onboarding Todos?")]))}});const Oo=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Py=Oo(ky,[["__scopeId","data-v-f0980a39"]]),Oy=t=>(Uc("data-v-d98de8e2"),t=t(),Wc(),t),Dy={class:"view"},My=Oy(()=>re("input",{class:"edit",value:"Create a TodoMVC template"},null,-1)),Fy=ci({__name:"Todo",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue","destroyTodo"],setup(t,{emit:e}){const n=t,s=$t(n.modelValue.checked),i=$t(n.modelValue.message);cn(()=>n.modelValue,l=>{l.checked!==s.value&&(s.value=l.checked),l.message!==i.value&&(i.value=l.message)}),cn(()=>i.value,l=>{const c=n.modelValue;c.message=l,e("update:modelValue",c)});function r(){const l=n.modelValue;l.checked=n.modelValue.checked,s.value=n.modelValue.checked,e("update:modelValue",l)}function o(){e("destroyTodo")}return(l,c)=>(rt(),an("li",null,[re("div",Dy,[Zi(re("input",{"onUpdate:modelValue":[c[0]||(c[0]=a=>n.modelValue.checked=a),r],class:"toggle",title:"click to toggle checked",type:"checkbox"},null,512),[[wd,n.modelValue.checked]]),re("label",null,[Zi(re("input",{"onUpdate:modelValue":c[1]||(c[1]=a=>oe(i)?i.value=a:null),type:"text",class:wn({completed:ce(s)})},null,2),[[ua,ce(i)]])]),re("button",{class:"destroy",title:"delete todo",onClick:o})]),My]))}});const Ly=Oo(Fy,[["__scopeId","data-v-d98de8e2"]]),Gu=t=>(Uc("data-v-6ac56848"),t=t(),Wc(),t),By={class:"todoapp"},Uy={class:"header"},Wy=Gu(()=>re("h1",null,"Jared's Todos",-1)),Hy=["onKeypress"],Vy={class:"main"},$y=Gu(()=>re("input",{id:"sort-todos",class:"toggle-all",type:"checkbox"},null,-1)),jy={key:0,class:"todo-list"},Ky={class:"footer"},zy={class:"todo-count"},qy={class:"filters"},Gy=ci({__name:"App",setup(t){const e=qu();e.loadData(),$t(0);const n=$t(lt.UNSORTED),s=$t("");function i(u){e.destroyTodo(u)}function r(){e.clearCompleted()}function o(u){e.setFilter(u)}function l(){n.value=(n.value+1)%3,e.setSort(n.value)}function c(){setTimeout(()=>{e.addTodo(s.value),s.value=""},1e3)}function a(u){e.updateTodo(u)}return(u,h)=>{const d=Ly,g=Py,C=Bd;return rt(),an("section",By,[re("header",Uy,[Wy,Zi(re("input",{type:"text","onUpdate:modelValue":h[0]||(h[0]=E=>oe(s)?s.value=E:null),class:"new-todo",placeholder:"What needs to be done?",autofocus:"",onKeypress:Sd(c,["enter"])},null,40,Hy),[[ua,ce(s)]])]),re("section",Vy,[$y,re("label",{for:"sort-todos",title:"Sort todos",class:wn(["sort-arrow",{"sort-arrow-right":ce(n)===ce(lt).UNSORTED,"sort-arrow-up":ce(n)===ce(lt).ASCENDING,"sort-arrow-down":ce(n)===ce(lt).DESCENDING}]),onClick:l},"Sort todos",2),ce(e).todos?(rt(),an("ul",jy,[(rt(!0),an($e,null,Tf(ce(e).todos,E=>(rt(),rr(d,{key:E.id,modelValue:ce(e).todos[ce(e).todos.findIndex(O=>E.id===O.id)],"onUpdate:modelValue":[O=>ce(e).todos[ce(e).todos.findIndex(U=>E.id===U.id)]=O,O=>a(E)],onDestroyTodo:O=>i(E)},null,8,["modelValue","onUpdate:modelValue","onDestroyTodo"]))),128)),ce(e).todos.length===0?(rt(),rr(g,{key:0})):il("",!0)])):il("",!0)]),re("footer",Ky,[re("span",zy,[re("strong",null,Ki(ce(e).tasksLeft),1),ra(" item"+Ki(ce(e).tasksLeft===1?"":"s")+" left",1)]),re("ul",qy,[re("li",null,[Ue(C,{type:"button",active:ce(e).filter==="all",label:{displayText:"All",value:"all"},onClick:o},null,8,["active"])]),re("li",null,[Ue(C,{type:"button",active:ce(e).filter==="unchecked",label:{displayText:"Unchecked",value:"unchecked"},onClick:o},null,8,["active"])]),re("li",null,[Ue(C,{type:"button",active:ce(e).filter==="checked",label:{displayText:"Checked",value:"checked"},onClick:o},null,8,["active"])])]),re("button",{type:"button",class:"clear-completed",onClick:r}," Clear completed ")])])}}});const Yy=Oo(Gy,[["__scopeId","data-v-6ac56848"]]),Yu=Rd(Yy),Qy=Pd();Yu.use(Qy);Yu.mount("#app");
