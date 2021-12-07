import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
    movR: movieReducer,
    favR: favoritesReducer
});


export default rootReducer;