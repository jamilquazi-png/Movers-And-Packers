import './Register.css';
import {useState} from 'react';
import axios from 'axios';
import { __userapiurl } from '../../API_URL.js';

function Register() {
const [output , setOutput] = useState();
const [name , setName] = useState();
const [email , setEmail] = useState();
const [password , setpassword] = useState();
const [mobile , setMobile] = useState();
const [city , setCity] = useState();
const [address , setAddress] = useState();
const [gender , setGender] = useState();

const handleSubmit=(e)=>{
  e.preventDefault();
const userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender};
axios.post(__userapiurl+ "insert",userDetails).then(()=>{
setOutput("User register successfully....");
 setName("");
 setpassword("");
 setEmail("");
 setMobile("");
 setCity("");
 setAddress("");
 //setGender("");
}).catch(()=>{
setOutput("User register failed....");
});
};

  return (
<>   
 <div id="templatemo_content_wrapper">
	<div id="register">
   <h3>Register here!!!</h3>
   {/* <font color="blue">Hello{output}</font> */}
   <form onSubmit={handleSubmit}>
      
      <label >Name:</label>
      <input type="text"  required onChange={e=>setName(e.target.value)} value={name} />
      <br/><br/>
      <label>Email:</label>
      <input type="email"  required onChange={e=>setEmail(e.target.value)} value={email}/>
      <br/><br/>
      <label >Password:</label>
      <input type="password" required minLength="6" onChange={e=>setpassword(e.target.value)} value={password} />
      <br/><br/>
      <label >Mobile:</label>
      <input type="text" required pattern="[0-9]{10}" title="Enter 10 digit mobile number" onChange={e=>setMobile(e.target.value)} value={mobile} />
      <br/><br/>
      <label>City:</label>
      <select  required  onChange={e=>setCity(e.target.value)} value={city} >
       <option>Select City</option>
       <option>Indore</option>
       <option>Bhopal</option>
       <option>Ujjain</option>
       </select>
      <br/><br/>
      <label>Address:</label>
      <input type="text"  required onChange={e=>setAddress(e.target.value)} value={address} />
      <br/><br/>
      <label>Gender:</label>
      Male<input type="radio"   required onChange={e=>setGender(e.target.value)} name="gender" value="Male" />
      &nbsp;&nbsp;
      
      FeMale<input type="radio" required onChange={e=>setGender(e.target.value)} name="gender" value="FeMale" />
      <br/><br/>
    <button  type="submit" >Submit</button>
  </form>
  <br/>
  <font color="blue" size="4">{output}</font>
     </div>   
</div> 
 
</>
  );
}

export default Register;



