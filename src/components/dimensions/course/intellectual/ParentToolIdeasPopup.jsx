import React, { useState, useEffect } from "react";
import * as image from "../../../../resources/images";
import { useDispatch, useSelector } from "react-redux";
import { getCapitalized } from "../../../../utils/helper";
import { parentToolsModal } from "../../../../redux/actions";
const ParentToolIdeasPopup = ({ data }) => {
    const dispatch = useDispatch();
    const {
        defaultChildData,
        loggedInUser
    } = useSelector((state) => state.collections);

    const closePopup = () => {
        dispatch(parentToolsModal());
    }
    return (
        <>
            <div className="newinfo_popup newinfo_popupdimension newEnrollCoursPopup">
                <div
                    className="modal d-block downgradepopup sectionscorecard"
                    id="schoolactivity134"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="heading border-0 p-0 w-100">
                                    <h2 className="flex">
                                        <span>
                                            <img src={image.Supporticon} className="mr-2" alt="" />
                                            Here’s how you can support {getCapitalized(defaultChildData?.firstName ? defaultChildData?.firstName : loggedInUser?.firstName)}
                                        </span>
                                        <button className="btn btn-primary" data-dismiss="modal" onClick={() => closePopup()}>
                                            <i className="fa-regular fa-xmark m-0"></i>
                                        </button>
                                    </h2>
                                </div>
                            </div>
                            <div className="modal-body parents_Support p-0">
                                <div className="px-3 py-2 flex flex-wrap position-relative">

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
                                        <div className="welcomscreenContent lockContentPOpups p-0 w-100 mt-3">
                                            <h4 className="flex heighlitedboxpopup">
                                                We know you want to be assured you’ve done everything possible for {getCapitalized(defaultChildData?.firstName ? defaultChildData?.firstName : loggedInUser?.firstName)}. Here are some ideas
                                                on how you can better support their learning journey.
                                            </h4>
                                            <div dangerouslySetInnerHTML={{
                                                __html: data?.support
                                            }}>
                                            </div>
                                            {/* <ul>
                                                <li>
                                                    {" "}
                                                    <i class="fa-solid fa-play mr-2 mt-1"></i>
                                                    <h4>Talk with your child about the importance and goal of their participation in this learning.</h4>
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-play mr-2 mt-1"></i>
                                                    <h4>
                                                        Encourage your child to be a mindful learner who paces their learning to include reflection
                                                    </h4>
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-play mr-2 mt-1"></i>
                                                    <h4>
                                                        Express the significance of good communication skills now and in the future.
                                                    </h4>
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-play mr-2 mt-1"></i>
                                                    <h4>
                                                    Engage your child in reflective conversations about why Franki, the main character, wants to become an expert communicator
                                                    </h4>
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-play mr-2 mt-1"></i>
                                                    <h4>
                                                    Reflect with your child on the similarities that exist between them and Frank, the main character's, efforts and thinking
                                                    </h4>
                                                </li>
                                            </ul> */}
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
                                                onClick={() => closePopup()}
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

        </>
    );
}
export default ParentToolIdeasPopup;