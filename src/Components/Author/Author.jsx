import React, { useState, useEffect } from "react";

import "./CSS/Author.css";
import Skeleton from "../Skeleton/Skeleton";

function Author() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/6");
      const data = await res.json();
      setProfile(data);
    }, 5000);
  }, []);

  return (
    <div className="author">
      <h2>Author Details</h2>

      {profile && (
        <div className="profile">
          <div className="imgwrapper">
            <img
              src="https://randomuser.me/api/portraits/men/36.jpg"
              alt={profile.username}
            />
          </div>
          <div>
            <h3>{profile.username}</h3>
            <p>{profile.email}</p>
            <a href={profile.website}>{profile.website}</a>
          </div>
        </div>
      )}

      {!profile && (
        <div className="authorskel">
          <div>
            <Skeleton type="avatar" />
          </div>
          <div>
            <Skeleton type="title" />
            <Skeleton type="text" />
            <Skeleton type="text" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Author;
