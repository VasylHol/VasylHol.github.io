import api from "./api";
import { appLanguage } from "src/utils";
export default {
  getPopularMovies(pageIndex, requestParams) {
    const params = {
      language: appLanguage,
      region: "UA",
      page: pageIndex,
      ...requestParams,
    };
    return api().get(`/movie/popular`, { params: params });
  },
  searchMovieByName(name) {
    const params = { language: appLanguage, query: name };
    return api().get(`/search/movie`, { params: params });
  },
  getGenres() {
    const params = { language: appLanguage };
    return api().get(`genre/movie/list`, { params: params });
  },
  getMovieVideos(id) {
    const params = { language: appLanguage };
    return api().get(`movie/${id}/videos`, { params: params });
  },
  getMovieRecommendations(id) {
    const params = { language: appLanguage };
    return api().get(`movie/${id}/similar`, { params: params });
  },
  getMovieDetails(id) {
    const params = { language: appLanguage };
    return api().get(`/movie/${id}`, { params: params });
  },
  getMovieCredits(id) {
    const params = { language: appLanguage };
    return api().get(`movie/${id}/credits`, { params: params });
  },
};
