import { ADD_ALBUMS_TO_STORE, LOAD_DATA_FAILURE} from '../actions/index';

const initialState = {
    albums: [],
    nextOffset : false,
    alert : false,
    alertContent: {
        message: "",
        type: ""
    }
}

export default function searchApp(state = initialState, action) {
    
    switch (action.type) {

        case ADD_ALBUMS_TO_STORE:
            return({
                ...state,
                albums: action.payload.albums,
                nextOffset: action.payload.nextOffset,
                alert : false,
                alertContent: {
                    message: "",
                    type: ""
                }
            })
        
        case LOAD_DATA_FAILURE: 
            return({
                alert : true,
                alertContent: {
                    message: "an unexpected error has occurred",
                    type: "error"
                }
            })

        default:
            return state
    }

  }
