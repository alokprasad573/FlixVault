const API_KEY = "ccbfff96d470e247b513210440c1ea39";
const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2JmZmY5NmQ0NzBlMjQ3YjUxMzIxMDQ0MGMxZWEzOSIsIm5iZiI6MTc0NzQ3NzkyNS4wNzEsInN1YiI6IjY4Mjg2NWE1OWFiODFhZjUwNWY1NTFiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CfQhakV3uS0ORARxdBNGlLQ98UfOwCnhIGarwwhj1o0"
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchPopularMovies = async () => {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await res.json();
  return data.results;
};
export const fetchGenres = async () => {
  const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
  const data = await res.json();
  return data.genres; // [{id: 28, name: 'Action'}, ...]
};
export const searchMovies = async (query) => {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  const data = await res.json();
  return data.results;
};
