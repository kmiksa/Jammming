import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
     term: ''
   };

   this.handleTermChange = this.handleTermChange.bind(this);
   this.search = this.search.bind(this);
   this.handleKeyPress = this.handleKeyPress.bind(this);

  }

  search(event) {
      this.props.onSearch(this.state.term);
  }

  handleTermChange(event){
  this.setState({term: event.target.value});
}

handleKeyPress(event) {
    if(event.key === 'Enter') {
      this.search();
    }
  }

render() {
    return(
      <div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}  /** onKeyUp={this.search} this code will trigger search while typing in the searchBar*/ onKeyDown={this.handleKeyPress}/>
  <a onClick={this.search}>SEARCH</a>
</div>
    );
  }
};

export default SearchBar;
