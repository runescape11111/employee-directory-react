import React from "react";
const moment = require("moment");

function Table(props) {
  const employees = props.results;

  return (
      <table className="table align-middle table-primary table-hover table-striped table-bordered" id="sortTable">
        <thead>
          <tr>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(result => (
            <tr key={result.id.id}>
              <td className="d-flex justify-content-center">
                <img
                  alt={`${result.name.first} ${result.name.last}`}
                  src={result.picture.large}
                  className="rounded-circle"
                />
              </td>
              <td>{result.name.first}</td>
              <td>{result.name.last}</td>
              <td>{result.email}</td>
              <td>{moment(result.dob.date).format("MM-DD-YYYY")}</td>
            </tr>
          ))} 
        </tbody>
      </table>
  )
}

export default Table;
