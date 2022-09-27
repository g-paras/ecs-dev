import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    let accessToken = localStorage.getItem("access_token_iuaov7w34");
    setToken(accessToken);
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
