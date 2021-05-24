import "./App.css";
import Home from "./components/Home";
import Cart from "./components/cart";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import { homepage } from "./server/constants";
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="./">Home</Link>
        <Link to="./cart">Cart</Link>
        <Route exact path={homepage + "/"} component={Home} />
        <Route path={homepage + "/cart/"} component={Cart} />
      </Router>
    </div>
  );
}

export default App;
