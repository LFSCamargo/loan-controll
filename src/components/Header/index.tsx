import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.png';

const Header: React.FC = () => (
  <Container>
    <header>
      <Link to="/">
        <img src={Logo} alt="LoanControll" />
      </Link>
    </header>
  </Container>
);

export default Header;
