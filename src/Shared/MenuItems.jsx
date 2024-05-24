

const MenuItems = ({item}) => {
    const {image, name, price, recipe} = item;
    return (
        <div className="flex items-center py-5">
            <img src={image} className="w-[150px] mask mask-hexagon" alt="food item" />
            <div>
                <h2 className="uppercase text-xl">{name}-------------</h2>
                <span>{recipe}</span>
            </div>
                <span className="text-amber-500">{price}$</span>
        </div>
    );
};

export default MenuItems;