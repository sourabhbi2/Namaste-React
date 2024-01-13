import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    
    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.6215229&lng=85.1213044&restaurantId=779700&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();

        console.log(json);
        setResInfo(json.data)
    }

    return resInfo === null ? <Shimmer /> : (
        <div className="menu">
            <h1>Name of the Restaurants</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Pizza</li>
                <li>Burgers</li>
            </ul>
        </div>
    ) 
};

export default RestaurantMenu