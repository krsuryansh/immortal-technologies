import { useState } from "react";

import "./App.css";
// import soft from "../assets/soft.png"

import OurTechnology from "./our-tecnology";
import NavBar from "./nav-bar";
import Hero from "./hero";
import Card from "./servicecard";
import OurServices from "./services-section";
import Footer from "./footer";
import Ourclient from "./our-client";
import ShowContainer from "./show-container";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     
        <NavBar />
        <Hero />
        <OurServices />
        <div
          className=" w-full  min-h-[50vh] bg-bottom p-5 bg-[#5151efa0]"
          style={{
            background:
              "linear-gradient(rgba(5,77,149,0.6),rgba(5,77,149,0.6)),url('./src/assets/banner1.jpg')",
          }}
        >
          <h1 className="flex w-full items-center justify-center m-4 ">
            Our Technologies
          </h1>
          <OurTechnology />
        </div>
          <ShowContainer/>
        <div className=" w-full  min-h-[45vh] bg-bottom p-5 mt-5 mb-5 bg-[#3780bcf7]">
          <h2 className="flex w-full items-center justify-center m-4 text-4xl ">
            Our Clients
          </h2>
          <Ourclient />
        </div>
        <Footer />
      
    </>
  );
}

export default App;
