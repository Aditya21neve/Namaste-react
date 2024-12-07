import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import "./RestaurantMenu.css";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constant";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      console.log(json);
      setResInfo(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  const {
    name,
    avgRatingString,
    cuisines,
    totalRatingsString,
    costForTwoMessage,
    areaName,
  } = resInfo?.cards?.[2]?.card?.card?.info || {};
  const { slaString } = resInfo?.cards?.[2]?.card?.card?.info?.sla || {};

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="restaurant-info-container">
      <h1 className="restaurant-name">{name}</h1>
      <h4 className="restaurant-rating">
        {avgRatingString +
          "   ( " +
          totalRatingsString +
          " )" +
          "  " +
          costForTwoMessage}
      </h4>
      <h4 className="restaurant-cuisines">{cuisines.join(" ,")}</h4>
      <h4 className="restaurant-area">Outlet: {areaName}</h4>
      <h4 className="restaurant-area">{slaString}</h4>
    </div>
  );
};

export default RestaurantMenu;
