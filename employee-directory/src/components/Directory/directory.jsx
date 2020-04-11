import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Employees from "../Employee Card/employeeCard";
import DOBSearch from "../DOB Search/dobSearch";

class Directory extends React.Component {
  state = {
    employees: [],
    search: "",
    sortType: "",
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
  handleSortState = () => {
    const selectElement = document.querySelector("#sortSelection");
    const output = selectElement.value;
    console.log(output);
    if (output === "name") {
      const sortedEmployees = this.state.employees;
      sortedEmployees.sort(function (a, b) {
        if (a.name.last < b.name.last) {
          return -1;
        }
        if (a.name.last > b.name.last) {
          return 1;
        }
        return 0;
      });
      this.setState({ employees: sortedEmployees });
    }
    if (output === "dob") {
      this.setState({ sortType: "dob" });
      const sortedEmployees = this.state.employees;
      sortedEmployees.sort(function (a, b) {
        if (a.dob.date < b.dob.date) {
          return -1;
        }
        if (a.dob.date > b.dob.date) {
          return 1;
        }
        return 0;
      });
      this.setState({ employees: sortedEmployees });
    }
    if (output === "nosort") {
      this.setState({ sortType: "nosort" });
    }
  };

  render() {
    return (
      <div>
        <DOBSearch />

        <div className="container">
          <h2>Directory</h2>
          <p>
            Search by an exact date of birth, a range of dob, or name to quickly
            access employee data.
          </p>
          <div>
            <select
              style={{
                marginBottom: "10px",
                color: "white",
                backgroundColor: "green",
                height: "35px",
              }}
              id="sortSelection"
              onChange={this.handleSortState}
            >
              <option value="nosort">No sort applied</option>
              <option value="name">Sort by Name</option>
              <option value="dob">Sory by Date of Birth</option>
            </select>
          </div>{" "}
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
            <Employees
              sort={this.state.sortType}
              employees={this.state.employees}
            />
          </table>
        </div>
      </div>
    );
  }
}
export default Directory;
