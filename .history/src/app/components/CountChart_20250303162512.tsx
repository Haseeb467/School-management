import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: '18-24',
        uv: 31.47,
        pv: 2400,
        fill: '#8884d8',
    },
    {
        name: '25-29',
        uv: 26.69,
        pv: 4567,
        fill: '#83a6ed',
    },
    {
        name: '30-34',
        uv: 15.69,
        pv: 1398,
        fill: '#8dd1e1',
    },
    {
        name: '35-39',
        uv: 8.22,
        pv: 9800,
        fill: '#82ca9d',
    },
    {
        name: '40-49',
        uv: 8.63,
        pv: 3908,
        fill: '#a4de6c',
    },
    {
        name: '50+',
        uv: 2.63,
        pv: 4800,
        fill: '#d0ed57',
    },
    {
        name: 'unknow',
        uv: 6.67,
        pv: 4800,
        fill: '#ffc658',
    },
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    lineHeight: '24px',
};


const CountChart = () => {

    return (
        <div className='bg-white rounded-xlw-full h-full p-4'>
            {/* Title */}
            <div className='flex justify-between items-center'>
                <h1 className='font-semibold'>
                    Student
                </h1>
                <Image src="/public/more.png" alt="" width={20} height={20} />
            </div>
            {/* chart */}
            <div className='w-full h-['>
                <ResponsiveContainer >
                    <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                        <RadialBar

                            label={{ position: 'insideStart', fill: '#fff' }}
                            background

                            dataKey="uv"
                        />
                        <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
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
