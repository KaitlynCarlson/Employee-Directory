import React from "react";
import API from "../../utils/API";
import Employees from "../Employee Card/employeeCard";
import DOBSearch from "../DOB Search/dobSearch";
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
      <div>
        <DOBSearch />
        <div className="container">
          <h2>Directory</h2>
          <p>
            Search by an exact date of birth, a range of dob, or name to quickly
            access employee data.
          </p>
          <div className="container">
            <div className="dropdown show">
              <a
                className="btn btn-success dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort Employees
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">
                  Name
                </a>
                <a className="dropdown-item" href="#">
                  DOB
                </a>
              </div>
            </div>
          </div>
          <br />
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
      </div>
    );
  }
}
export default DirectoryColumnsHeader;
