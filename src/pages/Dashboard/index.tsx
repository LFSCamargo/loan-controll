import React, { useState, useEffect } from 'react';

import { useLoan, Loan } from '../../hooks/loan';

import Header from '../../components/Header';
import Card from '../../components/Card';

import { Container, CardContainer, TableContainer } from './styles';

const Dashboard: React.FC = () => {
  const { loans } = useLoan();
  const [balance, setBalance] = useState<Loan>();

  useEffect(() => {
    function loadBalance(): void {
      setBalance(loans);
    }

    loadBalance();
  }, [loans]);

  return (
    <>
      {console.log('data', balance)}
      <Header />

      {balance && (
        <Container>
          <CardContainer>
            <Card title="Total emprestado" value={balance.amountTaken} />

            <Card
              title="Valor total dos juros"
              value={balance.totalAmountInTaxes}
            />

            <Card
              title="Taxa de juros mensal"
              value={balance.monthlyInterest}
              isInterest
            />

            <Card title="Valor total pago" value={balance.amountPayd} isTotal />
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
                {balance.installments.map((item, index) => (
                  <tr key={index}>
                    <td className="value">{item.formatedValue}</td>
                    <td className={item.payd ? 'paid' : 'notpaid'}>
                      {item.payd ? 'Sim' : 'Não'}
                    </td>
                    <td>{item.dueDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableContainer>
        </Container>
      )}
    </>
  );
};

export default Dashboard;
