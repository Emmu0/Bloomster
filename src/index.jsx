/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import "react-phone-input-2/lib/style.css";
import "font-awesome/css/font-awesome.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./resources/css/leaner_Model.css";
import "./resources/css/Layout.css";
import "./resources/css/Header.css";
import "./resources/css/Form_.css";
import "./resources/css/side_bar.css";
import "./resources/css/Profile_.css";
import "./resources/css/main.css";
import "./resources/css/Langingpage.css";
import "./resources/css/Responsive.css";
import "./resources/css/Subscription.css";
import "./resources/css/Reset.css";
import "./resources/css/chart.css";
import "./resources/css/Blog.css";
import "./resources/css/HolisticGrowth.css";
import "./resources/css/Learningjourney.css";
import "./resources/css/s1.css";
import "./resources/css/Chatboard.css";
import "./resources/css/Rangeslider.css";
import "./resources/css/selectbox.css";
import "./resources/css/Resource.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "rsuite/dist/rsuite.css";
import "./resources/css/Calender.css";
import "./resources/css/Datepicker.css";
import aos from "./resources/css/aos.css";
import "./resources/css/Network.css";
import "./resources/css/personality.css";
import "./resources/css/Smartquiz.css";
import "./resources/css/feedback.css";
import "./resources/css/halfscreen.css";
import "./resources/css/journey.css";
import "./resources/css/Coursepage.css";
import "./resources/css/Home.css";
import "./resources/css/Coursecard.css";
import "./resources/css/classSchedule.css";
import "./resources/css/GrowthSurvey.css";
import "./resources/css/whyPlanModel.css";
import App from "./App";
import reducers from "./redux/reducers";

import "./App.css";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
