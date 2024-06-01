import React from "react";
import Home from "../Home";
import * as image from "../../resources/images";
import ProgressBar from "../controls/ProgressBar";
const Smartquiz = () => {
  return (
    <div>
      <Home>
        <div className="d-flex align-items-flex-start w-100">
          {/* <div className="LeftbarPannel p-0">
            <div className="smartquizbanner">
              <img src={image.empathyquizbanner} alt="" />
            </div>
            <div className="pt-3 mt-3 beginAssessmentbtn">
              <button className="btn-blue btn-login d-block  m-auto w-auto">
                <i className="fa-solid fa-paper-plane mr-2"></i>Begin Quiz
              </button>
            </div>
          </div> */}
          {/* <div className="RightbarPannel p-0">
            <div className="heading d-flex">
              <h2 className="flex w-100">
                <span>
                  <img src={image.empathyicon} className="mr-2" alt="" />
                  How Empathetic Are You?
                </span>
              </h2>
            </div>
            <div className="LessionDtlOverview p-2">
              <p>
                <strong>Quiz Introduction:</strong>
              </p>
              <p>
                Ever wonder how well you vibe with others' feelings?
                That&rsquo;s called empathy. Empathy is like feeling a friend's
                happiness or sadness in your own heart and being there for them.
                It's understanding how someone else feels, even if you're not in
                their shoes.
              </p>
              <p>&nbsp;</p>
              <p>
                This fun quiz is kinda like finding out your snack spirit when
                it comes to empathy. Let's see what snack you turn out to be!
              </p>
              <p>&nbsp;</p>
              <p>
                <strong>Instructions:</strong>
              </p>
              <ol>
                <li>
                  <p>
                    Read each scenario-based question and the answer choices.
                  </p>
                </li>
                <li>
                  <p>Pick the answer that sounds most like YOU.</p>
                </li>
                <li>
                  <p>
                    Make sure you answer each question honestly, basing your
                    responses on your actual behavior and feelings, not how you
                    think you 'should' answer. There are no right or wrong
                    answers.
                  </p>
                </li>
                <li>
                  <p>
                    At the end of the quiz, based on your responses, you'll be
                    presented with one of the three snack choices that reflect
                    and represent your current empathy level.
                  </p>
                </li>
              </ol>
              <p>&nbsp;</p>
              <p>
                Click the <strong>&ldquo;Begin Assessment&rdquo;</strong> button
                to get started.
              </p>
            </div>
          </div> */}

          {/* <div className="LeftbarPannel p-0">
          <div className='quizblok empathybarhgt'> 
            <div className="Progresslistitem w-100 text-center">
                                <div className="diemensionalProgress"></div>
                                <span className='procompt empathybar'>0%</span>
            </div>             
          </div>       
          
          <div class="smartquizwrapper">  
                <div class="smqzQueslist">
                    <div class="signupType mt-3 mb-3">
                         <div>
                            <h3>
                                <span><i class="fa-light fa-clipboard-question mr-2"></i> You see a classmate sitting alone during recess and looking sad. You...</span>
                                <label class="Selcheckbox ">Keep playing with your friends and don't pay attention. 
                                <input type="radio" id="" value="" /><span class="checkmark"></span>
                                </label>

                                <label class="Selcheckbox ">Think about saying hi, but wait to see if someone else does.
                                <input type="radio" id="" value="" /><span class="checkmark"></span>
                                </label>

                                <label class="Selcheckbox ">Go over and ask if they want to hang out and talk.
                                <input type="radio" id="" value="" /><span class="checkmark"></span>
                                </label>

                            </h3>
                         </div>
                         <div className="pt-3 empathybtn">
                         <button className="btn-blue btn-login d-block w-auto mb-5 ml-auto">
              <i className="fa-solid fa-arrow-left mr-2"></i>Back
              </button>

              <button className="btn-blue btn-login d-block w-auto mb-5 ml-auto">
              Next<i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </div>
                    </div>
                </div>
            </div>
            
          </div>            */}
          {/* <div className="RightbarPannel p-0">
            <div className="heading d-flex">
              <h2 className="flex w-100">
                <span>
                  <img
                    src={image.empathyicon}
                    className="mr-2"
                    alt=""
                  />
                  How Empathetic Are You?
                </span>
              </h2>
            </div>
            <div className="LessionDtlOverview p-2">
              <p>
              Make sure you go with your first instinct! Don't spend too long on each question. 
              </p>
              <p>&nbsp;</p>
              <p>
              There are no 
              judgments here. It's all about understanding yourself better. </p>
            </div>
          </div> */}

          <div className="LeftbarPannel p-0">
            <div class="smartquizwrapper">
              <div class="smqzQueslist">
                <div class="signupType mt-3 mb-3">
                  <div>
                    <div className="empathy_header">
                      <h4>Awesome Work!</h4>
                      <p>See what snack best reflects your level of empathy </p>
                      <div className="flex chipsback">
                        <img src={image.chipspack} />
                        <span className="w-100">
                          <p>
                            <strong>Bag of Chips (Low Empathy):</strong>{" "}
                            Sometimes you pick stuff 'cause it's quick and easy,
                            like grabbing a bag of chips when you're hungry.
                            It's not that you don't care about others; maybe
                            you're just in a phase where you're figuring things
                            out for yourself.
                          </p>
                          <p>
                            <strong>Friendly Tip:</strong> Try slowing down and
                            really listening to your friends now and then. It's
                            kinda cool when you really get to know them better.
                            Little things, like asking about their day or
                            remembering their favorite drink, can make a big
                            difference.{" "}
                          </p>
                        </span>
                      </div>
                    </div>

                    <div className="checkout_header mt-3">
                      <h4>Check out other snack types!</h4>
                    </div>
                    <hr className="empathyborderstyle"></hr>

                    <div className="flex chipsback">
                      <span className="w-100">
                        <p>
                          <strong>Homemade Cookies (Medium Empathy):</strong>{" "}
                          Nice! You're like those cookies baked with care and
                          love. You often get how your friends feel and want to
                          help, just like making cookies for a friend who's
                          down. But sometimes, some tiny details might zip past
                          you.
                        </p>
                        <p>
                          <strong>Friendly Tip:</strong> Keep it up! Try joining
                          a group or club at school to practice listening and
                          understanding even better. Little things like helping
                          out or just chatting can help you connect even deeper
                          with others.
                        </p>
                      </span>
                      <img src={image.cockiesimg} />
                    </div>

                    <hr></hr>

                    <div className="flex chipsback mt-3">
                      <img src={image.snacksbag} />
                      <span className="w-100">
                        <p>
                          <strong>
                            Personalized Snack Box (High Empathy):{" "}
                          </strong>{" "}
                          Amazing! This isn’t just any snack box. It's YOUR
                          snack box. Picking all the right snacks takes time and
                          thought, just like someone with high empathy doesn't
                          just do whatever takes the least effort to understand
                          and listen to how someone feels.
                        </p>
                        <p>
                          <strong>Friendly Tip:</strong> Remember, being super
                          understanding is great, but take some 'me-time' too!
                          And hey, teach others how to be as understanding as
                          you, whether in group projects or buddy programs. Just
                          don't forget to chill and recharge.{" "}
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="RightbarPannel p-0">
            <div className="heading d-flex">
              <h2 className="flex w-100">
                <span>
                  <img src={image.empathyicon} className="mr-2" alt="" />
                  How Empathetic Are You?
                </span>
              </h2>
            </div>
            <div className="LessionDtlOverview resultright p-2">
              <p>
                <strong>Next Step:</strong>{" "}
              </p>
              <p>
                Reflect on your result. Does your snack align with how you think
                of yourself? Are you surprised by your snack choice?
              </p>
              <p>&nbsp;</p>
              <p>
                If you didn’t score as high as you hoped, no worries! Everyone
                has the power to grow their empathy. Try being more mindful of
                how well you listen to others, immerse yourself in books and
                movies to try to feel what the characters are feeling, or do
                something kind for someone without expecting anything back. If
                you scored high, give yourself a pat on the back. This shows you
                have a big heart and a remarkable ability to connect with and
                understand others.{" "}
              </p>
              <p>&nbsp;</p>
              <p>
                No matter what you score, the journey of empathy doesn't end
                here! Empathy is like a muscle - the more you use it, the
                stronger it becomes. It's important to keep challenging
                yourself, listen more deeply, and always seek to understand
                others better.{" "}
              </p>
            </div>
          </div>
        </div>
      </Home>
    </div>
  );
};

export default Smartquiz;
