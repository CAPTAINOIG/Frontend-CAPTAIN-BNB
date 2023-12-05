import React, { useState } from 'react'
import Perks from './Perks'
import axios from 'axios'
import gif from '../assets/image/gif.gif'
import Cloud from './Cloud'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
// import { TypeAnimation } from 'react-type-animation'


const Hosting = () => {
  const [nameOfHost, setNameOfHost] = useState("")
  const [title, setTitle] = useState("")
  const [address, setAddress] = useState("")
  const [description, setDescription] = useState("")
  const [perks, setPerks] = useState([])
  const [extraInfo, setExtraInfo] = useState("")
  const [maxGuests, setMaxGuests] = useState(1)
  const [bed, setBed] = useState(1)
  const [bath, setBath] = useState(1)
  const [bedroom, setBedroom] = useState(1)
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(100000)
  const [message, setMessage] = useState("")




  let endpoint = 'http://localhost:3000/user/place'
  // let endpoint = 'https://captain-bnb.onrender.com/user/place'
  
  async function savePlace(e) {
    e.preventDefault();
    if (
      nameOfHost === '' ||
      title === '' ||
      address === '' ||
      description === '' ||
      perks === ''
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fill all the required inputs!',
      });
    } else {
      setLoading(true);
      const placeData = {
        nameOfHost,
        title,
        address,
        description,
        perks,
        extraInfo,
        maxGuests,
        bed,
        bath,
        bedroom,
        price,
      };
      axios
        .post(endpoint, placeData)
        .then((response) => {
          const { status, message, result } = response.data;
        if (status) {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: message,
          });
          setMessage(message);
          setLoading(false);
          // Clear the form inputs if needed
          // setNameOfHost('');
          // setTitle('');
          // setAddress('');
          // setDescription('');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
          });
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'An error occurred. Please try again later.',
        });
      });
  }
}

  function inputHeader(text) {
    return (
      <h2 className="text-2xl mt-4">{text}</h2>
    );
  }
  function inputDescription(text) {
    return (
      <p className="text-gray-500 text-sm">{text}</p>
    );
  }


  function preInput(header, description) {
    return (
      inputHeader(header),
      inputDescription(description)
    );
  }


  return (
    <div className='absolute font-serif text-pink-800' id='host'>


      <form onSubmit={savePlace} className='border bg-white shadow-lg lg:w-[95%] w-[90%] p-5 mb-6 mt-[2%]  rounded-md mx-auto'>
        <h1 className='text-center font-bold text-2xl my-3'>Welcome to the Hosting page</h1>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
          <div>
            <label className='font-bold' htmlFor="">Name</label>
            {preInput('Name', 'name of host')}
            <input type="text" value={nameOfHost} onChange={ev => setNameOfHost(ev.target.value)} placeholder="name of host" className='w-[100%] border border-pink-500 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent' />
          </div>
          <div className='lg:mt-0 mt-[-20px]'>
            <label className='font-bold' htmlFor="">Title</label>
            {preInput('Title', 'Title for your place. should be short and catchy')}
            <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title, for example: My lovely apt" className='w-[100%] border border-pink-500 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent' />
          </div>
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
          <div className='lg:mt-0 mt-[20px]'>
            <label className='font-bold' htmlFor="">Address</label>
            {preInput('Address', 'Address to this place')}
            <input type="text" value={address} onChange={ev => setAddress(ev.target.value)} placeholder="address" className='w-[100%] border border-pink-500 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent' />
          </div>
          <div className='lg:mt-0 mt-[-20px]'>
            <label className='font-bold' htmlFor="">Description</label>
            {preInput('Description', 'description of the place')}
            <textarea value={description} onChange={ev => setDescription(ev.target.value)} className='w-[100%] border border-pink-500 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent' placeholder='enter the description of your place' />
          </div>
        </div>
        <label className='font-bold' htmlFor="">Perks</label>
        {preInput('Perks', 'select all the perks of your place')}
        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border border-pink-500 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent p-4">
          <Perks selected={perks} onChange={setPerks} />
        </div>
        {preInput('Extra info', 'house rules, etc')}
        <textarea className='w-[100%] border border-pink-500 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent' value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} />
        {preInput('Check in&out times', 'add check in and out times, remember to have some time window for cleaning the room between guests')}
       
          <div className='grid lg:grid-cols-5 mt-5 grid-cols-1'>
            <div className='mt-5'>
              <label className='font-bold' htmlFor="">Guests</label>
              <h3 className="mt-2">Max number of guests</h3>
              <input type="number" value={maxGuests}
                onChange={ev => setMaxGuests(ev.target.value)} className='border border-pink-500 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent lg:w-[80%] w-[100%]' />
            </div>
            <div className='mt-5'>
              <label className='font-bold' htmlFor="">Bedroom</label>
              <h3 className="mt-2">Number of bedroom</h3>
              <input type="number" value={bedroom}
                onChange={ev => setBedroom(ev.target.value)} className='border border-pink-500 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent lg:w-[90%] w-[100%]'/>
            </div>
            <div className='mt-5'>
              <label className='font-bold' htmlFor="">Bed</label>
              <h3 className="mt-2">Max number of bed</h3>
              <input type="number" value={bed}
                onChange={ev => setBed(ev.target.value)} className='border border-pink-500 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent lg:w-[90%] w-[100%]' />
            </div>
         
          <div className='mt-5'>
            <label className='font-bold' htmlFor="">Bath</label>
            <h3 className="mt-2 -mb-1">Max number of bath</h3>
            <input type="number" value={bath}
              onChange={ev => setBath(ev.target.value)} className='border border-pink-500 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent lg:w-[90%] w-[100%]' />
          </div>
          <div className='mt-5'>
          <label className='font-bold' htmlFor="">Price</label>
            <h3 className="mt-2 -mb-1">(#) Price per night</h3>
            <input type="number" value={price}
              onChange={ev => setPrice(ev.target.value)} className='border border-pink-500 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent lg:w-[90%] w-[100%]'/>
          </div>
        </div>
        <Cloud />
        <div>{message}</div>
        <div className='text-center  bg-pink-800 rounded'>
        <button type='submit' className='bg-pink-800 text-white rounded  lg:mt-2 lg:p-3 p-2 lg:w-[100%] w-[100%]'>
        {
          loading ? <img src={gif} alt="" width={25} className='mx-auto' /> : 'SUBMIT'
        }
      </button>
        </div>

      </form>
    </div>
  )
}

export default Hosting