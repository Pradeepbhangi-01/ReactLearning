import { Component } from "react";
import styled from "styled-components";

const Nav = styled.div`
  width: 100%;
  height: 70px;
  color: #f1f1f1;
  background-color: rgb(5, 81, 56);
  display: flex;
  justify-content: space-between;
`;

class Navbar extends Component {
  render() {
    return (
      <>
        <Nav>
          <div style={styles.title}>ppHub</div>
          <div style={styles.cartContainer}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
              alt="Cart Icon"
              style={styles.cartIcon}
            />
            <span style={styles.cartCount}>3</span>
          </div>
        </Nav>
      </>
    );
  }
}

export default Navbar;

const styles = {
  nav: {
    width: "100%",
    height: 70,
    background: "blue",
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 30,
    color: "#fff",
    fontWeight: 600,
    textTransform: "uppercase",
    marginLeft: 20,
    fontFamily: "'Montserrat', sans-serif",
  },
  cartContainer: {
    position: "relative",
    cursor: "pointer",
  },
  cartIcon: {
    height: 48,
    marginRight: 20,
  },
  cartCount: {
    background: "orange",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 10,
    top: -5,
    fontSize: 12,
  },
};
