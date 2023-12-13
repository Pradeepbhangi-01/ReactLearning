import { Component } from "react";

export default class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      title: "Avengers",
      plot: "Supernatural powers shown in the movie.",
      price: 129,
      rating: 8.9,
      stars: 0,
      fav: true,
      cart: true,
    };
  }

  // we can bind this in 2 ways
  // 1. while passing the reference
  // 2. In Global level

  // add stars

  addStars = () => {
    if (this.state.stars >= 5) {
      return;
    }
    // this.state.stars += 0.5;
    // console.log("Stars :", this.state.stars);

    // Setting the state using the setState function

    //1st type
    // this.setState({
    //   stars: this.state.stars + 0.5,
    // });

    //2nd types
    this.setState((prev) => {
      return {
        stars: prev.stars + 0.5,
      };
    });
  };

  reduceStars = () => {
    if (this.state.stars <= 0) {
      return;
    }
    this.setState((prev) => {
      return {
        stars: prev.stars - 0.5,
      };
    });
  };

  handleFav = () => {
    this.setState({
      fav: !this.state.fav,
    });
  };

  handleCart = () => {
    this.setState({
      cart: !this.state.cart,
    });
  };

  render() {
    const { title, plot, price, rating, stars, fav, cart } = this.state;
    return (
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img
              src="data:image/jpeg;base64,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"
              alt="Poster"
            />
          </div>

          <div className="right">
            <div className="title">
              <p>{title}</p>
            </div>

            <div className="plot">{plot}</div>
            <div className="price">{price}</div>

            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="star-dis">
                <img
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828899.png"
                  alt="minus"
                  onClick={this.reduceStars}
                />

                <img
                  className="stars"
                  src="https://t3.ftcdn.net/jpg/01/09/84/42/240_F_109844239_A7MdQSDf4y1H80cfvHZuSa0zKBkZ68S7.jpg"
                  alt="star"
                />
                <img
                  className="str-btn"
                  src="https://cdn-icons-png.flaticon.com/128/1828/1828919.png"
                  alt="plus"
                  onClick={this.addStars}
                />

                <span className="starCount">{stars}</span>
              </div>

              {/* {fav ? (
                <button className="unfavourite-btn" onClick={this.handleFav}>
                  Un-favorite
                </button>
              ) : (
                <button className="favourite-btn" onClick={this.handleFav}>
                  Favourite
                </button>
              )} */}

              <button
                className={fav ? "unfavourite-btn" : "favourite-btn"}
                onClick={this.handleFav}
              >
                {fav ? "Un-favorite" : "Favourite"}
              </button>

              <button
                className={cart ? "cart-btn" : "ncart-btn"}
                onClick={this.handleCart}
              >
                {cart ? "Add to cart" : "Remove from cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
