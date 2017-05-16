import React, { Component } from 'react';
import Legislator from './Legislator';
import './App.css';

import request from 'superagent';

class App extends Component {
    constructor() {
        super();
        this.state = {
          value: '95758',
          legislators: [],
          lat: 0,
          long: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('submitted');
        if (this.state.value.length === 5) {
            this.getLegislatorsByZip()
        }
    }

    getLegislatorsByZip() {
        request(`https://congress.api.sunlightfoundation.com/legislators/locate?zip=${this.state.value}&per_page=50&callback=`).end((err, data) => {
            console.log(data);
            this.setState({
              legislators: data.body.results
            })
        })
    }

    getLegislatorsByLatLong(lat, long) {
        request(`https://congress.api.sunlightfoundation.com/legislators/locate?latitude=${lat}&longitude=${long}&per_page=50&callback=`).end((err, data) => {
            console.log(data);
            this.setState({
              legislators: data.body.results,
              loading: false
            })
        })
    }

    componentWillMount() {
      this.setState({
        loading: true
      })
      navigator.geolocation.getCurrentPosition(pos => {
        this.getLegislatorsByLatLong(pos.coords.latitude, pos.coords.longitude)
      })
    }

    renderLegislators() {
      if (this.state.legislators) {
        return this.state.legislators.map((legislator, i) => {
          return(
              <div className="col m4 s12">
                  <Legislator person={legislator} key={i}/>
                </div>)
        })
      }
    }

    renderLoading() {
      if (this.state.loading) {
        return (
          <div className="spinner">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
          </div>
        )
      }
    }

    render() {
      return (
        <div className="App">
          <div className="row">
            <form onSubmit={this.handleSubmit}>
              <div className="input-field col s7">

                <input type="text" value={this.state.value} onChange={this.handleChange} id="zip"/>
                <label htmlFor="zip">
                  Zip Code:
                </label>
                *Zip Code inputs may not accurately represent district lines. Enable location detection for accurate results.
              </div>
              <div className="input-field col s3">
                <button className="btn btn-large waves-effect waves-light" type="submit" name="action">
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="row">
            {this.renderLegislators()}
            {this.renderLoading()}
          </div>
        </div>
      );
    }
}

export default App;
