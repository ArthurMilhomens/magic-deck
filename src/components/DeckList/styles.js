import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  width: 78%;
  overflow-y: scroll;
  scrollbar-width: 2px;
  margin: 20px 0;
  
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

export const Card = styled.div`
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
`;
