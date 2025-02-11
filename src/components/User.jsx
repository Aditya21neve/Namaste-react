import { useState } from "react";
const User = ({ name, id, location }) => {
  const [count, setcount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        count:{" "}
      </button>
      <h2>Instagram{name}</h2>
      <h2>Github{id}</h2>
      <h2>Linkedin{location}</h2>
      <h2>Location</h2>
    </div>
  );
};
export default User;
