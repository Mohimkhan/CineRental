import { createContext, useContext, useState } from "react";

export const MovieContext = createContext(null);

export const MovieProvider = ({ children, value }) => {
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
