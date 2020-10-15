import React, { useState } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';

import { Container, CardContainer, TableContainer } from './styles';

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
          <Card title="Montante total emprestado" value="R$00,00" />

          <Card title="Valor total dos juros" value="R$00,00" />

          <Card title="Taxa de juros mensais" value="R$00,00" />

          <Card title="Valor total pago" value="R$00,00" total />
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
