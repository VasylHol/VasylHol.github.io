import { defineStore } from "pinia";
import { state } from "./state";
import { getters } from './getters'
import call from 'src/api/main'
const key = 'movies'
export default defineStore(key, {
    state,
    getters,
    actions: {
        async FETCH_POPULAR_MOVIES(pageIndex = 1, requestParams = {}) {
            const res = await call.getPopularMovies(pageIndex, requestParams)
            this.popularMovies = res.data
        },
        async FETCH_MOVIE_BY_NAME(name) {
            const res = await call.searchMovieByName(name)
            this.searchMovies = res.data.results
        },
        async FETCH_SINGLE_MOVIE_INFORMATION(movieId) {
            const movie = await this.FETCH_MOVIE_DETAILS(movieId)
            await this.FETCH_MOVIE_RECOMMENDATIONS(movieId)
            await this.FETCH_MOVIE_CREDITS(movieId)
            await this.FETCH_MOVIE_VIDEOS(movieId)
            return movie
        },
        async FETCH_MOVIE_DETAILS(movieId) {
            const res = await call.getMovieDetails(movieId)
            this.movie = res.data
            return res.data
        },
        async FETCH_MOVIE_RECOMMENDATIONS(movieId) {
            const res = await call.getMovieRecommendations(movieId)
            this.moviesByRecommendation = res.data.results
        },
        async FETCH_MOVIE_CREDITS(movieId) {
            const res = await call.getMovieCredits(movieId)
            this.movieCredits = res.data
        },
        async FETCH_MOVIE_VIDEOS(movieId) {
            const res = await call.getMovieVideos(movieId)
            this.videos = res.data.results
            this.selectedVideo = this.videos[0]
        },
        async FETCH_ALL_GENRES() {
            const res = await call.getGenres();
            this.genres = res.data.genres
        }
    },
    persist: {
        storage: localStorage,
    },
})