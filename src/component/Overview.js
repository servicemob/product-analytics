import React, {Component} from 'react';

import BarChart from '../charts/BarChart'
import LineChart from '../charts/LineChart'


class Overview extends Component {
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
			<div style={{backgroundColor:'rgb(248,249,250)', height:'calc(100vh - 48px)', overflowY:'scroll'}}>
			<div style={{padding:'20px 80px'}}>
			

				<div style={{margin:'10px'}}>
					<div style={{display:'inline-block'}}>
						<h6 style={{color:'rgb(35, 50, 64)'}}><strong>OVERVIEW</strong></h6>
						<h5 style={{color:'rgb(35, 50, 64)'}}><strong>Jan 5 - Jan 17, 2020</strong></h5>
					</div>

					<div style={{display:'inline-block', float:'right'}} className="dropdown">
						<button style={{textAlign:'left', width:'175px'}} className="btn btn-sm btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Last 7 Days
							<i style={{float:'right', paddingTop:'4px'}} class="fas fa-angle-down"></i>
						</button>
						<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<button className="dropdown-item">Last 1 Week</button>
							<button className="dropdown-item">Last 2 Weeks</button>
							<button className="dropdown-item">Last 1 Month</button>
							<button className="dropdown-item">Last 2 Month</button>
							<button className="dropdown-item">Entire Range</button>
						</div>
					</div>
				</div>


				
				<div style={{backgroundColor:'white', margin:'10px', borderRadius:'4px', padding:'20px', border:'1px solid lightgray', height:'350px'}}>
					
					<h3><strong>Composite Score</strong> <i style={{verticalAlign:'top', fontSize:'12px'}} className='fas fa-info-circle'></i></h3>

					<div style={{float:'left', width:'30%', height:'100%', display:'inline-block'}}>
						<svg width="250" height="250">
							<circle cx="125" cy="125" r="100" stroke-width='16' stroke='blue' fill="white" />
							<text x="50%" y="45%" text-anchor="middle" fill="black" font-size="60px" font-family="Arial" dy=".3em">4.5</text>
							<text x="50%" y="65%" text-anchor="middle" fill="black" font-size="20px" font-family="Arial" dy=".3em">GREAT</text>
						</svg>
					</div>
					
					<div style={{width:'30%', display:'inline-block', float:'left'}}>
						<svg width="200" height="200">
							<circle cx="100" cy="100" r="60" stroke-width='8' stroke='black' fill="white" />
							<text x="50%" y="45%" text-anchor="middle" fill="black" font-size="40px" font-family="Arial" dy=".3em">3.5</text>
							<text x="50%" y="65%" text-anchor="middle" fill="black" font-size="15px" font-family="Arial" dy=".3em">Goal</text>
						</svg>
					</div>


