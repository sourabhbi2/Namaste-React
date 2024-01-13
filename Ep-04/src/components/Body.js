import React, { useState, useEffect } from 'react'
import RestroCard from './RestroCard';
import Shimmer from './Shimmer';




const Body = () => {

    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRest] = useState([]);
    const [searchText, setSearchTextBar] = useState('')

    // const [restaurantList, setRestaurantList] = useState([]);

    // whenever state variables update, react triggers a reconciliation cycle(re-renders the component).

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6215229&lng=85.1213044&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

        const json = await data.json();

        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // Optional Chaining 
         setRestaurantList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
         setFilteredRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)


    }
//conditional rendering

/* if(restaurantList.length ===0){
     return <Shimmer />
  } */

      return restaurantList.length === 0 ? (
    <Shimmer /> 
    ) : (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input type='text' className='search-box' value={searchText} onChange={(e) => {
                        setSearchTextBar(e.target.value)
                    }} />
                    <button onClick={() => {
                        
                        // Filter the restaurant cards and update the UI

                        const filteredRestList = restaurantList.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()) );

                         setFilteredRest(filteredRestList);
                        // console.log(filteredRestList);
                        
                    }}>
                    Search
                    </button>
                </div>
                <button className='filter-btn'
                    onClick={() => {
                        const filteredRating = restaurantList.filter((res) => res?.info.avgRating >= 4);
                        setRestaurantList(filteredRating);
                        // console.log(filteredRating);
                    }}
                >Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
                {filteredRestaurantList.map((rest) => (

                    <RestroCard key={rest.info.id} restData={rest} />
                ))}


            </div>
        </div>
    )

}

export default Body;