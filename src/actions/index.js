export const SEARCH_ALBUMS = 'SEARCH_ALBUMS';
export const ADD_ALBUMS_TO_STORE = 'ADD_ALBUMS_TO_STORE';

export function addAlbumsToStore(albums, offset) {
    return { type: ADD_ALBUMS_TO_STORE,
        payload: {
            albums : albums,
            nextOffset : offset
        }
    } 
}