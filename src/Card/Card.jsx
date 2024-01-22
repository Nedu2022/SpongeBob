import './Card.css';
import SpongeData from '../SpongeData'

function Card() {
  return (
    <div className="container">
      {SpongeData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.imageSrc} alt="Card Image" />
          <div className="content">
            <h2>{card.title}</h2>
            {/* <p>{card.description}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
