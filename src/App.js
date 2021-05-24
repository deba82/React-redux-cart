import "./App.css";
import Home from "./components/Home";
import Cart from "./components/cart";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { homepage } from "./server/constants";
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path={homepage + "/"} component={Home} />
        <Route path={homepage + "/cart/"} component={Cart} />
      </Router>
    </div>
  );
}

export default App;
