import React from "react";
import { Link } from "react-router-dom";


const MenuCard = ({ item}) => {
  const {image, name, price, recipe} = item;

   return (
    <div>
      <div>
        <div className="">
          <div className="card card-compact h-[550px] w-full bg-base-100 shadow-xl pb-4">
            <figure>
              <img src={image} alt={name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>
                <span className="text-base">Categories</span>: {recipe}
              </p>
              <h3> 
                <span className="text-base">Price</span>: {price}
              </h3>
             
              
              <div className="card-actions">
                <Link to={`/order/`}
                  type="button"
                  className="flex items-center bg-orange-600 text-white hover:bg-black hover:text-white justify-center w-full p-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
                >
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;