(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Dr(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Or(t){if(O(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=pe(s)?th(s):Or(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(pe(t))return t;if(ie(t))return t}}const Ju=/;(?![^(]*\))/g,Zu=/:([^]+)/,eh=/\/\*.*?\*\//gs;function th(t){const e={};return t.replace(eh,"").split(Ju).forEach(n=>{if(n){const s=n.split(Zu);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function wn(t){let e="";if(pe(t))e=t;else if(O(t))for(let n=0;n<t.length;n++){const s=wn(t[n]);s&&(e+=s+" ")}else if(ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const nh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sh=Dr(nh);function cc(t){return!!t||t===""}function ih(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Zs(t[s],e[s]);return n}function Zs(t,e){if(t===e)return!0;let n=Uo(t),s=Uo(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=jn(t),s=jn(e),n||s)return t===e;if(n=O(t),s=O(e),n||s)return n&&s?ih(t,e):!1;if(n=ie(t),s=ie(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(l&&!c||!l&&c||!Zs(t[o],e[o]))return!1}}return String(t)===String(e)}function ac(t,e){return t.findIndex(n=>Zs(n,e))}const Ki=t=>pe(t)?t:t==null?"":O(t)||ie(t)&&(t.toString===dc||!F(t.toString))?JSON.stringify(t,uc,2):String(t),uc=(t,e)=>e&&e.__v_isRef?uc(t,e.value):on(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:ti(e)?{[`Set(${e.size})`]:[...e.values()]}:ie(e)&&!O(e)&&!fc(e)?String(e):e,se={},rn=[],Qe=()=>{},rh=()=>!1,oh=/^on[^a-z]/,ei=t=>oh.test(t),Pr=t=>t.startsWith("onUpdate:"),be=Object.assign,Mr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},lh=Object.prototype.hasOwnProperty,V=(t,e)=>lh.call(t,e),O=Array.isArray,on=t=>ls(t)==="[object Map]",ti=t=>ls(t)==="[object Set]",Uo=t=>ls(t)==="[object Date]",F=t=>typeof t=="function",pe=t=>typeof t=="string",jn=t=>typeof t=="symbol",ie=t=>t!==null&&typeof t=="object",hc=t=>ie(t)&&F(t.then)&&F(t.catch),dc=Object.prototype.toString,ls=t=>dc.call(t),ch=t=>ls(t).slice(8,-1),fc=t=>ls(t)==="[object Object]",Fr=t=>pe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ss=Dr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ni=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ah=/-(\w)/g,_n=ni(t=>t.replace(ah,(e,n)=>n?n.toUpperCase():"")),uh=/\B([A-Z])/g,Xt=ni(t=>t.replace(uh,"-$1").toLowerCase()),pc=ni(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ni=ni(t=>t?`on${pc(t)}`:""),Kn=(t,e)=>!Object.is(t,e),Ns=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},As=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ks=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Wo;const hh=()=>Wo||(Wo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let De;class _c{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=De,!e&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}run(e){if(this.active){const n=De;try{return De=this,e()}finally{De=n}}}on(){De=this}off(){De=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}}}function gc(t){return new _c(t)}function dh(t,e=De){e&&e.active&&e.effects.push(t)}function fh(){return De}function ph(t){De&&De.cleanups.push(t)}const Lr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},mc=t=>(t.w&It)>0,yc=t=>(t.n&It)>0,_h=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=It},gh=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];mc(i)&&!yc(i)?i.delete(t):e[n++]=i,i.w&=~It,i.n&=~It}e.length=n}},zi=new WeakMap;let Mn=0,It=1;const qi=30;let Ke;const Vt=Symbol(""),Gi=Symbol("");class Br{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,dh(this,s)}run(){if(!this.active)return this.fn();let e=Ke,n=yt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ke,Ke=this,yt=!0,It=1<<++Mn,Mn<=qi?_h(this):Ho(this),this.fn()}finally{Mn<=qi&&gh(this),It=1<<--Mn,Ke=this.parent,yt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ke===this?this.deferStop=!0:this.active&&(Ho(this),this.onStop&&this.onStop(),this.active=!1)}}function Ho(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let yt=!0;const vc=[];function In(){vc.push(yt),yt=!1}function Tn(){const t=vc.pop();yt=t===void 0?!0:t}function Oe(t,e,n){if(yt&&Ke){let s=zi.get(t);s||zi.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Lr()),Cc(i)}}function Cc(t,e){let n=!1;Mn<=qi?yc(t)||(t.n|=It,n=!mc(t)):n=!t.has(Ke),n&&(t.add(Ke),Ke.deps.push(t))}function at(t,e,n,s,i,r){const o=zi.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&O(t)){const c=ks(s);o.forEach((a,u)=>{(u==="length"||u>=c)&&l.push(a)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":O(t)?Fr(n)&&l.push(o.get("length")):(l.push(o.get(Vt)),on(t)&&l.push(o.get(Gi)));break;case"delete":O(t)||(l.push(o.get(Vt)),on(t)&&l.push(o.get(Gi)));break;case"set":on(t)&&l.push(o.get(Vt));break}if(l.length===1)l[0]&&Yi(l[0]);else{const c=[];for(const a of l)a&&c.push(...a);Yi(Lr(c))}}function Yi(t,e){const n=O(t)?t:[...t];for(const s of n)s.computed&&Vo(s);for(const s of n)s.computed||Vo(s)}function Vo(t,e){(t!==Ke||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const mh=Dr("__proto__,__v_isRef,__isVue"),Ec=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jn)),yh=Ur(),vh=Ur(!1,!0),Ch=Ur(!0),$o=Eh();function Eh(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=j(this);for(let r=0,o=this.length;r<o;r++)Oe(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(j)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){In();const s=j(this)[e].apply(this,n);return Tn(),s}}),t}function Ur(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?Lh:Sc:e?Tc:Ic).get(s))return s;const o=O(s);if(!t&&o&&V($o,i))return Reflect.get($o,i,r);const l=Reflect.get(s,i,r);return(jn(i)?Ec.has(i):mh(i))||(t||Oe(s,"get",i),e)?l:le(l)?o&&Fr(i)?l:l.value:ie(l)?t?Nc(l):ii(l):l}}const bh=bc(),wh=bc(!0);function bc(t=!1){return function(n,s,i,r){let o=n[s];if(gn(o)&&le(o)&&!le(i))return!1;if(!t&&(!Ds(i)&&!gn(i)&&(o=j(o),i=j(i)),!O(n)&&le(o)&&!le(i)))return o.value=i,!0;const l=O(n)&&Fr(s)?Number(s)<n.length:V(n,s),c=Reflect.set(n,s,i,r);return n===j(r)&&(l?Kn(i,o)&&at(n,"set",s,i):at(n,"add",s,i)),c}}function Ih(t,e){const n=V(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&at(t,"delete",e,void 0),s}function Th(t,e){const n=Reflect.has(t,e);return(!jn(e)||!Ec.has(e))&&Oe(t,"has",e),n}function Sh(t){return Oe(t,"iterate",O(t)?"length":Vt),Reflect.ownKeys(t)}const wc={get:yh,set:bh,deleteProperty:Ih,has:Th,ownKeys:Sh},Nh={get:Ch,set(t,e){return!0},deleteProperty(t,e){return!0}},xh=be({},wc,{get:vh,set:wh}),Wr=t=>t,si=t=>Reflect.getPrototypeOf(t);function ms(t,e,n=!1,s=!1){t=t.__v_raw;const i=j(t),r=j(e);n||(e!==r&&Oe(i,"get",e),Oe(i,"get",r));const{has:o}=si(i),l=s?Wr:n?$r:zn;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function ys(t,e=!1){const n=this.__v_raw,s=j(n),i=j(t);return e||(t!==i&&Oe(s,"has",t),Oe(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function vs(t,e=!1){return t=t.__v_raw,!e&&Oe(j(t),"iterate",Vt),Reflect.get(t,"size",t)}function jo(t){t=j(t);const e=j(this);return si(e).has.call(e,t)||(e.add(t),at(e,"add",t,t)),this}function Ko(t,e){e=j(e);const n=j(this),{has:s,get:i}=si(n);let r=s.call(n,t);r||(t=j(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Kn(e,o)&&at(n,"set",t,e):at(n,"add",t,e),this}function zo(t){const e=j(this),{has:n,get:s}=si(e);let i=n.call(e,t);i||(t=j(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&at(e,"delete",t,void 0),r}function qo(){const t=j(this),e=t.size!==0,n=t.clear();return e&&at(t,"clear",void 0,void 0),n}function Cs(t,e){return function(s,i){const r=this,o=r.__v_raw,l=j(o),c=e?Wr:t?$r:zn;return!t&&Oe(l,"iterate",Vt),o.forEach((a,u)=>s.call(i,c(a),c(u),r))}}function Es(t,e,n){return function(...s){const i=this.__v_raw,r=j(i),o=on(r),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,a=i[t](...s),u=n?Wr:e?$r:zn;return!e&&Oe(r,"iterate",c?Gi:Vt),{next(){const{value:h,done:f}=a.next();return f?{value:h,done:f}:{value:l?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function _t(t){return function(...e){return t==="delete"?!1:this}}function Rh(){const t={get(r){return ms(this,r)},get size(){return vs(this)},has:ys,add:jo,set:Ko,delete:zo,clear:qo,forEach:Cs(!1,!1)},e={get(r){return ms(this,r,!1,!0)},get size(){return vs(this)},has:ys,add:jo,set:Ko,delete:zo,clear:qo,forEach:Cs(!1,!0)},n={get(r){return ms(this,r,!0)},get size(){return vs(this,!0)},has(r){return ys.call(this,r,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:Cs(!0,!1)},s={get(r){return ms(this,r,!0,!0)},get size(){return vs(this,!0)},has(r){return ys.call(this,r,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:Cs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Es(r,!1,!1),n[r]=Es(r,!0,!1),e[r]=Es(r,!1,!0),s[r]=Es(r,!0,!0)}),[t,n,e,s]}const[Ah,kh,Dh,Oh]=Rh();function Hr(t,e){const n=e?t?Oh:Dh:t?kh:Ah;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(V(n,i)&&i in s?n:s,i,r)}const Ph={get:Hr(!1,!1)},Mh={get:Hr(!1,!0)},Fh={get:Hr(!0,!1)},Ic=new WeakMap,Tc=new WeakMap,Sc=new WeakMap,Lh=new WeakMap;function Bh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Uh(t){return t.__v_skip||!Object.isExtensible(t)?0:Bh(ch(t))}function ii(t){return gn(t)?t:Vr(t,!1,wc,Ph,Ic)}function Wh(t){return Vr(t,!1,xh,Mh,Tc)}function Nc(t){return Vr(t,!0,Nh,Fh,Sc)}function Vr(t,e,n,s,i){if(!ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Uh(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function vt(t){return gn(t)?vt(t.__v_raw):!!(t&&t.__v_isReactive)}function gn(t){return!!(t&&t.__v_isReadonly)}function Ds(t){return!!(t&&t.__v_isShallow)}function xc(t){return vt(t)||gn(t)}function j(t){const e=t&&t.__v_raw;return e?j(e):t}function mn(t){return As(t,"__v_skip",!0),t}const zn=t=>ie(t)?ii(t):t,$r=t=>ie(t)?Nc(t):t;function Rc(t){yt&&Ke&&(t=j(t),Cc(t.dep||(t.dep=Lr())))}function Ac(t,e){t=j(t),t.dep&&Yi(t.dep)}function le(t){return!!(t&&t.__v_isRef===!0)}function $t(t){return Hh(t,!1)}function Hh(t,e){return le(t)?t:new Vh(t,e)}class Vh{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:j(e),this._value=n?e:zn(e)}get value(){return Rc(this),this._value}set value(e){const n=this.__v_isShallow||Ds(e)||gn(e);e=n?e:j(e),Kn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:zn(e),Ac(this))}}function ae(t){return le(t)?t.value:t}const $h={get:(t,e,n)=>ae(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return le(i)&&!le(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function kc(t){return vt(t)?t:new Proxy(t,$h)}function jh(t){const e=O(t)?new Array(t.length):{};for(const n in t)e[n]=zh(t,n);return e}class Kh{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function zh(t,e,n){const s=t[e];return le(s)?s:new Kh(t,e,n)}var Dc;class qh{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Dc]=!1,this._dirty=!0,this.effect=new Br(e,()=>{this._dirty||(this._dirty=!0,Ac(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=j(this);return Rc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Dc="__v_isReadonly";function Gh(t,e,n=!1){let s,i;const r=F(t);return r?(s=t,i=Qe):(s=t.get,i=t.set),new qh(s,i,r||!i,n)}function Ct(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){ri(r,e,n)}return i}function Ue(t,e,n,s){if(F(t)){const r=Ct(t,e,n,s);return r&&hc(r)&&r.catch(o=>{ri(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ue(t[r],e,n,s));return i}function ri(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=n;for(;r;){const a=r.ec;if(a){for(let u=0;u<a.length;u++)if(a[u](t,o,l)===!1)return}r=r.parent}const c=e.appContext.config.errorHandler;if(c){Ct(c,null,10,[t,o,l]);return}}Yh(t,n,i,s)}function Yh(t,e,n,s=!0){console.error(t)}let qn=!1,Qi=!1;const Ee=[];let st=0;const ln=[];let rt=null,Mt=0;const Oc=Promise.resolve();let jr=null;function Pc(t){const e=jr||Oc;return t?e.then(this?t.bind(this):t):e}function Qh(t){let e=st+1,n=Ee.length;for(;e<n;){const s=e+n>>>1;Gn(Ee[s])<t?e=s+1:n=s}return e}function Kr(t){(!Ee.length||!Ee.includes(t,qn&&t.allowRecurse?st+1:st))&&(t.id==null?Ee.push(t):Ee.splice(Qh(t.id),0,t),Mc())}function Mc(){!qn&&!Qi&&(Qi=!0,jr=Oc.then(Lc))}function Xh(t){const e=Ee.indexOf(t);e>st&&Ee.splice(e,1)}function Jh(t){O(t)?ln.push(...t):(!rt||!rt.includes(t,t.allowRecurse?Mt+1:Mt))&&ln.push(t),Mc()}function Go(t,e=qn?st+1:0){for(;e<Ee.length;e++){const n=Ee[e];n&&n.pre&&(Ee.splice(e,1),e--,n())}}function Fc(t){if(ln.length){const e=[...new Set(ln)];if(ln.length=0,rt){rt.push(...e);return}for(rt=e,rt.sort((n,s)=>Gn(n)-Gn(s)),Mt=0;Mt<rt.length;Mt++)rt[Mt]();rt=null,Mt=0}}const Gn=t=>t.id==null?1/0:t.id,Zh=(t,e)=>{const n=Gn(t)-Gn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Lc(t){Qi=!1,qn=!0,Ee.sort(Zh);const e=Qe;try{for(st=0;st<Ee.length;st++){const n=Ee[st];n&&n.active!==!1&&Ct(n,null,14)}}finally{st=0,Ee.length=0,Fc(),qn=!1,jr=null,(Ee.length||ln.length)&&Lc()}}function ed(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||se;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||se;f&&(i=n.map(g=>pe(g)?g.trim():g)),h&&(i=n.map(ks))}let l,c=s[l=Ni(e)]||s[l=Ni(_n(e))];!c&&r&&(c=s[l=Ni(Xt(e))]),c&&Ue(c,t,6,i);const a=s[l+"Once"];if(a){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Ue(a,t,6,i)}}function Bc(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!F(t)){const c=a=>{const u=Bc(a,e,!0);u&&(l=!0,be(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!r&&!l?(ie(t)&&s.set(t,null),null):(O(r)?r.forEach(c=>o[c]=null):be(o,r),ie(t)&&s.set(t,o),o)}function oi(t,e){return!t||!ei(e)?!1:(e=e.slice(2).replace(/Once$/,""),V(t,e[0].toLowerCase()+e.slice(1))||V(t,Xt(e))||V(t,e))}let Be=null,li=null;function Os(t){const e=Be;return Be=t,li=t&&t.type.__scopeId||null,e}function Uc(t){li=t}function Wc(){li=null}function td(t,e=Be,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&sl(-1);const r=Os(e);let o;try{o=t(...i)}finally{Os(r),s._d&&sl(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function xi(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:c,emit:a,render:u,renderCache:h,data:f,setupState:g,ctx:v,inheritAttrs:w}=t;let P,L;const re=Os(t);try{if(n.shapeFlag&4){const $=i||s;P=nt(u.call($,$,h,r,g,f,v)),L=c}else{const $=e;P=nt($.length>1?$(r,{attrs:c,slots:l,emit:a}):$(r,null)),L=e.props?c:nd(c)}}catch($){Bn.length=0,ri($,t,1),P=We(Xe)}let R=P;if(L&&w!==!1){const $=Object.keys(L),{shapeFlag:q}=R;$.length&&q&7&&(o&&$.some(Pr)&&(L=sd(L,o)),R=Tt(R,L))}return n.dirs&&(R=Tt(R),R.dirs=R.dirs?R.dirs.concat(n.dirs):n.dirs),n.transition&&(R.transition=n.transition),P=R,Os(re),P}const nd=t=>{let e;for(const n in t)(n==="class"||n==="style"||ei(n))&&((e||(e={}))[n]=t[n]);return e},sd=(t,e)=>{const n={};for(const s in t)(!Pr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function id(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:c}=e,a=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Yo(s,o,a):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!oi(a,f))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Yo(s,o,a):!0:!!o;return!1}function Yo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!oi(n,r))return!0}return!1}function rd({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const od=t=>t.__isSuspense;function ld(t,e){e&&e.pendingBranch?O(t)?e.effects.push(...t):e.effects.push(t):Jh(t)}function cd(t,e){if(ve){let n=ve.provides;const s=ve.parent&&ve.parent.provides;s===n&&(n=ve.provides=Object.create(s)),n[t]=e}}function Fn(t,e,n=!1){const s=ve||Be;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&F(e)?e.call(s.proxy):e}}const bs={};function cn(t,e,n){return Hc(t,e,n)}function Hc(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=se){const l=ve;let c,a=!1,u=!1;if(le(t)?(c=()=>t.value,a=Ds(t)):vt(t)?(c=()=>t,s=!0):O(t)?(u=!0,a=t.some(R=>vt(R)||Ds(R)),c=()=>t.map(R=>{if(le(R))return R.value;if(vt(R))return Ut(R);if(F(R))return Ct(R,l,2)})):F(t)?e?c=()=>Ct(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return h&&h(),Ue(t,l,3,[f])}:c=Qe,e&&s){const R=c;c=()=>Ut(R())}let h,f=R=>{h=L.onStop=()=>{Ct(R,l,4)}},g;if(Qn)if(f=Qe,e?n&&Ue(e,l,3,[c(),u?[]:void 0,f]):c(),i==="sync"){const R=nf();g=R.__watcherHandles||(R.__watcherHandles=[])}else return Qe;let v=u?new Array(t.length).fill(bs):bs;const w=()=>{if(L.active)if(e){const R=L.run();(s||a||(u?R.some(($,q)=>Kn($,v[q])):Kn(R,v)))&&(h&&h(),Ue(e,l,3,[R,v===bs?void 0:u&&v[0]===bs?[]:v,f]),v=R)}else L.run()};w.allowRecurse=!!e;let P;i==="sync"?P=w:i==="post"?P=()=>Se(w,l&&l.suspense):(w.pre=!0,l&&(w.id=l.uid),P=()=>Kr(w));const L=new Br(c,P);e?n?w():v=L.run():i==="post"?Se(L.run.bind(L),l&&l.suspense):L.run();const re=()=>{L.stop(),l&&l.scope&&Mr(l.scope.effects,L)};return g&&g.push(re),re}function ad(t,e,n){const s=this.proxy,i=pe(t)?t.includes(".")?Vc(s,t):()=>s[t]:t.bind(s,s);let r;F(e)?r=e:(r=e.handler,n=e);const o=ve;yn(this);const l=Hc(i,r.bind(s),n);return o?yn(o):jt(),l}function Vc(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function Ut(t,e){if(!ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),le(t))Ut(t.value,e);else if(O(t))for(let n=0;n<t.length;n++)Ut(t[n],e);else if(ti(t)||on(t))t.forEach(n=>{Ut(n,e)});else if(fc(t))for(const n in t)Ut(t[n],e);return t}function ud(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zc(()=>{t.isMounted=!0}),qc(()=>{t.isUnmounting=!0}),t}const Fe=[Function,Array],hd={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},setup(t,{slots:e}){const n=oa(),s=ud();let i;return()=>{const r=e.default&&jc(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const w of r)if(w.type!==Xe){o=w;break}}const l=j(t),{mode:c}=l;if(s.isLeaving)return Ri(o);const a=Qo(o);if(!a)return Ri(o);const u=Xi(a,l,s,n);Ji(a,u);const h=n.subTree,f=h&&Qo(h);let g=!1;const{getTransitionKey:v}=a.type;if(v){const w=v();i===void 0?i=w:w!==i&&(i=w,g=!0)}if(f&&f.type!==Xe&&(!Ft(a,f)||g)){const w=Xi(f,l,s,n);if(Ji(f,w),c==="out-in")return s.isLeaving=!0,w.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},Ri(o);c==="in-out"&&a.type!==Xe&&(w.delayLeave=(P,L,re)=>{const R=$c(s,f);R[String(f.key)]=f,P._leaveCb=()=>{L(),P._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=re})}return o}}},dd=hd;function $c(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Xi(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:a,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:w,onAppear:P,onAfterAppear:L,onAppearCancelled:re}=e,R=String(t.key),$=$c(n,t),q=(N,Q)=>{N&&Ue(N,s,9,Q)},Pe=(N,Q)=>{const G=Q[1];q(N,Q),O(N)?N.every(de=>de.length<=1)&&G():N.length<=1&&G()},z={mode:r,persisted:o,beforeEnter(N){let Q=l;if(!n.isMounted)if(i)Q=w||l;else return;N._leaveCb&&N._leaveCb(!0);const G=$[R];G&&Ft(t,G)&&G.el._leaveCb&&G.el._leaveCb(),q(Q,[N])},enter(N){let Q=c,G=a,de=u;if(!n.isMounted)if(i)Q=P||c,G=L||a,de=re||u;else return;let Me=!1;const He=N._enterCb=Ve=>{Me||(Me=!0,Ve?q(de,[N]):q(G,[N]),z.delayedLeave&&z.delayedLeave(),N._enterCb=void 0)};Q?Pe(Q,[N,He]):He()},leave(N,Q){const G=String(t.key);if(N._enterCb&&N._enterCb(!0),n.isUnmounting)return Q();q(h,[N]);let de=!1;const Me=N._leaveCb=He=>{de||(de=!0,Q(),He?q(v,[N]):q(g,[N]),N._leaveCb=void 0,$[G]===t&&delete $[G])};$[G]=t,f?Pe(f,[N,Me]):Me()},clone(N){return Xi(N,e,n,s)}};return z}function Ri(t){if(ai(t))return t=Tt(t),t.children=null,t}function Qo(t){return ai(t)?t.children?t.children[0]:void 0:t}function Ji(t,e){t.shapeFlag&6&&t.component?Ji(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function jc(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===je?(o.patchFlag&128&&i++,s=s.concat(jc(o.children,e,l))):(e||o.type!==Xe)&&s.push(l!=null?Tt(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function ci(t){return F(t)?{setup:t,name:t.name}:t}const xs=t=>!!t.type.__asyncLoader,ai=t=>t.type.__isKeepAlive;function fd(t,e){Kc(t,"a",e)}function pd(t,e){Kc(t,"da",e)}function Kc(t,e,n=ve){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(ui(e,s,n),n){let i=n.parent;for(;i&&i.parent;)ai(i.parent.vnode)&&_d(s,e,n,i),i=i.parent}}function _d(t,e,n,s){const i=ui(e,t,s,!0);Gc(()=>{Mr(s[e],i)},n)}function ui(t,e,n=ve,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;In(),yn(n);const l=Ue(e,n,t,o);return jt(),Tn(),l});return s?i.unshift(r):i.push(r),r}}const dt=t=>(e,n=ve)=>(!Qn||t==="sp")&&ui(t,(...s)=>e(...s),n),gd=dt("bm"),zc=dt("m"),md=dt("bu"),yd=dt("u"),qc=dt("bum"),Gc=dt("um"),vd=dt("sp"),Cd=dt("rtg"),Ed=dt("rtc");function bd(t,e=ve){ui("ec",t,e)}function Zi(t,e){const n=Be;if(n===null)return t;const s=fi(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,l,c,a=se]=e[r];o&&(F(o)&&(o={mounted:o,updated:o}),o.deep&&Ut(l),i.push({dir:o,instance:s,value:l,oldValue:void 0,arg:c,modifiers:a}))}return t}function At(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let c=l.dir[s];c&&(In(),Ue(c,n,8,[t.el,l,t,e]),Tn())}}const wd=Symbol();function Id(t,e,n,s){let i;const r=n&&n[s];if(O(t)||pe(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(ie(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const a=o[l];i[l]=e(t[a],a,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const er=t=>t?la(t)?fi(t)||t.proxy:er(t.parent):null,Ln=be(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>er(t.parent),$root:t=>er(t.root),$emit:t=>t.emit,$options:t=>zr(t),$forceUpdate:t=>t.f||(t.f=()=>Kr(t.update)),$nextTick:t=>t.n||(t.n=Pc.bind(t.proxy)),$watch:t=>ad.bind(t)}),Ai=(t,e)=>t!==se&&!t.__isScriptSetup&&V(t,e),Td={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:c}=t;let a;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ai(s,e))return o[e]=1,s[e];if(i!==se&&V(i,e))return o[e]=2,i[e];if((a=t.propsOptions[0])&&V(a,e))return o[e]=3,r[e];if(n!==se&&V(n,e))return o[e]=4,n[e];tr&&(o[e]=0)}}const u=Ln[e];let h,f;if(u)return e==="$attrs"&&Oe(t,"get",e),u(t);if((h=l.__cssModules)&&(h=h[e]))return h;if(n!==se&&V(n,e))return o[e]=4,n[e];if(f=c.config.globalProperties,V(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ai(i,e)?(i[e]=n,!0):s!==se&&V(s,e)?(s[e]=n,!0):V(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==se&&V(t,o)||Ai(e,o)||(l=r[0])&&V(l,o)||V(s,o)||V(Ln,o)||V(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:V(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let tr=!0;function Sd(t){const e=zr(t),n=t.proxy,s=t.ctx;tr=!1,e.beforeCreate&&Xo(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:c,inject:a,created:u,beforeMount:h,mounted:f,beforeUpdate:g,updated:v,activated:w,deactivated:P,beforeDestroy:L,beforeUnmount:re,destroyed:R,unmounted:$,render:q,renderTracked:Pe,renderTriggered:z,errorCaptured:N,serverPrefetch:Q,expose:G,inheritAttrs:de,components:Me,directives:He,filters:Ve}=e;if(a&&Nd(a,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ce in o){const J=o[ce];F(J)&&(s[ce]=J.bind(n))}if(i){const ce=i.call(n,n);ie(ce)&&(t.data=ii(ce))}if(tr=!0,r)for(const ce in r){const J=r[ce],xt=F(J)?J.bind(n,n):F(J.get)?J.get.bind(n,n):Qe,_s=!F(J)&&F(J.set)?J.set.bind(n):Qe,Rt=aa({get:xt,set:_s});Object.defineProperty(s,ce,{enumerable:!0,configurable:!0,get:()=>Rt.value,set:Ze=>Rt.value=Ze})}if(l)for(const ce in l)Yc(l[ce],s,n,ce);if(c){const ce=F(c)?c.call(n):c;Reflect.ownKeys(ce).forEach(J=>{cd(J,ce[J])})}u&&Xo(u,t,"c");function Ie(ce,J){O(J)?J.forEach(xt=>ce(xt.bind(n))):J&&ce(J.bind(n))}if(Ie(gd,h),Ie(zc,f),Ie(md,g),Ie(yd,v),Ie(fd,w),Ie(pd,P),Ie(bd,N),Ie(Ed,Pe),Ie(Cd,z),Ie(qc,re),Ie(Gc,$),Ie(vd,Q),O(G))if(G.length){const ce=t.exposed||(t.exposed={});G.forEach(J=>{Object.defineProperty(ce,J,{get:()=>n[J],set:xt=>n[J]=xt})})}else t.exposed||(t.exposed={});q&&t.render===Qe&&(t.render=q),de!=null&&(t.inheritAttrs=de),Me&&(t.components=Me),He&&(t.directives=He)}function Nd(t,e,n=Qe,s=!1){O(t)&&(t=nr(t));for(const i in t){const r=t[i];let o;ie(r)?"default"in r?o=Fn(r.from||i,r.default,!0):o=Fn(r.from||i):o=Fn(r),le(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):e[i]=o}}function Xo(t,e,n){Ue(O(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Yc(t,e,n,s){const i=s.includes(".")?Vc(n,s):()=>n[s];if(pe(t)){const r=e[t];F(r)&&cn(i,r)}else if(F(t))cn(i,t.bind(n));else if(ie(t))if(O(t))t.forEach(r=>Yc(r,e,n,s));else{const r=F(t.handler)?t.handler.bind(n):e[t.handler];F(r)&&cn(i,r,t)}}function zr(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let c;return l?c=l:!i.length&&!n&&!s?c=e:(c={},i.length&&i.forEach(a=>Ps(c,a,o,!0)),Ps(c,e,o)),ie(e)&&r.set(e,c),c}function Ps(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Ps(t,r,n,!0),i&&i.forEach(o=>Ps(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=xd[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const xd={data:Jo,props:Dt,emits:Dt,methods:Dt,computed:Dt,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:Dt,directives:Dt,watch:Ad,provide:Jo,inject:Rd};function Jo(t,e){return e?t?function(){return be(F(t)?t.call(this,this):t,F(e)?e.call(this,this):e)}:e:t}function Rd(t,e){return Dt(nr(t),nr(e))}function nr(t){if(O(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Te(t,e){return t?[...new Set([].concat(t,e))]:e}function Dt(t,e){return t?be(be(Object.create(null),t),e):e}function Ad(t,e){if(!t)return e;if(!e)return t;const n=be(Object.create(null),t);for(const s in e)n[s]=Te(t[s],e[s]);return n}function kd(t,e,n,s=!1){const i={},r={};As(r,di,1),t.propsDefaults=Object.create(null),Qc(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Wh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Dd(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=j(i),[c]=t.propsOptions;let a=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(oi(t.emitsOptions,f))continue;const g=e[f];if(c)if(V(r,f))g!==r[f]&&(r[f]=g,a=!0);else{const v=_n(f);i[v]=sr(c,l,v,g,t,!1)}else g!==r[f]&&(r[f]=g,a=!0)}}}else{Qc(t,e,i,r)&&(a=!0);let u;for(const h in l)(!e||!V(e,h)&&((u=Xt(h))===h||!V(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=sr(c,l,h,void 0,t,!0)):delete i[h]);if(r!==l)for(const h in r)(!e||!V(e,h))&&(delete r[h],a=!0)}a&&at(t,"set","$attrs")}function Qc(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ss(c))continue;const a=e[c];let u;i&&V(i,u=_n(c))?!r||!r.includes(u)?n[u]=a:(l||(l={}))[u]=a:oi(t.emitsOptions,c)||(!(c in s)||a!==s[c])&&(s[c]=a,o=!0)}if(r){const c=j(n),a=l||se;for(let u=0;u<r.length;u++){const h=r[u];n[h]=sr(i,c,h,a[h],t,!V(a,h))}}return o}function sr(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=V(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&F(c)){const{propsDefaults:a}=i;n in a?s=a[n]:(yn(i),s=a[n]=c.call(null,e),jt())}else s=c}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===Xt(n))&&(s=!0))}return s}function Xc(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let c=!1;if(!F(t)){const u=h=>{c=!0;const[f,g]=Xc(h,e,!0);be(o,f),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!c)return ie(t)&&s.set(t,rn),rn;if(O(r))for(let u=0;u<r.length;u++){const h=_n(r[u]);Zo(h)&&(o[h]=se)}else if(r)for(const u in r){const h=_n(u);if(Zo(h)){const f=r[u],g=o[h]=O(f)||F(f)?{type:f}:Object.assign({},f);if(g){const v=nl(Boolean,g.type),w=nl(String,g.type);g[0]=v>-1,g[1]=w<0||v<w,(v>-1||V(g,"default"))&&l.push(h)}}}const a=[o,l];return ie(t)&&s.set(t,a),a}function Zo(t){return t[0]!=="$"}function el(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function tl(t,e){return el(t)===el(e)}function nl(t,e){return O(e)?e.findIndex(n=>tl(n,t)):F(e)&&tl(e,t)?0:-1}const Jc=t=>t[0]==="_"||t==="$stable",qr=t=>O(t)?t.map(nt):[nt(t)],Od=(t,e,n)=>{if(e._n)return e;const s=td((...i)=>qr(e(...i)),n);return s._c=!1,s},Zc=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Jc(i))continue;const r=t[i];if(F(r))e[i]=Od(i,r,s);else if(r!=null){const o=qr(r);e[i]=()=>o}}},ea=(t,e)=>{const n=qr(e);t.slots.default=()=>n},Pd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=j(e),As(e,"_",n)):Zc(e,t.slots={})}else t.slots={},e&&ea(t,e);As(t.slots,di,1)},Md=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=se;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:(be(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Zc(e,i)),o=e}else e&&(ea(t,e),o={default:1});if(r)for(const l in i)!Jc(l)&&!(l in o)&&delete i[l]};function ta(){return{app:null,config:{isNativeTag:rh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fd=0;function Ld(t,e){return function(s,i=null){F(s)||(s=Object.assign({},s)),i!=null&&!ie(i)&&(i=null);const r=ta(),o=new Set;let l=!1;const c=r.app={_uid:Fd++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:sf,get config(){return r.config},set config(a){},use(a,...u){return o.has(a)||(a&&F(a.install)?(o.add(a),a.install(c,...u)):F(a)&&(o.add(a),a(c,...u))),c},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),c},component(a,u){return u?(r.components[a]=u,c):r.components[a]},directive(a,u){return u?(r.directives[a]=u,c):r.directives[a]},mount(a,u,h){if(!l){const f=We(s,i);return f.appContext=r,u&&e?e(f,a):t(f,a,h),l=!0,c._container=a,a.__vue_app__=c,fi(f.component)||f.component.proxy}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(a,u){return r.provides[a]=u,c}};return c}}function ir(t,e,n,s,i=!1){if(O(t)){t.forEach((f,g)=>ir(f,e&&(O(e)?e[g]:e),n,s,i));return}if(xs(s)&&!i)return;const r=s.shapeFlag&4?fi(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:c}=t,a=e&&e.r,u=l.refs===se?l.refs={}:l.refs,h=l.setupState;if(a!=null&&a!==c&&(pe(a)?(u[a]=null,V(h,a)&&(h[a]=null)):le(a)&&(a.value=null)),F(c))Ct(c,l,12,[o,u]);else{const f=pe(c),g=le(c);if(f||g){const v=()=>{if(t.f){const w=f?V(h,c)?h[c]:u[c]:c.value;i?O(w)&&Mr(w,r):O(w)?w.includes(r)||w.push(r):f?(u[c]=[r],V(h,c)&&(h[c]=u[c])):(c.value=[r],t.k&&(u[t.k]=c.value))}else f?(u[c]=o,V(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,Se(v,n)):v()}}}const Se=ld;function Bd(t){return Ud(t)}function Ud(t,e){const n=hh();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:c,setText:a,setElementText:u,parentNode:h,nextSibling:f,setScopeId:g=Qe,insertStaticContent:v}=t,w=(d,p,_,y=null,m=null,I=null,S=!1,b=null,T=!!p.dynamicChildren)=>{if(d===p)return;d&&!Ft(d,p)&&(y=gs(d),Ze(d,m,I,!0),d=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:C,ref:A,shapeFlag:x}=p;switch(C){case hi:P(d,p,_,y);break;case Xe:L(d,p,_,y);break;case ki:d==null&&re(p,_,y,S);break;case je:Me(d,p,_,y,m,I,S,b,T);break;default:x&1?q(d,p,_,y,m,I,S,b,T):x&6?He(d,p,_,y,m,I,S,b,T):(x&64||x&128)&&C.process(d,p,_,y,m,I,S,b,T,Zt)}A!=null&&m&&ir(A,d&&d.ref,I,p||d,!p)},P=(d,p,_,y)=>{if(d==null)s(p.el=l(p.children),_,y);else{const m=p.el=d.el;p.children!==d.children&&a(m,p.children)}},L=(d,p,_,y)=>{d==null?s(p.el=c(p.children||""),_,y):p.el=d.el},re=(d,p,_,y)=>{[d.el,d.anchor]=v(d.children,p,_,y,d.el,d.anchor)},R=({el:d,anchor:p},_,y)=>{let m;for(;d&&d!==p;)m=f(d),s(d,_,y),d=m;s(p,_,y)},$=({el:d,anchor:p})=>{let _;for(;d&&d!==p;)_=f(d),i(d),d=_;i(p)},q=(d,p,_,y,m,I,S,b,T)=>{S=S||p.type==="svg",d==null?Pe(p,_,y,m,I,S,b,T):Q(d,p,m,I,S,b,T)},Pe=(d,p,_,y,m,I,S,b)=>{let T,C;const{type:A,props:x,shapeFlag:k,transition:M,dirs:H}=d;if(T=d.el=o(d.type,I,x&&x.is,x),k&8?u(T,d.children):k&16&&N(d.children,T,null,y,m,I&&A!=="foreignObject",S,b),H&&At(d,null,y,"created"),x){for(const Y in x)Y!=="value"&&!Ss(Y)&&r(T,Y,null,x[Y],I,d.children,y,m,it);"value"in x&&r(T,"value",null,x.value),(C=x.onVnodeBeforeMount)&&tt(C,y,d)}z(T,d,d.scopeId,S,y),H&&At(d,null,y,"beforeMount");const Z=(!m||m&&!m.pendingBranch)&&M&&!M.persisted;Z&&M.beforeEnter(T),s(T,p,_),((C=x&&x.onVnodeMounted)||Z||H)&&Se(()=>{C&&tt(C,y,d),Z&&M.enter(T),H&&At(d,null,y,"mounted")},m)},z=(d,p,_,y,m)=>{if(_&&g(d,_),y)for(let I=0;I<y.length;I++)g(d,y[I]);if(m){let I=m.subTree;if(p===I){const S=m.vnode;z(d,S,S.scopeId,S.slotScopeIds,m.parent)}}},N=(d,p,_,y,m,I,S,b,T=0)=>{for(let C=T;C<d.length;C++){const A=d[C]=b?gt(d[C]):nt(d[C]);w(null,A,p,_,y,m,I,S,b)}},Q=(d,p,_,y,m,I,S)=>{const b=p.el=d.el;let{patchFlag:T,dynamicChildren:C,dirs:A}=p;T|=d.patchFlag&16;const x=d.props||se,k=p.props||se;let M;_&&kt(_,!1),(M=k.onVnodeBeforeUpdate)&&tt(M,_,p,d),A&&At(p,d,_,"beforeUpdate"),_&&kt(_,!0);const H=m&&p.type!=="foreignObject";if(C?G(d.dynamicChildren,C,b,_,y,H,I):S||J(d,p,b,null,_,y,H,I,!1),T>0){if(T&16)de(b,p,x,k,_,y,m);else if(T&2&&x.class!==k.class&&r(b,"class",null,k.class,m),T&4&&r(b,"style",x.style,k.style,m),T&8){const Z=p.dynamicProps;for(let Y=0;Y<Z.length;Y++){const he=Z[Y],$e=x[he],en=k[he];(en!==$e||he==="value")&&r(b,he,$e,en,m,d.children,_,y,it)}}T&1&&d.children!==p.children&&u(b,p.children)}else!S&&C==null&&de(b,p,x,k,_,y,m);((M=k.onVnodeUpdated)||A)&&Se(()=>{M&&tt(M,_,p,d),A&&At(p,d,_,"updated")},y)},G=(d,p,_,y,m,I,S)=>{for(let b=0;b<p.length;b++){const T=d[b],C=p[b],A=T.el&&(T.type===je||!Ft(T,C)||T.shapeFlag&70)?h(T.el):_;w(T,C,A,null,y,m,I,S,!0)}},de=(d,p,_,y,m,I,S)=>{if(_!==y){if(_!==se)for(const b in _)!Ss(b)&&!(b in y)&&r(d,b,_[b],null,S,p.children,m,I,it);for(const b in y){if(Ss(b))continue;const T=y[b],C=_[b];T!==C&&b!=="value"&&r(d,b,C,T,S,p.children,m,I,it)}"value"in y&&r(d,"value",_.value,y.value)}},Me=(d,p,_,y,m,I,S,b,T)=>{const C=p.el=d?d.el:l(""),A=p.anchor=d?d.anchor:l("");let{patchFlag:x,dynamicChildren:k,slotScopeIds:M}=p;M&&(b=b?b.concat(M):M),d==null?(s(C,_,y),s(A,_,y),N(p.children,_,A,m,I,S,b,T)):x>0&&x&64&&k&&d.dynamicChildren?(G(d.dynamicChildren,k,_,m,I,S,b),(p.key!=null||m&&p===m.subTree)&&na(d,p,!0)):J(d,p,_,A,m,I,S,b,T)},He=(d,p,_,y,m,I,S,b,T)=>{p.slotScopeIds=b,d==null?p.shapeFlag&512?m.ctx.activate(p,_,y,S,T):Ve(p,_,y,m,I,S,T):we(d,p,T)},Ve=(d,p,_,y,m,I,S)=>{const b=d.component=Yd(d,y,m);if(ai(d)&&(b.ctx.renderer=Zt),Qd(b),b.asyncDep){if(m&&m.registerDep(b,Ie),!d.el){const T=b.subTree=We(Xe);L(null,T,p,_)}return}Ie(b,d,p,_,m,I,S)},we=(d,p,_)=>{const y=p.component=d.component;if(id(d,p,_))if(y.asyncDep&&!y.asyncResolved){ce(y,p,_);return}else y.next=p,Xh(y.update),y.update();else p.el=d.el,y.vnode=p},Ie=(d,p,_,y,m,I,S)=>{const b=()=>{if(d.isMounted){let{next:A,bu:x,u:k,parent:M,vnode:H}=d,Z=A,Y;kt(d,!1),A?(A.el=H.el,ce(d,A,S)):A=H,x&&Ns(x),(Y=A.props&&A.props.onVnodeBeforeUpdate)&&tt(Y,M,A,H),kt(d,!0);const he=xi(d),$e=d.subTree;d.subTree=he,w($e,he,h($e.el),gs($e),d,m,I),A.el=he.el,Z===null&&rd(d,he.el),k&&Se(k,m),(Y=A.props&&A.props.onVnodeUpdated)&&Se(()=>tt(Y,M,A,H),m)}else{let A;const{el:x,props:k}=p,{bm:M,m:H,parent:Z}=d,Y=xs(p);if(kt(d,!1),M&&Ns(M),!Y&&(A=k&&k.onVnodeBeforeMount)&&tt(A,Z,p),kt(d,!0),x&&Si){const he=()=>{d.subTree=xi(d),Si(x,d.subTree,d,m,null)};Y?p.type.__asyncLoader().then(()=>!d.isUnmounted&&he()):he()}else{const he=d.subTree=xi(d);w(null,he,_,y,d,m,I),p.el=he.el}if(H&&Se(H,m),!Y&&(A=k&&k.onVnodeMounted)){const he=p;Se(()=>tt(A,Z,he),m)}(p.shapeFlag&256||Z&&xs(Z.vnode)&&Z.vnode.shapeFlag&256)&&d.a&&Se(d.a,m),d.isMounted=!0,p=_=y=null}},T=d.effect=new Br(b,()=>Kr(C),d.scope),C=d.update=()=>T.run();C.id=d.uid,kt(d,!0),C()},ce=(d,p,_)=>{p.component=d;const y=d.vnode.props;d.vnode=p,d.next=null,Dd(d,p.props,y,_),Md(d,p.children,_),In(),Go(),Tn()},J=(d,p,_,y,m,I,S,b,T=!1)=>{const C=d&&d.children,A=d?d.shapeFlag:0,x=p.children,{patchFlag:k,shapeFlag:M}=p;if(k>0){if(k&128){_s(C,x,_,y,m,I,S,b,T);return}else if(k&256){xt(C,x,_,y,m,I,S,b,T);return}}M&8?(A&16&&it(C,m,I),x!==C&&u(_,x)):A&16?M&16?_s(C,x,_,y,m,I,S,b,T):it(C,m,I,!0):(A&8&&u(_,""),M&16&&N(x,_,y,m,I,S,b,T))},xt=(d,p,_,y,m,I,S,b,T)=>{d=d||rn,p=p||rn;const C=d.length,A=p.length,x=Math.min(C,A);let k;for(k=0;k<x;k++){const M=p[k]=T?gt(p[k]):nt(p[k]);w(d[k],M,_,null,m,I,S,b,T)}C>A?it(d,m,I,!0,!1,x):N(p,_,y,m,I,S,b,T,x)},_s=(d,p,_,y,m,I,S,b,T)=>{let C=0;const A=p.length;let x=d.length-1,k=A-1;for(;C<=x&&C<=k;){const M=d[C],H=p[C]=T?gt(p[C]):nt(p[C]);if(Ft(M,H))w(M,H,_,null,m,I,S,b,T);else break;C++}for(;C<=x&&C<=k;){const M=d[x],H=p[k]=T?gt(p[k]):nt(p[k]);if(Ft(M,H))w(M,H,_,null,m,I,S,b,T);else break;x--,k--}if(C>x){if(C<=k){const M=k+1,H=M<A?p[M].el:y;for(;C<=k;)w(null,p[C]=T?gt(p[C]):nt(p[C]),_,H,m,I,S,b,T),C++}}else if(C>k)for(;C<=x;)Ze(d[C],m,I,!0),C++;else{const M=C,H=C,Z=new Map;for(C=H;C<=k;C++){const ke=p[C]=T?gt(p[C]):nt(p[C]);ke.key!=null&&Z.set(ke.key,C)}let Y,he=0;const $e=k-H+1;let en=!1,Fo=0;const An=new Array($e);for(C=0;C<$e;C++)An[C]=0;for(C=M;C<=x;C++){const ke=d[C];if(he>=$e){Ze(ke,m,I,!0);continue}let et;if(ke.key!=null)et=Z.get(ke.key);else for(Y=H;Y<=k;Y++)if(An[Y-H]===0&&Ft(ke,p[Y])){et=Y;break}et===void 0?Ze(ke,m,I,!0):(An[et-H]=C+1,et>=Fo?Fo=et:en=!0,w(ke,p[et],_,null,m,I,S,b,T),he++)}const Lo=en?Wd(An):rn;for(Y=Lo.length-1,C=$e-1;C>=0;C--){const ke=H+C,et=p[ke],Bo=ke+1<A?p[ke+1].el:y;An[C]===0?w(null,et,_,Bo,m,I,S,b,T):en&&(Y<0||C!==Lo[Y]?Rt(et,_,Bo,2):Y--)}}},Rt=(d,p,_,y,m=null)=>{const{el:I,type:S,transition:b,children:T,shapeFlag:C}=d;if(C&6){Rt(d.component.subTree,p,_,y);return}if(C&128){d.suspense.move(p,_,y);return}if(C&64){S.move(d,p,_,Zt);return}if(S===je){s(I,p,_);for(let x=0;x<T.length;x++)Rt(T[x],p,_,y);s(d.anchor,p,_);return}if(S===ki){R(d,p,_);return}if(y!==2&&C&1&&b)if(y===0)b.beforeEnter(I),s(I,p,_),Se(()=>b.enter(I),m);else{const{leave:x,delayLeave:k,afterLeave:M}=b,H=()=>s(I,p,_),Z=()=>{x(I,()=>{H(),M&&M()})};k?k(I,H,Z):Z()}else s(I,p,_)},Ze=(d,p,_,y=!1,m=!1)=>{const{type:I,props:S,ref:b,children:T,dynamicChildren:C,shapeFlag:A,patchFlag:x,dirs:k}=d;if(b!=null&&ir(b,null,_,d,!0),A&256){p.ctx.deactivate(d);return}const M=A&1&&k,H=!xs(d);let Z;if(H&&(Z=S&&S.onVnodeBeforeUnmount)&&tt(Z,p,d),A&6)Xu(d.component,_,y);else{if(A&128){d.suspense.unmount(_,y);return}M&&At(d,null,p,"beforeUnmount"),A&64?d.type.remove(d,p,_,m,Zt,y):C&&(I!==je||x>0&&x&64)?it(C,p,_,!1,!0):(I===je&&x&384||!m&&A&16)&&it(T,p,_),y&&Po(d)}(H&&(Z=S&&S.onVnodeUnmounted)||M)&&Se(()=>{Z&&tt(Z,p,d),M&&At(d,null,p,"unmounted")},_)},Po=d=>{const{type:p,el:_,anchor:y,transition:m}=d;if(p===je){Qu(_,y);return}if(p===ki){$(d);return}const I=()=>{i(_),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(d.shapeFlag&1&&m&&!m.persisted){const{leave:S,delayLeave:b}=m,T=()=>S(_,I);b?b(d.el,I,T):T()}else I()},Qu=(d,p)=>{let _;for(;d!==p;)_=f(d),i(d),d=_;i(p)},Xu=(d,p,_)=>{const{bum:y,scope:m,update:I,subTree:S,um:b}=d;y&&Ns(y),m.stop(),I&&(I.active=!1,Ze(S,d,p,_)),b&&Se(b,p),Se(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},it=(d,p,_,y=!1,m=!1,I=0)=>{for(let S=I;S<d.length;S++)Ze(d[S],p,_,y,m)},gs=d=>d.shapeFlag&6?gs(d.component.subTree):d.shapeFlag&128?d.suspense.next():f(d.anchor||d.el),Mo=(d,p,_)=>{d==null?p._vnode&&Ze(p._vnode,null,null,!0):w(p._vnode||null,d,p,null,null,null,_),Go(),Fc(),p._vnode=d},Zt={p:w,um:Ze,m:Rt,r:Po,mt:Ve,mc:N,pc:J,pbc:G,n:gs,o:t};let Ti,Si;return e&&([Ti,Si]=e(Zt)),{render:Mo,hydrate:Ti,createApp:Ld(Mo,Ti)}}function kt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function na(t,e,n=!1){const s=t.children,i=e.children;if(O(s)&&O(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=gt(i[r]),l.el=o.el),n||na(o,l)),l.type===hi&&(l.el=o.el)}}function Wd(t){const e=t.slice(),n=[0];let s,i,r,o,l;const c=t.length;for(s=0;s<c;s++){const a=t[s];if(a!==0){if(i=n[n.length-1],t[i]<a){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<a?r=l+1:o=l;a<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const Hd=t=>t.__isTeleport,je=Symbol(void 0),hi=Symbol(void 0),Xe=Symbol(void 0),ki=Symbol(void 0),Bn=[];let qe=null;function ot(t=!1){Bn.push(qe=t?null:[])}function Vd(){Bn.pop(),qe=Bn[Bn.length-1]||null}let Yn=1;function sl(t){Yn+=t}function sa(t){return t.dynamicChildren=Yn>0?qe||rn:null,Vd(),Yn>0&&qe&&qe.push(t),t}function an(t,e,n,s,i,r){return sa(oe(t,e,n,s,i,r,!0))}function rr(t,e,n,s,i){return sa(We(t,e,n,s,i,!0))}function $d(t){return t?t.__v_isVNode===!0:!1}function Ft(t,e){return t.type===e.type&&t.key===e.key}const di="__vInternal",ia=({key:t})=>t??null,Rs=({ref:t,ref_key:e,ref_for:n})=>t!=null?pe(t)||le(t)||F(t)?{i:Be,r:t,k:e,f:!!n}:t:null;function oe(t,e=null,n=null,s=0,i=null,r=t===je?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ia(e),ref:e&&Rs(e),scopeId:li,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Be};return l?(Gr(c,n),r&128&&t.normalize(c)):n&&(c.shapeFlag|=pe(n)?8:16),Yn>0&&!o&&qe&&(c.patchFlag>0||r&6)&&c.patchFlag!==32&&qe.push(c),c}const We=jd;function jd(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===wd)&&(t=Xe),$d(t)){const l=Tt(t,e,!0);return n&&Gr(l,n),Yn>0&&!r&&qe&&(l.shapeFlag&6?qe[qe.indexOf(t)]=l:qe.push(l)),l.patchFlag|=-2,l}if(ef(t)&&(t=t.__vccOpts),e){e=Kd(e);let{class:l,style:c}=e;l&&!pe(l)&&(e.class=wn(l)),ie(c)&&(xc(c)&&!O(c)&&(c=be({},c)),e.style=Or(c))}const o=pe(t)?1:od(t)?128:Hd(t)?64:ie(t)?4:F(t)?2:0;return oe(t,e,n,s,i,o,r,!0)}function Kd(t){return t?xc(t)||di in t?be({},t):t:null}function Tt(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?zd(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&ia(l),ref:e&&e.ref?n&&i?O(i)?i.concat(Rs(e)):[i,Rs(e)]:Rs(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==je?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Tt(t.ssContent),ssFallback:t.ssFallback&&Tt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function ra(t=" ",e=0){return We(hi,null,t,e)}function il(t="",e=!1){return e?(ot(),rr(Xe,null,t)):We(Xe,null,t)}function nt(t){return t==null||typeof t=="boolean"?We(Xe):O(t)?We(je,null,t.slice()):typeof t=="object"?gt(t):We(hi,null,String(t))}function gt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Tt(t)}function Gr(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(O(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Gr(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(di in e)?e._ctx=Be:i===3&&Be&&(Be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else F(e)?(e={default:e,_ctx:Be},n=32):(e=String(e),s&64?(n=16,e=[ra(e)]):n=8);t.children=e,t.shapeFlag|=n}function zd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=wn([e.class,s.class]));else if(i==="style")e.style=Or([e.style,s.style]);else if(ei(i)){const r=e[i],o=s[i];o&&r!==o&&!(O(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function tt(t,e,n,s=null){Ue(t,e,7,[n,s])}const qd=ta();let Gd=0;function Yd(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||qd,r={uid:Gd++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new _c(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xc(s,i),emitsOptions:Bc(s,i),emit:null,emitted:null,propsDefaults:se,inheritAttrs:s.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ed.bind(null,r),t.ce&&t.ce(r),r}let ve=null;const oa=()=>ve||Be,yn=t=>{ve=t,t.scope.on()},jt=()=>{ve&&ve.scope.off(),ve=null};function la(t){return t.vnode.shapeFlag&4}let Qn=!1;function Qd(t,e=!1){Qn=e;const{props:n,children:s}=t.vnode,i=la(t);kd(t,n,i,e),Pd(t,s);const r=i?Xd(t,e):void 0;return Qn=!1,r}function Xd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=mn(new Proxy(t.ctx,Td));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?Zd(t):null;yn(t),In();const r=Ct(s,t,0,[t.props,i]);if(Tn(),jt(),hc(r)){if(r.then(jt,jt),e)return r.then(o=>{rl(t,o,e)}).catch(o=>{ri(o,t,0)});t.asyncDep=r}else rl(t,r,e)}else ca(t,e)}function rl(t,e,n){F(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ie(e)&&(t.setupState=kc(e)),ca(t,n)}let ol;function ca(t,e,n){const s=t.type;if(!t.render){if(!e&&ol&&!s.render){const i=s.template||zr(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,a=be(be({isCustomElement:r,delimiters:l},o),c);s.render=ol(i,a)}}t.render=s.render||Qe}yn(t),In(),Sd(t),Tn(),jt()}function Jd(t){return new Proxy(t.attrs,{get(e,n){return Oe(t,"get","$attrs"),e[n]}})}function Zd(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Jd(t))},slots:t.slots,emit:t.emit,expose:e}}function fi(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(kc(mn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ln)return Ln[n](t)},has(e,n){return n in e||n in Ln}}))}function ef(t){return F(t)&&"__vccOpts"in t}const aa=(t,e)=>Gh(t,e,Qn),tf=Symbol(""),nf=()=>Fn(tf),sf="3.2.45",rf="http://www.w3.org/2000/svg",Lt=typeof document<"u"?document:null,ll=Lt&&Lt.createElement("template"),of={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Lt.createElementNS(rf,t):Lt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Lt.createTextNode(t),createComment:t=>Lt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Lt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ll.innerHTML=s?`<svg>${t}</svg>`:t;const l=ll.content;if(s){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function lf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function cf(t,e,n){const s=t.style,i=pe(n);if(n&&!i){for(const r in n)or(s,r,n[r]);if(e&&!pe(e))for(const r in e)n[r]==null&&or(s,r,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const cl=/\s*!important$/;function or(t,e,n){if(O(n))n.forEach(s=>or(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=af(t,e);cl.test(n)?t.setProperty(Xt(s),n.replace(cl,""),"important"):t[s]=n}}const al=["Webkit","Moz","ms"],Di={};function af(t,e){const n=Di[e];if(n)return n;let s=_n(e);if(s!=="filter"&&s in t)return Di[e]=s;s=pc(s);for(let i=0;i<al.length;i++){const r=al[i]+s;if(r in t)return Di[e]=r}return e}const ul="http://www.w3.org/1999/xlink";function uf(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ul,e.slice(6,e.length)):t.setAttributeNS(ul,e,n);else{const r=sh(e);n==null||r&&!cc(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function hf(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=cc(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Bt(t,e,n,s){t.addEventListener(e,n,s)}function df(t,e,n,s){t.removeEventListener(e,n,s)}function ff(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[l,c]=pf(e);if(s){const a=r[e]=mf(s,i);Bt(t,l,a,c)}else o&&(df(t,l,o,c),r[e]=void 0)}}const hl=/(?:Once|Passive|Capture)$/;function pf(t){let e;if(hl.test(t)){e={};let s;for(;s=t.match(hl);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Xt(t.slice(2)),e]}let Oi=0;const _f=Promise.resolve(),gf=()=>Oi||(_f.then(()=>Oi=0),Oi=Date.now());function mf(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ue(yf(s,n.value),e,5,[s])};return n.value=t,n.attached=gf(),n}function yf(t,e){if(O(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const dl=/^on[a-z]/,vf=(t,e,n,s,i=!1,r,o,l,c)=>{e==="class"?lf(t,s,i):e==="style"?cf(t,n,s):ei(e)?Pr(e)||ff(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Cf(t,e,s,i))?hf(t,e,s,r,o,l,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),uf(t,e,s,i))};function Cf(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&dl.test(e)&&F(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||dl.test(e)&&pe(n)?!1:e in t}const Ef={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};dd.props;const Ms=t=>{const e=t.props["onUpdate:modelValue"]||!1;return O(e)?n=>Ns(e,n):e};function bf(t){t.target.composing=!0}function fl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ua={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Ms(i);const r=s||i.props&&i.props.type==="number";Bt(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=ks(l)),t._assign(l)}),n&&Bt(t,"change",()=>{t.value=t.value.trim()}),e||(Bt(t,"compositionstart",bf),Bt(t,"compositionend",fl),Bt(t,"change",fl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=Ms(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&ks(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},wf={deep:!0,created(t,e,n){t._assign=Ms(n),Bt(t,"change",()=>{const s=t._modelValue,i=If(t),r=t.checked,o=t._assign;if(O(s)){const l=ac(s,i),c=l!==-1;if(r&&!c)o(s.concat(i));else if(!r&&c){const a=[...s];a.splice(l,1),o(a)}}else if(ti(s)){const l=new Set(s);r?l.add(i):l.delete(i),o(l)}else o(ha(t,r))})},mounted:pl,beforeUpdate(t,e,n){t._assign=Ms(n),pl(t,e,n)}};function pl(t,{value:e,oldValue:n},s){t._modelValue=e,O(e)?t.checked=ac(e,s.props.value)>-1:ti(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Zs(e,ha(t,!0)))}function If(t){return"_value"in t?t._value:t.value}function ha(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Tf={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Sf=(t,e)=>n=>{if(!("key"in n))return;const s=Xt(n.key);if(e.some(i=>i===s||Tf[i]===s))return t(n)},Nf=be({patchProp:vf},of);let _l;function xf(){return _l||(_l=Bd(Nf))}const Rf=(...t)=>{const e=xf().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Af(s);if(!i)return;const r=e._component;!F(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Af(t){return pe(t)?document.querySelector(t):t}var kf=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let da;const pi=t=>da=t,fa=Symbol();function lr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Un;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Un||(Un={}));function Df(){const t=gc(!0),e=t.run(()=>$t({}));let n=[],s=[];const i=mn({install(r){pi(i),i._a=r,r.provide(fa,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!kf?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const pa=()=>{};function gl(t,e,n,s=pa){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&fh()&&ph(i),i}function tn(t,...e){t.slice().forEach(n=>{n(...e)})}function cr(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];lr(i)&&lr(s)&&t.hasOwnProperty(n)&&!le(s)&&!vt(s)?t[n]=cr(i,s):t[n]=s}return t}const Of=Symbol();function Pf(t){return!lr(t)||!t.hasOwnProperty(Of)}const{assign:mt}=Object;function Mf(t){return!!(le(t)&&t.effect)}function Ff(t,e,n,s){const{state:i,actions:r,getters:o}=e,l=n.state.value[t];let c;function a(){l||(n.state.value[t]=i?i():{});const u=jh(n.state.value[t]);return mt(u,r,Object.keys(o||{}).reduce((h,f)=>(h[f]=mn(aa(()=>{pi(n);const g=n._s.get(t);return o[f].call(g,g)})),h),{}))}return c=_a(t,a,e,n,s,!0),c.$reset=function(){const h=i?i():{};this.$patch(f=>{mt(f,h)})},c}function _a(t,e,n={},s,i,r){let o;const l=mt({actions:{}},n),c={deep:!0};let a,u,h=mn([]),f=mn([]),g;const v=s.state.value[t];!r&&!v&&(s.state.value[t]={}),$t({});let w;function P(z){let N;a=u=!1,typeof z=="function"?(z(s.state.value[t]),N={type:Un.patchFunction,storeId:t,events:g}):(cr(s.state.value[t],z),N={type:Un.patchObject,payload:z,storeId:t,events:g});const Q=w=Symbol();Pc().then(()=>{w===Q&&(a=!0)}),u=!0,tn(h,N,s.state.value[t])}const L=pa;function re(){o.stop(),h=[],f=[],s._s.delete(t)}function R(z,N){return function(){pi(s);const Q=Array.from(arguments),G=[],de=[];function Me(we){G.push(we)}function He(we){de.push(we)}tn(f,{args:Q,name:z,store:q,after:Me,onError:He});let Ve;try{Ve=N.apply(this&&this.$id===t?this:q,Q)}catch(we){throw tn(de,we),we}return Ve instanceof Promise?Ve.then(we=>(tn(G,we),we)).catch(we=>(tn(de,we),Promise.reject(we))):(tn(G,Ve),Ve)}}const $={_p:s,$id:t,$onAction:gl.bind(null,f),$patch:P,$reset:L,$subscribe(z,N={}){const Q=gl(h,z,N.detached,()=>G()),G=o.run(()=>cn(()=>s.state.value[t],de=>{(N.flush==="sync"?u:a)&&z({storeId:t,type:Un.direct,events:g},de)},mt({},c,N)));return Q},$dispose:re},q=ii($);s._s.set(t,q);const Pe=s._e.run(()=>(o=gc(),o.run(()=>e())));for(const z in Pe){const N=Pe[z];if(le(N)&&!Mf(N)||vt(N))r||(v&&Pf(N)&&(le(N)?N.value=v[z]:cr(N,v[z])),s.state.value[t][z]=N);else if(typeof N=="function"){const Q=R(z,N);Pe[z]=Q,l.actions[z]=N}}return mt(q,Pe),mt(j(q),Pe),Object.defineProperty(q,"$state",{get:()=>s.state.value[t],set:z=>{P(N=>{mt(N,z)})}}),s._p.forEach(z=>{mt(q,o.run(()=>z({store:q,app:s._a,pinia:s,options:l})))}),v&&r&&n.hydrate&&n.hydrate(q.$state,v),a=!0,u=!0,q}function Lf(t,e,n){let s,i;const r=typeof e=="function";typeof t=="string"?(s=t,i=r?n:e):(i=t,s=t.id);function o(l,c){const a=oa();return l=l||a&&Fn(fa,null),l&&pi(l),l=da,l._s.has(s)||(r?_a(s,e,i,l):Ff(s,i,l)),l._s.get(s)}return o.$id=s,o}const Bf=ci({__name:"Button",props:{active:{type:Boolean},label:null},emits:["click"],setup(t){return(e,n)=>(ot(),an("a",{class:wn({selected:t.active}),href:"#/",onClick:n[0]||(n[0]=s=>e.$emit("click",t.label.value))},Ki(t.label.displayText),3))}});/**
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
 */const ma=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Uf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Yr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,a=c?t[i+2]:0,u=r>>2,h=(r&3)<<4|l>>4;let f=(l&15)<<2|a>>6,g=a&63;c||(g=64,o||(f=64)),s.push(n[u],n[h],n[f],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ma(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Uf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const a=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||a==null||h==null)throw Error();const f=r<<2|l>>4;if(s.push(f),a!==64){const g=l<<4&240|a>>2;if(s.push(g),h!==64){const v=a<<6&192|h;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},ya=function(t){const e=ma(t);return Yr.encodeByteArray(e,!0)},Fs=function(t){return ya(t).replace(/\./g,"")},ar=function(t){try{return Yr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Wf(t){return va(void 0,t)}function va(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Hf(n)||(t[n]=va(t[n],e[n]));return t}function Hf(t){return t!=="__proto__"}/**
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
 */function Vf(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ca(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vf())}function $f(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ea(){return ga.NODE_ADMIN===!0}function jf(){try{return typeof indexedDB=="object"}catch{return!1}}function Kf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}function zf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qf=()=>zf().__FIREBASE_DEFAULTS__,Gf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ar(t[1]);return e&&JSON.parse(e)},ba=()=>{try{return qf()||Gf()||Yf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qf=t=>{var e,n;return(n=(e=ba())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xf=t=>{const e=Qf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Jf=()=>{var t;return(t=ba())===null||t===void 0?void 0:t.config};/**
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
 */function Zf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[Fs(JSON.stringify(n)),Fs(JSON.stringify(o)),l].join(".")}/**
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
 */function ft(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function vn(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ml(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ls(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function ur(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(yl(r)&&yl(o)){if(!ur(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function yl(t){return t!==null&&typeof t=="object"}/**
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
 */class op{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],c=this.chain_[4],a,u;for(let h=0;h<80;h++){h<40?h<20?(a=l^r&(o^l),u=1518500249):(a=r^o^l,u=1859775393):h<60?(a=r&o|l&(r|o),u=2400959708):(a=r^o^l,u=3395469782);const f=(i<<5|i>>>27)+a+c+u+s[h]&4294967295;c=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Qr(t,e){return`${t} failed: ${e} argument `}/**
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
 */const lp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,E(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gi=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const dp={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},fp=ee.INFO,pp={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},_p=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=pp[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ta{constructor(e){this.name=e,this._logLevel=fp,this._logHandler=_p,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const gp=(t,e)=>e.some(n=>t instanceof n);let vl,Cl;function mp(){return vl||(vl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yp(){return Cl||(Cl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sa=new WeakMap,hr=new WeakMap,Na=new WeakMap,Pi=new WeakMap,Xr=new WeakMap;function vp(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Et(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sa.set(n,t)}).catch(()=>{}),Xr.set(e,t),e}function Cp(t){if(hr.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});hr.set(t,e)}let dr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Na.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Et(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ep(t){dr=t(dr)}function bp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Mi(this),e,...n);return Na.set(s,e.sort?e.sort():[e]),Et(s)}:yp().includes(t)?function(...e){return t.apply(Mi(this),e),Et(Sa.get(this))}:function(...e){return Et(t.apply(Mi(this),e))}}function wp(t){return typeof t=="function"?bp(t):(t instanceof IDBTransaction&&Cp(t),gp(t,mp())?new Proxy(t,dr):t)}function Et(t){if(t instanceof IDBRequest)return vp(t);if(Pi.has(t))return Pi.get(t);const e=wp(t);return e!==t&&(Pi.set(t,e),Xr.set(e,t)),e}const Mi=t=>Xr.get(t);function Ip(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Et(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Et(o.result),c.oldVersion,c.newVersion,Et(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const Tp=["get","getKey","getAll","getAllKeys","count"],Sp=["put","add","delete","clear"],Fi=new Map;function El(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fi.get(e))return Fi.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Sp.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Tp.includes(n)))return;const r=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let a=c.store;return s&&(a=a.index(l.shift())),(await Promise.all([a[n](...l),i&&c.done]))[0]};return Fi.set(e,r),r}Ep(t=>({...t,get:(e,n,s)=>El(e,n)||t.get(e,n,s),has:(e,n)=>!!El(e,n)||t.has(e,n)}));/**
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
 */class Np{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xp(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fr="@firebase/app",bl="0.9.0";/**
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
 */const zt=new Ta("@firebase/app"),Rp="@firebase/app-compat",Ap="@firebase/analytics-compat",kp="@firebase/analytics",Dp="@firebase/app-check-compat",Op="@firebase/app-check",Pp="@firebase/auth",Mp="@firebase/auth-compat",Fp="@firebase/database",Lp="@firebase/database-compat",Bp="@firebase/functions",Up="@firebase/functions-compat",Wp="@firebase/installations",Hp="@firebase/installations-compat",Vp="@firebase/messaging",$p="@firebase/messaging-compat",jp="@firebase/performance",Kp="@firebase/performance-compat",zp="@firebase/remote-config",qp="@firebase/remote-config-compat",Gp="@firebase/storage",Yp="@firebase/storage-compat",Qp="@firebase/firestore",Xp="@firebase/firestore-compat",Jp="firebase",Zp="9.15.0";/**
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
 */const pr="[DEFAULT]",e_={[fr]:"fire-core",[Rp]:"fire-core-compat",[kp]:"fire-analytics",[Ap]:"fire-analytics-compat",[Op]:"fire-app-check",[Dp]:"fire-app-check-compat",[Pp]:"fire-auth",[Mp]:"fire-auth-compat",[Fp]:"fire-rtdb",[Lp]:"fire-rtdb-compat",[Bp]:"fire-fn",[Up]:"fire-fn-compat",[Wp]:"fire-iid",[Hp]:"fire-iid-compat",[Vp]:"fire-fcm",[$p]:"fire-fcm-compat",[jp]:"fire-perf",[Kp]:"fire-perf-compat",[zp]:"fire-rc",[qp]:"fire-rc-compat",[Gp]:"fire-gcs",[Yp]:"fire-gcs-compat",[Qp]:"fire-fst",[Xp]:"fire-fst-compat","fire-js":"fire-js",[Jp]:"fire-js-all"};/**
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
 */const r_=Zp;function xa(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:pr,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw bt.create("bad-app-name",{appName:String(i)});if(n||(n=Jf()),!n)throw bt.create("no-options");const r=Bs.get(i);if(r){if(ur(n,r.options)&&ur(s,r.config))return r;throw bt.create("duplicate-app",{appName:i})}const o=new hp(i);for(const c of _r.values())o.addComponent(c);const l=new i_(n,s,o);return Bs.set(i,l),l}function o_(t=pr){const e=Bs.get(t);if(!e&&t===pr)return xa();if(!e)throw bt.create("no-app",{appName:t});return e}function un(t,e,n){var s;let i=(s=e_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zt.warn(l.join(" "));return}Us(new Jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const u_=1024,h_=30*24*60*60*1e3;class d_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new p_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Il();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=h_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Il(),{heartbeatsToSend:n,unsentEntries:s}=f_(this._heartbeatsCache.heartbeats),i=Fs(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Il(){return new Date().toISOString().substring(0,10)}function f_(t,e=u_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Tl(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tl(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class p_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jf()?Kf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await a_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return wl(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Tl(t){return Fs(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function __(t){Us(new Jn("platform-logger",e=>new Np(e),"PRIVATE")),Us(new Jn("heartbeat",e=>new d_(e),"PRIVATE")),un(fr,bl,t),un(fr,bl,"esm2017"),un("fire-js","")}__("");const Sl="@firebase/database",Nl="0.14.0";/**
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
 */class y_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ft(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Da=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new m_(e)}}catch{}return new y_},Wt=Da("localStorage"),gr=Da("sessionStorage");/**
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
 */const hn=new Ta("@firebase/database"),v_=function(){let t=1;return function(){return t++}}(),Oa=function(t){const e=lp(t),n=new op;n.update(e);const s=n.digest();return Yr.encodeByteArray(s)},us=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=us.apply(null,s):typeof s=="object"?e+=me(s):e+=s,e+=" "}return e};let Kt=null,xl=!0;const C_=function(t,e){E(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(hn.logLevel=ee.VERBOSE,Kt=hn.log.bind(hn),e&&gr.set("logging_enabled",!0)):typeof t=="function"?Kt=t:(Kt=null,gr.remove("logging_enabled"))},Ce=function(...t){if(xl===!0&&(xl=!1,Kt===null&&gr.get("logging_enabled")===!0&&C_(!0)),Kt){const e=us.apply(null,t);Kt(e)}},hs=function(t){return function(...e){Ce(t,...e)}},mr=function(...t){const e="FIREBASE INTERNAL ERROR: "+us(...t);hn.error(e)},ut=function(...t){const e=`FIREBASE FATAL ERROR: ${us(...t)}`;throw hn.error(e),new Error(e)},Re=function(...t){const e="FIREBASE WARNING: "+us(...t);hn.warn(e)},E_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Re("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Pa=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},b_=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Cn="[MIN_NAME]",qt="[MAX_NAME]",Nn=function(t,e){if(t===e)return 0;if(t===Cn||e===qt)return-1;if(e===Cn||t===qt)return 1;{const n=Rl(t),s=Rl(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},w_=function(t,e){return t===e?0:t<e?-1:1},kn=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},Jr=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=me(e[s]),n+=":",n+=Jr(t[e[s]]);return n+="}",n},Ma=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function Ae(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Fa=function(t){E(!Pa(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,c;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const a=[];for(c=n;c;c-=1)a.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(i?1:0),a.reverse();const u=a.join("");let h="";for(c=0;c<64;c+=8){let f=parseInt(u.substr(c,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},I_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},T_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function S_(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const N_=new RegExp("^-?(0*)\\d{1,10}$"),x_=-2147483648,R_=2147483647,Rl=function(t){if(N_.test(t)){const e=Number(t);if(e>=x_&&e<=R_)return e}return null},xn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Re("Exception was thrown by user callback.",n),e},Math.floor(0))}},A_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wn=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class D_{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Re(e)}}class dn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}dn.OWNER="owner";/**
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
 */class za{constructor(e,n,s,i,r=!1,o="",l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function O_(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function qa(t,e,n){E(typeof e=="string","typeof type must == string"),E(typeof n=="object","typeof params must == object");let s;if(e===ja)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Ka)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);O_(t)&&(n.ns=t.namespace);const i=[];return Ae(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class P_{constructor(){this.counters_={}}incrementCounter(e,n=1){ft(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Wf(this.counters_)}}/**
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
 */const Bi={},Ui={};function eo(t){const e=t.toString();return Bi[e]||(Bi[e]=new P_),Bi[e]}function M_(t,e){const n=t.toString();return Ui[n]||(Ui[n]=e()),Ui[n]}/**
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
 */class F_{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&xn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const G_=16384,Y_=45e3;let Ws=null;typeof MozWebSocket<"u"?Ws=MozWebSocket:typeof WebSocket<"u"&&(Ws=WebSocket);class ze{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=hs(this.connId),this.stats_=eo(n),this.connURL=ze.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[La]=Zr,typeof location<"u"&&location.hostname&&Ha.test(location.hostname)&&(o[Ua]=Wa),n&&(o[Ba]=n),s&&(o[Va]=s),i&&(o[yr]=i),r&&(o[$a]=r),qa(e,ja,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wt.set("previous_websocket_failure",!0);try{let s;Ea(),this.mySock=new Ws(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ze.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ws!==null&&!ze.forceDisallow_}static previouslyFailed(){return Wt.isInMemoryStorage||Wt.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Xn(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(E(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Ma(n,G_);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Y_))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ze.responsesRequiredToBeHealthy=2;ze.healthyTimeout=3e4;/**
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
 */class es{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[sn,ze]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ze&&ze.isAvailable();let s=n&&!ze.previouslyFailed();if(e.webSocketOnly&&(n||Re("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ze];else{const i=this.transports_=[];for(const r of es.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}es.globalTransportInitialized_=!1;/**
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
 */const Q_=6e4,X_=5e3,J_=10*1024,Z_=100*1024,Wi="t",kl="d",eg="s",Dl="r",tg="e",Ol="o",Pl="a",Ml="n",Fl="p",ng="h";class sg{constructor(e,n,s,i,r,o,l,c,a,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=c,this.onKill_=a,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=hs("c:"+this.id+":"),this.transportManager_=new es(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Wn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Z_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>J_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Wi in e){const n=e[Wi];n===Pl?this.upgradeIfSecondaryHealthy_():n===Dl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Ol&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=kn("t",e),s=kn("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Pl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ml,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=kn("t",e),s=kn("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=kn(Wi,e);if(kl in e){const s=e[kl];if(n===ng)this.onHandshake_(s);else if(n===Ml){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===eg?this.onConnectionShutdown_(s):n===Dl?this.onReset_(s):n===tg?mr("Server Error: "+s):n===Ol?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):mr("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Zr!==s&&Re("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Wn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Q_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(X_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */const Ll=32,Bl=768;class X{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function K(){return new X("")}function B(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function St(t){return t.pieces_.length-t.pieceNum_}function te(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new X(t.pieces_,e)}function tu(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ig(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function nu(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function su(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new X(e,0)}function fe(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof X)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new X(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function Ne(t,e){const n=B(t),s=B(e);if(n===null)return e;if(n===s)return Ne(te(t),te(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function no(t,e){if(St(t)!==St(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Ge(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(St(t)>St(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class rg{constructor(e,n){this.errorPrefix_=n,this.parts_=nu(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=gi(this.parts_[s]);iu(this)}}function og(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=gi(e),iu(t)}function lg(t){const e=t.parts_.pop();t.byteLength_-=gi(e),t.parts_.length>0&&(t.byteLength_-=1)}function iu(t){if(t.byteLength_>Bl)throw new Error(t.errorPrefix_+"has a key path longer than "+Bl+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ll)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ll+") or object contains a cycle "+Pt(t))}function Pt(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */const Dn=1e3,cg=60*5*1e3,Ul=30*1e3,ag=1.3,ug=3e4,hg="server_kill",Wl=3;class ct extends Za{constructor(e,n,s,i,r,o,l,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=c,this.id=ct.nextPersistentConnectionId_++,this.log_=hs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Dn,this.maxReconnectDelay_=cg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!Ea())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");so.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Hs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(me(r)),E(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new _i,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),E(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const c=l.d,a=l.s;ct.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),a!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(a,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ft(e,"w")){const s=vn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Re(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ip(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ul)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=sp(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),E(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):mr("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){E(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Dn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Dn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ug&&(this.reconnectDelay_=Dn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ag)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ct.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const c=function(){l?l.close():(o=!0,s())},a=function(h){E(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(h)};this.realtime_={close:c,sendRequest:a};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,l=new sg(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{Re(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(hg)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Re(h),c())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ml(this.interruptReasons_)&&(this.reconnectDelay_=Dn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Jr(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new X(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wl&&(this.reconnectDelay_=Ul,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+ka.replace(/\./g,"-")]=1,Ca()?e["framework.cordova"]=1:$f()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Hs.getInstance().currentlyOnline();return ml(this.interruptReasons_)&&e}}ct.nextPersistentConnectionId_=0;ct.nextConnectionId_=0;/**
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
 */class mi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new U(Cn,e),i=new U(Cn,n);return this.compare(s,i)!==0}minPost(){return U.MIN}}/**
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
 */let ws;class ru extends mi{static get __EMPTY_NODE(){return ws}static set __EMPTY_NODE(e){ws=e}compare(e,n){return Nn(e.name,n.name)}isDefinedOn(e){throw Sn("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(qt,ws)}makePost(e,n){return E(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,ws)}toString(){return".key"}}const fn=new ru;/**
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
 */class Is{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ge{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??ge.RED,this.left=i??xe.EMPTY_NODE,this.right=r??xe.EMPTY_NODE}copy(e,n,s,i,r){return new ge(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return xe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return xe.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ge.RED=!0;ge.BLACK=!1;class dg{copy(e,n,s,i,r){return this}insert(e,n,s){return new ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class xe{constructor(e,n=xe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new xe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ge.BLACK,null,null))}remove(e){return new xe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ge.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Is(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Is(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Is(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Is(this.root_,null,this.comparator_,!0,e)}}xe.EMPTY_NODE=new dg;/**
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
 */function fg(t,e){return Nn(t.name,e.name)}function io(t,e){return Nn(t,e)}/**
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
 */let vr;function pg(t){vr=t}const ou=function(t){return typeof t=="number"?"number:"+Fa(t):"string:"+t},lu=function(t){if(t.isLeafNode()){const e=t.val();E(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ft(e,".sv"),"Priority must be a string or number.")}else E(t===vr||t.isEmpty(),"priority of unexpected type.");E(t===vr||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Hl;class _e{constructor(e,n=_e.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,E(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),lu(this.priorityNode_)}static set __childrenNodeConstructor(e){Hl=e}static get __childrenNodeConstructor(){return Hl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new _e(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:B(e)===".priority"?this.priorityNode_:_e.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:_e.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=B(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(E(s!==".priority"||St(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,_e.__childrenNodeConstructor.EMPTY_NODE.updateChild(te(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ou(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Fa(this.value_):e+=this.value_,this.lazyHash_=Oa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===_e.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof _e.__childrenNodeConstructor?-1:(E(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=_e.VALUE_TYPE_ORDER.indexOf(n),r=_e.VALUE_TYPE_ORDER.indexOf(s);return E(i>=0,"Unknown leaf type: "+n),E(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}_e.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let cu,au;function _g(t){cu=t}function gg(t){au=t}class mg extends mi{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Nn(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(qt,new _e("[PRIORITY-POST]",au))}makePost(e,n){const s=cu(e);return new U(n,new _e("[PRIORITY-POST]",s))}toString(){return".priority"}}const ue=new mg;/**
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
 */const yg=Math.log(2);class vg{constructor(e){const n=r=>parseInt(Math.log(r)/yg,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vs=function(t,e,n,s){t.sort(e);const i=function(c,a){const u=a-c;let h,f;if(u===0)return null;if(u===1)return h=t[c],f=n?n(h):h,new ge(f,h.node,ge.BLACK,null,null);{const g=parseInt(u/2,10)+c,v=i(c,g),w=i(g+1,a);return h=t[g],f=n?n(h):h,new ge(f,h.node,ge.BLACK,v,w)}},r=function(c){let a=null,u=null,h=t.length;const f=function(v,w){const P=h-v,L=h;h-=v;const re=i(P+1,L),R=t[P],$=n?n(R):R;g(new ge($,R.node,w,null,re))},g=function(v){a?(a.left=v,a=v):(u=v,a=v)};for(let v=0;v<c.count;++v){const w=c.nextBitIsOne(),P=Math.pow(2,c.count-(v+1));w?f(P,ge.BLACK):(f(P,ge.BLACK),f(P,ge.RED))}return u},o=new vg(t.length),l=r(o);return new xe(s||e,l)};/**
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
 */let Hi;const nn={};class lt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return E(nn&&ue,"ChildrenNode.ts has not been loaded"),Hi=Hi||new lt({".priority":nn},{".priority":ue}),Hi}get(e){const n=vn(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof xe?n:null}hasIndex(e){return ft(this.indexSet_,e.toString())}addIndex(e,n){E(e!==fn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(U.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Vs(s,e.getCompare()):l=nn;const c=e.toString(),a=Object.assign({},this.indexSet_);a[c]=e;const u=Object.assign({},this.indexes_);return u[c]=l,new lt(u,a)}addToIndexes(e,n){const s=Ls(this.indexes_,(i,r)=>{const o=vn(this.indexSet_,r);if(E(o,"Missing index implementation for "+r),i===nn)if(o.isDefinedOn(e.node)){const l=[],c=n.getIterator(U.Wrap);let a=c.getNext();for(;a;)a.name!==e.name&&l.push(a),a=c.getNext();return l.push(e),Vs(l,o.getCompare())}else return nn;else{const l=n.get(e.name);let c=i;return l&&(c=c.remove(new U(e.name,l))),c.insert(e,e.node)}});return new lt(s,this.indexSet_)}removeFromIndexes(e,n){const s=Ls(this.indexes_,i=>{if(i===nn)return i;{const r=n.get(e.name);return r?i.remove(new U(e.name,r)):i}});return new lt(s,this.indexSet_)}}/**
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
 */let On;class D{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&lu(this.priorityNode_),this.children_.isEmpty()&&E(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return On||(On=new D(new xe(io),null,lt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||On}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?On:n}}getChild(e){const n=B(e);return n===null?this:this.getImmediateChild(n).getChild(te(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(E(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new U(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?On:this.priorityNode_;return new D(i,o,r)}}updateChild(e,n){const s=B(e);if(s===null)return n;{E(B(e)!==".priority"||St(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(te(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(ue,(o,l)=>{n[o]=l.val(e),s++,r&&D.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ou(this.getPriority().val())+":"),this.forEachChild(ue,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Oa(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new U(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ds?-1:0}withIndex(e){if(e===fn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===fn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(ue),i=n.getIterator(ue);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===fn?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Cg extends D{constructor(){super(new xe(io),D.EMPTY_NODE,lt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const ds=new Cg;Object.defineProperties(U,{MIN:{value:new U(Cn,D.EMPTY_NODE)},MAX:{value:new U(qt,ds)}});ru.__EMPTY_NODE=D.EMPTY_NODE;_e.__childrenNodeConstructor=D;pg(ds);gg(ds);/**
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
 */const Eg=!0;function ye(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),E(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new _e(n,ye(e))}if(!(t instanceof Array)&&Eg){const n=[];let s=!1;if(Ae(t,(o,l)=>{if(o.substring(0,1)!=="."){const c=ye(l);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new U(o,c)))}}),n.length===0)return D.EMPTY_NODE;const r=Vs(n,fg,o=>o.name,io);if(s){const o=Vs(n,ue.getCompare());return new D(r,ye(e),new lt({".priority":o},{".priority":ue}))}else return new D(r,ye(e),lt.Default)}else{let n=D.EMPTY_NODE;return Ae(t,(s,i)=>{if(ft(t,s)&&s.substring(0,1)!=="."){const r=ye(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(ye(e))}}_g(ye);/**
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
 */class bg extends mi{constructor(e){super(),this.indexPath_=e,E(!W(e)&&B(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Nn(e.name,n.name):r}makePost(e,n){const s=ye(e),i=D.EMPTY_NODE.updateChild(this.indexPath_,s);return new U(n,i)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,ds);return new U(qt,e)}toString(){return nu(this.indexPath_,0).join("/")}}/**
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
 */class wg extends mi{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Nn(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const s=ye(e);return new U(n,s)}toString(){return".value"}}const Ig=new wg;/**
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
 */class ro{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){E(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(ts(n,l)):E(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(En(n,s)):o.trackChildChange(ns(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(ue,(i,r)=>{n.hasChild(i)||s.trackChildChange(ts(i,r))}),n.isLeafNode()||n.forEachChild(ue,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ns(i,r,o))}else s.trackChildChange(En(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ss{constructor(e){this.indexedFilter_=new ro(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ss.getStartPost_(e),this.endPost_=ss.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new U(n,s))||(s=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=D.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(D.EMPTY_NODE);const r=this;return n.forEachChild(ue,(o,l)=>{r.matches(new U(o,l))||(i=i.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Sg{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ss(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new U(n,s))||(s=D.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=D.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(D.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,g)=>h(g,f)}else o=this.index_.getCompare();const l=e;E(l.numChildren()===this.limit_,"");const c=new U(n,s),a=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(l.hasChild(n)){const h=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,a,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,c);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(ns(n,s,h)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(ts(n,h));const w=l.updateImmediateChild(n,D.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(En(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return s.isEmpty()?e:u&&o(a,c)>=0?(r!=null&&(r.trackChildChange(ts(a.name,a.node)),r.trackChildChange(En(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(a.name,D.EMPTY_NODE)):e}}/**
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
 */class oo{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return E(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return E(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Cn}hasEnd(){return this.endSet_}getIndexEndValue(){return E(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return E(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:qt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return E(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ue}copy(){const e=new oo;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ng(t){return t.loadsAllData()?new ro(t.getIndex()):t.hasLimit()?new Sg(t):new ss(t)}function Vl(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ue?n="$priority":t.index_===Ig?n="$value":t.index_===fn?n="$key":(E(t.index_ instanceof bg,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=me(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+me(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=me(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function $l(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ue&&(e.i=t.index_.toString()),e}/**
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
 */class $s extends Za{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=hs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(E(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=$s.getListenId_(e,s),l={};this.listens_[o]=l;const c=Vl(e._queryParams);this.restRequest_(r+".json",c,(a,u)=>{let h=u;if(a===404&&(h=null,a=null),a===null&&this.onDataUpdate_(r,h,!1,s),vn(this.listens_,o)===l){let f;a?a===401?f="permission_denied":f="rest_error:"+a:f="ok",i(f,null)}})}unlisten(e,n){const s=$s.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Vl(e._queryParams),s=e._path.toString(),i=new _i;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+rp(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let c=null;if(l.status>=200&&l.status<300){try{c=Xn(l.responseText)}catch{Re("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,c)}else l.status!==401&&l.status!==404&&Re("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class xg{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function js(){return{value:null,children:new Map}}function hu(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=B(e);t.children.has(s)||t.children.set(s,js());const i=t.children.get(s);e=te(e),hu(i,e,n)}}function Cr(t,e,n){t.value!==null?n(e,t.value):Rg(t,(s,i)=>{const r=new X(e.toString()+"/"+s);Cr(i,r,n)})}function Rg(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */const jl=10*1e3,kg=30*1e3,Dg=5*60*1e3;class Og{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Ag(e);const s=jl+(kg-jl)*Math.random();Wn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;Ae(e,(i,r)=>{r>0&&ft(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Wn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Dg))}}/**
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
 */var Ye;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ye||(Ye={}));function du(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function lo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function co(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Ks{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ye.ACK_USER_WRITE,this.source=du()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return E(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new X(e));return new Ks(K(),n,this.revert)}}else return E(B(this.path)===e,"operationForChild called for unrelated child."),new Ks(te(this.path),this.affectedTree,this.revert)}}/**
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
 */class is{constructor(e,n){this.source=e,this.path=n,this.type=Ye.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new is(this.source,K()):new is(this.source,te(this.path))}}/**
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
 */class Gt{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ye.OVERWRITE}operationForChild(e){return W(this.path)?new Gt(this.source,K(),this.snap.getImmediateChild(e)):new Gt(this.source,te(this.path),this.snap)}}/**
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
 */class rs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ye.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new X(e));return n.isEmpty()?null:n.value?new Gt(this.source,K(),n.value):new rs(this.source,K(),n)}else return E(B(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new rs(this.source,te(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Yt{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=B(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Pg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Mg(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Tg(o.childName,o.snapshotNode))}),Pn(t,i,"child_removed",e,s,n),Pn(t,i,"child_added",e,s,n),Pn(t,i,"child_moved",r,s,n),Pn(t,i,"child_changed",e,s,n),Pn(t,i,"value",e,s,n),i}function Pn(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,c)=>Lg(t,l,c)),o.forEach(l=>{const c=Fg(t,l,r);i.forEach(a=>{a.respondsTo(l.type)&&e.push(a.createEvent(c,t.query_))})})}function Fg(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Lg(t,e,n){if(e.childName==null||n.childName==null)throw Sn("Should only compare child_ events.");const s=new U(e.childName,e.snapshotNode),i=new U(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function yi(t,e){return{eventCache:t,serverCache:e}}function Hn(t,e,n,s){return yi(new Yt(e,n,s),t.serverCache)}function fu(t,e,n,s){return yi(t.eventCache,new Yt(e,n,s))}function Er(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Qt(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Vi;const Bg=()=>(Vi||(Vi=new xe(w_)),Vi);class ne{constructor(e,n=Bg()){this.value=e,this.children=n}static fromObject(e){let n=new ne(null);return Ae(e,(s,i)=>{n=n.set(new X(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:K(),value:this.value};if(W(e))return null;{const s=B(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(te(e),n);return r!=null?{path:fe(new X(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=B(e),s=this.children.get(n);return s!==null?s.subtree(te(e)):new ne(null)}}set(e,n){if(W(e))return new ne(n,this.children);{const s=B(e),r=(this.children.get(s)||new ne(null)).set(te(e),n),o=this.children.insert(s,r);return new ne(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new ne(null):new ne(null,this.children);{const n=B(e),s=this.children.get(n);if(s){const i=s.remove(te(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new ne(null):new ne(this.value,r)}else return this}}get(e){if(W(e))return this.value;{const n=B(e),s=this.children.get(n);return s?s.get(te(e)):null}}setTree(e,n){if(W(e))return n;{const s=B(e),r=(this.children.get(s)||new ne(null)).setTree(te(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new ne(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(fe(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,K(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(W(e))return null;{const r=B(e),o=this.children.get(r);return o?o.findOnPath_(te(e),fe(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,K(),n)}foreachOnPath_(e,n,s){if(W(e))return this;{this.value&&s(n,this.value);const i=B(e),r=this.children.get(i);return r?r.foreachOnPath_(te(e),fe(n,i),s):new ne(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(fe(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Je{constructor(e){this.writeTree_=e}static empty(){return new Je(new ne(null))}}function Vn(t,e,n){if(W(e))return new Je(new ne(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Ne(i,e);return r=r.updateChild(o,n),new Je(t.writeTree_.set(i,r))}else{const i=new ne(n),r=t.writeTree_.setTree(e,i);return new Je(r)}}}function Kl(t,e,n){let s=t;return Ae(n,(i,r)=>{s=Vn(s,fe(e,i),r)}),s}function zl(t,e){if(W(e))return Je.empty();{const n=t.writeTree_.setTree(e,new ne(null));return new Je(n)}}function br(t,e){return Jt(t,e)!=null}function Jt(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ne(n.path,e)):null}function ql(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ue,(s,i)=>{e.push(new U(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new U(s,i.value))}),e}function wt(t,e){if(W(e))return t;{const n=Jt(t,e);return n!=null?new Je(new ne(n)):new Je(t.writeTree_.subtree(e))}}function wr(t){return t.writeTree_.isEmpty()}function bn(t,e){return pu(K(),t.writeTree_,e)}function pu(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(E(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=pu(fe(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(fe(t,".priority"),s)),n}}/**
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
 */function ao(t,e){return yu(e,t)}function Ug(t,e,n,s,i){E(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Vn(t.visibleWrites,e,n)),t.lastWriteId=s}function Wg(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Hg(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);E(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Vg(l,s.path)?i=!1:Ge(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return $g(t),!0;if(s.snap)t.visibleWrites=zl(t.visibleWrites,s.path);else{const l=s.children;Ae(l,c=>{t.visibleWrites=zl(t.visibleWrites,fe(s.path,c))})}return!0}else return!1}function Vg(t,e){if(t.snap)return Ge(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ge(fe(t.path,n),e))return!0;return!1}function $g(t){t.visibleWrites=_u(t.allWrites,jg,K()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function jg(t){return t.visible}function _u(t,e,n){let s=Je.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)Ge(n,o)?(l=Ne(n,o),s=Vn(s,l,r.snap)):Ge(o,n)&&(l=Ne(o,n),s=Vn(s,K(),r.snap.getChild(l)));else if(r.children){if(Ge(n,o))l=Ne(n,o),s=Kl(s,l,r.children);else if(Ge(o,n))if(l=Ne(o,n),W(l))s=Kl(s,K(),r.children);else{const c=vn(r.children,B(l));if(c){const a=c.getChild(te(l));s=Vn(s,K(),a)}}}else throw Sn("WriteRecord should have .snap or .children")}}return s}function gu(t,e,n,s,i){if(!s&&!i){const r=Jt(t.visibleWrites,e);if(r!=null)return r;{const o=wt(t.visibleWrites,e);if(wr(o))return n;if(n==null&&!br(o,K()))return null;{const l=n||D.EMPTY_NODE;return bn(o,l)}}}else{const r=wt(t.visibleWrites,e);if(!i&&wr(r))return n;if(!i&&n==null&&!br(r,K()))return null;{const o=function(a){return(a.visible||i)&&(!s||!~s.indexOf(a.writeId))&&(Ge(a.path,e)||Ge(e,a.path))},l=_u(t.allWrites,o,e),c=n||D.EMPTY_NODE;return bn(l,c)}}}function Kg(t,e,n){let s=D.EMPTY_NODE;const i=Jt(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ue,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=wt(t.visibleWrites,e);return n.forEachChild(ue,(o,l)=>{const c=bn(wt(r,new X(o)),l);s=s.updateImmediateChild(o,c)}),ql(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=wt(t.visibleWrites,e);return ql(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function zg(t,e,n,s,i){E(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=fe(e,n);if(br(t.visibleWrites,r))return null;{const o=wt(t.visibleWrites,r);return wr(o)?i.getChild(n):bn(o,i.getChild(n))}}function qg(t,e,n,s){const i=fe(e,n),r=Jt(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=wt(t.visibleWrites,i);return bn(o,s.getNode().getImmediateChild(n))}else return null}function Gg(t,e){return Jt(t.visibleWrites,e)}function Yg(t,e,n,s,i,r,o){let l;const c=wt(t.visibleWrites,e),a=Jt(c,K());if(a!=null)l=a;else if(n!=null)l=bn(c,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],h=o.getCompare(),f=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=f.getNext();for(;g&&u.length<i;)h(g,s)!==0&&u.push(g),g=f.getNext();return u}else return[]}function Qg(){return{visibleWrites:Je.empty(),allWrites:[],lastWriteId:-1}}function zs(t,e,n,s){return gu(t.writeTree,t.treePath,e,n,s)}function uo(t,e){return Kg(t.writeTree,t.treePath,e)}function Gl(t,e,n,s){return zg(t.writeTree,t.treePath,e,n,s)}function qs(t,e){return Gg(t.writeTree,fe(t.treePath,e))}function Xg(t,e,n,s,i,r){return Yg(t.writeTree,t.treePath,e,n,s,i,r)}function ho(t,e,n){return qg(t.writeTree,t.treePath,e,n)}function mu(t,e){return yu(fe(t.treePath,e),t.writeTree)}function yu(t,e){return{treePath:t,writeTree:e}}/**
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
 */class Jg{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;E(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),E(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,ns(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,ts(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,En(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,ns(s,e.snapshotNode,i.oldSnap));else throw Sn("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */function em(t){return{filter:t}}function tm(t,e){E(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),E(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function nm(t,e,n,s,i){const r=new Jg;let o,l;if(n.type===Ye.OVERWRITE){const a=n;a.source.fromUser?o=Ir(t,e,a.path,a.snap,s,i,r):(E(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered()&&!W(a.path),o=Gs(t,e,a.path,a.snap,s,i,l,r))}else if(n.type===Ye.MERGE){const a=n;a.source.fromUser?o=im(t,e,a.path,a.children,s,i,r):(E(a.source.fromServer,"Unknown source."),l=a.source.tagged||e.serverCache.isFiltered(),o=Tr(t,e,a.path,a.children,s,i,l,r))}else if(n.type===Ye.ACK_USER_WRITE){const a=n;a.revert?o=lm(t,e,a.path,s,i,r):o=rm(t,e,a.path,a.affectedTree,s,i,r)}else if(n.type===Ye.LISTEN_COMPLETE)o=om(t,e,n.path,s,r);else throw Sn("Unknown operation type: "+n.type);const c=r.getChanges();return sm(e,o,c),{viewCache:o,changes:c}}function sm(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Er(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(uu(Er(e)))}}function Cu(t,e,n,s,i,r){const o=e.eventCache;if(qs(s,n)!=null)return e;{let l,c;if(W(n))if(E(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const a=Qt(e),u=a instanceof D?a:D.EMPTY_NODE,h=uo(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const a=zs(s,Qt(e));l=t.filter.updateFullNode(e.eventCache.getNode(),a,r)}else{const a=B(n);if(a===".priority"){E(St(n)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const h=Gl(s,n,u,c);h!=null?l=t.filter.updatePriority(u,h):l=o.getNode()}else{const u=te(n);let h;if(o.isCompleteForChild(a)){c=e.serverCache.getNode();const f=Gl(s,n,o.getNode(),c);f!=null?h=o.getNode().getImmediateChild(a).updateChild(u,f):h=o.getNode().getImmediateChild(a)}else h=ho(s,a,e.serverCache);h!=null?l=t.filter.updateChild(o.getNode(),a,h,u,i,r):l=o.getNode()}}return Hn(e,l,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function Gs(t,e,n,s,i,r,o,l){const c=e.serverCache;let a;const u=o?t.filter:t.filter.getIndexedFilter();if(W(n))a=u.updateFullNode(c.getNode(),s,null);else if(u.filtersNodes()&&!c.isFiltered()){const g=c.getNode().updateChild(n,s);a=u.updateFullNode(c.getNode(),g,null)}else{const g=B(n);if(!c.isCompleteForPath(n)&&St(n)>1)return e;const v=te(n),P=c.getNode().getImmediateChild(g).updateChild(v,s);g===".priority"?a=u.updatePriority(c.getNode(),P):a=u.updateChild(c.getNode(),g,P,v,vu,null)}const h=fu(e,a,c.isFullyInitialized()||W(n),u.filtersNodes()),f=new fo(i,h,r);return Cu(t,h,n,i,f,l)}function Ir(t,e,n,s,i,r,o){const l=e.eventCache;let c,a;const u=new fo(i,e,r);if(W(n))a=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=Hn(e,a,!0,t.filter.filtersNodes());else{const h=B(n);if(h===".priority")a=t.filter.updatePriority(e.eventCache.getNode(),s),c=Hn(e,a,l.isFullyInitialized(),l.isFiltered());else{const f=te(n),g=l.getNode().getImmediateChild(h);let v;if(W(f))v=s;else{const w=u.getCompleteChild(h);w!=null?tu(f)===".priority"&&w.getChild(su(f)).isEmpty()?v=w:v=w.updateChild(f,s):v=D.EMPTY_NODE}if(g.equals(v))c=e;else{const w=t.filter.updateChild(l.getNode(),h,v,f,u,o);c=Hn(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function Yl(t,e){return t.eventCache.isCompleteForChild(e)}function im(t,e,n,s,i,r,o){let l=e;return s.foreach((c,a)=>{const u=fe(n,c);Yl(e,B(u))&&(l=Ir(t,l,u,a,i,r,o))}),s.foreach((c,a)=>{const u=fe(n,c);Yl(e,B(u))||(l=Ir(t,l,u,a,i,r,o))}),l}function Ql(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Tr(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,a;W(n)?a=s:a=new ne(null).setTree(n,s);const u=e.serverCache.getNode();return a.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),v=Ql(t,g,f);c=Gs(t,c,new X(h),v,i,r,o,l)}}),a.children.inorderTraversal((h,f)=>{const g=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!g){const v=e.serverCache.getNode().getImmediateChild(h),w=Ql(t,v,f);c=Gs(t,c,new X(h),w,i,r,o,l)}}),c}function rm(t,e,n,s,i,r,o){if(qs(i,n)!=null)return e;const l=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(W(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return Gs(t,e,n,c.getNode().getChild(n),i,r,l,o);if(W(n)){let a=new ne(null);return c.getNode().forEachChild(fn,(u,h)=>{a=a.set(new X(u),h)}),Tr(t,e,n,a,i,r,l,o)}else return e}else{let a=new ne(null);return s.foreach((u,h)=>{const f=fe(n,u);c.isCompleteForPath(f)&&(a=a.set(u,c.getNode().getChild(f)))}),Tr(t,e,n,a,i,r,l,o)}}function om(t,e,n,s,i){const r=e.serverCache,o=fu(e,r.getNode(),r.isFullyInitialized()||W(n),r.isFiltered());return Cu(t,o,n,s,vu,i)}function lm(t,e,n,s,i,r){let o;if(qs(s,n)!=null)return e;{const l=new fo(s,e,i),c=e.eventCache.getNode();let a;if(W(n)||B(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=zs(s,Qt(e));else{const h=e.serverCache.getNode();E(h instanceof D,"serverChildren would be complete if leaf node"),u=uo(s,h)}u=u,a=t.filter.updateFullNode(c,u,r)}else{const u=B(n);let h=ho(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=c.getImmediateChild(u)),h!=null?a=t.filter.updateChild(c,u,h,te(n),l,r):e.eventCache.getNode().hasChild(u)?a=t.filter.updateChild(c,u,D.EMPTY_NODE,te(n),l,r):a=c,a.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=zs(s,Qt(e)),o.isLeafNode()&&(a=t.filter.updateFullNode(a,o,r)))}return o=e.serverCache.isFullyInitialized()||qs(s,K())!=null,Hn(e,a,o,t.filter.filtersNodes())}}/**
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
 */class cm{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new ro(s.getIndex()),r=Ng(s);this.processor_=em(r);const o=n.serverCache,l=n.eventCache,c=i.updateFullNode(D.EMPTY_NODE,o.getNode(),null),a=r.updateFullNode(D.EMPTY_NODE,l.getNode(),null),u=new Yt(c,o.isFullyInitialized(),i.filtersNodes()),h=new Yt(a,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=yi(h,u),this.eventGenerator_=new Pg(this.query_)}get query(){return this.query_}}function am(t){return t.viewCache_.serverCache.getNode()}function um(t,e){const n=Qt(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(B(e)).isEmpty())?n.getChild(e):null}function Xl(t){return t.eventRegistrations_.length===0}function hm(t,e){t.eventRegistrations_.push(e)}function Jl(t,e,n){const s=[];if(n){E(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Zl(t,e,n,s){e.type===Ye.MERGE&&e.source.queryId!==null&&(E(Qt(t.viewCache_),"We should always have a full cache before handling merges"),E(Er(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=nm(t.processor_,i,e,n,s);return tm(t.processor_,r.viewCache),E(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Eu(t,r.changes,r.viewCache.eventCache.getNode(),null)}function dm(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ue,(r,o)=>{s.push(En(r,o))}),n.isFullyInitialized()&&s.push(uu(n.getNode())),Eu(t,s,n.getNode(),e)}function Eu(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Mg(t.eventGenerator_,e,n,i)}/**
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
 */let Ys;class fm{constructor(){this.views=new Map}}function pm(t){E(!Ys,"__referenceConstructor has already been defined"),Ys=t}function _m(){return E(Ys,"Reference.ts has not been loaded"),Ys}function gm(t){return t.views.size===0}function po(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return E(r!=null,"SyncTree gave us an op for an invalid query."),Zl(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Zl(o,e,n,s));return r}}function mm(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=zs(n,i?s:null),c=!1;l?c=!0:s instanceof D?(l=uo(n,s),c=!1):(l=D.EMPTY_NODE,c=!1);const a=yi(new Yt(l,c,!1),new Yt(s,i,!1));return new cm(e,a)}return o}function ym(t,e,n,s,i,r){const o=mm(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),hm(o,n),dm(o,n)}function vm(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=Nt(t);if(i==="default")for(const[c,a]of t.views.entries())o=o.concat(Jl(a,n,s)),Xl(a)&&(t.views.delete(c),a.query._queryParams.loadsAllData()||r.push(a.query));else{const c=t.views.get(i);c&&(o=o.concat(Jl(c,n,s)),Xl(c)&&(t.views.delete(i),c.query._queryParams.loadsAllData()||r.push(c.query)))}return l&&!Nt(t)&&r.push(new(_m())(e._repo,e._path)),{removed:r,events:o}}function bu(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function pn(t,e){let n=null;for(const s of t.views.values())n=n||um(s,e);return n}function wu(t,e){if(e._queryParams.loadsAllData())return vi(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Iu(t,e){return wu(t,e)!=null}function Nt(t){return vi(t)!=null}function vi(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Qs;function Cm(t){E(!Qs,"__referenceConstructor has already been defined"),Qs=t}function Em(){return E(Qs,"Reference.ts has not been loaded"),Qs}let bm=1;class ec{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ne(null),this.pendingWriteTree_=Qg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Tu(t,e,n,s,i){return Ug(t.pendingWriteTree_,e,n,s,i),i?fs(t,new Gt(du(),e,n)):[]}function Ht(t,e,n=!1){const s=Wg(t.pendingWriteTree_,e);if(Hg(t.pendingWriteTree_,e)){let r=new ne(null);return s.snap!=null?r=r.set(K(),!0):Ae(s.children,o=>{r=r.set(new X(o),!0)}),fs(t,new Ks(s.path,r,n))}else return[]}function Ci(t,e,n){return fs(t,new Gt(lo(),e,n))}function wm(t,e,n){const s=ne.fromObject(n);return fs(t,new rs(lo(),e,s))}function Im(t,e){return fs(t,new is(lo(),e))}function Tm(t,e,n){const s=go(t,n);if(s){const i=mo(s),r=i.path,o=i.queryId,l=Ne(r,e),c=new is(co(o),l);return yo(t,r,c)}else return[]}function Sr(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||Iu(o,e))){const c=vm(o,e,n,s);gm(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const a=c.removed;if(l=c.events,!i){const u=a.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(r,(f,g)=>Nt(g));if(u&&!h){const f=t.syncPointTree_.subtree(r);if(!f.isEmpty()){const g=xm(f);for(let v=0;v<g.length;++v){const w=g[v],P=w.query,L=xu(t,w);t.listenProvider_.startListening($n(P),Xs(t,P),L.hashFn,L.onComplete)}}}!h&&a.length>0&&!s&&(u?t.listenProvider_.stopListening($n(e),null):a.forEach(f=>{const g=t.queryToTagMap.get(Ei(f));t.listenProvider_.stopListening($n(f),g)}))}Rm(t,a)}return l}function Sm(t,e,n,s){const i=go(t,s);if(i!=null){const r=mo(i),o=r.path,l=r.queryId,c=Ne(o,e),a=new Gt(co(l),c,n);return yo(t,o,a)}else return[]}function Nm(t,e,n,s){const i=go(t,s);if(i){const r=mo(i),o=r.path,l=r.queryId,c=Ne(o,e),a=ne.fromObject(n),u=new rs(co(l),c,a);return yo(t,o,u)}else return[]}function tc(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const v=Ne(f,i);r=r||pn(g,v),o=o||Nt(g)});let l=t.syncPointTree_.get(i);l?(o=o||Nt(l),r=r||pn(l,K())):(l=new fm,t.syncPointTree_=t.syncPointTree_.set(i,l));let c;r!=null?c=!0:(c=!1,r=D.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const w=pn(v,K());w&&(r=r.updateImmediateChild(g,w))}));const a=Iu(l,e);if(!a&&!e._queryParams.loadsAllData()){const f=Ei(e);E(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=Am();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const u=ao(t.pendingWriteTree_,i);let h=ym(l,e,n,u,r,c);if(!a&&!o&&!s){const f=wu(l,e);h=h.concat(km(t,e,f))}return h}function _o(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const c=Ne(o,e),a=pn(l,c);if(a)return a});return gu(i,e,r,n,!0)}function fs(t,e){return Su(e,t.syncPointTree_,null,ao(t.pendingWriteTree_,K()))}function Su(t,e,n,s){if(W(t.path))return Nu(t,e,n,s);{const i=e.get(K());n==null&&i!=null&&(n=pn(i,K()));let r=[];const o=B(t.path),l=t.operationForChild(o),c=e.children.get(o);if(c&&l){const a=n?n.getImmediateChild(o):null,u=mu(s,o);r=r.concat(Su(l,c,a,u))}return i&&(r=r.concat(po(i,t,s,n))),r}}function Nu(t,e,n,s){const i=e.get(K());n==null&&i!=null&&(n=pn(i,K()));let r=[];return e.children.inorderTraversal((o,l)=>{const c=n?n.getImmediateChild(o):null,a=mu(s,o),u=t.operationForChild(o);u&&(r=r.concat(Nu(u,l,c,a)))}),i&&(r=r.concat(po(i,t,s,n))),r}function xu(t,e){const n=e.query,s=Xs(t,n);return{hashFn:()=>(am(e)||D.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Tm(t,n._path,s):Im(t,n._path);{const r=S_(i,n);return Sr(t,n,null,r)}}}}function Xs(t,e){const n=Ei(e);return t.queryToTagMap.get(n)}function Ei(t){return t._path.toString()+"$"+t._queryIdentifier}function go(t,e){return t.tagToQueryMap.get(e)}function mo(t){const e=t.indexOf("$");return E(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new X(t.substr(0,e))}}function yo(t,e,n){const s=t.syncPointTree_.get(e);E(s,"Missing sync point for query tag that we're tracking");const i=ao(t.pendingWriteTree_,e);return po(s,n,i,null)}function xm(t){return t.fold((e,n,s)=>{if(n&&Nt(n))return[vi(n)];{let i=[];return n&&(i=bu(n)),Ae(s,(r,o)=>{i=i.concat(o)}),i}})}function $n(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Em())(t._repo,t._path):t}function Rm(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ei(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function Am(){return bm++}function km(t,e,n){const s=e._path,i=Xs(t,e),r=xu(t,n),o=t.listenProvider_.startListening($n(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)E(!Nt(l.value),"If we're adding a query, it shouldn't be shadowed");else{const c=l.fold((a,u,h)=>{if(!W(a)&&u&&Nt(u))return[vi(u).query];{let f=[];return u&&(f=f.concat(bu(u).map(g=>g.query))),Ae(h,(g,v)=>{f=f.concat(v)}),f}});for(let a=0;a<c.length;++a){const u=c[a];t.listenProvider_.stopListening($n(u),Xs(t,u))}}return o}/**
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
 */class vo{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new vo(n)}node(){return this.node_}}class Co{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=fe(this.path_,e);return new Co(this.syncTree_,n)}node(){return _o(this.syncTree_,this.path_)}}const Dm=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},nc=function(t,e,n){if(!t||typeof t!="object")return t;if(E(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Om(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Pm(t[".sv"],e);E(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Om=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:E(!1,"Unexpected server value: "+t)}},Pm=function(t,e,n){t.hasOwnProperty("increment")||E(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&E(!1,"Unexpected increment value: "+s);const i=e.node();if(E(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Mm=function(t,e,n,s){return Eo(e,new Co(n,t),s)},Ru=function(t,e,n){return Eo(t,new vo(e),n)};function Eo(t,e,n){const s=t.getPriority().val(),i=nc(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=nc(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new _e(l,ye(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new _e(i))),o.forEachChild(ue,(l,c)=>{const a=Eo(c,e.getImmediateChild(l),n);a!==c&&(r=r.updateImmediateChild(l,a))}),r}}/**
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
 */class bo{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function wo(t,e){let n=e instanceof X?e:new X(e),s=t,i=B(n);for(;i!==null;){const r=vn(s.node.children,i)||{children:{},childCount:0};s=new bo(i,s,r),n=te(n),i=B(n)}return s}function Rn(t){return t.node.value}function Au(t,e){t.node.value=e,Nr(t)}function ku(t){return t.node.childCount>0}function Fm(t){return Rn(t)===void 0&&!ku(t)}function bi(t,e){Ae(t.node.children,(n,s)=>{e(new bo(n,t,s))})}function Du(t,e,n,s){n&&!s&&e(t),bi(t,i=>{Du(i,e,!0,s)}),n&&s&&e(t)}function Lm(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ps(t){return new X(t.parent===null?t.name:ps(t.parent)+"/"+t.name)}function Nr(t){t.parent!==null&&Bm(t.parent,t.name,t)}function Bm(t,e,n){const s=Fm(n),i=ft(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Nr(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Nr(t))}/**
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
 */const Um=/[\[\].#$\/\u0000-\u001F\u007F]/,Wm=/[\[\].#$\u0000-\u001F\u007F]/,$i=10*1024*1024,Ou=function(t){return typeof t=="string"&&t.length!==0&&!Um.test(t)},Pu=function(t){return typeof t=="string"&&t.length!==0&&!Wm.test(t)},Hm=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Pu(t)},Vm=function(t,e,n,s){s&&e===void 0||Io(Qr(t,"value"),e,n)},Io=function(t,e,n){const s=n instanceof X?new rg(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Pt(s));if(typeof e=="function")throw new Error(t+"contains a function "+Pt(s)+" with contents = "+e.toString());if(Pa(e))throw new Error(t+"contains "+e.toString()+" "+Pt(s));if(typeof e=="string"&&e.length>$i/3&&gi(e)>$i)throw new Error(t+"contains a string greater than "+$i+" utf8 bytes "+Pt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Ae(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Ou(o)))throw new Error(t+" contains an invalid key ("+o+") "+Pt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);og(s,o),Io(t,l,s),lg(s)}),i&&r)throw new Error(t+' contains ".value" child '+Pt(s)+" in addition to actual children.")}},Mu=function(t,e,n,s){if(!(s&&n===void 0)&&!Pu(n))throw new Error(Qr(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},$m=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Mu(t,e,n,s)},Fu=function(t,e){if(B(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},jm=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ou(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Hm(n))throw new Error(Qr(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Km{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function To(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!no(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Lu(t,e,n){To(t,n),Bu(t,s=>no(s,e))}function ht(t,e,n){To(t,n),Bu(t,s=>Ge(s,e)||Ge(e,s))}function Bu(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(zm(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function zm(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Kt&&Ce("event: "+n.toString()),xn(s)}}}/**
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
 */const qm="repo_interrupt",Gm=25;class Ym{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Km,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=js(),this.transactionQueueTree_=new bo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Qm(t,e,n){if(t.stats_=eo(t.repoInfo_),t.forceRestClient_||A_())t.server_=new $s(t.repoInfo_,(s,i,r,o)=>{sc(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ic(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ct(t.repoInfo_,e,(s,i,r,o)=>{sc(t,s,i,r,o)},s=>{ic(t,s)},s=>{Jm(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=M_(t.repoInfo_,()=>new Og(t.stats_,t.server_)),t.infoData_=new xg,t.infoSyncTree_=new ec({startListening:(s,i,r,o)=>{let l=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(l=Ci(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),No(t,"connected",!1),t.serverSyncTree_=new ec({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,c)=>{const a=o(l,c);ht(t.eventQueue_,s._path,a)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Xm(t){const n=t.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function So(t){return Dm({timestamp:Xm(t)})}function sc(t,e,n,s,i){t.dataUpdateCount++;const r=new X(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const c=Ls(n,a=>ye(a));o=Nm(t.serverSyncTree_,r,c,i)}else{const c=ye(n);o=Sm(t.serverSyncTree_,r,c,i)}else if(s){const c=Ls(n,a=>ye(a));o=wm(t.serverSyncTree_,r,c)}else{const c=ye(n);o=Ci(t.serverSyncTree_,r,c)}let l=r;o.length>0&&(l=wi(t,r)),ht(t.eventQueue_,l,o)}function ic(t,e){No(t,"connected",e),e===!1&&ey(t)}function Jm(t,e){Ae(e,(n,s)=>{No(t,n,s)})}function No(t,e,n){const s=new X("/.info/"+e),i=ye(n);t.infoData_.updateSnapshot(s,i);const r=Ci(t.infoSyncTree_,s,i);ht(t.eventQueue_,s,r)}function Uu(t){return t.nextWriteId_++}function Zm(t,e,n,s,i){xo(t,"set",{path:e.toString(),value:n,priority:s});const r=So(t),o=ye(n,s),l=_o(t.serverSyncTree_,e),c=Ru(o,l,r),a=Uu(t),u=Tu(t.serverSyncTree_,e,c,a,!0);To(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const v=f==="ok";v||Re("set at "+e+" failed: "+f);const w=Ht(t.serverSyncTree_,a,!v);ht(t.eventQueue_,e,w),sy(t,i,f,g)});const h=ju(t,e);wi(t,h),ht(t.eventQueue_,h,[])}function ey(t){xo(t,"onDisconnectEvents");const e=So(t),n=js();Cr(t.onDisconnect_,K(),(i,r)=>{const o=Mm(i,r,t.serverSyncTree_,e);hu(n,i,o)});let s=[];Cr(n,K(),(i,r)=>{s=s.concat(Ci(t.serverSyncTree_,i,r));const o=ju(t,i);wi(t,o)}),t.onDisconnect_=js(),ht(t.eventQueue_,K(),s)}function ty(t,e,n){let s;B(e._path)===".info"?s=tc(t.infoSyncTree_,e,n):s=tc(t.serverSyncTree_,e,n),Lu(t.eventQueue_,e._path,s)}function rc(t,e,n){let s;B(e._path)===".info"?s=Sr(t.infoSyncTree_,e,n):s=Sr(t.serverSyncTree_,e,n),Lu(t.eventQueue_,e._path,s)}function ny(t){t.persistentConnection_&&t.persistentConnection_.interrupt(qm)}function xo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function sy(t,e,n,s){e&&xn(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Wu(t,e,n){return _o(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function Ro(t,e=t.transactionQueueTree_){if(e||Ii(t,e),Rn(e)){const n=Vu(t,e);E(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&iy(t,ps(e),n)}else ku(e)&&bi(e,n=>{Ro(t,n)})}function iy(t,e,n){const s=n.map(a=>a.currentWriteId),i=Wu(t,e,s);let r=i;const o=i.hash();for(let a=0;a<n.length;a++){const u=n[a];E(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Ne(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const l=r.val(!0),c=e;t.server_.put(c.toString(),l,a=>{xo(t,"transaction put response",{path:c.toString(),status:a});let u=[];if(a==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(Ht(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Ii(t,wo(t.transactionQueueTree_,e)),Ro(t,t.transactionQueueTree_),ht(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)xn(h[f])}else{if(a==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Re("transaction at "+c.toString()+" failed: "+a);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=a}wi(t,e)}},o)}function wi(t,e){const n=Hu(t,e),s=ps(n),i=Vu(t,n);return ry(t,i,s),s}function ry(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const c=e[l],a=Ne(n,c.path);let u=!1,h;if(E(a!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,h=c.abortReason,i=i.concat(Ht(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Gm)u=!0,h="maxretry",i=i.concat(Ht(t.serverSyncTree_,c.currentWriteId,!0));else{const f=Wu(t,c.path,o);c.currentInputSnapshot=f;const g=e[l].update(f.val());if(g!==void 0){Io("transaction failed: Data returned ",g,c.path);let v=ye(g);typeof g=="object"&&g!=null&&ft(g,".priority")||(v=v.updatePriority(f.getPriority()));const P=c.currentWriteId,L=So(t),re=Ru(v,f,L);c.currentOutputSnapshotRaw=v,c.currentOutputSnapshotResolved=re,c.currentWriteId=Uu(t),o.splice(o.indexOf(P),1),i=i.concat(Tu(t.serverSyncTree_,c.path,re,c.currentWriteId,c.applyLocally)),i=i.concat(Ht(t.serverSyncTree_,P,!0))}else u=!0,h="nodata",i=i.concat(Ht(t.serverSyncTree_,c.currentWriteId,!0))}ht(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(f){setTimeout(f,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(h==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(h),!1,null))))}Ii(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)xn(s[l]);Ro(t,t.transactionQueueTree_)}function Hu(t,e){let n,s=t.transactionQueueTree_;for(n=B(e);n!==null&&Rn(s)===void 0;)s=wo(s,n),e=te(e),n=B(e);return s}function Vu(t,e){const n=[];return $u(t,e,n),n.sort((s,i)=>s.order-i.order),n}function $u(t,e,n){const s=Rn(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);bi(e,i=>{$u(t,i,n)})}function Ii(t,e){const n=Rn(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Au(e,n.length>0?n:void 0)}bi(e,s=>{Ii(t,s)})}function ju(t,e){const n=ps(Hu(t,e)),s=wo(t.transactionQueueTree_,e);return Lm(s,i=>{ji(t,i)}),ji(t,s),Du(s,i=>{ji(t,i)}),n}function ji(t,e){const n=Rn(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(E(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(E(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ht(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Au(e,void 0):n.length=r+1,ht(t.eventQueue_,ps(e),i);for(let o=0;o<s.length;o++)xn(s[o])}}/**
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
 */function oy(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function ly(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Re(`Invalid query segment '${n}' in query '${t}'`)}return e}const oc=function(t,e){const n=cy(t),s=n.namespace;n.domain==="firebase.com"&&ut(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&ut("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||E_();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new za(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new X(n.pathString)}},cy=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",c=443;if(typeof t=="string"){let a=t.indexOf("//");a>=0&&(l=t.substring(0,a-1),t=t.substring(a+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=oy(t.substring(u,h)));const f=ly(t.substring(Math.min(t.length,h)));a=e.indexOf(":"),a>=0?(o=l==="https"||l==="wss",c=parseInt(e.substring(a+1),10)):a=e.length;const g=e.slice(0,a);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),n=e.substring(v+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */class ay{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return E(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ao{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return W(this._path)?null:tu(this._path)}get ref(){return new pt(this._repo,this._path)}get _queryIdentifier(){const e=$l(this._queryParams),n=Jr(e);return n==="{}"?"default":n}get _queryObject(){return $l(this._queryParams)}isEqual(e){if(e=as(e),!(e instanceof Ao))return!1;const n=this._repo===e._repo,s=no(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+ig(this._path)}}class pt extends Ao{constructor(e,n){super(e,n,new oo,!1)}get parent(){const e=su(this._path);return e===null?null:new pt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class os{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new X(e),s=Js(this.ref,e);return new os(this._node.getChild(n),s,ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new os(i,Js(this.ref,s),ue)))}hasChild(e){const n=new X(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function xr(t,e){return t=as(t),t._checkNotDeleted("ref"),e!==void 0?Js(t._root,e):t._root}function Js(t,e){return t=as(t),B(t._path)===null?$m("child","path",e,!1):Mu("child","path",e,!1),new pt(t._repo,fe(t._path,e))}function uy(t){return Fu("remove",t._path),Rr(t,null)}function Rr(t,e){t=as(t),Fu("set",t._path),Vm("set",e,t._path,!1);const n=new _i;return Zm(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class ko{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new Ku("value",this,new os(e.snapshotNode,new pt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zu(this,e,n):null}matches(e){return e instanceof ko?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Do{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new zu(this,e,n):null}createEvent(e,n){E(e.childName!=null,"Child events should have a childName.");const s=Js(new pt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Ku(e.type,this,new os(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Do?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function hy(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const c=n,a=(u,h)=>{rc(t._repo,t,l),c(u,h)};a.userCallback=n.userCallback,a.context=n.context,n=a}const o=new ay(n,r||void 0),l=e==="value"?new ko(o):new Do(e,o);return ty(t._repo,t,l),()=>rc(t._repo,t,l)}function dy(t,e,n,s){return hy(t,"value",e,n,s)}pm(pt);Cm(pt);/**
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
 */const fy="FIREBASE_DATABASE_EMULATOR_HOST",Ar={};let py=!1;function _y(t,e,n,s){t.repoInfo_=new za(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),s&&(t.authTokenProvider_=s)}function gy(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||ut("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=oc(r,i),l=o.repoInfo,c,a;typeof process<"u"&&process.env&&(a=process.env[fy]),a?(c=!0,r=`http://${a}?ns=${l.namespace}`,o=oc(r,i),l=o.repoInfo):c=!o.repoInfo.secure;const u=i&&c?new dn(dn.OWNER):new D_(t.name,t.options,e);jm("Invalid Firebase Database URL",o),W(o.path)||ut("Database URL must point to the root of a Firebase Database (not including a child path).");const h=yy(l,t,u,new k_(t.name,n));return new vy(h,t)}function my(t,e){const n=Ar[e];(!n||n[t.key]!==t)&&ut(`Database ${e}(${t.repoInfo_}) has already been deleted.`),ny(t),delete n[t.key]}function yy(t,e,n,s){let i=Ar[e.name];i||(i={},Ar[e.name]=i);let r=i[t.toURLString()];return r&&ut("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Ym(t,py,n,s),i[t.toURLString()]=r,r}class vy{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Qm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new pt(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(my(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ut("Cannot call "+e+" on a deleted database.")}}function Cy(t=o_(),e){const n=n_(t,"database").getImmediate({identifier:e}),s=Xf("database");return s&&Ey(n,...s),n}function Ey(t,e,n,s={}){t=as(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&ut("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&ut('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new dn(dn.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:Zf(s.mockUserToken,t.app.options.projectId);r=new dn(o)}_y(i,e,n,r)}/**
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
 */function by(t){g_(r_),Us(new Jn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return gy(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),un(Sl,Nl,t),un(Sl,Nl,"esm2017")}ct.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ct.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};by();var wy="firebase",Iy="9.15.0";/**
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
 */un(wy,Iy,"app");const Ty={apiKey:"AIzaSyDYbAbripgwbZKFfTCSqXzu116Lde_kwnE",authDomain:"todomvc-app-template-test.firebaseapp.com",databaseURL:"https://todomvc-app-template-test-default-rtdb.firebaseio.com",projectId:"todomvc-app-template-test",storageBucket:"todomvc-app-template-test.appspot.com",messagingSenderId:"492184533263",appId:"1:492184533263:web:d98c399c38d7f0c593667a"},Sy=xa(Ty),kr=Cy(Sy),lc=xr(kr,"todos");var Le=(t=>(t[t.UNSORTED=0]="UNSORTED",t[t.ASCENDING=1]="ASCENDING",t[t.DESCENDING=2]="DESCENDING",t))(Le||{});function Ts(t,e){return{checked:!1,message:t,id:e,key:e}}function Ny(t,e,n){switch(n){case Le.ASCENDING:return t.checked===e.checked?0:t.checked?1:-1;case Le.DESCENDING:return t.checked===e.checked?0:t.checked?-1:1;case Le.UNSORTED:return t.id===e.id?0:t.id>e.id?1:-1}}function xy(t){console.log("snapshot",t.val());const e=t.val()&&Object.entries(t.val()).map(([n,s])=>(s.key=parseInt(n),s));return console.log("data",e),(e==null?void 0:e.filter(n=>n!==void 0))??[]}function Ry(){return[Ts("Welcome to TodoMVC",0),Ts("This is a sample todo",1),Ts("Click on the words to edit a todo",2),Ts("Click on the X to delete a todo",3)]}const qu=Lf("todos",{state:()=>({_displayedTodos:[],_filter:"all",_sort:Le.UNSORTED,maxId:0}),getters:{todos:t=>{if(!t._displayedTodos)return;const e=t._displayedTodos;switch(e.sort((n,s)=>Ny(n,s,t._sort)),t._filter){case"unchecked":return e.filter(n=>!n.checked);case"checked":return e.filter(n=>n.checked);default:return e}},tasksLeft:t=>{var e;return((e=t._displayedTodos)==null?void 0:e.filter(n=>!n.checked).length)??0},filter:t=>t._filter},actions:{destroyTodo(t){console.log("destroying todo",t);const e=xr(kr,"todos/"+t.key);uy(e).then(()=>{console.log(`Todo ${t.id} saved successfully!`)}).catch(n=>{console.warn(`Todo ${t.id} could not be saved.`,n)})},clearCompleted(){this._displayedTodos&&(this._displayedTodos=this._displayedTodos.filter(t=>!t.checked),this.saveAllTodos())},loadData(){dy(lc,t=>{this._displayedTodos=xy(t),console.log("this._displayedTodos",this._displayedTodos);const e=this._displayedTodos.reduce((n,s)=>s.id>n?s.id:n,0);console.log({highestId:e}),this.maxId=e+1,console.log("this.maxId",this.maxId)})},setFilter(t){this._filter=t},setSort(t){this._sort=t},updateTodo(t){if(!this._displayedTodos)return;const e=this._displayedTodos.findIndex(n=>t.id===n.id);this._displayedTodos[e]=t,this.saveTodo(t)},addTodo(t){var n,s;const e={checked:!1,message:t,id:this.maxId++,key:(((n=this._displayedTodos)==null?void 0:n.reduce((i,r)=>(r.key>i,r.key),0))??-1)+1};(s=this._displayedTodos)==null||s.push(e),this.saveTodo(e),console.log("adding todo from Pinia",t)},saveAllTodos(){var t;(t=this._displayedTodos)==null||t.forEach((e,n)=>{e.key=n}),Rr(lc,this._displayedTodos).then(()=>{console.log("Data saved successfully!")}).catch(e=>{console.warn("Data could not be saved."+e)})},saveTodo(t){const e=xr(kr,"todos/"+t.key);Rr(e,t).then(()=>{console.log(`Todo ${t.key} saved successfully!`)}).catch(n=>{console.warn(`Todo ${t.key} could not be saved.`,n)})},loadOnboardingTodos(){this._displayedTodos=Ry(),this.saveAllTodos()}}}),Ay={class:"background"},ky=ci({__name:"EmptyTodos",setup(t){const e=qu();function n(){e.loadOnboardingTodos(),console.log("loadOnboardingTodos")}return(s,i)=>(ot(),an("div",Ay,[oe("p",{class:"message",onClick:n},"Load new onboarding Todos?")]))}});const Oo=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},Dy=Oo(ky,[["__scopeId","data-v-ba9f5424"]]),Oy=t=>(Uc("data-v-72c65fd4"),t=t(),Wc(),t),Py={class:"view"},My=Oy(()=>oe("input",{class:"edit",value:"Create a TodoMVC template"},null,-1)),Fy=ci({__name:"Todo",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue","destroyTodo"],setup(t,{emit:e}){const n=t,s=$t(n.modelValue.checked),i=$t(n.modelValue.message);cn(()=>n.modelValue,l=>{l.checked!==s.value&&(s.value=l.checked,console.log("updated checked externally")),l.message!==i.value&&(i.value=l.message,console.log("updated text externally"))}),cn(()=>i.value,l=>{console.log("newMessage",l);const c=n.modelValue;c.message=l,e("update:modelValue",c)});function r(){console.log("toggleChecked",n.modelValue.checked);const l=n.modelValue;l.checked=n.modelValue.checked,s.value=n.modelValue.checked,e("update:modelValue",l)}function o(){e("destroyTodo"),console.log("destroy",n.modelValue.id)}return(l,c)=>(ot(),an("li",{class:wn({completed:ae(s)})},[oe("div",Py,[Zi(oe("input",{"onUpdate:modelValue":c[0]||(c[0]=a=>n.modelValue.checked=a),class:"toggle",title:"click to toggle checked",type:"checkbox","on:update:modelValue":r},null,544),[[wf,n.modelValue.checked]]),oe("label",null,[Zi(oe("input",{"onUpdate:modelValue":c[1]||(c[1]=a=>le(i)?i.value=a:null),type:"text"},null,512),[[ua,ae(i)]])]),oe("button",{class:"destroy",title:"delete todo",onClick:o})]),My],2))}});const Ly=Oo(Fy,[["__scopeId","data-v-72c65fd4"]]),Gu=t=>(Uc("data-v-5d6af4ca"),t=t(),Wc(),t),By={class:"todoapp"},Uy={class:"header"},Wy=Gu(()=>oe("h1",null,"Jared's Todos",-1)),Hy=["onKeypress"],Vy={class:"main"},$y=Gu(()=>oe("input",{id:"sort-todos",class:"toggle-all",type:"checkbox"},null,-1)),jy={key:0,class:"todo-list"},Ky={class:"footer"},zy={class:"todo-count"},qy={class:"filters"},Gy=ci({__name:"App",setup(t){const e=qu();e.loadData();const n=[1,6,4,3,23,45,76];let s="hello world";console.log("should I S?");let i=s.length>5?"yes":"no";function r(v,w){if(v.length!==w.length)return!1;const P=[...v].sort().join(""),L=[...w].sort().join("");return P===L}console.log("heart is anagram of earth?",r("heart","earth")),console.log("stuff is anagram of things?",r("stuff","things")),console.log("should I S?",i),$t(0);const o=$t(Le.UNSORTED),l=$t("");function c(v){e.destroyTodo(v)}function a(){e.clearCompleted()}function u(v){e.setFilter(v)}function h(){o.value=(o.value+1)%3,o.value===Le.UNSORTED&&console.log("sortTodos","SortState.UNSORTED"),o.value===Le.ASCENDING&&console.log("sortTodos","SortState.ASCENDING"),o.value===Le.DESCENDING&&console.log("sortTodos","SortState.DESCENDING"),e.setSort(o.value)}function f(){console.log("addTodo",l.value),e.addTodo(l.value),l.value=""}function g(v){e.updateTodo(v)}return console.log(s,1,5,n,e.todos),(v,w)=>{const P=Ly,L=Dy,re=Bf;return ot(),an("section",By,[oe("header",Uy,[Wy,Zi(oe("input",{"onUpdate:modelValue":w[0]||(w[0]=R=>le(l)?l.value=R:null),class:"new-todo",placeholder:"What needs to be done?",autofocus:"",onKeypress:Sf(f,["enter"])},null,40,Hy),[[ua,ae(l)]])]),oe("section",Vy,[$y,oe("label",{for:"sort-todos",title:"Sort todos",class:wn(["sort-arrow",{"sort-arrow-right":ae(o)===ae(Le).UNSORTED,"sort-arrow-up":ae(o)===ae(Le).ASCENDING,"sort-arrow-down":ae(o)===ae(Le).DESCENDING}]),onClick:h},"Sort todos",2),ae(e).todos?(ot(),an("ul",jy,[(ot(!0),an(je,null,Id(ae(e).todos,R=>(ot(),rr(P,{key:R.id,modelValue:ae(e).todos[ae(e).todos.findIndex($=>R.id===$.id)],"onUpdate:modelValue":[$=>ae(e).todos[ae(e).todos.findIndex(q=>R.id===q.id)]=$,$=>g(R)],onDestroyTodo:$=>c(R)},null,8,["modelValue","onUpdate:modelValue","onDestroyTodo"]))),128)),ae(e).todos.length===0?(ot(),rr(L,{key:0})):il("",!0)])):il("",!0)]),oe("footer",Ky,[oe("span",zy,[oe("strong",null,Ki(ae(e).tasksLeft),1),ra(" item"+Ki(ae(e).tasksLeft===1?"":"s")+" left",1)]),oe("ul",qy,[oe("li",null,[We(re,{type:"button",active:ae(e).filter==="all",label:{displayText:"All",value:"all"},onClick:u},null,8,["active"])]),oe("li",null,[We(re,{type:"button",active:ae(e).filter==="unchecked",label:{displayText:"Unchecked",value:"unchecked"},onClick:u},null,8,["active"])]),oe("li",null,[We(re,{type:"button",active:ae(e).filter==="checked",label:{displayText:"Checked",value:"checked"},onClick:u},null,8,["active"])])]),oe("button",{type:"button",class:"clear-completed",onClick:a}," Clear completed ")])])}}});const Yy=Oo(Gy,[["__scopeId","data-v-5d6af4ca"]]),Yu=Rf(Yy),Qy=Df();Yu.use(Qy);Yu.mount("#app");
