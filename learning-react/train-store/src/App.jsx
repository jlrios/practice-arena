import { useState } from 'react'
import Locomotive from './components/locomotive.jsx'
import './App.css'

import loco1 from './assets/images/HO-GP40-UP.png';
import loco2 from './assets/images/HO-F7-SF.png';
import loco3 from './assets/images/HO-MALLARD-BR.png';
import loco4 from './assets/images/HO-GP38-CP.png';  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Locomotives Catalog</h1>
        <div className="main-container">
          <Locomotive 
            loco={loco1}
            manufacturer="Bachmann"
            model="GP40 UNION PACIFIC"
            stock="5"
            gauge="HO Scale"
            description="GP40 diesel locomotive in the classic Union Pacific yellow and gray paint scheme.
            This model features detailed bodywork, authentic paint, and accurate decals.
            DCC Ready with a factory-installed 8-pin plug for installing the DCC decoder of your choice, 
            it's perfect for collectors and model railroad enthusiasts."
            price="$220.00"
          />
          <Locomotive
            loco={loco2}
            manufacturer="Athearn"
            model="F7 SANTA FE WARBONNET"
            stock="3"
            gauge="HO Scale"
            description="F7 diesel locomotive in the iconic Santa Fe Warbonnet paint scheme.
            This model features intricate detailing, vibrant colors, and precise decals.
            Equipped with DCC for control direction, speed and lighting functions, making 
            it an excellent choice for model railroaders and collectors."
            price="$350.00"
          />
          <Locomotive
            loco={loco3}
            manufacturer="Hornby"
            model="A4 Class Mallard"
            stock="1"
            gauge="HO Scale"
            description="A4 Class Mallard steam locomotive in British Railways blue livery.
            This model boasts fine detailing, authentic paint, and accurate decals.
            It features a working smoke unit and is DCC ready, making it a standout piece
            for your model railway. With its historical significance and elegant design."
            price="$270.00"
          />
          <Locomotive
            loco={loco4}
            manufacturer="Walthers"
            model="GP38 CANADIAN PACIFIC"
            stock="6"
            gauge="HO Scale"
            description="GP38 diesel locomotive in the classic Canadian Pacific red and grey paint scheme.
            This model features detailed bodywork, authentic paint, and accurate decals.
            Standard DC with a powerful motor and smooth operation, it's an excellent choice for collectors and
            railroad enthusiasts."
            price="$120.00"
          />
        </div>
      </div>
    </>
  );
}

export default App
