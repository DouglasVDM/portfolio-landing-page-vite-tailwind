import { useState } from "react";
import { HiBarsArrowDown, HiOutlineXMark } from "react-icons/hi2";
import MenuOverlay from "./MenuOverlay";

const Header = ({ firstName, lastName }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  const menuList = [
    { id: 1, title: "Home" },
    { id: 2, title: "About" },
    { id: 3, title: "Service" },
    { id: 4, title: "Portfolio" },
    { id: 5, title: "Contact" },
  ];

  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-[24px] font-bold text-white">
          {firstName} <span className="text-red-500">{lastName}</span>
        </h2>
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
