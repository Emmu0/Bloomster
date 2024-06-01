/** @format */

import React, { useState } from 'react';

const Physical = () => {
	return (
		<div>
			<div className='headfilters'>
				<span>Filters :</span>
				<label className='Selcheckbox'>
					Available
					<input
						type='radio'
						id='Parent'
						checked
						name='isParent'
						value={true}></input>
					<span className='checkmark'></span>
				</label>
				<label className='Selcheckbox'>
					Started
					<input type='radio' id='Self' name='isParent' value={false}></input>
					<span className='checkmark'></span>
				</label>
				<label className='Selcheckbox'>
					Completed
					<input type='radio' id='Self' name='isParent' value={false}></input>
					<span className='checkmark'></span>
				</label>
			</div>
			<div className='GridCardList'>
				<div className='Gridcard'>
					<div className='Gridimage'></div>
					<div className='GridDetails'>
						<div className='GridCardTitle'>
							<h3>
								Let's Learn Science: Ongoing Course <span>Age: 6-9</span>
							</h3>
							<p>
								In this interactive Science Course, we learn about animals,
								plants, anatomy, forces, geography, dinosaurs, materials, rocks,
								weather, ...
							</p>
						</div>
						<div className='gridActivity'>
							<div className='ActivityTeacherList'>
								<div className='activityListitems'>
									<div className='classdetailsDesc'>
										<div className='infolist'>
											<ul>
												<li>
													{' '}
													<i className='fa fa-user'></i> Teacher
												</li>
												<li>
													{' '}
													<i className='fa-solid fa-calendar-days'></i> Schedule
												</li>
											</ul>
										</div>
										<div className='PerclassCharge'>
											<span>$15 per class</span>
											<button>Enroll</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Physical;
