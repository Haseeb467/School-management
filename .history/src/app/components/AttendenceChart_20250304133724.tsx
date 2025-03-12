'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'mon',
        Present: 90,
        Absent: 30,
    },
    {
        name: 'tue',
        Present: 80,
        Absent: 24,
    },
    {
        name: 'wed',
        Present: 40,
        Absent: 64,
    },
    {
        name: 'thu',
        Present: 60,
        Absent: 40,
    },
    {
        name: 'fri',
        Present: 50,
        Absent: 24,
    },
    {
        name: 'sat',
        Present: 80,
        Absent: 30,
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
                        height={200}
                        data={data}
                        margin={{
                            top: 5,
                            right: 40,
                            left: -10,
                            bottom: 5,
                        }}
                        barSize={20}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} />
                        <Tooltip content={}/>
                        <Legend align="left" verticalAlign='top' wrapperStyle={{ paddingBottom: "25px", paddingLeft: "10px" }} />
                        <Bar dataKey="Present" fill="#8884d8" legendType='circle' radius={[10, 10, 0, 0]} />
                        <Bar dataKey="Absent" fill="#82ca9d" legendType='circle' radius={[10, 10, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default AttendenceChart