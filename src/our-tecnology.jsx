import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dot_net from "/src/assets/dot_net.png";
import js from "/src/assets/js.png";
import angular from "/src/assets/angular.png";
import logodrupal1 from "/src/assets/logo-drupal1.png";
import sql from "/src/assets/sql.png";
import ios from "/src/assets/ios.png";

const data =[{
    img:`${dot_net}`,
    details:`.Net provides user interface, data access, DB connectivity, cryptography, web application development and network communications`
},
{
    img:`${js}`,
    details:`JS is used as aprt of web browsers, whose implementaions allow client-side script and interact with the user to communicate asynchronously`
},
{
    img:`${angular}`,
    details:`AngularJS is an open-source web application framework maintained by Google and corporation to address many challenges encountered in developing S.A.P`
},
{
     img:`${logodrupal1}`,
    details:`Drupal is DContent management framework written in PHP & used to back-end by mostly websites. It common features is to CSM `
},
{
    img:`${sql}`,
    details:`SQL is a special-purpose programing language designed for managing data and stream processing in a relational data stream management system`
},
{
    img:`${ios}`,
    details:`The user interface of iOS Apps is based on the concept of direct manipulation, using multitouch gesture and interface control element consist of sliders and buttons `
}
]
import React, { Component } from "react";
import Slider from "react-slick";

function OurTechnology() {

      var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
  return (
          
    <div className="md:max-w-[1280px] md:m-auto w-full md:h-[50vh] min-h-max">
        <div className="md:m-5 m-0 p-2 md:p-0 items-center justify-center w-full" >
        <Slider {...settings}>
            {data.map((d)=>(
                <div className="bg-[white]   shadow-lg md:p-2 flex h-[100%]  items-center rounded-md ">
                    <div  className=" flex items-center justify-center pt-2 md:p-0">
                        <img src={d.img} alt="Image" className="" />
                    </div>
                    <div className="md:w-full  flex justify-center items-center">
                        <p className="md:w-[77%] w-[80%] p-2 md:p-0">{d.details}</p>
                    </div>
                </div>
            ))}
        </Slider>
        </div>


    </div>
  
  );
}

export default OurTechnology;
