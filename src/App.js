import axios from "axios";
import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import XLSX from "xlsx";

export default class App extends Component {
  state = {
    baseUrl: "http://avoindata.prh.fi/bis/v1",
    payload: {
      totalResults: "true",
      maxResults: "1000",
      resultsFrom: "0",
      companyRegistrationFrom: "2014-02-28",
    },
    loadingData: false,
    streetAddressPostCode: "",
    registeredOffice: "",
    businessLineCode: "",
    showModal: false,
    totalResults: null,
    currentResults: null,
    fileFormat: "xlsx",
  };

  saveToCsv = (dataArray) => {
    let csv = "";
    let data = dataArray;
    let keys = Object.keys(data[0]).join();
    csv += keys + "\n";
    data.forEach((e) => {
      csv += Object.values(e).join() + "\n";
    });
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(csv)
    );
    element.setAttribute(
      "download",
      `Yritykset${this.state.registeredOffice ? `-${this.state.registeredOffice}` : ""}${
        this.state.streetAddressPostCode ? `-${this.state.streetAddressPostCode}` : ""
      }${this.state.businessLineCode ? `-${this.state.businessLineCode}` : ""}.csv`
    );
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  saveToXlsx = (dataArray) => {
    var ws = XLSX.utils.json_to_sheet(dataArray);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Yritystiedot");
    XLSX.writeFile(
      wb,
      `Yritykset${this.state.registeredOffice ? `-${this.state.registeredOffice}` : ""}${
        this.state.streetAddressPostCode ? `-${this.state.streetAddressPostCode}` : ""
      }${this.state.businessLineCode ? `-${this.state.businessLineCode}` : ""}.xlsx`
    );
  };

  loadData = () => {
    let {
      baseUrl,
      streetAddressPostCode,
      registeredOffice,
      businessLineCode,
    } = this.state;
    let payload = Object.assign({}, this.state.payload);
    if (streetAddressPostCode !== "") {
      payload.streetAddressPostCode = streetAddressPostCode;
    }
    if (registeredOffice !== "") {
      payload.registeredOffice = registeredOffice;
    }
    if (businessLineCode !== "") {
      payload.businessLineCode = businessLineCode;
    }
    this.setState({ loadingData: true });
    axios
      .get(baseUrl, { params: payload })
      .then(async (result) => {
        let totalResults = result.data.totalResults;
        this.setState({ totalResults });
        var dataArray = result.data.results;
        console.log(totalResults);
        if (totalResults > 1000) {
          for (let i = 1000; i < totalResults; i += 1000) {
            this.setState({ currentResults: i });
            payload.resultsFrom = i;
            await axios.get(baseUrl, { params: payload }).then((result) => {
              dataArray = dataArray.concat(result.data.results);
            });
          }
        }
        if (this.state.fileFormat === "csv") this.saveToCsv(dataArray);
        else this.saveToXlsx(dataArray);
      })
      .then(this.resetParams)
      .catch((err) => {
        this.setState({ loadingData: false }, () => {
          alert("Ei tuloksia näillä parametreilla.");
          console.log(err);
        });
      });
  };

  resetParams = () => {
    this.setState({
      registeredOffice: "",
      streetAddressPostCode: "",
      businessLineCode: "",
      loadingData: false,
      totalResults: null,
      currentResults: null,
      fileFormat: "xlsx",
    });
  };

