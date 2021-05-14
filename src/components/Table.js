import React from "react";
// import { MDBDataTable } from 'mdbreact';
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
            <tr key={`${result.first} ${result.last} ${result.date}`}>
              <td className="d-flex justify-content-center">
                <img
                  alt={`${result.first} ${result.last}`}
                  src={result.picture}
                  className="rounded-circle"
                />
              </td>
              <td>{result.first}</td>
              <td>{result.last}</td>
              <td>{result.email}</td>
              <td>{moment(result.date).format("MM-DD-YYYY")}</td>
            </tr>
          ))} 
        </tbody>
      </table>
  )
}

export default Table;
