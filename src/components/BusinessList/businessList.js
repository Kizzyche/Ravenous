import React from 'react';
import './businessList.css';
import Business from '../Business/business';

// Create Business list component 
class BusinessList extends React.Component{
    render(){
        return (
            <div className="BusinessList">
            
                {this.props.businesses.map(business=>{
                   
                    return <Business business={business} />
                })}
            </div>
        )
    }
}

// export Businesslist component 
export default BusinessList;