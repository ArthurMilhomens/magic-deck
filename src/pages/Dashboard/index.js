import React from 'react';

import { Container } from './styles';

import { Titlebar, Color } from 'custom-electron-titlebar';

function Dashboard() {
  let MyTitleBar = new Titlebar({
    backgroundColor: Color.fromHex('#535bfe')
  });

  MyTitleBar.updateTitle('Our Code World Tutorials Rock !');

  return <Container>
    Dashboard
  </Container>;
}

export default Dashboard;