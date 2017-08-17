import React, { Component } from 'react';
import axios from 'axios'
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';

class App extends Component {
  constructor(){
    super();

    this.state = {
      title: "",
      year: 0,
      director: "",
      plot: "",
      genre: "",
      poster: "",
    }
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  _searchByTitle = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    axios.get(`http://www.omdbapi.com/?t=${title}&apikey=d31f1a94`)
      .then((res) => {
        this.setState({
          title: res.data.Title,
          year: res.data.Year,
          director: res.data.Director,
          plot: res.data.Plot,
          genre: res.data.Genre,
          poster: res.data.imdbID,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    
  }

  _searchById = (event) => {
    event.preventDefault();
    const id = event.target.id.value;
    axios.get(`http://www.omdbapi.com/?i=${id}&apikey=d31f1a94`)
      .then((res) => {
        this.setState({
          title: res.data.Title,
          year: res.data.Year,
          director: res.data.Director,
          plot: res.data.Plot,
          genre: res.data.Genre,
          poster: res.data.imdbID
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {

    return (
      <div className="App">
        <Header />
        <Search 
          searchByTitle = {this._searchByTitle}
          searchById = {this._searchById}
          />
        <Movie 
            title={this.state.title || "Search for a movie"}
            year={this.state.year || "search"}
            director={this.state.director || "find a movie"}
            plot={this.state.plot || "Search for a movie using the search bar above."}
            genre={this.state.genre || "exploration"}
            poster={this.state.poster}
            />
      </div>
    );
  }
}

export default App;
