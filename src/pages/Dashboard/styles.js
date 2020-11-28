import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow-y: scroll;
  align-items: center;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  h1 {
    position: relative;
    z-index: 1;
    letter-spacing: 1.5px;
    box-shadow: 0px 6px 9px -5px black;
  }

  button {
    position: relative;
    z-index: 1;
    background-color: transparent;
    color: #eff1fe;
    border: 2px solid #eff1fe;
    padding: 10px 15px;
    font: 1rem 'Poppins',sans-serif;
    text-transform: uppercase;
    border-radius: 25px;
  }
`;
