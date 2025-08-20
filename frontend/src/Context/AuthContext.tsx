import React, { createContext, useContext, useState } from "react";


interface User {
  id: string;
  name: string;
  email: string; 
}

interface AuthContextType {
  authUser: User | null;
  setAuthUser: React.Dispatch<React.SetStateAction<User | null>>;
}


export const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const UseAuthContext = () => {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [authUser, setAuthUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};


