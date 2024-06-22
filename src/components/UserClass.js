import React from "react";

class  UserClass extends React.Component{
    constructor(props){
    super(props);
    console.log(props);
    this.state={
       userInfo:{
        name:"DUMMY",
        location:"DEFAULT",
    
       }
    };
   // console.log(this.props.name+"child constructor")
    };
     
async componentDidMount(){
   // console.log(this.props.name+"Child componentDidMount");
    // API CALL
    const data=await fetch("https://api.github.com/users/ShreyanshBhushan13");
    const json= await data.json();

this.setState({
userInfo:json

})


    console.log(json);
}

componentDidUpdate(){
console.log("componentDidUpdate")
};

componentWillUnmount(){
    console.log("componentWillUnmount")
};

    render(){
        const {name,location,avatar_url}=this.state.userInfo;
       
        //const {name,location}=this.props
        //console.log(this.props.name+"child render")


    return (
    <div className="user-card">
      
        {/* <button onClick ={()=>{
// NEVER UPDATE STATE VARIABLE DIRECTLY
        this.setState({
            count:this.state.count+1,  
         });
        }
        }>Count Increase</button> */}

        <h2>Name:{name}</h2>
        <img src={avatar_url}></img>
        <h3>Location:{location}</h3>
        <h4>Contact:@Shreyansh123</h4>
        
        </div>) 
        }      
};

export default UserClass;



/*
------MOUNTING------
-constructor
-render(dummy data)
-<HTML DUMMY>
-componentDidMount
  <API CALL>
  <this.setState>  -> State Variable is updated

------UPDATE CYCLE----
-render(API DATA)
  <HTML API DATA>
-componentDidUpdate

-componentWillUnmount is called when we move to new pages 
*/