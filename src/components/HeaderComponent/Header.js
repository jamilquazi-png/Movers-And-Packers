// import './Header.css'
// import { Link } from "react-router-dom";
// import {useEffect, useState}from 'react';

// function Header() {
//     const [ HeaderContent , setHeaderContent ] = useState();
//     const [ NavContent , setNavContent ] = useState();

//     //HEADER CONTENT EFFECT
//     useEffect(()=>{
//         setInterval(()=>{

      
//         if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="admin")
//         {
//          setHeaderContent(<>
//                <div id="templatemo_header_wrapper">
//                   <div id="templatemo_header">
    
//          <div id="site_title">
           
//                 <img src="assets/images/eauctionhub-logo.jpg"  height="40" />
                
//                 <h6 style={{color:"black"}}>  Buy and sale everything...</h6>
//                 <div >
//                     <h3 style={{'color':'white'}}>Welcome Admin : {localStorage.getItem("email")}</h3>
//                 </div>
         
//       </div>
            
    
//     </div>
// </div>
//          </>);
//         }
        
//         else if (localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="user")
//         {
//          setHeaderContent(<>
//          <div id="templatemo_header_wrapper">
// 	     <div id="templatemo_header">
    
//          <div id="site_title">
           
//                 <img src="assets/images/eauctionhub-logo.jpg"  height="40" />
                
//                 <h6 style={{color:"black"}}>  Buy and sale everything...</h6>
//                 <div >
//                     <h3 style={{'color':'white'}}>Welcome User : {localStorage.getItem("email")}</h3>
//                 </div>
               
         
//       </div>
            
    
//     </div>
// </div>
//          </>);
//         }
//         else
//         {
//             setHeaderContent(<>
//             <div id="templatemo_header_wrapper">
// 	     <div id="templatemo_header">
    
//          <div id="site_title">
           
//                 <img src="assets/images/eauctionhub-logo.jpg"  height="40" />
                
//                 <h6 style={{color:"black"}}>  Buy and sale everything...</h6>
               
         
//       </div>
            
//     </div>
// </div>
//             </>);
//         }
//           },1000);
//     },[]);

    
//     //Nav CONTENT EFFECT
//     useEffect(()=>{
//     setInterval(()=>{

//      if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="admin")
//      {
//         setNavContent(<>
//          {/* <div id="templatemo_header_wrapper"> */}
// 	     {/* <div id="templatemo_header"> */}
     
//         <div id="templatemo_menu">
        
//            <ul>
//                     <li><Link  to=""className="current">Admin Home</Link></li>
                    
//                     <li><Link to="/logout">Logout</Link></li>
//                 </ul>  	
        
//         </div> 
    
//     {/* </div> */}
// {/* </div> */}
//         </>);
//      }
//      else if(localStorage.getItem("token")!=undefined && localStorage.getItem("role")=="user")
//      {
//         setNavContent(<>
//         {/* <div id="templatemo_header_wrapper"> */}
// 	     {/* <div id="templatemo_header"> */}
     
//         <div id="templatemo_menu">
        
//            <ul>
//                     <li><Link  to=""className="current">User Home</Link></li>
                    
//                     <li><Link to="/logout">Logout</Link></li>
//                 </ul>  	
        
//         </div> 
    
//     {/* </div> */}
// {/* </div> */}
//         </>);
//      }
//      else
//      {
//          setNavContent(<>
//            {/* <div id="templatemo_header_wrapper"> */}
// 	     {/* <div id="templatemo_header"> */}
            
            
//         <div id="templatemo_menu">
        
//            <ul>
//                     <li><Link  to=""className="current">Home</Link></li>
//                     <li><Link to="/about">About</Link></li>
//                     <li><Link to="/contact">Contact</Link></li>
//                     <li><Link to="/service">Service</Link></li>
//                     <li><Link to="/register">Register</Link></li>
//                     <li><Link to="/login">Login</Link></li>
//                 </ul>  	
        
//         </div> 
    
//     {/* </div>
// </div> */}
//          </>);
//      }
//     },1000);
//     },[]);
   
//     return (
//         <>
//          { HeaderContent }
//          { NavContent }
//         </>
//     );
// }

// export default Header;

import './Header.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Auth from '../AuthComponent/Auth.js';

