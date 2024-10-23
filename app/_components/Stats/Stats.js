import React from 'react'

function Stats({ number, label }) {
    return (
        <div className='flex flex-col justify-left items-start gap-2'>
            <div className='text-5xl font-extrabold font-proxima text-white'>
                {number}
            </div>
            <div className='font-proxima font-[100] text-gray-950'>
                {label}
            </div>
        </div>
    )
}

export default Stats