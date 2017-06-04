// Initial State
const initialState = { songs: [], song: undefined };

const SongReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SONG' :
      return {
        ...state,
        song: action.song,
      };

    case 'ADD_SONGS' :
      return {
        ...state,
        songs: [action.song, ...state.songs],
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all songs
export const getSongs = state => state.songs;

// Get song by id
export const getSong = state => state.song;
// Export Reducer
export default SongReducer;
