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
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </div>
    );
  }
}
export default App;