function Header() {
    const [HeaderContent, setHeaderContent] = useState();
    const [NavContent, setNavContent] = useState();

    // HEADER CONTENT EFFECT
    useEffect(() => {
        setInterval(() => {

            if (localStorage.getItem("token") !== undefined && localStorage.getItem("role") === "admin") {
                setHeaderContent(
                    <>
                        <div id="site_title">
                            {/* <img src="assets/images/logomp.webp" height="60" width="200" alt="" /> */}
                        
                            {/* <h6 style={{ color: "black" }}>Buy and sale everything...</h6> */}
                            <br/>
                            <div>
                                <h2>Movers&Packers</h2>
                                <h6 style={{ color: 'black' }}>
                                    Welcome Admin : {localStorage.getItem("email")}
                                </h6>
                            </div>
                        </div>
                    </>
                );
            }

            else if (localStorage.getItem("token") !== undefined && localStorage.getItem("role") === "user") {
                setHeaderContent(
                    <>
                        <div id="site_title">
                            {/* <img src="assets/images/logomp.webp" height="60" width="200" alt=""/> */}
                                                      {/* <h6 style={{ color: "black" }}>Buy and sale everything...</h6> */}
                            <br/>
                            <div>
                                <h2>Movers&Packers</h2>
  
                                <h6 style={{ color: 'black' }}>
                                    Welcome User : {localStorage.getItem("email")}
                                </h6>
                            </div>
                        </div>
                    </>
                );
            }

            else {
                setHeaderContent(
                    <>
                        <div id="site_title">
                             <h2>Movers&Packers</h2>
                            {/* <h6 style={{ color: "black" }}>Buy and sale everything...</h6> */}
                        </div>
                    </>
                );
            }

        }, 1000);
    }, []);


    // NAV CONTENT EFFECT
    useEffect(() => {
        setInterval(() => {

            if (localStorage.getItem("token") !== undefined && localStorage.getItem("role") === "admin") {
                setNavContent(
                    <>
                        <div id="templatemo_menu">
                           <ul>
                            <li><Link to="" className="current">Admin Home</Link></li>
                            <li><Link to="/manageusers">Manage Users</Link></li>

          {/* Settings Dropdown */}
                            <li className="dropdown">
                           <a className="dropbtn">Settings ▾</a>
                         <ul className="dropdown-content">
                         <li><Link to="/epadmin">Edit Profile</Link></li>
                         <li><Link to="/cpadmin">Change Password</Link></li>
                         </ul>
                        </li>

                     <li><Link to="/addcategory">Add Category</Link></li>
                     <li><Link to="/addsubcategory">Add Sub Category</Link></li>
                     <li><Link to="/manageorder">Manage Order</Link></li>
                     <li><Link to="/logout">Logout</Link></li>
                    </ul>

                        </div>
                    </>
                );
            }

            else if (localStorage.getItem("token") !== undefined && localStorage.getItem("role") === "user") {
                setNavContent(
                    <>
                        <div id="templatemo_menu">
                            <ul>
                                <li><Link to="" className="current">User Home</Link></li>
                                <li><Link className="nav-link" to="/viewcategory">Search</Link></li>
                                <li><Link className="nav-link" to="/charity">Charity</Link></li>
                                <li className="dropdown">
                                <a className="dropbtn">Settings ▾</a>
                                <ul className="dropdown-content">
                                 <li><Link to="/epuser">Edit Profile</Link></li>
                                 <br/>
                                 <li><Link to="/cpuser">Change Password</Link></li>
                                </ul>
                                 </li>
                              <li><Link className="nav-link" to="/aiclient">AI Companion</Link></li>
                                 <li><Link to="/addconsignment">AddConsignment</Link></li>
                                 <li><Link to="/consignmentstatus">Consignment Status</Link></li>
                                
                                <li><Link to="/logout">Logout</Link></li>
                            </ul>
                        </div>
                    </>
                );
            }

            else {
                setNavContent(
                    <>
                        <div id="templatemo_menu">
                            <ul>
                                <li><Link to="" className="current">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/service">Service</Link></li>
                                <li><Link to="/register">Register</Link></li>
                                <li><Link to="/login">Login</Link></li>
                            </ul>
                        </div>
                    </>
                );
            }

        }, 1000);
    }, []);


    // ⭐⭐ FINAL FIX → BOTH IN SAME LINE ⭐⭐
    return (
        <>
            <div id="templatemo_header_wrapper">
                <div
                    id="templatemo_header"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <Auth />
                    {/* LEFT SIDE — Logo + Text */}
                    {HeaderContent}

                    {/* RIGHT SIDE — Navbar */}
                    {NavContent}

                </div>
            </div>
        </>
    );
}

export default Header;

