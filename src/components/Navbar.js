import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css"; // ✅ Import CSS

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <nav>
      <h2>Job Portal</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        {user ? (
          <>
            <span>Welcome, {user.username}!</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
