import '../assets/styles/Locomotive.css';

function Locomotive(props) {
  return (
    <div className="locomotive-description">
      <img 
        className="locomotive-image"
        src={props.loco}
        alt="O 41853 GG1, Pennsylvania."
      />
      <div>
        <p><strong>{props.manufacturer}</strong></p>
        <p><strong>{props.gauge}</strong></p>
        <br />
        <p><strong>{props.model}</strong></p>
        <p>In stock: {props.stock}</p>
        <br />
        <p className="name-locomotive">{props.description}</p>
        <br />
        <p><strong>{props.price}</strong></p>
        <br />
        <a href="#">Add to car</a>
      </div>
    </div>
  );
}

export default Locomotive; 