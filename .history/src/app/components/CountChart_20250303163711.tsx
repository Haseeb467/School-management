'use client'
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Girls',
        uv: 47,
        fill: '',
    },
    {
        name: 'Boys',
        uv: 69,
        fill: '#83a6ed',
    }, {
        name: 'Total',
        uv: 110,
        fill: '#83a6ed',
    },
];

const CountChart = () => {


    return (
        <div className='bg-w rounded-xlw-full h-full p-4'>
            {/* Title */}
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold'>
                    Student
                </h1>
                <Image src="/more.png" alt="" width={20} height={20} />
            </div>
            {/* chart */}
            <div className='w-full h-[75%]'>
                <ResponsiveContainer >
                    <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                        <RadialBar

                            label={{ position: 'insideStart', fill: '#fff' }}
                            background
                            dataKey="uv"
                        />
                        <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
            {/* bottom */}
            <div className='flex justify-around'>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-blue-400 rounded-full'></div>
                    <h1 className='font-bold'> 12344</h1>
                    <p className='text-sm'>boys (55%)</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='w-5 h-5 bg-pink-400 rounded-full'></div>
                    <h1 className='font-bold'>12344</h1>
                    <p className='text-sm text-gray-500'>girls (55%)</p>
                </div>
            </div>

        </div>

    )
}

export default CountChart
