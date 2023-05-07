import React from 'react';
import { useNavigate } from 'react-router-dom';


const EditItem = () => {
  
 const navigate = useNavigate();
  return (
    <div>
      <form>
        <input type='text' placeholder='Name'></input>
        <input type='text' placeholder='Price'></input>
        <input type='text' placeholder='description'></input>
        <label for="img">Add an Image</label>
        <input id='img' type='image'></input>
        <input type='submit'>Submit</input>
      </form>
    </div>
  )
}

export default EditItem