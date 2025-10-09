"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "HomePage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/about" },
  { id: 4, title: "Contact", url: "/contact" },
];

const user = false;
const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {!open ? (
        <Image
          src={"/open.png"}
          alt="menu-open"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src={"/close.png"}
          alt="menu-close"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 h-[calculate(100vh-6rem)] flex flex-col gap-8 w-full z-10 items-center justify-center text-3xl mt-2 ">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}

          <Link href="/cart">
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
