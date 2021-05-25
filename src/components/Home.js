import React from "react";
import Header from "./header";
import Footer from "./footer";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      product1: { name: "Mobile", Price: 50, quantity: 0 },
      product2: { name: "Camera", Price: 30, quantity: 0 },
      product3: { name: "Car", Price: 200, quantity: 0 },
      product4: { name: "Bike", Price: 90, quantity: 0 },
    };
    this.check = this.state;
  }
  object(value) {
    this.setState({
      [value[0]]: {
        name: this.state[value[0]].name,
        Price: this.check[value[0]].Price * (this.state[value[0]].quantity + 1),
        quantity: this.state[value[0]].quantity + 1,
      },
    });
    let send = this.state;
    send[value[0]].quantity += 1;
    send[value[0]].Price = this.check[value[0]].Price * send[value[0]].quantity;
    this.props.addToCartHandler({ state: send });
    localStorage.setItem("value", JSON.stringify(send));
  }
  object2(value) {
    if (value[1].quantity === 0) {
      return null;
    }
    this.setState({
      [value[0]]: {
        name: this.state[value[0]].name,
        Price:
          value[1].quantity !== 1
            ? this.check[value[0]].Price * (this.state[value[0]].quantity - 1)
            : this.check[value[0]].Price,
        quantity: this.state[value[0]].quantity - 1,
      },
    });
    let send = this.state;
    send[value[0]].quantity -= 1;
    send[value[0]].Price = this.check[value[0]].Price * send[value[0]].quantity;
    this.props.addToCartHandler({ state: send });
    localStorage.setItem("value", JSON.stringify(send));
  }
  componentDidMount() {
    if (localStorage.value) {
      this.setState(JSON.parse(localStorage.value));
    }
  }

  render() {
    return (
      <div>
        <Header />
        {Object.entries(this.state).map((index, i) => {
          return (
            <div key={i}>
              <div className="product">
                <div className="product-image">
                  <i className="fas fa-mobile-alt fa-products"></i>
                </div>
                <div className="description">
                  <div className="label">
                    <strong>Brand:</strong>
                    {index[1]["name"]}
                    {index[0]}
                  </div>
                  <div className="price">
                    <strong>Price:</strong>
                    {index[1]["Price"]}$
                  </div>
                </div>
                <div className="addtocart">
                  <button
                    onClick={() => {
                      this.object(index);
                    }}
                  >
                    AddTOCart
                  </button>
                </div>
                <div className="quantity">{index[1]["quantity"]}</div>
                <div className="addtocart">
                  <button
                    style={{ background: "red" }}
                    onClick={() => {
                      this.object2(index);
                    }}
                  >
                    RemoveToCart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <Footer value={this.state} />
      </div>
    );
  }
}
export default App;
