import React, { Component } from 'react'
import Calculator from './Calculator'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

class App extends Component {  
  
  render() {
    return (
		<div className="App">
			<header className="App-header">         				
			</header>   
			<div className="container">     
				<Calculator/>
			</div>
		</div>
    )
  }
}

export default App
