import React from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { myEventsList } from "../components/calendarPage/EventsList";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendars.css";

export default function Calendars() {
  const localizer = momentLocalizer(moment);

  return (
    <>

      <header className="header-content">
      <h1 className="header-title">Calendar</h1>
      </header>
      
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800, margin: "120px" }}
        views={["month", "week", "day", "agenda"]}
        defaultView="month"
        popup
        className="calendar"
      />
    </>
  );
}