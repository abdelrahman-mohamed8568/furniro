import "@style/rooms.css";
import Image from "next/image";
import room1 from "@assets/main/rooms/images/room1.png";
import room2 from "@assets/main/rooms/images/room2.png";
import room3 from "@assets/main/rooms/images/room3.png";
import textIcon from "@assets/main/rooms/icons/textIcon.png";
import textArraw from "@assets/main/rooms/icons/textArraw.png";
import imageArraw from "@assets/main/rooms/icons/imageArraw.png";
import Link from "next/link";

function Rooms() {
  return (
    <div className="rooms">
      <div className="roomsContentBox">
        <div className="roomsContent">
          <h3>50+ Beautiful rooms inspiration</h3>
          <p>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
        </div>
        <button>
          <Link href={"/shop"} className="link">
            Explore More
          </Link>
        </button>
      </div>
      <div className="roomsImages">
        <div className="room1">
          <div className="room1Content">
            <div className="roomText">
              <div>
                <p>01</p>
                <Image src={textIcon} alt="" className="textIcon" />
                <p>Bed Room</p>
              </div>
              <h4>Inner Peace</h4>
            </div>
          </div>
          <div className="textArrawBox">
            <Image src={textArraw} alt="" className="textArraw" />
          </div>
          <Image src={room1} alt="" className="room1Image" />
        </div>
        <div className="room2">
          <Image src={room2} alt="" className="room2Image" />
          <div className="imageArrawBox">
            <Image src={imageArraw} alt="" className="imageArraw" />
          </div>
          <div className="inputIcons">
            <div className="activeInput">
              <span className="input" />
            </div>
            <span className="input" />
            <span className="input" />
            <span className="input" />
          </div>
        </div>
        <Image src={room3} alt="" className="room2Image" />
      </div>
    </div>
  );
}

export default Rooms;
