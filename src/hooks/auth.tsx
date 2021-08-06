import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../service/api"

interface AuthState {
  jwt: string;
  usuario: object;
}

interface SigInCredentials {
  email: string;
  senha: string;
}

interface AuthContextData {
  usuario: object;
  singIn(credentials: SigInCredentials): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const jwt = localStorage.getItem("@Logistica:token");
    const usuario = localStorage.getItem("@Logistica:usuario")

    if (jwt && usuario) {
      return { jwt, usuario: JSON.parse(usuario) };
    }

    return {} as AuthState;
  });

  const singIn = useCallback(async ({ email, senha }) => {
    const response = await api.post("authenticate", {
      email, senha,
    });

    console.log(response.data);

    const { jwt, usuario } = response.data;

    localStorage.setItem("@Logistica:token", jwt);
    localStorage.setItem("@Logistica:usuario", JSON.stringify(usuario));

    setData({ jwt, usuario });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@Logistica:token");
    localStorage.removeItem("@Logistica:usuario");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ singIn, signOut, usuario: data.usuario }} >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used withing an AuthService')
  }

  return context;
}