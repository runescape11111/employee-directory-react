import React from "react";

function SearchForm(props) {
  return (
    <form className="mb-5">
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an employee"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
