export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const toggleFavorites = ()=> {
    console.log("in toggleFavories of action page");
    return({type: TOGGLE_FAVORITES});
}

export const addFavorite = (movie)=> {
    return({type: ADD_FAVORITE, payload:movie});
}

export const removeFavorite = (id)=> {
    return({type: REMOVE_FAVORITE, payload:id});
}