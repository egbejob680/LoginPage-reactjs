import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/signup"); // Redirect to signup page (or another appropriate page)
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;
