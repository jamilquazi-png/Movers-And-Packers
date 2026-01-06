import './Banner.css';
import {useEffect, useState}from 'react';


function Banner() {
    const [ BannerContent , setBannerContent ] = useState();
     useEffect(()=>{
       setInterval(()=>{
           if(localStorage.getItem("token")!=undefined)
        {
         setBannerContent(<></>);
        }
       
        else
        {
            setBannerContent(<>
             <div id="templatemo_feature_wrapper">
	<div id="templatemo_feature">

		<div id="feature_left">
        
            <h1>Complete Relocation Services</h1>
            <p>Duis vitae velit sed dui malesuada dignissim. Donec mollis aliquet ligula. Maecenas adipiscing elementum ipsum. Pellentesque vitae magna. Sed nec est. Suspendisse a nibh tristique justo rhoncus volutpat. Suspendisse vitae neque eget ante tristique vestibulum.</p>
            
        
        </div>
        
        <div id="feature_right">
        
        	<div id="feature_image"><span></span>
            	<img src="assets/images/Bannerm&p.jpg" alt="image" height="180" width="400" />
            </div>
        
        </div>
	
	</div> {/* end of feature */}
</div>
            </>);
        }
       },1);
    },[]);
    return (
        <>
          {BannerContent} 
        </>
    );
}

export default Banner;