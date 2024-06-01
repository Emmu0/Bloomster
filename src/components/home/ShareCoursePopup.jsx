import React, { useEffect, useState } from "react";
import * as image from "../../resources/images";
import { useForm, SelectPicker, Controller } from "../../utils/Packages";
import { SelectPickerVal, getSequnceSort } from "../../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { postShareCourses } from "../../redux/actions/APIs";
import { MSG } from "../../utils/Messages";
import { Select } from "antd";

const ShareCoursePopup = ({ handleSharePopup }) => {
  const { startEnrollCourses, response, dashboardData } = useSelector(
    (state) => state.collections
  );
  const dispatch = useDispatch();
  const {
    register,
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  const [submitLoader, setSubmitLoader] = useState(false);
  const [courseArray, setCourseArray] = useState();

  useEffect(() => {
    if (dashboardData) {
      const updatedCourseArray = [];
      getSequnceSort(dashboardData?.dimensions).map((item) => {
        const skilldata = getSequnceSort(item?.skills);
        if (skilldata) {
          return skilldata.map((skill) => {
            updatedCourseArray.push({
              id: skill.id,
              name: skill.name,
              module: item.name,
              sequence: item.sequence,
            });
          });
        }
      });
      setCourseArray(updatedCourseArray);
    }
  }, [startEnrollCourses]);

  const _onSubmit = (formData) => {
    setSubmitLoader(true);
    dispatch(postShareCourses(formData));
  };

  useEffect(() => {
    if (response) {
      setSubmitLoader(false);
      handleSharePopup(false);
    }
  }, [response]);

  return (
    <div
      className='modal fade show d-block AddChildPopup invite_frnd coursedevpopup'
      role='dialog'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-body p-0'>
            <div className='modal-header'>
              <div className='modal-title flex h4'>
                <img src={image.shareyouridea} alt='' className='mr-2' /> Share
                your course idea
              </div>
              <button
                className='btn btn-primary'
                data-dismiss='modal'
                onClick={() => handleSharePopup(false)}>
                <i className='fa-regular fa-xmark m-0'></i>
              </button>
            </div>
            <div>
              <form
                name='freesignin'
                className='bg-white content'
                onSubmit={handleSubmit(_onSubmit)}>
                <div className='modal-body p-0'>
                  <div className='modal-body addChildProf Subject_Curriculam'>
                    <div className=' flex'>
                      <div className='popupboxstyl'>
                        <p className='p-0'>
                          Select a skill you'd like us to create a course for,
                          and briefly describe the desired learning outcomes.
                        </p>
                      </div>
                    </div>
                    <div className='wrapper mt-0 mb-2'>
                      <div className='input-group'>
                        <div className='form-group'>
                          <label htmlFor=''>
                            Select a Skill
                            <span className='mandatoryField'>*</span>
                          </label>
                          <div>
                            <Controller
                              {...register("skillId", {
                                required: true,
                              })}
                              control={control}
                              render={({ field: { onChange, value } }) => {
                                const handleSkillChange = (event) => {
                                  onChange(event);
                                  clearErrors("skillId");
                                };

                                return (
                                  <SelectPicker
                                    data={SelectPickerVal(
                                      courseArray,
                                      "coursePopup"
                                    )}
                                    groupBy='module'
                                    defaultValue=''
                                    onChange={handleSkillChange}
                                    cleanable={false}
                                    searchable={true}
                                  />
                                );
                              }}
                            />
                            {errors.skillId && (
                              <p className='text-danger'>{MSG.SKILLREQ}</p>
                            )}
                          </div>
                          {/* <div
                            className="form-group"
                            data-toggle="collapse"
                            href="#state"
                          >
                            <Controller
                              {...register("skillId", {
                                required: true,
                              })}
                              control={control}
                              render={({ field: { onChange, value } }) => {
                                const handleSkillChange = (event) => {
                                  onChange(event);
                                  clearErrors("skillId");
                                };

                                return (
                                  <Select
                                    style={{ width: 120 }}
                                    showSearch
                                    placeholder="Select"
                                    optionFilterProp="children"
                                    onChange={handleSkillChange}
                                    filterOption={(input, option) => {
                                      return (
                                        option.props.children
                                          .toLowerCase()
                                          .indexOf(input.toLowerCase()) === 0
                                      );
                                    }}
                                  >
                                    {courseArray &&
                                      courseArray.map((course, index) => (
                                        <Option key={index} value={course.name}>
                                          {course.name}
                                        </Option>
                                      ))}
                                  </Select>
                                );
                              }}
                            />
                            {errors.skillId && (
                              <p className="invalid-feedback">{MSG.SKILLREQ}</p>
                            )}
                          </div> */}
                        </div>
                      </div>
                      <div className='input-group'>
                        <div className='form-group'>
                          <label htmlFor=''>
                            Course Description
                            <span className='mandatoryField'>*</span>
                          </label>
                          <textarea
                            type='text'
                            {...register("description", {
                              required: true,
                              maxLength: {
                                value: 255,
                                message: MSG.MAX255CHREQ,
                              },
                            })}
                            placeholder='Desired learning outcomes, key themes, etc.'
                            cols='30'
                            rows='10'
                            className={`form-control ${
                              errors.description ? "is-invalid" : ""
                            }`}
                          />
                          {errors.description?.type === "maxLength" ? (
                            <p className='text-danger'>{MSG.MAX255CHREQ}</p>
                          ) : (
                            errors.description?.type === "required" && (
                              <p className='text-danger'>{MSG.COURSE_DESC}</p>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='modal-footer w-100'>
                    <div className='form-group BDsubmitbutton d-flex m-0 '>
                      <button
                        type='button'
                        onClick={() => handleSharePopup(false)}
                        className='btn-blue btn-login d-block mb-5 cancelbutton ml-auto'>
                        <i className='fa-solid fa-xmark mr-2'></i> Close
                      </button>
                      {submitLoader ? (
                        <button
                          className='btn-blue btn-login d-block mb-5 '
                          disabled
                          key={Math.random()}>
                          <span className='RounAnimation'></span> Please wait...
                        </button>
                      ) : (
                        <button
                          type='submit'
                          className='btn-blue btn-login d-block ml-0 w-auto'>
                          <i className='fa-solid fa-paper-plane mr-2'></i>
                          Submit
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShareCoursePopup;
