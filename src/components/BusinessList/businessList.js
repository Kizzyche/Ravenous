import React from 'react';
import './businessList.css';
import Business from '../Business/business';

// Create Business list component 
class BusinessList extends React.Component{
    render(){
        return (
            <div className="BusinessList">
            {/* create a business list from the business array passed from App component */}
                {this.props.businesses.map(business=>{
                    {/* Create an instance of the business component passing in business data */}
                    return <Business business={business} />
                })}
            </div>
        )
    }
}

// export Businesslist component 
export default BusinessList;