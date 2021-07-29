import React, { useState } from "react";
import { useHistory } from "react-router";

const useAuth = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [isLogged, setIsLogged] = useState(!!user);
  const history = useHistory();
  const login = (email, password) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        localStorage.setItem("user", JSON.stringify(email));
        setUser({ email });
        setIsLogged(true);
        history.push("/account");
        res("ok");
      }, 1000);
    });
    console.log(email);
    console.log(password);
  };
  const logout = () => {
    localStorage.removeItem("user");
    setIsLogged(false);
    history.push("/");
  };

  return { login, isLogged, logout };
};

export default useAuth;
