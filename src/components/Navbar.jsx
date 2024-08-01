"use client";
import Link from "next/link";
export default function Navbar() {
  return (
    <div className="flex justify-center">
    <div className=" hidden md:flex gap-[64px]">
        <Link href="/shop" className="font-[700] text-[20px] leading-[24px]">Shop</Link>
        <Link href="/skills" className="font-[700] text-[20px] leading-[24px]">Skills</Link>
        <Link href="/stories" className="font-[700] text-[20px] leading-[24px]">Stories</Link>
        <Link href="/about" className="font-[700] text-[20px] leading-[24px]">About</Link>
        <Link href="/contact" className="font-[700] text-[20px] leading-[24px]">Contact Us</Link>
      </div>
      <div className="">

      </div>
      
    </div>
  );
}