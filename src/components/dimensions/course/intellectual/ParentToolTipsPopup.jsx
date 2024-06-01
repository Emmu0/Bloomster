import React, { useState, useEffect } from "react";
import * as image from "../../../../resources/images";
import { useDispatch, useSelector } from "react-redux";
import { getCapitalized } from "../../../../utils/helper";
import { parentToolsModal } from "../../../../redux/actions";
const ParentToolTipsPopup = ({ data }) => {
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
                    className="modal fade show d-block downgradepopup sectionscorecard"
                    id="schoolactivity135"
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
                                            <img src={image.collabrationicon} className="mr-2" alt="" />
                                            Tips for making a deeper connection with {getCapitalized(defaultChildData?.firstName ? defaultChildData?.firstName : loggedInUser?.firstName)}
                                        </span>
                                        <button className="btn btn-primary" data-dismiss="modal" onClick={() => closePopup()}>
                                            <i className="fa-regular fa-xmark m-0"></i>
                                        </button>
                                    </h2>
                                </div>
                            </div>
                            <div className="modal-body parents_Support p-0 parent_collabtaremenu">
                                <div className="px-3 py-2 flex flex-wrap position-relative">

                                    {/* <div class="ljourney w-100 skillEvaluatoin">
                                            <div class="ljourneysteps">
                                                <div class="ljourneyitems flex">
                                                    <span class="ljdimension ljsocial">
                                                        <span>1</span>
                                                        <span class="tracks"></span>
                                                    </span>
                                                    <span class="ljdimension ljsocial">
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
                                                <img src={image.Powericon} />
                                                Here are some tips to better connect with {getCapitalized(defaultChildData?.firstName ? defaultChildData?.firstName : loggedInUser?.firstName)} and create a nurturing home environment that supports their learning.
                                            </h4>
                                            <div dangerouslySetInnerHTML={{
                                                __html: data?.collabEmail
                                            }}>
                                            </div>
                                            {/* <ul>
                                                <li>
                                                    {" "}
                                                    <i class="fa-solid fa-play mr-2 mt-1"></i>
                                                    <h4>Be Actively Involved: Your presence is a cornerstone that builds your child's confidence and curiosity.</h4>
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-play mr-2 mt-1"></i>
                                                    <h4>
                                                       Open Dialogues, Not Monologues: Aim for conversations that are true dialogues, helping to deepen mutual understanding.
                                                    </h4>
                                                </li>
                                                <li>
                                                    <i class="fa-solid fa-play mr-2 mt-1"></i>
                                                    <h4>
                                                       Celebrate the Process: Acknowledge the importance of the journey itself, not just the end goals.
                                                    </h4>
                                                </li>
                                            
                                            </ul> */}
                                        </div>
                                        {/* <div className="welcomscreenContent lockContentPOpups p-0 w-100 mt-3">
                                            <h4 className="flex heighlitedboxpopup">
                                                <img src={image.Powericon} />
                                                We encourage you to reflect on your own life experiences and be open to connecting with your child on a deeper level. Here are some insights to get you thinking.
                                            </h4>
                                            <div dangerouslySetInnerHTML={{
                                                __html: data?.collabEmail
                                            }}>
                                            </div>
                                           
                                        </div> */}
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
export default ParentToolTipsPopup;