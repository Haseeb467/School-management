import { useState } from 'react'

import Calendar from "react-calendar"

type ValuePiece = Date | null; 

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {

    const [value, on] = useState<Value>(null);

    return (
    <div>EventCalendar</div>
  )
}

export default EventCalendar