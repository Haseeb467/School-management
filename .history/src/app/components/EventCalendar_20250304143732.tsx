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
        <div className='flex flex-col gap-5'>
            <Calendar className="bg-white p-4 rounded-md" onChange={onChange} value={value} />
            <div className='flex items-center justify-between'>
                <h1 className='text-xl font-semibold'>
                    Events
                </h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>
            <div className=" flex flex-col gap-2 ">
                {events.map((event) => (
                    <div className='p-2 rounded-md border-2 border-gray-200 border-t-4 odd:border-t- even:border-t-pink' key={event.id}>
                        <div className='flex items-center justify-between'>
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