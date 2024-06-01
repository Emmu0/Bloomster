import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { Rating } from "react-simple-star-rating";
import * as image from "../../../../resources/images";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSequnceSort } from "../../../../utils/helper";
import {
  SocialEnroll,
  getDimensionData,
  getDimensions,
} from "../../../../redux/actions/APIs";
import { swal } from "../../../../utils/Packages";

const PrimaryKey = ({ data, close, socialSkills, selectedSkill }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const { selectedDim, dimension, getdimension, courseList } = useSelector(
    (state) => state.collections
  );

  const [socialCard, setSocialCard] = useState(
    dimension[selectedDim?.value]?.courses
  );

  const [skillName, setSkillName] = useState(selectedSkill);

  const enrollNow = (data) => {
    dispatch(
      SocialEnroll(
        params?.id,
        selectedDim,
        selectedSkill?.id,
        data.id,
        dimension
      )
    );
  };

  const changeSocialDetail = (data) => {
    setSkillName(data);
    setSocialCard(socialCard);
  };

  useEffect(() => {
    if (!getdimension) {
      dispatch(getDimensions());
    }
  }, []);

  useEffect(() => {
    if (selectedDim) {
      dispatch(getDimensionData(params?.id, selectedDim?.key, dimension));
    }
  }, [selectedDim]);

  return (
    <Modal
      id="common-modal"
      size="lg"
      centered={true}
      show={true}
      onHide={() => close()}
      className="courseInformation halfPagePOpup SchoolActivityPopup"
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header className={`hoosrSubModlPopup p-0`}>
        <div className="heading w-100">
          <h2>
            {skillName?.name}
            <span
              className="ml-2"
              aria-haspopup="true"
              aria-expanded="false"
              id="navbardropdown"
              data-toggle="dropdown"
            >
              <i className="fa-solid fa-circle-chevron-down"></i>
            </span>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbardropdown"
            >
              {socialSkills?.value &&
                getSequnceSort(socialSkills?.value).map(
                  (value, key) =>
                    value.isDef && (
                      <li key={key} onClick={() => changeSocialDetail(value)}>
                        <span className="SubFName pointer">
                          {value.name.charAt(0)}
                        </span>
                        {value?.name}
                      </li>
                    )
                )}
            </ul>
          </h2>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            onClick={() => close()}
          >
            &times;
          </button>
        </div>
      </Modal.Header>
      <Modal.Body className="fullWidthPopup forlikepopup p-0">
        <div className="modal-body Subject_Curriculam">
          {socialCard &&
            socialCard?.map(
              (val, key) =>
                val?.skillId === selectedSkill?.id &&
                !val?.isEnrolled && (
                  <div>
                    <h5 className="VicyslCourseTitle mb-3">
                      <i className="fa-sharp fa-solid fa-book-open-cover mr-2"></i>
                      {val?.name}
                    </h5>
                    <div className="TopicSpeclist flex flex-wrap">
                      <div className="Topicspeclistitem flex">
                        <div className="speclistimage">
                          <img src="https://loremflickr.com/200/200" />
                        </div>
                        <div className="spacelistDesc">
                          <div className="specialistTitle">
                            <div className=" p-0">
                              <h4 className="d-flex">
                                {val?.name} ({" "}
                                <div className="RatingWrap1   flex ml-1 mr-1">
                                  <Rating
                                    initialValue={2}
                                    transition={false}
                                    allowHalfIcon
                                    readonly
                                    allowHover={false}
                                    size={20}
                                    emptyColor="#ccc"
                                    fillColorArray={[
                                      "#f17a45",
                                      "#f17a45",
                                      "#f17a45",
                                      "#f17a45",
                                      "#f17a45",
                                    ]}
                                  />

                                  <span className="ratingCount flex">
                                    <i className="fa-solid fa-angle-down ml-1" />{" "}
                                    <span className="ml-1">
                                      {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                                      (0)
                                    </span>
                                  </span>
                                </div>
                                )
                              </h4>

                              <span
                                className="AddCorsebtn"
                                onClick={() => {
                                  enrollNow(val);
                                  close();
                                }}
                              >
                                Enroll{" "}
                                <i className="fa-solid fa-circle-plus ml-1"></i>
                              </span>
                              <p className="speclistdesctext">
                                <span>
                                  {" "}
                                  <img src={image.myhc_92884} alt="" />
                                </span>{" "}
                                {val?.name}
                              </p>
                            </div>
                          </div>
                          <ul className="spaclistcontactlist pt-2">
                            <li className=" w-100 flex">
                              <div className="TeacherName courseJourneyCard flex pointer">
                                <div className="TeacherActivityimg mr-2">
                                  <img
                                    src={image.course_journey}
                                    alt=""
                                    className="p-0"
                                  />
                                </div>
                                <div className="techrrat ">
                                  <h5 className="">Course Journey</h5>
                                </div>
                              </div>
                              <div className="TeacherName d-flex mr-3">
                                <div className="TeacherActivityimg mr-2">
                                  <img
                                    src={image.CourseProviderThumb}
                                    className="p-0"
                                    alt=""
                                  />
                                </div>
                                <div className="techrrat ">
                                  <h5 className="">Britney Watson</h5>
                                  <div className="RatingWrap1   flex">
                                    <Rating
                                      initialValue={2}
                                      transition={false}
                                      allowHalfIcon
                                      readonly
                                      allowHover={false}
                                      size={20}
                                      emptyColor="#ccc"
                                      fillColorArray={[
                                        "#f17a45",
                                        "#f17a45",
                                        "#f17a45",
                                        "#f17a45",
                                        "#f17a45",
                                      ]}
                                    />
                                    <span className="ratingCount">
                                      <i className="fa-solid fa-angle-down ml-1" />{" "}
                                      <span className="ml-1">
                                        {/* {data?.activityRating ? data?.activityRating : "0"}{" "} */}
                                        (0)
                                      </span>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <div className="CourseJourney" id="CourseJourney">
                            <div className="CourseJournetCard">
                              <span className="leftClosebar">
                                <i className="fa fa-arrow-left"></i>
                              </span>
                              <div className="coursejounercrditem CourseJItemActive">
                                <h5 className="text-center">
                                  <img src={image.start_level} alt="" /> Level 1
                                </h5>
                                <div className="CourseJourneyDtl">
                                  <h3 className="mb-2">
                                    Chess for Beginners - Level 1{" "}
                                  </h3>
                                  <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s
                                  </p>
                                </div>
                                <div className="CourseJourneyicon">
                                  <p>Chess for Beginners</p>
                                </div>
                              </div>
                              <div className="coursejounercrditem">
                                <h5 className="text-center">
                                  <span>
                                    <i className="fa-regular fa-location-dot mr-2"></i>
                                  </span>{" "}
                                  Level 2{" "}
                                  <span className="coming_Soon">
                                    Coming Soon...
                                  </span>{" "}
                                </h5>
                                <div className="CourseJourneyicon">
                                  <p>Chess for Beginners</p>
                                </div>
                                <div className="CourseJourneyDtl">
                                  <h3 className="mb-2">
                                    Chess for Beginners - Level 1 (Once a Week,
                                    10 Weeks)
                                  </h3>
                                  <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s
                                  </p>
                                </div>
                              </div>
                              <div className="coursejounercrditem ">
                                <h5 className="text-center">
                                  <span>
                                    <i className="fa-regular fa-location-dot mr-2"></i>
                                  </span>{" "}
                                  Level 3{" "}
                                  <span className="coming_Soon">
                                    Coming Soon...
                                  </span>{" "}
                                </h5>
                                <div className="CourseJourneyDtl">
                                  <h3 className="mb-2">
                                    Chess for Beginners - Level 1 (Once a Week,
                                    10 Weeks)
                                  </h3>
                                  <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s
                                  </p>
                                </div>
                                <div className="CourseJourneyicon">
                                  <p>Chess for Beginners</p>
                                </div>
                              </div>
                              <div className="coursejounercrditem ">
                                <h5 className="text-center">
                                  <span>
                                    <i className="fa-regular fa-location-dot mr-2"></i>
                                  </span>{" "}
                                  Level 4{" "}
                                  <span className="coming_Soon">
                                    Coming Soon...
                                  </span>{" "}
                                </h5>
                                <div className="CourseJourneyDtl">
                                  <h3 className="mb-2">
                                    Chess for Beginners - Level 1 (Once a Week,
                                    10 Weeks)
                                  </h3>
                                  <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s
                                  </p>
                                </div>
                                <div className="CourseJourneyicon">
                                  <p>Chess for Beginners</p>
                                </div>
                              </div>
                              <div className="coursejounercrditem ">
                                <h5 className="text-center">
                                  <img src={image.intrest} alt="" /> Level 5
                                </h5>
                                <div className="CourseJourneyDtl">
                                  <h3 className="mb-2">
                                    Chess for Beginners - Level 1 (Once a Week,
                                    10 Weeks)
                                  </h3>
                                  <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s
                                  </p>
                                </div>
                                <div className="CourseJourneyicon">
                                  <p>Chess for Beginners</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
        </div>
      </Modal.Body>
      <Modal.Footer className="modal-footer p-0 pl-3 pr-3">
        <div className="input-group full-Width-group basic_details_form">
          <div className="form-group BDsubmitbutton d-flex m-0">
            <div className="buttonDistribotion">
              <button
                type="button"
                className="btn-blue btn-login d-block mb-5 cancelbutton"
                onClick={() => close()}
              >
                <i className="fa-solid fa-xmark"></i> Cancel
              </button>
              <button
                type="submit"
                className="btn-blue btn-login d-block mb-5 "
              >
                <i className="fa-solid fa-paper-plane"></i> Save
              </button>
            </div>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default PrimaryKey;
