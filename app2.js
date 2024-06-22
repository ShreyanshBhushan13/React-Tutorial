import React from "react";
import ReactDOM from "react-dom/client"

// here we are rending title component inside heading component
// COMPONENT COMPOSITION

/*const Title=function(){
    return(
    <h1 className="head" tabIndex="5">Namaste REACT USING JSx 
    </h1>)};

const number =1000;
const HeadingComponen1t=()=>( <div id="container">
    <Title/> or <Title></Title> or {Title()}  ALL are same 
<h1>{number}</h1>
<h2 className="heading">Namaste REACT USING JSx </h2> 
</div>);

const root=ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponen1t/>);// this is the way to render react component
*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// here we are rending title(REACT ELEMENT) inside heading component
const element=(
<span>REACT ELEMENT</span>
)
const title1=(
    //way to render one REACT ELEMENT INTO ANOTHER
    <h1 className="head" tabIndex="5">
        {element}      
        Namaste REACT USING JSx 
    </h1>);

const HeadingComponen1t1=()=>( <div id="container">


{title1}
<h2 className="heading">Namaste REACT USING JSx </h2> 
</div>);

const root=ReactDOM.createRoot(document.getElementById("root"));


root.render(<HeadingComponen1t1/>);// this is the way to render react component