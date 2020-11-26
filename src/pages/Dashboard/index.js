import React from 'react';

import { useHistory } from "react-router-dom";

import { Container } from './styles';

function Dashboard() {
  const history = useHistory()
  return <Container>
    Dashboard
    <button onClick={() => history.push('/home')}>Login</button>
  </Container>;
}

export default Dashboard;