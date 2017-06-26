import React, { Component } from 'react';
import './App.css';
import osheagaLogo from './../../img/osheaga-festival.png';
import search from '../../services/search.service';
import { DeparturesList } from '../departuresList/DeparturesList';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">

        <header className="row">
          <div className="col-xs-12 col-sm-12">
            <img src={osheagaLogo} alt="Osheaga Festival"></img>
            <h1>Find one-way departure schedules for the Osheaga festival's opening weekend.</h1>
          </div>
        </header>

        <main>
          <div className="row">
            <div className="col-xs-12 col-sm-12">
              <p><b>From :</b> NYC</p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6 col-sm-6">
              <p><b>To :</b> Montreal</p>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12">
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
