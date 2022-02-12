// npm i node-sass
import './App.css';
import { useContext, useState } from 'react';
import { Main } from './Main/Main';
import { DataContext } from './Context/DataContext'
import { Logs } from './Logs/Logs';


function App() {

  
  const { data } = useContext(DataContext);
  const [isTempin, setIsTempin] = useState(true)

  return (
    
      <div className="App">
          {!isTempin && <Logs />}
          {isTempin && <Main />}
      </div>
  );
}

export default App;
