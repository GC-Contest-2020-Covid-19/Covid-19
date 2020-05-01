import React from "react";
import Info from "./Info";

const InfoDisplay = () => {
	return (
		<div className='is-flex'>
			<aside className='menu is-size-5 is-hidden-mobile custom-ml-3 custom-mr-5'>
				<ul className='menu-list'>
					<li>
						<a href='#overview'>Overview</a>
					</li>
					<li>
						<a href='#symptoms'>Symptoms</a>
					</li>
					<li>
						<a href='#prevention'>Prevention</a>
					</li>
					<li>
						<a href='#treatment'>Treatment</a>
					</li>
				</ul>
			</aside>
			<Info />
		</div>
	);
};

export default InfoDisplay;
