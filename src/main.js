//https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:advil&count=patient.reaction.reactionmeddrapt.exact&limit=1000
//https://www.sitepoint.com/react-higher-order-components/?utm_source=javascriptweekly&utm_medium=email


import React, { Component, PropTypes } from 'react';

var Effect = function(props) {
  return <div className="effect" onClick={ props.effectClick }>{ props.name }</div>;
}

export default class DrugAdverseEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: props.options,
      drugsEntered: []
    };

    this.optionStyle = {};

    this.value = props.defaultValue;
    this.flagDrugEntryStart = false;
    this.flagDrugEntryDone = false;
    this.drugsEntered = [];

    this.onKeyUp = this._onKeyUp.bind(this);
    this.effectClick = this._effectClick.bind(this);
  }

  _effectClick(e) {
    console.log(e.target.innerText);
  }

  _analyse(e) {
    console.log(e.target.innerText);
  }

  _onKeyUp(e) {
    e.preventDefault();

    let userInput = e.target.value,
        lastChar = userInput.substring(userInput.length - 1, userInput.length),
        lastDrugEntered = '';

    if (lastChar == '@') {
      this.flagDrugEntryStart = true;
      console.log('start')
    }

    if (this.flagDrugEntryStart && (lastChar == ' ' || lastChar == '.' || lastChar == ',')) {
      this.flagDrugEntryDone = true;
      console.log('end');

      lastDrugEntered = userInput.substring(userInput.lastIndexOf('@') + 1, userInput.length);

      console.log(lastDrugEntered);
      this.flagDrugEntryStart = false;
      this.flagDrugEntryDone = true;

      this.drugsEntered.push(lastDrugEntered.toLowerCase());

      // this.setState({
      //   drugsEntered: this.drugsEntered
      // })
    }
  }

  // <div className="selectEffect">
  //   <Effect
  //     name="PAIN"
  //     effectClick={this.effectClick} />
  // </div>

  render() {
    return (
      <div>
        <textarea
          ref="userEntry"
          autoComplete="off"
          className="form-control"
          rows="8"
          placeholder="I feel that i'm allergic to @xenical and @panadol. I have also taken @sertraline in the past and didnt feel too good. My son has issues when he takes @advil."
          onKeyUp={this.onKeyUp}>
        </textarea>

        <button className="btn btn-large" onClick={this._analyse.bind(this)}> Analyse </button>

        <div className="drugsEntered">
          {this.state.drugsEntered}
        </div>

      </div>
    );
  }
}

DrugAdverseEvents.defaultProps = {
  marginSpace : 5,
  defaultValue: '',
  onChange: null,
  enableSelectionFill: false,
  selectionFillCls:''
};
