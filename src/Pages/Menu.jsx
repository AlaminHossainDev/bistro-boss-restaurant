import React from "react";
import { Helmet } from "react-helmet-async";
import HeroCover from "../Shared/HeroCover";
import menuBgImage from "../assets/menu/banner3.jpg";
import FoodMenu from "../Components/FoodMenu";
import useMenu from "../assets/Hooks/useMenu";
import MenuItems from "../Shared/MenuItems";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menu] = useMenu();
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <div>
        <Helmet>
          <title>Menu | Bistra Boss</title>
        </Helmet>
      </div>

      {/* for Pizza  */}
      <div>
        <HeroCover
          bgImg={menuBgImage}
          title={`Our Menu`}
          description={`Appropriately procrastinate distinctive e-tailers rather than sustainable methodologies. Authoritatively transition cross-platform solutions vis-a-vis quality outsourcing.`}
        ></HeroCover>
        <FoodMenu></FoodMenu>
        <div className="grid md:grid-cols-2 gap-10">
          {pizza.map((item) => (
            <MenuItems key={item._id} item={item} />
          ))}
        </div>
        <div className="text-center">
          <Link>
            <button className="btn">ORDER YOUR FAVOURITE FOOD</button>
          </Link>
        </div>
      </div>

      {/* for Desert items */}
      <div className="my-20">
        <HeroCover
          bgImg={menuBgImage}
          title={`DESSERTS`}
          description={`Appropriately procrastinate distinctive e-tailers rather than sustainable methodologies. Authoritatively transition cross-platform solutions vis-a-vis quality outsourcing.`}
        ></HeroCover>
        <div className="grid md:grid-cols-2 gap-2">
          {dessert.map((item) => (
            <MenuItems key={item._id} item={item} />
          ))}
        </div>
        <div className="text-center">
          <Link>
            <button className="btn">ORDER YOUR FAVOURITE FOOD</button>
          </Link>
        </div>
      </div>

      {/* for soup items */}
      <div className="my-20">
        <HeroCover
          bgImg={menuBgImage}
          title={`Soup`}
          description={`Appropriately procrastinate distinctive e-tailers rather than sustainable methodologies. Authoritatively transition cross-platform solutions vis-a-vis quality outsourcing.`}
        ></HeroCover>
        <div className="grid md:grid-cols-2 gap-2">
          {soup.map((item) => (
            <MenuItems key={item._id} item={item} />
          ))}
        </div>
        <div className="text-center">
          <Link>
            <button className="btn">ORDER YOUR FAVOURITE FOOD</button>
          </Link>
        </div>
      </div>

      {/* for salad items */}
      <div className="my-20">
        <HeroCover
          bgImg={menuBgImage}
          title={`Salad`}
          description={`Appropriately procrastinate distinctive e-tailers rather than sustainable methodologies. Authoritatively transition cross-platform solutions vis-a-vis quality outsourcing.`}
        ></HeroCover>
        <div className="grid md:grid-cols-2 gap-2">
          {salad.map((item) => (
            <MenuItems key={item._id} item={item} />
          ))}
        </div>
        <div className="text-center">
          <Link to={`/order`}>
            <button className="btn">ORDER YOUR FAVOURITE FOOD</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
