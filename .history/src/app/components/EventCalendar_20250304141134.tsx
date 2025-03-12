import { useState } from 'react'

import Calendar from "react-calendar"

type ValuePiece = Date | null; 

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalendar = () => {

    const [value, onCha] = useState<Value>(null);

    return (
    <div>EventCalendar</div>
  )
}

export default EventCalendar