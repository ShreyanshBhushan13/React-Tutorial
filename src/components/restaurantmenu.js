import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utlis/constants";
import useRestaurantMenu from "../utlis/useRestaurantMenu";
import RestaurantCategory from "./restaurantcategory";

const RestaurantMenu = () => {
  // const [resInfo,setresInfo]=useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);
  //     useEffect(()=>{
  //   fetchMenu();
  //     },[]);

  //     const fetchMenu=async ()=>{
  //         const data =await fetch (MENU_API+resId);

  //     const json= await data.json();
  //     console.log(json);
  //     setresInfo(json.data);

  // };

  if (resInfo == null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = resInfo.cards[2].card.card.info;

  const { itemCards } =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[9].card.card;

  //console.log("hero",resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  //  const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>
  //       c?.card?.["card"]?.["@type"]=='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory' && "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  //  );
  // ABOVE ERROR

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        c?.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  //console.log("baby",categories);

  return (
    <div className="menu text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {/* <h2>Menu</h2>
<ul>
{itemCards.map((item) =>(
<li key={item.card.info.id}>
    {item.card.info.name} -   {" "} Rs.{item.card.info.defaultPrice/100 || item.card.info.price/100}
</li>
))}
</ul> */}

      {/* {catgories accodions} */}
      {categories.map((category, index) => (
        // CONTROLLED COMPONENT
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index == showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
