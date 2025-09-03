import "@style/shop.css";
import cover from "@assets/shop/images/header.jpg";
import headerArraw from "@assets/shop/icons/headerArraw.png";
import filterIcon1 from "@assets/shop/icons/filter1.png";
import filterIcon2 from "@assets/shop/icons/filter2.png";
import filterIcon3 from "@assets/shop/icons/filter3.png";
import service1 from "@assets/shop/icons/service1.png";
import service2 from "@assets/shop/icons/service2.png";
import service3 from "@assets/shop/icons/service3.png";
import service4 from "@assets/shop/icons/service4.png";
import card1 from "@assets/main/homeProducts/card1.png";
import card2 from "@assets/main/homeProducts/card2.png";
import card3 from "@assets/main/homeProducts/card3.png";
import card4 from "@assets/main/homeProducts/card4.jpg";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/common/card";

const productInfo = [
  {
    cover: card1,
    name: "Syltherine",
    category: "Stylish cafe chair",
    price: "Rp 2.500.000",
    discount: "Rp 3.500.000",
    offerLable: "-30%",
  },
  {
    cover: card2,
    name: "Leviosa",
    category: "Stylish cafe chair",
    price: "Rp 2.500.000",
  },
  {
    cover: card3,
    name: "Lolito",
    category: "Luxury big sofa",
    price: "Rp 7.000.000",
    discount: "Rp 14.000.000",
    offerLable: "-50%",
  },
  {
    cover: card4,
    name: "Respira",
    category: "Outdoor bar table and stool",
    price: "Rp 500.000",
    newLable: true,
  },
];

function Shop() {
  return (
    <div className="shop">
      <div className="shopHeader">
        <Image src={cover} alt="" className="shopHeaderImage" />
        <div className="shopHeaderText">
          <h2>Shop</h2>
          <div>
            <strong>
              <Link href={"/"} className="link">
                Home
              </Link>
            </strong>
            <Image src={headerArraw} alt="" className="headerArraw" />
            <p>shop</p>
          </div>
        </div>
      </div>
      <div className="filter">
        <div className="filterLeft">
          <div className="filterBox">
            <Image src={filterIcon1} alt="" className="filterIcon" />
            <p>Filter</p>
          </div>
          <Image src={filterIcon2} alt="" className="filterIcon" />
          <Image src={filterIcon3} alt="" className="filterIcon" />
          <p>Showing 1–16 of 32 results</p>
        </div>
        <div className="filterRight">
          <div className="filterBox1">
            <p>Show</p>
            <span>16</span>
          </div>
          <div className="filterBox2">
            <p>Short by</p>
            <span>Default</span>
          </div>
        </div>
      </div>
      <div className="shopProducts">
        <div className="productsBox">
          {productInfo.map((product, id) => (
            <Card
              key={id}
              cover={product.cover}
              name={product.name}
              category={product.category}
              price={product.price}
              discount={product.discount}
              offerLable={product.offerLable}
              newLable={product.newLable}
            />
          ))}
          {productInfo.map((product, id) => (
            <Card
              key={id}
              cover={product.cover}
              name={product.name}
              category={product.category}
              price={product.price}
              discount={product.discount}
              offerLable={product.offerLable}
              newLable={product.newLable}
            />
          ))}
          {productInfo.map((product, id) => (
            <Card
              key={id}
              cover={product.cover}
              name={product.name}
              category={product.category}
              price={product.price}
              discount={product.discount}
              offerLable={product.offerLable}
              newLable={product.newLable}
            />
          ))}
          {productInfo.map((product, id) => (
            <Card
              key={id}
              cover={product.cover}
              name={product.name}
              category={product.category}
              price={product.price}
              discount={product.discount}
              offerLable={product.offerLable}
              newLable={product.newLable}
            />
          ))}
        </div>
        <div className="shopPages">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>Next</span>
        </div>
      </div>
      <div className="shopServices">
        <div className="shopServicesBox">
          <div>
            <Image src={service1} alt="" className="serviceLogo" />
            <div className="serviceText">
              <h5>High Quality</h5>
              <p>crafted from top materials</p>
            </div>
          </div>
          <div>
            <Image src={service2} alt="" className="serviceLogo" />
            <div className="serviceText">
              <h5>Warranty Protection</h5>
              <p>Over 2 years</p>
            </div>
          </div>
          <div>
            <Image src={service3} alt="" className="serviceLogo" />
            <div className="serviceText">
              <h5>Free Shipping</h5>
              <p>Order over 150 $</p>
            </div>
          </div>
          <div>
            <Image src={service4} alt="" className="serviceLogo" />
            <div className="serviceText">
              <h5>24 / 7 Support</h5>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
