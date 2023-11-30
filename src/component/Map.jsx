import React from 'react'
import Header from '../Header'
import Display from './Display'

const Map = () => {
    return (
        <>
        <Header/>
        <Display/>
            <div className="text relative">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8070397.018894812!2d3.375007931937173!3d9.006743946272378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sNigeria!5e0!3m2!1sen!2sng!4v1700822458077!5m2!1sen!2sng" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-screen border'></iframe>
            </div>
        </>
    )
}

export default Map