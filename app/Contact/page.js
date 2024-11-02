import React from 'react'
import Pager from '../_components/Pager/Pager'
import Form from '../_components/Form/Form'
import Faq from '../_components/Faq/Faq'
import ContactOptions from '../_components/Contact-options/Contact-options'


function page() {
    return (
        <div className='relative'>
            <Pager page="Contact Us" text="Contact" />
            <Form />
            <ContactOptions />
            <Faq />

        </div>
    )
}

export default page