

export const getters = {
    getPopularMovies(state) {
        const { popularMovies } = state
        return popularMovies.results
    },
    movieProductionCountries(state) {
        const { movie } = state
        return movie?.production_countries?.map(el => el.name).join(', ')
    },
    movieGenres(state) {
        const { movie } = state
        return movie?.genres?.map(el => el.name).join(', ')
    },
    mainMovieActors(state) {
        const { movieCredits } = state
        return movieCredits?.cast?.slice(0, 8)
    },
    genresById(state) {
        const { genres } = state
        const newObj = {};
        genres.map(el => { newObj[el.id] = el.name })
        return newObj

    }
}