import React from "react";
import Kahve from './Kahve.jsx';
function App() {
  return (
    <div>
    
      <h1>Hoşgeldiniz Siparişinizi Verin ☕️</h1>
      <Kahve çeşit="Türk Kahvesi" boyut="Büyük" />
      <Kahve çeşit="Espresso" boyut="Orta" />
      <Kahve çeşit="Latte" boyut="Küçük" />
    </div>
  );
}
export default App;