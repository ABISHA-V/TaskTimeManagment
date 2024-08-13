// src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { setUser, clearUser } from '../redux/userSlice'; // Import actions

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUserState] = useState(null);
  const dispatch = useDispatch(); // Use dispatch to update Redux store

  const loginUser = (userData) => {
    setUserState(userData);
    dispatch(setUser(userData)); // Dispatch user data to Redux store
  };

  // const updateLoginInfo = useCallback((info) => {
  //   setLoginInfo(info);
  // }, []);

  const logoutUser = () => {
    setUserState(null);
    dispatch(clearUser()); // Clear user data in Redux store
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUserState(storedUser);
      dispatch(setUser(storedUser)); // Dispatch stored user data to Redux store
    }
  }, [dispatch]);

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
