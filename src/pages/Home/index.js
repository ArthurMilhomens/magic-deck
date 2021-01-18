import React, { useEffect, useState } from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Container } from './styles';

import Deck from '../../components/Deck';
import DeckList from '../../components/DeckList';
import Filter from '../../components/Filter';
import magic from '../../services/magic';

function Home() {

  const [screen, setScreen] = useState(localStorage.getItem('deck'));
  const [cards, setCards] = useState(localStorage.getItem('deck'));

  useEffect(() => {
    magic.get('/cards/5c3d57d1-1031-45e0-97d1-8e8e3e6ab516')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, []);

  return <Container>
    {screen ?
      <DeckList cards={cards} />
      : <Filter setScreen={setScreen} setCards={setCards} />
    }
    <Deck />
  </Container>;
}

export default Home;