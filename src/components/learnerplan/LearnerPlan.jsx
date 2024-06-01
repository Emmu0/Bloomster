import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as image from "../../resources/images";
import ReactTooltip from "react-tooltip";
import {
    ShimmerCategoryItem,
    ShimmerSimpleGallery,
} from "react-shimmer-effects";
import { getCourseDetails, getDashboard, showGrowthModal, showOverallModal, showSkillModal } from "../../redux/actions/Home";
import { useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Home from "../Home";
import { addDaysInDate, addOneDayInDate, calculateEndDate, calculateSeactionEndDate, convertedNumber, dateFormatterWithMonthName, getCapitalized, getCurrentDateInFormat, getSequnceSort, isDimension, textTrim } from "../../utils/helper";
import LearnerPlanRightPanel from "./LearnerPlanRightPanel";
import { breadcrumb, setCourseModal, showModal } from "../../redux/actions";
import { createLearnerPlan, getDimSkillCourses, getDimensionPlanData, getJourny, getJournyCourses, getLearnerPlanTags, getLearnerPlanWeekWise, getUpdateLearnerPlan } from "../../redux/actions/APIs";
import { PATHS } from "../../utils";
import LearnerPlanSetup1 from "./LearnerPlanSetup1";
import LearnerPlanSetup2 from "./LearnerPlanSetup2";
import LearnerPlanSetup3 from "./LearnerPlanSetup3";
import LearnerPlanSetup4 from "./LearnerPlanSetup4";
import ChangePacePopUp from "./ChangePacePopUp";
import LearnerModulePlanDetails from "./LearnerModulePlanDetails";
import DeletePlanActivities from "./DeletePlanActivities";
import LearnerPlanRedirectionPopUp from "../base/LearnerPlanRedirectionPopUp";
import moment from "moment";
import DatePicker from "react-date-picker";
import { data } from "jquery";
import PathwayHalfScreen from "./PathwayHalfScreen";

const LearnerPlan = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const location = useLocation();

    const { defaultChildData,
        learnerPlanResponse,
        response,
        getDimPlanData,
        signupresponse,
        getDimJournyResponse,
        learnerTagsResponse,
        dimSkillCourseResp,
        modalData,
        getDimJournyCoursesResponse
    } = useSelector((state) => state.collections);

    const {
        dashboardData, showoverModal, courseDetails
    } = useSelector((state) => state.home);

    const getLearnerName = () => {
        return getCapitalized(defaultChildData?.firstName);
    }

    const [selectedSitting, setSelectedSitting] = useState(2);
    const [selectedMinutes, setSelectedMinutes] = useState(30);
    const [userDate, setUserDate] = useState(new Date());
    const [screen, setScreen] = useState(1);
    const [selectedOption, setSelectedOption] = useState(location?.state?.show ? location?.state?.show : "recommended");
    const [tagData, setTagData] = useState();
    const [tagSelectedCourse, setTagSelectedCourse] = useState([]);
    const [loader, setLoader] = useState(false);
    const [planStartPopUp, setPlanStartPopUp] = useState(false);
    const [showRedirectPopUp, setShowRediretPopUp] = useState(false);
    const [getJourneyId, setJourneyId] = useState();
    const [coursesArr, setCoursesArr] = useState([]);
    const [pathwayTree, setPathwayTree] = useState([]);
    const [deletePlan, setDeletePlan] = useState()
    const [getCourseId, setCourseId] = useState([]);
    const [getSkillId, setSkillId] = useState([]);
    const [dimSkillCoursePlanTree, setDimSkillCoursePlanTree] = useState([]);
    const [collapseDim, setcollaspeDim] = useState(true)
    const [getDImSkillData, setDimSkillData] = useState([]);
    const [getDimName, setDimName] = useState([]);
    const [showPathwayShimmar, setShowPathwayShimmar] = useState(false);
    const [coursePlanTree, setCoursePlanTree] = useState([]);
    const [editPlan, setEditPlan] = useState(false);


    let sittings = ["1", "2", "3", "4", "5", "6", "7"];
    let minutes = ["15", "30", "45", "60"];

    useEffect(() => {
        if (signupresponse) {
            console.log('signupresponse@@@ 1111 : ', signupresponse);
            if (signupresponse?.success) {
                dispatch(showModal({ type: "LearnerPlanRedirectionPopUp" }));
            }
        }
    }, [signupresponse])
    console.log('signupresponse@@@ 2222 : ', modalData, signupresponse);

    const handleRedirectPopUp = (result) => {
        setShowRediretPopUp(result);
        //  dispatch(showModal({ type: "DimensionHintPopup" }));
    }

    useEffect(() => {
        if (params) {
            dispatch(getDashboard(params?.id));
            //  dispatch(showModal({ type: "DimensionHintPopup" }));
        }
    }, [params?.id])



    useEffect(() => {
        dispatch(breadcrumb({ title: "Home", subTitle: "Learner Plan" }));
        if (selectedOption !== "changePace") {
            setSelectedSitting(2);
            setSelectedMinutes(30);
        }
    }, [params?.id])

    useEffect(() => {
        if (dashboardData && dashboardData?.userPlans) {
            if (!dashboardData?.userPlans?.isrecommendedplan) {
                setSelectedSitting(dashboardData?.userPlans?.pace?.sittings);
                setSelectedMinutes(dashboardData?.userPlans?.pace?.duration);
            }
        }
    }, [dashboardData])

    const closePlan = () => {
        setDeletePlan();
    }

    const [totalLevel, setTotalLevel] = useState(5);
    const courseDetailPage = (obj) => {
        setTotalLevel(obj?.totalLevel);
        dispatch(getCourseDetails(obj?.id, defaultChildData.id));
    };

    useEffect(() => {
        if (courseDetails) {
            courseDetails.isLearnerRightPanel = true;
            courseDetails.totalLevel = totalLevel;
            dispatch(setCourseModal(courseDetails));
        }
    }, [courseDetails]);

    const handleSitting = (value) => {
        setSelectedSitting(value)
    }
    const handleMinutes = (value) => {
        setSelectedMinutes(value)
    }
    const handlePopUpOpen = (type) => {
        if (type === "startdate") {
            dispatch(showModal({ type: "learnerPlanInfo", title: "Start Date", icon: image.Calendericon, message: "This start date is for the start of the learning plan. Start dates for individual courses can be set in the Show details button next to the course name in the right panel at any time." }));
        } else if (type === "recommended") {
            dispatch(showModal({ type: "learnerPlanInfo", title: "Recommended Plan", icon: image.Calendericon, message: "More info on each course is available by clicking the arrow next to the course name." }));
        } else if (type === "filter") {
            dispatch(showModal({
                type: "learnerPlanInfo", title: "Life Events", icon: image.Calendericon, message: "Find courses to help your child navigate challenging life experiences."
            }));
        } else if (type === "pathway") {
            dispatch(showModal({
                type: "learnerPlanInfo", title: "Pathways", icon: image.Calendericon, message: "Find a Pathway to help your child build skills in complex categories."
            }));
        } else if (type === "dimension") {
            dispatch(showModal({ type: "learnerPlanInfo", title: "Custom Plan", icon: image.Calendericon, message: "We will walk you through each step to choose what dimensions you want your child to focus on, then choose the skills within those dimensions, and finally the courses that match those skills." }));
        } else if (type === "whyplan") {
            dispatch(showModal({
                type: "learnerPlanInfo", title: "Why A Plan?", icon: image.Calendericon, message: `
Creating a learning plan helps parents and students work Bloomster into a regular habit and maintain consistency for maximum effectiveness.
                    We've organized essential skills into five key dimensions of growth, offering courses designed to empower your children with soft skills relevant to their development.
At Bloomster, we understand the unique challenges of parenting in the digital age.Our mission is to support you in nurturing confident, well- rounded individuals who can thrive in a world of constant change and unpredictability.
Thank you for taking the time to build a learning plan to set your child up for success.` }));
        }
    }
    const handleMoreOptions = (type) => {
        if (type === "changePace") {
            setScreen(1);
            setSelectedOption(type);
        } else if (type === "createNewPlan") {
            setScreen(1);
            setSelectedOption("recommended");
            setSelectedSitting(2);
            setSelectedMinutes(30);
            setEditPlan(false);
            setCoursePlanTree([]);
            dispatch(getUpdateLearnerPlan(defaultChildData?.id))
            dispatch(getLearnerPlanTags());
            dispatch(getJourny());
            dispatch(getDimensionPlanData())
            dispatch(getJournyCourses());
        }
        else if (type === "courseCatlog") {
            history.push(PATHS.COURSEPAGE_STR + defaultChildData?.id);
        }

        if (["createNewPlan", "changePace"]?.includes(type)) {
            // this is tags filter 
            setTagData([]);
            setTagSelectedCourse([]);
            setDimensionTree([]);

            // this is pathway
            setCoursesArr([]);
            setPathwayTree([]);

            // this is dimension            
            setCourseId([]);
            setSkillId([]);
            setDimName([]);
            setDimSkillData([]);
            setDimSkillCoursePlanTree([]);
        }
    }
    const handleBack = (result) => {
        if (dimensionTree?.length > 0 || coursesArr?.length > 0 || getSkillId?.length > 0) {
            if ([3, 4, 5, 6]?.includes(screen) && !result) {
                setDeletePlan({ message: 'Your changes will be lost.' });
                return;
            }
        }
        if ([3, 4]?.includes(screen) && coursePlanTree?.length > 0) {
            setEditPlan(true);
        }
        if (screen === 2) {
            setScreen(1);
            setSelectedOption("recommended");
        } else if (screen === 3) {
            setScreen(2);
            dispatch(getLearnerPlanTags());
            setDimensionTree([]);
            setTagSelectedCourse([]);
        } else if (screen === 4) {
            setScreen(2);
            setSkillId([]);
            dispatch(getDimensionPlanData());
            setDimSkillData([]);
            setDimName([]);
        } else if (screen === 5) {
            setScreen(4);
            dispatch(getDimSkillCourses());
            setDimSkillCoursePlanTree([]);
            handleDimSkillBack();
            setDimName([]);
        } else if (screen === 6) {
            setScreen(2);
            setPathwayTree([]);
            dispatch(getJourny());
            dispatch(getJournyCourses());
            setCoursesArr([]);
        }
    }
    const handleNext = () => {
        if (screen === 1) {
            setScreen(2);
            setSelectedOption("recommended");
        } else if (screen === 2) {
            if (selectedOption === "filter") {
                dispatch(getLearnerPlanTags(params?.id));
                setLoader(true);
            } else if (selectedOption === "pathway") {
                dispatch(getJourny(true, params?.id));
                setLoader(true);
            } else if (selectedOption === "dimension") {
                dispatch(getDimensionPlanData(params?.id))
                setLoader(true);
            }
        } else if (screen === 4 && getSkillId?.length > 0) {
            setDimName([]);
            setLoader(true);
            dispatch(getDimSkillCourses(params?.id, getSkillId));
        }
    }

    useEffect(() => {
        if (screen === 2) {
            if (learnerTagsResponse?.success) {  // filter
                setLoader(false);
                setScreen(3);
                setEditPlan(false);
            } else if (getDimJournyResponse?.success) {  //  pathway                
                setLoader(false);
                setScreen(6);
            }
            else if (getDimPlanData?.success) {   // dimension
                setLoader(false);
                setScreen(4);
                setEditPlan(false);
                handlEditeCoursePLan();
            }
        }
    }, [getDimJournyResponse, learnerTagsResponse, getDimPlanData])

    const handleOptionClick = (value) => {
        setSelectedOption(value);
    }
    const showDimModal = (data, type) => {
        if (isDimension(data?.name) && type === "dim") {
            dispatch(showGrowthModal(data));
        } else {
            getDimPlanData?.records?.map((dim) => {
                dim?.skills?.map((skill) => {
                    if (skill?.id === data?.id) {
                        data.dimName = dim?.name;
                    }
                })
            })
            dispatch(showSkillModal(data));
        }
    };

    useEffect(() => {
        if (learnerTagsResponse) {
            setTagData(learnerTagsResponse?.records);
        }
    }, [learnerTagsResponse])

    const [dimensionTree, setDimensionTree] = useState([]);
    const handleTagSelectedCourse = (selectedDim, index) => {
        let copyArray = [...tagSelectedCourse];
        const existsCourse = copyArray?.filter(item => item.uiLabel === selectedDim?.uiLabel);
        if (existsCourse?.length > 0) {
            existsCourse?.map((value, index) => {
                const key = copyArray?.findIndex(item => item?.name === value?.name);
                if (key !== -1) {
                    copyArray.splice(key, 1);
                }
            })
        } else {
            selectedDim?.dimensions?.map((dim, index) => {
                dim?.skills?.map((skill, key) => {
                    skill?.courses?.map((course, i) => {
                        const key = copyArray?.findIndex(item => item?.name === course?.name);
                        if (key === -1) {
                            course.uiLabel = selectedDim?.uiLabel;
                            course.dimId = dim?.id;
                            course.dimName = dim?.name;
                            course.skillId = skill?.id;
                            course.skillName = skill?.name;
                            course.isSelected = course?.rank ? true : false;
                            copyArray.push(course);
                        }
                    })
                })
            })
        }
        setTagSelectedCourse(copyArray);

        let dimTreeArrayCopy = [];
        copyArray?.map((value, index) => {
            if (value?.isSelected) {
                const key = dimTreeArrayCopy?.findIndex(item => item?.name === value?.dimName);
                if (key === -1) {
                    let obj = { id: value?.dimId, name: value?.dimName, skills: [{ id: value?.skillId, name: value?.skillName, courses: [{ id: value?.id, name: value?.name, activities: value?.activities }] }] }
                    dimTreeArrayCopy.push(obj);
                } else {
                    const skillIndex = dimTreeArrayCopy[key]?.skills?.findIndex(item => item?.name === value?.skillName);
                    if (skillIndex === -1) {
                        dimTreeArrayCopy[key]?.skills?.push({ id: value?.skillId, name: value?.skillName, courses: [{ id: value?.id, name: value?.name, activities: value?.activities }] });
                    } else {
                        dimTreeArrayCopy[key]?.skills[skillIndex]?.courses?.push({ id: value?.id, name: value?.name, activities: value?.activities });
                    }
                }
            }
        })
        setDimensionTree(dimTreeArrayCopy);
    }

    const handleTagCourseClick = (value, index) => {
        let filterCourses = getCourseLength();
        console.log("filterCourses : ", filterCourses?.length, filterCourses,);
        if (filterCourses?.length >= 6 && !filterCourses?.includes(value?.id)) {
            handleNumberOfCourses();
            return false;
        }
        tagSelectedCourse[index].isSelected = !tagSelectedCourse[index]?.isSelected;
        let dimTreeArrayCopy = [...dimensionTree];
        const courseIndex = tagSelectedCourse?.findIndex(item => item?.name === value?.name && !item?.isSelected);
        //  when add course
        if (courseIndex === -1) {
            const key = dimTreeArrayCopy?.findIndex(item => item?.name === value?.dimName);
            if (key === -1) {
                let obj = { id: value?.dimId, name: value?.dimName, skills: [{ id: value?.skillId, name: value?.skillName, courses: [{ id: value?.id, name: value?.name, activities: value?.activities }] }] }
                dimTreeArrayCopy.push(obj);
            } else {
                const skillIndex = dimTreeArrayCopy[key]?.skills?.findIndex(item => item?.name === value?.skillName);
                if (skillIndex === -1) {
                    dimTreeArrayCopy[key]?.skills?.push({ id: value?.skillId, name: value?.skillName, courses: [{ id: value?.id, name: value?.name, activities: value?.activities }] });
                } else {
                    dimTreeArrayCopy[key]?.skills[skillIndex]?.courses?.push({ id: value?.id, name: value?.name, activities: value?.activities });
                }
            }
        } else {
            //  when remove course
            const key = dimTreeArrayCopy?.findIndex(item => item?.name === value?.dimName);
            const skillIndex = dimTreeArrayCopy[key]?.skills?.findIndex(item => item?.name === value?.skillName);
            if (dimTreeArrayCopy[key]?.skills?.length === 1 && dimTreeArrayCopy[key]?.skills[skillIndex]?.courses?.length === 1) {
                dimTreeArrayCopy.splice(key, 1);
            } else if (dimTreeArrayCopy[key]?.skills[skillIndex]?.courses?.length === 1) {
                dimTreeArrayCopy[key]?.skills?.splice(skillIndex, 1);
            } else {
                const index = dimTreeArrayCopy[key]?.skills[skillIndex]?.courses?.findIndex(item => item?.name === value?.name);
                dimTreeArrayCopy[key]?.skills[skillIndex]?.courses?.splice(index, 1);
            }
        }
        setDimensionTree(dimTreeArrayCopy);
    }

    const handleJourneyCourse = (data) => {
        setShowPathwayShimmar(true);
        setCoursesArr([]);
        setJourneyId(data?.id);
        dispatch(getJournyCourses(params?.id, data?.id));
    };

    const pathwayHalfScreen = (data) => {
        dispatch(showModal({ type: "pathwayHalfScreen", pathwayData: data }));
    };

    useEffect(() => {
        if (getDimJournyCoursesResponse?.records?.length > 0) {
            setShowPathwayShimmar(false);
            let selectCourses = [];
            getSequnceSort(getDimJournyCoursesResponse?.records)?.map((dim, index) => {
                getSequnceSort(dim?.skills)?.map((skill, sKey) => {
                    skill?.courses?.map((courses, cKey) => {
                        courses.isSelected = true;
                        selectCourses?.push(courses?.id);
                    })
                })
            })
            setCoursesArr(selectCourses);
            setPathwayTree(getDimJournyCoursesResponse?.records);
        }
    }, [getDimJournyCoursesResponse])

    const handleRemoveTagDimSkillCourse = (removeValue, dimension, skill, course, showPopup) => {
        let tagSelectedCourseCopy = [...tagSelectedCourse];
        let dimTreeArrayCopy = [];
        if (screen === 6) {
            dimTreeArrayCopy = [...pathwayTree];
        } else if (screen === 4) {
            dimTreeArrayCopy = [...getDImSkillData];
        } else if (screen === 3) {
            dimTreeArrayCopy = [...dimensionTree];
        }
        if (removeValue === "dimension") {
            if (showPopup) {
                handleRemoveTagDimSkillCourseWithPopup(removeValue, dimension, skill, course, showPopup);
                return;
            }
            const key = dimTreeArrayCopy?.findIndex(item => item?.name === dimension?.name);
            dimTreeArrayCopy[key]?.skills?.map((skill, key) => {
                skill?.courses?.map((course, i) => {
                    const key = tagSelectedCourseCopy?.findIndex(item => item?.name === course?.name);
                    if (key !== -1) {
                        tagSelectedCourseCopy[key].isSelected = false;
                    }
                })
            })
            dimTreeArrayCopy.splice(key, 1);
        } else if (removeValue === "skill") {
            if (showPopup) {
                handleRemoveTagDimSkillCourseWithPopup(removeValue, dimension, skill, course, showPopup);
                return;
            }
            const key = dimTreeArrayCopy?.findIndex(item => item?.name === dimension?.name);
            if (dimTreeArrayCopy[key]?.skills?.length === 1) {
                dimTreeArrayCopy[key]?.skills?.map((skill, key) => {
                    skill?.courses?.map((course, i) => {
                        const key = tagSelectedCourseCopy?.findIndex(item => item?.name === course?.name);
                        if (key !== -1) {
                            tagSelectedCourseCopy[key].isSelected = false;
                        }
                    })
                })
                dimTreeArrayCopy.splice(key, 1);
            } else {
                const skillIndex = dimTreeArrayCopy[key]?.skills?.findIndex(item => item?.name === skill?.name);
                dimTreeArrayCopy[key]?.skills[skillIndex]?.courses?.map((course, i) => {
                    const key = tagSelectedCourseCopy?.findIndex(item => item?.name === course?.name);
                    if (key !== -1) {
                        tagSelectedCourseCopy[key].isSelected = false;
                    }
                })
                dimTreeArrayCopy[key]?.skills?.splice(skillIndex, 1);
            }
        } else {
            if (showPopup) {
                handleRemoveTagDimSkillCourseWithPopup(removeValue, dimension, skill, course, showPopup);
                return;
            }
            const key = dimTreeArrayCopy?.findIndex(item => item?.name === dimension?.name);
            const skillIndex = dimTreeArrayCopy[key]?.skills?.findIndex(item => item?.name === skill?.name);
            if (dimTreeArrayCopy[key]?.skills?.length === 1 && dimTreeArrayCopy[key]?.skills[skillIndex]?.courses?.length === 1) {
                dimTreeArrayCopy[key]?.skills?.map((skill, key) => {
                    skill?.courses?.map((course, i) => {
                        const key = tagSelectedCourseCopy?.findIndex(item => item?.name === course?.name);
                        if (key !== -1) {
                            tagSelectedCourseCopy[key].isSelected = false;
                        }
                    })
                })
                dimTreeArrayCopy.splice(key, 1);
            } else {
                if (dimTreeArrayCopy[key]?.skills[skillIndex]?.courses?.length === 1) {
                    dimTreeArrayCopy[key]?.skills[skillIndex]?.courses?.map((course, i) => {
                        const key = tagSelectedCourseCopy?.findIndex(item => item?.name === course?.name);
                        if (key !== -1) {
                            tagSelectedCourseCopy[key].isSelected = false;
                        }
                    })
                    dimTreeArrayCopy[key]?.skills?.splice(skillIndex, 1);
                } else {
                    const index = dimTreeArrayCopy[key]?.skills[skillIndex]?.courses?.findIndex(item => item?.name === course?.name);
                    const i = tagSelectedCourseCopy?.findIndex(item => item?.name === course?.name);
                    if (i !== -1) {
                        tagSelectedCourseCopy[i].isSelected = false;
                    }
                    dimTreeArrayCopy[key]?.skills[skillIndex]?.courses?.splice(index, 1);
                }
            }
        }
        if (screen === 6) {
            setPathwayTree(dimTreeArrayCopy);
            let courseId = [];
            dimTreeArrayCopy?.map((dim, index) => {
                dim?.skills?.map((skill, key) => {
                    skill?.courses?.map((course, cKey) => {
                        courseId?.push(course?.id);
                    })
                })
            })
            setCoursesArr(courseId);
        } else if (screen === 4) {
            setDimSkillData(dimTreeArrayCopy);
            let skillId = [];
            dimTreeArrayCopy?.map((dim, index) => {
                dim?.skills?.map((skill, key) => {
                    skillId?.push(skill?.id);
                })
            })
            setSkillId(skillId);
        } else if (screen === 3) {
            setDimensionTree(dimTreeArrayCopy);
            setTagSelectedCourse(tagSelectedCourseCopy);
        }
        console.log('## $$ tagSelectedCourse: ', dimTreeArrayCopy);
    }

    const handleRemoveTagDimSkillCourseWithPopup = (removeValue, dimension, skill, course, showPopup, dimType) => {
        let message = "";
        if (removeValue === "dimension") {
            message = "Click 'Ok' to delete all skills and courses selected for this dimension.";
        } else if (removeValue === "skill") {
            message = skill?.courses?.length === 0 || !skill?.isCompleted ? "Click 'Ok' to delete this skill." : "Click 'Ok' to delete this skill and all its selected courses."
        } else {
            message = "Click 'Ok' to delete this course."
        }
        setDeletePlan({ removeValue: removeValue, dimension: dimension, skill: skill, course: course, message, message, dimType: dimType });
    }

    const myHandleOnSkillClick = (dim, index, skill, skIndex) => {
        let arr = [...getDImSkillData];
        if (!arr?.find((item) => item?.name === dim?.name)) {
            let obj = { id: dim?.id, name: dim?.name, index: index, skills: [skill] };
            arr.push(obj);
        } else {
            const dimKey = arr?.findIndex((item) => item?.name === dim?.name);
            const skilkKy = arr[dimKey]?.skills?.findIndex(
                (item) => item?.id === skill?.id
            );
            if (skilkKy === -1) {
                arr[dimKey]?.skills?.push(skill);
            }
            else {
                if (arr[dimKey]?.skills?.length === 1) {
                    arr?.splice(dimKey, 1);
                    // deletePlanActivities("dimension", dim, index);
                } else {
                    arr[dimKey]?.skills?.splice(skilkKy, 1);
                    // deletePlanActivities("skill", skill, index, skIndex);
                    // handleRemoveTagDimSkillCourse("skill", dim, skill, "", true);
                }
            }
        }
        setDimSkillData(arr);
        let skillArr = [];
        arr?.map((dim, index) => {
            dim?.skills?.map((skill, key) => {
                skillArr?.push(skill?.id);
            });
        });
        setSkillId(skillArr);
    };

    const handlEditeCoursePLan = () => {
        let skillArr = [];
        let tempDimArr = [...coursePlanTree];
        tempDimArr?.map((dim, index) => {
            dim?.skills?.map((skill, key) => {
                skill.isCompleted = true;
                skillArr?.push(skill?.id);
                skill?.courses?.map((course, cKey) => {
                    course.isSelected = true;
                })
            })
        })
        console.log("tempDimArr : ", tempDimArr);
        setDimSkillData(tempDimArr);
        setSkillId(skillArr);

    }

    const handleDimSkillBack = () => {
        let dimArr = [];
        let arr = [...getDImSkillData];
        arr?.map((dim, index) => {
            dim?.skills?.map((skill, key) => {
                if (getSkillId?.includes(skill?.id)) {
                    let key = dimArr?.findIndex((item) => item?.name === dim?.name)
                    if (key === -1) {
                        dim.skills = [skill]
                        dimArr?.push(dim);
                    } else {
                        dimArr[key].skills?.push(skill);

                    }
                    skill?.courses?.map((course, cKey) => {
                        console.log("getDImSkillData 1111 : ", !getCourseId?.includes(course?.id))
                        if (!getCourseId?.includes(course?.id)) {
                            course.isSelected = false;
                        }
                        if (!skill?.courses?.find((item) => item?.isSelected === true)) {
                            skill.isCompleted = false;
                        }
                    })
                }
            })
        })
        setDimSkillData(dimArr);
        setCourseId([]);
    }

    const handleShowSkillCourses = () => {
        setLoader(true);
        dispatch(getDimSkillCourses(params?.id, getSkillId));
        setDimName([]);
    };

    useEffect(() => {
        if (dimSkillCourseResp?.records && screen === 4) {
            let courseId = [];
            setLoader(false);
            setScreen(5);
            getSequnceSort(dimSkillCourseResp?.records)?.map((dim, i) => {
                dim.isSelected = true;
                dim.isCompleted = false;
                const dimKey = coursePlanTree?.findIndex((item) => item?.name === dim?.name);
                getSequnceSort(dim?.skills)?.map((skill, key) => {
                    skill.isSelected = true;
                    skill.isCompleted = false;
                    const sKey = coursePlanTree[dimKey]?.skills?.findIndex((item) => item?.name === skill?.name);
                    if (coursePlanTree[dimKey]?.skills[sKey]?.courses?.length > 0) {
                        dim.isCompleted = true;
                        skill.isCompleted = true;
                    }
                    skill?.courses?.map((course, index) => {
                        course.isSelected = false;
                        if (skill.isCompleted === true) {
                            course.isSelected = true;
                            courseId?.push(course?.id);
                        }
                    })
                })
            })
            setDimSkillCoursePlanTree(dimSkillCourseResp?.records);
            setCourseId(courseId);
        }
    }, [dimSkillCourseResp])

    const handleDimSkillCourseClick = (
        dimIndex,
        skillIndex,
        courseIndex,
        course
    ) => {
        if (getCourseId?.length >= 6 && !getCourseId?.includes(course?.id)) {
            handleNumberOfCourses();
            return false;
        }
        let myArray = [...dimSkillCoursePlanTree];
        // skill and courses greentickarrow
        if (myArray[dimIndex].skills[skillIndex].courses[courseIndex].isSelected) {
            myArray[dimIndex].skills[skillIndex].courses[courseIndex].isSelected = false;
            if (!myArray[dimIndex].skills[skillIndex]?.courses?.find((val) => val?.isSelected === true)
            ) {
                // myArray[dimIndex].skills[skillIndex].isSelected = false;
                myArray[dimIndex].skills[skillIndex].isCompleted = false;
            }
        } else {
            myArray[dimIndex].skills[skillIndex].courses[courseIndex].isSelected = true;
            myArray[dimIndex].skills[skillIndex].isSelected = true;
            myArray[dimIndex].skills[skillIndex].isCompleted = true;
            myArray[dimIndex].isSelected = true;
        }

        // dimension greentickarrow
        if (myArray[dimIndex]?.skills?.find((val) => val?.isSelected === true && val?.isCompleted === false)
        ) {
            myArray[dimIndex].isCompleted = false;
        } else {
            myArray[dimIndex].isCompleted = true;
        }

        if (myArray[dimIndex]?.skills?.find((val) => val?.isSelected === true)) {
            myArray[dimIndex].isSelected = true;
        } else {
            // myArray[dimIndex].isSelected = false;
        }

        setDimSkillCoursePlanTree(myArray);
        let skillsId = [];
        let courseId = [];
        myArray?.map((dim, index) => {
            dim?.skills?.map((skill, key) => {
                if (skill?.isSelected) {
                    skillsId?.push(skill?.id);
                }
                skill?.courses?.map((course, cKey) => {
                    if (course?.isSelected) {
                        courseId?.push(course?.id);
                    }
                });
            });
        });
        setSkillId(skillsId);
        setCourseId(courseId);
    };

    const handleRemoveDimensionSkillCourse = (removeValue, dimension, skill, course, showPopup) => {
        let tagSelectedCourseCopy = [...tagSelectedCourse];
        console.log("removeValue, dimension : ", removeValue, dimension);

        let dimTreeArrayCopy = [...dimSkillCoursePlanTree];
        if (removeValue === "dimension") {
            if (showPopup) {
                handleRemoveTagDimSkillCourseWithPopup(removeValue, dimension, skill, course, showPopup, "removeDimension");
                return;
            }
            const key = dimTreeArrayCopy?.findIndex(item => item?.name === dimension?.name);
            dimTreeArrayCopy[key].isSelected = false;
            dimTreeArrayCopy[key].isCompleted = false;
            dimTreeArrayCopy[key]?.skills?.map((skill, sKey) => {
                skill.isSelected = false;
                skill.isCompleted = false;
                skill.courses?.map((courses, cKey) => {
                    courses.isSelected = false;
                })
            })

        } else if (removeValue === "skill") {
            if (showPopup) {
                handleRemoveTagDimSkillCourseWithPopup(removeValue, dimension, skill, course, showPopup, "removeDimension");
                return;
            }
            const key = dimTreeArrayCopy?.findIndex(item => item?.name === dimension?.name);
            const skillIndex = dimTreeArrayCopy[key]?.skills?.findIndex(item => item?.name === skill?.name);

            dimTreeArrayCopy[key].skills[skillIndex].isSelected = false;
            dimTreeArrayCopy[key].skills[skillIndex].isCompleted = false;
            dimTreeArrayCopy[key]?.skills[skillIndex]?.courses?.map((course, i) => {
                course.isSelected = false;
                course.isCompleted = false;
            })

            let skillCoutnt = 0;
            dimTreeArrayCopy[key].skills?.map((skill, key) => {
                if (skill?.isSelected) {
                    skillCoutnt++;
                }
            })

            if (skillCoutnt === 0) {
                dimTreeArrayCopy[key].isSelected = false;
                dimTreeArrayCopy[key].isCompleted = false;
            } else {
                if (!dimTreeArrayCopy[key]?.skills?.find((item) => item?.isSelected === true && item?.isCompleted === false)) {
                    dimTreeArrayCopy[key].isSelected = true;
                    dimTreeArrayCopy[key].isCompleted = true;
                }
            }
        } else {
            if (showPopup) {
                handleRemoveTagDimSkillCourseWithPopup(removeValue, dimension, skill, course, showPopup, "removeDimension");
                return;
            }
            const key = dimTreeArrayCopy?.findIndex(item => item?.name === dimension?.name);
            const skillIndex = dimTreeArrayCopy[key]?.skills?.findIndex(item => item?.name === skill?.name);
            const index = dimTreeArrayCopy[key]?.skills[skillIndex]?.courses?.findIndex(item => item?.name === course?.name);

            let courseCoutn = 0;
            dimTreeArrayCopy[key]?.skills[skillIndex]?.courses?.map((course, key) => {
                if (course?.isSelected) {
                    courseCoutn++;
                }
            })
            let skillCoutnt = 0;
            dimTreeArrayCopy[key].skills?.map((skill, key) => {
                if (skill?.isSelected) {
                    skillCoutnt++;
                }
            })

            if (courseCoutn === 1) {
                dimTreeArrayCopy[key].skills[skillIndex].isSelected = false;
                dimTreeArrayCopy[key].skills[skillIndex].isCompleted = false;
            }
            if (skillCoutnt === 1 && courseCoutn === 1) {
                dimTreeArrayCopy[key].isSelected = false;
                dimTreeArrayCopy[key].isCompleted = false;
            }
            dimTreeArrayCopy[key].skills[skillIndex].courses[index].isSelected = false;
        }

        setDimSkillCoursePlanTree(dimTreeArrayCopy);

        let skillsId = [];
        let courseId = [];
        dimTreeArrayCopy?.map((dim, index) => {
            dim?.skills?.map((skill, key) => {
                if (skill?.isSelected) {
                    skillsId?.push(skill?.id);
                }
                skill?.courses?.map((course, cKey) => {
                    if (course?.isSelected) {
                        courseId?.push(course?.id);
                    }
                })
            })
        })
        setSkillId(skillsId);
        setCourseId(courseId);
    }
    const DimCollespeExp = (event) => {
        // const element = document.getElementsByClassName("minus_plus_icons")
        // let areaexpand = element.getAttribute("aria-expanded")
        let areaexpand = event.currentTarget.getAttribute('aria-expanded')
        //  let areaexpand = event.target.attributes.getNamedItem('aria-expanded');

        setcollaspeDim(areaexpand)
        console.log(collapseDim, "truefalse")
    }

    const handleCollapse = (dimName) => {
        let dimArr = [...getDimName]
        let dimKey = dimArr?.findIndex((item) => item?.name === dimName);

        console.log("getDimName method : ", dimArr?.includes(dimName));

        if (dimKey === -1) {
            let obj = { name: dimName, type: "close" }
            dimArr?.push(obj);
        }
        else {
            if (dimArr[dimKey]?.type === "open") {
                dimArr[dimKey].type = "close"
            } else {
                dimArr[dimKey].type = "open"
            }
        }
        setDimName(dimArr);
    }

    const handleNumberOfCourses = (type) => {
        if (type) {
            setDeletePlan({ title: "Cannot Create Plan", message: "you have not selected course in any of the one skill." })

        } else {
            setDeletePlan({ title: " Max Course Limit", message: "You have already selected the maximum (6) number of courses in this plan. You can delete a course to add this course to the plan." })

        }
    }

    const getCourseLength = () => {
        if (dimensionTree) {
            let courseArrId = [];
            dimensionTree?.map((dim, index) => {
                dim?.skills?.map((skill, key) => {
                    skill?.courses?.map((course, count) => {
                        courseArrId?.push(course?.id);
                    })
                })
            })
            return courseArrId;
        }
    }
    return (
        <Home>
            <div className="d-flex flex-wrap SpecialLeftpanel w-100">
                <div className="d-flex w-100 align-items-start overflow-visible">
                    <div className="LeftbarPannel p-0" id="">
                        <div className="CourseCardWrapper fullHeight100">
                            <div class="form-title mt-0 mb-0 Enrollcoursetitle heading">
                                <h2 data-toggle="collapse" class="m-0 pt-0 pb-1 w-100 flex justify-content-between">
                                    <span>
                                        {" "}
                                        <img src={image.Powericon} className="mr-2" alt="" />
                                        Let's Create {getLearnerName()}'s Learning Plan
                                    </span>
                                </h2>
                            </div>
                            <div class="backpageStrip flex">
                                {
                                    screen !== 1 ? (
                                        <a href="#" onClick={() => handleBack()}>
                                            <span class=""><i class="fa-solid fa-angle-left mr-1"></i></span>
                                            Back
                                        </a>
                                    ) : (<div></div>)
                                }
                                {/* {
                                    (selectedOption !== "changePace" && [1, 2, 4]?.includes(screen)) && (
                                        <a href="#" onClick={() => handleNext()}>Next
                                            <span class=""><i class="fa-solid fa-angle-right ml-1"></i></span>
                                        </a>
                                    )
                                } */}
                                {((selectedOption !== "changePace" && screen === 1) || (selectedOption !== "recommended" &&
                                    [2, 4]?.includes(screen))) && (
                                        <a href="#" onClick={() => handleNext()} className={(loader || (screen === 4 && getSkillId?.length === 0)) ? "disabledevent" : ""}>
                                            Next
                                            <span class="">
                                                <i class="fa-solid fa-angle-right ml-1"></i>
                                            </span>
                                        </a>
                                    )}
                            </div>
                            {/* screen 1 */}
                            {
                                screen === 1 && (
                                    <div className="learner_plan setup_one p-4">
                                        <div className="paceSteps mt-0">
                                            <div className="">
                                                <h3 className="d-flex align-items-start paceseltitle">
                                                    <span>
                                                        Select a pace goal for {getLearnerName()} to  complete  courses in their learning plan.
                                                    </span>
                                                </h3>
                                                <p className="pt-3">
                                                    The pace selected is used to build the timeline of the learner plan. Pace can be changed at any time and courses are completed at your own pace.
                                                </p>
                                            </div>
                                            <div className="ScenecerelateddQuiz p-0 d-flex align-items-baseline justify-content-between">
                                                <div class="signupType m-0 pt-3 mt-3">
                                                    <div class="PaceModeSel mb-3">
                                                        <h3 className=""> Sessions per week
                                                            <span className="mandatoryField">*</span>
                                                            <div className="selectecPaceWeek">
                                                                {
                                                                    sittings?.map((value, index) => (
                                                                        <label class="Selcheckbox m-0 ActiveQQst" key={index}>
                                                                            <input type="radio" name="skill0" onClick={() => handleSitting(value)} checked={value == selectedSitting ? true : false} />
                                                                            {value} <span>Session{value === "1" ? "" : "s"}</span>
                                                                            <span class="checkmark"> </span>
                                                                            {value === "2" && (<p className="recummended">(Recommended)</p>)}
                                                                        </label>

                                                                    ))
                                                                }

                                                            </div>
                                                        </h3>
                                                        {/* <p>We recommend at least {convertedNumber(2)} (2) sessions per week for optimal learning experience.</p> */}
                                                    </div>
                                                </div>
                                                <div class="signupType m-0 pt-3 mt-3 seltimedaysit">
                                                    <div class="PaceModeSel mb-3">
                                                        <h3 className=""> Duration per session
                                                            <span className="mandatoryField">*</span>
                                                            <div className="selectecPaceWeek">
                                                                {
                                                                    minutes?.map((value, index) => (
                                                                        <label class="Selcheckbox m-0 ActiveQQst" key={index}>
                                                                            <input type="radio" name="minutes" checked={value == selectedMinutes ? true : false} onClick={() => handleMinutes(value)} />
                                                                            {value} <span>Minutes</span>
                                                                            <span class="checkmark"> </span>
                                                                            {value === "30" && (<p className="recummended">(Recommended)</p>)}
                                                                        </label>
                                                                    ))
                                                                }
                                                            </div>
                                                        </h3>
                                                        {/* <p>
                                                            We recommend at least 30 mins per session for optimal learning experience.
                                                        </p> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="plan_startdate mt-3">
                                                <div className="input-group calender">
                                                    <div className="form-group w-50 flexone">
                                                        <h3 className="mr-3"> Start Date: </h3>
                                                        <label className="flexone position-relative w-60">
                                                            <span className="clenderIcon">
                                                                <img src={image.Calendericon} />
                                                            </span>
                                                            <DatePicker className="form-control signupChildClass p-0 w-100"
                                                                clearIcon={null}
                                                                oneTap
                                                                onChange={(value) => {
                                                                    setUserDate(value)
                                                                }}
                                                                value={userDate}
                                                                dayPlaceholder={"dd"}
                                                                monthPlaceholder={"mm"}
                                                                yearPlaceholder={"yyyy"}
                                                                format="MM/dd/yyyy"
                                                                placement={"topEnd"}
                                                                minDate={new Date(moment())}
                                                            />
                                                        </label>
                                                        <span onClick={() => handlePopUpOpen("startdate")}>
                                                            <img src={image.chat_icon} className="ml-2 ichat_icon pointer" />
                                                        </span>
                                                    </div>
                                                    <p>This is the start date for the start of the learning plan or for the first course which you have not started yet.</p>
                                                </div>
                                            </div>
                                            {
                                                selectedOption !== "changePace" && (
                                                    <div className="next_button p-10">
                                                        <div className={`buttonDistribotion justify-content-between mt-4 pt-4`}>
                                                            <div></div>
                                                            <button
                                                                type="submit"
                                                                data-toggle="modal"
                                                                data-target="#schoolactivity75"
                                                                className="btn-blue btn-login d-block mb-5 w-auto"
                                                                onClick={() => handleNext()}
                                                            >Next
                                                                <i className="fa-solid fa-arrow-right m-0 ml-2"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                )
                            }

                            {/* screen 2 */}
                            {
                                screen === 2 && (
                                    <div className="learner_plan p-4 setup_two ljpopups">
                                        <div className="">
                                            <div class="ScenecerelateddQuiz  flex position-relative flex-wrap" id="ScenecerelateddQuiz">
                                                <div class="signupType m-0 ">
                                                    <h4 class="">
                                                        <strong class="">Next let's build the courses for {getLearnerName()}'s learning Plan by selecting from one of the options below.</strong>
                                                    </h4>
                                                    {
                                                        !editPlan && (
                                                            <div class="learnerPlan_modelQue">
                                                                <div>
                                                                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                                                                        <div className="QQtitle">
                                                                            <p className="palnquestiontitle">Recommend a learning plan for {getLearnerName()}.</p>
                                                                        </div>
                                                                        <input type="radio" name="skill0" value="recommended" checked={selectedOption === "recommended"} onClick={() => handleOptionClick("recommended")} />
                                                                        <span class="checkmark"></span>
                                                                    </label>
                                                                    <span onClick={() => handlePopUpOpen("recommended")}>
                                                                        <img src={image.chat_icon} class="ml-2 ichat_icon pointer" alt="" />
                                                                    </span>
                                                                </div>
                                                                <p className="onliner_Sel w-100">
                                                                    We selected a few of our most popular courses to create a learning plan for {getLearnerName()}.
                                                                </p>
                                                            </div>
                                                        )
                                                    }
                                                    <div class="learnerPlan_modelQue">
                                                        <div>
                                                            <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                                                                <div className="QQtitle">
                                                                    <p className="palnquestiontitle">
                                                                        I want to filter courses based on life events {getLearnerName()} is experiencing.
                                                                    </p>
                                                                </div>
                                                                <input type="radio" name="skill0" value="filter" checked={selectedOption === "filter"} onClick={() => handleOptionClick("filter")} />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <span onClick={() => handlePopUpOpen("filter")}>
                                                                <img src={image.chat_icon} class="ml-2 ichat_icon pointer" alt="" />
                                                            </span>
                                                        </div>
                                                        <p className="onliner_Sel w-100">
                                                            You will select some situations that are common for kids aged 10-15 to experience.
                                                        </p>
                                                    </div>
                                                    {
                                                        !editPlan && (
                                                            <div class="learnerPlan_modelQue">
                                                                <div>
                                                                    <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                                                                        <div className="QQtitle">
                                                                            <p className="palnquestiontitle">
                                                                                I want to select a pathway that focuses on an area where {getLearnerName()} needs help.
                                                                            </p>
                                                                        </div>
                                                                        <input type="radio" name="skill0" value="pathway" checked={selectedOption === "pathway"} onClick={() => handleOptionClick("pathway")} />
                                                                        <span class="checkmark"></span>
                                                                    </label>
                                                                    <span onClick={() => handlePopUpOpen("pathway")}>
                                                                        <img src={image.chat_icon} class="ml-2 ichat_icon pointer" alt="" />
                                                                    </span>
                                                                </div>
                                                                <p className="onliner_Sel w-100">
                                                                    Pathways are a set of courses curated by experts to combine skills for targeted growth.
                                                                </p>
                                                            </div>
                                                        )
                                                    }
                                                    <div className="learnerPlan_modelQue">
                                                        <div>
                                                            <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                                                                <div className="QQtitle">
                                                                    <p className="palnquestiontitle">
                                                                        I want to select dimension(s) and skill(s) where {getLearnerName()} needs help.
                                                                    </p>
                                                                </div>
                                                                <input type="radio" name="skill0" value="dimension" checked={selectedOption === "dimension"} onClick={() => handleOptionClick("dimension")} />
                                                                <span class="checkmark"></span>
                                                            </label>
                                                            <span onClick={() => handlePopUpOpen("dimension")}>
                                                                <img src={image.chat_icon} class="ml-2 ichat_icon pointer" alt="" />
                                                            </span>
                                                        </div>
                                                        <p className="onliner_Sel w-100">
                                                            Customize which dimension(s) and skill(s) you want {getLearnerName()} to focus on in the next few weeks.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="next_button p-10">
                                                <div className="buttonDistribotion justify-content-between">
                                                    <button
                                                        type="submit"
                                                        onClick={() => handleBack()}
                                                        className="btn-blue btn-login d-block mb-5 w-auto"
                                                    ><i className="fa-solid fa-arrow-left m-0 mr-2"></i>Back
                                                    </button>
                                                    {
                                                        selectedOption !== "recommended" && (
                                                            <>
                                                                {
                                                                    loader ? (
                                                                        <div className="justify-content-end">
                                                                            <button
                                                                                className="btn-blue btn-login d-block ml-auto mr-2  w-auto"
                                                                                disabled
                                                                            >
                                                                                <span className="RounAnimation mr-1"></span> Please
                                                                                Wait...
                                                                            </button>
                                                                        </div>) : (
                                                                        <button
                                                                            type="submit"
                                                                            data-toggle="modal"
                                                                            data-target="#schoolactivity75"
                                                                            className="btn-blue btn-login d-block mb-5 w-auto"
                                                                            onClick={() => handleNext()}
                                                                        >
                                                                            Next<span>
                                                                                <i className="fa-solid fa-arrow-right m-0 ml-2"></i>
                                                                            </span>
                                                                        </button>
                                                                    )}
                                                            </>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {/* screen 3 */}
                            {
                                screen === 3 && (
                                    <div className="learner_plan p-4 setup_two ljpopups setup_three">
                                        <div className="">
                                            <div class="ScenecerelateddQuiz custom_pathways  flex position-relative flex-wrap" id="ScenecerelateddQuiz">
                                                <div class="signupType m-0 w-100 random_selection">
                                                    <h4 class="w-100 flex-wrap p-0">
                                                        <strong class="">Let's select the areas where you want {getLearnerName()} to focus. </strong>
                                                        <p className="onliner_Sel w-100 p-0">We recommend up to 3 areas at a time. Plans can range from 2 to 6 courses.</p>
                                                    </h4>
                                                    <div className="" id="AreasFocus">
                                                        {
                                                            tagData?.map((value, index) => (
                                                                <div class="learnerPlan_modelQue" >
                                                                    <div>
                                                                        <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                                                                            <div class="QQtitle">
                                                                                <p class="palnquestiontitle">{value?.uiLabel}</p>
                                                                            </div>
                                                                            <input type="checkbox" name="randomskills" onClick={() => handleTagSelectedCourse(value, index)} />
                                                                            <span class="checkmark"></span>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>
                                                {
                                                    tagSelectedCourse?.length > 0 && (
                                                        <div class="signupType m-0 w-100 pt-4">
                                                            <h4 class="flex p-0">
                                                                <strong class="">Here are recommended courses based on your selection(s) above.</strong>
                                                            </h4>
                                                            {
                                                                tagSelectedCourse?.map((course, count) => (
                                                                    <div class="learnerPlan_modelQue">
                                                                        <div>
                                                                            <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                                                                                <div class="QQtitle">
                                                                                    <p class="palnquestiontitle">{course?.name}</p>
                                                                                </div>
                                                                                <input type="checkbox" name="skill0" checked={course?.isSelected} onClick={() => handleTagCourseClick(course, count)} />
                                                                                <span class="checkmark"></span>
                                                                            </label>
                                                                            <span className="coursedtlicons pointer" onClick={() => courseDetailPage(course)}><i class="fa-solid fa-up-right-from-square pl-2 pr-2"></i></span>
                                                                        </div>
                                                                        <p class="onliner_Sel w-100">
                                                                            <React.Fragment>
                                                                                {course?.oneliner?.length > 100
                                                                                    ? (
                                                                                        <ReactTooltip id={course?.oneliner}>
                                                                                            <p>
                                                                                                {course?.oneliner}
                                                                                            </p>
                                                                                            {/* <p>{data?.name}</p> */}
                                                                                        </ReactTooltip>
                                                                                    ) : (
                                                                                        ""
                                                                                    )}
                                                                                <div data-for={course?.oneliner} data-event-off="" data-tip>
                                                                                    <span>
                                                                                        {textTrim(course?.oneliner, 100)}
                                                                                    </span>
                                                                                </div>
                                                                            </React.Fragment>
                                                                        </p>
                                                                    </div>
                                                                ))
                                                            }
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <div className="next_button p-10 pt-0">
                                            <div className="buttonDistribotion justify-content-between">
                                                <button
                                                    type="submit"
                                                    onClick={() => handleBack()}
                                                    className="btn-blue btn-login d-block mb-5 w-auto"><i className="fa-solid fa-arrow-left m-0 mr-2"></i>Back
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {/* screen 4 */}
                            {
                                screen === 4 && (
                                    <div className="learner_plan p-4 setup_two ljpopups setup_three">
                                        <div className="">
                                            <div
                                                class="ScenecerelateddQuiz  custom_pathways flex position-relative flex-wrap"
                                                id="ScenecerelateddQuiz">
                                                <div class="signupType m-0 random_selection">
                                                    <h4 class="flex-wrap">
                                                        <strong class="">
                                                            I want {getLearnerName()} to focus on the following dimensions.
                                                        </strong>
                                                        <p className="onliner_Sel w-100 p-0">
                                                            We recommend up to 3 dimensions at a time. Plans can range from 2 to 6 courses.
                                                        </p>
                                                    </h4>
                                                    <div className="Dimension_skill_tree">
                                                        {getSequnceSort(getDimPlanData?.records)?.map((dim, index) => (
                                                            <div className="DS_tree" key={index}>
                                                                <h2>
                                                                    <span
                                                                        data-toggle="collapse"
                                                                        className="minus_plus_icons"
                                                                        href={`#CollespeDimandskl${dim?.name}`}
                                                                        aria-expanded="true"
                                                                        onClick={() => handleCollapse(dim?.name)}
                                                                    >

                                                                        {getDimName?.find((item) => item?.name === dim?.name) ? (

                                                                            getDimName?.find((item) => item?.name === dim?.name && item?.type === "open")
                                                                                ?
                                                                                <img src={image.minus_sign} className="mr-2" alt="minus" />
                                                                                :
                                                                                <img src={image.plus_sign} className="mr-2" alt="plus" />

                                                                        ) : (
                                                                            <img src={image.minus_sign} className="mr-2" alt="minus" />
                                                                        )
                                                                        }
                                                                    </span>
                                                                    {dim?.name}
                                                                    <span>
                                                                        <img
                                                                            src={image.chat_icon}
                                                                            className="ml-2 ichat_icon pointer"
                                                                            alt=""
                                                                            onClick={() => showDimModal(dim, "dim")}
                                                                        />
                                                                    </span>
                                                                </h2>
                                                                <div className="panel-collapse collapse show" id={`CollespeDimandskl${dim?.name}`}>
                                                                    {
                                                                        getSequnceSort(dim?.skills)?.map((skill, key) => (
                                                                            !["Science", "Social Studies", "Technology", "Music"]?.includes(skill?.name) && (
                                                                                <div key={key} className="learnerPlan_modelQue"
                                                                                >
                                                                                    <div>
                                                                                        <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                                                                                            <div class="QQtitle">
                                                                                                <p class="palnquestiontitle">
                                                                                                    {skill?.name}
                                                                                                </p>
                                                                                            </div>
                                                                                            <input
                                                                                                type="checkbox"
                                                                                                name="randomskills"
                                                                                                onClick={() => myHandleOnSkillClick(dim, index, skill, key)}
                                                                                                checked={getSkillId?.includes(skill?.id)}
                                                                                            />
                                                                                            <span class="checkmark"></span>
                                                                                        </label>
                                                                                        <span>
                                                                                            <img
                                                                                                src={image.chat_icon}
                                                                                                className="ml-2 ichat_icon pointer"
                                                                                                alt=""
                                                                                                onClick={() => showDimModal(skill, "skill")}
                                                                                            />
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        ))
                                                                    }
                                                                </div>
                                                            </div>
                                                        )
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="next_button p-10">
                                                <div className="buttonDistribotion justify-content-between">
                                                    <button
                                                        type="submit"
                                                        onClick={() => handleBack()}
                                                        className="btn-blue btn-login d-block mb-5 w-auto"
                                                    ><i className="fa-solid fa-arrow-left m-0 mr-2"></i>Back
                                                    </button>
                                                    {loader ? (
                                                        <div className="justify-content-end">
                                                            <button
                                                                className="btn-blue btn-login d-block ml-auto mr-2  w-auto"
                                                                disabled
                                                            >
                                                                <span className="RounAnimation mr-1"></span> Please
                                                                Wait...
                                                            </button>
                                                        </div>) : (
                                                        <button
                                                            type="submit"
                                                            data-toggle="modal"
                                                            data-target="#schoolactivity75"
                                                            className="btn-blue btn-login d-block mb-5 w-auto"
                                                            disabled={getSkillId?.length === 0}
                                                            onClick={() => handleShowSkillCourses()}
                                                        >
                                                            Next
                                                            <span><i className="fa-solid fa-arrow-right m-0 ml-2"></i></span>
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {screen === 5 && (
                                <div className="learner_plan p-4 setup_two ljpopups setup_three">
                                    <div
                                        class="ScenecerelateddQuiz  custom_pathways flex position-relative flex-wrap"
                                        id="ScenecerelateddQuiz"
                                    >
                                        <div class="signupType m-0 random_selection">
                                            <h4 class="flex-wrap">
                                                <strong class="">
                                                    Here are the courses based on skills you selected in
                                                    the previous step.
                                                </strong>
                                                <p className="onliner_Sel w-100 p-0">
                                                    We recommend up to 3 dimensions at a time. Plans can
                                                    range from 2 to 6 courses.
                                                </p>
                                            </h4>
                                            <div className="Dimension_skill_tree setup_five">
                                                {getSequnceSort(dimSkillCourseResp?.records)?.map((dim, index) => (
                                                    <div className="DS_tree" key={index}>
                                                        <div className="DimTitleSlect">
                                                            <h2>
                                                                <span
                                                                    data-toggle="collapse"
                                                                    className="minus_plus_icons"
                                                                    href={`#CollespeDimandskl${dim?.name}`}
                                                                    aria-expanded="true"
                                                                    onClick={() => handleCollapse(dim?.name)}
                                                                >
                                                                    {getDimName?.find((item) => item?.name === dim?.name) ? (

                                                                        getDimName?.find((item) => item?.name === dim?.name && item?.type === "open")
                                                                            ?
                                                                            <img src={image.minus_sign} className="mr-2" alt="minus" />
                                                                            :
                                                                            <img src={image.plus_sign} className="mr-2" alt="plus" />

                                                                    ) : (
                                                                        <img src={image.minus_sign} className="mr-2" alt="minus" />
                                                                    )
                                                                    }
                                                                    {/* {collapseDim ?
                                                                        <img src={image.minus_sign} className="mr-2" alt="minus" />
                                                                        :
                                                                        <img src={image.plus_sign} className="mr-2" alt="plus" />
                                                                    }
                                                                    {console.log(collapseDim, "consolevalvue")} */}
                                                                </span>
                                                                {dim?.name}
                                                                <span>
                                                                    <img
                                                                        src={image.chat_icon}
                                                                        className="ml-2 ichat_icon pointer"
                                                                        alt=""
                                                                        onClick={() => showDimModal(dim, "dim")}
                                                                    />
                                                                </span>
                                                            </h2>
                                                        </div>
                                                        <div className="panel-collapse collapse show" id={`CollespeDimandskl${dim?.name}`}>
                                                            {getSequnceSort(dim?.skills)?.map((skill, key) => (
                                                                <div class="learnerPlan_modelQue" key={key}>
                                                                    <h2>
                                                                        {skill?.name}
                                                                        <span>
                                                                            <img
                                                                                src={image.chat_icon}
                                                                                className="ml-2 ichat_icon pointer"
                                                                                alt=""
                                                                                onClick={() => showDimModal(skill, "skill")}
                                                                            />
                                                                        </span>
                                                                    </h2>
                                                                    {getSequnceSort(skill?.courses)?.map((course, cKey) => (
                                                                        <div class="learnerPlan_modelQue" cKey={cKey}>
                                                                            <div>
                                                                                <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                                                                                    <div class="QQtitle">
                                                                                        <p class="palnquestiontitle">
                                                                                            {course?.name}
                                                                                        </p>
                                                                                    </div>
                                                                                    <input type="checkbox" name="skill0" onClick={() => handleDimSkillCourseClick(index, key, cKey, course)}
                                                                                        checked={getCourseId?.includes(course?.id)}
                                                                                    />
                                                                                    <span class="checkmark"></span>
                                                                                </label>
                                                                                <span className="coursedtlicons pointer"
                                                                                    onClick={() => courseDetailPage(course)}
                                                                                >
                                                                                    <i class="fa-solid fa-up-right-from-square pl-2 pr-2"></i>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="next_button p-10">
                                        <div className="buttonDistribotion justify-content-between">
                                            <button
                                                type="submit"
                                                onClick={() => handleBack()}
                                                className="btn-blue btn-login d-block mb-5 w-auto"
                                            ><i className="fa-solid fa-arrow-left m-0 mr-2"></i>Back
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {screen === 6 && (
                                <div className="learner_plan setup_two ljpopups setup_three pathwayslearner p-4">
                                    <div
                                        class="ScenecerelateddQuiz  flex position-relative flex-wrap"
                                        id="ScenecerelateddQuiz"
                                    >
                                        <div class="signupType m-0 ">
                                            <h4 class="mb-3">
                                                <strong class="">
                                                    Where do you think{" "}{getLearnerName()} needs support?
                                                    {/* <img
                                                        src="/static/media/chat-icon.2a607af3ca378ac033c1.png"
                                                        class="ml-2 pointer jinfoicon"
                                                        alt=""
                                                    /> */}
                                                </strong>
                                            </h4>
                                            {getDimJournyResponse?.records?.map((value, key) => (
                                                <div class="learnerPlan_modelQue" key={key}>
                                                    <div>
                                                        <label class="Selcheckbox m-0 ActiveQQst learnerPlan_sellebel">
                                                            <div class="QQtitle">
                                                                <p class="palnquestiontitle">{value?.name}</p>
                                                            </div>
                                                            <input type="radio" name="skill0"
                                                                onClick={() => handleJourneyCourse(value)}
                                                            />
                                                            <span class="checkmark"></span>
                                                        </label>
                                                        <span className="coursedtlicons pointer" onClick={() => pathwayHalfScreen(value)}>
                                                            <i class="fa-solid fa-up-right-from-square ml-2"></i>
                                                        </span>
                                                    </div>
                                                    <p class="onliner_Sel w-100">
                                                        {value?.oneliner}
                                                    </p>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                    <div className="next_button p-10 pt-0">
                                        <div className="buttonDistribotion justify-content-between">
                                            <button
                                                type="submit"
                                                onClick={() => handleBack()}
                                                className="btn-blue btn-login d-block mb-5 w-auto"><i className="fa-solid fa-arrow-left m-0 mr-2"></i>Back
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="RightbarPannel p-0 rightpannelSticky newcoursecardpanel home_page_rgt_pnl setuptwo_rPnl">
                        <LearnerPlanRightPanel
                            screen={screen}
                            selectedSitting={selectedSitting}
                            selectedMinutes={selectedMinutes}
                            dimensionTree={dimensionTree}
                            userDate={userDate}
                            selectedOption={selectedOption}
                            handleMoreOptions={handleMoreOptions}
                            coursesArr={coursesArr}
                            getJourneyId={getJourneyId}
                            pathwayTree={pathwayTree}
                            handleRemoveTagDimSkillCourse={handleRemoveTagDimSkillCourse}
                            dimSkillCoursePlanTree={dimSkillCoursePlanTree}
                            getCourseId={getCourseId}
                            handleRemoveDimensionSkillCourse={handleRemoveDimensionSkillCourse}
                            handlePopUpOpen={handlePopUpOpen}
                            getDImSkillData={getDImSkillData}
                            showPathwayShimmar={showPathwayShimmar}
                            handleNumberOfCourses={handleNumberOfCourses}
                            setCoursePlanTree={setCoursePlanTree}
                            coursePlanTree={coursePlanTree}
                            editPlan={editPlan}
                            setEditPlan={setEditPlan}
                        />
                    </div>
                    {deletePlan && (
                        <DeletePlanActivities
                            closePlan={closePlan}
                            deletePlan={deletePlan}
                            handleRemoveTagDimSkillCourse={handleRemoveTagDimSkillCourse}
                            handleRemoveDimensionSkillCourse={handleRemoveDimensionSkillCourse}
                            handleBack={handleBack}
                        />
                    )}
                    {
                        modalData?.type === "pathwayHalfScreen" && <PathwayHalfScreen courseDetailPage={courseDetailPage} />
                    }
                </div>
            </div>
        </Home>
    );
};

export default LearnerPlan;
