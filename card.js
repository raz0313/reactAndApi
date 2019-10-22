import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./App.css";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      FirstName: "",
      LastName: "",
      Email: ""
    };
    this.isEdit = this.isEdit.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  isEdit() {
    this.setState({ edit: true });
  }

  cancel() {
    this.setState({ edit: false });
  }
  del = event => {
    axios
      .delete(`http://localhost:51547/api/Employee/${this.props.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };
  hendelChangeFirstName = event => {
    this.setState({ FirstName: event.target.value });
  };
  hendelChangeLastName = event => {
    this.setState({ LastName: event.target.value });
  };
  hendelChangeEmail = event => {
    this.setState({ Email: event.target.value });
  };
  hendelSubmit = event => {
    event.preventDefault();

    const user = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Email: this.state.Email
    };
    console.log(user);

    axios
      .put(`http://localhost:51547/api/Employee/` + this.props.id, user)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };
  render() {
    if (this.state.edit) {
      return (
        <div className="card-div">
          <form onSubmit={this.hendelSubmit}>
            <Table key={this.props.id} striped bordered hover>
              <thead>
                <tr>
                  <th>#{this.props.id}</th>
                  <th>
                    <input
                      type="text"
                      placeholder={this.props.name}
                      onChange={this.hendelChangeFirstName}
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
                      placeholder={this.props.email}
                      onChange={this.hendelChangeEmail}
                    />
                  </td>
                </tr>
                <tr>
                  <td>lest name</td>
                  <td>
                    <input
                      type="text"
                      placeholder={this.props.lastName}
                      onChange={this.hendelChangeLastName}
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
        <div className="card-div">
          <Table key={this.props.id} striped bordered hover>
            <thead>
              <tr>
                <th>#{this.props.id}</th>
                <th>{this.props.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>email</td>
                <td>{this.props.email}</td>
              </tr>
              <tr>
                <td>lest name</td>
                <td>{this.props.lastName}</td>
              </tr>
            </tbody>
          </Table>
          <label>
            <button onClick={this.isEdit}>Edit</button>
          </label>

          <label>
            <button onClick={this.del}>Delate</button>
          </label>
        </div>
      );
    }
  }
}

export default Card;
