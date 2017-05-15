import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

// Import Style
import styles from '../components/SongListItem.css';

// Import Actions
import { fetchSong } from '../SongActions';

// Import Selectors
import { getSong } from '../SongReducer';

export function SongDetailPage(props) {
  return (
    <div>
      <Helmet title={props.song} />
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <h3 className={styles['post-title']}>{props.song}</h3>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in sever side.
SongDetailPage.need = [params => {
  return fetchSong(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    song: getSong(state, props.params.cuid),
  };
}

SongDetailPage.propTypes = {
  song: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(SongDetailPage);
