import React from 'react';
import './searchBar.css';




class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {term: "", location: "", sortBy: 'best_match' }

        this.sortByOptions={
            'Best Match':'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    //returns the current css class of the sortoptions 
    getSortByClass(sortByOption){
        if (this.state.sortBy === sortByOption){
            return 'active';
        }else{
            return "";
        }
    }
    //sets the state of the sort options
    handleSortByChange(sortByOption){
        this.setState({sortBy: sortByOption})
    }
    //sets the state of the term in the input 
    handleTermChange(event){
        this.setState({term: event.target.value})
    }
    // sets the state of the location in the input
    handleLocationChange(event){
        this.setState({location: event.target.value})
    }
    // handles the lets go button when clicked
    handleSearch(event){
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
        // stops the default action of clicking a link at the endf of the method
        event.preventDefault();
    }
    renderSortByOptions(){
        
        // create a list of the sortoption properties with the values as keys
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            // getSortByClass is called here and the sortoption value is passed to compare wit the state and check if its active
            return <li 
                className={this.getSortByClass(sortByOptionValue)}
                // binds the current value of this and the current value of the sortByoptions value
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                key={sortByOptionValue}>
                {sortByOption}</li>
        })
    }

    render(){
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                {/* Display a list of sort option properties */}
                    <ul>{this.renderSortByOptions()}</ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange}/>
                    <input placeholder="Where?" onChange={this.handleLocationChange}/>
                </div>
                <div className="SearchBar-submit">
                
                    <a href="www.google.com" onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        );
    }
}

// Export searchbar component 
export default SearchBar;