import React from 'react'
import classnames from 'classnames'

function Number(props) {

	return (
		<div className={classnames(props.styleName)}>
		  	<div className="number">
			  	<label> Value {props.id}: </label> 
		        <input type="number" 
		        	   defaultValue="0"
		        	   onChange={(changeEvent) => props.onNumberChange(changeEvent.target.value)} />
		    </div>		      	   
	    </div>		  
    )
}

export default Number