import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { __userapiurl } from '../../API_URL.js';
import axios from 'axios';



function VerifyUser()
{
   
    const params = useParams();

    useEffect(()=>{

        axios.get(__userapiurl+"fetch",{
            params:{"email":params.email}
        }).then((result)=>{
            if(result.data.users[0].__v==0)
            {
             axios.patch(__userapiurl+"update",
            {"condition_obj":{"email":params.email},"content_obj":{"status":1,"__v":1}}
        ).then(()=>{
          //  Navigate("/login");
            window.location.href="/login";
        });
            }
              
          }).catch((error)=>{
            console.log(error);
        
        });
       
    },[]);

    return(
        <>  <div style={{ display: "none" }}></div></>
    )
}

export default VerifyUser;