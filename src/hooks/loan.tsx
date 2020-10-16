import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';

export interface Loan {
  installments: Array<{
    value: number;
    formatedValue: string;
    payd: boolean;
    dueDate: string;
  }>;
  amountTaken: number;
  amountPayd: number;
  monthlyInterest: number;
  totalAmountInTaxes: number;
}

interface LoanContext {
  loans: Loan | undefined;
}

const LoanContext = createContext<LoanContext | null>(null);

const LoanProvider: React.FC = ({ children }) => {
  const [loans, setLoans] = useState<Loan>();

  useEffect(() => {
    async function loadLoans(): Promise<void> {
      const response = await api.get('5c923b0932000029056bce39');
      console.log(response.data);
      setLoans(response.data);
    }

    loadLoans();
  }, []);

  const value = React.useMemo(() => ({ loans }), [loans]);

  return <LoanContext.Provider value={value}>{children}</LoanContext.Provider>;
};

function useLoan(): LoanContext {
  const context = useContext(LoanContext);

  if (!context) {
    throw new Error(`useCart must be used within a LoanProvider`);
  }

  return context;
}

export { LoanProvider, useLoan };
