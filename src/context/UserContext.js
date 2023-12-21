"use client";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    async function getUser() {
      try {
        const res = await axios.get("/api/me");

        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}
function useUserContext() {
  const context = useContext(UserContext);
  return context;
}
export { useUserContext, UserProvider };
