import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { API_URL } from '../../../util/apiCaller';


// Import Style
import styles from '../components/SongListItem.css';

// Import Actions
import { fetchSong } from '../SongActions';

// Import Selectors
import { getSong } from '../SongReducer';

const concat = (acc, a) => `${acc} ${a}`;

// {title, artist, albumartist, album, year, track, genre, disk, picture, duration}
export function SongDetailPage(props) {
  const { title, artist, albumartist, album, year } = props.song;
  return (
    <div>
      <Helmet title={title} />
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <h2 className={styles['post-title']}>{title}</h2>

        <h3>{artist.reduce(concat, '')}</h3>

        album artists - {albumartist.reduce(concat, '')}
        <p />
        album - {album}
        <p />
        year - {year}
        <p />

        <audio src={`${API_URL}/library/${props.params.id}`} controls />
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in sever side.
SongDetailPage.need = [params => {
  return fetchSong(params.id);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    song: getSong(state.songs, props.params.id),
  };
}

SongDetailPage.propTypes = {
  song: PropTypes.any.isRequired,
  params: PropTypes.object,
};

export default connect(mapStateToProps)(SongDetailPage);
