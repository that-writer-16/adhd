import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import EditItem from '../Components/EditItem'

const EditHobby = () => {
  const navigate = useNavigate();
  const [items, setItem] = useState([]);
  const [pics, setPic] = useState([]);

  function deleteItem(){
    let newItems = items.pop();
    //items.
    setItem([items.pop()]);
  }
  function addItem(){
    setItem([...items, {name:"", description:""}]);
  }
  function addPics(){
    setPic([...pics, {src:""}]);
  }
  return (
    <div>
      <button className="btn" onClick={() => navigate(-1)}>
        <input type='image' src='/images/back.png' alt="Back Arrow"/>
      </button>
      <form id='editHobby' className='Center'>
        <input id='name' type="text" className='input2' placeholder='Hobby Name' autofocus required/>
        <input type="text" className='input2' placeholder='Price' required/><br/>
        <label>Add an Image </label> 
        <input type="file" required/><br/>
        <textarea placeholder='Description' className='input' required></textarea>
      </form>
      <div className='Center'>
        <div id='items' form='editHobby' className='Center'>
          {
            items?.map((item) => (
              <EditItem name={item.name} />
            ))
          }
          <button id='newItem' onClick={() => addItem()}>+</button>
          <button id='lessItem' onClick={() => deleteItem()}>-</button>
          <br/>
        </div>
        <input type='submit' form='editHobby'/>
      </div>
    </div>
  )
}

export default EditHobby