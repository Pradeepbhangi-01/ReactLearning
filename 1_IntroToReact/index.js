///////////////////////////////////////////////////////////////////// This is From JavaScript
// const heading = document.createElement("h1");
// heading.textContent = "JavaScipt";
// heading.className = "header";

// document.getElementById("root").append(heading);

// // console.log("javaScript heading: ", heading);

// /////////////////////////////////////////////////////////////////////////////// React  javascript way

// const reactHeading = React.createElement(
//   "h1",
//   { className: "reactHeader" },
//   "React Header"
// );

// // console.log("From React: ", reactHeading);
// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);

///////////////////////////////////////////////////////////////////////////////React JSX Way

// const reactJSX = (
//   <div>
//     <h1>This is JSX</h1>
//     <p>This is JSX way of writing React</p>
//   </div>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(reactJSX);

//////////////////////////////////////////////////////////////////////////React Fragments

{
  /* <React.Fragments></React.Fragments>  -------> <></>   ------ Both are same  */
}

// const reactFrag = (
//   <>
//     <h1>Benefits of React</h1>
//     <p>React has more benefits compared to JavaScript</p>
//     <ul>
//       <li>More Efficient way of Coding</li>
//       <li>Renders only required elements so its fast</li>
//       <li>Single Page Application</li>
//       <li>Code Reuseability</li>
//     </ul>
//   </>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(reactFrag);

///////////////////////////////////////////////////////////  CREATING THE COMPONENT

function App() {
  return (
    <>
      <h1>React Project</h1>
      <p>Skills used to make this project</p>
      <ol>
        <li>HTML</li>
        <li>javaScript</li>
        <li>CSS</li>
      </ol>
      <App2 />
    </>
  );
}

// React Component Using Aerrow function

const App2 = () => {
  return (
    <>
      <h1>This is from Aerrow Function</h1>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
