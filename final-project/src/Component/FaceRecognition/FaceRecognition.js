import React from "react";
import './FaceRecognition.css';

export default function FaceRecognition({imageURL,box}){
    return(
        <div className="center ma">
           <div className="absolute mt2">
            <img alt='face' src={imageURL} width='400px' height='auto' id="inputimage"></img> 
            <div className="bounding-box" style={{top:box.topRow ,right:box.rightcol ,bottom:box.bottomRow ,left:box.leftcol}}></div>
         </div>
        </div>
    )
}