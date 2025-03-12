"use client"

import Image from 'next/image';
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
        <div className='flex flex-col gap-6'>
            <Calendar className="bg-white p-4 rounded-md" onChange={onChange} value={value} />
            <div className='flex items-center justify-between'>
                <h1>
                    Events
                </h1>
                <Image src={}/>
            </div>
            <div className=" flex flex-col gap-4">
                {events.map((event) => (
                    <div className='' key={event.id}>
                        <div className='flex items-center justify-center'>
                            <h1>{event.title}</h1>
                            <span>{event.time}</span>
                        </div>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventCalendar