import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import LineChart, { ChartDatas } from '../components/LineChart';
import classes from './ChartPage.module.css'
import LeafletMap from '../components/LeafletMap';

const ChartPage = () => {

  const [changeChart, setChangeChart] = useState<boolean>(false);
  const [displayContent, setdisplayContent] = useState<string>("cases")
  const getCount = async () => {
    const { data } = await axios.get('https://disease.sh/v3/covid-19/all')
    return data;
  }

  const getCountryDetails = async () => {
    const { data } = await axios.get('https://disease.sh/v3/covid-19/countries')
    return data;
  }
  const { status: statuscount, data: datacount } = useQuery({ queryKey: ["count"], queryFn: getCount })

  const { status: statuscountry, data: datacountry } = useQuery({ queryKey: ["country"], queryFn: getCountryDetails })

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

  const displayCases = () => {
    setdisplayContent("cases")
  }

  const displayRecovered = () => {
    setdisplayContent("recovered")
  }

  const displayDeath = () => {
    setdisplayContent("deaths")
  }


  useEffect(() => {
    if (statuscount === 'success') {
      setcountData({
        labels: ['cases', 'deaths', 'recovered'],
        datasets: [{
          label: "Count Recorded",
          data: [datacount.cases, datacount.deaths, datacount.recovered]
        }]
      })
    }
  }, [statuscount])

  return (
    <>
      <Sidebar></Sidebar>
      <div className={classes.title}>Chart Page</div>
      {changeChart ? (<button className={classes.btnChange} onClick={onChangeChartHandler}>Switch to Leaflet</button>) :
        (<button className={classes.btnChange} onClick={onChangeChartHandler}>Switch to Line Chart</button>)}
      {changeChart ? (
        <div>
          <div className={classes.subtitle}>Line Chart</div>
          {statuscount === 'loading' ? (
            'Loading...'
          ) : statuscount === 'error' ? (
            <span>Error</span>
          ) : (
            <><LineChart data={countData} /></>
          )}
        </div>
      ) : (
        <>
          {statuscountry === 'loading' ? (
            <div>'Loading...'</div>
          ) : statuscountry === 'error' ? (
            <span>Error</span>
          ) : (
          <>
            <div className={classes.subtitle}>Leaflet Chart</div>
            <div>
              <button className={classes.btnChangeMap} onClick={displayCases} disabled={displayContent === "cases"}>Total Cases</button>
              <button className={classes.btnChangeMap} onClick={displayRecovered} disabled={displayContent === "recovered"}>Total Recovered</button>
              <button className={classes.btnChangeMap} onClick={displayDeath} disabled={displayContent === "deaths"}>Total Deaths</button>
            </div>
            <LeafletMap countries={datacountry} casesType={displayContent} />
          </>
          )}
        </>
      )}

    </>
  )
}

export default ChartPage;