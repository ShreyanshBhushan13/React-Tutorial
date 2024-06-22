import ItemList from "./itemlist";
import { useState } from "react";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //console.log("father",data)
  let items;
  if (
    data?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ) {
    items = data.itemCards;
  } else {
    items = data.categories.map((p) => p.itemCards);
  }
  //const [showItems,setShowItems]=useState(false);
  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex();
  };

  return (
    <div>
      {/* {HEADER} */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          {<span className="font-bold text-lg">{data?.title} </span>}
          <span>⬇️</span>
        </div>
        {/* {ACCORDION BODY} */}
        {showItems && <ItemList items={items} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
