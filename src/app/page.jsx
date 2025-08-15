import Hero from "./components/sections/hero";
import Range from "./components/sections/range";
import Products from "./components/sections/products";
import Rooms from "./components/sections/rooms";
import Furniture from "./components/sections/furniture";

export default function Home() {
  return (
    <div className="main">
      <Hero />
      <Range />
      <Products />
      <Rooms />
      <Furniture />
    </div>
  );
}
