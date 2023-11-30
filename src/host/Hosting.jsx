import React, { useState } from 'react'
import Perks from './Perks'
import axios from 'axios'
import PhotosUploader from './PhotosUploader'
// import { TypeAnimation } from 'react-type-animation'


const Hosting = () => {
  const [nameOfHost, setNameOfHost] = useState("")
  const [title, setTitle] = useState("")
  const [address, setAddress] = useState("")
  const [description, setDescription] = useState("")
  const [perks, setPerks] = useState([])
  const [extraInfo, setExtraInfo] = useState("")
  const [maxGuests, setMaxGuests] = useState(1)
  const [bed, setBed] = useState("")
  const [bath, setBath] = useState("")
  const [bedroom, setBedroom] = useState("")
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [price, setPrice] = useState(100000)




  let endpoint = 'http://localhost:3000/user/place'

  async function savePlace(e) {
    e.preventDefault();
    const placeData = {
      nameOfHost,
      title, address,
      description, perks, extraInfo, addedPhotos,
      maxGuests, bed, bath, bedroom, price,
    };
    console.log(placeData);
    axios.post(endpoint, placeData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
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
    <div className='absolute' id='host'>


      <form onSubmit={savePlace} className='border bg-white shadow-lg lg:w-[55%] w-[90%] p-5 mb-6 mt-[10%]  rounded-md mx-auto'>
        <div className='flex gap-10'>
          <div>
            <label className='font-bold' htmlFor="">Name</label>
            {preInput('Name', 'name of host')}
            <input type="text" value={nameOfHost} onChange={ev => setNameOfHost(ev.target.value)} placeholder="name of host" />
          </div>
          <div>
            <label className='font-bold' htmlFor="">Title</label>
            {preInput('Title', 'Title for your place. should be short and catchy as in advertisement')}
            <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title, for example: My lovely apt" />
          </div>
        </div>
        <div className='flex gap-10'>
          <div>
            <label className='font-bold' htmlFor="">Address</label>
            {preInput('Address', 'Address to this place')}
            <input type="text" value={address} onChange={ev => setAddress(ev.target.value)} placeholder="address" />
          </div>
          <div>
            <label className='font-bold' htmlFor="">Description</label>
            {preInput('Description', 'description of the place')}
            <textarea value={description} onChange={ev => setDescription(ev.target.value)} />
          </div>
        </div>
        <label className='font-bold' htmlFor="">Perks</label>
        {preInput('Perks', 'select all the perks of your place')}
        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <Perks selected={perks} onChange={setPerks} />
        </div>
        {preInput('Extra info', 'house rules, etc')}
        <textarea className='w-[100%]' value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} />
        {preInput('Check in&out times', 'add check in and out times, remember to have some time window for cleaning the room between guests')}
        <div className="grid gap-2 grid-cols-2 md:grid-cols-2">
          <div>
            <label className='font-bold' htmlFor="">Guests</label>
            <h3 className="mt-2 -mb-1">Max number of guests</h3>
            <input type="number" value={maxGuests}
              onChange={ev => setMaxGuests(ev.target.value)} />
          </div>
          <div>
            <label className='font-bold' htmlFor="">Bedroom</label>
            <h3 className="mt-2 -mb-1">number of bedroom</h3>
            <input type="number" value={bedroom}
              onChange={ev => setBedroom(ev.target.value)} />
          </div>
          <div>
            <label className='font-bold' htmlFor="">Bed</label>
            <h3 className="mt-2 -mb-1">Max number of bed</h3>
            <input type="number" value={bed}
              onChange={ev => setBed(ev.target.value)} />
          </div>
          <div>
            <label className='font-bold' htmlFor="">Bath</label>
            <h3 className="mt-2 -mb-1">Max number of bath</h3>
            <input type="number" value={bath}
              onChange={ev => setBath(ev.target.value)} />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Price per night</h3>
            <input type="number" value={price}
              onChange={ev => setPrice(ev.target.value)} />
          </div>
        </div>
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
        <button className="primary my-4">Save</button>
      </form>
    </div>
  )
}

export default Hosting