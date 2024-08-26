import React, {useEffect} from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { fetchCalendarMeals } from '../../services/calendarService';
import { findRecipeByUri } from "../../services/recipeService";
import { set } from 'date-fns';


export default function NutriChart() {
  const [events, setEvents] = React.useState([]);
  const [eventRecipes, setEventRecipes] = React.useState([]);
  const [chartData, setChartData] = React.useState([]);
    
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
    // Fetch all meals when the component mounts
    fetchCalendarMeals()
      .then(events => {
        setEvents(events);
        // Build URI String for API call
        const queryString = uriBuilder(events);
        console.log("URI String: ", queryString);
        return findRecipeByUri(queryString);
      })
      .then(response => {
        console.log("findRecipeByUri: ", response.hits);
        setEventRecipes(response.hits);
      })
      .catch((error) => {
        console.error("There was an error fetching the meals or recipes", error);
      });
  }, []);

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

  const handleSelectChange = (event) => {
    const selectedRecipe = event.target.value;
    const selectedRecipeData = eventRecipes.find(recipe => recipe.recipe.label === selectedRecipe);
    const selectedRecipeTotalDaily = selectedRecipeData.recipe.totalDaily;
    console.log("Selected Recipe: ", selectedRecipe);
    const newChartData = iterate(selectedRecipeTotalDaily);
    console.log("New Chart Data: ", newChartData);
    setChartData(newChartData);
  };

  console.log("Rendering NutriChart with data: ", chartData);

  return (
    <div className="mt-5 px-0 container-fluid">
      <div className="card">
        <div className="card-header">Nutritional Analysis</div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column', // Add this line to change the direction of flex items
        }}>
          <select onChange={handleSelectChange}>
            {eventRecipes.map((recipe, index) => (
              <option key={index} value={recipe.recipe.label}>
                {recipe.recipe.label}
              </option>
            ))}
          </select>
          <BarChart
            key={chartData}
            dataset={chartData}
            yAxis={[{ scaleType: 'band', dataKey: 'label' }]}
            series={[{ dataKey: 'quantity', valueFormatter }]}
            layout="horizontal"
            grid={{ vertical: true }}
            {...chartSetting}
          />
        </div>
      </div>
    </div>
  );
}