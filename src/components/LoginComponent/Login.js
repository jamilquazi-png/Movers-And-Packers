import './Login.css';
import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { __userapiurl } from '../../API_URL.js';



function Login() {

const navigate = useNavigate();
const [output , setOutput] = useState();
const [email , setEmail] = useState();
const [password , setpassword] = useState();

const handleSubmit=(e)=>{
const userDetails={"email":email,"password":password};

axios.post(__userapiurl+"login",userDetails).then((response)=>{
  //console.log(response);
  const users=response.data.users;
  localStorage.setItem("token",response.data.token);
  localStorage.setItem("name",users.name);
  localStorage.setItem("email",users.email);
  localStorage.setItem("mobile",users.mobile);
  localStorage.setItem("address",users.address);
  localStorage.setItem("city",users.city);
  localStorage.setItem("gender",users.gender);
  localStorage.setItem("role",users.role);
  localStorage.setItem("info",users.info);
  users.role==="admin"?navigate("/admin"):navigate("/user");

}).catch(()=>{
setOutput("Invalid user or please verify your account....");
setEmail("");
setpassword("");
});
};

  return (
<>   

<div id="templatemo_content_wrapper">
	<div id="register">
   <h3>Login here!!!</h3>
   {/* <font color="blue">Hello{output}</font> */}
   <form >
      
      
      <label>Email:</label>
      <input type="email"  onChange={e=>setEmail(e.target.value)} value={email}/>
      <br/><br/>
      <label >Password:</label>
      <input type="password" onChange={e=>setpassword(e.target.value)} value={password} />
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

export default Login;



