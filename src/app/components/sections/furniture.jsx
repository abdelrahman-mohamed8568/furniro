import "@style/furniture.css";
import Image from "next/image";
import furniture1 from "@assets/main/furniture/furniture1.png";
import furniture2 from "@assets/main/furniture/furniture2.png";
import furniture3 from "@assets/main/furniture/furniture3.png";
import furniture4 from "@assets/main/furniture/furniture4.png";
import furniture5 from "@assets/main/furniture/furniture5.png";
import furniture6 from "@assets/main/furniture/furniture6.png";
import furniture7 from "@assets/main/furniture/furniture7.png";
import furniture8 from "@assets/main/furniture/furniture8.png";
import furniture9 from "@assets/main/furniture/furniture9.png";

function Furniture() {
  return (
    <div className="furniture">
      <div className="furnitureHeader">
        <p>Share your setup with</p>
        <h3>#FuniroFurniture</h3>
      </div>
      <div className="furnitureGrid">
        <Image
          src={furniture1}
          alt="Furniture 1"
          width={274}
          height={382}
          className="first"
        />
        <Image
          src={furniture2}
          alt="Furniture 2"
          width={381}
          height={323}
          className="second"
        />
        <Image
          src={furniture3}
          alt="Furniture 3"
          width={451}
          height={312}
          className="third"
        />
        <Image
          src={furniture4}
          alt="Furniture 4"
          width={344}
          height={242}
          className="fourth"
        />
        <Image
          src={furniture5}
          alt="Furniture 5"
          width={295}
          height={392}
          className="fifth"
        />
        <Image
          src={furniture6}
          alt="Furniture 6"
          width={290}
          height={348}
          className="sixth"
          style={{ objectFit: "cover" }}
        />
        <Image
          src={furniture7}
          alt="Furniture 7"
          width={178}
          height={242}
          className="seventh"
          style={{ objectFit: "cover" }}
        />
        <Image
          src={furniture8}
          alt="Furniture 8"
          width={425}
          height={433}
          className="eighth"
          style={{ objectFit: "cover" }}
        />
        <Image
          src={furniture9}
          alt="Furniture 9"
          width={258}
          height={196}
          className="ninth"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}

export default Furniture;
