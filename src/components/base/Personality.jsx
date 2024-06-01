import React from "react";
import Home from "../Home";
import * as image from "../../resources/images";

const Personality = () => {
  return (
    <div>
      <Home>
        <div className="d-flex align-items-flex-start w-100">
          <div className="LeftbarPannel p-0">
            <div className="CourseCardWrapper fullHeight100">
              <div className="tabgrid m-0 socialgridtab flex">
                <ul>
                  <li className="tabs">
                    <img src={image.Seriesicon} alt="" />
                    Series
                  </li>
                  <li className="tabs">
                    <img src={image.wavehand} alt="" />
                    Character
                  </li>
                  <li className="tabs active-tabs">
                    <img src={image.peronalitytypeicon} alt="" />
                    Personality Type
                  </li>
                </ul>
              </div>
              <div className="personalitylandingpage Course_height">
                <div className="personalitybntsec flex flex-wrap align-items-start">
                  <div className="leftSide w-50 pr-3">
                    <img src={image.personalitybnr} alt="" />
                  </div>
                  <div className="rigtSide w-50">
                    <h2 className="mb-3">Personality Types </h2>
                    <p>
                      All personality types, while very different, have one
                      thing in common, how they get energized or “pumped up”.
                      This is because of how their brains work and through their
                      own experiences as they grow, that makes them view and
                      take part in the world around them differently. Knowing
                      their strengths and their weaknesses will help you better
                      understand how they view the world, and possibly even
                      contribute to improving your life in a way that you
                      wouldn’t have thought of. As we grow, and improve as
                      humans, we can tend to become different personality types,
                      or even have aspects that align with more than one
                      personality type, which is the goal for a fully
                      functioning adult as each personality type does have
                      “Strengths” and “Weaknesses”. It is by knowing the
                      strengths and weaknesses of each personality type that can
                      help to inspire students to both improve their own
                      self-worth, but to recognize self-worth and benefits in
                      others. By doing so they will learn how to reach outside
                      their own groups for help and ideas, and possibly make new
                      friends that will benefit their lives, thereby increasing
                      their self-confidence. There are two categories of
                      personality types and under each category there are 4
                      types. Let’s first go over the two categories.{" "}
                    </p>
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
                        Introverts are people that prefer either playing alone
                        or with one or two friends. They like doing solitary
                        things like reading, drawing, or playing computer games.
                        These types of kids live in a very internal type of
                        world. They are very good at using their inner strengths
                        to quietly view the world around them. They are good at
                        concentrating on very complex and intricate thoughts and
                        feelings. They also are very quiet, because their
                        greatest strength is that they observe first and act
                        later. That is because they make decisions based on
                        their own values.
                      </p>
                      <div className="typecategorystrnthweeknes mt-3">
                        <table className="w-100">
                          <thead>
                            <tr>
                              <th>
                                <h5>Strength</h5>
                              </th>
                              <th>
                                <h5>Weakness</h5>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <ul>
                                  <li>Reflect then react…. Slowly. </li>
                                  <li>
                                    Notice more about the world than most people
                                    do.
                                  </li>
                                  <li>
                                    Are very expressive with their face, hands,
                                    and body
                                  </li>
                                  <li>
                                    Think of most people as potential friends
                                  </li>
                                  <li>
                                    Get lots of energy from stimulating
                                    activities
                                  </li>
                                  <li>Deep thinkers</li>
                                  <li>More creative</li>
                                  <li>
                                    Can be risk takers but must “think through”
                                    it first.
                                  </li>
                                </ul>
                              </td>
                              <td>
                                <ul>
                                  <li>Large groups make them nervous</li>
                                  <li>Switch subjects frequently</li>
                                  <li>
                                    Get bored if a conversation goes on to long
                                  </li>
                                  <li>Interrupt conversations</li>
                                  <li>Have only one or two close friends</li>
                                  <li>Takes time to get to know them</li>
                                  <li>Often don’t seek outside help</li>
                                  <li>
                                    Won’t share what they are thinking or
                                    feeling unless they feel comfortable doing
                                    so.
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="overallGroups mt-3">
                          <h5 className="mb-3"> The 4 main groups are:</h5>
                          <ul>
                            <li>
                              <strong>Sensors:</strong> Use their 5 senses more
                              than the other personality types.
                            </li>
                            <li>
                              <strong>Thinkers:</strong> Like to daydream and
                              think of the “What if” situations.
                            </li>
                            <li>
                              <strong>Feelers: </strong>Emotions and emotional
                              connections or activities are the main focus in
                              their lives.{" "}
                            </li>
                            <li>
                              <strong> Doers: </strong>Like things organized.
                              Figure out how to get things done.
                            </li>
                          </ul>
                        </div>
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
                        Introverts are people that prefer either playing alone
                        or with one or two friends. They like doing solitary
                        things like reading, drawing, or playing computer games.
                        These types of kids live in a very internal type of
                        world. They are very good at using their inner strengths
                        to quietly view the world around them. They are good at
                        concentrating on very complex and intricate thoughts and
                        feelings. They also are very quiet, because their
                        greatest strength is that they observe first and act
                        later. That is because they make decisions based on
                        their own values.
                      </p>
                      <div className="typecategorystrnthweeknes mt-3">
                        <table className="w-100">
                          <thead>
                            <tr>
                              <th>
                                <h5>Strength</h5>
                              </th>
                              <th>
                                <h5>Weakness</h5>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <ul>
                                  <li>Reflect then react…. Slowly. </li>
                                  <li>
                                    Notice more about the world than most people
                                    do.
                                  </li>
                                  <li>
                                    Are very expressive with their face, hands,
                                    and body
                                  </li>
                                  <li>
                                    Think of most people as potential friends
                                  </li>
                                  <li>
                                    Get lots of energy from stimulating
                                    activities
                                  </li>
                                  <li>Deep thinkers</li>
                                  <li>More creative</li>
                                  <li>
                                    Can be risk takers but must “think through”
                                    it first.
                                  </li>
                                </ul>
                              </td>
                              <td>
                                <ul>
                                  <li>Large groups make them nervous</li>
                                  <li>Switch subjects frequently</li>
                                  <li>
                                    Get bored if a conversation goes on to long
                                  </li>
                                  <li>Interrupt conversations</li>
                                  <li>Have only one or two close friends</li>
                                  <li>Takes time to get to know them</li>
                                  <li>Often don’t seek outside help</li>
                                  <li>
                                    Won’t share what they are thinking or
                                    feeling unless they feel comfortable doing
                                    so.
                                  </li>
                                </ul>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="overallGroups mt-3">
                          <h5 className="mb-3"> The 4 main groups are:</h5>
                          <ul>
                            <li>
                              <strong>Sensors:</strong> Use their 5 senses more
                              than the other personality types.
                            </li>
                            <li>
                              <strong>Thinkers:</strong> Like to daydream and
                              think of the “What if” situations.
                            </li>
                            <li>
                              <strong>Feelers: </strong>Emotions and emotional
                              connections or activities are the main focus in
                              their lives.{" "}
                            </li>
                            <li>
                              <strong> Doers: </strong>Like things organized.
                              Figure out how to get things done.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className='overalldesc p-3'>
                                    <h3 className='mb-3'> 4 types under each category:</h3>
                                    <p>While there are two main categories of personality types, under each category there are 4 general groups that personalities can be sorted into.  However, each group can behave differently based on whether they are an introvert or an extrovert.  Let’s go over these 4 groups in general then we will learn what each group below will look like in their category.  </p>
                                   
                                  </div> */}
                </div>

                <div className="takeyourQuiz">
                  <button className="btn-blue btn-login d-block  ml-auto w-auto">
                    <i className="fa-solid fa-paper-plane mr-2"></i> Test Your
                    Personality
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="RightbarPannel p-0 personalityrightpannel">
            <div className="heading w-100">
              <h2 className="w-100 flex">
                <span>
                  <img src={image.bussinessdiagram} className="mr-2" alt="" />{" "}
                  Your Personality Type
                </span>
              </h2>
            </div>
            <div className="LessionDtlOverview">
              <div className="p-2">
                <p>
                  <strong>Take Your Personality Quiz Test</strong>{" "}
                </p>
                <div className="startQuiz mt-3">
                  <button className="btn-blue btn-login d-block  w-auto">
                    <i className="fa-solid fa-paper-plane mr-2"></i> Begin Quiz
                  </button>
                </div>
              </div>
            </div>
            <div className="personalityListing">
              <div className="personalitylistitem p-3">
                <h3 className=" pb-3 text-left">Introverts:</h3>
                <div className="AviewListing flex flex-wrap mt-3">
                  <div className="AViewListitem border-0 mb-3 pointer">
                    <div className="VideoThumbimg LinkImage pointer">
                      <img src={image.noImage} alt="..." />
                    </div>
                    <div className="videoDescription ml-2 LinkDescription">
                      <h4 className="m-0 mb-2">THE INTROVERTSTHE BEAVER</h4>

                      <p>
                        Scheduled, organized and cautious. These kiddos are
                        happiest with a reliable schedule that doesn't change
                        frequently and no risk involvement. They are private,
                        literal and detail oriented and enjoy working on
                        projects alone. They enjoy one-on-one time and thrive on
                        goal setting, rules, direction, and preparation. Life is
                        serious business for these hard-working and resourceful
                        "Master Builder's" of the world.
                      </p>
                    </div>
                  </div>
                  <div className="AViewListitem border-0 mb-3 pointer">
                    <div className="VideoThumbimg LinkImage pointer">
                      <img src={image.noImage} alt="..." />
                    </div>
                    <div className="videoDescription ml-2  LinkDescription">
                      <h4 className="m-0 mb-2">THE INTROVERTSTHE BEAVER</h4>

                      <p>
                        Scheduled, organized and cautious. These kiddos are
                        happiest with a reliable schedule that doesn't change
                        frequently and no risk involvement. They are private,
                        literal and detail oriented and enjoy working on
                        projects alone. They enjoy one-on-one time and thrive on
                        goal setting, rules, direction, and preparation. Life is
                        serious business for these hard-working and resourceful
                        "Master Builder's" of the world.
                      </p>
                    </div>
                  </div>
                  <div className="AViewListitem border-0 mb-3 pointer">
                    <div className="VideoThumbimg LinkImage pointer">
                      <img src={image.noImage} alt="..." />
                    </div>
                    <div className="videoDescription ml-2  LinkDescription">
                      <h4 className="m-0 mb-2">THE INTROVERTSTHE BEAVER</h4>

                      <p>
                        Scheduled, organized and cautious. These kiddos are
                        happiest with a reliable schedule that doesn't change
                        frequently and no risk involvement. They are private,
                        literal and detail oriented and enjoy working on
                        projects alone. They enjoy one-on-one time and thrive on
                        goal setting, rules, direction, and preparation. Life is
                        serious business for these hard-working and resourceful
                        "Master Builder's" of the world.
                      </p>
                    </div>
                  </div>
                  <div className="AViewListitem border-0 mb-3 pointer">
                    <div className="VideoThumbimg LinkImage pointer">
                      <img src={image.noImage} alt="..." />
                    </div>
                    <div className="videoDescription ml-2  LinkDescription">
                      <h4 className="m-0 mb-2">THE INTROVERTSTHE BEAVER</h4>

                      <p>
                        Scheduled, organized and cautious. These kiddos are
                        happiest with a reliable schedule that doesn't change
                        frequently and no risk involvement. They are private,
                        literal and detail oriented and enjoy working on
                        projects alone. They enjoy one-on-one time and thrive on
                        goal setting, rules, direction, and preparation. Life is
                        serious business for these hard-working and resourceful
                        "Master Builder's" of the world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="personalitylistitem p-3">
                <h3 className=" pb-3 text-left">Extroverts:</h3>
                <div className="AviewListing flex flex-wrap mt-3">
                  <div className="AViewListitem border-0 mb-3 pointer">
                    <div className="VideoThumbimg LinkImage pointer">
                      <img src={image.noImage} alt="..." />
                    </div>
                    <div className="videoDescription ml-2  LinkDescription">
                      <h4 className="m-0 mb-2">THE INTROVERTSTHE BEAVER</h4>

                      <p>
                        Scheduled, organized and cautious. These kiddos are
                        happiest with a reliable schedule that doesn't change
                        frequently and no risk involvement. They are private,
                        literal and detail oriented and enjoy working on
                        projects alone. They enjoy one-on-one time and thrive on
                        goal setting, rules, direction, and preparation. Life is
                        serious business for these hard-working and resourceful
                        "Master Builder's" of the world.
                      </p>
                    </div>
                  </div>
                  <div className="AViewListitem border-0 mb-3 pointer">
                    <div className="VideoThumbimg LinkImage pointer">
                      <img src={image.noImage} alt="..." />
                    </div>
                    <div className="videoDescription ml-2  LinkDescription">
                      <h4 className="m-0 mb-2">THE INTROVERTSTHE BEAVER</h4>

                      <p>
                        Scheduled, organized and cautious. These kiddos are
                        happiest with a reliable schedule that doesn't change
                        frequently and no risk involvement. They are private,
                        literal and detail oriented and enjoy working on
                        projects alone. They enjoy one-on-one time and thrive on
                        goal setting, rules, direction, and preparation. Life is
                        serious business for these hard-working and resourceful
                        "Master Builder's" of the world.
                      </p>
                    </div>
                  </div>
                  <div className="AViewListitem border-0 mb-3 pointer">
                    <div className="VideoThumbimg LinkImage pointer">
                      <img src={image.noImage} alt="..." />
                    </div>
                    <div className="videoDescription ml-2  LinkDescription">
                      <h4 className="m-0 mb-2">THE INTROVERTSTHE BEAVER</h4>

                      <p>
                        Scheduled, organized and cautious. These kiddos are
                        happiest with a reliable schedule that doesn't change
                        frequently and no risk involvement. They are private,
                        literal and detail oriented and enjoy working on
                        projects alone. They enjoy one-on-one time and thrive on
                        goal setting, rules, direction, and preparation. Life is
                        serious business for these hard-working and resourceful
                        "Master Builder's" of the world.
                      </p>
                    </div>
                  </div>
                  <div className="AViewListitem border-0 mb-3 pointer">
                    <div className="VideoThumbimg LinkImage pointer">
                      <img src={image.noImage} alt="..." />
                    </div>
                    <div className="videoDescription ml-2  LinkDescription">
                      <h4 className="m-0 mb-2">THE INTROVERTSTHE BEAVER</h4>

                      <p>
                        Scheduled, organized and cautious. These kiddos are
                        happiest with a reliable schedule that doesn't change
                        frequently and no risk involvement. They are private,
                        literal and detail oriented and enjoy working on
                        projects alone. They enjoy one-on-one time and thrive on
                        goal setting, rules, direction, and preparation. Life is
                        serious business for these hard-working and resourceful
                        "Master Builder's" of the world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Home>
    </div>
  );
};

export default Personality;
