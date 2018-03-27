import React, { Component } from 'react';
import { BarChart , Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './charts.css';


export class BChart extends Component {
    constructor(props) {
        super(props);
        this.state = {

            charts : [{
                Home: parseFloat(this.props.home),
                Away: parseFloat(this.props.away),
                name: this.props.name
            }]
        }
    }
    

    render() {

       
        const wyk = this.state.charts;

        return(
            <div className="chart">
                <ResponsiveContainer width="100%" aspect={1.4} max-width={280}>
                <BarChart  data={wyk}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 0" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Home" fill="#8884d8" />
                    <Bar dataKey="Away" fill="#82ca9d" />
                    
                </BarChart>
                </ResponsiveContainer>
            </div>

        )
    }

}
