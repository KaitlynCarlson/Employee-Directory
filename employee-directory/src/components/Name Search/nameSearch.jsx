import React from "react";

function NameSearch() {
  return (
    <div
      class="form-group"
      style={{
        display: "flex",
        flexFlow: "row",
        width: "50%",
        paddingLeft: "2%",
      }}
    >
      <label class="form-check-label">
        <span class="badge badge-light" style={{ padding: "12px" }}>
          Name
        </span>
      </label>
      <input
        type="text"
        class="form-control"
        id="nameSearch"
        placeholder="Employee Name"
      />
    </div>
  );
}
export default NameSearch;
