import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  padding: 0 30px;

  ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    max-width: 900px;
    margin: 0 auto;
  }
`;

export const Header = styled.div`
  max-width: 900px;
  margin: 0 auto;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 32px;
    color: #fff;
    font-weight: normal;
  }

  button {
    border: none;
    border-radius: 4px;
    background: #d44059;
    padding: 10px 25px;
    color: #fff;
    font-weight: bold;

    &:hover {
      background: ${lighten(0.05, '#d44059')};
    }
  }
`;

export const ItemMeetup = styled.li`
  display: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
  border-radius: 4px;
  background: ${darken(0.05, '#36253D')};
  margin-top: 10px;

  span {
    font-size: 15px;
    font-weight: bold;
    color: #eeee;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + div {
      padding-top: 5px;
      margin-top: 5px;
      border-top: 1px solid #eeee;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      a {
        color: #7159c1;
        text-decoration: none;
        padding-left: 10px;
      }
    }
  }
`;

export const Loading = styled.strong`
  display: flex;
  justify-content: center;
  align-self: center;
  font-size: 25px;
  color: #fff;
  margin-top: 30px;
`;

export const Wrapper = styled.div`
  button {
    border: none;
    background: transparent;
    color: #eee;
    font-size: 16px;
  }

  strong {
    font-size: 15px;
    color: #fff;
  }
`;
