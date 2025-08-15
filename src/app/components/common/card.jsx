import icon1 from "@assets/card/icon1.png";
import icon2 from "@assets/card/icon2.png";
import icon3 from "@assets/card/icon3.png";
import Image from "next/image";
import "@style/card.css";
function Card({
  cover,
  name,
  category,
  price,
  discount,
  newLable,
  offerLable,
}) {
  return (
    <div className="card">
      {newLable == true && <div className="cardLabel">New</div>}
      {offerLable && <div className="cardLabel offer">{offerLable}</div>}
      <div className="cardImagesBox">
        <Image src={cover} alt="" className="cardImage" />
      </div>
      <div className="cardContentBox">
        <div className="cardContent">
          <h4>{name}</h4>
          <h6>{category}</h6>
          <div className="cardPrice">
            <h5>{price}</h5>
            {discount && <p>{discount}</p>}
          </div>
        </div>
      </div>
      <div className="cardOverlay">
        <div className="overlayBox">
          <button>Add to cart</button>
          <div className="overlayIcons">
            <div>
              <Image src={icon1} alt="" className="overlayIcon" />
              <p>Share</p>
            </div>
            <div>
              <Image src={icon2} alt="" className="overlayIcon" />
              <p>Compare</p>
            </div>
            <div>
              <Image src={icon3} alt="" className="overlayIcon" />
              <p>Like</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
