import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, ItemMeetup } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Header>
        <strong>Meus meetups</strong>
        <Link to="/newMeetup">
          <button type="button">Novo meetup</button>
        </Link>
      </Header>

      <ul>
        <ItemMeetup>
          <button type="button"> Meetup React Native</button>
        </ItemMeetup>
        <ItemMeetup>
          <button type="button"> ReactJS Meetup</button>
        </ItemMeetup>
      </ul>
    </Container>
  );
}
