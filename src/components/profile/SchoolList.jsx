/** @format */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { swal, ShimmerText } from "../../utils/Packages";
import { deleteUserEducation } from "../../redux/actions/APIs";
import DeletePopup from "../controls/DeletePopup";

const SchoolList = (data) => {
  let dispatch = useDispatch();
  const { getSelectedUser, response } = useSelector(
    (state) => state.collections
  );
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, [getSelectedUser && response]);

  const [expStartYear, setExpStartYear] = useState("");
  const [expEndYear, setExpEndYear] = useState("");
  const [totalExp, setTotalExp] = useState("");

  const [expStartMonth, setExpStartMonth] = useState("");

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [expEndMonth, setExpEndMonth] = useState("");

  const [startPopup, setStartPopup] = useState(false);
  const [interestId, setInterestId] = useState("");

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    let splitYear = data?.edu?.startDate?.split(" ");
    setExpStartYear(splitYear[1]);
    setExpStartMonth(splitYear[0]);

    let splitEndYear = data?.edu?.endDate?.split(" ");
    setExpEndYear(splitEndYear[1]);
    setExpEndMonth(splitEndYear[0]);

    setTotalExp(expEndYear - expStartYear);

    let date1 = expStartMonth + "01" + ", " + expStartYear;
    let date2 = expEndMonth + "01" + ", " + expEndYear;

    var diff = Math.floor(
      new Date(date2).getTime() - new Date(date1).getTime()
    );
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff / day);
    var months = Math.floor(days / 31);
    var years = Math.floor(months / 12);

    var newMon = months % 12;
    setYear(years);
    setMonth(newMon);
  }, [
    expStartMonth,
    expEndMonth,
    expStartYear,
    expEndYear,
    totalExp,
    getSelectedUser,
  ]);

  const deleteInt = (id) => {
    setStartPopup(true);
    setInterestId(id);
    // setInterestType(type);
  };

  useEffect(()=>{
    if(response){
      setLoader(false);
      setStartPopup(false);
    }
  },[response])

  const handleDelete = () => {
    setLoader(true)
    dispatch(deleteUserEducation(interestId, getSelectedUser?.id));
    // setStartPopup(false);
  };

  return (
    <>
      {loading ? (
        <ShimmerText line={5} gap={10} />
      ) : (
        <div className="fcardTitle">
          <div className="FieldinfoCard cart_style">
            <div className="fcardBody">
              <div className="fcardInfolist">
                <div className="comp_details">
                  <h4>
                    <i className="fa-solid fa-school"></i>{" "}
                    {data?.edu?.school?.name}
                  </h4>
                  {data?.edu?.type === "OTHER" ? (
                    ""
                  ) : (
                    <p>
                      <i className="fa-light fa-address-book mr-3"></i>{" "}
                      {`${data?.edu?.school?.address1},  ${
                        data?.edu?.school?.address2 === null
                          ? " "
                          : data?.edu?.school?.address2 + ","
                      } ${data?.edu?.school?.city}, ${
                        data?.edu?.school?.state
                      }, ${data?.edu?.school?.country}, ${
                        data?.edu?.school?.zip
                      }`}
                    </p>
                  )}
                  {data?.edu?.type === "COLLEGE" ? (
                    <div className="type_style">
                      <span>
                        {" "}
                        <i className="fa-regular fa-user-graduate"></i>{" "}
                        <strong> Degree: </strong>
                        {data?.edu?.degree?.name}
                      </span>
                      <span>
                        {" "}
                        <i className="fa-regular fa-book-copy"></i>{" "}
                        <strong>Field of Study: </strong>{" "}
                        {data?.edu?.field?.name}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                  {data?.edu?.type === "OTHER" ? (
                    <div className="type_style">
                      <span>
                        {" "}
                        <i className="fa-regular fa-laptop-code"></i>{" "}
                        <strong> Diploma: </strong> {data?.edu?.diploma}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="editcard">
                    <span
                      className=""
                      onClick={() =>
                        deleteInt(data?.edu?.id, getSelectedUser.id)
                      }
                    >
                      <i className="fa-solid fa-trash-can"></i>{" "}
                    </span>
                  </div>
                </div>
                <div className="experience">
                  <i className="fa-solid fa-calendar-days"></i>
                  <h4>
                    {year !== 0 && year !== 1 ? year + " Years" : ""}{" "}
                    {year === 1 ? year + " Year" : ""}{" "}
                    {month !== 0 && month !== 1 ? month + " Months" : ""}{" "}
                    {month === 1 ? month + " Month" : ""}{" "}
                  </h4>
                  <p>
                    {expStartYear} -{" "}
                    {data?.edu?.endDate ? expEndYear : "Current"}{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {startPopup && (
        <DeletePopup
          setStartPopup={setStartPopup}
          handleDelete={handleDelete}
          loader={loader}
        />
      )}
    </>
  );
};

export default SchoolList;
