import React from 'react';
import { useNavigate } from 'react-router-dom';

const Purchase = () => {
	const navigate = useNavigate();
	return (
    <div>
			<button className="btn" onClick={() => navigate(-1)}>
        <input type='image' src='/images/back.png'/>
      </button>
			<form className='Center'>
				<h2>Checkout</h2>
				<input className='input2' type='text' placeholder='First Name' required/>
				<input className='input2' type='text' placeholder='Last Name' required/><br/>
				<input className='input' type='tel' placeholder='Phone Number' required/><br/>
				<input className='input2' type='text' placeholder='Address' required/>
				<input className='input2' type='text' placeholder='Apt, suite, unit, building, etc.' required/><br/>
				<input className='input2' type='text' placeholder='City' required/>
				<select className='input3' required>
					<option value={"State"}>State</option>
					<option value={"AL"}>Alabama</option>
					<option value={"AK"}>Alaska</option>
					<option value={"AZ"}>Arizona</option>
					<option value={"AR"}>Arkansas</option>
					<option value={"CA"}>California</option>
					<option value={"CO"}>Colorado</option>
					<option value={"CT"}>Connecticut</option>
					<option value={"DE"}>Delaware</option>
					<option value={"DC"}>District of Columbia</option>
					<option value={"FL"}>Florida</option>
					<option value={"GA"}>Georgia</option>
					<option value={"HI"}>Hawaii</option>
					<option value={"ID"}>Idaho</option>
					<option value={"IL"}>Illinois</option>
					<option value={"IN"}>Indiana</option>
					<option value={"IA"}>Iowa</option>
					<option value={"KS"}>Kansas</option>
					<option value={"KY"}>Kentucky</option>
					<option value={"LA"}>Louisiana</option>
					<option value={"ME"}>Maine</option>
					<option value={"MD"}>Maryland</option>
					<option value={"MA"}>Massachusetts</option>
					<option value={"MI"}>Michigan</option>
					<option value={"MN"}>Minnesota</option>
					<option value={"MS"}>Mississippi</option>
					<option value={"MO"}>Missouri</option>
					<option value={"MT"}>Montana</option>
					<option value={"NE"}>Nebraska</option>
					<option value={"NV"}>Nevada</option>
					<option value={"NH"}>New Hampshire</option>
					<option value={"NJ"}>New Jersey</option>
					<option value={"NM"}>New Mexico</option>
					<option value={"NY"}>New York</option>
					<option value={"NC"}>North Carolina</option>
					<option value={"ND"}>North Dakota</option>
					<option value={"OH"}>Ohio</option>
					<option value={"OK"}>Oklahoma</option>
					<option value={"OR"}>Oregon</option>
					<option value={"PA"}>Pennsylvania</option>
					<option value={"RI"}>Rhode Island</option>
					<option value={"SC"}>South Carolina</option>
					<option value={"SD"}>South Dakota</option>
					<option value={"TN"}>Tennessee</option>
					<option value={"TX"}>Texas</option>
					<option value={"UT"}>Utah</option>
					<option value={"VT"}>Vermont</option>
					<option value={"VA"}>Virginia</option>
					<option value={"WA"}>Washington</option>
					<option value={"WV"}>West Virginia</option>
					<option value={"WI"}>Wisconsin</option>
					<option value={"WY"}>Wyoming</option>
				</select>
				<input className='input3' type='number' placeholder='Zip Code' required/><br/><br/>
				<input className='input' type='number' placeholder='Card Number' required/><br/>
				<input className='input2' type='text' placeholder='Name on Card' required/>
				<select className='input3' required>
					<option value={"Expiration Month"}>Expiration Month</option>
					<option value={"1"}>January</option>
					<option value={"2"}>February</option>
					<option value={"3"}>March</option>
					<option value={"4"}>April</option>
					<option value={"5"}>May</option>
					<option value={"6"}>June</option>
					<option value={"7"}>July</option>
					<option value={"8"}>August</option>
					<option value={"9"}>September</option>
					<option value={"10"}>October</option>
					<option value={"11"}>November</option>
					<option value={"12"}>December</option>
				</select>
				<select className='input3' required>
					<option value={"Expiration Year"}>Expiration Year</option>
					<option value={"2023"}>2023</option>
					<option value={"2024"}>2024</option>
					<option value={"2025"}>2025</option>
					<option value={"2026"}>2026</option>
				</select><br/>
				<input className='input3' type='submit' placeholder='' required/>
			</form>
		</div>
  )
}

export default Purchase