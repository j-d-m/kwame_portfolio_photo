import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MyContext } from "./context";

function Container({ children }) {
  const [admin, setAdmin] = useState({});
  const [isAdminLogin, setIsAdminLogin] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/graphql", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        token: localStorage.getItem("admin"),
      },
      body: JSON.stringify({
        query: `query{
                getVerify{
                   admin{
                   id
                   email
                 }
               }
        }`,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.data.getVerify) {
          setAdmin(result.data.getVerify.admin);
          setIsAdminLogin(true);
        }
      });
  }, []);
  return (
    <MyContext.Provider
      value={{
        admin,
        setAdmin,
        isAdminLogin,
        setIsAdminLogin,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default Container;
