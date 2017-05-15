// Initial State
const initialState = { songs: [] };

const SongReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SONG' :
      return {
        songs: [action.song, ...state.songs],
      };

    case 'ADD_SONGS' :
      return {
        songs: action.songs || [],
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all songs
export const getSongs = state => state.songs;

// Get song by id
export const getSong = (state, id) => state.songs.filter(song => song.id === id)[0];

// Export Reducer
export default SongReducer;
