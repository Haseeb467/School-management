'use client'
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Total',
        uv: 110,
        fill: 'white',
    },
    {
        name: 'Girls',
        uv: 47,
        fill: 'pink',
    },
    {
        name: 'Boys',
        uv: 69,
        fill: 'blue',
    },
];

const CountChart = () => {


    return (
        <div className='bg-white rounded-xlw-full h-full p-4'>
            {/* Title */}
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold'>
                    Student
                </h1>
                <Image src="/more.png" alt="" width={20} height={20} />
            </div>
            {/* chart */}
            <div className='relative w-full h-[75%]'>
                <ResponsiveContainer >
                    <RadialBarChart cx="50%" cy="50%" innerRadius="30%" outerRadius="120%" barSize={20} data={data}>
                        <RadialBar

                            background
                            dataKey="uv"
                        />
                        <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src="/maleFemale.png" alt="" height={50} width={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-x-1/2 ' />
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
