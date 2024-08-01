"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "#home",
      name: "home",
    },
    {
      id: 2,
      link: "#about",
      name: "about",
    },
    {
      id: 3,
      link: "#product",
      name: "product",
    },
    {
      id: 4,
      link: "#blog",
      name: "blog",
    },
    {
      id: 5,
      link: "#contact",
      name: "contact",
    },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
    e.preventDefault();
    setNav(false);
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-black bg-white shadow-md sticky top-0 z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <Link className="link-underline link-underline-black" href="">
            <Image
              src="https://scontent.fbkk22-3.fna.fbcdn.net/v/t39.30808-1/301439850_521237383210425_784689343154362364_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeH5s9DF_JGvYGtk3_k-4sbsgaycFamuA8-BrJwVqa4Dzz0F9-tbhXh0CY9BB__o8E13Z-vY9kWDYb3nLnAFGxpw&_nc_ohc=W8wYrUlSvHkQ7kNvgG3eXzr&_nc_ht=scontent.fbkk22-3.fna&oh=00_AYACKgRIrH7H5cep1zEUCSWI5bw_oEYCjPr3GzN2unDEjw&oe=66B105DD"
              alt=""
              width={50}
              height={50}
            />
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, name }) => (
          <li
            key={id}
            className="nav-links px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 hover:text-gray-700 duration-200 link-underline"
          >
            <a href={link} onClick={(e) => handleClick(e, link)}>{name}</a>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-black md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-gradient-to-b from-white to-gray-300 text-black transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {nav && (
          <ul className="flex flex-col justify-center items-center h-full">
            {links.map(({ id, link, name }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <a href={link} onClick={(e) => handleClick(e, link)}>{name}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;