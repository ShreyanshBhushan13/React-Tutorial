import User from "./user";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utlis/UserContext";

// CLASS COMPONENT
class About extends React.Component{
    constructor(props){
    super(props);
   // console.log("PARENT CONSTRUCTOR");
    }

    componentDidMount(){
        //console.log("Parent componentDidMount");
    };
 
    
    render(){
        //console.log("parent render");

        return(
<div>
 <h1>About</h1>
 <div>
    LoggedIn User
    <UserContext.Consumer>{({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}</UserContext.Consumer>
 </div>
 <h1>This is Namaste React Web Series</h1>

<UserClass name={"FIRST (class)"} location={"Patna (class)"}/>

</div>
 );
}
};
export default About;


// FUNCTION COMPONENT
// const About=(()=>{
// return(
// <div>
//  <h1>About</h1>
//  <h1>This is Namaste React Web Series</h1>

// <UserClass name={"Shreyansh (class)"} location={"Patna (class)"}/>
// </div>
// );

// });
// export default About;


/*
-Parent Constructor
-Parent Render

   -First Constructor
   - First render
  
   -Second Constructor
    -Second  render

    <DOM UPDATED -IN SINGLE BATCH>
    -  First componentDidMount
     - Second  componentDidMount

- Parent  componentDidMount
*/