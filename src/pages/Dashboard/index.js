import React, { useState, useEffect, useRef } from 'react'

import { useHistory } from "react-router-dom";

import { Container } from './styles';

function Dashboard() {
  const history = useHistory()
  return <Container id="container">
    
    <button onClick={() => history.push('/home')}>Login</button>
  </Container>;
}

export default Dashboard;