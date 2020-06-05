import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/businessList';
import SearchBar from '../SearchBar/searchBar';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

// Array of businesses
const businesses = [business, business, business, business, business];

// create App component 
class App extends React.Component{

  searchYelp(term, location, sortBy){
    console.log('Searching Yelp with Pizza, Brooklyn, best_match')
  }

  render(){
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        {/* pass business array to Business list instance */}
        <BusinessList businesses={businesses} />
      </div>
    );
  }
  
}

// export App component
export default App;
