import React from "react";
import MenuItems from "../Shared/MenuItems";
import SectionTitle from "./SectionTitle";
import useMenu from "../assets/Hooks/useMenu";

const FoodMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div className="py-20">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={`---Bistra Boss Popular and Pizza Menu Items---`}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-2">
        {popular.map((item) => (
          <MenuItems key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
