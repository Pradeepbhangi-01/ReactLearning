const App = () => {
  const arr = ["BMW", "Audi", "Porche", "ferarri"];

  const student = { name: "Pradeep", age: 24, location: "Bangalore" };
  return (
    <>
      <h1>Returning the Array and Object Elements </h1>
      <p>{arr}</p>
      {/* To get the array elements in next Line We need to use  maps*/}

      <ul>
        {arr.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
      </ul>

      <p>{student.location}</p>
      <p>{student.age}</p>
    </>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(<App />);

// <!-- <html>
//   <head>
//     <title>ArrayandObjects</title>
//     <script
//       crossorigin
//       src="https://unpkg.com/react@18/umd/react.development.js"
//     ></script>
//     <script
//       crossorigin
//       src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
//     ></script>

//     <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
//   </head>
//   <body>
//     <div id="root">
//       <h1>This is First React Element</h1> -->
// <!-- </div>

//     <script src="ArrayandObjects.js" type="text/babel"></script> -->
// <!-- <script src="Students.js" type="text/babel"></script>
//     <script src="Cars.js" type="text/babel"></script> -->
// <!-- </body>
// </html> -->
