import {ACTIONS} from "./actions";

const initialState = {
    fav: []
}
export default function favoriteReducer(state = initialState, action) {
    const newState = Object.assign({}, state)
    console.log("In FavoriteReducer" + action.payload)
    const reducers = {
        [ACTIONS.ADD_FAVORITE]: () => {
            console.log(state.fav.filter(e => e.id === action.payload.id))
            if (state.fav.filter(e => e.id === action.payload.id).length === 0) {
                newState.fav = [...state.fav, action.payload]
            }
        },
        [ACTIONS.REM_FAVORITE]:
            () => {
                const index = state.fav.indexOf(action.payload)
                if (index > -1) {
                    newState.fav = newState.fav.slice()
                    newState.fav.splice(index, 1)
                }
            },
    };
    reducers[action.type] && reducers[action.type]()
    return newState;
}


