import { CDN_URL } from "../utlis/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, avgRating, cuisines, costForTwo, sla, locality } = resData.info;
  return (
    <div className="res-card m-4 p-4 w-[200px] bg-gray-200 rounded-lg hover:bg-gray-400">
      {/* <img
          className="reslogo"
          alt="res-logo"
          // src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId}
          
        ></img> */}
      <img
        className="reslogo rounded-lg"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h5>{avgRating} stars</h5>
      <h5>{sla.deliveryTime}mins</h5>
      <h5>{costForTwo}</h5>
      <h5>{locality}</h5>
    </div>
  );
};

// HIGHER ORDER COMPONENT

// INPUT-RESTAURANT CARD ==> restaurant card promoted

 export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (<div>
    <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
      Promoted</label>
    <RestaurantCard  {...props}/>
    </div>);
  };
};

/*</div>// not using keys (not acceptable) <<<< as index as key <<< unique id (is best)*/

export default RestaurantCard;

/*const RestaurantCard=(props)=>{
    return(
        <div className="res-card">
            <img className="reslogo" 
            alt="res-logo"
             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lnjmdcml4anmh5hhdwv0"></img>
          <h3>{props.resName}</h3>
          <h4>{props.cuisine}</h4>
          <h5>4.3 stars</h5>
          <h5>38 mins</h5>
        </div>
    )
    
    };*/

/////////////////////////////

/*const RestaurantCard=(props)=>{ 
    const {resName,cuisine}=props;
    return(
        <div className="res-card">
            <img className="reslogo" 
            alt="res-logo"
             src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lnjmdcml4anmh5hhdwv0"></img>
          <h3>{resName}</h3>
          <h4>{cuisine}</h4>
          <h5>4.3 stars</h5>
          <h5>38 mins</h5>
        </div>
    )
    
    };*/
