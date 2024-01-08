import React, { useState } from 'react'
import RestroCard from './RestroCard';
import restList from '../utils/mockData';




const Body = () =>{

    const [restaurantList, setRestaurantList] = useState(restList)

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