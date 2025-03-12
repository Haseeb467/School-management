'use client'

import Image from "next/image"

const FinanceChart = () => {
    return (
        <div className='p-4 bg-white rounded h-full w-full'>
                    <div className='flex justify-between items-center'>
                        <h1 className='font-bold mb-2'>Finance</h1>
                        <Image src="/moreDark.png" alt='' width={20} height={20} />
                    </div>

        </div>
    )
}

export default FinanceChart