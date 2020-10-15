import React, { useState, useEffect } from 'react';

import total from '../../assets/total.svg';

import Header from '../../components/Header';

import { Container, CardContainer, Card, TableContainer } from './styles';

interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'total' | 'outcome';
  category: { title: string };
  created_at: Date;
}

interface Balance {}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  // useEffect(() => {
  //   async function loadTransactions(): Promise<void> {
  //     const response = await api.get('transactions');

  //     const transactionsFormatted = response.data.transactions.map(
  //       (transaction: Transaction) => ({
  //         ...transaction,
  //         value: formatValue(transaction.value),
  //         created_at: new Date(transaction.created_at).toLocaleDateString(
  //           'pt-br',
  //         ),
  //       }),
  //     );

  //     const balanceFormatted = {
  //       total: formatValue(response.data.balance.total),
  //       outcome: formatValue(response.data.balance.outcome),
  //       total: formatValue(response.data.balance.total),
  //     };

  //     setTransactions(transactionsFormatted);
  //     setBalance(balanceFormatted);
  //   }

  //   loadTransactions();
  // }, []);

  return (
    <>
      <Header />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Montante total emprestado</p>
              <img src={total} alt="total" />
            </header>
            <h1>R$00,00</h1>
          </Card>
          <Card>
            <header>
              <p>Valor total dos juros</p>
              <img src={total} alt="total" />
            </header>
            <h1>R$00,00</h1>
          </Card>
          <Card>
            <header>
              <p>Taxa de juros mensais</p>
              <img src={total} alt="total" />
            </header>
            <h1>R$00,00</h1>
          </Card>
          <Card total>
            <header>
              <p>Valor total pago</p>
              <img src={total} alt="Outcome" />
            </header>
            <h1>R$00,00</h1>
          </Card>
        </CardContainer>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Valor</th>
                <th>Pago</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td className="title">{transaction.title}</td>
                  <td
                    className={
                      transaction.type === 'total' ? 'total' : 'outcome'
                    }
                  >
                    {transaction.type === 'total'
                      ? transaction.value
                      : `- ${transaction.value}`}
                  </td>
                  <td>
                    {transaction.category ? transaction.category.title : `-`}
                  </td>
                  <td>{transaction.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
