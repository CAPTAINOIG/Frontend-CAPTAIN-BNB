import React, { useEffect, useState } from 'react';
import { Leaselist } from './Leaselist';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import StarRating from './StarRating';
import Map from './Map';
import { CiMap } from 'react-icons/ci'

// Define the Arrow component
function Arrow(props) {
  const { className, onClick } = props;
  return (
    <div id='arrow'
      className={className}
      onClick={onClick}
    />
  );
}

const Lease = () => {
  const navigate = useNavigate();
  const [shuffledLeaseList, setShuffledLeaseList] = useState([]);

  useEffect(() => {
    // Shuffling the Leaselist array when the component mounts or when Leaselist changes
    const shuffleArray = (array) => {
      // Logic to shuffle the array using the Fisher-Yates shuffle algorithm
      // This function takes an array and shuffles its elements randomly
      let currentIndex = array.length, temporaryValue, randomIndex;
      // currentIndex is initialized to the length of the array. This variable represents the index of the current element being considered for shuffling.
      // temporaryValue is used to temporarily store the value of the current element being swapped.
      // randomIndex is generated randomly to select a random element from the remaining elements yet to be shuffled.

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    };

    const shuffledArray = shuffleArray([...Leaselist]);
    setShuffledLeaseList(shuffledArray);
  }, [Leaselist]);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
  };

  // Function to handle lease selection

  const leaseId = (e) => {
    navigate('/captainoigdetail');
    localStorage.setItem('lease', JSON.stringify(e));
  };

  const seeAll = () => {
    navigate('/map')
  }



  // Function to toggle display for explore button
  const explore = () => {
    const dow = document.querySelector('#dow');
    const right = document.querySelector('#right');
    if (dow && right) {
      dow.style.display = 'grid';
      right.style.display = 'none';
    }
  };

  return (
    <section>

      <div className="text-[90%] dark:bg-pink-800 bg-gray-800 hover:bg-red-900 dark:hover:bg-gray-500 rounded-full fixed lg:mt-[30%] mt-[120%] lg:ms-[45%] ms-28 justify-center z-50 flex">
        <button onClick={seeAll} className='p-3  text-white -bottom-0 -z-[100px]'>show map</button>
        <span className='mt-4 me-2'><CiMap size={20} className='align-items-center  text-white' /></span>
      </div>
      <div className='grid text-[90%] lg:grid-cols-4 md:grid-cols-2 mb-5 grid-cols-1 p-5 gap-5 dark:bg-gray-900 lg:mt-[11%] mt-[25%]  font-serif'>
        {shuffledLeaseList.map((item, i) => (
          <div key={i} className=''>
            <div className='container lg:mt-10 mt-10 '>
              <div className='cursor-pointer'>
                <Slider {...settings} className=''>
                  {[item.image, item.imagee, item.imager, item.imaged].map((image, index) => (
                    <div key={index} className='card'>

                      <img onClick={() => leaseId(item)} src={image} alt="" className='w-100 rounded-lg' />
                      <div className='card-body'>
                        <p className='font-bold'>{item.address}</p>
                        <p>{item.view}</p>
                        <p>{item.date}</p>
                        <p>#{item.amount} per night</p>
                        <StarRating rating={item.rating} />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        ))}
      </div>


      <Map />
      <div className='text-center my-2 dark:bg-gray-900'>
        <button id='right' onClick={explore} className='font-bold text-white rounded bg-pink-900 p-3'>Explore more</button>
      </div>

      <div id='dow' className='hidden grid lg:grid-cols-4 grid-cols-1 p-5 gap-5 dark:bg-gray-900 lg:mt-[3%] mt-[5%] font-serif'>
      {shuffledLeaseList.map((item, i) => (
        <div key={i} className=''>
          <div className='container'>
            <div className='cursor-pointer'>
              <Slider {...settings} className=''>
                {[item.image, item.imagee, item.imager, item.imaged].map((image, index) => (
                  <div key={index} className='card'>

                    <img onClick={() => leaseId(item)} src={image} alt="" className='w-100 rounded-lg' />
                    <div className='card-body'>
                      <p className='font-bold'>{item.address}</p>
                      <p>{item.view}</p>
                      <p>{item.date}</p>
                      <p>#{item.amount} per night</p>
                      <StarRating rating={item.rating} />
                    </div>
                  </div>
                ))}
                </Slider>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lease;
