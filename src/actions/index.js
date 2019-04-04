import getAlbums from '../services/node-api';

export const LOAD_DATA_FAILURE = 'LOAD_DATA_FAILURE';
export const ADD_ALBUMS_TO_STORE = 'ADD_ALBUMS_TO_STORE';

function addAlbumsToStore(albums, offset) {
    return { type: ADD_ALBUMS_TO_STORE,
        payload: {
            albums : albums,
            nextOffset : offset
        }
    } 
}

function errorInResponse() {
    return { type: LOAD_DATA_FAILURE   } 
}

export function searchAlbums(query, offset) {
    return dispatch => getAlbums(query, offset) 
        .then( response => {
            const { albums , nextOffset } = response;
            dispatch(addAlbumsToStore(albums, nextOffset))
            })
        .catch( err =>
            dispatch(errorInResponse())
        );
}