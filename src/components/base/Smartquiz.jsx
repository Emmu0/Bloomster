import React from "react";
import Home from "../Home";
import * as image from "../../resources/images";
import ProgressBar from "../controls/ProgressBar";
const Smartquiz = () => {
  return (
    <div>
      <Home>
        <div className="d-flex align-items-flex-start w-100">
          <div className="LeftbarPannel p-0">
            <div className="smartquizbanner">
              <img src={image.howyousmartbanner} alt="" />
            </div>
            <div className="pt-3 mt-3 beginAssessmentbtn">
              <button className="btn-blue btn-login d-block  m-auto w-auto">
                <i className="fa-solid fa-paper-plane mr-2"></i>Begin Assessment
              </button>
            </div>
            {/* <div className="heading d-flex">
                            <h2 className="flex w-100">
                                <span>
                                    <img src={image.knowyoyrselfcolored} className="mr-2" alt="" />
                                    Assessment

                                </span>

                            </h2>
                        </div> */}
            {/* {/ <div className='quizblok'> /} */}
            {/* <div className="Progresslistitem text-center">
                                <div className="diemensionalProgress progressbar1"></div>
                                <span className='procompt'>60%</span>
                            </div> */}
            {/* {/ <div className='smartquizwrapper'> /} */}

            {/*                            
                           <h3 className='mb-3 quizrestitle'>Your Many Smarts</h3> 
                                <div className='smqzQueslist inequeresultwrap'>
                             <div className='flex intequResult'>
                             <div className='intellegencename'>Linguistic<img src={image.MIimage5} alt="" /></div>  <ProgressBar value={40}/> */}
            {/* {/ <div className='intellegencename'>Linguistic<img src={image.MIimage5} alt="" /></div>  /} */}
            {/* <div className="Progresslistitem text-center">
                              <div className="diemensionalProgress progressbar1 progress1"></div>
                            </div> */}
            {/* {/ <div className='procompt'>60%</div> /}
                            {/ </div> /}
                          */}
            {/* <div className='flex intequResult'>
                            <div className='intellegencename'>Logical Mathmatical<img src={image.MIimage4} alt="" /></div> 
                             <div className="Progresslistitem text-center">
                              <div className="diemensionalProgress progressbar1 progress1"></div>
                            </div>
                            <div className='procompt'>60%</div>
                            </div>  
                            <div className='flex intequResult'>
                            <div className='intellegencename'>Interapersonal<img src={image.MIimage7} alt="" /></div>
                             <div className="Progresslistitem text-center">
                              <div className="diemensionalProgress progressbar1 progress1"></div>
                            </div>
                            <div className='procompt'>60%</div>
                            </div>  
                            <div className='flex intequResult'>
                            <div className='intellegencename'>Interpersonal<img src={image.MIimage6} alt="" /></div>  
                             <div className="Progresslistitem text-center">
                              <div className="diemensionalProgress progressbar1 progress1"></div>
                            </div>
                            <div className='procompt'>60%</div>
                            </div>  

                            <div className='flex intequResult'>
                            <div className='intellegencename'>Musical<img src={image.MIimage3} alt="" /></div>
                             <div className="Progresslistitem text-center">
                              <div className="diemensionalProgress progressbar1 progress1"></div>
                            </div>
                            <div className='procompt'>60%</div>
                            </div> 
                            <div className='flex intequResult'>
                            <div className='intellegencename'>Bodily Kinesthetic<img src={image.MIimage8} alt="" /></div>
                             <div className="Progresslistitem text-center">
                              <div className="diemensionalProgress progressbar1 progress1"></div>
                            </div>
                            <div className='procompt'>60%</div>
                            </div> 
                            <div className='flex intequResult'>
                            <div className='intellegencename'>Naturalistic<img src={image.MIimage2} alt="" /></div>
                             <div className="Progresslistitem text-center">
                              <div className="diemensionalProgress progressbar1 progress1"></div>
                            </div>
                            <div className='procompt'>60%</div>
                            </div> 

                            <div className='flex intequResult'>
                            <div className='intellegencename'>Visual Spatial<img src={image.MIimage1} alt="" /></div> 
                             <div className="Progresslistitem text-center">
                              <div className="diemensionalProgress progressbar1 progress1"></div>
                            </div>
                            <div className='procompt'>60%</div>
                            
                        
                         

                                    {/* <div className="signupType m-0 mb-3">
                                        <h3 className="mb-3">
                                            <span><i className="fa-light fa-clipboard-question mr-2"></i>
                                            </span>{" "}
                                            What did Mrs. Jones do?
                                        </h3>
                                        <label className="Selcheckbox selActivelabel">
                                            She tokenized Shauna
                                            <input
                                                type="radio"
                                                id="Public"
                                                name="Question"
                                                checked
                                                value="PUBLIC"
                                            ></input>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="Selcheckbox">
                                            She tokenized the class
                                            <input
                                                type="radio"
                                                id="Private"
                                                name="Question"
                                                value="PRIVATE"
                                            ></input>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="Selcheckbox">
                                            She was helping Shauna share her experiences as a
                                            biracial student
                                            <input
                                                type="radio"
                                                id="Private"
                                                name="Question"
                                                value="PRIVATE"
                                            ></input>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="Selcheckbox">
                                            She was helping Shauna share her experiences as a
                                            biracial student
                                            <input
                                                type="radio"
                                                id="Private"
                                                name="Question"
                                                value="PRIVATE"
                                            ></input>
                                            <span className="checkmark"></span>
                                        </label>
                                        <label className="Selcheckbox">
                                            She was helping Shauna share her experiences as a
                                            biracial student
                                            <input
                                                type="radio"
                                                id="Private"
                                                name="Question"
                                                value="PRIVATE"
                                            ></input>
                                            <span className="checkmark"></span>
                                        </label>
                                        <div className="buttonDistribotion mt-3">
                                        <button
                                            type="submit"
                                            className="btn-blue btn-login d-block w-auto mb-5"

                                        >
                                            Next<i className="fa-solid fa-arrow-right ml-2 m-0"></i>
                                        </button>
                                        </div>
                                    </div> */}

            <div></div>
            {/* </div> 
                            </div> */}

            {/* <div className="input-group full-Width-group basic_details_form pagebuttonStrip">
                                <div className="form-group BDsubmitbutton d-flex m-0">

                                    <button
                                        type="button"
                                        className="btn-blue btn-login d-block mb-5"
                                        onClick={() => handleNext(false)}
                                    >
                                        <i className="fa-solid fa-arrow-left mr-2"></i> Back
                                    </button>


                                    <div className="buttonDistribotion">
                                        <button
                                            type="submit"
                                            className="btn-blue btn-login d-block mb-5"

                                        >
                                            Next<i className="fa-solid fa-arrow-right ml-2 m-0"></i>
                                        </button>
                                    </div>



                                    <button
                  type="button"
                  className="btn-blue btn-login d-block mb-5"
                  onClick={() => handleSubmit()}
                >
                  <i className="fa-solid fa-paper-plane"></i>Submit
                </button>



                                </div>
                            </div> */}
            {/* {/ </div> /} */}
          </div>
          <div className="RightbarPannel p-0">
            <div className="heading d-flex">
              <h2 className="flex w-100">
                <span>
                  <img
                    src={image.knowyoyrselfcolored}
                    className="mr-2"
                    alt=""
                  />
                  What Next
                </span>
              </h2>
            </div>
            <div className="LessionDtlOverview p-2">
              <p>
                You are about to embark on a journey to learn how our identities
                influence how we move through the world. We all have multiple
                identities (for example, our age, gender, race, ethnicity,
                sexual orientation, religion etc.) that interact in unique ways:
                this is called Intersectionality. Intersectionality occurs due
                to privilege and oppression.
              </p>
            </div>
          </div>
        </div>
      </Home>
    </div>
  );
};

export default Smartquiz;
