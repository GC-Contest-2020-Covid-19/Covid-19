import React from "react";

const Sun = ({ width }) => {
	return (

    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        stroke-width="1.5" 
        stroke="#2c3e50" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        className='sun'
        fill='none'
        width={width}
		height={width}>
        <path stroke="none" d="M0 0h24v24H0z"/>
        <circle cx="12" cy="12" r="4" />
        <path d="M3 12h1M12 3v1M20 12h1M12 20v1M5.6 5.6l.7 .7M18.4 5.6l-.7 .7M17.7 17.7l.7 .7M6.3 17.7l-.7 .7" />
    
    </svg>
			
			
	);
};

export default Sun;

