import styled from 'styled-components';

export const Container = styled.div`
  .open-menu {
    width: 170px;
  }

  .close-menu {
    width: 50px;
  }

  .sarkhan {
    svg {
      color: red;
      fill: red;
    }
  }
`;

export const Menu = styled.div`
  height: 100vh;
  max-width: 170px;
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    width: 100%;
    text-align: end;
  };

  svg {
    transition: 0.4s;
  };

  .open-icon {
    transform: rotate(-180deg);
  };

  .close-icon {
  };
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
