import React from 'react';

import totalIcon from '../../assets/total.svg';

import { Container } from './styles';

interface CardProps {
  title: string;
  value: string;
  total?: boolean;
}

const Card: React.FC<CardProps> = ({ title, value, total }) => {
  return (
    <Container total={total}>
      <header>
        <p>{title}</p>
        {total && <img src={totalIcon} alt="Total" />}
      </header>
      <h1>{value}</h1>
    </Container>
  );
};

export default Card;
