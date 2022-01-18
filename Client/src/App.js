// npm i node-sass
import './App.css';
import { useContext } from 'react';
import { LogIn } from './LogIn/LogIn';
import { Main } from './Main/Main';
import { DataContext } from './Context/DataContext'

function App() {

  const { data } = useContext(DataContext);

  return (
    
      <div className="App">
          {!data.isLogedin && <LogIn />}
          {data.isLogedin && <Main />}
      </div>
  );
}

export default App;
