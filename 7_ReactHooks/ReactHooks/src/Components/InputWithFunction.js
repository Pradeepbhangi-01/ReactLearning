import { useState, useEffect } from "react";

export default function Input() {
  const [name, setName] = useState("PP");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    document.title = name + " " + lastName;
  }, [lastName]);

  useEffect(() => {
    let timer = setInterval(() => {
      console.log("window width: ", window.innerWidth);
    }, 2000);

    return clearInterval(timer);
  });

  return (
    <>
      <div className="section">
        <Row label="Name">
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Row>
        <Row label="Last Name">
          <input
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Row>
      </div>

      <h2>Hello, {`${name} ${lastName}`} </h2>
    </>
  );
}

function Row(props) {
  const { label } = props;
  return (
    <>
      <lable>
        {label}
        <br />
      </lable>
      {props.children}
      <hr />
    </>
  );
}
