import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { XCircle } from 'react-feather';

const Cloud = () => {
  const presetKey = import.meta.env.VITE_APP_IMAGE_UPLOAD_PRESET;
  const cloudName = import.meta.env.VITE_APP_CLOUD_NAME;

  const [imageUrls, setImageUrls] = useState([]);
  const [progressBars, setProgressBars] = useState([]);


  useEffect(() => {
    const initialImageUrls = JSON.parse(localStorage.getItem('uploader')) || [];
    setImageUrls(initialImageUrls);
  }, []);

  const removeImage = (index) => {
    const updatedUrls = imageUrls.filter((_, i) => i !== index);
    setImageUrls(updatedUrls);
    localStorage.setItem('uploader', JSON.stringify(updatedUrls));
  };

  const handleInput = (event) => {
    let urls = [...imageUrls];
    let bars = [...progressBars];

    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i];
      const imageData = new FormData();
      imageData.append('file', file);
      imageData.append('upload_preset', presetKey);

      axios
        .post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, imageData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          onUploadProgress: (event) => {
            const progress = Math.round((100 * event.loaded) / event.total);
            bars[i] = progress;
            setProgressBars([...bars]);
          },
        })
        .then((res) => {
          urls.push(res.data.secure_url);
          setImageUrls([...urls]);
          localStorage.setItem('uploader', JSON.stringify(urls));
          bars[i] = 0;
          setProgressBars([...bars]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };



  return (
    <div className="flex justify-content-center bg-dark vh-100">
      <div className="lg-w-25 mt-5  lg:me-0 me-[10px] flex flex-wrap">
        <input className="cursor-pointer lg:me-[10%] me-[10px] lg:w-[50%] w-[100%]" type="file" multiple accept="*" name="image" onChange={handleInput} /> <br />
        {progressBars.map((progress, index) => (
            <div key={index} className="relative w-full h-8 mt-5 rounded-lg mb-2">
              <div
                className="absolute top-0 left-0 h-full rounded-lg bg-blue-800"
                style={{ width: `${progress}%` }}
              >
                {progress > 0 && (
                  <div className="flex justify-center items-center h-full text-white text-xs font-semibold">
                    {progress}%
                  </div>
                )}
              </div>
            </div>
        ))}
        <div className='grid lg:grid-cols-6 grid-cols-1'>
        {imageUrls.map((url, index) => (
            <div key={index} style={{ position: 'relative'}}>
            <img src={url} className="lg:w-[85%] ms-10 lg:ms-0 rounded mb-2" alt="" style={{ maxHeight: '180px' }} />
            <XCircle className='absolute lg:mt-[-92%] mt-[-87%] lg:ms-[77%] ms-[90%] z-index-10 cursor-pointer'
            onClick={() => removeImage(index)}
            color="red"
           
            />
            </div>
            ))}
            </div>
           
      </div>
     
    </div>
  );
};

export default Cloud;
