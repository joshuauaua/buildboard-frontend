import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { myEventsList } from "../components/calendarPage/EventsList";
import CalendarHeader from "../components/calendarPage/CalendarHeader";
import NewCustomSidebar from "../components/navbar/NewCustomSidebar";
import "./Calendars.css";

const localizer = momentLocalizer(moment);




export default function Calendars() {
  const [view, setView] = useState("month");
  const [date, setDate] = useState(new Date());

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const handleNavigate = (newDate) => {
    setDate(newDate);
  };

  return (

    <>
    <NewCustomSidebar />
    <CalendarHeader />


    <main  className="calendar-main" style={{ height: 800, marginleft: "16rem"}}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
        views={{ month: true, week: true, agenda: true }}
        view={view}
        onView={handleViewChange}
        date={date}
        onNavigate={handleNavigate}
        popup
        className="calendar"
      />
    </main>

    </>
  );
}