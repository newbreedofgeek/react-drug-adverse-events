'use strict';

import React, { Component, PropTypes } from 'react';
import DrugAdverseEvents from '../main'

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='example'>
        <h1>React Drug Adverse Events - Example</h1>

        <div className='radio-holder row'>
        <div className="col-md-12 ">
          <form className="form-horizontal">
            <div className="form-group">
              <div className="col-md-12">
                <h2>Enter freetext below to descrive the medication and drugnames you are taking. Make sure you prefix the drug brand name with a @. Click on the Analyse button when you are done.</h2>
              </div>
              <div className="col-md-12">
                <DrugAdverseEvents />
              </div>
            </div>
          </form>
        </div>
        </div>
      </div>
    )
  }
}