					<div style={{width:'30%', display:'inline-block'}}>
						<h6>Top 25% - 3 Agents</h6>
						<div class="progress">
							<div class="progress-bar" role="progressbar" style={{width:'25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
						<br/>
						<br/>
						<h6>Middle 50% - 3 Agents</h6>
						<div class="progress">
							<div class="progress-bar" role="progressbar" style={{width:'10%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
						<br/>
						<br/>
						<h6>Bottom 25% - 6 Agents</h6>
						<div class="progress">
							<div class="progress-bar" role="progressbar" style={{width:'50%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
						</div>

					</div>

				</div>
			




				<div style={{width:'100%', display:'inline-block'}}>
					<div style={{backgroundColor:'white', margin:'10px', borderRadius:'4px', padding:'20px', border:'1px solid lightgray', height:'650px'}}>
						
						<div style={{textAlign:'center', float:'left', width:'35%', height:'100%', display:'inline-block', borderRight:'1px solid lightgray'}}>
							<h3><strong>CSAT</strong> <i style={{verticalAlign:'top', fontSize:'12px'}} className='fas fa-info-circle'></i></h3>
							<h6 style={{color:'gray'}}>Last 7 Days</h6>

							<br/>
							<br/>
							<svg width="200" height="200">
								<circle cx="100" cy="100" r="80" stroke-width='8' stroke='black' fill="white" />
								<text x="50%" y="45%" text-anchor="middle" fill="black" font-size="40px" font-family="Arial" dy=".3em">4.5</text>
								<text x="50%" y="65%" text-anchor="middle" fill="black" font-size="15px" font-family="Arial" dy=".3em">Current</text>
							</svg>

							<br/>
							<br/>
							<h6><i class="fas fa-arrow-down"></i> Down 50%</h6>
						</div>
						
						<div style={{textAlign:'center', width:'65%', display:'inline-block'}}>
							<h6>Trend</h6>
							<LineChart/>
						
							<br/>

							<h6>Distribution</h6>
							<BarChart/>
						</div>

					</div>
				</div>




				<div style={{width:'100%', display:'inline-block'}}>
					<div style={{backgroundColor:'white', margin:'10px', borderRadius:'4px', padding:'20px', border:'1px solid lightgray', height:'650px'}}>
						
						<div style={{textAlign:'center', float:'left', width:'35%', height:'100%', display:'inline-block', borderRight:'1px solid lightgray'}}>
							<h3><strong>AMPR</strong> <i style={{verticalAlign:'top', fontSize:'12px'}} className='fas fa-info-circle'></i></h3>
							<h6 style={{color:'gray'}}>Last 7 Days</h6>

							<br/>
							<br/>
							<svg width="200" height="200">
								<circle cx="100" cy="100" r="80" stroke-width='8' stroke='black' fill="white" />
								<text x="50%" y="45%" text-anchor="middle" fill="black" font-size="40px" font-family="Arial" dy=".3em">3.5min</text>
								<text x="50%" y="65%" text-anchor="middle" fill="black" font-size="15px" font-family="Arial" dy=".3em">Current</text>
							</svg>

							<br/>
							<br/>
							<h6><i class="fas fa-arrow-down"></i> Down 50%</h6>
						</div>
						
						<div style={{textAlign:'center', width:'65%', display:'inline-block'}}>
							<h6>Trend</h6>
							<LineChart/>
						
							<br/>

							<h6>Distribution</h6>
							<BarChart/>
						</div>

					</div>
				</div>



				<div style={{width:'100%', display:'inline-block'}}>
					<div style={{backgroundColor:'white', margin:'10px', borderRadius:'4px', padding:'20px', border:'1px solid lightgray', height:'650px'}}>
						
						<div style={{textAlign:'center', float:'left', width:'35%', height:'100%', display:'inline-block', borderRight:'1px solid lightgray'}}>
							<h3><strong>Agent Yield</strong> <i style={{verticalAlign:'top', fontSize:'12px'}} className='fas fa-info-circle'></i></h3>
							<h6 style={{color:'gray'}}>Last 7 Days</h6>

							<br/>
							<br/>
							<svg width="200" height="200">
								<circle cx="100" cy="100" r="80" stroke-width='8' stroke='black' fill="white" />
								<text x="50%" y="45%" text-anchor="middle" fill="black" font-size="40px" font-family="Arial" dy=".3em">35%</text>
								<text x="50%" y="65%" text-anchor="middle" fill="black" font-size="15px" font-family="Arial" dy=".3em">Current</text>
							</svg>

							<br/>
							<br/>
							<h6><i class="fas fa-arrow-up"></i> Up 25%</h6>

						</div>
						
						<div style={{textAlign:'center', width:'65%', display:'inline-block'}}>
							<h6>Trend</h6>
							<LineChart/>
						
							<br/>

							<h6>Distribution</h6>
							<BarChart/>
						</div>

					</div>
				</div>




				<div style={{width:'100%', display:'inline-block'}}>
					<div style={{backgroundColor:'white', margin:'10px', borderRadius:'4px', padding:'20px', border:'1px solid lightgray', height:'650px'}}>
						
						<div style={{textAlign:'center', float:'left', width:'35%', height:'100%', display:'inline-block', borderRight:'1px solid lightgray'}}>
							<h3><strong>Resolution Rate</strong> <i style={{verticalAlign:'top', fontSize:'12px'}} className='fas fa-info-circle'></i></h3>
							<h6 style={{color:'gray'}}>Last 7 Days</h6>

							<br/>
							<br/>
							<svg width="200" height="200">
								<circle cx="100" cy="100" r="80" stroke-width='8' stroke='black' fill="white" />
								<text x="50%" y="45%" text-anchor="middle" fill="black" font-size="40px" font-family="Arial" dy=".3em">75%</text>
								<text x="50%" y="65%" text-anchor="middle" fill="black" font-size="15px" font-family="Arial" dy=".3em">Current</text>
							</svg>


							<br/>
							<br/>
							<h6><i class="fas fa-arrow-up"></i> Up 10%</h6>


						</div>
						
						<div style={{textAlign:'center', width:'65%', display:'inline-block'}}>
							<h6>Trend</h6>
							<LineChart/>
						
							<br/>

							<h6>Distribution</h6>
							<BarChart/>
						</div>

					</div>
				</div>



			</div>
			</div>
		)
	}

}


export default Overview