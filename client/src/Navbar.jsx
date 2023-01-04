import { Finder } from "./finder";
import { Body } from "./body";
import { Products } from "./ourproduct";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import BDealer from "./dealer";

export function Navbar() {
  const [userType, setUserType] = useState("A")
  return (
    <>
      <div className="nav_main">
        <section >
          <Link to="/">BATTERY-WALA</Link>
        </section>
        <div className="nav">
          <li><Link to="/">Home</Link></li>
          {
            userType && <li className="ourproduct"> <Link to="/products">Products</Link></li>

          }
          <li><Link to="/batteryFinder">Battery Finder</Link></li>
          <li><Link to="/dealer">Dealers</Link></li>
          <li><Link to="/help">Help & Support</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/batteryFinder" element={<Finder />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dealer" element={<BDealer />} />
      </Routes>

    </>
  );

}











