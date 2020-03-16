import React, { Component } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

export default class App extends Component {
  state = {
    baseUrl: "http://avoindata.prh.fi/bis/v1",
    payload: {
      totalResults: "true",
      maxResults: "1000",
      resultsFrom: "0",
      streetAddressPostCode: "53850",
      companyRegistrationFrom: "2014-02-28"
    },
    result: null
  };

  componentDidMount() {
    axios
      .post(this.state.baseUrl, this.state.payload)
      .then(result => {
        console.log(result);
        this.setState({ result: result.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    return <div>yrityshaku</div>;
  }
}
