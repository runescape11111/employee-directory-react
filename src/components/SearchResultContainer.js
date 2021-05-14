import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Table from "./Table";
import Header from "./Header";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    employees: [],
  };

  componentDidMount = async () => {
    const results = await this.randEmployees();
    await this.setState({results, employees:results});
  }

  randEmployees = async () => {
    let results = [];
    await API.search()
      .then((res) => {
        results = res.data.results;
      })
      .catch((err) => console.log(err));
      return results;
  };

  handleInputChange = async (event) => {
    const value = event.target.value;
    const employees = await this.state.results.filter(employee => 
      employee.name.first.toLowerCase().includes(value.toLowerCase()) 
      || employee.name.last.toLowerCase().includes(value.toLowerCase()) 
      || employee.email.toLowerCase().includes(value.toLowerCase()) 
      || employee.dob.date.includes(value.toLowerCase())
      );
    await this.setState({
      search: value,
      employees
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchForm
          search={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <Table 
          results={this.state.employees}
        />
      </div>
    );
  }
}

export default SearchResultContainer;
