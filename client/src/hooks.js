import { useState, useEffect } from "react";

export const useAuth = () => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
    } else {
      window.localStorage.removeItem("token");
    }
  });

  return {
    authorized: token && token.length > 20 ? true : false,
    login: token => setToken(`Bearer ${token}`),
    logout: () => setToken(null)
  };
};
