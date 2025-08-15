import "@style/hero.css";
import hero from "@assets/main/hero/hero.jpg";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <div className="hero">
      <Image src={hero} alt="" className="heroImage" />
      <div className="heroBox">
        <div className="heroContainer">
          <p>New Arrival</p>
          <h2>Discover Our New Collection</h2>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </h5>
          <button>
            <Link href={"/shop"} className="link">
              BUY Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
