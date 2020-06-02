import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/businessList';
import SearchBar from '../SearchBar/searchBar'

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
