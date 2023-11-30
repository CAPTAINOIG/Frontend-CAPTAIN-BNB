import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Leasedetailheader from './Leasedetailheader';
import Guestfavorite from './Guestfavorite';
import Reserve from './Reserve';


const Leasedetail = () => {
  const [id, setId] = useState("")
  const [address, setAddress] = useState("")
  const [amount, setAmount] = useState("")
  const [image, setImage] = useState("")
  const [imagee, setImagee] = useState("")
  const [imaged, setImaged] = useState("")
  const [imager, setImager] = useState("")
  const [guests, setGuest] = useState("")
  const [bedroom, setBedroom] = useState("")
  const [bed, setBed] = useState("")
  const [bath, setBath] = useState("")


  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div id='arrow'
            className={className}
            // style={{ ...style, display: "block", background: "red", }}
            onClick={onClick}
        />
    );
}



    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        // slidesToShow: 3,
        slidesToScroll: 1,
        
        // initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,

                }
            },

        ]
        //   };
    }

  let leaseDetails = JSON.parse(localStorage.getItem('lease'))
  // console.log(leaseDetails);
  useEffect(() => {
    setId(leaseDetails.id)
    setAddress(leaseDetails.address)
    setAmount(leaseDetails.amount)
    setImage(leaseDetails.image)
    setImagee(leaseDetails.imagee)
    setImaged(leaseDetails.imaged)
    setImager(leaseDetails.imager)
    setGuest(leaseDetails.guests)
    setBedroom(leaseDetails.bedroom)
    setBed(leaseDetails.bed)
    setBath(leaseDetails.bath)

  }, [])

  return (
    <>
     <Leasedetailheader/>
      

      <section className='px-10'>
        <div className='text-2xl font-bold font-serif lg:ms-20'>{address}</div>
       <div className='grid grid-cols-2 px-20 lg:mt-4'>
       <img className='rounded-lg lg:block hidden' src={image} alt="" />
       <div id='detail' className='grid lg:grid-cols-2 px-3 lg:gap-5'>
       <img className='rounded-lg' src={image} alt="" />
       <img className='rounded-lg' src={imagee} alt="" />
       <img className='rounded-lg' src={imaged} alt="" />
       <img className='rounded-lg' src={imager} alt="" />
       </div>
       </div>
       <p className='lg:ms-20 font-bold font-serif text-2xl mt-5'>Entire Villa in {address}</p>
       <div className='flex gap-5 text-sm lg:ms-20 my-5 font-serif'>
          <p>{guests} 😎 Guests</p>
          <p>{bedroom} 🌳Bedroom</p>
          <p>{bed} 🍀Bed</p>
          <p>{bath}🚿 Bath</p>
       </div>
      </section>

      <section className='detailsm p-5'>
      <Slider {...settings} className=''>
                                
      <div className='card'>
      
      <div className='grid lg:grid-cols-4 gap-5'>
        <img className='rounded-lg' src={image} alt="" />
      </div>
      </div>
      <div className='card'>
      <div className='grid lg:grid-cols-4 gap-5'>
        <img className='rounded-lg' src={imagee} alt="" /> 
      </div>
      </div>
      <div className='card'>
      <div className='grid lg:grid-cols-4 gap-5'>
        <img className='rounded-lg' src={imaged} alt="" />
      </div>
      </div>
      <div className='card'>
      <div className='grid lg:grid-cols-4 gap-5'>
        <img className='rounded-lg' src={imager} alt="" />
      </div>
      </div>
  </Slider>

      </section>

    <Guestfavorite/>
    <Reserve/>
    </>
  )
}

export default Leasedetail