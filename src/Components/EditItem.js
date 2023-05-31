import React from 'react';

const EditItem = () => {
  return (
    <div id='editItem'>
      <form>
        <input type='text' placeholder='Name' className='input' autofocus/>
        <input type='number' placeholder='Condition' className='input2'/>
        <input type='number' placeholder='Price' className='input2'/><br/>
        <label for="img"> Add an Image</label> 
        <input type="file" required/><br/>
        <textarea placeholder='Description' className='input'></textarea>

      </form>
    </div>
  )
}

export default EditItem