import "@style/range.css";
import dining1 from "@assets/main/range/card1/card1.png";
import dining2 from "@assets/main/range/card1/card2.png";
import living1 from "@assets/main/range/card2/card1.png";
import living2 from "@assets/main/range/card2/card2.png";
import living3 from "@assets/main/range/card2/card3.png";
import bedroom1 from "@assets/main/range/card3/card1.png";
import bedroom2 from "@assets/main/range/card3/card2.png";
import bedroom3 from "@assets/main/range/card3/card3.png";
import Image from "next/image";

function Range() {
  return (
    <div className="range">
      <div className="rangeHeader">
        <h3>Browse The Range</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="rangeBox">
        <div className="rangeCard">
          <div className="rangeImageBox">
            <Image src={dining1} alt="" className="rangeImage dining1" />
            <Image src={dining2} alt="" className="rangeImage dining2" />
          </div>
          <p>Dining</p>
        </div>
        <div className="rangeCard">
          <div className="rangeImageBox">
            <Image src={living1} alt="" className="rangeImage living1" />
            <Image src={living2} alt="" className="rangeImage living2" />
            <Image src={living3} alt="" className="rangeImage living3" />
          </div>
          <p>Living</p>
        </div>
        <div className="rangeCard">
          <div className="rangeImageBox">
            <Image src={bedroom1} alt="" className="rangeImage bedroom1" />
            <Image src={bedroom2} alt="" className="rangeImage bedroom2" />
            <Image src={bedroom3} alt="" className="rangeImage bedroom3" />
          </div>
          <p>Bedroom</p>
        </div>
      </div>
    </div>
  );
}

export default Range;
