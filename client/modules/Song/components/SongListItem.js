import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './SongListItem.css';

function SongListItem(props) {
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`/songs/${props.song}`} >
          {props.song}
        </Link>
      </h3>
      <hr className={styles.divider} />
    </div>
  );
}

SongListItem.propTypes = {
  song: PropTypes.string.isRequired,
};

export default SongListItem;
