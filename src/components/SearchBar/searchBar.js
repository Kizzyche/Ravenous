import React from 'react';
import './searchBar.css';


const sortByOptions={
    'Best Match':'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component{

    renderSortByOptions(){
        // can also be refactored to this
        // let keyArray = [];
        // for(const key in sortByOptions){
        //     keyArray.push(key);
        // }
        
        // create a list of the sortoption properties with the values as keys
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>
        })
    }

    render(){
        return (
            <div className="SearchBar">
                <div class="SearchBar-sort-options">
                {/* Display a list of sort option properties */}
                    <ul>{this.renderSortByOptions()}</ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                
                    <a href="www.google.com">Let's Go</a>
                </div>
            </div>
        );
    }
}

// Export searchbar component 
export default SearchBar;