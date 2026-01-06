import './Test.css';

function Test(props){
    return(
        <>
        <div>
            {/* <h1>User details : localStorage</h1>  
             <p>Username : {localStorage.getItem('sunm')}</p>
             <p>Password : {localStorage.getItem('spass')}</p>  
            
             <hr/>   */}

            <h1>Test Component:login child</h1>
            <p>a={props.a}</p>
            <p>b={props.b}</p>
            <p>add = {props.a+props.b}</p>

            <p>{props.add()}</p>
        </div>
        </>
    );
}

export default Test;