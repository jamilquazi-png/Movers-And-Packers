import "./CPUser.css";
import {useState} from 'react';
import axios from 'axios';
import { __userapiurl } from '../../API_URL.js';
import { useNavigate } from "react-router-dom";

function CPUser() {
  const navigate = useNavigate();
  const [output , setOutput] = useState();
  const [email] = useState(localStorage.getItem("email"));
  const [opassword , setOldPassword] = useState();
  const [npassword , setNewPassword] = useState();
  const [cnpassword , setConfirmNewPassword] = useState();
  

  const handleSubmit=(e)=>{
    axios.get(__userapiurl+ "fetch",{
      params: { "email": email,"password": opassword }         
    }).then((result)=>{                 
       if(npassword==cnpassword)
       {
        axios.patch(__userapiurl+"update",
              {"condition_obj":{"email":email},"content_obj":{"password":cnpassword}}
            ).then(()=>{
              alert("Password Updated Successfully..");
              navigate("/logout");
            });
       }
       else
       {
        setOutput("New & Confirm New Password Mismatch");
        setNewPassword("");
        setConfirmNewPassword("");
       }
    }).catch((error)=>{
      setOutput("Invalid old password...");
      setOldPassword("");
    });
    
  };
  return (
    <>
    <div id="templatemo_content_wrapper">
	  	<div id="register">
        <h2>Change Password Here!!!</h2>
             
     <form >
      <label >Old Password:</label>
      <input type="password" onChange={e=>setOldPassword(e.target.value)} value={opassword} />
      <br/><br/>
       <label >New Password:</label>
      <input type="password" onChange={e=>setNewPassword(e.target.value)} value={npassword} />
      <br/><br/>
       <label >Confirm New Password:</label>
      <input type="password" onChange={e=>setConfirmNewPassword(e.target.value)} value={cnpassword} />
      <br/><br/>
      <button type="button" onClick={handleSubmit}>Submit</button>
     </form>
     <br/>
     <font color="blue" size="4">{output}</font>
     </div>
</div> 
    </>
  );
}

export default CPUser;