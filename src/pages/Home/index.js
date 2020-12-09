import React, { useEffect } from 'react';

import { Container } from './styles';

import Deck from '../../components/Deck';
import magic from '../../services/magic';

function Home() {

  useEffect(() => {
    magic.get('/cards?id=[cd236ea8-c7a6-5b66-8190-996c09f8c57e,4ce865a1-1518-5629-97a8-ac80dc2e9230]')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  },[]);
  
  return <Container>
    <div>
      <p>home</p>
    </div>
    <Deck/>
  </Container>;
}

export default Home;