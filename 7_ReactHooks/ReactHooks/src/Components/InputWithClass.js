import React from "react";

export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
  }

  handleFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  handleLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="section">
          <Row label="Name">
            <input
              value={this.state.firstName}
              onChange={this.handleFirstName}
            />
          </Row>
          <Row label="Last Name">
            <input value={this.state.lastName} onChange={this.handleLastName} />
          </Row>
        </div>

        <h2>Hello,{this.state.firstName + " " + this.state.lastName} </h2>
      </>
    );
  }
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
