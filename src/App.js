import React, { Component } from 'react';
import Legislator from './Legislator';
import './App.css';

import request from 'superagent';

class App extends Component {
    constructor() {
        super();
        this.state = {
          value: '95758',
          legislators: []
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
            this.getLegislators()
        }
    }

    getLegislators() {
        request(`https://congress.api.sunlightfoundation.com/legislators/locate?zip=${this.state.value}&per_page=50&callback=`).end((err, data) => {
            console.log(data);
            this.setState({
              legislators: data.body.results
            })
        })
    }

    componentWillMount() {
    }

    renderLegislators() {
      if (this.state.legislators) {
        return this.state.legislators.map((legislator, i) => {
          return(
              <div className="col m6 s12">
                  <Legislator person={legislator} key={i}/>
                </div>)
        })
      }
    }

    render() {
      return (
        <div className="App">
          <div className="row">
            <form onSubmit={this.handleSubmit}>
              <div className="input-field col s6">
                <input type="text" value={this.state.value} onChange={this.handleChange} id="zip"/>
                <label htmlFor="zip">
                  Zip Code:
                </label>

              </div>
              <div className="input-field col s6">
                <button className="btn btn-large waves-effect waves-light" type="submit" name="action">
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="row">
            {this.renderLegislators()}
          </div>
        </div>
      );
    }
}

export default App;
