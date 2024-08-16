import React from 'react';
import { useEffect } from 'react';
import BigCal from './BigCalendar';
import { fetchCalendarMeals } from '../../services/calendarService';


export const CalendarPage = () => {
  const [events, setEvents] = React.useState([]);

  useEffect(() => {
    // Fetch all recipes when the component mounts
    fetchCalendarMeals()
      .then(setEvents)
      .then(
        events.map((event) => {
          console.log("event", event);
        })
      .catch((error) => {
        console.error("There was an error fetching the recipes!", error);
      });
      console.log("events, in useEffect", events);
  }, []);

  // useEffect(() => {
  //   // Fetch all recipes when the component mounts
  //   fetchCalendarMeals()
  //     .then(setEvents)
  //     .catch((error) => {
  //       console.error("There was an error fetching the recipes!", error);
  //     });
  //     console.log("events, in useEffect", events);
  // }, []);

  console.log("events, in body", events);

  return (
    <div className="mt-5 container">
      <BigCal events={events} />
    </div>
  );
}

//Testing git