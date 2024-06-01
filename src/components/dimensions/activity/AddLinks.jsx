/** @format */

import React, { useState } from "react";
import { useEffect } from "react";
import { URL_REGEX } from "../../../utils/Regex";
import { MSG } from "../../../utils/Messages";

const AddLinks = ({
  dataType,
  register,
  errors,
  linkData,
  unregister,
  showActivityForm,
  setValue,
}) => {
  const [random, setRandom] = useState();
  const [formValues, setFormValues] = useState([
    {
      type: dataType ? dataType : "Links" || "Books",
      name: null,
      link: "",
    },
  ]);

  // let addFormFields = () => {
  //   setFormValues([
  //     ...formValues,
  //     {
  //       type: dataType ? dataType : "Links" || "Books",
  //       name: null,
  //       link: "",
  //     },
  //   ]);
  // };

  let addFormFields = () => {
    const results = formValues.filter((element) => {
      if (Object.keys(element).length !== 0) {
        return true;
      }
    });
    setFormValues([
      ...results,
      {
        type: dataType ? dataType : "Links" || "Books",
        name: null,
        link: "",
      },
    ]);
  };

  let handleChange = (i, e) => {
    const results = formValues.filter((element) => {
      if (Object.keys(element).length !== 0) {
        return true;
      }
    });
    let newFormValues = [...results];

    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  const removeFormFields = (index) => {
    const results = formValues.filter((element) => {
      if (Object.keys(element).length !== 0) {
        return true;
      }
    });
    let newFormValues = [...results];
    newFormValues.map((vl, ky) => {
      if (ky === index) {
        delete newFormValues[ky];
        unregister(`activityDetails.${index}.name`);
        unregister(`activityDetails.${index}.link`);
      }
    });
    setFormValues(newFormValues);
  };

  linkData(formValues);
  let linkOBject = [];
  useEffect(() => {
    if (showActivityForm != null) {
      setFormValues(showActivityForm);
      showActivityForm.map((val, key) => {
        linkOBject.push({
          link: val?.link,
          name: val?.name,
        });
        setValue(`activityDetails.${key}.name`, val.name);
        setValue(`activityDetails.${key}.link`, val.link);
      });
    }
  }, [showActivityForm]);

  return (
    <>
      <div className='SecondryActivityform'>
        <div className='form-title'>
          <h4 data-toggle='collapse'>
            {dataType}
            {/* <span className="mandatoryField">*</span> */}
          </h4>
        </div>

        <div className='CourseSchedule SActivytForm  w-100 flex flex-wrap'>
          {formValues.map((element, index) => (
            <React.Fragment key={index}>
              <div className='input-group flex justify-content-around mb-3'>
                <label> Topic (Optional)</label>
                <div className='form-group'>
                  <input
                    maxLength={100}
                    {...register(`activityDetails.${index}.name`, {
                      pattern: {
                        value: /^.{1,100}$/,
                        message: MSG.MAX100CHREQ,
                      },
                    })}
                    onChange={(e) => handleChange(index, e)}
                    type='text'
                    className={`form-control ${
                      errors.activityDetails?.[index]?.name ? "is-invalid" : ""
                    }`}
                    placeholder=''
                  />
                  {errors.activityDetails?.[index]?.name && (
                    <p className='text-danger'>
                      {errors.activityDetails?.[index]?.name?.message}
                    </p>
                  )}
                </div>
              </div>
              {/* SHIV */}
              <div className='input-group flex justify-content-around mb-3'>
                <label>
                  URL<span className='mandatoryField'>*</span>
                </label>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder=''
                    className={`form-control ${
                      errors && errors.activityDetails?.[index]?.link
                        ? "is-invalid"
                        : ""
                    }`}
                    {...register(`activityDetails.${index}.link`, {
                      required: {
                        value: true,
                        message: MSG.URLREQ,
                      },
                      pattern: {
                        value: URL_REGEX,
                        message: MSG.INVURLREQ,
                      },
                    })}
                  />
                  {errors && errors?.activityDetails?.[index]?.link && (
                    <p className='text-danger'>
                      {errors.activityDetails?.[index]?.link?.message}
                    </p>
                  )}
                </div>
              </div>
              {/* SHIV */}
              {index > 0 ? (
                <span
                  className='deleteitem'
                  onClick={() => removeFormFields(index)}>
                  <i className='fa-solid fa-trash-can'></i>
                </span>
              ) : (
                <span className='deleteitem pr-3'>&nbsp;</span>
              )}
            </React.Fragment>
          ))}

          <div className='BDsubmitbutton Addchieldbtn w-100 addEnrichbtn m-0 mt-3'>
            <strong className='d-block' onClick={() => addFormFields()}>
              Add More Link <span>+</span>
            </strong>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddLinks;
