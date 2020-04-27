import React from 'react';

const ImageLinkForm = () => {
	return (
		<div >
			<p className = "f4"> 
			{'Find face in the image.'}
			</p>
		<div> 
			<input className = "w-70 pa1" type = "text"/>
				<button className = "mh2 pa1 ph2 link black bg-animate hover-bg-light-blue pointer ">
					Search
				</button>
			</div>
		</div>
	);
}

export default ImageLinkForm;