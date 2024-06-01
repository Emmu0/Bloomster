/** @format */

import React from 'react';
import * as image from '../../resources/images';
const Error403 = () => {
	return (
		<div className='Forbiddanerror flex'>
			<div className='container'>
				<div className='erroe404 d-flex justify-content-center flex-wrap'>
					<div className='ErrorImage'>
						<img src={image.Error403} />
					</div>
					<div className='ErrorDescription w-100'>
						<h2>Not Authorise</h2>
						<a href='#'>
							<i className=' icon icon-dapulse-home  h4 mb-0 mr-2'></i>Go To
							Home
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Error403;
