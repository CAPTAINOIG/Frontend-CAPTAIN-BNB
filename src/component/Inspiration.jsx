import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineDown } from 'react-icons/ai'

const Inspiration = () => {
    const showMore = () => {
        document.querySelector('#showMore').style.display = 'none'
        document.querySelector('#more').style.display = 'block'
        document.querySelector('#more2').style.display = 'grid'
        document.querySelector('#more3').style.display = 'grid'
        document.querySelector('#more4').style.display = 'grid'
        document.querySelector('#more5').style.display = 'grid'
        document.querySelector('#more6').style.display = 'grid'
        document.querySelector('#more7').style.display = 'grid'
        document.querySelector('#more8').style.display = 'grid'
        document.querySelector('#more9').style.display = 'grid'
        document.querySelector('#more10').style.display = 'grid'




    }
    return (
        <div className='mt-5 bg-pink-900 text-white p-5'>
            <div className='font-bold mb-2 text-2xl'>Inspiration for future getaways</div>
            <div className='grid lg:grid-cols-12 grid-cols-1 md:grid-cols-2'>
                <p className='lg:border-b-2 text-xl lg:my-0 my-2 border-white'>Popular</p>
                <Link to="">Arts & Culture</Link>
                <Link to="">Outdoors</Link>
                <Link to="">Mountain</Link>
                <Link to="">Beach</Link>
                <Link to="">Unique stays</Link>
                <Link to="">Categories</Link>
                <Link to="">Things to do</Link>
                <Link to="">captain-bnb</Link>
            </div>
            <hr className='bg-black' />

            <div className='grid lg:grid-cols-6 grid-cols-1 lg:mt-8 mt-8'>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Canmore</p>
                    <p>Apartment rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Benalmadena</p>
                    <p>Apartment rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Marbella</p>
                    <p>Beach House rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Mijas</p>
                    <p>Vacation rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Prescott</p>
                    <p>Pet-friendly rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Scotsdale</p>
                    <p>Apartment rentals</p>
                </Link>
            </div>



            <div className='grid lg:grid-cols-6 grid-cols-1 mt-8'>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Tucson</p>
                    <p>Apartment rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Jasper</p>
                    <p>Vacation rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Mountain views</p>
                    <p>Vacation rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Devonport</p>
                    <p>Cottage rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Mallaoota</p>
                    <p>Vacation rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Ibiza</p>
                    <p>Apartment rentals</p>
                </Link>
            </div>


            <div className='grid lg:grid-cols-6 grid-cols-1 mt-8'>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Anaheim</p>
                    <p>Condo rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Monterey</p>
                    <p>Apartment rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Paso Rubles</p>
                    <p>Cottage rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Santa Barbara</p>
                    <p>Beachfront rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
                <Link onClick={showMore} id='showMore' className='lg:mt-0 mt-5 hover:border-b-2' to="">
                    Show more ⬇
                </Link>


                <div id='more' className='hidden'>
                    <Link className='lg:mt-0 mt-5' to="">
                        <p>La Serena</p>
                        <p>Condo rentals</p>
                    </Link>


                </div>

            </div>

            <div id='more2' className='hidden grid lg:grid-cols-6 grid-cols-1 mt-8'>

                <Link className='lg:mt-0 mt-5' to="">
                    <p>Anaheim</p>
                    <p>Condo rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Monterey</p>
                    <p>Apartment rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Paso Rubles</p>
                    <p>Cottage rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Santa Barbara</p>
                    <p>Beachfront rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
            </div>

            <div id='more2' className='hidden grid lg:grid-cols-6 grid-cols-1 mt-8'>

                <Link className='lg:mt-0 mt-5' to="">
                    <p>Anaheim</p>
                    <p>Condo rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Monterey</p>
                    <p>Apartment rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Paso Rubles</p>
                    <p>Cottage rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Santa Barbara</p>
                    <p>Beachfront rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
            </div>

            <div id='more3' className='hidden grid lg:grid-cols-6 grid-cols-1 mt-8'>

                <Link className='lg:mt-0 mt-5' to="">
                    <p>Anaheim</p>
                    <p>Condo rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Monterey</p>
                    <p>Apartment rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Paso Rubles</p>
                    <p>Cottage rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Santa Barbara</p>
                    <p>Beachfront rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
            </div>

            <div id='more4' className='hidden grid lg:grid-cols-6 grid-cols-1 mt-8'>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Anaheim</p>
                    <p>Condo rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Monterey</p>
                    <p>Apartment rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Paso Rubles</p>
                    <p>Cottage rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Santa Barbara</p>
                    <p>Beachfront rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
            </div>

            <div id='more5' className='hidden grid lg:grid-cols-6 grid-cols-1 mt-8'>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Anaheim</p>
                    <p>Condo rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Monterey</p>
                    <p>Apartment rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Paso Rubles</p>
                    <p>Cottage rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Santa Barbara</p>
                    <p>Beachfront rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
            </div>


            <div id='more6' className='hidden grid lg:grid-cols-6 grid-cols-1 mt-8'>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Anaheim</p>
                    <p>Condo rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Monterey</p>
                    <p>Apartment rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Paso Rubles</p>
                    <p>Cottage rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Santa Barbara</p>
                    <p>Beachfront rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
            </div>

            <div id='more7' className='hidden grid lg:grid-cols-6 grid-cols-1 mt-8'>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Anaheim</p>
                    <p>Condo rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Monterey</p>
                    <p>Apartment rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Paso Rubles</p>
                    <p>Cottage rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Santa Barbara</p>
                    <p>Beachfront rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
            </div>



            <div id='more8' className='hidden grid lg:grid-cols-6 grid-cols-1 mt-8'>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Anaheim</p>
                    <p>Condo rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Monterey</p>
                    <p>Apartment rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Paso Rubles</p>
                    <p>Cottage rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Santa Barbara</p>
                    <p>Beachfront rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
            </div>

            <div id='more9' className='hidden grid lg:grid-cols-6 grid-cols-1 mt-8'>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Anaheim</p>
                    <p>Condo rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Monterey</p>
                    <p>Apartment rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Paso Rubles</p>
                    <p>Cottage rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Santa Barbara</p>
                    <p>Beachfront rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
            </div>

            <div id='more10' className='hidden grid lg:grid-cols-6 grid-cols-1 mt-8'>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Anaheim</p>
                    <p>Condo rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Monterey</p>
                    <p>Apartment rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Paso Rubles</p>
                    <p>Cottage rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Santa Barbara</p>
                    <p>Beachfront rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
                <Link className='lg:mt-0 mt-5' to="">
                    <p>Sonoma</p>
                    <p>Beach house rentals</p>
                </Link>
            </div>

            <hr  className='mt-10'/>
        </div>
        
    )
}

export default Inspiration