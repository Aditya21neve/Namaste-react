import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
// import Loader from "./Loader";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
const Body = () => {
  const [listOfResturant, setListofRestraunt] = useState([]);
  const [filterResturant, setfilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data);
    setListofRestraunt(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  /// conditional rendering

  return listOfResturant == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter res card and update ui
              const filteredRestaurent = listOfResturant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredList(filteredRestaurent);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            ///Filter logic here
            const filteredList = listOfResturant.filter(
              (res) => res.info.avgRating >= 4
            );
            setfilteredList(filteredList);
            // console.log(filteredList);
          }}
        >
          Top Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterResturant.map((resturent) => (
          <Link key={resturent.info.id} to={"/restaurant/" + resturent.info.id}>
            <RestaurantCard resData={resturent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
