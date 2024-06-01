import React, { useEffect, useState } from "react";

const CourseProgressInnerCmp = ({ }) => {
    return (
        <>
        </>
        // <div
        //     className="courseskillbox Homethree"
        //     key={value + "_" + index}
        // >
        //     <h4
        //         data-toggle="collapse"
        //         href={`#Homethree${value + "_" + index}`}
        //         aria-expanded={courCount++ === 0 ? true : false}
        //         className="flex HomeProgresstilt"
        //     >
        //         {cour.name.length > 40 ? (
        //             <ReactTooltip id={cour.name} className={"tooltip"}>
        //                 <p>{cour.name}</p>
        //             </ReactTooltip>
        //         ) : (
        //             ""
        //         )}

        //         <div data-for={cour.name} data-event-off="" data-tip>
        //             {textTrim(cour.name, 40)}
        //         </div>

        //         <span>
        //             {" "}
        //             <i className="fa fa-chevron-down icon-show"></i>
        //         </span>
        //     </h4>
        //     <div
        //         className={`panel-collapse collapse ${courCount++ === 1 ? "show" : ""
        //             }`}
        //         id={`Homethree${value + "_" + index}`}
        //     >
        //         <p className="dmskills">
        //             <strong>Skill</strong>: {skill?.name}
        //         </p>

        //         <div className="skillprogrs">
        //             <span>
        //                 {cour.progress}
        //                 <span className="percentage_sign">%</span>
        //             </span>
        //             <p>
        //                 <strong>Course Progress</strong>{" "}
        //                 <img
        //                     src={image.chat_icon}
        //                     alt=""
        //                     className="pl-1 chat_icon"
        //                 />
        //             </p>
        //             <div className="Courseporogresspopup">
        //                 <h4>Course Progress</h4>
        //                 <p>
        //                     Your course progress is calculated based on your
        //                     proficiency, completion, and pace.
        //                 </p>
        //             </div>
        //         </div>

        //         <div className="progressstyl">
        //             <span className="proficencyprog">
        //                 <div className="position-relative Coursecompprcent m-auto">
        //                     <p className="">
        //                         <RoundProgress
        //                             data={cour.proficiency}
        //                             className="m-1"
        //                             type="complete"
        //                         />
        //                     </p>
        //                 </div>
        //                 <p className="aboutProgdesc">
        //                     Proficiency
        //                     <div className="Courseporogresspopup">
        //                         <h4>Proficiency</h4>
        //                         <p>
        //                             Assesses your child's comprehension of the
        //                             subject matter.
        //                         </p>
        //                     </div>
        //                 </p>
        //             </span>
        //             <span className="CompltProgress">
        //                 <div className="position-relative Coursecompprcent m-auto">
        //                     <p className="">
        //                         <RoundProgress
        //                             data={cour.completion}
        //                             className="m-1"
        //                             type="complete"
        //                         />
        //                     </p>
        //                 </div>
        //                 <p className="aboutProgdesc">
        //                     Completion
        //                     <div className="Courseporogresspopup">
        //                         <h4>Completion</h4>
        //                         <p>
        //                             Quantifies content your child has accessed
        //                             from the total available content.
        //                         </p>
        //                     </div>
        //                 </p>
        //             </span>
        //             <span className="TimProgress">
        //                 <div className="position-relative Coursecompprcent m-auto">
        //                     <p className="">
        //                         <RoundProgress
        //                             data={cour.timing}
        //                             className="m-1"
        //                             type="complete"
        //                         />
        //                     </p>
        //                 </div>
        //                 <p className="aboutProgdesc">
        //                     Pace
        //                     <div className="Courseporogresspopup">
        //                         <h4>Pace</h4>
        //                         <p>
        //                             Evaluates your child's learning pace compared
        //                             to the recommended optimal pace.
        //                         </p>
        //                     </div>
        //                 </p>
        //             </span>
        //         </div>
        //         {showProgress && cour?.type === "PROVIDER" && (
        //             <div className="indivisectionprog flex">
        //                 {getSequnceSort(cour?.activities)?.map(
        //                     (skl, ky) => (
        //                         <div
        //                             className={`graphbatteryprogress ${skl?.progress > 0 ? "pointer" : ""
        //                                 }`}
        //                             key={ky}
        //                             onClick={() =>
        //                                 handleOpenpopup(
        //                                     true,
        //                                     [defaultChildData?.id, cour?.id, skl?.id],
        //                                     cour,
        //                                     skl?.progress
        //                                 )
        //                             }
        //                         >
        //                             <span className="secProgTxt">
        //                                 {skl?.progress}
        //                                 <span className="percentage_sign">%</span>
        //                             </span>
        //                             <span
        //                                 className="batterycells"
        //                                 style={{
        //                                     height: skl?.progress + "%",
        //                                 }}
        //                             ></span>
        //                             <span className="secProgTxtName flexone">
        //                                 Section {ky + 1}
        //                             </span>
        //                         </div>
        //                     )
        //                 )}
        //             </div>
        //         )}
        //     </div>
        // </div>
    );
};

export default CourseProgressInnerCmp;
