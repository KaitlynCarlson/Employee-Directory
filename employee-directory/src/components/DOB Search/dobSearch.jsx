import React from "react";
import NameSearch from "../Name Search/nameSearch";

function DOBSearch() {
  return (
    <div
      class="form-group"
      style={{ display: "flex", flexFlow: "row", padding: "3%" }}
    >
      <label class="form-check-label">
        <span class="badge badge-light" style={{ padding: "12px" }}>
          DOB
        </span>
      </label>
      <input
        type="date"
        class="form-control"
        id="startingDate"
        placeholder="Format: YYYY-MM-DD"
        style={{ width: "20%" }}
      />
      <input
        type="date"
        class="form-control"
        id="startingDate"
        placeholder="Format: YYYY-MM-DD"
        style={{ width: "20%" }}
      />

      <NameSearch />
    </div>
  );
}
export default DOBSearch;
