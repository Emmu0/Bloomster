/** @format */
import React from "react";
import * as image from "../../resources/images";
import { Circle } from "rc-progress";
const RoundProgress = ({ data, type }) => {
	let dataVal = Math.round(data) ? Math.round(data) : 0;
	return (
		<>
			{dataVal >= 100 && !type ? (
				<img src={image.enrolledicon} alt='...' className='m-0' />
			) : (
				<>
					{" "}
					<span className='PercentCompleted'>
						{dataVal}
						<span className='percenrSign'>%</span>
					</span>
					<Circle percent={dataVal} strokeWidth={12} strokeColor='#3ec093' />
				</>
			)}
		</>
	);
};

export default RoundProgress;
