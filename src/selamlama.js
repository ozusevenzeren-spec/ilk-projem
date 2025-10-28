function Selamlama(props) {
    return (
        <div>
            <h1>Merhaba, {props.isim}!</h1>
            <p>yaşın:{props.yas}</p>
            <p>bu kartın rengi:{props.kartrengi}</p> 
        </div>
    );
}
export default Selamlama;