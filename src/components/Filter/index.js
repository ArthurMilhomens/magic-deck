import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

import magic from '../../services/magic';

import { Container, FilterInput, ColorOption, Colors, Content } from './styles';

import Blue from '../../assets/mana/blue.png';
import Black from '../../assets/mana/Black.png';
import Red from '../../assets/mana/Red.png';
import White from '../../assets/mana/White.png';
import Green from '../../assets/mana/Green.png';
import Colorless from '../../assets/mana/Colorless.png';
import Loader from 'react-loader-spinner';

function Filter({ setScreen, setCards }) {

  const settings = JSON.parse(localStorage.getItem('char'));
  const [query, setQuery] = useState({ cardName: '', text: '', type: '', colors: '', manaCost: '' })
  const [colorOperator, setColorOperator] = useState('=');
  const [loading, setLoading] = useState(false);

  const submit = e => {
    e.preventDefault();
    setLoading(true);
    magic.get('/cards/search?as=grid&order=name&q=' + query.cardName + `${query.text !== '' ? (' oracle:' + query.text) : ''}` + `${query.type !== '' ? (' type:' + query.type) : ''}` + `${query.colors !== '' ? (' color' + colorOperator + query.colors) : ''}` + `${query.manaCost !== '' ? (' mana:' + query.manaCost) : ''}`)
      .then(function (res) {
        console.log('teste ', res)
        setCards(res.data.data)
        setQuery({ cardName: '', text: '', type: '', colors: '', manaCost: '' })
        setScreen(true)
      })
      .catch(function (err) {
        console.log(err)
      })
  };

  function addColorsToSearch(color){
    setQuery({...query, colors: query.colors.includes(color) ? query.colors.replace(color, '') : (query.colors.concat(color))})
  }

  return <Container>
    <h2 className={settings.avatar}>Filter</h2>
    <form onSubmit={submit} className={settings.avatar}>
      <Content>

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
              <ColorOption onClick={() => addColorsToSearch('W')} className={query.colors.includes('W') && ' active'} >
                <img src={White} alt="Mana Branca" />
                <p>White</p>
              </ColorOption>
              <ColorOption onClick={() => addColorsToSearch('U')} className={query.colors.includes('U') && ' active'} >
                <img src={Blue} alt="Mana Azul" />
                <p>Blue</p>
              </ColorOption>
              <ColorOption onClick={() => addColorsToSearch('B')} className={query.colors.includes('B') && ' active'} >
                <img src={Black} alt="Mana Preta" />
                <p>Black</p>
              </ColorOption>
              <ColorOption onClick={() => addColorsToSearch('R')} className={query.colors.includes('R') && ' active'} >
                <img src={Red} alt="Mana Vermelha" />
                <p>Red</p>
              </ColorOption>
              <ColorOption onClick={() => addColorsToSearch('G')} className={query.colors.includes('G') && ' active'} >
                <img src={Green} alt="Mana Verde" />
                <p>Green</p>
              </ColorOption>
              <ColorOption onClick={() => addColorsToSearch('C')} className={query.colors.includes('C') && ' active'} >
                <img src={Colorless} alt="Mana Incolor" />
                <p>Colorless</p>
              </ColorOption>
            </Colors>
            <select>
              <option onClick={() => setColorOperator('=')}>Exactly these colors</option>
              <option onClick={() => setColorOperator('>=')}>Including these colors</option>
              <option onClick={() => setColorOperator('<=')}>At most these colors</option>
            </select>
          </div>
        </FilterInput>

        <FilterInput>
          <label>Mana cost</label>
          <input placeholder='Ex. "{2}{R}{U}" - {U} Blue, {B} Black, {R} Red, {G} Green, {W} White, {C} Colorless' type="text" onChange={e => setQuery({ ...query, manaCost: e.target.value })} />
        </FilterInput>
      </Content>

      <button disabled={loading} type="submit">{loading ? <Loader type="ThreeDots" height={10} width={68} color="#930000"/> : 'Search'}</button>
    </form>
  </Container>;
}

export default Filter;