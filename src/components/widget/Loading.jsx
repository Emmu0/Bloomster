/** @format */
import { useEffect, useState } from "react";
import { getName } from "../../utils/helper";
import { useSelector } from "react-redux";
import { SITEFNAME } from "../../utils/Messages";

const Loading = () => {
  const { alluserdetails, addLearner, signupresponse, loggedInUser } =
    useSelector((state) => state.collections);

  const [newUserId, setNewUserId] = useState("");
  const [initialData, setInitialData] = useState(undefined);
  let userData = alluserdetails?.records[0];
  useEffect(() => {
    if (addLearner?.success) {
      setNewUserId(addLearner?.recordId);
      let newChild = userData?.children.filter(
        (data) => data.id === addLearner?.recordId
      );
      setInitialData(newChild[0]);
    } else if (signupresponse?.success) {
      setInitialData(loggedInUser?.children[0]);
    }
  }, [addLearner, alluserdetails, signupresponse]);

  return (
    <div className="">
      <div
        className="modal fade show d-block"
        id="exampleModalCenter1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-body">
              <div className="vickyProgressbar">
                <h3 className="text-center mb-4">
                  {SITEFNAME.NAME} is creating {getName(initialData)} dimensional view
                </h3>

                <div className="Progressbarlisting">
                  <h4 className="text-center">Intellectual</h4>
                  <div className="Progresslistitem">
                    <div className="diemensionalProgress progressbar1"></div>
                  </div>
                  <h4 className="text-center">Physical</h4>
                  <div className="Progresslistitem">
                    <div className="diemensionalProgress progressbar2"></div>
                  </div>
                  <h4 className="text-center">Social</h4>
                  <div className="Progresslistitem">
                    <div className="diemensionalProgress progressbar3"></div>
                  </div>
                  <h4 className="text-center">Emotional</h4>
                  <div className="Progresslistitem">
                    <div className="diemensionalProgress progressbar4"></div>
                  </div>
                  <h4 className="text-center">Spiritual</h4>
                  <div className="Progresslistitem">
                    <div className="diemensionalProgress progressbar5"></div>
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

export default Loading;
