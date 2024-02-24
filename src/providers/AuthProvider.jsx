import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {

    const [auth, setAuth] = useState()
    const [authUser, setAuthUser] = useState({name: "Alice"})


  return <AuthContext.Provider value={{auth, setAuth, authUser, setAuthUser}}>{children}</AuthContext.Provider>;
}
 