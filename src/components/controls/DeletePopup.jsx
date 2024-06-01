/** @format */

import React from "react";

import * as image from "../../resources/images";
import Vicky from "./Vicky";

const DeletePopup = ({
  data,
  handleDelete,
  setStartPopup,
  loader,
  type,
  setDelId
}) => {
  return (
    <div className=' hoosrSubModlPopup AreyousurePopup AddChildPopup'>
      <div className=' hoosrSubModlPopup AreyousurePopup'>
        <div className='modal fade show d-block' role='dialog'>
          <div className='modal-dialog modal-lg'>
            <div className='modal-content courseInformation schoolcourse'>
              <div className='modal-header NuggetPopupTitle'>
                <div className='heading border-0 w-100 NuggetVickyImage p-0'>
                  <h4 className='flex'>
                    <span>
                      {" "}
                      <img src={image.areyousure} alt='' className='mr-2 p-1' /> Are
                      You Sure?
                    </span>
                    <button
                      className='btn btn-primary'
                      onClick={() => {
                        setStartPopup(false);
                        setDelId("");
                      }}>
                      <i className='fa-regular fa-xmark m-0'></i>
                    </button>
                  </h4>
                </div>
              </div>

              <div className='modal-body Subject_Curriculam text-center flex'>
                <h2 className='areYouSuretext'>
                  {type === "enroll"
                    ? "You will not be able to change your selection later."
                    : "   You won't be able to undo your deletion!"}
                </h2>
              </div>

              <div className='modal-footer '>               
                <div className='form-group BDsubmitbutton d-flex m-0 '>
                  <div className="buttonDistribotion">
                {loader ? 
                 <button
                 className='btn-blue btn-login d-block mb-5 ml-0'
                 key={Math.random()}
                 disabled>
                 <span className='RounAnimation mr-1'></span> Please
                 Wait...
               </button> : 
               <>
                  <button
                    type='button'
                    onClick={() => {
                      setStartPopup(false);
                      setDelId("");
                    }}
                    className='btn-blue btn-login d-block mb-5 cancelbutton  ml-auto'>
                    <i className='fa-solid fa-xmark mr-2'></i> No
                  </button>
                  <button
                    type='button'
                    onClick={() => handleDelete()}
                    className='btn-blue btn-login d-block ml-0 w-auto'>
                    <i className='fa-solid fa-paper-plane mr-2'></i>Yes 
                  </button>
                  </>}
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

export default DeletePopup;
