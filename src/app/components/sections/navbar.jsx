"use client";
import "@style/navbar.css";
import Image from "next/image";
import { useState } from "react";
import Logo from "@assets/navbar/navLogo.png";
import admin from "@assets/navbar/admin.png";
import shoping from "@assets/navbar/shoping.png";
import wishlist from "@assets/navbar/wishlist.png";
import search from "@assets/navbar/search.png";
import Link from "next/link";
import Home from "@/app/page";
function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <nav>
      <div className="navBox">
        <div className="navLogoBox">
          <Image src={Logo} alt="Logo" className="navLogo" />
          <h2>Furniro</h2>
        </div>
        <div className="navLinks">
          <p>
            <Link href={"/"} className="link">
              Home
            </Link>
          </p>
          <p>
            <Link href={"/shop"} className="link">
              Shop
            </Link>
          </p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="navIcons">
          <div className="nacIconBox">
            <Image src={admin} alt="" className="navIcon" />
          </div>
          <div className="nacIconBox">
            <Image src={search} alt="" className="navIcon" />
          </div>
          <div className="nacIconBox">
            <Image src={wishlist} alt="" className="navIcon" />
          </div>
          <div className="nacIconBox">
            <Image src={shoping} alt="" className="navIcon" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
