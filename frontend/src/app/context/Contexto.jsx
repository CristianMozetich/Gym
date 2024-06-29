"use client";
import React from "react";
import { createContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const Contexto = createContext();

export default function ContextProvider({ children }) {
  const [userId, setUserId] = useState("");

  const decodeToken = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded;
    } catch {
      console.error("Error al decodificar el token");
    }
  };
  return (
    <Contexto.Provider
      value={{
        userId,
        setUserId,
        decodeToken,
      }}
    >
      {children}
    </Contexto.Provider>
  );
}
