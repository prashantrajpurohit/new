import  React  from "react";
import Select from "react-select";
// import ReactHTMLDatalist from "react-html-datalist";
const options=[
      { label: 'Chocolate', value: '1' },
      { label: 'Coconut', value: '2' },
      { label: 'Mint', value: '3' },
      { label: 'Strawberry', value: '4' },
      { label: 'Vanilla', value: '5' },
]
export function Finder(){ return(
  <div className="battery_finder">
    <div className="bf_header">
  <h1>Find Your Battery Within Seconds</h1>
  </div>
  <div className="search_container">
      <div className="box_container">
    <div className="search_box">
      <h5>Product Type*</h5>
  <Select options={options} placeholder="Select Your Colour"/>
  </div>
  <div className="search_box">
      <h5>Maker*</h5>
  <Select options={options} placeholder="Select Your Colour"/>
  </div>
  <div className="search_box">
      <h5>Model*</h5>
  <Select options={options} placeholder="Select Your Colour"/>
  </div>
  <div className="search_box">
      <h5>Brand</h5>
  <Select options={options} placeholder="Select Your Colour"/>
  </div>
  <div className="search_box">
      <h5>State*</h5>
  <Select options={options} placeholder="Select Your Colour"/>
  </div>
  <div className="search_box">
      <h5>City*</h5>
  <Select options={options} placeholder="Select Your Colour"/>
  </div>
  </div>
  <div className="btn">
  <a href="#" className="tg-btn" id="findbattery">
  <span>Find Battery</span></a>
  </div>
  </div>
  </div>
    );
  }





