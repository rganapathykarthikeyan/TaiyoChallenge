import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import LineChart, { ChartDatas } from '../components/LineChart';
import classes from './ChartPage.module.css'

const ChartPage = () => {

  const [changeChart, setChangeChart] = useState<boolean>(false)
  const getCount = async () => {
    const {data} = await axios.get('https://disease.sh/v3/covid-19/all')
    return data;
  }
  const {status, error, data} = useQuery({queryKey: ["count"], queryFn: getCount})

  const [countData, setcountData] = useState<ChartDatas>({
    labels: ['cases', 'deaths', 'recovered'],
      datasets: [{
        label: "Count Recorded",
        data: []
      }]
  })

  const onChangeChartHandler = () => {
    setChangeChart(!changeChart)
  }


  useEffect(()=>{
    if(status === 'success'){
      setcountData({
        labels: ['cases', 'deaths', 'recovered'],
        datasets: [{
          label: "Count Recorded",
          data: [data.cases, data.deaths, data.recovered]
        }]
      })
    }
  },[status])
  

  console.log(data)
  return (
    <>
    <Sidebar></Sidebar>
    <div className={classes.title}>Chart Page</div>
    {changeChart ? (<button className={classes.btnChange} onClick={onChangeChartHandler}>Switch to Leaflet</button>): 
    (<button className={classes.btnChange} onClick={onChangeChartHandler}>Switch to Line Chart</button>)}
    {changeChart ? (
      <div>
        <div className={classes.subtitle}>Line Chart</div>
        {status === 'loading' ? (
            'Loading...'
          ) : status === 'error' ? (
            <span>Error</span>
          ) : (
            <><LineChart data={countData} /></>
        )}
      </div>
    ): (
      <>
        <div className={classes.subtitle}>Leaflet Chart</div>
      </>
    )}
    
    </>
  )
}

export default ChartPage;