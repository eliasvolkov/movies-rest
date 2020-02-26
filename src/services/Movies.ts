import axios from 'axios';

const apiKey = String(process.env.REACT_APP_API_KEY);
const baseUrl = 'https://api.themoviedb.org/3';
const keyQuery = `api_key=${apiKey}`;

export const getPopularMovies = async (page: number = 1) => {
    const url = `${baseUrl}/discover/movie?${keyQuery}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;

    const response = await axios.get(url);

    return response.data;
};

// It's required to add type instead of 'any'
const matchingApiObject: { [unit: string]: any } = {
    popularMovies: getPopularMovies,
};

export const loadMore = async (name: string, currentPage: number = 2) => {
    const page = currentPage + 1;
    const response = await matchingApiObject[name].call(null, page);
    return response;
};
