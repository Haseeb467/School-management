'use client'
import Image from "next/image"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        Income: 4000,
        Expense: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        Income: 3000,
        Expense: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',
        Income: 2000,
        Expense: 9800,
        amt: 2290,
    },
    {
        name: 'Apr',
        Income: 2780,
        Expense: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        Income: 1890,
        Expense: 4800,
        amt: 2181,
    },
    {
        name: 'June',
        Income: 2390,
        Expense: 3800,
        amt: 2500,
    },
    {
        name: 'July',
        Income: 3490,
        Expense: 4300,
        amt: 2100,
    },
    {
        name: 'Aug',
        Income: 3490,
        Expense: 4300,
        amt: 2100,
    },
    {
        name: 'Sept',
        Income: 3490,
        Expense: 4300,
        amt: 2100,
    },
    {
        name: 'Oct',
        Income: 3490,
        Expense: 4300,
        amt: 2100,
    },
];


const FinanceChart = () => {
    static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';


    return (
        <div className='p-4 bg-white rounded h-full w-full'>
            <div className='flex justify-between items-center'>
                <h1 className='font-bold mb-2'>Finance</h1>
                <Image src="/moreDark.png" alt='' width={20} height={20} />
            </div>
            <div>
                dskd
                <ResponsiveContainer width="100%" height="85%">
                    <LineChart
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
                        <Line type="monotone" dataKey="Income" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="Expense" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </div>
    )
}

export default FinanceChart