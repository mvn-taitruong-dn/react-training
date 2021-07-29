import React from "react";
import useAuth from "../../hooks/useAuth";

const Account = () => {
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
  };
  return (
    <div className="container">
      <h1>Account Page</h1>
      <button onClick={handleLogout}>LogOut </button>
    </div>
  );
};

export default Account;
