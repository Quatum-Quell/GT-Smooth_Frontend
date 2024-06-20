import React, { useState, useContext, useEffect } from 'react';

export const AuthContext = React.createContext({
  id: '',
  storeAuthCookie: (data) => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setId(parsedUser.userId);
    }
  }, []);

  function storeAuthCookie(data) {
    localStorage.setItem('user', JSON.stringify(data));
    setUser(data);
    setId(data.userId);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        id,
        storeAuthCookie,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
