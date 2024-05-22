import React from "react";
import Link from "next/link";
import Logo from "@/components/common/logo";

import "./styles/navBar.css";
import { IoReorderThreeSharp } from "react-icons/io5";

const NavBar = (props: { active: any }) => {
  const { active } = props;

  return (
    <React.Fragment>
      <div className="nav-container pb-36 lg:pr-[10%] container">
        <nav className="navbar h-28">
          <div className="nav-background flex items-center w-[100vw] lg:w-[68vw] justify-between">
            <ul className="">
              <li className="p-4 ">
                <Logo width={80} />
              </li>
            </ul>
            <ul className="nav-list hidden lg:flex lg:gap-10 lg:justify-between lg:items-center">
              <li
                className={active === "home" ? "nav-item active" : "nav-item"}
              >
                <Link href={"/"}>Home</Link>
              </li>
              <li
                className={active === "about" ? "nav-item active" : "nav-item"}
              >
                <Link href={"/"}>About</Link>
              </li>
              <li
                className={
                  active === "projects" ? "nav-item active" : "nav-item"
                }
              >
                <Link href={"/"}>Projects</Link>
              </li>
              <li
                className={
                  active === "articles" ? "nav-item active" : "nav-item"
                }
              >
                <Link href={"/"}>Articles</Link>
              </li>
              <li
                className={
                  active === "contact" ? "nav-item active" : "nav-item"
                }
              >
                <Link href={"/"}>Contact</Link>
              </li>
            </ul>
            <ul>
              <li className="p-4 text-black lg:hidden">{<IoReorderThreeSharp style={{width:60, height:60}}/>}</li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
