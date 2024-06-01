import React, { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "./redux/actions/APIs";
import { user } from "./resources/images";
import { setTimeOuthandler, showModal } from "./redux/actions";

const IdleTimeOutHandler = (props) => {
  const dispatch = useDispatch();
  const { modalData } = useSelector((state) => state.collections);

  let timer = undefined;
  const events = ["click", "load", "blur", "hover", "mouseenter", "mouseleave"];

  const eventHandler = (eventType) => {
    startTimer();
    localStorage.setItem("lastInteractionTime", moment());
    if (timer) {
      startTimer();
    }
  };

  useEffect(() => {
    if (modalData?.type === "DimRedirect") {
      eventHandler();
    }
    addEvents();
    return () => {
      removeEvents();
    };
  }, [modalData]);
  //process.env.REACT_APP_LOGOUT_TIMER;
  const startTimer = () => {
    if (localStorage.getItem("access_token")) {
      timer = setTimeout(() => {
        let lastInteractionTime = localStorage.getItem("lastInteractionTime");
        const diff = moment.duration(
          moment().diff(moment(lastInteractionTime))
        );
        let timeOutInterval = props.timeOutInterval
          ? props.timeOutInterval
          : process.env.REACT_APP_LOGOUT_TIMER;
        if (
          diff._milliseconds < timeOutInterval
        ) {
          startTimer();
        } else if (diff._milliseconds > timeOutInterval) {
          dispatch(showModal({ type: "timeout" }));
          if (navigator.onLine) {
            dispatch(logoutAction());
          } else {
            localStorage.removeItem("access_token");
          }
        }
      }, 100);
    }
  };

  const addEvents = () => {
    events.forEach((eventName) => {
      window.addEventListener(eventName, eventHandler);
    });
  };
  const removeEvents = () => {
    events.forEach((eventName) => {
      window.removeEventListener(eventName, eventHandler);
    });
  };

  return <div></div>;
};

export default IdleTimeOutHandler;
