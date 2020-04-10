import React from "react";

function NameSearch() {
  return (
    <div
      className="form-group"
      style={{
        display: "flex",
        flexFlow: "row",
        width: "50%",
        paddingLeft: "2%",
      }}
    >
      <label className="form-check-label">
        <span className="badge" style={{ padding: "12px" }}>
          Name
        </span>
      </label>
      <input
        type="text"
        className="form-control"
        id="nameSearch"
        placeholder="Employee Name"
      />
    </div>
  );
}
export default NameSearch;
