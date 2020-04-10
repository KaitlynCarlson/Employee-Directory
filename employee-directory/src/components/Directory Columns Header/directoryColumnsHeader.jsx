import React, { Component } from "react";
import API from "../../utils/API";
import Employees from "../Employee Card/employeeCard";
class DirectoryColumnsHeader extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.getEmployees();
  }
  getEmployees = () => {
    API.getEmployees()
      .then((res) => {
        this.setState({
          employees: res.data.results,
        });
        console.log(this.state.employees);
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="container">
        <h2>Directory</h2>
        <p>
          Search by an exact date of birth, a range of dob, or name to quickly
          access employee data.
        </p>
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <Employees employees={this.state.employees} />
        </table>
      </div>
    );
  }
}
export default DirectoryColumnsHeader;
