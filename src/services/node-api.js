import axios from 'axios';

const API_URL = 'http://localhost:3000/api/SearchAlbum';

export default async function getAlbums(query, offset) {
    try {
        const response = await axios.get(API_URL, {
            params: {
                query: query,
                offset: offset
              }
        });

        const responseParsed = {
            status: "ok",
            albums: response.data.albums,
            nextOffset: response.data.next_offset
        }

        return responseParsed;

    } catch (error) {
        return {
            status: "error",
            albums: null,
            nextOffset: null
        }
    }

}