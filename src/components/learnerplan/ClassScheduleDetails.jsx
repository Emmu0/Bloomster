import React from "react";
import * as image from "../../resources/images";
import { setClassSchedule } from "../../redux/actions";
import { useDispatch } from "react-redux";

const ClassScheduleDetails = () => {
  const dispatch = useDispatch();
  const _closeModal = () => {
    console.log("step");
    dispatch(setClassSchedule());
  };
  return (
    <>
      <div className='halfPagePOpup coursedetailpopuppage'>
        <div className='modal d-flex' id='schoolactivity170' aria-hidden='true'>
          <div className='modal-dialog modal-lg' id='ClassSchedule'>
            <div className='modal-content w-100 max-width-100'>
              <div className='modal-header'>
                <div className='heading border-0 p-0'>
                  <h2 className='flex'>
                    <span>
                      <img src={image.information} alt='...' className='mr-2' />
                      Class Schedule
                    </span>

                    <button
                      data-dismiss='modal'
                      className='btn btn-primary'
                      onClick={() => _closeModal()}>
                      <i className='fa-regular fa-xmark m-0'></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className='modal-body p-0'>
                <div className='container p-3 mt-2'>
                  <div className='flex'>
                    <div className='teachernameDiv'>
                      <h5 className=''>
                        Teacher Name: <span>Richard</span>
                      </h5>
                    </div>

                    <div className='classtimingDiv'>
                      <h5 className=''>
                        Class Timing: <span>12:30 PM EST</span>
                      </h5>
                    </div>
                  </div>

                  <div className='flex pt-3'>
                    <div className='classnameDiv'>
                      <h5 className=''>
                        Class Name: <span>Class1</span>
                      </h5>
                    </div>

                    <div className='float-right'>
                      <a href='#'>
                        <img
                          src={image.printIcon}
                          alt=''
                          style={{ maxWidth: "25px" }}
                          className='me-2'
                        />
                      </a>
                      <a href='#'>
                        <img
                          src={image.exportIcon}
                          alt=''
                          style={{ maxWidth: "23px" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <hr />

                <div class='container mt-3'>
                  <table class='table table-bordered'>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Course / Module</th>
                        <th className='heading-th'></th>
                        <th className='heading-th'></th>
                        <th className='heading-th'></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='subheading'>
                        <td>1</td>
                        <td>Communication Foundations</td>
                        <td>
                          Session 1 <span>(30 Min)</span>
                        </td>
                        <td>
                          Session 2 <span>(45 Min)</span>
                        </td>
                        <td>
                          Session 3 <span>(30 Min)</span>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>Effective Communication Essentials</td>
                        <td>Tuesday, Mar 26, 2024</td>
                        <td>Thursday, Mar 28, 2024</td>
                        <td>Thursday, Mar 28, 2024</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>Language and Communication</td>
                        <td>Tuesday, Apr 2, 2024</td>
                        <td>Thursday, Apr 4 2024</td>
                        <td>Thursday, Apr 4 2024</td>
                      </tr>

                      <tr>
                        <td></td>
                        <td>Communication Challenges</td>
                        <td>Tuesday, Apr 9, 2024</td>
                        <td>Thursday, Apr 11 2024</td>
                        <td>Thursday, Apr 11 2024</td>
                      </tr>

                      <tr>
                        <td></td>
                        <td>Digital Citizenship and Communication</td>
                        <td>Tuesday, Apr 16, 2024</td>
                        <td>Thursday, Apr 18 2024</td>
                        <td>Thursday, Apr 18 2024</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='modal-footer'>
                <div className='input-group full-Width-group basic_details_form flex m-0'>
                  <div className='form-group BDsubmitbutton d-flex m-0'>
                    <button
                      type='submit'
                      className='btn-blue btn-login d-block mb-5 m-0 ml-auto cancelbutton'
                      onClick={() => _closeModal()}>
                      <i className='fa-solid fa-xmark mr-2'></i>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ClassScheduleDetails;
