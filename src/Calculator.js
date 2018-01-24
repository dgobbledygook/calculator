import React, {Component} from 'react'
import Number from './Number'
import Operator from './Operator'
import Result from './Result'

class Calculator extends Component {

	constructor(props) {

		super(props)		
		this.state = {
			numbers: Array(3).fill(0),
			operator: function () { return; }
		}
	}

	handleOperatorChange(operator) {		
		
		this.setState({
			numbers: this.state.numbers,
			operator: operator
		})		

	}

	handleNumberChange(number, id) {		
		
		var numbers = this.state.numbers.slice()
		numbers[id] = number
		
		this.setState({
			numbers: numbers,
			operator: this.state.operator
		})		

	}

	render() {

		return (
			
			<div className="row">					
				<Number id="1" styleName="col-sm-12 col-md-6 col-lg panel"
                        onNumberChange={(number) => this.handleNumberChange(number, "0")}/> 
				<Number id="2" styleName="col-sm-12 col-md-6 col-lg panel"
                        onNumberChange={(number) => this.handleNumberChange(number, "1")}/> 						
				<Number id="3" styleName="col-sm-12 col-md-6 col-lg panel"
                        onNumberChange={(number) => this.handleNumberChange(number, "2")}/> 
				<div className="col-sm-12 col-md-6 col-lg panel">
					<div className="result">
						<Operator onOperatorChange={(operator) => this.handleOperatorChange(operator)}/> 					 
						<Result value={this.state.numbers.reduce(this.state.operator)}/>					
					</div>	
				</div>	
			</div>	
			
		)

	}


}


export default Calculator
