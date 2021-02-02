import React from "react";
import ReactDOM from "react-dom";
// import {render} from "react-dom";
import App from "./app";
import "./scss/app.scss";

ReactDOM.render(<App />, document.querySelector("#root"));

// class HelloMessage extends React.Component {
//     render() {
//         return <div>{`Hello ${this.props.name}`}</div>;
//     }
// }

// render(
//     <HelloMessage name={"Taylor"} />,
//     document.querySelector("#hello-example"),
// );

// console.log("yo");
// console.log("test");
// console.log("test");
