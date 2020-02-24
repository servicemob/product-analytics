import React, { Component } from 'react';

import {
  BrowserRouter, 
  Route,
  Link,
} from "react-router-dom";

import Overview from './component/Overview';
import Team from './component/Team';
import Agent from './component/Agent';

import logo from'./images/servicetitan.png';


class App extends Component {
	constructor(){
		super()

		this.state = {

		}
	}

	render(){
		return(
			<div>
			<BrowserRouter>

				<div style={{borderBottom:'1px solid lightgray', height:'49px', backgroundColor:'white', padding:'0px 20px'}}>
					<img style={{height:'49px'}} src={logo} />
				
					<svg style={{float:'right', margin:'5px'}} height="40" width="40">
						<circle cx="20" cy="20" r="20" fill="gray" />
					</svg>
				</div>

				<div style={{width:'14%', display:'inline-block', float:'left', height:'calc(100vh - 48px)', backgroundColor:'#233240'}}>
					<br/>
					<div style={{margin:'20px'}}>
						<h6 style={{color:'white'}}>Metrics</h6>
						<Link to='/'><h6 style={{padding:'10px', color:'lightgray'}}>Overview</h6></Link>
						<Link to='/team'><h6 style={{padding:'10px', color:'lightgray'}}>Team</h6></Link>
						<Link to='/agent'><h6 style={{padding:'10px', color:'lightgray'}}>Agent</h6></Link>
					</div>

					<br/>
					<div style={{margin:'20px'}}>
						<h6 style={{color:'white'}}>Manage</h6>
						<Link to='/'><h6 style={{padding:'10px', color:'lightgray'}}>Visual IVR</h6></Link>
					</div>
				</div>

				<div style={{width:'86%', display:'inline-block'}}>
					<Route path='/' exact component={Overview}/>
					<Route path='/team' exact component={Team}/>
					<Route path='/agent' exact component={Agent}/>
				</div>

			</BrowserRouter>
			</div>
		)
	}
}


export default App;




