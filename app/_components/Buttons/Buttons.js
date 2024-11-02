
import React from 'react'

function Buttons({ text }) {
    return (
        <button className={`py-2 px-3 rounded-lg font-proxima border-[1px] text-bold cursor-pointer ${text === "Contact Now" ? "bg-customTeal hover:bg-white" : "bg-white text-customTeal hover:bg-customTeal hover:text-white font-bold border-customTeal transition duration-300 "}`}>
            {text}
        </button>
    )
}

export default Buttons











