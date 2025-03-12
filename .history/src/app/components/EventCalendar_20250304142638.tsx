"use client"

import { useState } from 'react'
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css";


type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];


const EventCalendar = () => {

    const [value, onChange] = useState<Value>(new Date());

    return (
        <div>
            <Calendar className="bg-white p-4 rounded-md" onChange={onChange} value={value} />
            <div className="text-lg font-bold mt-4 flex flex-col gap-4">
                {events.map((event) => (
                    <div className='' key={event.id}>
                        <div className='flex items-center justify-center'>
                            <h1>{ }</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventCalendar