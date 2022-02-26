import React, { useState, useEffect } from "react";

import "./CSS/Author.css";

function Author() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
      const data = await res.json();
      setProfile(data);
    }, 5000);
  }, []);

  return (
    <div className="author">
      <h2>Author Details</h2>

      {profile && (
        <div className="profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website}>{profile.website}</a>
        </div>
      )}

      {!profile && <div>loading...</div>}
    </div>
  );
}

export default Author;
