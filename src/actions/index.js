import getAlbums from '../services/node-api';

export const LOAD_DATA_FAILURE = 'LOAD_DATA_FAILURE';
export const ADD_ALBUMS_TO_STORE = 'ADD_ALBUMS_TO_STORE';
export const LOAD_ALBUMS_TO_STORE = 'LOAD_ALBUMS_TO_STORE';
export const CHARGING = "CHARGING";

function loadAlbumsToStore(albums, offset, query, status) {
    return { type: LOAD_ALBUMS_TO_STORE,
        payload: {
            albums : albums,
            nextOffset : offset,
            query: query,
            status: status
        }
    } 
}

function addAlbumsToStore(albums, offset) {
    return { type: ADD_ALBUMS_TO_STORE,
        payload: {
            albums : albums,
            nextOffset : offset
        }
    } 
}


function errorInResponse() {
    return { type: LOAD_DATA_FAILURE} 
}

export function charging() {
    return { type: CHARGING}
}


export function searchAlbums(query, offset) {
    return dispatch => getAlbums(query, offset) 
        .then( response => {
            console.log(response)
            const { albums , nextOffset , status} = response;
                dispatch(loadAlbumsToStore(albums, nextOffset, query, status));
                dispatch(charging());
            })
        .catch( err => {
            dispatch(charging());
            dispatch(errorInResponse());
            }
        );
}

export function addNewAlbums(query, offset) {
    return dispatch => getAlbums(query, offset) 
    .then( response => {
        const { albums , nextOffset } = response;
            dispatch(addAlbumsToStore(albums, nextOffset));
            dispatch(charging());
        })
    .catch( err =>{
        dispatch(charging());
        dispatch(errorInResponse());
        }
    );
}