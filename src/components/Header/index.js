import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, WrapperProfile } from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
  // const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Meetapp" />
            <span>Meetups</span>
          </Link>
        </nav>
        <div>
          <WrapperProfile>
            <strong>Matheus Aguiar</strong>
            <Link to="/profile">
              <span>Meu perfil</span>
            </Link>
          </WrapperProfile>
          <button type="button">Sair</button>
        </div>
      </Content>
    </Container>
  );
}
