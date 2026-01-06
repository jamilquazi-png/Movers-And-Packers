import "./EPAdmin.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import {__userapiurl } from '../../API_URL.js';
import { useNavigate } from "react-router-dom";

function EPAdmin() {
  const navigate = useNavigate();
  const [output , setOutput] = useState();
  const [name , setName] = useState();
  const [email , setEmail] = useState();
  const [mobile , setMobile] = useState();
  const [city , setCity] = useState();
  const [address , setAddress] = useState();
  const [gender , setGender] = useState();
  const [users, setUserDetails]=useState([]);
   useEffect(()=>{
      axios.get(__userapiurl+ "fetch",{
        params: { "email": localStorage.getItem("email") }         
      }).then((result)=>{                  
       var users=result.data.users[0];
        setName(users.name);
        setEmail(users.email);
        setMobile(users.mobile);
        setAddress(users.address);
        setCity(users.city);
       
      }).catch((error)=>{
        console.log(error);
      });
    },[]);

  const handleSubmit=(e)=>{
   axios.patch(__userapiurl+"update",
      {"condition_obj":{"email":email},"content_obj":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}}
    ).then(()=>{
      alert("Profile edited successfully....");
      navigate("/epadmin");
    });
  };
  return (
    <>
    <div id="templatemo_content_wrapper">
      <div id="register">
        <h2>Edit Profile Here!!!</h2>
        <form >
      
      <label >Name:</label>
      <input type="text" onChange={e=>setName(e.target.value)} value={name} />
      <br/><br/>
      <label>Email:</label>
      <input type="email"  onChange={e=>setEmail(e.target.value)} value={email} readOnly="readonly"/>
      <br/><br/>
      <label >Mobile:</label>
      <input type="text" onChange={e=>setMobile(e.target.value)} value={mobile} />
      <br/><br/>
      <label>City:</label>
      <select  onChange={e=>setCity(e.target.value)} value={city} >
       <option>Select City</option>
       <option>Indore</option>
       <option>Bhopal</option>
       <option>Ujjain</option>
       </select>
      <br/><br/>
      <label>Address:</label>
      <input type="text" onChange={e=>setAddress(e.target.value)} value={address} />
      <br/><br/>
      <label>Gender:</label>
      Male<input type="radio" onChange={e=>setGender(e.target.value)} value="Male" />
      &nbsp;&nbsp;
      
      FeMale<input type="radio" onChange={e=>setGender(e.target.value)} value="FeMale" />
      <br/><br/>
    <button type="button" onClick={handleSubmit}>Submit</button>
  </form>
   </div>       
        
</div> 
    </>
  );
}

export default EPAdmin;