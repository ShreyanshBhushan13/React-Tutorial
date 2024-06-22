import RestaurantCard,{withPromotedLabel} from "./restaurantcard.js";
import {useState,useEffect,useContext} from "react"
import Shimmer from "./shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus.js";
//import resList from "../utlis/mockData.js";
import UserContext from "../utlis/UserContext.js";



const Body = () => {
// Local STATE VARIABLE-SUPER POWERFUL VARIABLE IS GENERATED BY HOOKS kepts the UI sync with the variable

const [listOfRestaurant,setlistOfRestaurant]=useState([]);
// set is used to modify 

const [searchText,setsearchtext]=useState("");

const [filteredRestaurant,setfiteredRestaurant]=useState([])

const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

console.log("body",listOfRestaurant);
useEffect(()=>{
  fetchData();
},[]);

const fetchData=async ()=>{
const data =await fetch(" https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
);
const json= await data.json();
console.log(json);
setlistOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

setfiteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

const onlineStatus=useOnlineStatus();
if(onlineStatus==false){
return( <h1>Looks like you're offline!! Please check your internet connection;</h1>
)
};

const {loggedInUser,setUserName}=useContext(UserContext);

// CONDITIONAL RENDERING
//if(listOfRestaurant.length==0){
 // return <Shimmer/>
//}
// // NORMAL JS VARIABLE
// let listOfRestaurant=[]
    // NORMAL JS VARIABLE
//    let listOfRestaurant=[
//     {
//         info: {
//           id: "725082",
//           name: "Pizza Hut",
//           cloudinaryImageId: "490629b70f89da8a5b93fc199ece335e",
//           locality: "Kankar Bagh",
//           areaName: "Patna",
//           costForTwo: "₹350 for two",
//           cuisines: ["Pizzas"],
//           avgRating: 4,         
//             deliveryTime: 38,
//           }},
//           {
//             info: {
//               id: "7250824",
//               name: "Dominos",
//               cloudinaryImageId: "490629b70f89da8a5b93fc199ece335e",
//               locality: "Kankar Bagh",
//               areaName: "Patna",
//               costForTwo: "₹350 for two",
//               cuisines: ["Pizzas"],
//               avgRating: 4,         
//                 deliveryTime: 38,
//               }}
//    ];
    return  listOfRestaurant.length==0? <Shimmer/> :( 
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4" >
           
            <input type="text" className="border border-solid black" value={searchText} onChange={(e)=>{// to track the value we have to bind it by local state variable
              setsearchtext(e.target.value);
            }}></input>
            <button className="px-4 bg-green-100 m-2 rounded-lg"
             onClick={()=>{
             // filter the restaurant and upadte the ui
             // searchText
             console.log(searchText);
            
             const filteredRestaurant=listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
            
            );

           setfiteredRestaurant(filteredRestaurant);
            

            }}
            >Search</button>
          </div>


           <div className="search m-4 p-4 flex items-center">
            <button 
            className="px-4 py-2 bg-gray-100 rounded-lg " onClick={()=>{// filter logic here
               
                

                 const filteredList=listOfRestaurant.filter((res)=>res.info.avgRating>4);
                    
             
            setlistOfRestaurant(filteredList);
            }}
            >
            Top Rated Restaurant</button>
            </div>
          <div className="search m-4 p-4 flex items-center">
            <label>UserName:</label>
            <input className="border black p-2"
            value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
          </div>
        </div>



        <div className="res-container flex flex-wrap">      
           {
            filteredRestaurant.map((restaurant) => (
             <Link  key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}
             >
            {/* //  {if the restaurant is promoted then add a label to it} */}
            {/* {our swiggy server is not promoted} */}
            {restaurant.info.promoted ?(<RestaurantCardPromoted  resData={restaurant}/>):
            (< RestaurantCard  resData={restaurant}/>)}
             </Link>
  
             ) )    
           }
        </div>
      </div>
    );
  };
 

export default Body;