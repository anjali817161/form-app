import React, { useState } from 'react';
import './form.css';



const AddPropertyForm = () => {
  const [registeredBrandname, setRegisteredBrandname] = useState('');
  const [numberOfProperties, setNumberOfProperties] = useState('');
  const [propertyName, setPropertyName] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
    const formData = {
      registeredBrandname,
      numberOfProperties,
      propertyName,
      propertyType,
      phoneNumber,
      emailAddress,
      address,
      state,
      city,
      pincode,
    };
    console.log(formData); // You can handle this data as needed
  };

  return (

    <div className="form-container">

      <h1>Property Setup</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Ov5woJ7T_60lxX032BPfw1DRZv8-YM_DqC9r5vO0aEwBcrMZgQy4ceJxkzEBfbU9YYM&usqp=CAU" alt="Logo" height={100} width={150} />


      <h2><u>Business Information:</u></h2>
    <form onSubmit={handleSubmit}>
    <div>
        <label>
          Registered Brand Name:
          <input type="text" value={registeredBrandname} onChange={(e) => setRegisteredBrandname(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Number of Properties:
          <input type="number" value={numberOfProperties} onChange={(e) => setNumberOfProperties(e.target.value)} required />
        </label>
      </div>
      {/* Similar structures for other fields */}
      <div>
        <label>
          Property Name:
          <input type="text" value={propertyName} onChange={(e) => setPropertyName(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Property type:
          <input type="text" value={propertyType} onChange={(e) => setPropertyType(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Phone Number:
          <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Email Address:
          <input type="emai" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          state:
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          City:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
        </label>
      </div>
      <div>
        <label>
          pincode
          <input type="number" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default AddPropertyForm;
