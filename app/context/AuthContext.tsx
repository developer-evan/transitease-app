import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

interface AuthProps {
  authState: { token: string | null; authenticated: boolean | null };
  onRegister: (firstname: string, lastname: string, email: string, phone: string, password: string) => Promise<any>;
  onLogin: (email: string, password: string) => Promise<any>;
  onLogout: () => Promise<any>;
}

const TOKEN_KEY = "my-jwt";
export const API_URL = "http://192.168.100.114:4000";
const AuthContext = createContext<AuthProps>({
  authState: { token: null, authenticated: null},
  onRegister: () => Promise.resolve(),
  onLogin: () => Promise.resolve(),
  onLogout: () => Promise.resolve(),
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    token: null,
    authenticated: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync(TOKEN_KEY);
      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        setAuthState({
          token,
          authenticated: true,
        });
      }
    };
    loadToken();
  }, []);

  const register = async (firstname: string, lastname: string, email: string, phone: string, password: string) => {
    try {
      const result =  await axios.post(`${API_URL}/signup`, { email, password });
      return result;
      return await axios.post(`${API_URL}/signup`, { firstname, lastname, email, phone, password });
    } catch (e) {
      return {
        error: true,
        msg: (e as any).response.data.msg,
      };
    }
  };
  // isa.moore3y@example.com
  // PasswordPQR!

  
  const login = async (email: string, password: string) => {
    console.log("login called", email, password);
    try {
      const result = await axios.post(`${API_URL}/login`, { email, password });
      // console.log("result");
      console.log("resultui", result);

      setAuthState({
        token: result.data.token,
        authenticated: true,
      });
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${result.data.token}`;
      await SecureStore.setItemAsync(TOKEN_KEY, result.data.token);
      return result;
    } catch (e) {
      console.log("error", e);
      return {
        error: true,
        msg: (e as any).response.data.msg,
      };
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
    axios.defaults.headers.common["Authorization"] = "";
    setAuthState({
      token: null,
      authenticated: false,
    });
  };

  const value = {
    onRegister: register,
    onLogin: login,
    onLogout: logout,
    authState,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
