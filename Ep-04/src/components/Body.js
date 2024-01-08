import React from 'react'
import RestroCard from './RestroCard';
import restList from '../utils/mockData';




const Body = () =>{
    return(
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn'>Top Rated Restaurant</button>
                </div>
            <div className='res-container'>
               {restList.map((rest) =>(

                <RestroCard key={rest.data.id} restData={rest} />
               ))} 
                
                              
            </div>
        </div>
    )

}

export default Body;