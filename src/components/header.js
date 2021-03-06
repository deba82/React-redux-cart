import React from "react";
import { Link } from "react-router-dom";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              Shoping-Cart
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
            <div className="cart">
              <i className="fas fa-cart-plus fa-3x"></i>
              <span>0</span>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default App;
