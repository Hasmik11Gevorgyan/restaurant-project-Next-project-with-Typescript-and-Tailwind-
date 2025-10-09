import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 items-center flex w-full justify-between p-4 border-b-2 border-b-red-500 uppercase">
      {/* Left side navigation for desktop */}
      <div className="hidden md:flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* Logo */}
      <div className="text-xl">
        <Link href="/">Massimo</Link>
      </div>
      {/* Mobile menu and phone/cart section */}
      <div className="md:hidden flex items-center gap-2">
        <Menu />
        <Image
          src="/phone.png"
          alt="phone"
          width={20}
          height={20}
        />
        <span>+123456789</span>
        <CartIcon />
      </div>
      {/* Desktop phone/cart/login section */}
      <div className="hidden md:flex gap-4 items-center bg-orange-300 px-1 rounded-md">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/phone.png"
            alt="phone"
            width={20}
            height={20}
          />
          <span>+123456789</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
