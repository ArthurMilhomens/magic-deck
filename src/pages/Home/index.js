import React, { useEffect } from 'react';

import { Container } from './styles';

import Deck from '../../components/Deck';
import magic from '../../services/magic';

function Home() {

  useEffect(() => {
    magic.get('/cards?name=nicol bolas')
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