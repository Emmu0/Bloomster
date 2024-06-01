/** @format */

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserExperience } from "../../redux/actions/APIs";
import { ShimmerText } from "../../utils/Packages";
import DeletePopup from "../controls/DeletePopup";

const CompanyList = (data) => {
  let dispatch = useDispatch();
  const { getSelectedUser, response } = useSelector(
    (state) => state.collections
  );

  const [expStartYear, setExpStartYear] = useState("");
  const [expEndYear, setExpEndYear] = useState("");
  const [totalExp, setTotalExp] = useState("");

  const [expStartMonth, setExpStartMonth] = useState("");

  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [expEndMonth, setExpEndMonth] = useState("");
  const [currentYear] = useState(new Date().getFullYear());
  const [currentMonth] = useState(new Date().getMonth());

  const [startPopup, setStartPopup] = useState(false);
  const [interestId, setInterestId] = useState("");

  const [loading, setloading] = useState(true);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, [getSelectedUser && response]);

  useEffect(()=>{
    if(response){
      setStartPopup(false);
    setLoader(false);
    }
  },[response])

  useEffect(() => {
    let splitYear = data?.exp?.startDate?.split(" ");

    setExpStartYear(splitYear[1]);
    setExpStartMonth(splitYear[0]);

    if (data?.exp?.endDate) {
      let splitEndYear = data?.exp?.endDate?.split(" ");
      setExpEndYear(splitEndYear[1]);
      setExpEndMonth(splitEndYear[0]);
    } else {
      setExpEndYear(currentYear);
      setExpEndMonth(currentMonth === 0 ? "1" : currentMonth);
    }

    let date1 = expStartMonth + " " + "01" + " " + expStartYear;
    let date2 = expEndMonth + " " + "01" + " " + expEndYear;
e
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
    currentYear,
    currentMonth,
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

  const handleDelete = () => {
    setLoader(true)
    dispatch(deleteUserExperience(interestId, getSelectedUser?.id));
    // setStartPopup(false);
    // setLoader(false);
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
                    <i className="fa-solid fa-buildings mr-2"></i>{" "}
                    {data?.exp?.company?.name}{" "}
                    <span> ({data?.exp?.title?.name}) </span>
                  </h4>
                  <p>
                    {" "}
                    {`${data?.exp?.company?.address1}, ${
                      data?.exp?.company?.address2 === null
                        ? ""
                        : data?.exp?.company?.address2 + ","
                    } ${data?.exp?.company?.city}, ${
                      data?.exp?.company?.state
                    }, ${data?.exp?.company?.country}, ${
                      data?.exp?.company?.zip
                    }`}
                  </p>
                  <div className="type_style">
                    <span>
                      {" "}
                      <strong> Industry: </strong>
                      {data?.exp?.industry?.name}
                    </span>
                    <span>
                      {" "}
                      <strong> Division:</strong> {data?.exp?.division?.name}{" "}
                    </span>
                  </div>
                  <div className="editcard">
                    <span
                      className=""
                      onClick={() => deleteInt(data.exp.id, getSelectedUser.id)}
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
                    {data?.exp?.endDate ? expEndYear : "Current"}{" "}
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

export default CompanyList;
