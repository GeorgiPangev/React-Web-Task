import {ACTIONS} from "./actions";

const initialState = {
    fav: []
}
export default function favoriteReducer(state = initialState, action) {
    const newState = Object.assign({}, state)
    const reducers = {
        [ACTIONS.ADD_FAVORITE]: () => {
            if (state.fav.filter(e => e === action.payload) < 0) {
                newState.fav = [...state.fav, action.payload]
                console.log(newState)
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


