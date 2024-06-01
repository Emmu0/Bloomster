/** @format */

import { Line } from "rc-progress";
import axios from "axios";
import { MONTHS, COUNTRYDATA, AGE, LAST_OPTION } from "./DataObjects";
import * as image from "../resources/images";
import ReactTooltip from "react-tooltip";
import { moment } from "./Packages";
import { MSG, SITEURLNAME } from "./Messages";
export const getUnauthedAxios = () =>
	axios.create({
		headers: {
			"Content-Type": "application/json",
		},
	});

export const getAxios = () => {
	const token = getToken();
	const headers = {
		"Content-Type": "application/json",
		Authorization: `Bearer ${token}`,
	};
	return axios.create({ headers });
};

export const getMultipartAxios = () => {
	const token = getToken();
	const headers = {
		"Content-Type": undefined,
		enctype: "multipart/form-data",
		Authorization: `Bearer ${token}`,
	};
	return axios.create({ headers });
};

export const getPubMultipartAxios = () => {
	const headers = {
		"Content-Type": undefined,
		enctype: "multipart/form-data",
	};
	return axios.create({ headers });
};

export const getName = (string) => {
	let str = "";
	let middle = "";
	if (string?.firstName) {
		if (string?.middleName) {
			middle = string?.middleName.charAt(0).toUpperCase();
		}
		str =
			string?.firstName?.charAt(0)?.toUpperCase() +
			string?.firstName.slice(1) +
			" " +
			middle +
			" " +
			string?.lastName.charAt(0).toUpperCase() +
			string?.lastName.slice(1);
	}

	return str;
};

export const getProfileName = (string) => {
	let str = "";
	if (string) {
		if (string?.firstName) {
			str =
				string?.firstName?.charAt(0)?.toUpperCase() +
				" " +
				string?.lastName.charAt(0).toUpperCase();
		} else if (string !== "" && typeof string === "string") {
			let myArray = string && string?.split(" ");
			if (myArray.length > 1) {
				str =
					myArray[0]?.charAt(0)?.toUpperCase() +
					myArray[1]?.charAt(0)?.toUpperCase();
			} else {
				str = myArray[0]?.charAt(0)?.toUpperCase();
			}
		}
	}

	return str;
};

export const hyphenatedToCamelCase = (string) => {
	let str = "";
	if (string) {
		str = string.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
	}
	return str;
};

