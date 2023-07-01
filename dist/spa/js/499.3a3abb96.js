"use strict";(globalThis["webpackChunk"]=globalThis["webpackChunk"]||[]).push([[499],{9677:(e,t,o)=>{o.d(t,{Z:()=>g});var s=o(1681);const i=()=>({paginationPage:1,popularMovies:[],favoriteMovies:[],searchMovies:[],movie:{},moviesByRecommendation:[],movieCredits:{},videos:[],selectedVideo:{},genres:[]}),a={getPopularMovies(e){const{popularMovies:t}=e;return t.results},movieProductionCountries(e){const{movie:t}=e;return t?.production_countries?.map((e=>e.name)).join(", ")},movieGenres(e){const{movie:t}=e;return t?.genres?.map((e=>e.name)).join(", ")},mainMovieActors(e){const{movieCredits:t}=e;return t?.cast?.slice(0,8)},genresById(e){const{genres:t}=e,o={};return t.map((e=>{o[e.id]=e.name})),o}};var r=o(376);const n="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjRhMzc3NTgyMDNhZGZjMTIzOWFiZTE2MGRmN2Q2MiIsInN1YiI6IjY0OTZmNjA4OTU1YzY1MDBjN2FlMzkyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lc7BQHBo_wOVAK64z9qyT-IRjFZdF1-H7ZPeuIj_7GU";let c="https://api.themoviedb.org/3";function l(){const e=r.Z.create({baseURL:c,headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`}});return e}var v=o(4725);const u={getPopularMovies(e,t){const o={language:v.b$,region:"UA",page:e,...t};return l().get("/movie/popular",{params:o})},searchMovieByName(e){const t={language:v.b$,query:e};return l().get("/search/movie",{params:t})},getGenres(){const e={language:v.b$};return l().get("genre/movie/list",{params:e})},getMovieVideos(e){const t={language:v.b$};return l().get(`movie/${e}/videos`,{params:t})},getMovieRecommendations(e){const t={language:v.b$};return l().get(`movie/${e}/similar`,{params:t})},getMovieDetails(e){const t={language:v.b$};return l().get(`/movie/${e}`,{params:t})},getMovieCredits(e){const t={language:v.b$};return l().get(`movie/${e}/credits`,{params:t})}},d="movies",m=(0,s.Q_)(d,{state:i,getters:a,actions:{async FETCH_POPULAR_MOVIES(e=1,t={}){const o=await u.getPopularMovies(e,t);this.popularMovies=o.data},async FETCH_MOVIE_BY_NAME(e){const t=await u.searchMovieByName(e);this.searchMovies=t.data.results},async FETCH_SINGLE_MOVIE_INFORMATION(e){const t=await this.FETCH_MOVIE_DETAILS(e);return await this.FETCH_MOVIE_RECOMMENDATIONS(e),await this.FETCH_MOVIE_CREDITS(e),await this.FETCH_MOVIE_VIDEOS(e),t},async FETCH_MOVIE_DETAILS(e){const t=await u.getMovieDetails(e);return this.movie=t.data,t.data},async FETCH_MOVIE_RECOMMENDATIONS(e){const t=await u.getMovieRecommendations(e);this.moviesByRecommendation=t.data.results},async FETCH_MOVIE_CREDITS(e){const t=await u.getMovieCredits(e);this.movieCredits=t.data},async FETCH_MOVIE_VIDEOS(e){const t=await u.getMovieVideos(e);this.videos=t.data.results,this.selectedVideo=this.videos[0]},async FETCH_ALL_GENRES(){const e=await u.getGenres();this.genres=e.data.genres}},persist:{storage:localStorage}}),g={movies:m}},3921:(e,t,o)=>{o.d(t,{Z:()=>y});var s=o(8613),i=o(5304);const a=e=>((0,s.dD)("data-v-1b41d5be"),e=e(),(0,s.Cn)(),e),r={class:"row items-center justify-center",ref:"scrollComponent"},n={class:"flex items-center justify-center"},c={class:"absolute-bottom text-subtitle2"},l={class:"absolute-top-right",style:{background:"transparent"}},v=a((()=>(0,s._)("div",null,null,-1)));function u(e,t,o,a,u,d){const m=(0,s.up)("q-tooltip"),g=(0,s.up)("q-img"),p=(0,s.up)("q-card");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",r,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.moviesList,(t=>((0,s.wg)(),(0,s.j4)(p,{key:t.id,class:"item text-dark cursor-pointer",style:{"flex-direction":"column"},onClick:o=>e.goToMovie(t)},{default:(0,s.w5)((()=>[(0,s._)("div",n,[(0,s.Wm)(g,{src:e.imagePath(t.poster_path),height:"350px",width:"250px"},{default:(0,s.w5)((()=>[(0,s._)("div",c,[(0,s._)("p",null,(0,i.zw)(t.title),1)]),(0,s._)("div",l,[(0,s._)("span",{class:"text-dark",style:(0,i.j5)([{"background-color":e.colorSchema[Math.round(t.vote_average)]},{"border-radius":"8px",padding:"0.5em 1em"}])},[(0,s.Uk)((0,i.zw)(t.vote_average.toFixed(2))+" ",1),(0,s.Wm)(m,null,{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.$t("votes"))+": "+(0,i.zw)(t.vote_count),1)])),_:2},1024)],4)])])),_:2},1032,["src"])]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t[e.genresField],(t=>((0,s.wg)(),(0,s.iD)("span",{class:"inline-block",style:{"font-size":"12px",padding:"2px"},key:t},(0,i.zw)(e.isFavoritePage?t.name:e.movieStore.genresById[t]),1)))),128))])),_:2},1032,["onClick"])))),128))],512),v],64)}o(3177);var d=o(4725),m=o(9677);const g=(0,s.aZ)({name:"popular-movies-table",props:{isCategoryPage:{type:Boolean,required:!1,default:!1},categoryId:{type:Number,required:!1},isFavoritePage:{type:Boolean,required:!1,default:!1}},setup(){const e=m.Z.movies();return{movieStore:e}},data(){return{moviesList:[],colorSchema:d.VB,requestParams:{}}},methods:{handleScroll(e){let t=this.movieStore.popularMovies.page+1;window.scrollY+window.innerHeight>=document.body.scrollHeight&&this.movieStore.popularMovies.page!==t&&t<=this.movieStore.popularMovies.total_pages&&this.movieStore.FETCH_POPULAR_MOVIES(t,this.requestParams)},goToMovie(e){this.$router.push({name:"movie",params:{id:e.id}})}},computed:{imagePath(){return d.hp},genresField(){return this.isFavoritePage?"genres":"genre_ids"}},async mounted(){this.requestParams={...this.isCategoryPage&&{with_genres:this.categoryId}},this.isFavoritePage?this.moviesList=this.movieStore.favoriteMovies:(this.movieStore.FETCH_POPULAR_MOVIES(1,this.requestParams),window.addEventListener("scroll",this.handleScroll))},unmounted(){this.isFavoritePage||window.removeEventListener("scroll",this.handleScroll)},watch:{"movieStore.getPopularMovies":{handler:function(){this.moviesList.push(...this.movieStore.getPopularMovies)}},categoryId:{handler:async function(){this.requestParams["with_genres"]=this.categoryId,await this.movieStore.FETCH_POPULAR_MOVIES(1,this.requestParams),this.moviesList=this.movieStore.getPopularMovies}}}});var p=o(2815),h=o(7960),M=o(85),_=o(586),w=o(8150),E=o.n(w);const I=(0,p.Z)(g,[["render",u],["__scopeId","data-v-1b41d5be"]]),y=I;E()(g,"components",{QCard:h.Z,QImg:M.Z,QTooltip:_.Z})},9499:(e,t,o)=>{o.r(t),o.d(t,{default:()=>h});var s=o(8613),i=o(5304);const a={style:{"font-size":"32px"}},r={key:0};function n(e,t,o,n,c,l){const v=(0,s.up)("popular-movies-table"),u=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(u,{padding:""},{default:(0,s.w5)((()=>[(0,s._)("div",a,(0,i.zw)(e.$t("favoritesPageTitle")),1),e.movieStore.favoriteMovies.length?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",r,(0,i.zw)(e.$t("noFavoritesMessage")),1)),(0,s.Wm)(v,{"is-favorite-page":!0})])),_:1})}var c=o(3921),l=o(9677);const v=(0,s.aZ)({name:"favorites-page",components:{PopularMoviesTable:c.Z},setup(){const e=l.Z.movies();return{movieStore:e}}});var u=o(2815),d=o(6611),m=o(8150),g=o.n(m);const p=(0,u.Z)(v,[["render",n]]),h=p;g()(v,"components",{QPage:d.Z})}}]);