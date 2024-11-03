import React from 'react'
import Pager from '../_components/Pager/Pager'
import Video from '../_components/Video/Video'
import Servic from '../_components/Services-two/Services-two'


function page() {
    return (
        <div className='relative'>
            <Pager page="Our Services" text="Services" />
            <Video />
            <Servic />
        </div>
    )
}

export default page