import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../assets/calendar.css";

function Calender() {
  const [value, onChange] = useState(new Date());

  return (
    <Calendar className="calendar-card p-0" onChange={onChange} value={value} />
  );
}

export default Calender;
