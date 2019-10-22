import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

import "./App.css";
class NewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      obj: {
        firstName: "",
        lestName: "",
        email: ""
      }
    };
    this.newForm = this.newForm.bind(this);
    this.firstNameChangeHendler = this.firstNameChangeHendler.bind(this);
    this.lestNameChangeHendler = this.lestNameChangeHendler.bind(this);
    this.emailChangeHendler = this.emailChangeHendler.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  newForm() {
    this.setState({ isEdit: true });
  }
  save = e => {
    e.preventDefault();
    console.log(this.state.obj);
  };
  cancel() {
    this.setState({ isEdit: false });
  }
  firstNameChangeHendler = e => {
    this.setState.obj({ firstName: e.target.value });
  };
  lestNameChangeHendler = e => {
    this.setState.obj({ lestName: e.target.value });
  };
  emailChangeHendler = e => {
    this.setState.obj({ email: e.target.value });
  };
  render() {
    if (this.state.isEdit) {
      return (
        <div className="card-div">
          <form onSubmit={this.save}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>
                    <input
                      type="text"
                      placeholder="FirstName"
                      onChange={this.firstNameChangeHendler}
                      name="firstName"
                      value={this.state.obj.firstName}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>email</td>
                  <td>
                    <input
                      type="text"
                      name="email"
                      value={this.state.obj.email}
                      onChange={this.changeHendler}
                    />
                  </td>
                </tr>
                <tr>
                  <td>lest name</td>
                  <td>
                    <input
                      type="text"
                      name="lestName"
                      value={this.state.obj.lestName}
                      onChange={this.changeHendler}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
            <label>
              <button type="submit">save</button>
            </label>

            <label>
              <button onClick={this.cancel}>cancel</button>
            </label>
          </form>
        </div>
      );
    } else {
      return (
        <div className="newCard" onClick={this.newForm}>
          <h1>new employee</h1>
        </div>
      );
    }
  }
}

export default NewCard;
