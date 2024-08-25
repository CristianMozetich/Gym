"use client";
import React from "react";
import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { jwtDecode } from "jwt-decode";
import { useSession } from "next-auth/react";

interface ContextoType {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
  decodeToken: (token: string) => any;
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
}
declare module "next-auth" {
  interface Session {
    user: {
      id: string; 
      name: string;
      email: string;
      image?: string;
    };
  }
}
interface JwtPayload {
  user: {
    _id: string;
    name: string;
  };
}

interface ContextProviderProps {
  children: React.ReactNode;
}

export const Contexto = createContext({} as ContextoType);

export default function ContextProvider({ children }: ContextProviderProps) {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  const { data: session } = useSession();

  const decodeToken = (token: string): JwtPayload | undefined => {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      return decoded;
    } catch {
      console.error("Error al decodificar el token");
    }
  };
  
  useEffect(() => {
    if (session && session.user) {
      setUserId(session.user.id);
      setUserName(session.user.name);
    }
  }, [session]);

  useEffect(() => {
    // Leer el token del localStorage al montar el componente para que permanezca la sesión activa
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = decodeToken(token);
      if (decoded) {
        setUserId(decoded.user._id);
        setUserName(decoded.user.name);
      }
    }
  }, []);
  return (

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

  );
}
