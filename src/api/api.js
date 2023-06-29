import axios from "axios";
import shared from "./shared";
// const API_KEY = 'd24a37758203adfc1239abe160df7d62';
// const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjRhMzc3NTgyMDNhZGZjMTIzOWFiZTE2MGRmN2Q2MiIsInN1YiI6IjY0OTZmNjA4OTU1YzY1MDBjN2FlMzkyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lc7BQHBo_wOVAK64z9qyT-IRjFZdF1-H7ZPeuIj_7GU'
let base_url = `https://api.themoviedb.org/3`; //
// api caching
export default function () {
  const token = shared.getCookie("movies_token");
  const axiosInstance = axios.create({
    baseURL: base_url,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return axiosInstance;
}
