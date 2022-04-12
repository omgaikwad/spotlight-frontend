import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLoggedIn: localStorage.getItem("USER_TOKEN") ? true : false,
    token: localStorage.getItem("USER_TOKEN"),
    user: JSON.parse(localStorage.getItem("USER_DATA")),
  });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthContextProvider };
