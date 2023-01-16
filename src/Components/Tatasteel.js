import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import Navbar from './Navbar';

class Tatasteel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }

    }

    componentDidMount() {
        const endpoint = "http://localhost:9999/companies/TATASTEEL"

        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data })
            })
    }

    transformData(data) {
        let plot_data = [];
        let x = [];
        let y = [];
        data.map(each => {
            x.push(each.Date)
            y.push(each.Open)
        })
        plot_data['x'] = x;
        plot_data['y'] = y;

        return plot_data;
    }

    render() {
        return (
            <>
                <Navbar />
                <div>
                    {console.log(this.state.data)}
                    <h1>Stock market</h1>
                    <Plot
                        data={[
                            {
                                x: this.transformData(this.state.data)['x'],
                                y: this.transformData(this.state.data)['y'],
                                mode: 'markers',
                                marker: { color: '#ff2c2c' },
                            },
                            { type: 'bar', x: this.stockChartXValues, y: this.stockChartYValues },
                        ]}
                        layout={{ width: 1500, height: 700, title: 'Stock market of tatasteel' }}
                    />
                </div>
            </>
        )
    }
}

export default Tatasteel;
