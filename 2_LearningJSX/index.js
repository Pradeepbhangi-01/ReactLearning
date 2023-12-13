// React Component Using Aerrow function

const App = () => {
  //Function
  const sum = () => {
    return 100 + 200;
  };

  const TJSX = <h1>Thi is JSX Return</h1>;
  const name = "Pradeep";
  const age = 24;
  let dumb = null;
  let Person = true;
  return (
    <>
      <h1>Lets Learn JSX</h1>
      {TJSX}
      <span>Hello: {name}</span>
      <span>Age :{age}</span>
      <p>Are you a dumb? {dumb}</p>
      <p>You are a {Person}</p>
      <p>This is function return: {sum()}</p>
    </>
  );
};

// null undefined and boolean values wont return anything

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
