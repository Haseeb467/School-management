'use client'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
        present: 20,
        absent: 24,
    },
];


const AttendenceChart = () => {
    return (
        <div className='p-4 bg-white rounded h-full w-full'>
            <div>
                <h1 className='font-bold '>Attendance</h1>
            </div>
            <ResponsiveContainer width="100%" height="50%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AttendenceChart