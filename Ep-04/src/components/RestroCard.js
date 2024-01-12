import { CDN_logo_URL } from "../utils/constants";

const RestroCard = (props) =>{

    const {restData} = props;
    const {name, cuisines, costForTwo, sla, avgRating, cloudinaryImageId, areaName} = restData?.info;

    return(
        <div className='res-card'>
            <img className='res-logo'
            alt='res-logo'
            src={
                CDN_logo_URL + cloudinaryImageId
            } 
            />
            <h3>{name}</h3>
            <h3>Address: {areaName}</h3>
            <h4>{costForTwo}</h4>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{sla.slaString}</h4>
            <h4>{avgRating} stars</h4>
        </div>
    )
};

export default RestroCard;