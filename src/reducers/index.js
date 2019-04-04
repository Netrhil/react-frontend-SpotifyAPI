import { ADD_ALBUMS_TO_STORE, 
        LOAD_DATA_FAILURE , 
        LOAD_ALBUMS_TO_STORE,
        CHARGING} from '../actions/index';

const initialState = {
    albums: [],
    currentSearch: '',
    status: "" ,
    nextOffset : false,
    alert : false,
    isCharging: false,
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
                    albums: state.albums.concat(action.payload.albums),
                    nextOffset: action.payload.nextOffset,
                })
        
        case LOAD_ALBUMS_TO_STORE:
                return({
                    ...state,
                    albums: action.payload.albums,
                    nextOffset: action.payload.nextOffset,
                    currentSearch: action.payload.query,
                    status: action.payload.status,
                    alert : false,
                    alertContent: {
                        message: "",
                        type: ""
                    }
                })
                        
        
        case LOAD_DATA_FAILURE: 
            return({
                ...state,
                alert : true,
                alertContent: {
                    message: "an unexpected error has occurred",
                    type: "error"
                }
            })
        
        case CHARGING:
            return({
                ...state,
                isCharging: !state.isCharging
            })

        default:
            return state
    }

  }
