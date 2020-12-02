import React from 'react';

import Header from './Header';

import { Container } from './styles';

function Layout({ children }) {

  return <Container>
    <Header />
    <div className="content">
      {children}
    </div>
  </Container>;
}

export default Layout;