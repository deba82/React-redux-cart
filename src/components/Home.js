import React from "react";
import Header from "./header";
import Footer from "./footer";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <div>
          <div className="product">
            <div className="product-image">
              <i className="fas fa-mobile-alt fa-products"></i>
            </div>
            <div className="description">
              <div className="label">
                <strong>Brand:</strong>Mobile
              </div>
              <div className="price">
                <strong>Price:</strong>5$
              </div>
            </div>
            <div className="addtocart">
              <button>AddTOCart</button>
            </div>
            <div className="quantity">5</div>
          </div>
          <div className="product">
            <div className="product-image">
              <i className="fas fa-mobile-alt fa-products"></i>
            </div>
            <div className="description">
              <div className="label">
                <strong>Brand:</strong>Mobile
              </div>
              <div className="price">
                <strong>Price:</strong>5$
              </div>
            </div>
            <div className="addtocart">
              <button>AddTOCart</button>
            </div>
            <div className="quantity">5</div>
          </div>
          <div className="product">
            <div className="product-image">
              <i className="fas fa-mobile-alt fa-products"></i>
            </div>
            <div className="description">
              <div className="label">
                <strong>Brand:</strong>Mobile
              </div>
              <div className="price">
                <strong>Price:</strong>5$
              </div>
            </div>
            <div className="addtocart">
              <button>AddTOCart</button>
            </div>
            <div className="quantity">5</div>
          </div>
          <div className="product">
            <div className="product-image">
              <i className="fas fa-mobile-alt fa-products"></i>
            </div>
            <div className="description">
              <div className="label">
                <strong>Brand:</strong>Mobile
              </div>
              <div className="price">
                <strong>Price:</strong>5$
              </div>
            </div>
            <div className="addtocart">
              <button>AddTOCart</button>
            </div>
            <div className="quantity">5</div>
          </div>
          <div className="product">
            <div className="product-image">
              <i className="fas fa-mobile-alt fa-products"></i>
            </div>
            <div className="description">
              <div className="label">
                <strong>Brand:</strong>Mobile
              </div>
              <div className="price">
                <strong>Price:</strong>5$
              </div>
            </div>
            <div className="addtocart">
              <button>AddTOCart</button>
            </div>
            <div className="quantity">5</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
