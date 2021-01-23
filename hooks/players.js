import { useState, useContext, createContext } from "react";

const playerContext = createContext([]);

export const usePlayers = () => useContext(playerContext);

export const PlayerProvider = ({ children }) => {
  const players = useState([]);

  return (
    <playerContext.Provider value={players}>{children}</playerContext.Provider>
  );
};
