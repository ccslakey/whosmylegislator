import React, { Component } from 'react';

class Legislator extends Component {
  render(){
    return (
      <div>
        <div className="card">
            <div className="card-content">
              <div className="row">
                <div className="col s12 ">


                  <img src={`https://theunitedstates.io/images/congress/450x550/${this.props.person.bioguide_id}.jpg`} className="responsive-img circle"/>
                  <span className="card-title center-align">{this.props.person.first_name} {this.props.person.last_name}</span>

                    <p className="center-align">
                    {this.props.person.office}
                    </p>
                      <div className="center-align">
                      <p>
                      <a target="_blank" href={`https://twitter.com/${this.props.person.twitter_id}`}>
                        <i className="fa fa-twitter-square fa-3x" aria-hidden="true"></i>

                      </a>


                      <a target="_blank" href={`https://facebook.com/${this.props.person.facebook_id}`}>
                        <i className="fa fa-facebook-official fa-3x" aria-hidden="true"></i>

                      </a>


                      <a target="_blank" href={`mailto:${this.props.person.oc_email}`}>
                        <i className="fa fa-envelope fa-3x" aria-hidden="true"></i>

                      </a>


                      <a target="_blank" href={`tel:${this.props.person.phone}`}>
                        <i className="fa fa-phone fa-3x" aria-hidden="true"></i>
                      </a>


                      <a target="_blank" href={this.props.person.website}>
                        <i className="fa fa-globe fa-3x" aria-hidden="true"></i>
                      </a>

                      </p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
  }
}

export default Legislator;
