import { CDN_URL } from "../utils/constant";
import star from "../asset/star.png";
import delivery from "../asset/delivery-bike.png";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, areaName, cloudinaryImageId } =
    resData.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="res-container">
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={`${CDN_URL}${cloudinaryImageId}`}
        />
        <div className="res-info">
          <h3 className="res-name">{name}</h3>
          <p className="res-cuisines">{cuisines.join(", ")}</p>
          <p className="res-cuisines">{areaName}</p>

          <div className="res-details">
            <div className="rating">
              <img
                className="rating-icon"
                // src="../asset/star.png"
                src={star}
                alt="rating"
              />
              <span>{avgRating} stars</span>
            </div>
            <div className="delivery-time">
              <img
                className="delivery-icon"
                src={delivery}
                alt="delivery-time"
              />

              <span>{deliveryTime} mins</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
