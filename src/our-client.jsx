import React from 'react'
import { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const photo = [
    {
        img:`../assets/Aiiims.jpg`
    },
    {
        img:`../assets/orange.png`
    },
    {
        img:`../assets/client1.jpg`
    },
    {
        img:`../assets/client3.jpg`
    },
    {
        img:`../assets/client6.jpg`
    },
    {
        img:`../assets/client7.jpg`
    },
    {
        img:`../assets/iari.png`
    },
    {
        img:`../assets/fortis.jpg`
    },
    {
        img:`../assets/icarlogo.png`
    },
    {
        img:`../assets/radical.png`
    },
    {
        img:`../assets/3m.png`
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
