import styled from 'styled-components';

export const Container = styled.ul`
  display: block;
  width: 78%;
  overflow-y: scroll;
  scrollbar-width: 2px;
  margin: 20px 0;
  list-style: none;
  
  ::-webkit-scrollbar {
    width: 2px;
    padding-right: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: red;
  }
  ::-webkit-scrollbar {
    background-color: #930000;
  }
`;

export const Card = styled.li`
  max-width: 230px;
  max-height: 310px;
  overflow: hidden;
  float: left;
  margin: 1.5rem;
  border-radius: 14px;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  :hover {
    box-shadow: 0px 1px 8px red;
    transition: 0.3s;
  }
`;
