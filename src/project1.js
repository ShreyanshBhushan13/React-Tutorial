import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header.js";
import Body from "./components/body.js";
//import About from "./components/about";
import { useState,useEffect } from "react";
import Contact from "./components/contact.js";
import Error from "./components/error.js";
//import Grocery from "./components/grocery.js";
import RestaurantMenu from "./components/restaurantmenu.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import UserContext from "./utlis/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utlis/appStore.js";
import Cart from "./components/cart.js";
// CHUNKING 
// DYNAMIC BUNDLING
// CODE SPLITTING
// LAZY LOADING
// ON DEMAND LOADING
// DYNAMIC IMPORT
const Grocery=lazy(()=>import("./components/grocery.js"));

const About=lazy(()=>import("./components/about"));


const AppLayout = () => {
// authentification
const [userName,setUserName]=useState();
useEffect(()=>{
// MAKE AN API CALL AND SEND USERNAME
const data={
  name:"Shreyansh Bhushan",
}
setUserName(data.name)
},[])

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
      {/* SHREYANSH BHUSHAN*/}
    <div className="app">
    {/* <UserContext.Provider value={{loggedInUser:"Narendra Modi"}}> */}
      {/* NARENDRA MODI */}
      <Header />
      {/* </UserContext.Provider> */}
      {/* * if path is / 
      <Body />
      {/** if path is /about  */}
{/**{<About/}>*/}
      {/** if path is /contact  }
<Contact/> */}
    <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter=createBrowserRouter([
{
path:"/",
element : <AppLayout/>,
children:[
  {
    path:"/",
    element:<Body/>
  },
  {
    path:"/about",
    element:<Suspense fallback={<h1>Loading....</h1>}><About/></Suspense>,  
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu/>
    },
    {
      path:"/grocery",
      element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>,
    },
    {
      path:"/cart",
      element:<Cart/>
    },
],
errorElement:<Error/>
},
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router={appRouter} />);
