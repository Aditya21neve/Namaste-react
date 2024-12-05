import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  return (
    <div className="header">
      <div className="log-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <button
            className="btn"
            onClick={() => {
              if (btnName == "Login") {
                setbtnName("Logout");
              } else {
                setbtnName("Login");
              }
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
