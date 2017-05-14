import React, { Component } from 'react';

class Legislator extends Component {
  render(){
    return (
      <div>
            <div className="card">
            <div className="card-image">
              <img src={`https://theunitedstates.io/images/congress/450x550/${this.props.person.bioguide_id}.jpg`}/>
              <span className="card-title">{this.props.person.first_name} {this.props.person.last_name}</span>
            </div>
              <div className="card-content">

                <p>
                {this.props.person.office}
                </p>
                <p>
                <a target="_blank" href={`https://twitter.com/${this.props.person.twitter_id}`}>
                  <i className="fa fa-twitter-square fa-3x" aria-hidden="true"></i>
                  &nbsp; @{this.props.person.twitter_id}
                </a>

                </p>
                <p>
                <a target="_blank" href={`https://facebook.com/${this.props.person.facebook_id}`}>
                  <i className="fa fa-facebook-official fa-3x" aria-hidden="true"></i>
                  &nbsp; @{this.props.person.facebook_id}
                </a>

                </p>
                <p>
                <a target="_blank" href={`mailto:${this.props.person.oc_email}`}>
                  <i className="fa fa-envelope fa-3x" aria-hidden="true"></i>
                  &nbsp; {this.props.person.oc_email}
                </a>

                </p>
                <p>
                <a target="_blank" href={`tel:${this.props.person.phone}`}>
                  <i className="fa fa-phone fa-3x" aria-hidden="true"></i>
                  &nbsp; {this.props.person.phone}
                </a>

                </p>
                <p>
                <a target="_blank" href={this.props.person.website}>
                  <i className="fa fa-globe fa-3x" aria-hidden="true"></i>
                  &nbsp; {this.props.person.website}
                </a>

                </p>
              </div>
            </div>
          </div>
      )
  }
}

export default Legislator;
