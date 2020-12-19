import React, { Component } from "react";

import Header from "./components/Header";
import Table from "./components/Table";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Table />
      </div>
    );
  }
}

export default App;
