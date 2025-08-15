import "@/app/style/footer.css";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="footerBox">
        <div className="footerTop">
          <div className="footerText">
            <h4>Funiro.</h4>
            <p>
              400 University Drive Suite 200 Coral Gables,
              <br /> FL 33134 USA
            </p>
          </div>
          <div className="footerContent">
            <div className="footerLinks">
              <ul>
                <li>Links</li>
                <li>
                  <Link href={"/"} className="link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={"/shop"} className="link">
                    Shop
                  </Link>
                </li>
                <li>About</li>
                <li>Contact</li>
              </ul>
              <ul>
                <li>Help</li>
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>
            <div className="footerEmail">
              <p>Newsletter</p>
              <div className="footerInput">
                <input type="text" placeholder="Enter Your Email Address" />
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <p>2023 furino. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
