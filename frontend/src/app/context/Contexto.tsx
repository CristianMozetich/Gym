"use client";
import React from "react";
import { createContext, useState, Dispatch, SetStateAction } from "react";
import { jwtDecode } from "jwt-decode";
import { SessionProvider } from "next-auth/react";


interface ContextoType {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
  decodeToken: (token: string) => any;
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

export const Contexto = createContext({} as ContextoType);

export default function ContextProvider({ children }: ContextProviderProps) {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  const decodeToken = (token: string) => {
    try {
      const decoded = jwtDecode(token);
      return decoded;
    } catch {
      console.error("Error al decodificar el token");
    }
  };
  return (
    <SessionProvider>
      <Contexto.Provider
        value={{
          userId,
          setUserId,
          decodeToken,
          userName,
          setUserName,
        }}
      >
        {children}
      </Contexto.Provider>
    </SessionProvider>
  );
}
