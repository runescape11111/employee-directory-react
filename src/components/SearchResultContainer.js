import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Table from "./ResultList";
import Header from "./Header";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    this.randEmployees();
  }

  randEmployees = async () => {
    let results = [];
    for (let i=0;i<3;i++) {
      API.search()
        .then((res) => {
          let random = res.data.results[0];
          random.id.id = results.length;
          results.push(random);
        })
        .catch((err) => console.log(err));
    };
    await this.setState({results});
  };

  handleInputChange = async (event) => {
    const name = event.target.name;
    const value = event.target.value;
    await this.setState({
      [name]: value,
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
        <Table results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
