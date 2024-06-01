/** @format */

import React from "react";
import * as image from "../../resources/images";
const SensitiveModal = ({ close, data }) => {
  return (
    <div
      className="d-flex justify-content-between newinfo_popup newinfo_popupdimension newEnrollCoursPopup"
      tabIndex="1"
    >
      <div
        className="modal d-block videoActivityPopup"
        id="exampleModalLo"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="heading border-0 p-0 w-100">
                <h2 className="flex">
                  <span>
                    <img src={image.senstivedata} className="mr-2" alt="" />
                    Sensitive topics covered in this course
                  </span>
                  <button className="btn btn-primary" onClick={() => close()}>
                    <i className="fa-regular fa-xmark m-0"></i>
                  </button>
                </h2>
              </div>
            </div>
            <div className="modal-body p-0">
              <div className="text-center px-3 py-2 flex flex-wrap position-relative">
                {/* <div class="ljourney w-100 skillEvaluatoin">
										<div class="ljourneysteps">
											<div class="ljourneyitems flex">
												<span class="ljdimension ljsocial">
													<span>1</span>
													<span class="tracks"></span>
												</span>
												<span class="ljdimension ">
													<span>2</span>
													<span class="tracks"></span>
												</span>
												<span class="ljdimension ">
													<span>3</span>
													
												</span>
											
											</div>
										</div>
								</div> */}
                <div className="parents_Support">
                  {/* <h3>Welcome to Caitlin’s journey of growth and empowerment with our course – 
								    Forgiveness Foundations: Building a Brighter Future.
								</h3> */}
                  <div className="welcomscreenContent patwaysbulleys lockContentPOpups p-0 w-100">
                    <h4 className="flex heighlitedboxpopup pt-0 pb-0 pl-0">
                      {/* <ul className="p-0">
												<li>
													{" "}
													<i class="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Talk with your child about the importance and goal
														of their participation in this learning. Talk with your child about the importance and goal
														of their participation in this learning. Talk with your child about the importance and goal
														of their participation Talk with your child about the importance and goal
														of their participation in thi
													</h4>
												</li>
												<li>
													<i class="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Encourage your child to be a mindful learner who
														paces their learning to include reflection  Encourage your child to be a mindful learner who
														paces their learning to include reflection  Encourage your child to be a mindful learner who
														paces their learning to include reflection
													</h4>
												</li>
												<li>
													<i class="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Express the significance of good communication
														skills now and in the future.  Encourage your child to be a mindful learner who
														paces their learning to include reflection  Encourage your child to be a mindful learner who
														paces their learning to include reflection
													</h4>
												</li>
												<li>
													<i class="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Engage your child in reflective conversations about
														why Franki, the main character, wants to become an
														expert communicator  Encourage your child to be a mindful learner who
														paces their learning to include reflection
													</h4>
												</li>
												<li>
													<i class="fa-solid fa-play mr-2 mt-1"></i>
													<h4>
														Reflect with your child on the similarities that
														exist between them and Frank, the main character's,
														efforts and thinking  Encourage your child to be a mindful learner who
														paces their learning to include reflection  Encourage your child to be a mindful learner who
														paces their learning to include reflection
													</h4>
												</li>
											</ul> */}
                      <span
                        className="m-0"
                        dangerouslySetInnerHTML={{
                          __html: data?.sensitivecontent,
                        }}
                      />
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <div className="form-group BDsubmitbutton d-flex m-0">
                <div className="buttonDistribotion">
                  <div className="buttonDistribotion justify-content-end">
                    <button
                      type="button"
                      className="btn-blue btn-login d-block mb-5 cancelbutton"
                      onClick={() => close()}
                    >
                      <i className="fa-solid fa-xmark"></i> Close
                    </button>
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
export default SensitiveModal;
