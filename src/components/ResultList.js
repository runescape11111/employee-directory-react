import React from "react";
const moment = require("moment");

function Table(props) {
  // return (
  //   <ul className="list-group">
  //     {props.results.map((result) => (
  //       <li className="list-group-item" key={result.id}>
  //         <img
  //           alt={result.title}
  //           className="img-fluid"
  //           src={result.images.original.url}
  //         />
  //       </li>
  //     ))}
  //   </ul>
  // );
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered" id="sortTable">
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
          {props.results.map(result => (
            <tr key={result.id.id}>
              <td className="d-flex justify-content-center">
                <img
                  alt={`${result.name.first} ${result.name.last}`}
                  // className="img-fluid"
                  src={result.picture.medium}
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
    </div>
  )
}

export default Table;
