import React from 'react';

import SideMenu from './SideMenu';

import { Container } from './styles';

function Layout({ children }) {

  return <Container>
    <SideMenu />
    <div className="content">
      {children}
    </div>
  </Container>;
}

export default Layout;