import React, {Component} from 'react';


class Agent extends Component {
	constructor(){
		super()

		this.state = {

		}
	}


	componentDidMount() {
		window.scrollTo(0, 0)
	}


	render(){
		return(
			<div style={{height:'calc(100vh - 48px)', overflowY:'scroll'}}>
			<div style={{padding:'0px 80px'}}>
			
			</div>
			</div>
		)
	}

}


export default Agent