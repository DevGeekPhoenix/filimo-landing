import React from "react";
import FilimoLogo from "./fa-filimo-dark-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-wrap bg-[#151515] opacity-90 text-white h-12	p-2.5 space-x-10 text-sm	">
      <Link to={"/"}>
        <li className="list-none border-l-2	border-slate-600 	">
          <img className="ml-12 h-7" src={FilimoLogo} />
        </li>
      </Link>
      <Link to={"/"}>
        <li className="list-none  pr-10 p-1">
          <p className="">فیلیمو مدرسه</p>
        </li>
      </Link>
      <Link to={"/"}>
        <li className="list-none p-1	">
          <p className="">کودک</p>
        </li>
      </Link>
      <Link to={"/"}>
        <li className="list-none p-1	">
          <p className="">جستوجو</p>
        </li>
      </Link>

      <div className="absolute top-1 left-0">
        <button className="pt-2.5 pb-2.5 pl-6 pr-6  mr-1 rounded bg-[#1cb561]">
          خرید اشتراک فیلیمو
        </button>
        <button className="pt-2.5 pb-2.5 pl-6 pr-6  mr-1 rounded  bg-[rgba(255,255,255,.2)]">
          ورود
        </button>
      </div>
    </div>
  );
};

export default Navbar;
