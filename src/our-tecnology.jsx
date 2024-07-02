import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const data =[{
    img:`../assets/dot_net.png`,
    details:`.Net provides user interface, data access, DB connectivity, cryptography, web application development and network communications`
},
{
    img:`../assets/js.png`,
    details:`JS is used as aprt of web browsers, whose implementaions allow client-side script and interact with the user to communicate asynchronously`
},
{
    img:`../assets/angular.png`,
    details:`AngularJS is an open-source web application framework maintained by Google and corporation to address many challenges encountered in developing S.A.P`
},
{
     img:`../assets/logo-drupal1.png`,
    details:`Drupal is DContent management framework written in PHP & used to back-end by mostly websites. It common features is to CSM `
},
{
    img:`../assets/sql.png`,
    details:`SQL is a special-purpose programing language designed for managing data and stream processing in a relational data stream management system`
},
{
    img:`../assets/ios.png`,
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
        pauseOnHover: true
      };
  return (
          
    <div className="max-w-[1280px] m-auto w-full h-[50vh] ">
        <div className="m-5 items-center justify-center w-full" >
        <Slider {...settings}>
            {data.map((d)=>(
                <div className="bg-[white]   shadow-lg p-2 flex h-[100%] items-center rounded-md ">
                    <div  className=" flex items-center justify-center">
                        <img src={d.img} alt="Image" className="" />
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <p className="w-[77%]">{d.details}</p>
                    </div>
                </div>
            ))}
        </Slider>
        </div>


    </div>
  
  );
}

export default OurTechnology;
