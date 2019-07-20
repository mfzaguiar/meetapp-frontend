import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background: ${lighten(0.1, '#000')};
  padding: 0 30px;
`;
export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #ccc;
    }
    span {
      font-weight: bold;
      color: #d44059;
      font-size: 20px;
    }
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    strong {
      color: #fff;
      font-size: 15px;
      align-content: flex-end;
      margin-right: 10px;
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
  }
`;
