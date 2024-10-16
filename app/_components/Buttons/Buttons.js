import React from 'react'

function Button({ text }) {
    return (
        <button className='py-2 px-2 rounded-lg font-bold border-[1px] border-customTeal
         bg-white hover:bg-customTeal text-customTeal hover:text-white'>{text}
        </button >


    )
}

export default Button