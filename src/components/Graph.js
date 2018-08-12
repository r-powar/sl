/**
 * Created by rpowar on 8/11/18.
 */
import React, {Component} from 'react';
import {Line, Bar} from 'react-chartjs-2';

class Graph extends Component {

    constructor(props){
        super(props)
    }

    render() {
        let graphData = this.props.graphData.sales;
        const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Retail Sales',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: []
                }
            ]
        };

        graphData.forEach(function (val) {
           data.datasets[0].data.push(val.retailSales);
        });


        const options = {

        };

        return (
            <div className="col-sm-8 graph">
                <Bar data={data} options={options}/>
            </div>
        )
    }
}

export default Graph;