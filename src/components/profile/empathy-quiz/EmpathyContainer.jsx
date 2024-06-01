import React, { useEffect, useState } from "react";
import EmpathyQuizz from "./EmpathyQuizz";
import Home from "../../Home";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { ShimmerCategoryList, ShimmerThumbnail } from "react-shimmer-effects";
import { getEmpathyQuiz } from "../../../redux/actions/APIs";
import { breadcrumb } from "../../../redux/actions";
import * as image from "../../../resources/images";
const EmpathyContainer = () => {
  const [loadRespone, setLoadResponse] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const { empathyQuizData, userEmpathyResponse, breadcrumbData } = useSelector(
    (state) => state.collections
  );

  useEffect(() => {
    if (!breadcrumbData) {
      dispatch(
        breadcrumb({
          title: "Empathy Unboxed",
          icon: image.empathyicon,
        })
      );
    }
  }, [breadcrumbData]);

  useEffect(() => {
    dispatch(getEmpathyQuiz());
    dispatch(getEmpathyQuiz(params.id, "Empathy Quiz Survey"));
    setLoadResponse(true);
  }, [params.id]);

  useEffect(() => {
    if (empathyQuizData) {
      setLoadResponse(false);
    }
  }, [empathyQuizData]);

  useEffect(() => {
    if (userEmpathyResponse) {
      setLoadResponse(true);
      dispatch(getEmpathyQuiz(params.id, "Empathy Quiz Survey"));
    }
  }, [userEmpathyResponse]);

  useEffect(() => {
    dispatch(getEmpathyQuiz(params.id, "Empathy Quiz Survey"));
  }, []);

  return (
    <div>
      <Home>
        <div className="d-flex align-items-flex-start w-100">
          <div className="LeftbarPannel p-0">
            {loadRespone ? (
              <ShimmerCategoryList items={3} categoryStyle="STYLE_SIX" />
            ) : (
              <EmpathyQuizz />
            )}
          </div>
          <div className="RightbarPannel p-0 IntelligenceWisetex">
            {loadRespone ? (
              <ShimmerCategoryList items={3} categoryStyle="STYLE_SIX" />
            ) : (
              <Sidebar />
            )}
          </div>
        </div>
      </Home>
    </div>
  );
};

export default EmpathyContainer;
