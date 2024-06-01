import { useDispatch, useSelector } from "react-redux";
import * as image from "../../../../resources/images";
import ReadMore from "../../../controls/ReadMore";
import CourseJourney from "../../CourseJourney";
import { parentToolsModal } from "../../../../redux/actions";
const JourneyHalfScreen = ({ data }) => {
  const dispatch = useDispatch();
  const { journeyData } = useSelector((state) => state.collections);

  const closePopup = () => {
    dispatch(parentToolsModal());
  };

  return (
    <div className="halfPagePOpup SchoolActivityPopup parentQuizsanalysis ljpopups">
      <div className="modal d-block" id="schoolactivity130" role="dialog">
        <div className="modal-dialog modal-lg">
          <div className="modal-content courseInformation">
            <div className="modal-header">
              <div className="heading border-0 p-0">
                <h2 className="flex">
                  <span>
                    <img src={image.coursecardJourney} className="mr-2" />{" "}
                    Courses for{" "}
                    {["Math", "English"].includes(data?.skills?.name)
                      ? journeyData?.records[0]?.journeyName
                      : data?.skillName}
                    {/* Course Journey: a learning adventure to help {getCapitalized(defaultChildData?.firstName)} progress from beginner to expert in a skill */}
                  </span>
                  <button
                    className="btn btn-primary"
                    data-dismiss="modal"
                    onClick={() => closePopup()}
                  >
                    <i className="fa-regular fa-xmark m-0"></i>
                  </button>
                </h2>
              </div>
            </div>
            <div className="modal-body">
              <section>
                <div className="">
                  <div className="container coursejourneydetails">
                    <div className="CoursebannerWrap flex align-items-start p-0">
                      <div className="bannerright coursedetailbnr w-100">
                        <div className="PageTitle">
                          <div className="flex p-0">
                            <div>
                              {/* <h3 className="mb-3">{data?.journey?.name}</h3> */}
                            </div>
                          </div>
                          {/* <div className="CourseDetails">
                            <h4 className="mb-2">About Journey</h4>
                            <span
                              id="textheight"
                              className="text textdescription coursetextheght"
                            >
                              <ReadMore limit={480}>
                                {htmlStrip(data?.journey?.description)}
                              </ReadMore>
                            </span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <CourseJourney data={data} />
                  </div>
                </div>
              </section>
            </div>
            <div className="modal-footer">
              <div className="form-group BDsubmitbutton d-flex m-0">
                <div className="buttonDistribotion justify-content-between">
                  <button
                    type="button"
                    className="btn-blue btn-login d-block mb-5 cancelbutton"
                    onClick={() => closePopup()}
                  >
                    <i className="fa-solid fa-xmark"></i>Close
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
export default JourneyHalfScreen;
