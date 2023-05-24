import {React, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import EditItem from '../Components/EditItem'

const EditHobby = () => {
  
const navigate = useNavigate();

const [items, setItem] = useState([]);

function addItem(){
 setItem([...items, {name:"", description:""}]);
}
  return (
    <div id='editHobby'>
      <button className="btn" onClick={() => navigate(-1)}>
        <input type='image' src='/images/back.png' alt=""/>
      </button>
      <form>
        <label for="name">Hobby Name </label>
        <input id='name' type="text" className='input'/>
        <br />
        <label for="img">Add an Image </label> 
        <input type="file" alt="" />
        <br />
        <label for="img">Condition </label> 
        <input type="number" className='input'/>
        <br />
        <label for="img">Add an Image </label> 
        <input type="text" className='input'/>
        <br />
      </form>
      <div>
        {
          items?.map((item) => (
            <EditItem name={item.name} />
          ))
        }
        <button onClick={() => addItem()}>+</button>
      </div>
      <input type='submit' />
    </div>
  )
}

export default EditHobby