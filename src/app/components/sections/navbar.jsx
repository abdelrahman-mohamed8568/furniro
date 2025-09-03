"use client";
import "@style/navbar.css";
import Image from "next/image";
import Logo from "@assets/navbar/navLogo.png";
import admin from "@assets/navbar/admin.png";
import shoping from "@assets/navbar/shoping.png";
import wishlist from "@assets/navbar/wishlist.png";
import search from "@assets/navbar/search.png";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [openNav, setOpenNav] = useState(true);
  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <nav className={openNav ? "" : "navActive"}>
      <div className="navBox">
        <div className="navLogoBox">
          <Image src={Logo} alt="Logo" className="navLogo" />
          <h2>Furniro</h2>
        </div>
        <div className="navLinks">
          <p>
            <Link href={"/"} className="link" onClick={handleOpenNav}>
              Home
            </Link>
          </p>
          <p>
            <Link href={"/shop"} className="link" onClick={handleOpenNav}>
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
        <input
          type="checkbox"
          id="checkbox"
          checked={!openNav}
          onChange={handleOpenNav}
        />
        <label htmlFor="checkbox" className="toggle">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
