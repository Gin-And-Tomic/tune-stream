import callApi from '../../util/apiCaller';

// Export Actions
export function addSong(song) {
  return {
    type: 'ADD_SONG',
    song,
  };
}

export function addSongRequest(song) {
  return (dispatch) => {
    return callApi('songs', 'post', {
      song,
    }).then(res => dispatch(addSong(res.song)));
  };
}

export function addSongs(songs) {
  return {
    type: 'ADD_SONGS',
    songs,
  };
}

export function fetchSongs() {
  return (dispatch) => {
    return callApi('songs').then(res => {
      dispatch(addSongs(res));
    });
  };
}

export function fetchSong(id) {
  return (dispatch) => {
    return callApi(`songs/${id}`)
      .then(res => dispatch(addSong(res)));
  };
}