export const getCapitalized = (string) => {
	let str = "";
	// if (string) {
	//   str = string.replace(
	//     /(^\w|\s\w)(\S*)/g,
	//     (_, m1, m2) => m1.toUpperCase()  + m2.toLowerCase()
	//   );
	// }

	// if (string) {
	//   str = string.replace(/(\b\w)/g, (match) => match.toUpperCase());
	// }
	if (string) {
		str = string.replace(
			/(^\w|\s\w)(\S*)/g,
			(_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
		);
	}
	return str;
};

export const getUserDetails = (data, params) => {
	let details = [];
	if (data && params?.id) {
		if (data?.recordId === params?.id) {
			details = data?.records[0];
		} else {
			let child = data?.records[0]?.children;
			child.map((item) => {
				if (item.id === params.id) {
					details = item;
				}
			});
		}
	}
	return details;
};

export const getProgress = (count) => {
	return (
		<Line
			percent={(count * 100) / 4}
			strokeWidth="4"
			strokeColor={
				getStrokeColor((count * 100) / 4)
					? getStrokeColor((count * 100) / 4)
					: "#ccc"
			}
			width="100%"
			strokeLinecap="round"
			trailWidth="10%"
		/>
	);
};

export const getStrokeColor = (percent) => {
	if (percent <= 25) {
		return "#ffa41c";
	} else if (percent > 25 && percent <= 50) {
		return "##ffa41c";
	} else if (percent > 50 && percent <= 75) {
		return "#ffa41c";
	} else if (percent > 75) {
		return "#ffa41c";
	}
};

export const getToken = () => {
	let accessToken = "";
	let token = localStorage.getItem("access_token");
	if (token) {
		let accessTokenObj = token.split("##");
		accessToken = accessTokenObj[0];
	}
	return accessToken;
};

export const getUserSessionId = () => {
	let token = localStorage.getItem("access_token");
	if (token) {
		let accessToken = token.split("##");
		return accessToken[1];
	}
};

export const totalViews = (x) => {
	if (isNaN(x)) return x;
	if (x < 999) {
		return x;
	}
	if (x < 100000) {
		return Math.round(x / 1000) + "K";
	}
	if (x < 1000000) {
		return (x / 100000).toFixed(2) + "M";
	}

	if (x < 100000000) {
		return Math.round(x / 100000) + "M";
	}

	if (x < 100000000000) {
		return Math.round(x / 100000000) + "B";
	}
	return "1T+";
};

export const getCounts = (userData, userType, interest) => {
	let myCount = 0;
	let childArray = [];

	if (userType === "parent") {
		if (userData?.role?.name === "PARENT") {
			if (userData?.email && userData?.mobile) {
				myCount++;
			}
			if (userData?.experiences?.length > 0) {
				myCount++;
			}
			if (userData?.educations?.length > 0) {
				myCount++;
			}
			if (userData?.interests?.length > 0) {
				myCount++;
			}
		}
		return myCount;
	} else if (userType === "child") {
		userData &&
			userData.map((value, index) => {
				let childCount = 0;
				if (value?.email && value?.mobile) {
					childCount++;
				}
				if (value?.schoolDetails?.school) {
					childCount++;
				}
				if (value?.enrichmentDetails?.length > 0) {
					childCount++;
				}
				if (value?.interests?.length > 0) {
					childCount++;
				}
				childArray[index] = childCount;
			});
		return childArray;
	}
};

export function textTrim(value, number) {
	let string = "";
	if (value && value.length > number) {
		string = value.substring(0, number).trim() + "...";
	} else {
		string = value;
	}
	return string;
}

export function getTeacherName(object, selectedUser) {
	if (selectedUser?.teachers && object?.id) {
		let teacherName;

		let middle = "";
		selectedUser?.teachers &&
			selectedUser?.teachers.map((value) => {
				value?.courses.map((val) => {
					if (val.id === object?.id) {
						// teacherName = value?.firstName + " " + value?.lastName;
						if (value?.firstName) {
							if (value?.middleName) {
								middle = value?.middleName.charAt(0).toUpperCase();
							}
							teacherName =
								value?.firstName?.charAt(0)?.toUpperCase() +
								value?.firstName.slice(1) +
								" " +
								middle +
								" " +
								value?.lastName.charAt(0).toUpperCase() +
								value?.lastName.slice(1);
						}
					}
				});
			});
		return teacherName;
	}
}

export function getSequnceSortww(data) {
	if (data) {
		return (
			data &&
			data?.sort((a, b) =>
				a.sequence === null || a.sequence < b.sequence
					? -1
					: a.sequence === null || a.sequence > b.sequence
						? 1
						: a.sequence === b.sequence
							? 0
							: Infinity
			)
		);
	}
}

export function kFormatter(num) {
	if (num) {
		return Math.abs(num) > 999
			? // ? Math.sign(num) * Math.round((Math.abs(num) / 1000).toFixed(1)) + "k"
			(Math.sign(num) * Math.round((Math.abs(num) / 100).toFixed(1))) / 10 +
			"k"
			: Math.sign(num) * Math.abs(num);
	}
}

export function getSequnceSort(data) {
	if (data && data.length > 0) {
		return (
			data &&
			data?.sort((a, b) =>
				b.sequence === null || a.sequence < b.sequence
					? -1
					: a.sequence === null || a.sequence > b.sequence
						? 1
						: a.sequence === b.sequence
							? 0
							: Infinity
			)
		);
	}
}

// export function getRankSort(data) {
//   if (data && data.length > 0) {
//     return (
//       data &&
//       data?.sort((a, b) =>
//         b.rank === null || a.rank < b.rank
//           ? -1
//           : a.rank === null || a.rank > b.rank
//           ? 1
//           : a.rank === b.rank
//           ? 0
//           : Infinity
//       )
//     );
//   }
// }

export function getRankSort(data) {
	// return data;
	if (data && data.length > 0) {
		return data.sort((a, b) =>
			a.rank === null ? 1 : b.rank === null ? -1 : a.rank - b.rank
		);
	}
}

export function getDimSort(data) {
	if (data) {
		return (
			data &&
			data?.sort((a, b) =>
				b.dimSequence === null || a.dimSequence < b.dimSequence
					? -1
					: a.dimSequence === null || a.dimSequence > b.dimSequence
						? 1
						: a.dimSequence === b.dimSequence
							? 0
							: Infinity
			)
		);
	}
}

export function getSkillSort(data) {
	if (data) {
		return (
			data &&
			data?.sort((a, b) =>
				b.skillSequence === null || a.skillSequence < b.skillSequence
					? -1
					: a.skillSequence === null || a.skillSequence > b.skillSequence
						? 1
						: a.skillSequence === b.skillSequence
							? 0
							: Infinity
			)
		);
	}
}

export function getPeriodSort(data) {
	if (data) {
		return data?.sort((a, b) =>
			a.period < b.period ? -1 : a.period > b.period ? 1 : 0
		);
	}
}
export function getHostName(url) {
	try {
		var website = new URL(url);
		return website.hostname;
	} catch (error) {
		return url;
	}
}

export function getJoinedMonth(date) {
	if (date) {
		var start = new Date(date);
		var year = start.getFullYear();
		var month = start.getMonth();
		var monthName = MONTHS.filter((data) => data?.value === month);
		return monthName[0]?.key + " " + year;
	}
}

export function getDialingCode(countryCode) {
	let dialingObj = COUNTRYDATA.filter(
		(data) => data.code === countryCode.toUpperCase()
	);
	return dialingObj[0]?.dial_code;
}

export function fineObject(obj) {
	const results = obj.filter((element) => {
		if (Object.keys(element).length !== 0) {
			return true;
		}

		return false;
	});
	return results;
}

export function isValidHttpUrl(string) {
	let url;
	try {
		url = new URL(string);
	} catch (_) {
		return false;
	}
	return url.protocol === "http:" || url.protocol === "https:";
}

export function getUrlSegment() {
	let url = window.location.pathname;
	var segment = url.split("/");
	var filteredSegment = segment.filter(function (el) {
		return el !== "";
	});
	return filteredSegment;
}

export function SelectPickerVal(object, type) {
	if (object) {
		let Array = [];
		object.map((vl, ky) => {
			if (type === "label") {
				Array.push({
					label: getCapitalized(vl?.name),
					value: getCapitalized(vl?.name),
				});
			} else if (type === "country") {
				if (vl.name === "United States of America") {
					Array.push({ label: vl?.name, value: vl?.id });
				}
			} else if (type === "lessonResource") {
				Array.push({
					label: vl && vl?.lesson,
					value: vl && vl?.modLessId,
					module: vl && vl?.module,
				});
			} else if (type === "grade") {
				if (vl?.name == 6 || vl?.name == 7 || vl?.name == 8) {
					Array.push({ label: getCapitalized(vl?.name), value: vl?.id });
				}
			} else if (type === "studentGrade") {
				Array.push({ label: getCapitalized(vl?.name), value: vl?.id });
			} else if (type == "FeedBackSurvey") {
				Array.push({
					label: vl?.name,
					value: vl?.name,
				});
			} else if (type === "coursePopup") {
				Array.push({
					label: vl && vl?.name,
					value: vl && vl?.id,
					module: vl && vl?.module,
				});
			} else if (type === "search") {
				Array.push({
					label: vl && vl?.tag,
					value: vl && vl?.tag,
				});
			} else {
				Array.push({ label: getCapitalized(vl?.name), value: vl?.id });
			}
		});

		return Array;
	}
}

export function SelectPickerName(object, type) {
	if (object) {
		let Array = [];
		object.map((vl, ky) => {
			if (type === "label") {
				Array.push({
					label: getCapitalized(vl?.name),
					value: getCapitalized(vl?.name),
				});
			} else {
				Array.push({
					label: getCapitalized(vl?.name),
					value: getCapitalized(vl?.name),
				});
			}
		});

		return Array;
	}
}

export function LearnerCount() {
	let studentCount = [];
	Array.apply(null, { length: 20 }).map((e, i) => {
		studentCount.push({ label: i + 1, value: i + 1 });
	});
	return studentCount;
}

export function toAge(fromAge) {
	let studentAge = [];
	AGE.map((val) => {
		if (parseInt(val.value) > parseInt(fromAge)) {
			studentAge.push({ label: val.label, value: val.value });
		}
	});

	return studentAge;
}

export function generateMonth(data) {
	var max;
	var lab;
	MONTHS.map((val, i) => {
		max = val.value;
		lab = val.label;
	});

	var min = max - 12;
	let studentMonth = [];
	for (var i = max; i > min; i--) {
		if (parseInt(i) > parseInt(data)) {
			let mon;
			MONTHS.map((val) => {
				if (val.value === i) {
					mon = val.label;
				}
			});
			studentMonth.push({ label: mon, value: i });
		}
	}
	return studentMonth;
}

export function generateEndMonth(months, endMonth, endYear) {
	let studentYear = [];

	const maxYear = new Date().getFullYear();
	const maxMonth = new Date().getMonth() + 1;

	if (endYear === maxYear && endMonth >= maxMonth) {
		for (const month of months) {
			if (month.value <= maxMonth && month.value <= endMonth) {
				studentYear.push(month);
			}
		}
	} else if (endYear === maxYear && endMonth < maxMonth) {
		for (const month of months) {
			if (month.value <= maxMonth) {
				studentYear.push(month);
			}
		}
	} else {
		studentYear = [...months];
	}

	return studentYear;
}

export function generateArrayOfFromYears(
	offYear,
	startMonth,
	endMonth,
	endYear
) {
	var max = new Date().getFullYear();
	var maxMonth = new Date().getMonth();

	var min = max - 49;

	let studentYear = [];

	if (startMonth >= endMonth) {
		for (var i = max; i > min; i--) {
			if (parseInt(i) > parseInt(offYear)) {
				studentYear.push({ label: i, value: i });
			}
		}
	} else if (startMonth < endMonth) {
		for (var i = max; i >= min; i--) {
			if (parseInt(i) >= parseInt(offYear)) {
				studentYear.push({ label: i, value: i });
			}
		}
	}

	return studentYear;
}

export const generateArrayOfYears = () => {
	var max = new Date().getFullYear();
	var min = max - 49;
	var years = [];
	for (var i = max; i >= min; i--) {
		years.push({ label: i, value: i });
	}
	return years;
};

export function formatMobNo(phoneNumberString) {
	if (phoneNumberString) {
		var code = phoneNumberString.split("##");

		return code[0] + code[1];
	}
	return null;
}

export function dateFormat(dateObj) {
	if (dateObj) {
		let monthStr = dateObj.getMonth() + 1;
		let yearStr = dateObj.getFullYear();
		let dateStr = dateObj.getDate();
		return yearStr + "/" + monthStr + "/" + dateStr;
	}
	return null;
}

export function dateFormatter(dateObj, flag) {
	if (dateObj) {
		const inputDate = dateObj;
		const date = new Date(inputDate);
		if (flag) {
			date.setDate(date.getDate());
		} else {
			date.setDate(date.getDate() - 1);
		}
		const month = (date.getMonth() + 1).toString().padStart(2, "0");
		const day = date.getDate().toString().padStart(2, "0");
		const year = date.getFullYear();
		return `${month}/${day}/${year}`;
	} else {
		const currentDate = new Date();
		const currentMonth = (currentDate.getMonth() + 1)
			.toString()
			.padStart(2, "0");
		const currentDay = currentDate.getDate().toString().padStart(2, "0");
		const currentYear = currentDate.getFullYear();
		return `${currentMonth}/${currentDay}/${currentYear}`;
	}
}
export function dateInMonthFormat(dateObj) {
	if (dateObj) {
		const [year, month, day] = dateObj.split("-");
		let newDate = `${month}-${day}-${year}`;
		return newDate;
	}
	return null;
}

export function digitFormat(number) {
	return new Intl.NumberFormat("en-US", { maximumSignificantDigits: 3 }).format(
		number
	);
}

export function formatPhoneNumber(value) {
	if (!value) return value;

	const phoneNumber = value.replace(/[^\d]/g, "");

	const phoneNumberLength = phoneNumber.length;

	if (phoneNumberLength < 4) return phoneNumber;

	if (phoneNumberLength < 7) {
		return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
	}

	return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
		3,
		6
	)}-${phoneNumber.slice(6, 10)}`;
}

export function getImage(value) {
	if (value) {
		return value;
	} else {
		return image.noImage;
	}
}

export function htmlStrip(object) {
	if (object) {
		return object.replace(/<[^>]*>?/gm, "");
	}
}

export function getDimIcon(value) {
	let icon = "";
	let dimName;
	if (value?.name) {
		dimName = value?.name;
	} else if (value?.value) {
		dimName = value?.value;
	} else if (value?.title) {
		dimName = value?.title;
	} else if (value?.dimName) {
		dimName = value?.dimName;
	} else {
		dimName = value;
	}
	if (dimName) {
		if (dimName === "Intellectual") {
			icon = <img src={image.courselevel3} alt="" />;
		} else if (dimName === "Physical") {
			icon = <img src={image.courselevel2} alt="" />;
		} else if (dimName === "Social") {
			icon = <img src={image.courselevel4} alt="" />;
		} else if (dimName === "Emotional") {
			icon = <img src={image.CollegeJourneyicon} alt="" />;
		} else if (dimName === "Mindfulness") {
			icon = <img src={image.courselevel5} alt="" />;
		} else if (dimName === "Holistic") {
			icon = <img src={image.Holisticbullseyes} alt="" />;
		}
	}

	return icon;
}

export function getDimIconWithSpace(value) {
	let icon = "";
	let dimName;
	if (value?.name) {
		dimName = value?.name;
	} else if (value?.value) {
		dimName = value?.value;
	} else if (value?.title) {
		dimName = value?.title;
	} else if (value?.dimName) {
		dimName = value?.dimName;
	} else {
		dimName = value;
	}
	if (dimName) {
		if (dimName === "Intellectual") {
			icon = <img src={image.courselevel3} alt="" className="mr-2" />;
		} else if (dimName === "Physical") {
			icon = <img src={image.courselevel2} alt="" className="mr-2" />;
		} else if (dimName === "Social") {
			icon = <img src={image.courselevel4} alt="" className="mr-2" />;
		} else if (dimName === "Emotional") {
			icon = <img src={image.CollegeJourneyicon} alt="" className="mr-2" />;
		} else if (dimName === "Mindfulness") {
			icon = <img src={image.courselevel5} alt="" className="mr-2" />;
		} else if (dimName === "Holistic") {
			icon = <img src={image.Holisticbullseyes} alt="" className="mr-2" />;
		}
	}

	return icon;
}

// export function getDimIconWithSpace(value) {
//     let icon = "";
//     let dimName;
//     if (value?.name) {
//         dimName = value?.name;
//     } else if (value?.value) {
//         dimName = value?.value;
//     } else if (value?.title) {
//         dimName = value?.title;
//     } else if (value?.dimName) {
//         dimName = value?.dimName;
//     } else {
//         dimName = value;
//     }
//     if (dimName) {
//         if (dimName === "Intellectual") {
//             icon = <img src={image.courselevel3} alt="" className="mr-2" />;
//         } else if (dimName === "Physical") {
//             icon = <img src={image.courselevel2} alt="" className="mr-2" />;
//         } else if (dimName === "Social") {
//             icon = <img src={image.courselevel4} alt="" className="mr-2" />;
//         } else if (dimName === "Emotional") {
//             icon = <img src={image.CollegeJourneyicon} alt="" className="mr-2" />;
//         } else if (dimName === "Spiritual") {
//             icon = <img src={image.courselevel5} alt="" className="mr-2" />;
//         } else if (dimName === "Holistic") {
//             icon = <img src={image.Holisticbullseyes} alt="" className="mr-2" />;
//         }
//     }

//     return icon;
// }

export function getDimColor(value) {
	let color = "#D3D3D3";
	// if (value === "Intellectual") {
	//   color = "#85b812";
	// } else if (value === "Physical") {
	//   color = "#1ec1d9";
	// } else if (value === "Social") {
	//   color = "#e9b72f";
	// } else if (value === "Emotional") {
	//   color = "#e46666";
	// } else if (value === "Spiritual") {
	//   color = "#a86adb";
	// }

	return color;
}

export function getShuffel(data) {
	let Shuffle = data?.sort(() => Math?.random() - 0.5);
	Shuffle &&
		Shuffle.map((sfl, key) => {
			if (sfl?.options) {
				let arr = sfl?.options.sort(() => Math.random() - 0.5);
				let newArr = [];
				let mark = [];
				let i = 0;
				arr.map((vl, ky) => {
					if (LAST_OPTION.includes(vl.question)) {
						newArr.push(vl);
					} else {
						if (mark) {
							mark.push(vl);
						}
					}
				});
				mark.push(...[...newArr]);
				Shuffle[key]["options"] = mark;
			}
		});
	return Shuffle;
}

export function getDimShuffle(data) {
	if (data) {
		return data.sort(() => Math.random() - 0.5);
	}
	data.preventDefault();
}

export function getRoundNumber(num) {
	if (num) {
		return Math.round(num);
	}
}

export function getUserIcon(data, loggedInUser) {
	if (data?.role?.name === "LEARNER") {
		if (loggedInUser?.children?.length > 1) {
			if (
				getUrlSegment()[0] === "home" ||
				getUrlSegment()[0] === "dimensions" ||
				getUrlSegment()[0] === "courses" ||
				getUrlSegment()[1] === "parent-courses"
			) {
				return <i className={`${"fa-regular fa-user-group mr-2"}`}></i>;
			}
		}
	}
	return <i className={`${"fa fa-user"}`}></i>;
}

export function getToolTip(objString, count) {
	if (objString.length <= count) {
		return;
	} else {
		return (
			<ReactTooltip
				event="mouseover mouseenter"
				eventOff="mouseleave mouseout scroll mousewheel blur"
				effect="solid"
				id={objString}
			>
				{objString}
			</ReactTooltip>
		);
	}
}

export function getSequnceLevelSort(data) {
	if (data) {
		return (
			data &&
			data?.sort((a, b) =>
				b.level === null || a.level < b.level
					? -1
					: a.level === null || a.level > b.level
						? 1
						: a.level === b.level
							? 0
							: Infinity
			)
		);
	}
}

export function planSequence(object) {
	let planSeq = [];
	object.map((obj, key) => {
		if (obj?.planType === "MONTHLY") {
			planSeq[0] = obj;
		} else if (obj?.planType === "YEARLY") {
			planSeq[1] = obj;
		} else if (obj?.planType === "FAMILY_MONTHLY") {
			planSeq[2] = obj;
		} else if (obj?.planType === "FAMILY_YEARLY") {
			planSeq[3] = obj;
		}
	});

	return planSeq;
}

export function datesorting(data) {
	return data.sort((a, b) => {
		var c = new Date(a.createdDate);
		var d = new Date(b.createdDate);

		return c - d;
	});
}

export function getIntelligenceIcon(value) {
	let icon = "";
	let IntelligenceName;
	if (value?.surveyName) {
		IntelligenceName = value?.surveyName;
	}
	if (IntelligenceName) {
		if (
			["Linguistic/Verbal", "Verbal/Linguistic", "Verbal-Linguistic"].includes(
				IntelligenceName
			)
		) {
			icon = <img src={image.MIimage5} alt="" />;
		} else if (
			["Logical-Mathematical", "Logical/Mathematical:"].includes(
				IntelligenceName
			)
		) {
			icon = <img src={image.MIimage4} alt="" />;
		} else if (IntelligenceName === "Musical") {
			icon = <img src={image.MIimage3} alt="" />;
		} else if (IntelligenceName === "Naturalistic") {
			icon = <img src={image.MIimage2} alt="" />;
		} else if (IntelligenceName === "Bodily-Kinesthetic") {
			icon = <img src={image.MIimage8} alt="" />;
		} else if (IntelligenceName === "Visual-Spatial") {
			icon = <img src={image.MIimage1} alt="" />;
		} else if (IntelligenceName === "Interpersonal") {
			icon = <img src={image.MIimage6} alt="" />;
		} else if (IntelligenceName === "Intrapersonal") {
			icon = <img src={image.MIimage7} alt="" />;
		}
	}

	return icon;
}

export function isDimension(value) {
	if (
		["Intellectual", "Physical", "Social", "Emotional", "Mindfulness"].includes(
			value
		)
	) {
		return true;
	} else {
		return false;
	}
}
const isBetweenDates = (dateStart, dateEnd, date) =>
	date > dateStart && date <= dateEnd;

export function onBlurDate(
	field,
	relation,
	setValue,
	setError,
	userSelectedDt,
	formMsg1,
	formMsg2,
	yearDiv,
	clearErrors,
	formMsg3,
	setErrorMsg,
	setMsg,
	setMsg1,
	setValError
) {
	var birthday = moment(userSelectedDt, "DD.MM.YYYY");

	var userDate = birthday.toDate();
	let currentDate = new Date();
	let endDate1 = new Date();
	let startDate1 = new Date();
	endDate1.setFullYear(endDate1.getFullYear() - 2); // Subtract 2 years from the current date
	startDate1.setFullYear(startDate1.getFullYear() - 18); // Subtract 18 years from the current date

	let startDate2 = new Date();
	startDate2.setFullYear(startDate2.getFullYear() - 10000);

	let endDate2 = new Date();
	endDate2.setFullYear(endDate2.getFullYear() - 18);

	let check = isBetweenDates(startDate1, endDate1, userDate); // false
	let isParentInRange = isBetweenDates(startDate2, endDate2, userDate);

	if (check && relation === "child") {
		setValue(field, userDate);
	}
	if (yearDiv.value.length < 4 && yearDiv.value.length > 0) {
		setValue(field, "");
		clearErrors(field);
	} else if (userSelectedDt === "..") {
		setError(field, { message: MSG.DOBREQ });
		if (relation === "parent") {
			setErrorMsg(true);
			if (setMsg1) {
				setMsg1(MSG.DOBREQ);
			}
		} else if (relation === "child") {
			setErrorMsg(true);
			setMsg(MSG.DOBREQ);
		}
	} else if (userDate > currentDate && yearDiv.value.length !== 0) {
		setError(field, { message: "Date of birth can not be greater than today" });
		if (relation === "parent") {
			setErrorMsg(true);
			setMsg1("Date of birth can not be greater than today");
		}
		if (relation === "child") {
			setErrorMsg(true);
			setMsg("Date of birth can not be greater than today");
		}
	} else if (
		(userSelectedDt !== ".." && userDate == "Invalid Date") ||
		yearDiv.value.length == 0
	) {
		setError(field, { message: "Invalid Date" });
		if (relation === "parent") {
			setErrorMsg(true);
			setMsg1("Invalid Date");
		}
		if (relation === "child") {
			setErrorMsg(true);
			setMsg("Invalid Date");
		}
	} else if (!check && relation === "child") {
		if (userDate < startDate1) {
			setErrorMsg(true);
			setMsg(formMsg3);
			setError(field, { message: formMsg3 });
			return false;
		} else {
			setErrorMsg(true);
			setMsg(formMsg1);
			setError(field, { message: formMsg1 });
			return false;
		}
	} else if (!isParentInRange && relation === "parent") {
		setErrorMsg(true);
		if (field === "parentDateOfBirth") {
			setMsg1(formMsg2);
		} else {
			setMsg(formMsg2);
		}

		setError(field, { message: formMsg2 });
		return false;
	} else {
		setErrorMsg(false);
		setMsg("");
		if (setMsg1) {
			setMsg1("");
		}
		clearErrors(field);
	}
	return false;
}

export function convertedNumber(n) {
	//	n = parseInt(n);
	if (n < 0) return false;
	let single_digit = [
		"",
		"One",
		"Two",
		"Three",
		"Four",
		"Five",
		"Six",
		"Seven",
		"Eight",
		"Nine",
	];
	let double_digit = [
		"Ten",
		"Eleven",
		"Twelve",
		"Thirteen",
		"Fourteen",
		"Fifteen",
		"Sixteen",
		"Seventeen",
		"Eighteen",
		"Nineteen",
	];
	let below_hundred = [
		"Twenty",
		"Thirty",
		"Forty",
		"Fifty",
		"Sixty",
		"Seventy",
		"Eighty",
		"Ninety",
	];
	if (n === 0) return "Zero";
	function translate(n) {
		let word = "";
		if (n < 10) {
			word = single_digit[n] + " ";
		} else if (n < 20) {
			word = double_digit[n - 10] + " ";
		} else if (n < 100) {
			rem = translate(n % 10);
			word = below_hundred[(n - (n % 10)) / 10 - 2] + " " + rem;
		} else if (n < 1000) {
			word =
				single_digit[Math.trunc(n / 100)] + " Hundred " + translate(n % 100);
		} else if (n < 1000000) {
			word =
				translate(parseInt(n / 1000)).trim() +
				" Thousand " +
				translate(n % 1000);
		} else if (n < 1000000000) {
			word =
				translate(parseInt(n / 1000000)).trim() +
				" Million " +
				translate(n % 1000000);
		} else {
			word =
				translate(parseInt(n / 1000000000)).trim() +
				" Billion " +
				translate(n % 1000000000);
		}
		return word;
	}
	let result = translate(n);
	return result.trim();
}

export function removeLastName(obj) {
	if (obj) {
		const parts = obj.split(" ");
		if (parts.length > 1) {
			parts.pop();
			obj = parts.join(" ");
		}
	}

	return obj;
}

export function formatDate(date) {
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	const year = date.getFullYear();
	return `${month}/${day}/${year}`;
}

export function getTwoDigitMonth(month) {
	return month.toString().padStart(2, "0");
}

export function getLastTwoDigitsOfYear(year) {
	return year % 100;
}

export function showRoundValue(value, DimData) {
	let result = 0;

	if (Number.isFinite(value)) {
		if (value === 0) {
			return value;
		} else if (value < 0.45) {
			if (value.toFixed(1) == 0.0) {
				return 0;
			}
			return value.toFixed(1);
		} else {
			return Math.round(value.toFixed(1));
		}
	}
	return result;
}

// export function dateLongFormat(dateObj) {
//   if (flag) {

//   }
//   const timestamp = dateObj;
//   const date = new Date(timestamp);
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const monthIndex = date.getMonth();
//   const day = date.getDate();
//   const year = date.getFullYear();
//   return `${months[monthIndex]} ${day}, ${year}`;
// }

export function dateLongFormat(dateObj, flag) {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	if (flag) {
		const timestamp = dateObj;
		const previousDay = new Date(timestamp);
		previousDay.setDate(previousDay.getDate() - 1);

		const monthIndex = previousDay.getMonth();
		const day = previousDay.getDate();
		const year = previousDay.getFullYear();
		return `${months[monthIndex]} ${day}, ${year}`;
	}

	const timestamp = dateObj;
	const date = new Date(timestamp);
	const monthIndex = date.getMonth();
	const day = date.getDate();
	const year = date.getFullYear();
	return `${months[monthIndex]} ${day}, ${year}`;
}
export function comparePlan(currentPlan, selectedPlan) {
	let planStatus;

	if (
		(currentPlan === "FAMILY_MONTHLY" && selectedPlan === "MONTHLY") ||
		(currentPlan === "FAMILY_YEARLY" && selectedPlan === "YEARLY") ||
		(currentPlan === "FAMILY_YEARLY" && selectedPlan === "MONTHLY") ||
		(currentPlan === "FAMILY_YEARLY" && selectedPlan === "FAMILY_MONTHLY") ||
		(currentPlan === "YEARLY" && selectedPlan === "MONTHLY") ||
		(currentPlan === "YEARLY" && selectedPlan === "FAMILY_MONTHLY")
	) {
		planStatus = "downgrade";
	} else if (
		(currentPlan === "MONTHLY" && selectedPlan === "FAMILY_YEARLY") ||
		(currentPlan === "YEARLY" && selectedPlan === "FAMILY_YEARLY") ||
		(currentPlan === "FAMILY_MONTHLY" && selectedPlan === "FAMILY_YEARLY")
	) {
		planStatus = "upgrade";
	} else if (currentPlan === "FAMILY_MONTHLY" && selectedPlan === "YEARLY") {
		planStatus = "change";
	} else {
		planStatus = "invalid";
	}

	return planStatus;
}

export function dateFormatterWithMonthName(dateObj) {
	return new Date(dateObj).toLocaleString("en-us", {
		month: "long",
		year: "numeric",
		day: "numeric",
	});
}

export function getMobileSubscriber(object) {
	if (object) {
		if (object?.androidId !== null || object?.appleId !== null) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

export const getEnviourment = () => {
	if (window.location.hostname === "uat.d3q8d8fs329b3i.amplifyapp.com") {
		return "UAT";
	} else if (window.location.hostname === "platform.bloomster.com") {
		return "PROD";
	} else {
		return "DEV";
	}
}

export function dateFormateBycCourseDuration(dateObj, numberOfWeeks, totalCourseCount) {
	dateObj.setDate(dateObj.getDate() + (numberOfWeeks * totalCourseCount) * 7);
	return new Date(dateObj).toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' })
}

export function calculateEndDatePrevious(selectedSitting, selectedMinutes, courseCount) {
	//	console.log('calculateEndDate selectedSitting : ', selectedSitting, selectedMinutes);
	let baseTimeLimit = 300;
	let calculateWeeks = baseTimeLimit / (selectedSitting * selectedMinutes);
	if (!Number.isInteger(calculateWeeks)) {
		let decimal = (calculateWeeks - Math.floor(calculateWeeks)).toFixed(2);
		calculateWeeks = Math.floor(calculateWeeks);
		//	console.log('calculateEndDate decimal : ', decimal);
		if (decimal > 0.1 && decimal <= 0.50) {
			calculateWeeks += 0.50
		} else {
			calculateWeeks += 1
		}
	}
	//	console.log('calculateEndDate weeks : ', calculateWeeks);
	let days = (calculateWeeks * 7) * courseCount;
	//	console.log('calculateEndDate days : ', days);
	let date = new Date();
	date.setDate(date.getDate() + days);
	let dateObj = new Date(date).toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' })
	//	console.log('calculateEndDate : ', dateObj);
	return dateObj;
}

export function calculateEndDate(selectedSitting, selectedMinutes, courseCount) {
	let baseTimeLimit = 300;
	let totalSittings = Math.ceil(baseTimeLimit / selectedMinutes);
	let totalWeeks = totalSittings / selectedSitting;
	let totalDays = Math.ceil(totalWeeks * 7) * courseCount;
	let date = new Date();
	date.setDate(date.getDate() + totalDays);
	let dateObj = new Date(date).toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' })
	return dateObj;
}

export function calculateSeactionEndDate(selectedSitting, selectedMinutes, sectionCount) {
	let baseTimeLimit = 300;
	let totalSittings = Math.ceil(baseTimeLimit / selectedMinutes);
	let totalWeeks = totalSittings / selectedSitting;
	let totalDays = (Math.ceil(totalWeeks * 7) / 4) * sectionCount;
	return totalDays;
	let date = new Date();
	date.setDate(date.getDate() + totalDays);
	let dateObj = new Date(date).toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' })
	return dateObj;
}

export function getCurrentDateInFormat() {
	return new Date().toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' })
}

export function addOneDayInDate(lastDate) {
	let date = new Date(lastDate);
	date.setDate(date.getDate() + 1);
	return new Date(date).toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' })
}

export function addDaysInDate(lastDate, days) {
	let date = new Date(lastDate);
	date.setDate(date.getDate() + days);
	return new Date(date).toLocaleString('en-us', { month: 'long', year: 'numeric', day: 'numeric' })
}

export function getDateByAddDays(currentDate, day) {
	const startDate = new Date(currentDate);
	const endDate = new Date(startDate.getTime() + (day * 24 * 60 * 60 * 1000));
	//	let nextThreeDays = new Date(today?.setDate(today?.getDate() + day));
	return endDate;
}