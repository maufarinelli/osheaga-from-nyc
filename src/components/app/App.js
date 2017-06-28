import React, { Component } from 'react';
import './App.css';
import osheagaLogo from './../../img/osheaga-festival.png';
import search from '../../services/search.service';
import { DeparturesList } from '../departuresList/DeparturesList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
		departures: {}
    };

	this.onSearch = this.onSearch.bind(this);
  }

  render() {
    return (
      <div className="container-fluid">
        <header className="row">
          <div className="col-xs-12 col-sm-12 text-center">
            <img src={osheagaLogo} alt="Osheaga Festival"></img>
            <h1>Find one-way departure for the Osheaga's opening weekend.</h1>
          </div>
        </header>

        <main>
          <div className="row">
            <div className="col-xs-12 col-sm-12 text-center">
              <p><b>From:</b> NYC <span className="glyphicon glyphicon-arrow-right"></span> <b>To:</b> Montreal</p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 text-center">
              <button className="btn btn-primary" onClick={this.onSearch}>Search</button>
            </div>
          </div>

          <DeparturesList departures={this.state.departures} />
        </main>

      </div>
    );
  }

  onSearch() {
    this.setState({departures: search()});
  }
}

export default App;
