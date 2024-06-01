/** @format */
import React, { useState } from "react";
import * as image from "../../../resources/images";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Records from "./Recorder.json";

const SkillSwap = ({ close }) => {
  let firstArray = [];
  let secondArray = [];
  // eslint-disable-next-line array-callback-return
  Records.map((value, key) => {
    if (value.iscore) {
      firstArray.push(value);
    } else {
      secondArray.push(value);
    }
  });
  const [skill, setrecord] = useState([secondArray, []]);
  // const insert = (arr, index, ...newItems) => [
  // 	// part of the array before the specified index
  // 	...arr.slice(0, index),
  // 	// inserted items
  // 	...newItems,
  // 	// part of the array after the specified index
  // 	...arr.slice(index),
  // ];
  const move = (droppableSource, droppableDestination, move) => {
    let sourceClone = skill[0];
    let destinationClone = skill[1];
    //	if (sourceClone && sourceClone.length > 0) {
    if (move.source.droppableId === "1") {
      let abc = skill[1][droppableSource.index];
      //	sourceClone.push(abc);
      //
      sourceClone.splice(move?.destination?.index, 0, abc);
      delete skill[1][droppableSource.index];
    } else {
      //	left to right
      let abc = skill[0][droppableSource.index];
      //	destinationClone.push(abc);
      destinationClone.splice(move?.destination?.index, 0, abc);
      delete skill[0][droppableSource.index];
    }
    //	}

    // const result = {};
    // result[droppableSource.droppableId] = sourceClone;
    // result[droppableDestination.droppableId] = destinationClone;

    // return result;
  };

  function onDragEnd(res) {
    const { source, destination } = res;

    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination?.droppableId;
    if (sInd === dInd) {
      const newState = [...skill];
      setrecord(newState);
    } else {
      const result = move(source, destination, res);
      const newState = [...skill];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setrecord(newState.filter((group) => group?.length));
    }
  }

  return (
    <>
      <div className="centerPagePopup">
        <div className="modal fade d-block show" id="myModal" role="dialog">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header p-0">
                <div className="heading w-100">
                  <h2 className="flex">
                    <span>
                      <img
                        src={image.selectedSkillsicon}
                        className="mr-2"
                        alt="..."
                      />
                      Select Skills: Social Dimension
                    </span>
                    <button
                      type="button"
                      className="close"
                      onClick={() => close()}
                    >
                      <i className="fa-regular fa-xmark m-0"></i>
                    </button>
                  </h2>
                </div>
              </div>

              <div className="modal-body">
                <div>
                  <div className="d-flex justify-content-around mb-3">
                    <h4>Skills</h4>
                    <h4>Selected Skills</h4>
                  </div>
                  <div className="SwapSkills d-flex">
                    <span className="dragdropweenIcon">
                      <i className="fa-light fa-arrow-right-arrow-left"></i>
                    </span>

                    <DragDropContext onDragEnd={onDragEnd}>
                      {skill.map((el, ind) => (
                        <React.Fragment key={ind}>
                          <div className="core">
                            {ind > 0 && <h3>Core</h3>}
                            {ind > 0 &&
                              firstArray.map(
                                (vl, ky) =>
                                  vl?.iscore && (
                                    <div className="drag-node">
                                      <div>{vl?.content}</div>
                                    </div>
                                  )
                              )}
                          </div>
                          <Droppable
                            className="dragdrop-1"
                            key={ind}
                            droppableId={`${ind}`}
                          >
                            {(provided, snapshot) => (
                              <div
                                className={`dragabeSkills dragabeSkills${ind}`}
                              >
                                <div
                                  ref={provided.innerRef}
                                  {...provided.droppableProps}
                                  className="parent-node"
                                >
                                  <h4 className="w-100">
                                    {ind > 0 && "Elective"}
                                  </h4>
                                  {el.map(
                                    (item, index) =>
                                      !item.iscore && (
                                        <div>
                                          <Draggable
                                            key={item.id}
                                            draggableId={item.id}
                                            index={index}
                                            isDragDisabled={item?.iscore}
                                          >
                                            {(provided, snapshot) => (
                                              <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="drag-node"
                                              >
                                                <div>
                                                  {item.content}{" "}
                                                  {item.iscore === false &&
                                                    "core"}
                                                </div>
                                              </div>
                                            )}
                                          </Draggable>
                                        </div>
                                      )
                                  )}
                                </div>
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>
                        </React.Fragment>
                      ))}
                    </DragDropContext>
                  </div>
                </div>
              </div>
              <div className="modal-footer p-1">
                <div className="input-group full-Width-group basic_details_form">
                  <div className="form-group BDsubmitbutton m-0 d-flex">
                    <div className="buttonDistribotion">
                      <button
                        type="button"
                        className="btn-blue btn-login d-block mb-5 cancelbutton"
                      >
                        <i className="fa-solid fa-xmark"></i> Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn-blue btn-login d-block mb-5 "
                      >
                        <i className="fa-solid fa-paper-plane"></i> Save 2
                      </button>
                    </div>
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
export default SkillSwap;
