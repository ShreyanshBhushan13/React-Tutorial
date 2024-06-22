import { useDispatch } from "react-redux";
import { CDN_URL } from "../utlis/constants";
import { addItem } from "../utlis/cartSlice";

const ItemList = ({ items }) => {
  console.log("babies", items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));// here dispatching an action
    // {
    //   payload:pizza;
    // }
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py=2">
              <span>
                {item.card.info.name} {"-"}
              </span>
              <span>₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="px-0.5 bg-black text-white shadow-lg  mx-.5 rounded-s"
                onClick={()=>handleAddItem(item)}
                
              >
                Add+
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId}></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
