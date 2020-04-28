import React from 'react';
import './faceRecognition.css'

const FaceRecognition = ({link, box}) => {
	return (
		<div className = "absolute mt2 mr6" >
			<img id= "inputimage" src ={link} 
			alt = 'friends pic ' width ='500px' height = 'auto' />

			<div className="bounding-box" 
			style = {{
				left : box.leftcol,
				right: box.rightcol,
				top :box.toprow,
				bottom : box.bottomrow,
			}}>

			</div>
		</div>
	);
}

export default FaceRecognition;