import './AddSubCategory.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { __categoryapiurl, __subcategoryapiurl } from '../../API_URL.js';



function AddSubCategory() {

const navigate = useNavigate();
const [output , setOutput] = useState("");
const [catnm , setcatnm] = useState("");
const [subcatnm , setsubcatnm] = useState("");
const [file , setFile] = useState(null);
const [cDetails, setCDetails] = useState([]);

useEffect(()=>{
axios.get(__categoryapiurl + "fetch").then((response)=>{
  setCDetails(response.data);
}).catch();
},[])

const handleChange=(event)=>{
  setFile(event.target.files[0]);
}

const handleSubmit =(event)=>{
 event.preventDefault();    // page reload hone se rok deta hai
 if(!catnm || !file)       //ye dono khali ho to
 {
  setOutput("All fields are required");
  return;
 }

 const formdata =new FormData();
 formdata.append('catnm',catnm);  //FormData ke andar ek field add karna,Agar aap image/file upload + normal text data send kar rahe ho,
 formdata.append('subcatnm',subcatnm);
 formdata.append('caticon',file);                                 //to Axios ke saath FormData use hota hai.
 axios.post(__subcategoryapiurl +"insert",formdata,{
  headers:{
    'Content-Type':'multipart/form-data'
  }
 }).then((response)=>{
 setOutput("Sub Category added successfully");
 setcatnm("");
 setFile(null);
 navigate('/addsubcategory');
 }).catch((error)=>{
    setOutput("Sub Category not added successfully");
 })
}
  return (
<>   

<div id="templatemo_content_wrapper">
  <div id="register">
	
   <h3>Add SubCategory here!!!</h3>
   {/* <font color="blue">Hello{output}</font> */}
   <form >
      <lable>Category name:</lable>
      <select onChange={e=>setcatnm(e.target.value) }value={catnm}>
        <option>select Category</option>
        {
          cDetails.map((row)=>(
            <option key={row._id} value={row.catnm}>{row.catnm}</option>
          ))
        }
      </select>
      <br/><br/>
      <label>SubCategory Name:</label>
      <input type="text"  onChange={e=>setsubcatnm(e.target.value)} value={subcatnm}/>
      <br/><br/>
      <label >SubCategory Icon:</label>
      <input type="file" onChange={handleChange}  />
      <br/><br/>
     
    <button type="button" onClick={handleSubmit}>Add SubCategory</button>
  </form>
  <br/>
  <font color="blue" size="4">{output}</font>
  </div>
</div>  

</>
  );
}

export default AddSubCategory;



