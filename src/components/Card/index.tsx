import React from 'react';
import formatValue from '../../utils/formatValue';

import totalIcon from '../../assets/total.svg';

import { Container } from './styles';

interface CardProps {
  title: string;
  value: number;
  isTotal?: boolean;
  isInterest?: boolean;
}

const Card: React.FC<CardProps> = ({ title, value, isTotal, isInterest }) => {
  let formattedInterest = null;
  let formattedValue = null;

  if (isInterest) {
    formattedInterest = `${value}%`;
  } else {
    formattedValue = formatValue(value);
  }

  return (
    <Container total={isTotal}>
      <header>
        <p>{title}</p>
        {isTotal && <img src={totalIcon} alt="Total" />}
      </header>
      <h1>{isInterest ? formattedInterest : formattedValue}</h1>
    </Container>
  );
};

export default Card;
