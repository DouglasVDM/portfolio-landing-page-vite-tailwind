import { useState } from "react";
import { HiBarsArrowDown, HiOutlineXMark } from "react-icons/hi2";
import menuList from "../sampleData/menuList.json";
import profileDetails from "../sampleData/profileDetails.json";
import MenuOverlay from "./MenuOverlay";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  return (
    <div className="flex items-center justify-between">
      <div>
        {profileDetails.map((profile) => {
          return (
            <h2 key={profile.id} className="text-[24px] font-bold text-white">
              {profile.firstName}
              <span className="text-red-500"> {profile.lastName}</span>
            </h2>
          );
        })}
      </div>
      <div className="hidden md:flex gap-4">
        {menuList.map((menuItem) => (
          <div key={menuItem.id}>
            <h2 className="text-[15px] text-white hover:border-[1px] border-red-500 rounded-full px-3 py-1 cursor-pointer">
              {menuItem.title}
            </h2>
          </div>
        ))}
        <h2 className="text-[15px] text-white hover:border-[1px] border-red-500 rounded-full px-3 py-1 cursor-pointer hover:bg-gradient-to-r from-red-500 to-red-800">
          Hire me
        </h2>
      </div>
      <div className="md:hidden">
        {!toggle ? (
          <HiBarsArrowDown
            onClick={handleClick}
            className="text-white text-[22px]"
          />
        ) : (
          <HiOutlineXMark
            onClick={handleClick}
            className="text-white text-[22px]"
          />
        )}
        {toggle ? <MenuOverlay menuList={menuList} /> : null}
      </div>
    </div>
  );
};

export default Header;
