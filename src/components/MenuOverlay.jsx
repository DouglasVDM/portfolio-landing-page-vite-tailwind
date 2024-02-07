function MenuOverlay({ menuList }) {
  return (
    <div className=" absolute text-center left-0 min-h-full backdrop-blur-lg w-full mt-7">
      {menuList.map((menuItem) => (
        <div key={menuItem.id}>
          <h1 className="text-white text-[24px] justify-center hover:scale-150 transition-all ease-in-out duration-300 cursor-pointer mt-10 mb-6">
            {menuItem.title}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default MenuOverlay;
