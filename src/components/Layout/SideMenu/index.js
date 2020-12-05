import React, { useState, useEffect } from 'react';

import { Container, Menu, Avatar } from './styles';

import { TiArrowRightOutline } from 'react-icons/ti';

import { useHistory } from "react-router-dom";

//Vanta imports
import WAVES from 'vanta/dist/vanta.waves.min';
import * as THREE from 'three';

function SideMenu() {

  const [vantaEffect, setVantaEffect] = useState(0);
  const [open, setOpen] = useState((localStorage.getItem('menu') === null || localStorage.getItem('menu') === 'false') ? false : true);
  const settings = JSON.parse(localStorage.getItem('char'));
  const history = useHistory();

  function logout(){
    localStorage.removeItem('char');
    localStorage.removeItem('log');
    history.push('/')
  }

  function changeMenu() {
    localStorage.setItem('menu', !open)
    setOpen(!open);
  };

  //VantaJS configs
  useEffect(() => {
    const themeByProfile = [
      {avatar: 'sarkhan', color: "0x48000c"},
      {avatar: 'ajani', color: "0x9d733b"},
      {avatar: 'obnixilis', color: "0x12002a"},
      {avatar: 'avacyn', color: "0x616161"},
      {avatar: 'gahiji', color: "0x172f17"}
    ];

    if (!vantaEffect) {
      setVantaEffect(WAVES({
        el: "#container",
        THREE: THREE,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 170.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: parseInt(themeByProfile.filter(e => e.avatar === settings.avatar)[0].color),
        waveSpeed: 0.50
      }))
    }
  }, [vantaEffect]);

  return <Container id="container">
    <Menu className={open ? `open-menu ${settings.avatar}` : `close-menu ${settings.avatar}`}>
      <button onClick={() => changeMenu()}><TiArrowRightOutline className={open ? 'open-icon' : 'close-icon'} /></button>
      <Avatar onClick={() => logout()}>
        <img alt={settings.avatar} src={settings.img} />
      </Avatar>
    </Menu>
  </Container>;
}

export default SideMenu;