import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import "./RestaurantMenu.css";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constant";
import useRestaurentMenu from "../utils/useRestaurentMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurentMenu(resId);

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
