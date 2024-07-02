import React from 'react'
import { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aiims from "/src/assets/Aiiims.jpg"
import orange from "/src/assets/orange.png"
import client1 from "/src/assets/client1.jpg"
import client2 from "/src/assets/client3.jpg"
import client3 from "/src/assets/client6.jpg"
import client4 from "/src/assets/client7.jpg"
import iari from "/src/assets/iari.png"
import fortis from "/src/assets/fortis.jpg"
import icar from "/src/assets/icarlogo.png"
import radial from "/src/assets/radical.png"
import threem from "/src/assets/3m.png"
const photo = [
    {
        img:`${Aiims}`
    },
    {
        img:`${orange}`
    },
    {
        img:`${client1}`
    },
    {
        img:`${client2}`
    },
    {
        img:`${client3}`
    },
    {
        img:`${client4}`
    },
    {
        img:`${iari}`
    },
    {
        img:`${fortis}`
    },
    {
        img:`${icar}`
    },
    {
        img:`${radial}`
    },
    {
        img:`${threem}`
    }
]
function Ourclient  (){
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true
      };
  return (
    <div className="max-w-[1280px] m-auto w-full content-center "> 
    <Slider {...settings}>
    {photo.map((p)=> (
    <div className="flex h-[20vh] bg-[white]  w-full p-4 rounded-md justify-center items-center content-center" >
        <img src={p.img} alt="" className="h-[10vh] "/>
    </div>
    ))}
    
    </Slider>
    </div>
  );
}
export default Ourclient;
