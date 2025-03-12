import { useState } from 'react'

import Calendar from "react-calendar"

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {

    const [value, onChange] = useState<Value>(new Date());

    return (
        <div>
            <Calendar onChange={onChange} va/>
        </div>
    )
}

export default EventCalendar