import React, { PropTypes } from 'react';

// Import Components
import SongListItem from './SongListItem';

function SongList(props) {
  return (
    <div className="listView">
      {
        props.songs.map(song => (
          <SongListItem
            song={song}
            key={song}
          />
        ))
      }
    </div>
  );
}

SongList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SongList;
