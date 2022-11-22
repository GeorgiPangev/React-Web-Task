export const ACTIONS = {
    ADD_FAVORITE: "favorites/addFavorite",
    REM_FAVORITE: "favorites/removeFavorite"
}

export const addFav= (element) =>{
    return{type: ACTIONS.ADD_FAVORITE, payload:element}
};

export const remFav = (element)=>{
    return{type: ACTIONS.REM_FAVORITE, payload:element}
}