import { ShimmerCategoryList } from "react-shimmer-effects";
import * as image from "../../../../resources/images";
import { getSequnceSort } from "../../../../utils/helper";
import { getImage } from "../../../../utils/helper";
const Lessons = ({ handleTabChange, data, loader, providerSceneView }) => {
  return (
    <>
      {loader ? (
        <div className="LessonTable_Wrap">
          <div className="lessonCNameList">
            <ul>
              <li>
                <p className="text-right pr-3 justhintsofpage">
                  <i className="fa-light fa-circle-info mr-2"></i>Click on the
                  lesson name to navigate directly to its video
                </p>

                {data &&
                  getSequnceSort(data)?.map((les, ind) => (
                    <ul className="weeklist" key={ind}>
                      <li className="weellistname">
                        <h4>{les?.name}</h4>

                        <ul className="flex flex-wrap">
                          {getSequnceSort(les.scenes).map((cour, index) => (
                            <li key={index}>
                              <div className="d-flex align-items-center">
                                <div className="lessoncourseTitleimg">
                                  <img alt="" src={getImage(cour.imageurl)} />
                                </div>
                                <div className="LCtitle w-100">
                                  <p
                                    className="flex"
                                    onClick={() =>
                                      handleTabChange("Series", index, cour)
                                    }
                                  >
                                    <a href="#">{cour?.name}</a>
                                    {(cour?.isCompleted ||
                                      providerSceneView.includes(cour?.id)) && (
                                      <img
                                        src={image.enrolledicon}
                                        alt=""
                                        className="mr-2"
                                      />
                                    )}
                                  </p>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  ))}
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <ShimmerCategoryList items={3} categoryStyle="STYLE_SIX" />
      )}
    </>
  );
};

export default Lessons;
