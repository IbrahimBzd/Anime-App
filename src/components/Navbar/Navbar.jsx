import React, { useState } from "react";
import { Link } from "react-router-dom";
import { VscInfo } from "react-icons/vsc";
import { TiHomeOutline } from "react-icons/ti";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { GrReactjs } from "react-icons/gr";

const Navbar = () => {
  const [fillHeart, setFillHeart] = useState(false);

  function setHeart() {
    if (fillHeart === true) {
      setFillHeart(false);
    } else {
      setFillHeart(true);
    }
  }

  return (
    <div className="h-auto md:h-32 p-3 ">
      <div
        className={`flex relative items-center justify-around flex-row bg-gradient-to-r 
      after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-[#FF2E63]  
      from-[#08D9D6] to-blue-500 w-full h-full py-4 rounded-xl overflow-hidden `}
      >
        <div className=" text-white lg:mx-5 flex flex-col items-center mx-2 text-center">
          <GrReactjs className="md:text-3xl" />
          <span className="text-[0.7rem] md:text-base"> Logo </span>
        </div>
        <ul className="flex flex-row ">
          <Link to="/">
            <li className=" text-white lg:m-5 flex flex-col items-center mx-2 text-center">
              <TiHomeOutline className="md:text-3xl" />
              <span className="text-[0.7rem] md:text-base"> Home </span>
            </li>
          </Link>
          <Link to="/popular">
            <li className=" text-white lg:m-5 flex flex-col items-center mx-2 text-center">
              <BiWorld className="md:text-3xl" />
              <span className="text-[0.7rem] md:text-base"> Popular </span>
            </li>
          </Link>
          <Link to="/about">
            <li className=" text-white lg:m-5 flex flex-col items-center mx-2 text-center">
              <VscInfo className="md:text-3xl" />
              <span className="text-[0.7rem] md:text-base"> About </span>
            </li>
          </Link>
        </ul>
        {fillHeart === true ? (
          <div className=" text-white lg:m-5 flex flex-col items-center mx-2 text-center">
            <BsHeartFill
              onClick={setHeart}
              className="text-white cursor-pointer md:text-3xl"
            />
            <span className="text-[0.7rem] md:text-base"> Unlike </span>
          </div>
        ) : (
          <div className=" text-white lg:m-5 flex flex-col items-center mx-2 text-center">
            <BsHeart
              onClick={setHeart}
              className="text-white md:text-3xl cursor-pointer"
            />
            <span className="text-[0.7rem] md:text-base"> Like </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
