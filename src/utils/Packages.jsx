/** @format */
import swal from "sweetalert2";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import DatePicker from "react-date-picker";
import ReactTooltip from "react-tooltip";
import moment from "moment";
import Cards from "../components/widget/Cards";
import PhoneInput from "react-phone-input-2";
import AOS from "aos";
import { useJwt } from "react-jwt";
import { Rating } from "react-simple-star-rating";
import { useHistory, useParams } from "react-router-dom";
import SelectPicker from "rsuite/SelectPicker";
import { Modal, Button } from "react-bootstrap";

import GooglePlacesAutocomplete, {
  geocodeByPlaceId,
} from "react-google-places-autocomplete";

import {
  ShimmerCategoryItem,
  ShimmerCategoryList,
  ShimmerText,
  ShimmerTable,
} from "react-shimmer-effects";
import Cropper from "react-easy-crop";
import PieChart from "react-pie-graph-chart";
import useSound from "use-sound";
import { toast } from "react-toastify";
export {
  swal,
  useForm,
  yupResolver,
  Yup,
  DatePicker,
  Controller,
  moment,
  Cards,
  ShimmerCategoryItem,
  ShimmerCategoryList,
  ShimmerText,
  PhoneInput,
  ShimmerTable,
  AOS,
  useJwt,
  GooglePlacesAutocomplete,
  geocodeByPlaceId,
  useHistory,
  useParams,
  Rating,
  Cropper,
  SelectPicker,
  Modal,
  Button,
  PieChart,
  ReactTooltip,
  toast,
};
