import React from 'react';

import ajani from '../../assets/avatar/ajani.png';
import avacyn from '../../assets/avatar/avacyn.jpg';
import obnixilis from '../../assets/avatar/obnixilis.jpg';
import sarkhan from '../../assets/avatar/sarkhan.jpg';
import gahiji from '../../assets/avatar/gahiji.jpeg';

import { Container, Avatar } from './styles';

function AvatarList({ char, setChar }) {

  const avatarOptions = [ajani, avacyn, obnixilis, sarkhan, gahiji];

  return <Container>
    {avatarOptions.map((element, index) => <Avatar key={index} className={char === element ? 'ativo' : ''} onClick={() => setChar(element)}>
      <img alt={index} src={element}/>
    </Avatar>) }
  </Container>
};

export default AvatarList;