import { Finder } from "./finder"; 
import { Body } from "./body";
import { Products } from "./ourproduct";
import { Link  ,Route, Routes} from "react-router-dom";

export function Navbar(){
return (
<>
  <div className="main">
    <section >
        <a href="/">BATTERY-WALA</a> 
    </section>
    <div className="nav">
 <li><Link  to="/">Home</Link></li>
   <li  className="ourproduct"> <Link  to="/products">Our Product</Link></li>

 <li><Link to="/batteryFinder">Battery Finder</Link></li>
 <li><Link to="/dealer">Battery Dealer</Link></li>
 <li><Link to="/help">Help & Support</Link></li>
 <li><Link to="/about">About Us</Link></li>
    </div>
    </div>

    <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/batteryFinder" element={<Finder />} />
        <Route path="/products" element={<Products />} />
      </Routes>

</>
   );
   
  }
   
  
  
  
  
  
  
  
  


