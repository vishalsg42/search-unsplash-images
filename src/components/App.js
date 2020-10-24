import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImagesList from './ImagesList';

class App extends React.Component {

  state = {
    images: [],

  }

  onSearchSubmit = async (term) => {
    console.log('term', term);
    let responseImage = await unsplash.get(`/search/photos`, {
      params: {
        query: term,
      },

    });
    this.setState({ images: responseImage.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images && this.state.images.length} images
        <ImagesList images={this.state.images} />
      </div>
    )
  }
}

export default App;
