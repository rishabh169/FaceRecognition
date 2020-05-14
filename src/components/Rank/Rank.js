import React from 'react';


const Rank = ({username, entries}) => {
	return (
		<div>
			<div className = 'f3'>
				{`${username}, You Recognise face ${entries} times! `}
			</div>

		</div>
	);
}

export default Rank;