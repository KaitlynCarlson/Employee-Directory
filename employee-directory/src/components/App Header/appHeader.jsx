import React from "react";
function appHeader() {
  return (
    <div
      style={{
        backgroundColor: "#040F59",
        borderBottom: "5px solid red",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        padding: "1%",
      }}
      className="container-fluid"
    >
      <img
        src="./icon192.png"
        alt="Employee Directory Logo"
        height="75px"
        width="75px"
      />
      <h1 className="display-4" style={{ color: "white" }}>
        Employee Directory
      </h1>
      <p className="lead" style={{ color: "white" }}>
        Quickly navigate employee data
      </p>
    </div>
  );
}
export default appHeader;
