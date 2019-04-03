import { ADD_ALBUMS_TO_STORE} from '../actions/index';

const initialState = {
    albums: [],
    nextOffset : false
}

export default function searchApp(state = initialState, action) {
    
    switch (action.type) {

        case ADD_ALBUMS_TO_STORE:
            return({
                ...state,
                albums: action.payload.albums,
                nextOffset: action.payload.nextOffset
            })

        default:
            return state
    }

  }
