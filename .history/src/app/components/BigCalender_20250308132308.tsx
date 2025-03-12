"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/app/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);

    const handleOnChangeView = (selectedView: View) => {
        setView(selectedView);
    };

    return (
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            views={[Views.WORK_WEEK, Views.DAY]} // ✅ Fix view names
            view={view}
            style={{ height: "98%" }}
            onView={handleOnChangeView}
            min={new Date(2025, 3, 7, 8, 0, 0)} // ✅ Valid date (April 7)
            max={new Date(2025, 3, 7, 17, 0, 0)} // ✅ Valid date
            defaultDate={new Date(2025, 3, 7)} // ✅ Show an event day
        />
    );
};

export default BigCalendar;
