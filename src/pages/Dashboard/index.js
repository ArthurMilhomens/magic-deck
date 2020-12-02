import React, { useState, useEffect } from 'react'

import { useHistory } from "react-router-dom";
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';

import AvatarList from '../../components/AvatarList'

import { Container } from './styles';

function Dashboard() {

  const history = useHistory();
  const [char, setChar] = useState('');
  const [vantaEffect, setVantaEffect] = useState(0);

  //VantaJS configs
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

  function Login() {
    localStorage.setItem('char', JSON.stringify({ img: char, avatar: char.split('/')[3].split('.')[0]}));
    localStorage.setItem('log', true);
    history.push('/home');
  };
  
  return <Container id="container">
    <h1>Escolha o seu avatar</h1>
    <AvatarList char={char} setChar={setChar}/>
    <button disabled={char === ''} onClick={() => Login()}>Confirmar</button>
  </Container>;
}

export default Dashboard;