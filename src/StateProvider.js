// Context API imports
import React, { createContext, useContext, useReducer } from "react";

// preparing data layer
export const StateContext = createContext();

// higher order component, wraps the app inside the state provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// whenever we want to pull something from the data layer this hook is used
export const useStateValue = () => useContext(StateContext);
