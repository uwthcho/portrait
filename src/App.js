import './App.css';
import React, {useState} from 'react'
import styled from 'styled-components'
import ControlledOpenSelect from './ControlledOpenSelect';
import Button from '@material-ui/core/Button';

function App() {
  const [shoot, setShoot] = React.useState('')
  // const [pics, setPics] = React.useState([])

  async function getPics() {
    return (
      <div>
          <img src={require('./images/derek/1.JPG').default} height = {300} weight = {200} />
      </div>
    )
  }

  return (
    <div>
      <header className="header">
        <h1>portraits by trinity</h1> 

        <div className="dropdown">
          <ControlledOpenSelect id="select client" setShoot={setShoot} shoot={shoot}>
            select a shoot
          </ControlledOpenSelect>

          <Button variant="contained" color="primary" style={{height:55, marginLeft:10, width:100}} 
          onClick={getPics}>
          </Button>
        </div>
      </header>

    </div>
  );
}

export default App;
