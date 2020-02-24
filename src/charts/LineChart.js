import React, {Component} from 'react';
import Chart from 'chart.js';

import { v4 as uuidv4 } from 'uuid';


class LineChart extends Component {
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


		let count = {
			"8":1,
			"9":2,
			"10":3,
			"11":4,
			"12":5,
			"13":4,
			"14":2,
			"15":7,
			"16":8,
			"17":2,
			"18":1,
			"19":3,
			"20":2,
		}

		let values = []
		for(let key in count){
			values.push(count[key])
		}


    	const labels = ['8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM']


    	//Y Axis Dataset
    	const datasets = [
    			{
	                label: 'Call Volume',

	                backgroundColor: 'lightblue',
	                borderColor: 'darkblue',
	                steppedLine:false,
	                lineTension: 0,
	                fill: true,

	                data:values,
	            }
			]



	    var lineChartConfig = {
	        type: 'line',
	        data: {
	        	labels:labels,
	        	datasets:datasets,
	        },
	        options: {
	            responsive: true,
	            
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

	            tooltips: {
	                mode: 'index',
	                intersect: false,
	            },

	            hover: {
	                mode: 'nearest',
	                intersect: true
	            },

	            scales: {
	                xAxes: [{
		            	gridLines:{
		            		drawOnChartArea: false
		            	},

	                    display: true,
	                    scaleLabel: {
	                        display: true,
	                        labelString: 'Time of Day',
	                        fontColor:'black',
	                        fontSize:12,
	                    },
	                    ticks:{
	                    	fontColor:'black',
	                    	fontSize:12,
	                    }
	                }],
	                yAxes: [{
		            	gridLines:{
		            		drawOnChartArea: false
		            	},
	                	
	                    display: true,
	                    scaleLabel: {
	                        display: true,
	                        labelString: '# of Calls',
	                       	fontColor:'black',
	                        fontSize:12,
	                    },
	                    ticks:{
	                    	fontColor:'black',
	                    	fontSize:12,
	                    }
	                }]
	            },

	        }
	    };

	    var lineChart = document.getElementById(this.state.id);
	    this.chart = new Chart(lineChart, lineChartConfig);

	}






	render(){
		return(
	        <div style={{height:'250px'}}>
				<canvas id={this.state.id}></canvas>
	        </div>
		)
	}


}



export default LineChart


