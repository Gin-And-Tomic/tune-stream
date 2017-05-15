/**
 * Root Reducer
 */
import { combineReducers } from 'redux';

// Import Reducers
import songs from './modules/Song/SongReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  songs,
});
