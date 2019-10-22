import React from "react";
import axios from "axios";
import Card from "./card";
import NewCard from "./NewCard";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isEdit: false
    };
    this.getData();
  }

  getData() {
    axios.get("http://localhost:51547/api/Employee/getall").then(res => {
      this.setState({ items: res.data });
    });
  }
  render() {
    return (
      <div className="App">
        <NewCard />
        {this.state.items.map(item => (
          <Card
            name={item.firstName}
            id={item.employeeId}
            email={item.email}
            lastName={item.lastName}
          />
        ))}
      </div>
    );
  }
}

export default App;
