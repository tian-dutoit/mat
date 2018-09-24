import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import EnhancedTable from './EnhancedTable'
// import Auto from './Auto'
import Search from './Search'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
       <div className='header'></div>
       <div className='content'>
        <Button variant="contained" color="primary">
          Home sweet home
        </Button>
        <EnhancedTable />
        {/* <Auto /> */}
        <Search />
       </div>
      </div>
    )
  }
}

export default Home