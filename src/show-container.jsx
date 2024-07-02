import React, { useState } from "react";
const Info = [
  {
    img: `../assets/show/web-dev.jpg`,
    title: `Web Development`,
    details: `Immortal Technologies offers the best website design and development in Delhi, India and reasonably priced on-line marketing services in Delhi, India and generally on-line business needs, corporate web solutions, website development, web audit, website outsourcing and offshore web designers.`,
  },
  {
    img:`../assets/show/Ecom.png`,
    title:`E-Commerce Website Design`,
    details:`Immortal Technologies is the e-commerce website design company and platform trust by the world's most important brands and produces on-line business. The best e-commerce website development company platform for growing businesses. E-Commerce enable merchants to sell more and scale faster than any other solution.`
  },
  {
    img:`../assets/show/mob-app.jpg`,
    title:`Mobile Apps`,
    details:`Immortal Technologies provides you with an affordable e-commerce enabled site that is professional in appearance, easy to maintain and includes the tools you need to be successful.`
  },
  {
    img:`../assets/show/online-marketing.jpg`,
    title:`Online Marketing`,
    details:`Internet marketing, a guide to what you can do with websites, on-line advertising, e-commerce and other on-line marketing service In India`
  }
];

 const ShowContainer = () => {
  function webDev(){  
    setdata(0);
};
function ecom(){  
  setdata(1);
};
function mapp(){  
  setdata(2);
};
function OnlineMarketing(){
  setdata(3);
};
    const [data , setdata] = useState(0);
  return (
    <div className="max-w-[1280px] m-auto  h-[60vh] flex items-center mt-[5]">
      <div className="flex w-[60%] h-[35vh] shadow-md shadow-[#6dcdf3] rounded-lg p-2">
        <div className="w-[35%] ">
          <div className="h-[25%]  border-[2px]  "  ><button onClick={webDev} className="w-full min-h-full font-medium focus:text-white focus:bg-[#333232] focus:border-r-[15px] focus:border-[#e9e4e4]">Web dev</button></div>
          <div className="h-[25%] border-[2px] "><button onClick={ecom} className="w-full min-h-full font-medium focus:text-white focus:bg-[#333232] focus:border-r-[15px] focus:border-[#e9e4e4]">E-Commerece Solutions</button></div>
          <div className="h-[25%]  border-[2px] "><button onClick={mapp} className="w-full min-h-full font-medium focus:text-white focus:bg-[#333232] focus:border-r-[15px] focus:border-[#e9e4e4]">Mobile Apps</button></div>
          <div className="h-[25%] border-[2px] "><button onClick={OnlineMarketing} className="w-full font-medium min-h-full focus:text-white focus:bg-[#333232] focus:border-r-[15px] focus:border-[#e9e4e4]">Online Marketing</button></div>
        </div>
        <div className="w-[65%] bg-[#e9e4e4] flex">
            <div className="w-[40%] flex content-center items-center  justify-center">
             
                <img src={Info[data].img} alt=""  className="w-[70%]"/>
            </div>
            <div className="w-[60%] flex flex-col  justify-center pr-5 items-center md:overflow-hidden overflow-scroll"  >
                <h2 className="text-xl font-medium pb-5 ">{Info[data].title}</h2>
                <p className="text-xs w-[90%]  ">{Info[data].details}</p>

            </div>
        </div>
      </div>
    </div>
  );
};

export default ShowContainer;
