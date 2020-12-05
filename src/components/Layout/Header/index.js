import React from 'react';

import { Container, Avatar } from './styles';

import { useHistory } from "react-router-dom";

function Header() {
  const theme = JSON.parse(localStorage.getItem("char"));
  const history = useHistory();

  function logout(){
    localStorage.removeItem('char');
    localStorage.removeItem('log');
    history.push('/')
  }

  return <Container>
    <div className={theme.avatar}>
      <Avatar onClick={() => logout()}>
        <img alt={theme.avatar} src={theme.img} />
      </Avatar>
    </div>
  </Container>;
}

export default Header;