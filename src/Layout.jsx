import React from 'react'
import Header from './Header'
import Display from './component/Display'
import Lease from './component/Lease'
import Inspiration from './component/Inspiration'
import Support from './component/Support'
// import DemoCarousel from './component/DemoCarousel'

const Layout = () => {
    return (
        <section>
            <div className=' fixed top-0 bg-white dark:bg-gray-900 z-20 text-[90%] dark:text-white'>
                <Header />
                <Display />
            </div>
            <div className='dark:bg-gray-900 dark:text-white'>
                <Lease />
                <Inspiration />
                <Support />
            </div>

        </section>
    )
}

export default Layout