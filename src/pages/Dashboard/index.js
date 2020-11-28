import React, { useState, useEffect } from 'react'

import { useHistory } from "react-router-dom";
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';

import AvatarList from '../../components/AvatarList'

import { Container } from './styles';

function Dashboard() {
  console.log(window.THREE)
  const history = useHistory()

  const [vantaEffect, setVantaEffect] = useState(0)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG({
        el: "#container",
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x6610de,
        midtoneColor: 0x0,
        baseColor: 0x0
      }))
    }
  }, [vantaEffect])

  return <Container id="container">
    <h1>Escolha o seu avatar</h1>
    <AvatarList />
    <button onClick={() => history.push('/home')}>Confirmar</button>
  </Container>;
}

export default Dashboard;