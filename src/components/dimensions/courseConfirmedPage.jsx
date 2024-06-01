import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getName } from "../../utils/helper";
import { useForm } from "../../utils/Packages";
import { turnNotification } from "../../redux/actions/APIs";
import * as image from "../../resources/images";

const CourseConfirmedPage = ({
  registerVal,
  courseIds,
  setCourseIds,
  closeModal,
  onSubmit,
  noti,
  setNoti,
}) => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { notification } = useSelector((state) => state.collections);
  const dispatch = useDispatch();

  const enrollChecked = (value, checked) => {
    if (checked) {
      setCourseIds([...courseIds, value]);
    } else {
      setCourseIds(courseIds?.filter((id) => id !== value));
    }
  };

  const handleNotification = (e) => {
    if (e.target.checked === true) {
      setNoti(false);
      // dispatch(turnNotification(false));
    } else {
      setNoti(true);
      // dispatch(turnNotification(true));
    }
  };

  return (
    <div className=' HolisticProgress EnrollCourseConfimation'>
      <div
        className='modal d-flex'
        id='schoolactivity13'
        role='dialog'
        aria-labelledby='exampleModalCenterTitle'
        aria-hidden='true'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='modal-dialog modal-lg'>
            <div className='modal-content'>
              <div className='modal-header p-0'>
                <div className='heading'>
                  <h2 className='justify-content-between align-items-baseline'>
                    Please confirm that you have enrolled these course
                    <span className='pointer pl-3' onClick={() => closeModal()}>
                      {" "}
                      <i className='fa-solid fa-xmark'></i>
                    </span>
                  </h2>
                </div>
              </div>
              <div className='modal-body p-0 pb-3'>
                <div className='SelectCourseLIst'>
                  {registerVal.map((v1, key) => (
                    <div className='selectcourseItem d-flex ' key={key}>
                      <div className='selicoursetemwrap d-flex'>
                        <div className='SelCourseimg'>
                          {v1?.imageUrl ? (
                            <img src={v1?.imageUrl} alt='...' />
                          ) : (
                            <img
                              alt='...'
                              className='img-fluid'
                              src={image.noImage}
                            />
                          )}
                        </div>
                        <div className='selCourseDesc pl-2'>
                          <h3>{v1.name}</h3>
                          {/* <p
                            dangerouslySetInnerHTML={{
                              __html: v1 && v1["description"],
                            }}
                          ></p> */}

                          <h4>{getCapitalized(getName(v1?.provider))} </h4>
                        </div>
                      </div>
                      <div className='Selvidoption'>
                        <span className='rightcheck text-center'>
                          <span className='d-block mb-2'>Please Select</span>
                          <input
                            type='checkbox'
                            // id="Public"
                            // name="schoolType"
                            value={v1?.id}
                            onChange={(e) =>
                              enrollChecked(e.target.value, e.target.checked)
                            }
                            // checked={vl1?.lesson?.isCompleted}
                            // onClick={() =>
                            //   isCompleted(
                            //     val?.module?.id,
                            //     vl1?.lesson?.id,
                            //     !vl1?.lesson?.isCompleted
                            //   )
                            // }
                          />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='TernOffNotification'>
                  <label htmlFor='' className='d-flex'>
                    <input
                      type='checkbox'
                      className='mr-2'
                      onChange={(e) => handleNotification(e)}
                      // onClick={handleNotification}
                    />
                    Turn off notifications.{" "}
                  </label>
                </div>
              </div>
              <div className='modal-footer p-0 p-2'>
                <div className='form-group BDsubmitbutton m-0 d-flex pr-2'>
                  <div className='buttonDistribotion'>
                    <button
                      type='button'
                      className='btn-blue btn-login d-block mb-5 cancelbutton'
                      onClick={closeModal}>
                      <i className='fa-solid fa-xmark'></i> Cancel
                    </button>
                    <button
                      type='submit'
                      className='btn-blue btn-login d-block mb-5'>
                      <i className='fa-solid fa-paper-plane'></i> Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CourseConfirmedPage;
