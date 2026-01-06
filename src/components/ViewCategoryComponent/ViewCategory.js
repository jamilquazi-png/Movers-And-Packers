import "./ViewCategory.css";
import { useState,useEffect } from "react";
import axios from "axios";
import { __categoryapiurl, } from "../../API_URL.js";
import { Link } from "react-router-dom";

function ViewCategory() {
  const [ categoryList, setCategoryList ] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(()=>{
    axios.get(__categoryapiurl + "fetch").then((response)=>{
      console.log('category fetch response.data:', response?.data);
      const data = response?.data;
      const list = data?.cList ?? (Array.isArray(data) ? data : []);
      setCategoryList(list);
      setError(null);
      setLoading(false);
    }).catch((err)=>{
      console.log('category fetch error:', err);
      // If backend returns 404 for empty list, show friendly message instead of error
      if (err?.response?.status === 404) {
        setCategoryList([]);
        setError(null);
      } else {
        setError(err.message || 'Fetch error');
        setCategoryList([]);
      }
      setLoading(false);
    });
  },[]);
  return (
    <>
    <div id="templatemo_content_wrapper">
        <h2>View Category Here!!!!</h2>

      <center>
        <div id="categorymain">
              {loading && <p>Loading categories...</p>}
              {error && <p style={{color:'red'}}>Error: {error}</p>}
              {!loading && !error && (categoryList || []).length === 0 && (
                <p>No categories found.</p>
              )}
              {(categoryList || []).map((row, idx)=>(
                <Link key={row._id || row.catnm || idx} to={`/searchsc/${row?.catnm}`}>
                <div className="categorypart">
              <img src={`assets/uploads/caticons/${row?.caticonnm || 'default.png'}`} height="120" width="150" alt={row?.catnm || 'category'} />
              <br/>
             <b>{row?.catnm}</b>
            </div>
            </Link>
        
              ))}
           
        
        </div>
      </center>

   

       
</div> 
    </>
  );
}

export default ViewCategory;