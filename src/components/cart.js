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
        This is cart
        <Footer value="Nocontent" />
      </div>
    );
  }
}
export default App;
