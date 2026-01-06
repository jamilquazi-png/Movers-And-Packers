
import './AddProduct.css';
import { useState } from 'react';
import axios from 'axios';
import { __productapiurl } from '../../API_URL.js';


function AddProduct() {

  const [product_name, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("unit", unit);
    formData.append("image", image);

    await axios.post(__productapiurl + "save", formData);
    alert("Product Added Successfully");
  };

  return (
<>   
 <div id="templatemo_content_wrapper1">
	<h2>Add Products Here...</h2>
          <form onSubmit={handleSubmit}>
            <label>Title of Concinement : </label>
            <input type="text" onChange={e=>setProductName(e.target.value)} />
            <br/><br/>
            <label>Category : </label>
            <input type="text"  onChange={e=>setCategory(e.target.value)} />
            <br/><br/>
            <label>SubCategory : </label>
            <input type="number"  onChange={e=>setPrice(e.target.value)} />
            <br/><br/>
            <label>Discription : </label>
            <input type="text"  onChange={e=>setUnit(e.target.value)} />
            <br/><br/>
            <label>City : </label>
            <input type="file" onChange={e=>setImage(e.target.files[0])} />
            <br/><br/>
            <button>Add Product </button>
            </form>
       
        
</div> 


</>
  );
}

export default AddProduct;



