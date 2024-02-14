// OutContext.js
import React, { createContext, useContext, useState } from 'react';

const OutContext = createContext();

export const OutProvider = ({ children }) => {
  const [out, setOut] = useState([]);

  return (
    <OutContext.Provider value={{ out, setOut }}>
      {children}
    </OutContext.Provider>
  );
};

export const useOut = () => useContext(OutContext);
