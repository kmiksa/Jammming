import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import './App.css';

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    searchResults: [{
      name:'',
      artist:'',
      album:''
    }],
    playlistName: 'Kuba',
    playlistTracks: [{
      name:'',
      artist:'',
      album:''
    }]
  };
  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  this.updatePlaylistName = this.updatePlaylistName.bind(this);
}
addTrack(track){
  let tracks = this.state.playlistTracks;
  if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
  }
  tracks.push(track);
  this.setState({playlistTracks: tracks});
}

removeTrack(track) {
    let playlistTracks = this.state.playlistTracks;
    let newPlaylistTracks = playlistTracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({playlistTracks: newPlaylistTracks});
  }

  updatePlaylistName(name) {
  this.setState({playlistName: name});
}

  render () {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} />
      <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.props.removeTrack}/>
    </div>
  </div>
</div>
    );
  }
};

export default App;
