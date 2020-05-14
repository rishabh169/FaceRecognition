import React from 'react';
import './faceRecognition.css'

const FaceRecognition = ({link, box}) => {
	return (
	<div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={link} width='500px' heigh='auto'/>
        <div className='bounding-box' style={{left : box.leftcol,
				right: box.rightcol,
				top :box.toprow,
				bottom : box.bottomrow,}}></div>
      </div>
    </div>
	);
}

export default FaceRecognition;