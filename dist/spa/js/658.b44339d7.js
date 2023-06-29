(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[658],{4683:(e,t,o)=>{"use strict";o.d(t,{Z:()=>u});var i=o(3746);const s=()=>({paginationPage:1,popularMovies:[],favoriteMovies:[],searchMovies:[],movie:{},moviesByRecommendation:[],movieCredits:{},videos:[],selectedVideo:{},genres:[]}),a={getPopularMovies(e){const{popularMovies:t}=e;return t.results},movieProductionCountries(e){const{movie:t}=e;return t?.production_countries?.map((e=>e.name)).join(", ")},movieGenres(e){const{movie:t}=e;return t?.genres?.map((e=>e.name)).join(", ")},mainMovieActors(e){const{movieCredits:t}=e;return t?.cast?.slice(0,8)},genresById(e){const{genres:t}=e,o={};return t.map((e=>{o[e.id]=e.name})),o}};var r=o(7524);const n={getCookie(e){let t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0}};let c="https://api.themoviedb.org/3";function l(){const e=n.getCookie("movies_token"),t=r.Z.create({baseURL:c,headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}});return t}var m=o(1193);const d={getPopularMovies(e,t){const o={language:m.b$,region:"UA",page:e,...t};return l().get("/movie/popular",{params:o})},searchMovieByName(e){const t={language:m.b$,query:e};return l().get("/search/movie",{params:t})},getGenres(){const e={language:m.b$};return l().get("genre/movie/list",{params:e})},getMovieVideos(e){const t={language:m.b$};return l().get(`movie/${e}/videos`,{params:t})},getMovieRecommendations(e){const t={language:m.b$};return l().get(`movie/${e}/similar`,{params:t})},getMovieDetails(e){const t={language:m.b$};return l().get(`/movie/${e}`,{params:t})},getMovieCredits(e){const t={language:m.b$};return l().get(`movie/${e}/credits`,{params:t})}},v="movies",p=(0,i.Q_)(v,{state:s,getters:a,actions:{async FETCH_POPULAR_MOVIES(e=1,t={}){const o=await d.getPopularMovies(e,t);this.popularMovies=o.data},async FETCH_MOVIE_BY_NAME(e){const t=await d.searchMovieByName(e);this.searchMovies=t.data.results},async FETCH_SINGLE_MOVIE_INFORMATION(e){const t=await this.FETCH_MOVIE_DETAILS(e);return await this.FETCH_MOVIE_RECOMMENDATIONS(e),await this.FETCH_MOVIE_CREDITS(e),await this.FETCH_MOVIE_VIDEOS(e),t},async FETCH_MOVIE_DETAILS(e){const t=await d.getMovieDetails(e);return this.movie=t.data,t.data},async FETCH_MOVIE_RECOMMENDATIONS(e){const t=await d.getMovieRecommendations(e);this.moviesByRecommendation=t.data.results},async FETCH_MOVIE_CREDITS(e){const t=await d.getMovieCredits(e);this.movieCredits=t.data},async FETCH_MOVIE_VIDEOS(e){const t=await d.getMovieVideos(e);this.videos=t.data.results,this.selectedVideo=this.videos[0]},async FETCH_ALL_GENRES(){const e=await d.getGenres();this.genres=e.data.genres}},persist:{storage:localStorage}}),u={movies:p}},6658:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>De});var i=o(9835),s=o(6970);const a={key:0},r={key:1},n={class:"row"},c={class:"col-3 q-mr-sm"},l={class:"flex items-center",style:{"flex-direction":"column"}},m={class:"q-pa-sm",style:{"margin-right":"auto","margin-bottom":"0","font-weight":"600","font-size":"1.4em"}};function d(e,t,d,v,p,u){const g=(0,i.up)("movie-details-skeleton"),h=(0,i.up)("q-img"),w=(0,i.up)("movie-details"),_=(0,i.up)("actors-carousel"),f=(0,i.up)("video-player"),y=(0,i.up)("recommendation-movie-list"),x=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(x,{padding:"",style:{"overflow-x":"hidden"}},{default:(0,i.w5)((()=>[e.skeleton?((0,i.wg)(),(0,i.iD)("div",a,[(0,i.Wm)(g)])):((0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("div",n,[(0,i._)("div",c,[(0,i.Wm)(h,{src:e.imgPath,class:"movie-poster"},{error:(0,i.w5)((()=>[(0,i.Wm)(h,{class:"movie-poster",fit:"cover",src:o(8927)},null,8,["src"])])),default:(0,i.w5)((()=>[(0,i._)("span",{style:(0,s.j5)([{"background-color":e.ratingColor},{"border-radius":"8px",padding:"0.5em 1em"}]),class:"text-black absolute-bottom-right q-ma-sm"},(0,s.zw)(e.movie.vote_average.toFixed(2)),5)])),_:1},8,["src"])]),(0,i.Wm)(w,{movie:e.movie},null,8,["movie"])]),(0,i._)("div",l,[(0,i._)("h3",m,(0,s.zw)(e.$t("mainActors")),1),(0,i.Wm)(_)]),(0,i.Wm)(f),(0,i.Wm)(y)]))])),_:1})}var v=o(1193);const p={class:"flex"};function u(e,t,o,s,a,r){const n=(0,i.up)("actor-card");return(0,i.wg)(),(0,i.iD)("div",p,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.movieStore.mainMovieActors,(e=>((0,i.wg)(),(0,i.j4)(n,{actor:e,key:e.id},null,8,["actor"])))),128))])}var g=o(4683);const h={class:"text-dark",style:{"line-height":"normal"}},w={class:"",style:{"font-weight":"bold","font-size":"1em",padding:"10px 10px 0 10px",margin:"0"}},_={class:"",style:{"font-size":"0.9em",padding:"0 10px",margin:"0"}};function f(e,t,o,a,r,n){const c=(0,i.up)("q-img"),l=(0,i.up)("q-card");return(0,i.wg)(),(0,i.j4)(l,{class:"actor-card q-ma-sm",flat:""},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{src:e.actorImage,width:"138px",height:"175px"},null,8,["src"]),(0,i._)("div",h,[(0,i._)("p",w,(0,s.zw)(e.actor.name),1),(0,i._)("p",_,(0,s.zw)(e.actor.character),1)])])),_:1})}const y=(0,i.aZ)({name:"actor-card",props:{actor:{type:Object,required:!0}},computed:{actorImage(){return(0,v.hp)(this.actor.profile_path)}}});var x=o(1639),M=o(4458),I=o(335),k=o(9984),b=o.n(k);const C=(0,x.Z)(y,[["render",f],["__scopeId","data-v-177e8bf0"]]),E=C;b()(y,"components",{QCard:M.Z,QImg:I.Z});const S=(0,i.aZ)({name:"actors-carousel",components:{ActorCard:E},setup(){const e=g.Z.movies();return{movieStore:e}},computed:{}}),Z=(0,x.Z)(S,[["render",u]]),D=Z,q={class:"col flex",style:{"flex-wrap":"initial","flex-direction":"column"}},T={class:"flex items-center"},V={class:"text-h3"},$={class:"text-italic"},z={class:"flex q-py-sm",style:{"flex-direction":"column"}},O={class:"text-h5"},F={class:"q-py-md",style:{"font-size":"1.3em","line-height":"initial"}};function W(e,t,o,a,r,n){const c=(0,i.up)("q-space"),l=(0,i.up)("q-tooltip"),m=(0,i.up)("q-icon");return(0,i.wg)(),(0,i.iD)("div",q,[(0,i._)("div",null,[(0,i._)("div",T,[(0,i._)("span",V,(0,s.zw)(e.movie.title),1),(0,i.Wm)(c),(0,i.Wm)(m,{class:"cursor-pointer",size:"24px",color:"white",name:e.isFavoriteMovie?"fa-solid fa-heart":"fa-regular fa-heart",onClick:t[0]||(t[0]=t=>e.addToFavorite(e.movie))},{default:(0,i.w5)((()=>[(0,i.Wm)(l,null,{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.$t("additionToFavorites")),1)])),_:1})])),_:1},8,["name"])]),(0,i._)("p",$,(0,s.zw)(e.movie.tagline),1)]),(0,i._)("div",z,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.details,((t,o)=>((0,i.wg)(),(0,i.iD)("p",{key:o},(0,s.zw)(e.$t(o))+": "+(0,s.zw)(t),1)))),128))]),(0,i.Wm)(c),(0,i._)("span",O,(0,s.zw)(e.$t("whatIsAbout"))+' "'+(0,s.zw)(e.movie.title)+'":',1),(0,i._)("span",F,(0,s.zw)(e.movie.overview),1)])}o(9665);const H=(0,i.aZ)({name:"movie-details",components:{},props:{movie:{type:Object,required:!0}},setup(){const e=g.Z.movies();return{movieStore:e}},methods:{addToFavorite(e){this.isFavoriteMovie?this.movieStore.favoriteMovies=this.movieStore.favoriteMovies.filter((t=>t.id!==e.id)):this.movieStore.favoriteMovies.push(e)}},computed:{isFavoriteMovie(){return!!this.movieStore.favoriteMovies.filter((e=>e.id===this.movie.id))?.[0]},details(){return{releaseDate:this.movie.release_date,country:this.movieStore.movieProductionCountries,genres:this.movieStore.movieGenres,runTime:`${this.movie.runtime} ${this.$t("min")}`}}}});var P=o(136),A=o(2857),R=o(6858);const j=(0,x.Z)(H,[["render",W]]),N=j;b()(H,"components",{QSpace:P.Z,QIcon:A.Z,QTooltip:R.Z});const Q={class:"row"},L={class:"col-3 q-mr-sm"},B={class:"col flex",style:{"flex-wrap":"initial","flex-direction":"column"}},Y={class:"flex items-center"},G={class:"flex q-py-sm",style:{"flex-direction":"column"}};function K(e,t,o,s,a,r){const n=(0,i.up)("q-skeleton"),c=(0,i.up)("q-space");return(0,i.wg)(),(0,i.iD)("div",Q,[(0,i._)("div",L,[(0,i.Wm)(n,{class:"movie-poster",animation:"wave"})]),(0,i._)("div",B,[(0,i._)("div",null,[(0,i._)("div",Y,[(0,i.Wm)(n,{width:"90%",height:"50px",animation:"wave"})]),(0,i.Wm)(n,{type:"text",width:"50px",animation:"wave"})]),(0,i._)("div",G,[((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(4,(e=>(0,i.Wm)(n,{key:e,type:"text",width:"300px",animation:"wave"}))),64))]),(0,i.Wm)(c),(0,i.Wm)(n,{width:"300px",height:"50px",animation:"wave"}),((0,i.wg)(),(0,i.iD)(i.HY,null,(0,i.Ko)(4,(e=>(0,i.Wm)(n,{type:"text",width:"100%",key:e+10,animation:"wave"}))),64))])])}const U=(0,i.aZ)({name:"movie-details-skeleton"});var J=o(7133);const X=(0,x.Z)(U,[["render",K],["__scopeId","data-v-11caf7b4"]]),ee=X;b()(U,"components",{QSkeleton:J.ZP,QSpace:P.Z});const te={style:{"font-size":"32px"},class:"q-pa-sm"},oe={style:{"overflow-x":"auto","max-width":"100%"},class:"flex no-wrap q-pb-sm"},ie=["onClick"],se={style:{"text-overflow":"ellipsis",overflow:"hidden","white-space":"nowrap","max-width":"140px"}};function ae(e,t,a,r,n,c){const l=(0,i.up)("q-img");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("span",te,(0,s.zw)(e.$t("recommendations")),1),(0,i._)("div",oe,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.movieStore.moviesByRecommendation,(t=>((0,i.wg)(),(0,i.iD)("div",{key:t.div,class:"self-start q-mx-sm cursor-pointer",onClick:o=>e.goToMovie(t.id)},[(0,i.Wm)(l,{height:"140px",width:"250px",style:{"border-radius":"16px"},src:e.getImagePath(t.backdrop_path)},{error:(0,i.w5)((()=>[(0,i.Wm)(l,{fit:"cover",src:o(8927)},null,8,["src"])])),_:2},1032,["src"]),(0,i._)("p",se,(0,s.zw)(t.title),1)],8,ie)))),128))])],64)}const re=(0,i.aZ)({name:"recommendation-movie-list",setup(){const e=g.Z.movies();return{movieStore:e}},methods:{getImagePath(e){return(0,v.hp)(e)},goToMovie(e){this.$router.push({name:"movie",params:{id:e}})}}}),ne=(0,x.Z)(re,[["render",ae],["__scopeId","data-v-fc9fe058"]]),ce=ne;b()(re,"components",{QImg:I.Z});const le={class:"flex q-pa-sm",style:{"flex-direction":"column"}},me={style:{"font-size":"32px"}},de={key:0,class:"q-pa-md"},ve={key:1,class:"flex justify-center"};function pe(e,t,o,a,r,n){const c=(0,i.up)("youtube-player"),l=(0,i.up)("video-list");return(0,i.wg)(),(0,i.iD)("div",le,[(0,i._)("div",me,(0,s.zw)(e.$t("videos")),1),e.movieStore.selectedVideo?.key?((0,i.wg)(),(0,i.iD)("div",ve,[(0,i.Wm)(c,{videoid:e.movieStore.selectedVideo.key,width:600,height:350,controls:1,autoplay:0,ref:"youtube"},null,8,["videoid"]),(0,i.Wm)(l)])):((0,i.wg)(),(0,i.iD)("div",de,(0,s.zw)(e.$t("videoNotFoundMessage")),1))])}const ue={class:"video-list text-dark",style:{overflow:"hidden"}},ge={class:"cursor-pointer video-card",style:{"overflow-y":"auto","max-height":"350px"}};function he(e,t,o,a,r,n){const c=(0,i.up)("video-card");return(0,i.wg)(),(0,i.iD)("div",ue,[(0,i._)("div",ge,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.movieStore.videos,(t=>((0,i.wg)(),(0,i.j4)(c,{key:t.id,video:t,style:(0,s.j5)({"background-color":t.id===e.movieStore.selectedVideo.id?"rgb(160, 160, 160)":""}),class:"q-pa-sm",onClick:o=>e.selectVideo(t)},null,8,["video","style","onClick"])))),128))])])}function we(e,t,o,a,r,n){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("p",null,(0,s.zw)(e.video.name),1),(0,i._)("p",null,(0,s.zw)(e.video.type),1)])}const _e=(0,i.aZ)({name:"video-card",props:{video:{type:Object,required:!0}},setup(){const e=g.Z.movies();return{movieStore:e}}}),fe=(0,x.Z)(_e,[["render",we],["__scopeId","data-v-fb97bbfe"]]),ye=fe,xe=(0,i.aZ)({components:{VideoCard:ye},name:"video-list",setup(){const e=g.Z.movies();return{movieStore:e}},methods:{selectVideo(e){this.movieStore.selectedVideo=e}}}),Me=(0,x.Z)(xe,[["render",he],["__scopeId","data-v-46344fff"]]),Ie=Me,ke=(0,i.aZ)({name:"video-player",components:{VideoList:Ie},setup(){const e=g.Z.movies();return{movieStore:e}}}),be=(0,x.Z)(ke,[["render",pe]]),Ce=be,Ee=(0,i.aZ)({name:"movie-page",components:{MovieDetails:N,ActorsCarousel:D,VideoPlayer:Ce,RecommendationMovieList:ce,MovieDetailsSkeleton:ee},props:{id:{type:String,required:!0}},setup(){const e=g.Z.movies(),t="https://image.tmdb.org/t/p/w500";return{movieStore:e,imgDatabasePath:t}},data(){return{movie:null,skeleton:!1}},computed:{imgPath(){return`${this.imgDatabasePath}${this.movie.poster_path}`},ratingColor(){return v.VB[Math.round(this.movie.vote_average)]},youtubePath(){return this.movieStore.videos[0].key}},watch:{id:{handler:async function(){this.skeleton=!0,this.movie=await this.movieStore.FETCH_SINGLE_MOVIE_INFORMATION(this.id),this.skeleton=!1},immediate:!0}}});var Se=o(9885);const Ze=(0,x.Z)(Ee,[["render",d],["__scopeId","data-v-21a3bc8a"]]),De=Ze;b()(Ee,"components",{QPage:Se.Z,QImg:I.Z})},8927:(e,t,o)=>{e.exports=o.p+"img/image-not-found.c160315d.jpg"}}]);