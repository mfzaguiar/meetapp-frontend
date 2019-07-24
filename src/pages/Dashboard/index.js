import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

import api from '~/services/api';
import { Container, Header, ItemMeetup, Wrapper, Loading } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');
      setMeetups(response.data);
      setLoading(false);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <Header>
        <strong>Meus meetups</strong>
        <Link to="/newMeetup">
          <button type="button">Novo meetup</button>
        </Link>
      </Header>

      {loading ? (
        <Loading>CARREGANDO...</Loading>
      ) : (
        <ul>
          {meetups.map(meetup => (
            <ItemMeetup key={meetup.id}>
              <Wrapper>
                <strong> {meetup.title}</strong>
                <strong>{new Date(meetup.date).toLocaleString()}</strong>
              </Wrapper>
              <div>
                <MdLocationOn size={20} color="#eee" />
                <span>{meetup.location}</span>
                <Link to={`/meetupdetails/${meetup.id}`}>Detalhes</Link>
              </div>
            </ItemMeetup>
          ))}
        </ul>
      )}
    </Container>
  );
}
