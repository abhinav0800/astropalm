import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user_profile');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [onboarded, setOnboarded] = useState(() => {
    return localStorage.getItem('onboarded') === 'true';
  });

  const updateUser = (userData) => {
    const newUser = { ...user, ...userData };
    setUser(newUser);
    localStorage.setItem('user_profile', JSON.stringify(newUser));
  };

  const completeOnboarding = () => {
    setOnboarded(true);
    localStorage.setItem('onboarded', 'true');
  };

  return (
    <UserContext.Provider value={{ user, onboarded, updateUser, completeOnboarding }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
