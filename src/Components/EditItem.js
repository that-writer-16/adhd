import React from 'react';

const EditItem = () => {
  return (
    <div id='editItem'>
      <form>
        <input type='text' placeholder='Name' />
        <input type='text' placeholder='Price' />
        <input type='text' placeholder='description' />
        <label for="img">Add an Image</label>
        <input id='img' type='image' alt=''/>
        <input type='submit' />Submit
      </form>
    </div>
  )
}

export default EditItem