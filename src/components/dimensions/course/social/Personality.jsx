import React, { useEffect } from "react";
import * as image from "../../../../resources/images";
import { useDispatch, useSelector } from "react-redux";
import {
  begunQuiz,
  personalitiesResponseData,
} from "../../../../redux/actions/PersonalityAPIs";
import { useParams } from "react-router";
const Personality = (props) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    handleClick(dispatch(begunQuiz(true)));
  };
  const param = useParams();
  const { personalitiesResponse, begunQuizType } = useSelector(
    (state) => state.personality
  );

  let personalityObj = personalitiesResponse?.records[0];

  useEffect(()=>{
    dispatch(personalitiesResponseData());
  },[])

  useEffect(() => {
    dispatch(begunQuiz(false));
  }, [param?.id]);
  return (
    <>
      <div className="personalitybntsec flex flex-wrap align-items-start">
        <div className="leftSide w-50 pr-3">
          <img src={image.personalitybnr} alt="" />
        </div>
        <div className="rigtSide w-50">
          <h2 className="mb-3">Personality Types </h2>
          <p>
            All personality types, while very different, have one thing in
            common, how they get energized or “pumped up”. This is because of
            how their brains work and their unique life experiences.
          </p>
          <p>&nbsp;</p>
          <p>
            Knowing their strengths and their weaknesses will help you better
            understand how they view the world, and possibly even contribute to
            improving your life in a way that you wouldn’t have thought of!
          </p>
          <p>&nbsp;</p>
          <p>
            Appreciating each personality type can help inspire you to improve
            your own self-worth, recognize self-worth and benefits in others,
            make new friends, and give you more confidence to handle anything
            that life can bring.
          </p>
          <p>&nbsp;</p>
          {/* <p>
            Click “Begin Quiz” to learn more about your personality type and how
            you compare to the other types. When you’re done read below to get
            more information on each type of personality.
          </p> */}
        </div>
        <div className="PrmoreDesc w-100 mt-2">
          <div className="overallGroups mt-3">
            <p>
              There are 4 general groups that personalities can be sorted into.
              However, each group can behave differently based on whether they
              are an introvert or an extrovert.{" "}
            </p>
            <p>&nbsp;</p>
            <h5 className="mb-3"> The 4 main groups are:</h5>
            <ol>
              <li>
                <strong>Sensors: </strong>Use their 5 senses more than the other
                personality types.
              </li>
              <li>
                <strong>Thinkers: </strong>Like to daydream and think of the
                “What if” situations.
              </li>
              <li>
                <strong>Feelers: </strong>Emotions and emotional connections or
                activities are the main focus in their lives.
              </li>
              <li>
                <strong> Doers: </strong>Like things organized. Figure out how
                to get things done.
              </li>
            </ol>
            <p>&nbsp;</p>
            <p>
              Read on for more information on Introverts and Extroverts. Then
              take the quiz, if you haven’t already, to learn more about your
              and other personality types.
            </p>
          </div>
        </div>
      </div>
      <div className="Personalitycategory mt-3 pt-3">
        <div className="typecategory SocialCoursecardWrap p-3">
          <h4
            data-toggle="collapse"
            className="flex KATitle pb-2  pointer"
            aria-expanded="true"
            href={"#introverAccordian"}
          >
            Introverts: <i className="fa-solid fa-angle-down"></i>
          </h4>
          <div className=" collespe show" id="introverAccordian">
            <p className="mt-2">
              Introverts are people that prefer either playing alone or with one
              or two friends. They like doing solitary things like reading,
              drawing, or playing computer games. These types of kids live in a
              very internal type of world. They are very good at using their
              inner strengths to quietly view the world around them. They are
              good at concentrating on their own very complex and intricate
              thoughts and feelings. They also are very quiet, because their
              greatest strength is that they observe first and act later. That
              is because they make decisions based on their own values more so
              than what other people think.
            </p>

            <div className="typecategorystrnthweeknes mt-3">
              <table className="w-100">
                <tbody>
                  <tr>
                    <th>
                      <h5>Strength</h5>
                    </th>
                    <th>
                      <h5>Weakness</h5>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>Reflect then respond….Slowly</li>
                        <li>Notice more about the world than most people do</li>
                        <li>
                          Takes time to consider if somebody could be a friend
                        </li>
                        <li>
                          Get lots of energy from mentally stimulating
                          activities
                        </li>
                        <li>Deep thinkers</li>
                        <li>Very creative</li>
                        <li>
                          Can be risk takers but must “think through” it first
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Large groups make them nervous</li>
                        {/* <li>Switch subjects frequently because they have a thought</li> */}
                        <li>Get bored if conversation goes on too long</li>
                        <li>Hard to tell if they really “get it”</li>
                        {/* <li>Interrupt conversations with thoughts they have</li> */}
                        <li>Have only one or two close friends</li>
                        <li>Takes time to get to know them</li>
                        <li>Often don’t seek outside help</li>
                        <li>
                          Won’t share what they are thinking or feeling unless
                          they feel comfortable doing so
                        </li>
                        <li>
                          Need time to decompress after large group interactions
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="typecategory SocialCoursecardWrap p-3">
          <h4
            data-toggle="collapse"
            className="flex KATitle pb-2  pointer"
            aria-expanded="true"
            href={"#extroverAccordian"}
          >
            Extroverts: <i className="fa-solid fa-angle-down"></i>
          </h4>
          <div className=" collespe show" id="extroverAccordian">
            <p className="mt-2">
              Extroverts are very social people. They often prefer being in a
              crowd rather than by themselves. They prefer working on group
              projects and playing in large groups rather than with one or two
              people or by themselves. When they are alone, they tend to get
              bored very easily and have a hard time completing work or a
              project by themselves. They think best while talking and can be
              extremely productive in collaborative groups. They make new
              friends very quickly and often spend a lot of time on social
              media. They prefer team sports or large group activities as
              opposed to individual ones.
            </p>
            <div className="typecategorystrnthweeknes mt-3">
              <table className="w-100">
                <tbody>
                  <tr>
                    <th>
                      <h5>Strength</h5>
                    </th>
                    <th>
                      <h5>Weakness</h5>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>Work well with groups</li>
                        <li>Make friends very easily</li>
                        <li>Can talk through problems</li>
                        <li>Can easily talk to anybody</li>
                        <li>Very good at conversation</li>
                        <li>
                          Not afraid of trying something new, if it’s with a
                          group{" "}
                        </li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Individual work is difficult</li>
                        <li>
                          Switch subjects frequently because they have a thought
                        </li>
                        <li>
                          Usually needs external motivation to get started
                        </li>
                        <li>Can “Burn Out” easily in high energy situations</li>
                        <li>
                          Can seem “fake” or not genuine due to such a large
                          group of friends
                        </li>
                        <li>Interrupt conversations with thoughts they have</li>

                        <li>Easily influenced by peer groups</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* <div className='overalldesc p-3'>
                    <h3 className='mb-3'> 4 types under each category:</h3>
                    <p>While there are two main categories of personality types, under each category there are 4 general groups that personalities can be sorted into.  However, each group can behave differently based on whether they are an introvert or an extrovert.  Let’s go over these 4 groups in general then we will learn what each group below will look like in their category.  </p>
                    
                  </div> */}
      </div>

      {personalitiesResponse && !personalityObj?.learnerpersonality[0] && !begunQuizType && (
        <div className="LeftPanelFooter">
          <button
            className="btn-blue btn-login d-block  ml-auto w-auto"
            onClick={() => {
              handleClick();
            }}
          >
            <i className="fa-solid fa-paper-plane mr-2"></i> Begin Quiz
          </button>
        </div>
      )}
    </>
  );
};

export default Personality;
