import './AddCategory.css';
import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { __categoryapiurl, __userapiurl } from '../../API_URL.js';



function AddCategory() {

const navigate = useNavigate();
const [output , setOutput] = useState("");
const [catnm , setcatnm] = useState("");
const [file , setFile] = useState(null);


const handleChange=(event)=>{
  setFile(event.target.files[0]);
}

const handleSubmit =(event)=>{
 event.preventDefault();    // page reload hone se rok deta hai
 if(!catnm || !file)
 {
  setOutput("All fields are required");
  return;
 }

 const formdata =new FormData();
 formdata.append('catnm',catnm);  //FormData ke andar ek field add karna,Agar aap image/file upload + normal text data send kar rahe ho,
formdata.append('caticon',file);                                 //to Axios ke saath FormData use hota hai.
 axios.post(__categoryapiurl +"insert",formdata,{
  headers:{
    'Content-Type':'multipart/form-data'
  }
 }).then((response)=>{
 setOutput("Category added successfully");
 setcatnm("");
 setFile(null);
 navigate('/addcategory');
 }).catch((error)=>{
    setOutput("Category not added successfully");
 })
}
  return (
<>   

<div id="templatemo_content_wrapper">
	<div id="register">
   <h3>Add Category Here!!!</h3>
   {/* <font color="blue">Hello{output}</font> */}
   
   <form >
      
      
      <label>Category Name:</label>
      <input type="text"  onChange={e=>setcatnm(e.target.value)} value={catnm}/>
      <br/><br/>
      <label >Category Icon:</label>
      <input type="file" onChange={handleChange}  />
      <br/><br/>
     
    <button type="button" onClick={handleSubmit}>Add Category</button>
  </form>
  <br/>
  <font color="blue" size="4">{output}</font>
  </div>
</div>  

</>
  );
}

export default AddCategory;



