import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { styles } from "../style";
import { myLogo, menu, close } from "../assets";
const Navbar = () => {
  const [active, setactive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setactive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={myLogo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] flex text-blod font-bold cursor-pointer">
            Hasan &nbsp; <span className="sm:block hidden">Balleh</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row  gap-10">
          {navLinks.map((e) => (
            <li
              key={e.id}
              className={`${
                active === e.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setactive(e.title);
              }}
            >
              <a href={`#${e.id}`}>{e.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } black-gradient absolute p-6 top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-10`}
          >
            <ul className="list-none flex justify-end items-start flex-col  gap-4">
              {navLinks.map((e) => (
                <li
                  key={e.id}
                  className={`${
                    active === e.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[16px] font-poppins font-medium cursor-pointer`}
                  onClick={() => {
                    setactive(e.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${e.id}`}>{e.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
