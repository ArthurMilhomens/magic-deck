import React from 'react';

import { Container } from './styles';

function Dashboard() {
  const customTitlebar = require('custom-electron-titlebar');
  let MyTitleBar = new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#03a9f4')
  });

  MyTitleBar.updateTitle('Our Code World Tutorials Rock !');

  return <Container>
    Dashboard
  </Container>;
}

export default Dashboard;