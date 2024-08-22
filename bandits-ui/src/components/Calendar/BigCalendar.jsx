import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect } from 'react';
import { fetchCalendarMeals } from '../../services/calendarService';
import { fetchMeals } from '../../services/mealService';

const localizer = momentLocalizer(moment);

console.log(fetchMeals());

export default function BigCal() {
  const [events, setEvents] = React.useState([]);

  useEffect(() => {
    // Fetch all meals when the component mounts
    fetchCalendarMeals()
      .then(setEvents)
      .catch((error) => {
        console.error("There was an error fetching the meals", error);
      });
      console.log("events, in useEffect", events);
  }, []);

  return (
    <div className="App">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor={(event) => {return new Date(event.start) }}
        endAccessor={(event) => {return new Date(event.end) }}
        style={{ height: 750 }}
      />
    </div>
  );
}