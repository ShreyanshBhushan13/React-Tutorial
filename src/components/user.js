import { useState } from "react";
const User=(props)=>{
    const {name}=props;
const [count]=useState(0);
const [count2]=useState(1);


useEffect(()=>{
// API CALLS

},[]);


return( 
<div className="user-card">
    <h1>Count={count}</h1>
    <h2>Count2={count2}</h2>
<h2>Name:{name}</h2>
<h3>Location:Patna</h3>
<h4>Contact:@Shreyansh123</h4>

</div> )

};
export default User;