import React, {Component} from 'react'

class Operator extends Component {

	constructor(props) {

		super(props)
		this.formula = {
			sum: (a, b) => Number(a) + Number(b),
			multiply: (a, b) => Number(a) * Number(b)
		}
		this.state = {
			selectedOption : ""
		}		
	}

	componentDidMount(prevProps, prevState) {
		this.setState({selectedOption: "sum"})
	}

	shouldComponentUpdate(nextProps, nextState, nextContext) {

		if(nextState.selectedOption !== this.state.selectedOption)
			return true
		else 
			return false
	}

	componentDidUpdate(prevProps, prevState) {
	   		  
	   this.props.onOperatorChange((a,b) => this.formula[this.state.selectedOption](a, b))
	}	
	
	render() {

		return (
			
			<div>
				<div className="radio">					
						<input type="radio" value="sum"
			                   checked={this.state.selectedOption === "sum"}						
							   onChange={() => this.setState({selectedOption: "sum"})} />		                		            
						<label>Sum</label>
				</div>
				<div className="radio">					
			            <input type="radio"  value="multiply"
			            	   checked={this.state.selectedOption === "multiply"}
			                   onChange={() => this.setState({selectedOption: "multiply"})} />			            		        
                        <label>Multiply</label>
		        </div>    		      
		    </ div>
		        

		)
	}

}

export default Operator