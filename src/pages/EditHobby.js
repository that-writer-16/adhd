import React from 'react';
import { useNavigate } from 'react-router-dom';


const EditHobby = () => {
  
 const navigate = useNavigate();
  return (
    <div>
      <form>
        <input type="text"></input>
        <label for="img">Add an Image</label>
        <input type="image"></input>
        <input type="number"></input>
        <input type="text"></input>
        <input type='submit'>Submit</input>
      </form>
    </div>
  )
}

export default EditHobby