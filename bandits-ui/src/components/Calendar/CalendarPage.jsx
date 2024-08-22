import React from 'react';
import { useEffect } from 'react';
import BigCal from './BigCalendar';
import { fetchCalendarMeals } from '../../services/calendarService.js';
import { getCurrentUser } from '../../services/AuthService.js';


export const CalendarPage = () => {
  const [events, setEvents] = React.useState([]);

  return (
    <div className="mt-5 px-0 container-fluid">
      <div className="card">
        <div className="card-header">Planned Meals</div>
        <BigCal events={events} />
      </div>
    </div>
  );
}