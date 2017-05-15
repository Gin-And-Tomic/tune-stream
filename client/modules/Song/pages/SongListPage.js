import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import SongList from '../components/SongList';

// Import Actions
import { fetchSongs } from '../SongActions';

// Import Selectors
import { getSongs } from '../SongReducer';

class SongListPage extends Component {
  componentWillMount() {
    this.props.dispatch(fetchSongs());
  }

  render() {
    return (
      <div>
        <SongList songs={this.props.songs} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
SongListPage.need = [() => { return fetchSongs(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  const sg = getSongs(state);
  return {
    songs: sg.songs,
  };
}

SongListPage.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

SongListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(SongListPage);
