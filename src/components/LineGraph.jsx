import React, {useEffect, useState} from 'react';
import {Chart as ChartJS, registerables} from 'chart.js'
import {Line} from 'react-chartjs-2'
import '../CSS/LineGraph.css'

const blue = "grey"

function LineGraph(props) {
    ChartJS.register(...registerables)
    const [graphData, setGraphData] = useState([]);
    const [labels, setLabels] = useState([]);

    function createMockData(){
        let data = []
        let l = []
        let val = 20
        for (let i = 0; i < 100; i++) {
            data.push(val + Math.random())
            val++
            l.push(i)
        }
        setGraphData(data)
        setLabels(l)
    }

    useEffect(()=>{
        createMockData()
    }, [])

    return (
        <section className='LineGraph'>
            <div className="line-graph__container">
                <Line
                    data={{
                        labels: labels,
                        datasets: [
                            {
                                label: '',
                                type: 'line',
                                backgroundColor: "black",
                                borderColor: "#1fafbb",
                                pointBorderColor: 'rgba(0, 0, 0, 0)',
                                pointBackgroundColor: 'rgba(0, 0, 0, 0)',
                                pointHoverBackgroundColor: '#1fafbb',
                                pointHoverBorderColor: '#1fafbb',
                                pointHoverBorderWidth: 4,
                                pointHoverRadius: 6,
                                data: graphData
                            },
                        ],
                    }}
                    options={{
                        indexAxis: 'x',
                        responsive: true,
                        maintainAspectRatio: false,
                        scales:{
                            y: {
                                display: false
                            },
                            x: {
                                display: true
                            }
                        },
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                mode: 'index',
                                axis: 'x',
                                intersect: false,
                                xAlign: 'center',
                                displayColors: false,
                                titleColor: blue,
                                backgroundColor: 'rgba(0,0,0,0)',
                                titleAlign: 'center',
                            },
                        }
                    }}
                />
            </div>
        </section>
    );
}

export default LineGraph;