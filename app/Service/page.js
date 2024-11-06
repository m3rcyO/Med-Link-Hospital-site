import React from 'react'
import Pager from '../_components/Pager/Pager'
import Video from '../_components/Video/Video'
import Servic from '../_components/Services-two/Services-two'
import TestimonialSection from '../_components/Testimonial/Testimonial'
import Subscribe from '../_components/Subscribe/Subscribe'


function page() {
    return (
        <div className='relative pb-10 bg-[#f5fbff]'>
            <Pager page="Our Services" text="Services" />
            <Video />
            <Servic />
            <TestimonialSection />
            <Subscribe />
        </div>
    )
}

export default page