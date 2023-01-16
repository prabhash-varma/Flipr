import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import Navbar from './Navbar';

class Stock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []
        }

    }


    componentDidMount() {
        this.fetchStock();
    }

    fetchStock() {
        const API_KEY = 'HGJWFG4N8AQ66ICD'
        const pointToThis = this;
        console.log(pointToThis);
        let StockSymbol = 'AMZN';
        let API_Call = `http://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];

        fetch(API_Call)
            .then((response) => {
                return response.json();
            })
            .then(
                function (data) {
                    console.log(data);

                    for (var key in data['Time Series (Daily)']) {
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data['Time Series (Daily)']
                        [key]['1. open']);
                    }
                    // console.log(stockChartXValuesFunction);
                    pointToThis.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartYValues: stockChartYValuesFunction
                    });
                }
            )
    }

    render() {
        return (
            <>
                <Navbar />
                <div>
                    <h1>Stock market</h1>
                    <Plot
                        data={[
                            {
                                x: this.state.stockChartXValues,
                                y: this.state.stockChartYValues,
                                type: 'scatter',
                                mode: 'lines+markers',
                                marker: { color: 'red' },
                            },
                            { type: 'bar', x: this.stockChartXValues, y: this.stockChartYValues },
                        ]}
                        layout={{ width: 720, height: 440, title: 'A Fancy Plot' }}
                    />
                </div>
            </>
        )
    }
}

export default Stock;
