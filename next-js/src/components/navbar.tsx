"use client"
import Image from "next/image";
import imgLoader from "@/utils/imgLoader";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { cn } from "@/utils/className";
import { useState } from "react";

export default function Navbar(
  // { data = "default" }: { data?: string }
) {
  const [open, setOpen] = useState(false);
  
  return (
    <nav className="p-4 min-h-16 flex justify-around items-center bg-slate-900">
      <div className="logo">
        <Link href={"/"}>
          <Image
            src="https://kunalonforex.com/wp-content/uploads/2024/08/KunalOnForex-1.png"
            alt="Vercel Logo"
            width={300}
            height={100}
            priority
            loader={imgLoader}
            className="w-80 max-xl:w-52"
          />
        </Link>
      </div>

      <div className="menu">
        <ul className="lg:flex absolute top-20 left-1/2 w-[70%] h-full py-4 px-5 -translate-x-1/2 backdrop-blur-xl bg-[#111]/30 gap-4 max-xl:gap-2">
          <Link href={"#"}>
            <li className="text-lg capitalize max-xl:text-base font-medium px-4 py-1 bg-[#9cff1e]/10 text-[#9cff1e] rounded-full">
              home
            </li>
          </Link>
          <Link href={"#"}>
            <li className="text-lg capitalize max-xl:text-base font-medium px-4 py-1 hover:bg-[#9cff1e]/10 hover:text-[#9cff1e] text-[#d0d0d0] transition-colors duration-300 rounded-full">
              Our courses
            </li>
          </Link>
          <Link href={"#"}>
            <li className="text-lg capitalize max-xl:text-base font-medium px-4 py-1 hover:bg-[#9cff1e]/10 hover:text-[#9cff1e] text-[#d0d0d0] transition-colors duration-300 rounded-full">
              testimonials
            </li>
          </Link>
          <Link href={"#"}>
            <li className="text-lg capitalize max-xl:text-base font-medium px-4 py-1 hover:bg-[#9cff1e]/10 hover:text-[#9cff1e] text-[#d0d0d0] transition-colors duration-300 rounded-full">
              about us
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex gap-5 items-center">
        <Link href={"#"}>
          <FaWhatsapp className="hover:text-[#9cff1e] transition-colors duration-300 size-10 max-xl:size-8" />
        </Link>
        <button type="button" className="text-lg capitalize max-xl:text-base font-medium border-2 px-6 py-2 rounded-full cursor-pointer hover:border-[#9cff1e] hover:text-[#9cff1e] hover:bg-gradient-to-b from-transparent  to-[#9cff1e]/30 transition-all duration-300">Sign Up</button>      </div>
    </nav>
  );
}