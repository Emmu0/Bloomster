/** @format */

import { combineReducers } from "redux";

import collections from "./collections";
import feedback from "./feedback";
import messaging from "./messaging";
import personality from "./personality";
import Home from "./home";

export default combineReducers({
  collections: collections,
  messaging: messaging,
  personality: personality,
  feedback: feedback,
  home: Home,
});
