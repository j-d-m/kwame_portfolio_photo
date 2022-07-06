import React from "react";
import { useState } from "react";
import { MyContext } from "./context";

function Container({ children }) {
  const [admin, setAdmin] = useState({});
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  return (
    <MyContext.Provider
      value={{ admin, setAdmin, isAdminLogin, setIsAdminLogin }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default Container;
