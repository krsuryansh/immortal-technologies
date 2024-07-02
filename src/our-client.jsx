import React from 'react'
import { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const photo = [
    {
        img:`./src/assets/Aiiims.jpg`
    },
    {
        img:`./src/assets/orange.png`
    },
    {
        img:`./src/assets/client1.jpg`
    },
    {
        img:`./src/assets/client3.jpg`
    },
    {
        img:`./src/assets/client6.jpg`
    },
    {
        img:`./src/assets/client7.jpg`
    },
    {
        img:`./src/assets/iari.png`
    },
    {
        img:`./src/assets/fortis.jpg`
    },
    {
        img:`./src/assets/icarlogo.png`
    },
    {
        img:`./src/assets/radical.png`
    },
    {
        img:`./src/assets/3m.png`
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
