import React from 'react'

function Stats({ number, label }) {
    return (
        <div className='flex flex-col justify-left items-start'>
            <div className='text-5xl font-extrabold font-proxima text-white'>
                {number}
            </div>
            <div className='font-proxima'>
                {label}
            </div>
        </div>
    )
}

export default Stats