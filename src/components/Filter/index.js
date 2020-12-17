import React from 'react';

import { Container } from './styles';

function Filter() {
  return <Container>
    <form>
      <div>
        <label>Card Name</label>
        <input />
      </div>

      <div>
        <label>Text</label>
        <input />
      </div>

      <div>
        <label>Type</label>
        <input />
      </div>

      <div>
        <label>Colors</label>
        <div>
          <div>
            <div>
              <label>White</label>
              <input type="Checkbox" />
            </div>
            <div>
              <label>Blue</label>
              <input type="Checkbox" />
            </div>
            <div>
              <label>Black</label>
              <input type="Checkbox" />
            </div>
            <div>
              <label>Red</label>
              <input type="Checkbox" />
            </div>
            <div>
              <label>Green</label>
              <input type="Checkbox" />
            </div>
          </div>
          <select>
            <option>Exactly these colors</option>
            <option>Including these colors</option>
            <option>At most these colors</option>
          </select>
        </div>
      </div>
    </form>
  </Container>;
}

export default Filter;