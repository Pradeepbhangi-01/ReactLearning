const Cars = () => {
  const cars = [
    { brand: "BMW", modelYear: 2020 },
    { brand: "Audi", modelYear: 2021 },
  ];
  return (
    <>
      <h1>Car details</h1>
      <table>
        <thead>
          <tr>
            <th>Brand</th>
            <th>ModelYear</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={index}>
              <td>{car.brand}</td>
              <td>{car.modelYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Cars />);
