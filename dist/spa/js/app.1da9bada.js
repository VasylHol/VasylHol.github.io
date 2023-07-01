(()=>{"use strict";var e={7247:(e,t,r)=>{var o=r(1957),n=r(3890),a=r(499),i=r(9835);function s(e,t,r,o,n,a){const s=(0,i.up)("router-view");return(0,i.wg)(),(0,i.j4)(s)}const l=(0,i.aZ)({name:"App"});var c=r(1639);const u=(0,c.Z)(l,[["render",s]]),d=u;var p=r(3340),f=r(3746),m=r(1903);const h=(0,p.h)((()=>{const e=(0,f.WB)();return e.use(m.Z),e}));var v=r(8339);const g=[{path:"",component:()=>Promise.all([r.e(736),r.e(549)]).then(r.bind(r,2549)),children:[{name:"home",path:"",component:()=>Promise.all([r.e(736),r.e(470)]).then(r.bind(r,2470))},{name:"movie",path:"movie/:id",component:()=>Promise.all([r.e(736),r.e(658)]).then(r.bind(r,6658)),props:e=>({id:e.params.id})},{name:"favorites",path:"favorites",component:()=>Promise.all([r.e(736),r.e(26)]).then(r.bind(r,1026))},{name:"category",path:"category/:categoryId",component:()=>Promise.all([r.e(736),r.e(173)]).then(r.bind(r,173)),props:e=>({id:+e.params.categoryId})}]},{path:"/:catchAll(.*)*",component:()=>Promise.all([r.e(736),r.e(65)]).then(r.bind(r,7065))}],b=g,y=(0,p.BC)((function(){const e=v.PO,t=(0,v.p7)({scrollBehavior:()=>({left:0,top:0}),routes:b,history:e("/")});return t}));async function P(e,t){const r=e(d);r.use(n.Z,t);const o="function"===typeof h?await h({}):h;r.use(o);const i=(0,a.Xl)("function"===typeof y?await y({store:o}):y);return o.use((({store:e})=>{e.router=i})),{app:r,store:o,router:i}}const w={config:{}},F="/";async function T({app:e,router:t,store:r},o){let n=!1;const a=e=>{try{return t.resolve(e).href}catch(r){}return Object(e)===e?null:e},i=e=>{if(n=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=a(e);null!==t&&(window.location.href=t)},s=window.location.href.replace(window.location.origin,"");for(let c=0;!1===n&&c<o.length;c++)try{await o[c]({app:e,router:t,store:r,ssrContext:null,redirect:i,urlPath:s,publicPath:F})}catch(l){return l&&l.url?void i(l.url):void console.error("[Quasar] boot error:",l)}!0!==n&&(e.use(t),e.mount("#q-app"))}P(o.ri,w).then((e=>{const[t,o]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(r.bind(r,7501)),Promise.resolve().then(r.bind(r,1569)),Promise.resolve().then(r.bind(r,4891))]).then((t=>{const r=o(t).filter((e=>"function"===typeof e));T(e,r)}))}))},1569:(e,t,r)=>{r.r(t),r.d(t,{api:()=>a,default:()=>i});var o=r(3340),n=r(7524);const a=n.Z.create({baseURL:"https://api.example.com"}),i=(0,o.xr)((({app:e})=>{e.config.globalProperties.$axios=n.Z,e.config.globalProperties.$api=a}))},4891:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var o=r(3340),n=r(4793),a=r(9247);const i=(0,o.xr)((({app:e})=>{e.component("country-flag",n.Z),e.component("youtube-player",a.YoutubeVue3)}))},7501:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var o=r(3340),n=r(7712);const a={searchText:"Search film",emptySearch:"No such films",votes:"Votes",releaseDate:"Release Date",country:"Country",genres:"Genres",min:"min",runTime:"Time",whatIsAbout:"What is about movie",mainActors:"Top Billed Cast",homePage:"Home",favoritePage:"Favorites",genres:"Genres",homePageTitle:"Popular movies",genresPageTitle:"Popular movies with genre",favoritesPageTitle:"Your favorite movies",videoNotFoundMessage:"Oops... looks like we don't have videos for this movie",videos:"Videos",recommendations:"Recommendations",additionToFavorites:"Add to favorite",noFavoritesMessage:"Looks like you haven't chose favorite movies yet"},i={searchText:"Пошук фільму",emptySearch:"Нема таких фільмів",votes:"Відгуків",releaseDate:"Дата випуску",country:"Країна",genres:"Жанри",runTime:"Час",min:"хв",whatIsAbout:"Про що фільм",mainActors:"В головних ролях",homePage:"Головна",favoritePage:"Юлюблені",genres:"Жанри",homePageTitle:"Популярні фільми",genresPageTitle:"Популярні фільми з жанру",favoritesPageTitle:"Ваші улюблені фільми",videoNotFoundMessage:"Ой... схоже, що в нас нема даних про відео",videos:"Відео",recommendations:"Рекомендації",additionToFavorites:"Додати до улюблених",noFavoritesMessage:"Схоже, що ви ще не додали жодного фільму до улюблених"},s={"en-US":a,uk:i};var l=r(1193);const c=(0,o.xr)((({app:e})=>{const t=(0,n.o)({locale:l.b$,globalInjection:!0,legacy:!1,messages:s});e.config.globalProperties.$i18n=t,e.use(t)}))},1193:(e,t,r)=>{r.d(t,{b$:()=>a,VB:()=>o,hp:()=>i});const o=["#ff0000","#ff0000","#ff0000","#FFA500","#FFA500","#FFA500","#FFFF00","#FFFF00","#69c280","#69c280"],n="https://image.tmdb.org/t/p/w500",a=localStorage.getItem("app_language")||"uk",i=e=>`${n}${e}`}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,r),a.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,a)=>{if(!o){var i=1/0;for(u=0;u<e.length;u++){for(var[o,n,a]=e[u],s=!0,l=0;l<o.length;l++)(!1&a||i>=a)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,o)=>(r.f[o](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{26:"407b927c",65:"2f41dafb",173:"b848188e",470:"e9b843ee",549:"9c528d9d",658:"b44339d7"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{26:"5113b63e",173:"5113b63e",470:"5113b63e",549:"ece18a68",658:"a00abd50"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="quasar-project:";r.l=(o,n,a,i)=>{if(e[o])e[o].push(n);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+a),s.src=o),e[o]=[n];var p=(t,r)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(r))),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,o,n)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=r=>{if(a.onerror=a.onload=null,"load"===r.type)o();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,a.parentNode.removeChild(a),n(l)}};return a.onerror=a.onload=i,a.href=t,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var n=r[o],a=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(a===e||a===t))return n}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){n=i[o],a=n.getAttribute("data-href");if(a===e||a===t)return n}},o=o=>new Promise(((n,a)=>{var i=r.miniCssF(o),s=r.p+i;if(t(i,s))return n();e(o,s,null,n,a)})),n={143:0};r.f.miniCss=(e,t)=>{var r={26:1,173:1,470:1,549:1,658:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=o(e).then((()=>{n[e]=0}),(t=>{throw delete n[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,o)=>{var n=r.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var a=new Promise(((r,o)=>n=e[t]=[r,o]));o.push(n[2]=a);var i=r.p+r.u(t),s=new Error,l=o=>{if(r.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,n[1](s)}};r.l(i,l,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,o)=>{var n,a,[i,s,l]=o,c=0;if(i.some((t=>0!==e[t]))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(l)var u=l(r)}for(t&&t(o);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[736],(()=>r(7247)));o=r.O(o)})();