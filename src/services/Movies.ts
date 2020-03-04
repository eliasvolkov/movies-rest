import axios from 'axios';

const apiKey = String(process.env.REACT_APP_API_KEY);
const baseUrl = 'https://api.themoviedb.org/3';
const keyQuery = `api_key=${apiKey}`;

export const getPopularMovies = async (page: number = 1) => {
    const url = `${baseUrl}/discover/movie?${keyQuery}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;

    const response = await axios.get(url);

    return response.data;
};

export const getMovie = async (movieId: number) => {
    const url = `${baseUrl}/movie/${movieId}?${keyQuery}&language=en-US`;

    const response = await axios.get(url);

    return response.data;
};

export const getHeroMovies = async () => {
    const moviesId = [37710, 273481, 529216];
    const movies = await Promise.all(moviesId.map(movieId => getMovie(movieId)));

    return movies;
};

export const searchMovies = async (page: number = 1, query: string) => {
    const url = `${baseUrl}/search/movie?${keyQuery}&language=en-US&query=${query}&page=${page}&include_adult=false`;

    const response = await axios.get(url);

    return response.data;
};

// It's required to add type instead of 'any'
const matchingApiObject: { [unit: string]: any } = {
    popularMovies: getPopularMovies,
    searchMovies,
};

export const loadMore = async (name: string, currentPage: number = 2, query?: string) => {
    const page = currentPage + 1;
    const response = await matchingApiObject[name].call(null, page, query);
    return response;
};
