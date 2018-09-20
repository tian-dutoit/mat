import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Home from './Home'
import './App.css'

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <CssBaseline />
        <div className="App">
          <Home />
        </div>
      </React.Fragment>
    )
  }
}

export default App
