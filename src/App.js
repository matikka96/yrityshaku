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
      companyRegistrationFrom: "2014-02-28"
    },
    streetAddressPostCode: "",
    registeredOffice: "",
    result: null,
    loadingData: false
  };

  loadData = () => {
    let { baseUrl, payload, streetAddressPostCode, registeredOffice } = this.state;
    if (streetAddressPostCode !== "") {
      payload.streetAddressPostCode = streetAddressPostCode;
    }
    if (registeredOffice !== "") {
      payload.registeredOffice = registeredOffice;
    }
    this.setState({ loadingData: true });
    axios
      .get(baseUrl, { params: payload })
      .then(result => {
        // this.setState({ result: result.data.results });
        let csv = "";
        let data = result.data.results;
        let keys = Object.keys(data[0]).join();
        csv += keys + "\n";
        data.forEach(e => {
          csv += Object.values(e).join() + "\n";
        });
        var element = document.createElement("a");
        element.setAttribute(
          "href",
          "data:text/plain;charset=utf-8," + encodeURIComponent(csv)
        );
        element.setAttribute(
          "download",
          `yritykset${registeredOffice ? `-${registeredOffice}` : ""}${
            streetAddressPostCode ? `-${streetAddressPostCode}` : ""
          }.csv`
        );
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      })
      .then(this.resetParams)
      .catch(err => {
        this.setState({ loadingData: false }, () =>
          alert(`Väärin syötetyt parametrit. \n ${err}`)
        );
      });
  };

  resetParams = () => {
    this.setState({
      registeredOffice: "",
      streetAddressPostCode: "",
      loadingData: false
    });
  };

  render() {
    const { streetAddressPostCode, registeredOffice } = this.state;
    return (
      <div className="bg-secondary">
        <div className="container">
          <div className="d-flex align-items-center justify-content-center min-vh-100">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Yrityshaku</h4>
                <div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <label htmlFor="registered-office">Kotipaikka</label>
                      <input
                        type="text"
                        className="form-control"
                        id="registered-office"
                        placeholder="esim. Lappeenranta"
                        value={this.state.registeredOffice}
                        onChange={e =>
                          this.setState({ registeredOffice: e.target.value })
                        }
                      ></input>
                    </div>
                    <div className="form-group col-sm-6">
                      <label htmlFor="post-code">Postinumero</label>
                      <input
                        type="text"
                        className="form-control"
                        id="post-code"
                        placeholder="esim. 53850"
                        value={this.state.streetAddressPostCode}
                        onChange={e =>
                          this.setState({ streetAddressPostCode: e.target.value })
                        }
                      ></input>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    disabled={
                      this.state.registeredOffice === "" &&
                      this.state.streetAddressPostCode === ""
                        ? true
                        : false
                    }
                    onClick={this.resetParams}
                  >
                    Tyhjennä
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary float-right"
                    disabled={
                      registeredOffice.length < 3 && streetAddressPostCode.length !== 5
                        ? true
                        : false
                    }
                    onClick={this.loadData}
                  >
                    {this.state.loadingData ? (
                      <div
                        className="spinner-border spinner-border-sm mr-2"
                        role="status"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : null}
                    Lataa yritystiedot
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
