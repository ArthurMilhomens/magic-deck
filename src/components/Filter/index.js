import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

import magic from '../../services/magic';

import { Container, FilterInput, ColorOption, Colors, MenuButton } from './styles';

import Blue from '../../assets/mana/blue.png';
import Black from '../../assets/mana/Black.png';
import Red from '../../assets/mana/Red.png';
import White from '../../assets/mana/White.png';
import Green from '../../assets/mana/Green.png';
import Colorless from '../../assets/mana/Colorless.png';

function Filter() {

  const settings = JSON.parse(localStorage.getItem('char'));


  const [query, setQuery] = useState({ cardName: '', text: '', type: '', colors: '', manaCost: '', select: "Exactly these colors" })

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const submit = e => {
    e.preventDefault();
    magic.get('/cards/search?as=grid&order=name&q=' + query.cardName + `${query.text !== '' ? (' oracle:' + query.text) : ''}`)
      .then(function (res) {
        console.log('teste ', res)
      })
      .catch(function (err) {
        console.log(err)
      })
  };

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      backgroundColor: "#930000",
      '&:focus': {
        backgroundColor: "#930000",
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: "white",
          backgroundColor: "#930000"
        },
      },
      '&:hover': {
        backgroundColor: "red",
      },
      '&.Mui-selected': {
        backgroundColor: "#930000",
        '&:hover': {
          backgroundColor: "red",
        }
      },
    },
  }))(MenuItem);

  const StyledMenu = withStyles({
    paper: {
      backgroundColor: '#930000',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

  return <Container>
    <h2 className={settings.avatar}>Filter</h2>
    <form onSubmit={submit} className={settings.avatar}>
      <FilterInput>
        <label>Card Name</label>
        <input placeholder='"Ugin, Valkas, Nicol Bolas..."' type="text" onChange={e => setQuery({ ...query, cardName: e.target.value })} />
      </FilterInput>

      <FilterInput>
        <label>Text</label>
        <input placeholder='"Draw a card, Flying, Exile..."' type="text" onChange={e => setQuery({ ...query, text: e.target.value })} />
      </FilterInput>

      <FilterInput>
        <label>Type</label>
        <input placeholder='"Creature, Dragon, Instant..."' type="text" onChange={e => setQuery({ ...query, type: e.target.value })} />
      </FilterInput>

      <FilterInput>
        <label>Colors</label>
        <div>
          <Colors>
            <ColorOption>
              <img src={White} alt="Mana Branca" />
              <p>White</p>
            </ColorOption>
            <ColorOption>
              <img src={Blue} alt="Mana Azul" />
              <p>Blue</p>
            </ColorOption>
            <ColorOption>
              <img src={Black} alt="Mana Preta" />
              <p>Black</p>
            </ColorOption>
            <ColorOption>
              <img src={Red} alt="Mana Vermelha" />
              <p>Red</p>
            </ColorOption>
            <ColorOption>
              <img src={Green} alt="Mana Verde" />
              <p>Green</p>
            </ColorOption>
            <ColorOption>
              <img src={Colorless} alt="Mana Incolor" />
              <p>Colorless</p>
            </ColorOption>
          </Colors>
          <MenuButton onClick={handleClick}>{query.select}</MenuButton>
          <StyledMenu
            value={query.select}
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem value="Exactly these colors" onClick={e => setQuery({ ...query, select: "Exactly these colors" })}>
              Exactly these colors
            </StyledMenuItem>
            <StyledMenuItem value="Including these colors" onClick={e => setQuery({ ...query, select: "Including these colors" })}>
              Including these colors
            </StyledMenuItem>
            <StyledMenuItem value="At most these colors" onClick={e => setQuery({ ...query, select: "At most these colors" })}>
              At most these colors
            </StyledMenuItem>
          </StyledMenu>
        </div>
      </FilterInput>

      <FilterInput>
        <label>Mana cost</label>
        <input placeholder='Ex. "{2}{R}{U}" - {U} Blue, {B} Black, {R} Red, {G} Green, {W} White' type="text" onChange={e => setQuery({ ...query, manaCost: e.target.value })} />
      </FilterInput>

    </form>
    <button type="submit">Search</button>
  </Container>;
}

export default Filter;