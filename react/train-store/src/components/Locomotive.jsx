import '../assets/styles/Locomotive.css';

function Locomotive({loco, manufacturer, gauge, model, stock, description, price}) {
  console.log({manufacturer});
  return (
    <div className="locomotive-description">
      <img 
        className="locomotive-image"
        src={loco}
      />
      <div>
        <p><strong>{manufacturer} </strong></p>
        <p><strong>{gauge}</strong></p>
        <br />
        <p><strong>{model}</strong></p>
        <p>In stock: {stock}</p>
        <br />
        <p>{description}</p>
        <br />
        <p><strong>{price}</strong></p>
        <br />
        <a href="#">Add to car</a>
      </div>
    </div>
  );
}

export default Locomotive; 