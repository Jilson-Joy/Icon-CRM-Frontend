import React, { Component } from 'react';
import { Chart, registerables } from 'chart.js';
import './FunnelChart.css';

Chart.register(...registerables);

class FunnelChart extends Component {
    chartRef = React.createRef();
    chartInstance = null;

    componentDidMount() {
        this.createChart();
    }

    componentDidUpdate() {
        if (this.chartInstance) {
            this.chartInstance.destroy();
        }
        this.createChart();
    }

    componentWillUnmount() {
        if (this.chartInstance) {
            this.chartInstance.destroy();
        }
    }

    createChart = () => {
        const ctx = this.chartRef.current.getContext('2d');
        const dataPoints = [
            { y: 1400, label: "Prospects" },
            { y: 1212, label: "Qualified Prospects" },
            { y: 1080, label: "Proposals" },
            { y: 665, label: "Negotiation" },
            { y: 578, label: "Final Sales" }
        ];

        const labels = dataPoints.map(point => point.label);
        const data = dataPoints.map(point => point.y);
        const backgroundColor = [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)'
        ];
        const borderColor = [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)'
        ];

        this.chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    axis: 'y',
                    label: 'Sales Analysis',
                    data: data,
                    fill: false,
                    backgroundColor: backgroundColor,
                    borderColor: borderColor,
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                const percentage = ((context.raw / dataPoints[0].y) * 100).toFixed(2);
                                return `${context.label}: ${context.raw} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });
    }

    render() {
        return (
            <div className='funnelchart'>
                <h2>Sales Analysis</h2>
                <canvas ref={this.chartRef}></canvas>
            </div>
        );
    }
}

export default FunnelChart;
