import React from "react";

function DirectoryColumnsHeader() {
  return (
    <div class="container">
      <h2>Directory</h2>
      <p>
        Search by an exact date of birth, a range of dob, or name to quickly
        access employee data.
      </p>
      <table class="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://via.placeholder.com/150" />
            </td>
            <td>John Doe</td>
            <td>XXX-XXX-XXXX</td>
            <td>john@example.com</td>
            <td>xx/xx/xxxx</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default DirectoryColumnsHeader;
