import React from 'react';
import { useEffect } from 'react';
import BigCal from './BigCalendar';
import { fetchCalendarMeals } from '../../services/mealService';

export const CalendarPage = () => {
  const [events, setEvents] = React.useState([]);

  useEffect(() => {
    // Fetch all recipes when the component mounts
    fetchCalendarMeals()
      .then(setEvents)
      .catch((error) => {
        console.error("There was an error fetching the schedule!", error);
      });
  }, []);


  return (
    <div className="mt-5 container">
      <BigCal events={events} />
    </div>
  );
}