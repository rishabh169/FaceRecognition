import React from 'react';
import Tilt from 'react-tilt'
import identity from './identity.png'

const Logo = () => {
	return (
		<Tilt className="Tilt br3 shadow-2 ma4 mt0" options={{ max : 25 }} style={{ height: 100, width: 100}} >
 			<div className="Tilt-inner"> 
 				<img 
 				className = 'mv2' 
 				style = {{ height : 80 ,width: 80}}
 				alt ='logo' src = {identity} 
 				/>
 			</div>
		</Tilt>
	);
}

export default Logo;