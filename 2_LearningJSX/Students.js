const App = () => {
  ///students object
  const students = [
    { name: "Pradeep", age: 24, marks: 45 },
    { name: "Mohan", age: 23, marks: 42 },
    { name: "Mohini", age: 20, marks: 63 },
  ];

  const itemsSold = [
    { id: 1, name: "iPhone 14", price: 1200, qty: 22 },
    { id: 2, name: "iPad Pro", price: 800, qty: 18 },
    { id: 3, name: "Macbook Air", price: 1500, qty: 7 },
    { id: 4, name: "Samsung S23", price: 1100, qty: 16 },
    { id: 5, name: "Dell Inspiron 5590", price: 1200, qty: 5 },
  ];
  return (
    <>
      <h1>Students database Management</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((data, index) => (
            <tr key={index}>
              <td>{data.name} </td>
              <td>{data.age} </td>
              <td>{data.marks} </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>Record of sold items</h1>
      <table border="1px">
        {/* iterate over data here */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Selling price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {itemsSold.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(<App />);

image = "https://files.codingninjas.in/coding-ninjas-24647.png".reactImage =
  React.createElement("img", {}, "src={image}");

ReactDOM.createRoot(document.getElementByID("root").render(reactImage));
ReactDOM.render(element, document.getElementById("react-app"));
