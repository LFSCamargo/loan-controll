import React, { useState } from 'react';

import total from '../../assets/total.svg';

import Header from '../../components/Header';

import { Container, CardContainer, Card, TableContainer } from './styles';

interface Balance {
  payd: boolean;
}

const Dashboard: React.FC = () => {
  const [balances, setbalances] = useState<Balance[]>([]);

  // useEffect(() => {
  //   async function loadbalances(): Promise<void> {
  //     const response = await api.get('balances');

  //     const balancesFormatted = response.data.balances.map(
  //       (balance: balance) => ({
  //         ...balance,
  //         value: formatValue(balance.value),
  //         created_at: new Date(balance.created_at).toLocaleDateString(
  //           'pt-br',
  //         ),
  //       }),
  //     );

  //     const balanceFormatted = {
  //       total: formatValue(response.data.balance.total),
  //       outcome: formatValue(response.data.balance.outcome),
  //       total: formatValue(response.data.balance.total),
  //     };

  //     setbalances(balancesFormatted);
  //     setBalance(balanceFormatted);
  //   }

  //   loadbalances();
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
              {balances.map((balance, index) => (
                <tr key={index}>
                  <td className="value">R$ 00,00</td>
                  <td className={balance.payd ? 'paid' : 'notpaid'}>SIM</td>
                  <td>DATA</td>
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
