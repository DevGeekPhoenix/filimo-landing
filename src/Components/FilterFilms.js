import { useEffect, useState } from "react";
import "./FilterFilms.css";
import Switch from "react-switch";

import Dropdown from "react-dropdown";
const msoptions = ["همه", "فیلم", "سریال"];
const joptions = [
  "همه",
  "تاریخی | مذهبی",
  "خانوادگی",
  "کمدی",
  "فیلم تئاتر",
  "وحشت",
  "فیلم کوتاه",
  "کنسرت",
  "اکشن",
  "عاشقانه",
  "مستند",
  "انیمیشن",
  "علمی تخیلی",
  "تاک شو",
  "دوبله ترکی",
];
const coptions = [
  "همه",
  "انگلیس",
  "هند",
  "چین",
  "ایران",
  "کره جنوبی",
  "کانادا",
  "ایتالیا",
  "آمریکا",
  "ترکیه",
  "آلمان",
  "خارجی",
  "ژاپن",
  "فرانسه",
  "اسپانیا",
  "دیگر کشور ها",
];
const loptions = ["همه", "فارسی (دوبله)", "زبان اصلی (زیر نویس)"];
const aoptions = [
  "همه",
  "زیر 3 سال",
  "تا 6 سال",
  "تا 12 سال",
  "تا 15 سال",
  "تا 18 سال",
];

const FilterFilms = () => {
  const [HDchecked, setHDchecked] = useState(false);
  const handleChange = () => {
    setHDchecked(!HDchecked);
  };
  return (
    <div className="flex flex-wrap h-16 p-3.5 pr-9 bg-[#323232] ">
      <div className="w-48 -ml-3 h-7">
        <Dropdown
          className="h-9 focus:ring-violet-300 text-white text-xs p-2 bg-[#323232] border-gray-600 w-44		rounded border"
          options={msoptions}
          value={"فیلم و سریال"}
          placeholder="Select an option"
        />
      </div>
      <div className="w-48 -ml-3 h-2">
        <Dropdown
          className="h-9 text-white text-xs p-2 bg-[#323232] border-gray-600 w-44	rounded border"
          options={joptions}
          value={"ژانر"}
          placeholder="Select an option"
        />
      </div>
      <div className="w-48 -ml-3 h-2">
        <Dropdown
          className="h-9 text-white text-xs p-2 bg-[#323232] border-gray-600 w-44	rounded border"
          options={coptions}
          value={"کشور"}
          placeholder="Select an option"
        />
      </div>
      <div className="w-48 -ml-3 h-2">
        <Dropdown
          className="h-9 text-white text-xs p-2 bg-[#323232] border-gray-600 w-44	rounded border"
          options={loptions}
          value={"زبان"}
          placeholder="Select an option"
        />
      </div>
      <div className="w-48 -ml-3 h-2">
        <Dropdown
          className="h-9 text-white text-xs p-2 bg-[#323232] border-gray-600 w-44	rounded border"
          options={aoptions}
          value={"سن"}
          placeholder="Select an option"
        />
      </div>
      <div className="h-9 flex text-white text-xs p-1 bg-[#323232] border-gray-600 w-44	rounded border">
        <p className="mt-1.5">HD</p>
        <Switch
          className="mr-24 mt-1.5"
          onColor="#fdc13c"
          offColor="#ccc"
          handleDiameter={16}
          uncheckedIcon={false}
          checkedIcon={false}
          height={16}
          width={35}
          onChange={handleChange}
          checked={HDchecked}
        />
      </div>
      <div>
        <button className="pt-2.5 pb-2.5 pl-10 pr-10 text-xs mr-3 rounded bg-[#fdc13c]">
          اعمال فیلتر
        </button>
      </div>
    </div>
  );
};
export default FilterFilms;
