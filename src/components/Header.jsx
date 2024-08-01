"use client";
import logo from "../../public/Logo.svg"
import { RiSearchLine } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";  
import { TbShoppingBag } from "react-icons/tb";
import { RxAvatar } from "react-icons/rx";
import { VscThreeBars } from "react-icons/vsc";
import Link from "next/link";

export default function Header() {
    return (
      <header className=" flex flex-col  ">
          <div className="flex justify-between items-center px-[15px] md:px-[96px]">
            <div className="flex  gap-1">
                <VscThreeBars  className="w-[20px] sm:hidden h-[20px]"/>
            <img src="./Logo.svg" alt="" className="w-[20px] h-[20px] sm:w-full sm:h-full" />
            </div>
           
           <div className="font-[800] text-[36px] leading-[43px]">
            LOGO
            </div>

            <div className="flex gap-[12px] md:gap-[24px]">
             <RiSearchLine className="w-[24px] h-[24px]"/>
             <BsHeart className="w-[24px] h-[24px]"/>
             <TbShoppingBag className="w-[24px] h-[24px]"/>
             <RxAvatar className="w-[24px] h-[24px] hidden md:flex"/>
            </div>

          </div>


      </header>
    );
  }