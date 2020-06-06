import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/businessList';
import SearchBar from '../SearchBar/searchBar';
import {Yelp} from '../../util/Yelp.js'



// create App component 
class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {businesses:[]}
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy){
    Yelp.search(term, location, sortBy).then(businesses=>{
      this.setState({businesses: businesses})
    });
  }

  render(){
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        {/* pass business array to Business list instance */}
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
  
}

// export App component
export default App;
