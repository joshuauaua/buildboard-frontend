import React from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { myEventsList } from "../components/calendarPage/EventsList";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function Calendars() {
  const localizer = momentLocalizer(moment);

  return (
    <>
      <h1>Calendar</h1>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 800, margin: "320px" }}
        views={["month", "week", "day", "agenda"]}
        defaultView="month"
        popup
      />
    </>
  );
}