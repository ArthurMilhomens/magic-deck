import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;

  .ativo {
    background-color: #6610de;
  }
`;

export const Avatar = styled.div`
  background-color: #eff1fe;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 110px;
  height: 110px;

  img {
    width: 95%;
    height: 95%;
    max-width: 95%;
    max-height: 95%;
    border-radius: 100px;
    object-fit:cover;
    transition: 0.3s;
    overflow: hidden
  }

  :hover {
    background-color: #6610de;
    transition: 0.3s;

    img {
      transform: scale(1.2, 1.2);
    }
  }
`;
