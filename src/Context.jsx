import React, { createContext } from "react"
import Details from "./Details";

export const userContext = createContext();

function Context() {
  const name = 'Dee'
  return (
    <userContext.Provider value={name}>
      <Details />
    </userContext.Provider>
  );
}
export default {Context, userContext};