import axios from "axios";
import { useState } from "react";


export default function PhotosUploader() {
  const [fileUpload, setFileUpload] = useState("")
  let endpoint = 'http://localhost:3000/user/upload'



  const changeFile = (e) => {
    // console.log(e.target.files[0]);
    let myImage = e.target.files[0]
    let reader = new FileReader()
    // to base 64
    reader.readAsDataURL(myImage)
    reader.onload = () => {
        console.log(reader.result);
        setFileUpload(reader.result)
    }
}

const upload = () => {
  axios.post(endpoint, { fileUpload })
      .then((response) => {
          console.log(response);
          
      })
      .catch((err) => {
          console.log(err);
          
      })
}
  
  return (
    <>
    <input type="file" id='file' className="d-none" onChange={e => changeFile(e)} />
    <div  className='bg-light' type='submit' onClick={upload}>
    upload</div>  
    </>
  );
}