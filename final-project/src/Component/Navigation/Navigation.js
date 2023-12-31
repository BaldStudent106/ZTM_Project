import react from "react";
import 'tachyons';

const Navigation = ({onRouteChange,isSignedIn})=>{
        console.log(isSignedIn);
        if(isSignedIn){
        return(
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
            <p onClick={()=>{onRouteChange('signin')}}className="f3 link dim black underline pa3 pointer">Sign Out</p>
        </nav>
        )}else{
        return(
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
            <p onClick={()=>{onRouteChange('register')}}className="f3 link dim black underline pa3 pointer">Register</p>
            <p onClick={()=>{onRouteChange('home')}}className="f3 link dim black underline pa3 pointer">Sign In</p>
        </nav>
            )
        }
    }

export default Navigation;