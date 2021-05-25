import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return !this.props.show ? (
      <div>
        <div className="alert alert-primary" role="alert">
          This is Home page
          <br />
          <hr />
          List of added items added are
        </div>
        <ol className="list-group list-group-numbered">
          {Object.entries(this.props.value).map((index, i) => {
            return index[1]["quantity"] !== 0 ? (
              <li
                key={i}
                className="list-group-item bg-success d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{index[1]["name"]}</div>
                  {index[1]["Price"]}
                </div>
                <span className="badge bg-primary rounded-pill">
                  {index[1]["quantity"]}
                </span>
              </li>
            ) : null;
          })}
        </ol>
      </div>
    ) : (
      <div className="alert alert-primary" role="alert">
        This is Cart page
      </div>
    );
  }
}
export default App;
