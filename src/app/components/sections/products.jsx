import "@style/product.css";
import Card from "../common/card";
import card1 from "@assets/main/homeProducts/card1.png";
import card2 from "@assets/main/homeProducts/card2.png";
import card3 from "@assets/main/homeProducts/card3.png";
import card4 from "@assets/main/homeProducts/card4.jpg";
import card5 from "@assets/main/homeProducts/card5.png";
import card6 from "@assets/main/homeProducts/card6.png";
import card7 from "@assets/main/homeProducts/card7.jpg";
import card8 from "@assets/main/homeProducts/card8.jpg";
import Link from "next/link";
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
  {
    cover: card5,
    name: "Grifo",
    category: "Night lamp",
    price: "Rp 1.500.000",
  },
  {
    cover: card6,
    name: "Muggo",
    category: "Small mug",
    price: "Rp 150.000",
    newLable: true,
  },
  {
    cover: card7,
    name: "Pingky",
    category: "Cute bed set",
    price: "Rp 7.000.000",
    discount: "Rp 14.000.000",
    offerLable: "-50%",
  },
  {
    cover: card8,
    name: "Potty",
    category: "Minimalist flower pot",
    price: "Rp 500.000",
    newLable: true,
  },
];
function Products() {
  return (
    <div className="products">
      <h3>Our Products</h3>
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
      </div>
      <button className="productBtn">
        <Link href={"/shop"} className="link">
          Show More
        </Link>
      </button>
    </div>
  );
}

export default Products;
