import React, { useState, useEffect } from 'react'
import RestroCard from './RestroCard';
import restList from '../utils/mockData';




const Body = () =>{
const [restaurantList, setRestaurantList] = useState(restList);

// const [restaurantList, setRestaurantList] = useState([]);

useEffect(() => {
    fetchData();
}, []);

const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.6215229&lng=85.1213044&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

    const json = data.json();

    console.log(json);
    // setRestaurantList(json?.data?.cards[13])
}


    return(
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn' 
                onClick={() => {
                    const filteredList = restaurantList.filter( (res) => res.data.avgRating > 4);
                    setRestaurantList(filteredList);
                }}
                >Top Rated Restaurant</button>
                </div>
            <div className='res-container'>
               {restaurantList.map((rest) =>(

                <RestroCard key={rest.data.id} restData={rest} />
               ))} 
                
                              
            </div>
        </div>
    )

}

export default Body;