  render() {
    const { streetAddressPostCode, registeredOffice, businessLineCode } = this.state;
    return (
      <div className="container">
        <Modal
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>FAQ</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <strong>Mitä tämä työkalu tekee?</strong>
            <p>
              Työkalun tarkoituksena on hakea yrityksiä ja niiden tietoja toimialan ja
              maantieteellisen sijainnin perusteella. Hakutulos on ladattavissa CSV tai
              XLSX formaateissa. Sisältö haetaan{" "}
              <a
                href="https://avoindata.prh.fi/index.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                PRH
              </a>
              :n avoimen datan rajapinnasta.
            </p>
            <strong>Käyttöohjeet</strong>
            <p className="m-0">
              Haku voidaan suorittaa seuraavia parametreja hyödyntäen:
            </p>
            <ul>
              <li>
                Kotipaikka <span className="ml-2 small">Oltava tarkka vastine!</span>
              </li>
              <li>
                Toimiala
                <a
                  className="ml-2 small"
                  href="http://www.stat.fi/meta/luokitukset/toimiala/001-2008/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  lisätietoa
                </a>
              </li>
              <li>
                Postinumero
                <a
                  className="ml-2 small"
                  href="https://fi.wikipedia.org/wiki/Luettelo_Suomen_postinumeroista_kunnittain"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  lisätietoa
                </a>
              </li>
            </ul>
            <p>
              Vähintään yksi parametri on syötettävä, mutta useampaakin voi käyttää
              samanaikaisesti. Jos parametri(t) on syötetty puutteellisesti, sovellus
              ilmoittaa asiasta.
            </p>
            <a href="https://tikka.dev" target="_blank" rel="noopener noreferrer">
              Suunnittelu ja toteutus
            </a>
            <span> | </span>
            <a
              href="https://github.com/matikka96/yrityshaku"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </Modal.Body>
        </Modal>

        <div className="d-flex align-items-center justify-content-center min-vh-100">
          <div className="card" style={{ width: "30rem" }}>
            <h4 className="card-header">
              Yrityshaku
              <button
                className="btn float-right p-0"
                onClick={() => this.setState({ showModal: true })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12" y2="17"></line>
                </svg>
              </button>
            </h4>

            <div className="card-body">
              <fieldset disabled={this.state.loadingData ? true : false}>
                <form>
                  <div className="form-row">
                    <div className="form-group col">
                      <label htmlFor="registered-office">Kotipaikka</label>
                      <input
                        type="text"
                        className="form-control"
                        id="registered-office"
                        placeholder="esim. Lappeenranta"
                        value={this.state.registeredOffice}
                        onChange={(e) =>
                          this.setState({ registeredOffice: e.target.value })
                        }
                      ></input>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-sm-6">
                      <label htmlFor="registered-office">Toimialakoodi</label>
                      <a
                        className="ml-2 small"
                        href="http://www.stat.fi/meta/luokitukset/toimiala/001-2008/index.html"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        lisätietoa
                      </a>
                      <input
                        type="text"
                        className="form-control"
                        id="registered-office"
                        placeholder="esim. 07"
                        value={this.state.businessLineCode}
                        onChange={(e) =>
                          !isNaN(e.target.value) && e.target.value.length < 3
                            ? this.setState({
                                businessLineCode: e.target.value,
                              })
                            : null
                        }
                      ></input>
                    </div>
                    <div className="form-group col-sm-6">
                      <label htmlFor="post-code">Postinumero</label>
                      <a
                        className="ml-2 small"
                        href="https://fi.wikipedia.org/wiki/Luettelo_Suomen_postinumeroista_kunnittain"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        lisätietoa
                      </a>
                      <input
                        type="text"
                        className="form-control"
                        id="post-code"
                        placeholder="esim. 53850"
                        value={this.state.streetAddressPostCode}
                        min="9999"
                        max="99999"
                        onChange={(e) =>
                          !isNaN(e.target.value) && e.target.value.length < 6
                            ? this.setState({
                                streetAddressPostCode: e.target.value,
                              })
                            : null
                        }
                      ></input>
                    </div>
                  </div>

                  <div className="row">
                    <p className="col">Tallennusmuoto</p>
                    <div className="col">
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="xlsx"
                          value="xlsx"
                          onChange={(e) => this.setState({ fileFormat: e.target.value })}
                          checked={this.state.fileFormat === "xlsx" ? true : false}
                        />
                        <label className="form-check-label" htmlFor="xlsx">
                          xlsx
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="csv"
                          value="csv"
                          onChange={(e) => this.setState({ fileFormat: e.target.value })}
                          checked={this.state.fileFormat === "csv" ? true : false}
                        />
                        <label className="form-check-label" htmlFor="csv">
                          csv
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </fieldset>

              <div
                className="progress transition-duration"
                style={{
                  transitionDuration: "0.2s",
                  height:
                    this.state.totalResults && this.state.currentResults ? null : "0px",
                }}
              >
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  style={{
                    width: `${
                      (this.state.currentResults * 100) / this.state.totalResults
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="card-footer">
              <button
                type="button"
                className="btn btn-outline-secondary"
                disabled={
                  this.state.registeredOffice === "" &&
                  this.state.streetAddressPostCode === "" &&
                  this.state.businessLineCode === ""
                    ? true
                    : false
                }
                onClick={this.resetParams}
              >
                Tyhjennä
              </button>

              <button
                type="button"
                className="btn btn-dark float-right"
                disabled={
                  registeredOffice.length < 3 &&
                  streetAddressPostCode.length !== 5 &&
                  businessLineCode.length !== 2
                    ? true
                    : false
                }
                onClick={this.loadData}
              >
                {this.state.loadingData ? (
                  <div className="spinner-border spinner-border-sm mr-2" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : null}
                {this.state.loadingData
                  ? "Valmistellaan tiedostoa"
                  : "Lataa yritystiedot"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
