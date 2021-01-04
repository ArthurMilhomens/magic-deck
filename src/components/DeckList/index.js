import React from 'react';

import { Container, Card } from './styles';

function DeckList({ cards }) {
  return <Container>
    {cards && cards.map((e,i) => <Card key={i}><img alt={e.name} src={e.card_faces ? e.card_faces[0].image_uris.normal : e.image_uris.normal}/></Card>)}
  </Container>;
}

export default DeckList;