import React, { Component } from 'react';
import './TrackComponent.css';
import ControlKnob from '../ControlKnob/ControlKnob'

export default class TrackComponent extends Component {
  render() {
    const { trackClass } = this.props
    return (
      <div className={trackClass}>
        <div className='pan-container'>
          <ControlKnob knobClass="pan" knobType='pan-knob'
          ticks={"tick-pans"}/>
        </div>
        <div className="volume-container">
          <div className="volume-control">
          </div>
          <div className="volume-display">
          </div>
        </div>
        <div className='lower-control-container'>

        </div>
      </div>
    )
  }
}
