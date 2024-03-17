import React, { useState } from "react";
import { Leaselist } from "./Leaselist";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRating from "./StarRating";
import Map from "./Map";
import { CiMap } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";

// Define the Arrow component
function Arrow(props) {
  const { className, onClick } = props;
  return <div id="arrow" className={className} onClick={onClick} />;
}

const Lease = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(""); // State to manage search query

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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Function to handle lease selection
  const leaseId = (e) => {
    navigate("/captainoigdetail");
    localStorage.setItem("lease", JSON.stringify(e));
  };

  const seeAll = () => {
    navigate("/map");
  };

  const filteredProducts = Leaselist.filter((item) =>
    item.address.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // console.log(filteredProducts);

  // Function to toggle display for explore button
  const explore = () => {
    const dow = document.querySelector("#dow");
    const right = document.querySelector("#right");
    if (dow && right) {
      dow.style.display = "grid";
      right.style.display = "none";
    }
  };

  return (
    <section>
      <>
        {/* Search Input */}
        <div className="flex justify-around">
          <p className="lg:mt-[14%]  mt-[35%] md:mt-[25%] lg:mb-0 mb-10 border border-pink-500 rounded-s-sm p-2 py-1 text-black  dark:text-pink-500">
            Quick Search:
          </p>
          <div className="flex lg:mt-[14%] mt-[35%] w-[100%] lg:w-[20%] bg-pink-500 md:w-[70%]  md:mt-[25%] lg:mb-0 mb-10 items-center rounded">
            <input
              className="bg-pink-500 bg-transparent outline-none border-none rounded"
              type="text"
              placeholder="Search using address..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <AiOutlineSearch className="text-white" />
          </div>
        </div>

        <div className="text-[90%] dark:bg-pink-800 bg-gray-800 hover:bg-red-900 dark:hover:bg-gray-500 rounded-full fixed lg:mt-[30%] mt-[120%] lg:ms-[45%] ms-28 justify-center z-50 flex">
          <button
            onClick={seeAll}
            className="p-3  text-white -bottom-0  -z-[100px]"
          >
            show map
          </button>
          <span className="mt-4 me-2">
            <CiMap size={20} className="align-items-center  text-white" />
          </span>
        </div>

        <div className="grid text-[90%] lg:grid-cols-4 md:grid-cols-2 mb-5 grid-cols-1 p-5 gap-5 dark:bg-gray-900 lg:mt-[-1%] mt-[2%]  font-serif">
        {filteredProducts.length == 0 ? (
          <div className="dark:text-white text-xl lg:mt-[14%] mt-[35%] lg:w-[500px] lg:ms-[450px] lg:mb-[150px]">
            Sorry, we couldn't find any results
          </div>
        ) : 
        
        
        (
          filteredProducts.map((item, i) => (
            <div key={i} className="">
              <div className="container lg:mt-5 mt-5 ">
                <div className="cursor-pointer">
                  <Slider {...settings} className="">
                    {[item.image, item.imagee, item.imager, item.imaged].map(
                      (image, index) => (
                        <div key={index} className="card">
                          <img
                            onClick={() => leaseId(item)}
                            src={image}
                            alt=""
                            className="w-100 rounded-lg"
                          />
                          <div className="card-body">
                            <p className="font-bold">{item.address}</p>
                            <p>{item.view}</p>
                            <p>{item.date}</p>
                            <p>#{item.amount} per night</p>
                            <StarRating rating={item.rating} />
                          </div>
                        </div>
                      )
                    )}
                  </Slider>
                </div>
              </div>
            </div>
          ))
          
        )}
        </div>

        <Map />

        <div className="text-center my-2 dark:bg-gray-900">
          <button
            id="right"
            onClick={explore}
            className="font-bold text-white rounded bg-pink-900 p-3"
          >
            Explore more
          </button>
        </div>

        <div
          id="dow"
          className="hidden grid lg:grid-cols-4 grid-cols-1 p-5 gap-5 dark:bg-gray-900 lg:mt-[3%] mt-[5%] font-serif"
        >
          {filteredProducts.map((item, i) => (
            <div key={i} className="">
              <div className="container">
                <div className="cursor-pointer">
                  <Slider {...settings} className="">
                    {[item.image, item.imagee, item.imager, item.imaged].map(
                      (image, index) => (
                        <div key={index} className="card">
                          <img
                            onClick={() => leaseId(item)}
                            src={image}
                            alt=""
                            className="w-100 rounded-lg"
                          />
                          <div className="card-body">
                            <p className="font-bold">{item.address}</p>
                            <p>{item.view}</p>
                            <p>{item.date}</p>
                            <p>#{item.amount} per night</p>
                            <StarRating rating={item.rating} />
                          </div>
                        </div>
                      )
                    )}
                  </Slider>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    </section>
  );
};

export default Lease;
