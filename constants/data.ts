// Interface for wallet data
interface WalletData {
    label: string;
    wallet_type: string;
    currency: string;
    can_disburse: boolean;
    transactions: WalletTransaction[];
  }
  
  // Interface for wallet transactions
  interface WalletTransaction {
    id: string;
    walletId: string;
    amount: number;
    type: string;
    date: string;
  }
  
  // Interface for transaction data
  interface TransactionData {
    walletId: string;
    amount: number;
    phone_number: string;
    first_name: string;
    last_name: string;
  }
  
  // Initial wallet data
  const createWallet: WalletData[] = [
    {
      label: "Personal Wallet",
      wallet_type: "Working",
      currency: "KES",
      can_disburse: true,
      transactions: [
        {
          id: "1",
          walletId: "1",
          amount: 100,
          type: "credit",
          date: "2024-05-25T10:30:00Z"
        },
        {
          id: "2",
          walletId: "1",
          amount: -50,
          type: "debit",
          date: "2024-05-26T14:45:00Z"
        }
      ]
    },
    {
      label: "Business Wallet",
      wallet_type: "Working",
      currency: "KES",
      can_disburse: false,
      transactions: [
        {
          id: "3",
          walletId: "2",
          amount: 200,
          type: "credit",
          date: "2024-05-27T09:00:00Z"
        }
      ]
    },
  ];
  
  // Initial transaction data
  const transactData: TransactionData[] = [
    {
      walletId: "1",
      amount: 50,
      phone_number: "1234567890",
      first_name: "John",
      last_name: "Doe"
    },
    {
      walletId: "2",
      amount: 100,
      phone_number: "0987654321",
      first_name: "Jane",
      last_name: "Smith"
    },
  ];
  
  // Function to update wallet data
  const updateWalletData = (updatedWalletData: WalletData[]) => {
    createWallet.splice(0, createWallet.length, ...updatedWalletData);
  };
  
  // Exporting the wallet data, transaction data, and update function
  export { createWallet, transactData, updateWalletData };
  