const {add}=require("./cal")

import ReactDOM from "react-dom";

import("./index.css")

console.log(add(20,10))

// const h1=document.createElement("h1");

// h1.innerText="Hello webpack!";
// h1.classList.add("redtext");

// document.getElementById("root").appendChild(h1);

ReactDOM.render(
// React.createElement("h1",{classname:"redtext"},
// React.createElement("i",null,"italic text")), //what
<h1>Hello new world! <i>italic</i></h1>,
document.getElementById("root") // where
)