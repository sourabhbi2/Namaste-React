import { CDN_logo_URL } from "../utils/constants";

const RestroCard = (props) =>{

    const {restData} = props;
    const {name, cuisines, costForTwo, deliveryTime, avgRating, cloudinaryImageId} = restData?.data;

    return(
        <div className='res-card'>
            <img className='res-logo'
            alt='res-logo'
            src={
                CDN_logo_URL + cloudinaryImageId
            } 
            />
            <h3>{name}</h3>
            <h4>₹{costForTwo / 100} FOR TWO</h4>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{deliveryTime} minutes</h4>
            <h4>{avgRating} stars</h4>
        </div>
    )
};

export default RestroCard;