import './App.css';
import React, {useState} from 'react'
import styled from 'styled-components'
import ControlledOpenSelect from './ControlledOpenSelect';

function App() {
  const [shoot, setShoot] = React.useState('derek')
  // const [pics, setPics] = React.useState([])

  // function getPics() {
  //   return (
  //     console.log({shoot})
  //   )
  // }

  function renderPics() {
    if (shoot) {
      return (
        <div className="grid">
          <img className="img" src={require(`./images/${shoot}/1.jpg`).default} height = {300} weight = {200} />
          <img className="img" src={require(`./images/${shoot}/2.jpg`).default} height = {300} weight = {200} />
          <img className="img" src={require(`./images/${shoot}/3.jpg`).default} height = {300} weight = {200} />
          <img className="img" src={require(`./images/${shoot}/4.jpg`).default} height = {300} weight = {200} />
          <img className="img" src={require(`./images/${shoot}/5.jpg`).default} height = {300} weight = {200} />
          <img className="img" src={require(`./images/${shoot}/6.jpg`).default} height = {300} weight = {200} />
          <img className="img" src={require(`./images/${shoot}/7.jpg`).default} height = {300} weight = {200} />
          <img className="img" src={require(`./images/${shoot}/8.jpg`).default} height = {300} weight = {200} />
        </div>
      )
    } else {
      return null
    }
  }

  return (

    <header className="header">
      <h1 className="title">💫  PORTRAITS BY TRINITY  💫</h1>

      <ControlledOpenSelect className="dropdown" id="select client" setShoot={setShoot} shoot={shoot}>
        select a shoot
      </ControlledOpenSelect>

      {renderPics()}

      <div className="footer"> Made with 💖 &nbsp;in Seattle. </div>
    </header>


    
  );
}

export default App;
