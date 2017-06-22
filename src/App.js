import React, { Component } from 'react';
import './App.css';
import osheagaLogo from './img/osheaga-festival.png';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header class="row">
          <div className="col-xs-12 col-sm-12">
            <img src={osheagaLogo} alt="Osheaga Festival"></img>
            <h1>Find one-way departure schedules for the Osheaga festival's opening weekend.</h1>
          </div>
        </header>
        <main>
          <div class="row">
            <div className="col-xs-12 col-sm-12">
              <p><b>From :</b> NYC</p>
            </div>
          </div>
          <div class="row">
            <div className="col-xs-6 col-sm-6">
              <p><b>To :</b> Montreal</p>
            </div>
          </div>

          <div class="row">
            <div className="col-xs-12 col-sm-12">
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
