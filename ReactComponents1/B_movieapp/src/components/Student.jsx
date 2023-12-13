// import { Component } from "react";

// class Student extends Component {
//   render() {
//     console.log(this.props);
//     // wwe can destructure
//     // const {Username,marks} = this.props
//     return (
//       <>
//         <h1>Hello , {this.props.Username}</h1>
//         <p>You have secured {this.props.marks}%</p>
//         <hr />
//       </>
//     );
//   }
// }

/// For Functional component
function Student(props) {
  // const { Username, marks } = props;  --> can destructure andd use
  return (
    <>
      <h1>Hello , {props.Username}</h1>
      <p>You have secured {props.marks}%</p>
      <hr />
    </>
  );
}
export default Student;

/////////////// props cannot be modified in the the child component

// --------------------------------------------------------------------- Code from the App component

// import Student from "./components/Student";
// function App() {
//   return (
//     <>
//       <Student Username="Pradeep" marks={49} />
//       <Student Username="Alexa" marks={59} />
//       <Student Username="Siri" />
//       <Student marks={7} />
//     </>
//   );
// }

// // Passing the default props to the child components
// Student.defaultProps = {
//   Username: "Username",
//   marks: "NA",
// };
