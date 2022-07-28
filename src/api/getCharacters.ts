import axios from 'axios';

export const getCharacters = async (page: number) => {
    const { data } = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
    return data;
}
