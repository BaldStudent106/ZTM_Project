import react from "react";
import 'tachyons';
import './Logo.css';
import Tilt from 'react-parallax-tilt';
import brain from './images.jpeg';

const Logo = () =>{
    return(
        <div className="ma4 mt0">
            <Tilt className='Tilt br2 shadow-2' options={{max:25}} style={{height:'150px', width:'150px'}}>
                <div className="Tilt-inner pa3"><img alt='Logo' src={brain} style={{paddingTop:'5px'}}/></div>
            </Tilt>
        </div>
    )
}

export default Logo;