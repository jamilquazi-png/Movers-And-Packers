import "./ViewSubCategory.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { __subcategoryapiurl, } from "../../API_URL.js";
import { Link,useParams } from "react-router-dom";

function ViewSubCategory() {
  const params = useParams();
  const [ subcategoryList, setSubCategoryList ] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(()=>{
    axios.get(__subcategoryapiurl + "fetch",{
      params: {"catnm":params.cnm}
    }).then((response)=>{
      console.log('subcat fetch response.data:', response?.data);
      const data = response?.data;
      const list = data?.cList ?? (Array.isArray(data) ? data : []);
      setSubCategoryList(list);
      setError(null);
      setLoading(false);
    }).catch((err)=>{
      console.log('subcat fetch error:', err);
      if (err?.response?.status === 404) {
        setSubCategoryList([]);
        setError(null);
      } else {
        setError(err.message || 'Fetch error');
        setSubCategoryList([]);
      }
      setLoading(false);
    });
  },[params.cnm]);
  return (
    <>
    <div id="templatemo_content_wrapper">
        <h2>View SubCategory Here!!!!</h2>

      <center>
        <div id="categorymain">
            {
              loading && <p>Loading subcategories...</p>
            }
            { error && <p style={{color:'red'}}>Error: {error}</p> }
            { !loading && !error && (subcategoryList || []).length === 0 && (
              <p>No subcategories found.</p>
            )}
            {(subcategoryList || []).map((row, idx)=>(
               <Link key={row._id || row.subcatnm || idx} to={`/searchsc/${row?.catnm}`}>
               <div className="categorypart">
           <img src={`/assets/uploads/subcaticons/${row?.subcaticonnm || 'default.png'}`} height="120" width="150" alt={row?.subcatnm || 'subcat'} />
           <br/>
          <b>{row?.subcatnm}</b>
          </div>
          </Link>
              ))
           
            }
        </div>
      </center>

   

       
</div> 
    </>
  );
}

export default ViewSubCategory;