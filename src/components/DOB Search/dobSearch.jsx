import React from "react";

function DOBSearch({ handleDOBStartInput, handleDOBEndInput }) {
  return (
    <div className="form-group" style={{ display: "flex", flexFlow: "row" }}>
      <label className="form-check-label">
        <span className="badge" style={{ padding: "12px" }}>
          Starting DOB
        </span>
      </label>

      <input
        type="date"
        onChange={handleDOBStartInput}
        className="form-control"
        style={{ width: "100%" }}
      />
      <label className="form-check-label">
        <span className="badge" style={{ padding: "12px" }}>
          Ending DOB
        </span>
      </label>
      <input
        type="date"
        onChange={handleDOBEndInput}
        className="form-control"
        style={{ width: "100%" }}
      />
    </div>
  );
}
export default DOBSearch;
