const apikey = 'eWZR0yGs8z5bSK2eEkPjpgQ0WfZAbzM1bwCb2nASUz7mJXSW0zCYS10-r1LJGO9eizs155osFmMuHPDyPeu-coJpMklJtwOBjFoejb_Qmz63ZfjuHv2IcLiK3eXZXnYx';

const Yelp={

    search (term, location, sortBy){
        return fetch(
            `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
            {
                headers: {
                    Authorization: `Bearer ${apikey}`
                }
            }).then(response=> response.json()).then(jsonResponse=>{
                if(jsonResponse.businesses){
                    jsonResponse.businesses.map(business=>{
                       return  {id: business.id,
                        imageSrc: business.imageSrc,
                        name: business.name,
                        address: business.address,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zipCode,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.reviewCount
                    }
                    });
                }
            });
        }
}

export {Yelp};