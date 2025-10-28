function Kahve(props) {
  return (
    <div>
      <h2>Siparişiniz Hazır:{props.çeşit}</h2>
      <p>boyut: {props.boyut} </p>
      <p>Afiyet Olsun</p>
    </div>
    );
}

export default Kahve;