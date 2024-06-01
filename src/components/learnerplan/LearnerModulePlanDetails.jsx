import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { calculateSeactionEndDate, convertedNumber, getCapitalized, getCurrentDateInFormat, getSequnceSort } from "../../utils/helper";
import { getDimensionPlanData } from "../../redux/actions/APIs";
import DatePicker from "react-date-picker";

const LearnerModulePlanDetails = ({ handleShowPlanModule }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const { defaultChildData, changePaceResp } = useSelector((state) => state.collections);

    const [activityDetail, setActivityDetail] = useState();

    useEffect(() => {
        console.log('changePaceResp : ', changePaceResp);
        if (changePaceResp) {
            setActivityDetail(getSequnceSort(changePaceResp?.courseName?.activities));
        }
    }, [changePaceResp])

    return (
        <div className="modal fade show d-block newinfo_popup newinfo_popupdimension newEnrollCoursPopup pacechangepopuo" role="dialog">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="heading border-0 p-0 w-100">
                            <h2 className="flex">
                                <span>
                                    <img src={image.mortarboard} alt="" className="mr-2" />
                                    {changePaceResp?.courseName?.name}
                                </span>
                                <button className="btn btn-primary" data-dismiss="modal" onClick={() => handleShowPlanModule(false)}>
                                    <i className="fa-regular fa-xmark m-0"></i>
                                </button>
                            </h2>
                        </div>
                    </div>
                    {
                        activityDetail && (
                            <div className="modal-body pt-0 p-3 ">
                                <div className="LPcourseDetails">
                                    <h4 className="flex">Tentative Course Schedule
                                    {/* <div className="plan_startdate">
                                                <div className="input-group calender">
                                                    <div className="form-group  flexone">
                                                        <h3 className="mr-3"> Start Date: </h3>
                                                        <label className="flexone position-relative">
                                                            <span className="clenderIcon">
                                                                <img src={image.Calendericon} />
                                                            </span>
                                                            <DatePicker className="form-control signupChildClass p-0 w-100"
                                                                // clearIcon={null}
                                                                // oneTap
                                                                // onChange={(value) => {
                                                                //     setUserDate(value)
                                                                // }}
                                                                // value={userDate}
                                                                dayPlaceholder={"dd"}
                                                                monthPlaceholder={"mm"}
                                                                yearPlaceholder={"yyyy"}
                                                                format="MM/dd/yyyy"
                                                                placement={"topEnd"}
                                                                // minDate={new Date(moment())}
                                                            />
                                                        </label>
                                                        <span onClick={() => handlePopUpOpen("startdate")}>
                                                            <img src={image.chat_icon} className="ml-2 ichat_icon pointer" />
                                                        </span>
                                                    </div>
                                                 </div>
                                            </div> */}
                                    </h4>
                                    <div className="LPTimingDivision mt-3">
                                        <ul>
                                            <li><h5 className="p-0">1. {activityDetail[0]?.name}</h5>
                                                <p class="timint_date">{activityDetail[0]?.startDate} - {activityDetail[0]?.endDate}</p>
                                            </li>
                                            <li><h5 className="p-0">2. {activityDetail[1]?.name}</h5>
                                                <p class="timint_date">{activityDetail[1]?.startDate} - {activityDetail[1]?.endDate}</p>
                                            </li>
                                            <li><h5 className="p-0">3. {activityDetail[2]?.name}</h5>
                                                <p class="timint_date">{activityDetail[2]?.startDate} - {activityDetail[2]?.endDate}</p>
                                            </li>
                                            <li><h5 className="p-0">4. {activityDetail[3]?.name}</h5>
                                                <p class="timint_date">{activityDetail[3]?.startDate} - {activityDetail[3]?.endDate}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <div className="modal-footer">
                        <div className="form-group BDsubmitbutton d-flex m-0">
                            <div className="buttonDistribotion">
                                <div className="buttonDistribotion justify-content-end">
                                    <button
                                        type="button"
                                        className="btn-blue btn-login d-block mb-5 cancelbutton"
                                        onClick={() => handleShowPlanModule(false)}
                                    >
                                        <span><i className="fa-solid fa-xmark"></i> </span>Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnerModulePlanDetails;
