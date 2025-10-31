import { useState } from 'react'
import Locomotive from './components/locomotive.jsx'
import './App.css'

import loco1 from './assets/images/HO-GP40-UP.png';
import loco2 from './assets/images/HO-F7-SF.png';
import loco3 from './assets/images/HO-MALLARD-BR.png';
import loco4 from './assets/images/HO-GP38-CP.png'; 
import loco5 from './assets/images/HO-SD40-FERROMEX.png'; 

import locomotives from './data/locomotives.json';

function App() {
  const [count, setCount] = useState(0)

  let locos =[loco1, loco2, loco3, loco4, loco5];

  return (
    <>
      <div className="App">
        <h1>Locomotives Catalog</h1>
        <div className="main-container">
          {locomotives.map((loco, index) => (
            <Locomotive 
              key={loco.id}
              loco={locos[index]}
              manufacturer={loco.manufacturer}
              model={loco.model}
              stock={loco.stock}
              gauge={loco.gauge}
              description={loco.description}
              price={loco.price}
          />
          ))}
        </div>
      </div>
    </>
  );
}

export default App
