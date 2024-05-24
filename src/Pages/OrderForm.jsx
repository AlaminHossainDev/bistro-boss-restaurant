import React, { useState } from "react";
import HeroCover from "../Shared/HeroCover";
import menuBgImage from "../assets/menu/soup-bg.jpg";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../assets/Hooks/useMenu";
import MenuCard from "../Components/MenuCard";
import { useParams } from "react-router-dom";
import OrderTab from "../Components/OrderTab";

const OrderForm = () => {
  const [menu] = useMenu();
  const {category} = useParams();
  console.log(category);
  
  const pizza = menu.filter((item) => item.category === "pizza");
  const dessert = menu.filter((item) => item.category === "dessert");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div>
      <Helmet>
        <title>Shop || Bistro Boss</title>
      </Helmet>
      <HeroCover
        bgImg={menuBgImage}
        title={`Our Shop`}
        description={`Appropriately procrastinate distinctive e-tailers rather than sustainable methodologies. Authoritatively transition cross-platform solutions vis-a-vis quality outsourcing.`}
      ></HeroCover>

      {/* tabs */}
      <div className="">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="text-center py-10">
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Desert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          </div>
          <TabPanel>
              <OrderTab items={salad}></OrderTab>
          </TabPanel>

          <TabPanel>
          <OrderTab items={pizza}></OrderTab>
          </TabPanel>

          <TabPanel>
          <OrderTab items={soup}></OrderTab>
          </TabPanel>

          <TabPanel>
          <OrderTab items={dessert}></OrderTab>
          </TabPanel>

          <TabPanel>
          <OrderTab items={drinks}></OrderTab>
          </TabPanel>

        </Tabs>
      </div>
    </div>
  );
};

export default OrderForm;
