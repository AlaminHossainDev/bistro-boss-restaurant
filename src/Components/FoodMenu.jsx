import React, { useEffect, useState } from "react";
import MenuItems from "../Shared/MenuItems";
import SectionTitle from "./SectionTitle";

const FoodMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                // Filter items by categories 'popular' and 'pizza'
                const popularItems = data.filter(item => item.category === 'popular');
                const pizzaItems = data.filter(item => item.category === 'pizza');

                // Combine both categories
                const combinedItems = [...popularItems, ...pizzaItems];

                // Limit to 10 items
                const limitedItems = combinedItems.slice(0, 10);


                // Set the combined items to the state
                setMenu(limitedItems);
            });
    }, []);

    return (
        <div className="py-20">
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={`---Bistra Boss Popular and Pizza Menu Items---`}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 gap-2">
                {menu.map(item => (
                    <MenuItems key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default FoodMenu;

