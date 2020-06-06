const apikey = 'eWZR0yGs8z5bSK2eEkPjpgQ0WfZAbzM1bwCb2nASUz7mJXSW0zCYS10-r1LJGO9eizs155osFmMuHPDyPeu-coJpMklJtwOBjFoejb_Qmz63ZfjuHv2IcLiK3eXZXnYx';


const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apikey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export  {Yelp};
