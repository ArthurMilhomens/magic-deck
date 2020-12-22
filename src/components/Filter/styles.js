import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    letter-spacing: 2px;
    text-transform: uppercase;
    width: 100px;
    text-align: center;
  }

  form {
    width: 100%;
    padding: 20px 10px;
    height: 95vh;
    overflow-y: scroll;
    scrollbar-width: 0px;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  input {
    border: none;
  }

  button {
    padding: 10px 45px;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: linear-gradient(to top left, #930000, red);
    color: white;
    font: 16px 'Poppins';
    border: none;
    cursor: pointer;
    align-self: flex-end;
    border-top-left-radius: 7px;
  }

//Avatar prefs
  h2.sarkhan {
      box-shadow: 0px 7px 10px -9px red;
    }

  .sarkhan {
    input {
      border-bottom: 2px solid #930000;

      ::placeholder {
        color: red;
      }

      :focus{
        /* box-shadow: 0px 6px 6px -5px red; */
        border-bottom: none;
        background-color: #930000;
        border-radius: 7px;

        ::placeholder {
          color: black;
        }
      }
    }

    select {
      border-bottom: 2px solid #930000;

      :focus{
        border-bottom: none;
        background-color: #930000;
        border-radius: 7px 7px 0px 0px;
      }
    }

    option {
      background-color: #930000;
    }
  }
`;

export const FilterInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.15rem;

  input {
    height: 35px;
    background-color: transparent;
    padding: 0px 10px;
    color: white;
    font-family: 'Poppins';
    font-size: 14px;
    transition: 0.4s;
    transition-timing-function: ease;
  }

  label {
    font-size: 1rem;
  }

  select {
    height: 39px;
    color: white;
    width: 200px;
    border: none;
    font: 14px 'Poppins';
    transition: 0.4s;
    transition-timing-function: ease;
    background-color: transparent;
  }

  option {
    padding: 10px 0px;
    border: 1px solid red !important;
  }
`;

export const ColorOption = styled.div`
  display: flex;
  align-items: center;
  background-color: #1d1f38;
  padding: 2px;
  border-radius: 25px;
  width: 140px;
  float: left;
  margin: 0px 20px 10px 10px;
  cursor: pointer;
  
  img {
    margin-right: 15px;
  }
`;

export const Colors = styled.div`
  display: block;
  padding: 10px 0px;
`;