import React from "react";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return !this.props.value ? (
      <div>
        <div className="alert alert-primary" role="alert">
          This is Home page
          <br />
          <hr />
          List of added items added are
        </div>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item bg-success d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
          <li className="list-group-item bg-success d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
          <li className="list-group-item bg-success  d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Subheading</div>
              Cras justo odio
            </div>
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
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
