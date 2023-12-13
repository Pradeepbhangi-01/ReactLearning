let runs = 0;
let wicket = 0;
let ballWiseResult = [];
let hit = 0;
// Using the refernce variable
let inputRef = React.createRef();

const addRun = (num) => {
  hit = num;
  rootElement.render(<App />);
};
const addWicket = () => {
  hit = "W";
  rootElement.render(<App />);
};

const AllButtons = () => (
  <div>
    <button onClick={() => addRun(0)}>0</button>
    <button onClick={() => addRun(1)}>1</button>
    <button onClick={() => addRun(2)}>2</button>
    <button onClick={() => addRun(3)}>3</button>
    <button onClick={() => addRun(4)}>4</button>
    <button onClick={() => addRun(5)}>5</button>
    <button onClick={() => addRun(6)}>6</button>
    <button onClick={addWicket}>Wicket</button>
  </div>
);

// Displaying the recent balls using array

// const Recentballs = () => (
//   <div>
//     {ballWiseResult.map((res, index) => (
//       <>
//         {index % 6 === 0 ? <br /> : null}
//         <span key={index}>
//           {res === 0 ? (
//             <strong>.</strong>
//           ) : res === "W" ? (
//             <span style={{ color: "red" }}>W </span>
//           ) : (
//             res
//           )}
//         </span>
//         &nbsp;&nbsp;
//       </>
//     ))}
//   </div>
// );

//Handle Submit
const handleSubmit = (event) => {
  event.preventDefault();
  if (wicket < 10 && inputRef.current.value != "") {
    if (hit == "W") {
      wicket += 1;
    } else {
      runs += hit;
    }
    ballWiseResult.unshift(<span>{`${hit}, ${inputRef.current.value}`}</span>);
    rootElement.render(<App />);

    hit = 0;
    inputRef.current.value = "";
  }
};

// form

const Form = () => (
  <form onSubmit={handleSubmit}>
    <input value={hit} />
    <input ref={inputRef} placeholder="Add a Comment" />
    <button>Submit</button>
  </form>
);

const Commentary = () => (
  <div>
    {ballWiseResult.map((res, index) => (
      <p key={index}>{res}</p>
    ))}
  </div>
);
const App = () => (
  <>
    <h1>Apna Cricbuzz</h1>
    <h3>
      Score {runs}:{wicket}
    </h3>
    <AllButtons />
    <br />
    <Form />
    <hr />
    <Commentary />
  </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
