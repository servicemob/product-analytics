import React, {Component} from 'react';
import Chart from 'chart.js';

import { v4 as uuidv4 } from 'uuid';



class BarChart extends Component {
	constructor(){
		super()

		this.state = {
			id:uuidv4()
		}
	}

	componentDidMount(){
		this.createChart()
	}


	createChart(data){

		const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
		let values = [1,2,4,4,3,1,1]

    	const color = 'darkblue'
    	const datasets = [
		            {
		                backgroundColor: color,
		                data: values
		            }, 
		        ]


	   
	    let barChart = document.getElementById(this.state.id)
	   
	    this.chart = new Chart(barChart, {
	        type: 'bar',
	        data: {
		        labels: labels,
		        datasets: datasets,
	    	},
	        options: {
	        	response:true,

	           	maintainAspectRatio: false,
	           	layout:{
	           		padding:{
	           			left:20,
	           			right:20,
	           			top:20,
	           			bottom:20,
	           		}
	           	},


	            legend: {
	                display:false,
	            },

		        scales: {
		            yAxes: [{
		            	gridLines:{
		            		drawOnChartArea: false
		            	},
		                ticks: {
		                    fontColor: "black",
		                    fontSize: 12,
		                    beginAtZero: true
		                }
		            }],
		            xAxes: [{
		            	gridLines:{
		            		drawOnChartArea: false
		            	},

		                ticks: {
		                    fontColor: "black",
		                    fontSize: 12,
		                    beginAtZero: true
		                }
		            }]
		        }

	        }
	    })



	}




	calc(data){
		let days = [0,0,0,0,0,0,0]

		for(let i=0; i<data.length; i++){
			let day = Number(data[i].talkdesk_day_of_week_c[0]) - 1
			days[day] ++
		}

		//Shift Sundays to front
		let Sunday = days.pop()
		days.unshift(Sunday)

		return days
	}




	render(){
		return(
	        <div style={{height:'250px'}}>
				<canvas id={this.state.id}></canvas>
	        </div>
		)
	}

}


export default BarChart






