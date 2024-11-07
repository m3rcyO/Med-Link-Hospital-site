import React from 'react'

function Stats({ number, label, icon }) {
    return (
        <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-white bg-opacity-20">
                {icon}
            </div>
            <div className="text-white">
                <p className="text-3xl font-bold">{number}</p>
                <p className="text-sm">{label}</p>
            </div>
        </div>

    )
}

export default Stats



// < div className = 'flex flex-col justify-left items-start gap-2' >
//         <div className='text-5xl font-extrabold font-proxima text-white'>
//             {number}
//         </div>
//         <div className='font-proxima font-[100] text-gray-950'>
//             {label}
//         </div>
//     </ >