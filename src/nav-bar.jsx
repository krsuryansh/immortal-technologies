import React, { useEffect, useState } from "react";
import logo from "/src/assets/logo.png";
const Nav=()=> {
  const [display, setdisplay] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 10 ? setdisplay(true) : setdisplay(false);
    })

  },[])

  return (
    <nav>
      <div
        className={`w-full fixed top-0 z-[20] text-white  h-[70px]  ${display ? 'bg-[#f5f0f0e3] text-[#1b4332]': 'bg-none'}` }
      >
        <div className="p-5 w-full h-[70px]  justify-items-center items-center justify-between  flex md:max-w-[1280px] md:m-auto">
          <div>
            <img className="h-[60px]" src={logo} alt="" />
          </div>
          <div className=" md:block">
            <div className=" w-full justify-between items-center mr-[50px] hidden text-[#1b4332] md:flex space-x-5 mx-1 px-2">
              <ul className=" ">
                <a
                  className={`${display ? ' text-[#1b4332]': 'text-white'} hover:border-b-[3px] p-1  hover:border-[#6d6de5] hover:text-[#6d6de5]`}
                  href="#"
                >
                  Home
                </a>
              </ul>
              <ul>
                <a
                  className={`${display ? ' text-[#1b4332]': 'text-white'} hover:border-b-[3px] p-1  hover:border-[#6d6de5] hover:text-[#6d6de5]`}
                  href="#"
                >
                  About us
                </a>
              </ul>
              <ul>
                <a
                  className={`${display ? ' text-[#1b4332]': 'text-white'} hover:border-b-[3px] p-1  hover:border-[#6d6de5] hover:text-[#6d6de5]`}
                  href="#"
                >
                  Services
                </a>
              </ul>
              <ul>
                <a
                  className={`${display ? ' text-[#1b4332]': 'text-white'} hover:border-b-[3px] p-1  hover:border-[#6d6de5] hover:text-[#6d6de5]`}
                  href="#"
                >
                  Portfolio
                </a>
              </ul>
              <ul>
                <a
                  className={`${display ? ' text-[#1b4332]': 'text-white'} hover:border-b-[3px] p-1  hover:border-[#6d6de5] hover:text-[#6d6de5]`}
                  href="#"
                >
                  Our Products
                </a>
              </ul>
              <ul>
                <a
                  className={`${display ? ' text-[#1b4332]': 'text-white'} hover:border-b-[3px] p-1  hover:border-[#6d6de5] hover:text-[#6d6de5]`}
                  href="#"
                >
                 Blogs
                </a>
              </ul>
              <ul>
                <a className=" " href="#">
                  <button className=" p-2 text-[#f1e9e9] bg-[#3588db] hover:bg-[#242452] rounded-lg ">
                    Contact us
                  </button>
                </a>
              </ul>
            </div>
          </div>
          <div className=" md:hidden block mt-6 h-[70px] w-[40px]">
            <img src="./assets/menu.png" alt="" />
          </div>
        </div>
      </div>

      <div className=" w-full h-screen bg-red-500 md:hidden  hidden text-[#1b4332]  p-5 ">
        <ul>
          <a className="text-[#1b4332] " href="#">
            Home
          </a>
        </ul>
        <ul>
          <a className="text-[#1b4332] " href="#">
            About us
          </a>
        </ul>
        <ul>
          <a className="text-[#1b4332] " href="#">
            Services
          </a>
        </ul>
        <ul>
          <a className="text-[#1b4332] " href="#">
            Portfolio
          </a>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
