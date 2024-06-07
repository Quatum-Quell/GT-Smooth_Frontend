import React, { useState, useContext } from 'react';

export const AuthContext = React.createContext({
  id: '',
  storeAuthCookie: (data) => {},
});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [id, setId] = useState();
  const [data, setData] = useState({});

  function storeAuthCookie(data) {
    localStorage.setItem('user', JSON.stringify(data.user));
    setUser(data.user);
    setId(data.id);
    setData(data);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        id,
        storeAuthCookie,
        data,
        setData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
