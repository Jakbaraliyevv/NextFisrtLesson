import { User, Search, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  const styleLink = "text-[17px] font-bold text-[rgb(65,65,65)]";

  return (
    <section className="  w-[90%] py-4 m-auto flex items-center justify-between">
      <div className=" ">
        <Image src="/logo.svg" alt="Tavsif matni" width={100} height={100} />
      </div>
      <div className="flex items-center gap-[40px] ">
        <Link className={styleLink} href={"/"}>
          Home
        </Link>
        <Link className={styleLink} href={"/about"}>
          About
        </Link>
        <Link className={styleLink} href={"/shop"}>
          Shop
        </Link>
        <Link className={styleLink} href={"/contact"}>
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-9  ">
        <User className="cursor-pointer" />
        <Search className="cursor-pointer" />
        <Heart className="cursor-pointer" />
        <ShoppingCart className="cursor-pointer" />
      </div>
    </section>
  );
}

export default Navbar;
