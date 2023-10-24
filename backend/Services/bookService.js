import axios from 'axios';

const genres = ["fiction", "mystery", "fantasy", "history", "science", "romance", "biography", "self-help", "business", "thriller"];
const apiKey = process.env.GOOGLE_BOOKS_API_KEY;

export async function fetchBooksFromGoogleAPI(query) {
    console.log("hello from google");
    const googleBooksApiKey = apiKey;
    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${googleBooksApiKey}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export async function fetchTrendingBooks(genre = null, language = "en") {
    genre = genre || genres[Math.floor(Math.random() * genres.length)];
    const maxResults = 10;

    const url = `https://www.googleapis.com/books/v1/volumes?q=${genre}&orderBy=newest&maxResults=${maxResults}&langRestrict=${language}&key=${apiKey}`;
    const { data } = await axios.get(url);
    return data.items;
}

export async function fetchAllBooksList(genre = null, searchTerm = '', language = "en") {
    genre = genre || genres[Math.floor(Math.random() * genres.length)];
    const maxResults = 10;

    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}${genre ? `+subject:${genre}` : ''}&maxResults=${maxResults}&langRestrict=${language}&key=${apiKey}`;
    const { data } = await axios.get(url);
    return data.items;
}

export async function fetchTopRatedBooks(genre = null, language = "en") {
    genre = genre || genres[Math.floor(Math.random() * genres.length)];
    const maxResults = 40;

    const url = `https://www.googleapis.com/books/v1/volumes?q=${genre}&maxResults=${maxResults}&langRestrict=${language}&key=${apiKey}`;
    const { data } = await axios.get(url);
    if (data.items) {
        return data.items.sort((a, b) => (b.volumeInfo.averageRating || 0) - (a.volumeInfo.averageRating || 0)).slice(0, 10);
    } else {
        return [];
    }
}
