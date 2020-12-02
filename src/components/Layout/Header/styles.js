import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;

  div {
   
  }

  .sarkhan {
    background: linear-gradient(#440000, #a00000);
    box-shadow: 0px 1px 13px 0px #440000;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ajani {
    background-color: white;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 43px !important;
  height: 43px !important;
  cursor: pointer;

  img {
    width: 90%;
    height: 90%;
    border-radius: 100px;
    object-fit:cover;
    transition: 0.3s;
    overflow: hidden;

    :hover {
      box-shadow: 0px 1px 8px #440000;
      transition: 0.3s;
    }
  }
`;
