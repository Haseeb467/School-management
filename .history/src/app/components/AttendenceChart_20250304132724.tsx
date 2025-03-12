'use client'
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'mon',
        present: 20,
        absent: 24,
    },
    {
        name: 'tue',
        present: 20,
        absent: 24,
    },
    {
        name: 'wed',
        present: 20,
        absent: 24,
    },
    {
        name: 'thu',
        present: 20,
        absent: 24,
    },
    {
        name: 'fri',
        present: 20,
        absent: 24,
    },
    {
        name: 'sat',
        Present: 20,
        absent: 24,
    },
];


const AttendenceChart = () => {
    return (
        <div className='p-4 bg-white rounded h-full w-full'>
            <div>
                <h1 className='font-bold mb-2'>Attendance</h1>
            </div>
            <div className='h-full w-full'>
                <ResponsiveContainer width="100%" height="82%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 40,
                            left: -10,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend align="left" verticalAlign='top' wrapperStyle={{ paddingBottom: "25px", paddingLeft: "10px" }} />
                        <Bar dataKey="Present" fill="#8884d8" legendType='circle' />
                        <Bar dataKey="Absent" fill="#82ca9d" legendType='circle' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default AttendenceChart