import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { resList } from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  let [listOfResturant,setListofRestraunt] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            ///Filter logic here
            const filteredList = listOfResturant.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setListofRestraunt(filteredList);
            console.log(filteredList);
          }}
        >
          Top Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfResturant.map((resturent) => (
          <RestaurantCard key={resturent.info.id} resData={resturent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
