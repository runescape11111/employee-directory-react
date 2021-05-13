import React, { Component } from "react";
import SearchForm from "./SearchForm";
import Table from "./Table";
import Header from "./Header";
import API from "../utils/API";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount = async () => {
    const results = await this.randEmployees();
    await this.setState({results});
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

  // randEmployees = async () => {
  //   try {
  //     let requests = [];
  //     for (let i=0;i<3;i++) {
  //       requests.push( API.search()
  //       .then((res) => {
  //         let random = res.data.results[0];
  //         random.id.id = requests.length;
  //         return random;
  //       }))
  //     };
  //     const results = await Promise.all(requests);
  //     return results;
  //   } catch (error) {
  //     console.log(error);
  //     return [];
  //   }
  // };

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
        <Table 
          results={this.state.results}
        />
      </div>
    );
  }
}

export default SearchResultContainer;
