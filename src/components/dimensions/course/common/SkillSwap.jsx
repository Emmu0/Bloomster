/** @format */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as image from "../../../../resources/images";
import { shuffleArea } from "../../../../redux/actions/APIs";
import { MSG } from "../../../../utils/Messages";

const SkillSwap = ({ close, data }) => {
  let firstArray = [];
  let secondArray = [];
  let selectedElective = [];
  const dispatch = useDispatch();
  const params = useParams();
  const [errorMsg, setErrorMsg] = useState();
  const [removeItem, setRemoveItem] = useState([]);
  const { selectedDim, response, dimension } = useSelector(
    (state) => state.collections
  );
  data?.value.map((value, key) => {
    if (value.isCore) {
      value["title"] = value.name;
      value["titleId"] = value.id;
      firstArray.push(value);
    } else if (value.isDef) {
      value["title"] = value.name;
      value["titleId"] = value.id;
      selectedElective.push(value);
    } else {
      value["title"] = value.name;
      value["titleId"] = value.id;
      secondArray.push(value);
    }
  });

  const [skills, setSkills] = useState(secondArray);
  const [elective, setElective] = useState(selectedElective);

  const removeElective = (index, data) => {
    setErrorMsg();
    removeItem.push(data);
    elective[index].isDef = true;
    skills[Object.keys(skills).length] = elective[index];
    setSkills(Object.entries(skills).map(([name, obj]) => ({ name, ...obj })));
    var temp = elective;
    temp[index].title = <span className='Createspacing'>Add New...</span>;
    temp[index].isDef = false;
    setElective(Object.entries(temp).map(([name, obj]) => ({ name, ...obj })));
  };

  const addElective = (index, data) => {
    let emptyElective = 0;

    setErrorMsg(MSG.SKILL);
    elective.map((vl, ky) => {
      if (typeof vl?.title === "object") {
        emptyElective = 1;
        setErrorMsg();
      }
    });

    if (emptyElective) {
      var temp = elective;
      for (var i in elective) {
        if (!temp[i].isDef) {
          temp[i].title = data?.title;
          temp[i].titleId = data?.titleId;
          temp[i].isDef = true;
          break;
        }
      }
      setElective(
        Object.entries(temp).map(([name, obj]) => ({ name, ...obj }))
      );

      var sArray = [];
      var count = 0;
      for (var i in skills) {
        if (i != index) {
          sArray[count++] = skills[i];
        }
      }
      setSkills(sArray);
    }
  };
  const submitData = () => {
    let obj = [];
    elective.map((vl, ky) => {
      if (vl?.id !== vl?.titleId) {
        let flag = false;
        if (data?.key === "Key Areas") {
          flag = true;
        }
        obj.push({ removeId: vl?.id, addId: vl?.titleId, isArea: flag });
      }
    });

    dispatch(shuffleArea(params?.id, obj, selectedDim, dimension));
  };

  return (
    <div className='centerPagePopup'>
      <div className='modal fade d-block show' id='myModal' role='dialog'>
        <div className='modal-dialog modal-lg'>
          <div className='modal-content'>
            <div className='modal-header p-0'>
              <div className='heading w-100'>
                <h3 className='flex'>
                  <span>
                    <img
                      src={image.selectedSkillsicon}
                      className='mr-2'
                      alt='...'
                    />
                    Select Skills: Social Dimension
                  </span>
                  <button
                    type='button'
                    className='close'
                    onClick={() => close()}>
                    &times;
                  </button>
                </h3>
              </div>
            </div>

            <div className='modal-body'>
              <div className='d-flex justify-content-around mb-3'>
                <h4>Skills</h4>
                <h4>Selected Skills</h4>
              </div>
              <div className='SwapSkills d-flex'>
                <div className='dragabeSkills'>
                  <div className='d-flex flex-wrap'>
                    {skills.map((data, index) => (
                      <div className='drag-node' key={index}>
                        {" "}
                        {data?.title}
                        <span
                          className='pointer ml-3 AddSwapSkills'
                          onClick={() => addElective(index, data)}>
                          {" "}
                          <i className='fa-solid fa-circle-plus'></i>{" "}
                        </span>{" "}
                      </div>
                    ))}
                  </div>
                  {errorMsg && (
                    <p className='MessagefchooseSkills'>{errorMsg}</p>
                  )}
                </div>
                <span className='dragdropweenIcon'>
                  <i className='fa-light fa-arrow-right-arrow-left'></i>
                </span>
                <div className='dragabeSkills d-flex-wrap'>
                  <div className='w-100 AddTypeSkills'>
                    <h5 className='text-center'>Core</h5>
                    <div className='d-flex flex-wrap'>
                      {firstArray.map((data, index) => (
                        <div className='drag-node' key={index}>
                          <span className='CoreSkills'>c</span> {data?.title}{" "}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className='w-100 AddTypeSkills border-0'>
                    <h5 className='text-center pt-2'>Elective</h5>
                    <div className='d-flex flex-wrap'>
                      {elective.map((data, index) => (
                        <div className='drag-node' key={index}>
                          <span className='ElectiveSkills'>e</span>
                          {data?.title}{" "}
                          {typeof data?.title === "string" && (
                            <span
                              className='pointer ml-3'
                              onClick={() =>
                                removeElective(index, data?.title)
                              }>
                              <span className='crossmark'>
                                <i className='fa-solid fa-xmark'></i>
                              </span>
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='modal-footer p-1'>
              <div className='input-group full-Width-group basic_details_form'>
                <div className='form-group BDsubmitbutton m-0 d-flex'>
                  <div className='buttonDistribotion'>
                    <button
                      onClick={() => close()}
                      type='button'
                      className='btn-blue btn-login d-block mb-5 cancelbutton'>
                      <i className='fa-solid fa-xmark'></i> Cancel
                    </button>
                    <button
                      onClick={() => submitData()}
                      type='button'
                      className='btn-blue btn-login d-block mb-5 '>
                      <i className='fa-solid fa-paper-plane'></i> Save
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
export default SkillSwap;
