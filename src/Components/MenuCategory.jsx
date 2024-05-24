import React from "react";
import MenuItems from "../Shared/MenuItems";
import HeroCover from "../Shared/HeroCover";

const MenuCategory = (items, title, menuBgImage) => {
  return (
    <div>
      {title && (
        <HeroCover
          bgImg={menuBgImage}
          title={`Our Menu`}
          description={`Appropriately procrastinate distinctive e-tailers rather than sustainable methodologies. Authoritatively transition cross-platform solutions vis-a-vis quality outsourcing.`}
        ></HeroCover>
      )}

      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItems key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
