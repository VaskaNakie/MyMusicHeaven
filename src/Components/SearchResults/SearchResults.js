import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/TrackList';


//////////////////////////////////////////////////////////////////////COMPONENT
class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList tracks={this.props.searchResults} 
                       onAdd={this.props.onAdd}
                       isRemoval={false}/>
        </div>
    )
  }
}
//////////////////////////////////////////////////////////////////////COMPONENT

export default SearchResults;
