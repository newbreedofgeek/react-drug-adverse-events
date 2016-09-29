//https://api.fda.gov/drug/event.json?search=patient.drug.openfda.brand_name:advil&count=patient.reaction.reactionmeddrapt.exact&limit=1000
//https://www.sitepoint.com/react-higher-order-components/?utm_source=javascriptweekly&utm_medium=email


import React, { Component, PropTypes } from 'react';

var Effect = function(props) {
  return <div className="effect" onClick={ props.effectClick }>{ props.name }</div>;
}

var DrugList = function(props) {
  let ui = [];

  function* entries(obj) {
    for (let key of Object.keys(obj)) {
     yield [key, obj[key]];
    }
  }

  for (let [key, value] of entries(props.drugsToEffects)) {
     let obj = props.drugsToEffects[key];
     let effectsUi = [];

     effectsUi = props.drugsToEffects[key].map(e => <Effect key={e} name={e} effectClick={null}  />);

     ui.push(<div key={key}> <div className="drug label label-primary">{ key } </div> {effectsUi}</div>)
  }

  return <div> { ui } </div>
}

export default class DrugAdverseEvents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: props.options,
      drugsEntered: [],
      userInput: '',
      drugsToEffects: {}
    };

    this.optionStyle = {};

    this.value = props.defaultValue;

    this.onKeyUp = this._onKeyUp.bind(this);
    this.effectClick = this._effectClick.bind(this);
  }

  _effectClick(e) {
    console.log(e.target.innerText);
  }

  _analyse(e = null) {
    if (e)
      e.preventDefault();

    let words = this.state.userInput.split(' ');
    let test = {};
    let drugsEntered = words.filter(w => w.indexOf('@') > -1).map(w => (w.charAt(w.length) == '.') ? w.substring(1, w.length - 1) : w.substring(1, w.length))

    drugsEntered.map(d => test[d] = [
        'COMPLETED SUICIDE',
        'NAUSEA',
        'PYREXIA',
        'VOMITING',
        'TOXICITY TO VARIOUS AGENTS',
        'DYSPNOEA',
        'HEADACHE',
        'FATIGUE'
      ]);

    this.setState({
      drugsToEffects: test
    });
  }

  _onKeyUp(e) {
    this.setState({
      userInput: e.target.value
    });

    this._analyse();

    return;
  }

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

        <div className="results" >
          <div className="title">Results</div>
          <div className="drugsEntered">
            <DrugList
              drugsEntered={this.state.drugsEntered}
              drugsToEffects={this.state.drugsToEffects} />
          </div>
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
