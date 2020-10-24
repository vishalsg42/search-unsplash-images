import React from "react";

class SearchBar extends React.Component {

  state = {
    term: '',
  }
  onInputChange(event) {
    console.log("change", event.target.value);
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search-box">Image Search</label>
            <input
              type="search"
              id="search-box"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
