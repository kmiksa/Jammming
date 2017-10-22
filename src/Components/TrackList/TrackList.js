import React from 'react';

import './TrackList.css';

import Track from '../Track/Track.js';

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {
          this.props.tracks.map((track, i) => {
            return <Track track={track}
                          key={i}
                          onAdd={this.props.onAdd}
                          isRemoval={this.props.isRemoval}
                          onRemove={this.props.onRemove} />
          })
        }
      </div>
    );
  }
}

export default TrackList;
