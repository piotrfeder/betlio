import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export class LChart extends Component {
    constructor(props) {
        super(props);
        this.state = {

            charts : this.props.wykres
        }
    }
    

    render() {
       
        const wyk = this.props.wykres;

        return(
            <div className="chart">
               <LineChart width={600} height={300} data={wyk}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 0"/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r:8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>

            </div>

        )
    }

}