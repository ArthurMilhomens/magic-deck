import React from 'react';
import Routes from './routes'
import GlobalStyle from './styles/globalstyles'
import { BrowserRouter } from 'react-router-dom'


function App() {
  //TODO: store theme in Local Storage
  // const [theme, setTheme] = useState(<GlobalStyle/>)
  
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes />
    </BrowserRouter>
  );
}

export default App;