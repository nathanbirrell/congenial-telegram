import React, { Component } from 'react'
import './App.css'
import ChooseDirection from './ChooseDirection'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ChooseDirection />
        </header>
      </div>
    )
  }
}

export default App
