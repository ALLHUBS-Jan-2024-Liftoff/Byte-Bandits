import React, {useEffect} from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { fetchCalendarMeals } from '../../services/calendarService';
import { findRecipeByUri } from "../../services/recipeService";
import { testRecipe } from './testRecipe';
import { set } from 'date-fns';


export default function NutriChart() {
  const [events, setEvents] = React.useState([]);
  const [eventRecipes, setEventRecipes] = React.useState([]);

  

  let xAxisData = [];
  let seriesData = [];
  let chartData = [];
  let dataPoint = [];
  let xAxisObj = {};
    
  const iterate = (obj) => {
    Object.keys(obj).forEach(key => {

    // console.log(`key: ${key}, value: ${obj[key]}`);

    if (typeof obj[key] === 'object' && obj[key] !== null) {

            chartData.push(obj[key]);
        }
    })
    // chartData.push(xAxisData, seriesData);
    return (chartData);
  }

  let dataToChart = iterate(testRecipe.recipe.totalDaily);

  const uriBuilder = (events) => {
    const currentEvents = events;
    const uriObject = [];
    for (let i = 0; i < currentEvents.length; i++) {
      console.log("URI for event #", currentEvents[i], encodeURIComponent(currentEvents[i].uri));
      uriObject.push(encodeURIComponent(currentEvents[i].uri));
    }
    const queryString= uriObject.join('&uri=');
    return queryString
  }

  useEffect(() => {
    // Fetch all meals when the component mounts
    fetchCalendarMeals()
      .then(setEvents)
      .catch((error) => {
        console.error("There was an error fetching the meals", error);
      });
  }, []);

  useEffect(() => {
    // Build URI String for API call
    const queryString = uriBuilder(events);
    findRecipeByUri(queryString)
      .then(response => {
        console.log("findRecipeByUri: ", response.json());
        setEventRecipes(response.json());
      })
      .catch((error) => {
        console.error("findRecipeByUri ERROR: ", error);
      });
  }, [events]);

  const chartSetting = {
    xAxis: [
      {
        label: 'Recommended Daily Intake (%)',
        min: 0,
        max: 100,
     },
    ],
    width: 800,
    height: 600,
  };

  const valueFormatter = value => `${parseFloat(value.toFixed(2))}%`

  return (        
    <div className="mt-5 px-0 container-fluid">
    <div className="card">
      <div className="card-header">Nutritional Analysis</div>
    <BarChart
      dataset={dataToChart}
      yAxis={[{ scaleType: 'band', dataKey: 'label' }]}
      series={[{ dataKey: 'quantity', valueFormatter }]}
      layout="horizontal"
      grid={{ vertical: true }}
      {...chartSetting}
    />
    </div>
    </div>
  );
}