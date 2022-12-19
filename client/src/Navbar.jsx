import { Finder } from "./finder"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
export function Navbar(){
return (
   
        <BrowserRouter>
    <div className="main">
    <section >
        <a href="#">BATTERY-WALA</a>
    </section>
    <div className="nav">
 <li><a  href="#">Home </a></li>
   <li className=""> <a  href="#" className="ourproduct">Our Product</a></li>
   <div  className="options-1">
            {/* <div className="op-1"> */}
              <a href="">  <img  src="https://www.tatagreenbattery.com/wp-content/uploads/2020/12/two-wheeler-2.png"
                 
                 /></a>
              {/* <h6>TWO-WHEELER</h6> */}
            {/* </div> */}
            {/* <div className="op-1"> */}
              <a href=""><img  src=" https://www.tatagreenbattery.com/wp-content/uploads/2020/12/car-1.png"  /></a>  
              {/* <h6>CAR</h6> */}
            {/* </div> */}
            {/* <div className="op-1"> */}
              <a href=""> <img  src="https://www.tatagreenbattery.com/wp-content/uploads/2020/12/tractors.png"  /></a> 
              {/* <h6>TRACTOR</h6> */}
            {/* </div> */}
            {/* <div className="op-1"> */}
              <a href=""> <img  src="https://www.tatagreenbattery.com/wp-content/uploads/2020/12/comm-vehicles.png"  /></a> 
              {/* <h6>TRUCKS</h6> */}
            {/* </div> */}
            {/* <div className="op-1"> */}
              <a href=""><img  src="https://www.tatagreenbattery.com/wp-content/uploads/2020/12/e-rickshaw1-1-filled-2.png"  /></a>  
              {/* <h6>E-RICKSHAW</h6> */}
            {/* </div> */}
            {/* <div className="op-1"> */}
               <a href=""><img  src="https://www.tatagreenbattery.com/wp-content/uploads/2021/01/inverters.png"  /></a> 
              {/* <h6>INVERTERS</h6> */}
            {/* </div> */}

        </div>           
 <li><a href="#">Battery Finder</a></li>
 <li><a  href="#">Battery Dealer</a></li>
 <li><a href="#">Help & Support</a></li>
 <li><a href="#">About Us</a></li>
    </div>
    </div>
   
                 </BrowserRouter>
);

}