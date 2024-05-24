import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

interface WalletProps {
  createWallet: (label: string, wallet_type: string, currency: string, can_disburse: boolean) => Promise<any>;
  getWalletTransactions: (walletId: string) => Promise<any>;
  fundWallet: (walletId: string, amount: number, phone_number: string) => Promise<any>;
  transact: (walletId: string, amount: number, phone_number: string, first_name: string, last_name: string) => Promise<any>;
}

export const API_URL = "http://localhost:3000";
const WalletContext = createContext<WalletProps>({
  createWallet: () => Promise.resolve(),
  getWalletTransactions: () => Promise.resolve(),
  fundWallet: () => Promise.resolve(),
  transact: () => Promise.resolve(),
});

export const useWallet = () => {
  return useContext(WalletContext);
};

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const { authState } = useAuth(); 

  useEffect(() => {
    if (authState.authenticated) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${authState.token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [authState]);

  const createWallet = async (label: string, wallet_type: string, currency: string, can_disburse: boolean) => {
    if (!authState.authenticated) {
      return { error: true, msg: "User not authenticated" };
    }
    try {
      return await axios.post(`${API_URL}/create-wallet`, { label, wallet_type, currency, can_disburse });
    } catch (e) {
      return {
        error: true,
        msg: (e as any).response.data.error,
      };
    }
  };

  const getWalletTransactions = async (walletId: string) => {
    if (!authState.authenticated) {
      return { error: true, msg: "User not authenticated" };
    }
    try {
      return await axios.get(`${API_URL}/wallets/${walletId}/transactions`);
    } catch (e) {
      return {
        error: true,
        msg: (e as any).response.data.error,
      };
    }
  };

  const fundWallet = async (walletId: string, amount: number, phone_number: string) => {
    if (!authState.authenticated) {
      return { error: true, msg: "User not authenticated" };
    }
    try {
      return await axios.post(`${API_URL}/wallets/${walletId}/fund`, { amount, phone_number });
    } catch (e) {
      return {
        error: true,
        msg: (e as any).response.data.error,
      };
    }
  };

  const transact = async (walletId: string, amount: number, phone_number: string, first_name: string, last_name: string) => {
    if (!authState.authenticated) {
      return { error: true, msg: "User not authenticated" };
    }
    try {
      return await axios.post(`${API_URL}/wallets/${walletId}/withdraw`, { amount, phone_number, first_name, last_name });
    } catch (e) {
      return {
        error: true,
        msg: (e as any).response.data.error,
      };
    }
  };

  const value = {
    createWallet,
    getWalletTransactions,
    fundWallet,
    transact,
  };

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};
