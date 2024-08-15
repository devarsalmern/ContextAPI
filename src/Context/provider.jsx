import { useState } from "react";
import { AuthContext } from "./createContext";

function AuthProvider({ children }) {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isloggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
