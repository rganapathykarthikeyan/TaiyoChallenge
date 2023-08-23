import React from 'react'
import {Line} from 'react-chartjs-2'
import Chart from 'chart.js/auto';
import classes from './LineChart.module.css'
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

export interface ChartDatas {
    labels: string[],
    datasets: data[],
}

interface data{
    label: string,
    data: number[]
}

const LineChart = (props: any) => {
  console.log(props.data)
  return (
    <>
        <div className={classes.LineGraph}>
            <Line data={props.data} />
        </div>
    </>
  )
}

export default LineChart