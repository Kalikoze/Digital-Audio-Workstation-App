import React, { Component } from 'react';
import './Visualizer.css';
import Speaker from '../assets/speaker2.png';
import SpeakerCone from '../assets/speaker-cone.png';
import blackBackground from '../assets/black-background.jpg';
import introVideo from '../assets/video1.mp4';
import logo from '../assets/AUDIO-GOD.png';
import Login from '../Login/Login'
import CreateAccount from '../CreateAccount/CreateAccount'
import DisplayLoginContainer from '../Containers/DisplayLoginContainer';
import LoginEvalContainer from '../Containers/LoginEvalContainer';

class Visualizer extends Component {
  render() {
    const { displayLogin, loginEval } = this.props
    return (
      <div className="visualizer">


        <div className='left-speaker-box'>
          <img className='speaker' alt='' src={Speaker}/>
          <img className='speaker-inner-cone' alt='' src={SpeakerCone}/>
        </div>
        <div className='visualizer-box'>
          {!loginEval.bool && !displayLogin.isCreateDisplayed && displayLogin.isLoginDisplayed ? <Login /> : ''}
          {!loginEval.bool && !displayLogin.isLoginDisplayed && displayLogin.isCreateDisplayed ? <CreateAccount /> : ''}
          <img className='black-background' alt='' src={blackBackground}/>
          <img className='logo' alt='' src={logo}/>
          <p className='version'>Version 1.0</p>
          <video poster={introVideo} className='intro-video' id="bgvid" playsInline autoPlay>
          <source src={introVideo} type="video/webm"></source>
          <source src={introVideo} type="video/mp4"></source>
          </video>
        </div>
        <div className='right-speaker-box'>
          <img className='speaker' alt='' src={Speaker}/>
          <img className='speaker-inner-cone' alt='' src={SpeakerCone}/>
        </div>
      </div>
    )
  }
}

export default LoginEvalContainer(DisplayLoginContainer(Visualizer))
