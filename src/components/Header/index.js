import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
  // const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Meetapp" />
            <span>Meetapp</span>
          </Link>
        </nav>
        <div>
          <strong>Matheus Aguiar</strong>
          <button type="button">Sair</button>
        </div>
      </Content>
    </Container>
  );
}
