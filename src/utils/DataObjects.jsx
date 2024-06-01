/** @format */
import { PATHS } from ".";
import * as image from "../resources/images";
import InfoModal from "../components/controls/InfoModal";
import { SITEFNAME, SITENAME } from "./Messages";

export const MONTHS = [
  { label: "January", value: 1 },
  { label: "February", value: 2 },
  { label: "March", value: 3 },
  { label: "April", value: 4 },
  { label: "May", value: 5 },
  { label: "June", value: 6 },
  { label: "July", value: 7 },
  { label: "August", value: 8 },
  { label: "September", value: 9 },
  { label: "October", value: 10 },
  { label: "November", value: 11 },
  { label: "December", value: 12 },
];

export const DAYS = [
  { label: "Monday", value: "Monday" },
  { label: "Tuesday", value: "Tuesday" },
  { label: "Wednesday", value: "Wednesday" },
  { label: "Thursday", value: "Thursday" },
  { label: "Friday", value: "Friday" },
  { label: "Saturday", value: "Saturday" },
  { label: "Sunday", value: "Sunday" },
];

export const AGE = [
  { label: "01", value: 1 },
  { label: "02", value: 2 },
  { label: "03", value: 3 },
  { label: "04", value: 4 },
  { label: "05", value: 5 },
  { label: "06", value: 6 },
  { label: "07", value: 7 },
  { label: "08", value: 8 },
  { label: "09", value: 9 },
  { label: "10", value: 10 },
  { label: "11", value: 11 },
  { label: "12", value: 12 },
  { label: "13", value: 13 },
  { label: "14", value: 14 },
  { label: "15", value: 15 },
  { label: "16", value: 16 },
  { label: "17", value: 17 },
  { label: "18", value: 18 },
  { label: "19", value: 19 },
  { label: "20", value: 20 },
];

export const DIMENSION = [
  { key: "Social", value: "01" },
  { key: "Emotional", value: "02" },
  { key: "Intellectual", value: "03" },
  { key: "Mindfulness", value: "04" },
  { key: "Physical", value: "05" },
];

// export const TIPS = [
//   {
//     currenttooltip: "1",
//     key: "Welcome to Vicky",
//     value:
//       "A holistic growth & collaboration platform that nurtures & develops all five dimensions -  Social, Emotional, Intellectual, Mindfulness, & Physical  - intrinsic to your child’s ability to truly thrive & be fulfilled.",
//     classNME: "WelcomePOpScreen",
//   },
//   {
//     currenttooltip: "2",
//     key: "Dimensions",
//     value:
//       "Access transformative courseware in thirty-six skills across five dimensions ensuring your child blossoms into a confident, responsible, & self-aware individual, capable of forging their future.",
//     classNME: "first-place",
//   },
//   {
//     currenttooltip: "3",
//     key: "Dimensions",
//     value:
//       "You can also access transformative courseware in thirty-six skills across five dimensions ensuring your child blossoms into a confident, responsible, & self-aware individual, capable of forging their future by clicking the Dimension icon on the top right.",
//     classNME: "second-place",
//   },
//   {
//     currenttooltip: "4",
//     key: "Holistic Chart",
//     value:
//       "Get a consolidated view of your child’s progress across the five dimensions that helps you build a perspective on how well they are performing & their readiness to be a leader in their chosen field.",
//     classNME: "third-place",
//   },
//   // {
//   //   currenttooltip: "5",
//   //   key: "Start Enrolling",
//   //   value:
//   //     "Start your holistic growth journey by enrolling in courses on offer. Watch this space for updates as many more courses in thirty-six skills across five dimensions are continuously being developed.",
//   //     classNME : "fourth-place",

//   // },
//   {
//     currenttooltip: "5",
//     key: "Help",
//     value:
//       "Refer to Help for any questions on how Vicky works. If your question is not answered already, you can send it to us by clicking the ‘Anything Else?’ option under Help.",
//     classNME: "fivth-place",
//   },
//   {
//     currenttooltip: "6",
//     key: "Feedback",
//     value:
//       "Provide us feedback on your overall experience & what we can do better & help shape Vicky’s future.",
//     classNME: "sixth-place",
//   },
// ];

export const TIPS = [
  /*{
    currenttooltip: "1",
    key: `Welcome to ${SITENAME.NAME}`,
    value:
      " A holistic education platform that nurtures the five (5) dimensions of development - Social, Emotional, Intellectual, Mindfulness, & Physical.",
    classNME: "WelcomePOpScreen",
  },*/
  {
    currenttooltip: "1",
    key: `Create A Plan`,
    value: "Come back to edit or build a new learning plan at any time! <br/><br/> You can access the learning plan builder from this menu.",
    classNME: "WelcomePOpScreen",
  },
  {
    currenttooltip: "2",
    key: "Home",
    value: `The Home page shows a visual representation of how your learner is progressing in the five (5) interconnected dimensions.`,
    classNME: "first-place",
  },
  // {
  //   currenttooltip: "3",
  //   key: "Dimension Tabs",
  //   value: `
  //   <div>
  //   Click on any <b>Dimension</b> tab to explore skills and courses offered in that dimension.
  //   </div>`,
  //   classNME: "eighth-place",
  // },
  {
    currenttooltip: "3",
    key: "Course Catalog",
    value: `Click the Course Catalog icon to browse courses across five (5) dimensions.`,
    classNME: "eighth-place",
  },
  // {
  //   currenttooltip: "6",
  //   key: "Skills",
  //   value: `<div>All the skills offered for the dimension you are exploring are listed here. Click the <img id='getImage' src='${image.icon_white}' /> icon besides each skill to learn more about what the skill entails and why it is important for your child.
  //   </div>`,
  //   classNME: "seventh-place",
  // },

  {
    currenttooltip: "5",
    key: "My Dimensions",
    value: `Use the My Dimensions page to see the courses you have enrolled your learner in, categorized by dimension and skill. You also get a quick overview of your learners progress in each dimension with the option to drill down for more details.`,
    classNME: "seventh-place",
  },
  {
    currenttooltip: "4",
    key: "Pathways",
    value: `Pathways are curated sets of courses that combine multiple skills to target complex issues commonly faced by adolescents. Pathways are the quickest way to get your learner into a structured learning program.`,
    classNME: "third-place",
  },
  // {
  //   currenttooltip: "6",
  //   key: "Dimensions",
  //   value: `<div>You can also click the <b>Dimensions</b> icon on the top right of the page to get to the dimension view and explore skills and courses offered in each dimension.</div>`,
  //   classNME: "second-place",
  // },
  // {
  //   currenttooltip: "6",
  //   key: "Feedback",
  //   value:
  //     "Provide us feedback on your overall experience & share what we can do to enhance your experience.",
  //   classNME: "ninth-place",
  // },
  {
    currenttooltip: "6",
    key: "Subscribe",
    value:
      "Ready to subscribe? Come here to get full access to Bloomster at any time.",
    classNME: "fourth-place",

  },
  {
    currenttooltip: "7",
    key: "Help",
    value: `Refer to Help for any questions on how ${SITENAME.NAME} works.</div>`,
    classNME: "fivth-place",
  },
  {
    currenttooltip: "8",
    key: "Learner Menu",
    value:
      "The current learner’s name is displayed here. If you have multiple learners, click the down arrow next to the learner name to switch between learners.",
    classNME: "tenth-place",
  },
];

export const ACTIVITYMENU = [
  { key: 1, value: "Videos", icon: "fa fa-youtube" },
  { key: 2, value: "Links", icon: "fa fa-link" },
  { key: 3, value: "Books", icon: "fa fa-book" },
];

export const TAGS = [
  { key: "Addition", value: "01" },
  { key: "Subtraction", value: "02" },
  { key: "Multiplication", value: "03" },
  { key: "Division", value: "04" },
  { key: "Mod", value: "05" },
  { key: "communication5", value: "06" },
  { key: "communication6", value: "07" },
];
export const SERVICES = [
  { key: "services1", value: "01" },
  { key: "services2", value: "02" },
  { key: "services3", value: "03" },
  { key: "services4", value: "04" },
  { key: "services5", value: "05" },
  { key: "services6", value: "06" },
  { key: "services7", value: "07" },
];
export const SKILLS = [
  { key: "skills1", value: "1" },
  { key: "skills2", value: "2" },
  { key: "skills3", value: "3" },
  { key: "skills4", value: "4" },
  { key: "skills5", value: "5" },
  { key: "skills6", value: "6" },
  { key: "skills7", value: "7" },
  { key: "skills8", value: "8" },
];

export const userInterest = [
  { name: "interest1", id: "1" },
  { name: "interest2", id: "2" },
  { name: "interest3", id: "3" },
  { name: "interest4", id: "4" },
  { name: "interest5", id: "5" },
  { name: "interest6", id: "6" },
  { name: "interest7", id: "7" },
  { name: "interest8", id: "8" },
];

export const userSkills = [
  { name: "skill1", id: "1" },
  { name: "skill2", id: "2" },
  { name: "skill3", id: "3" },
  { name: "skill4", id: "4" },
  { name: "skill5", id: "5" },
  { name: "skill6", id: "6" },
  { name: "skill7", id: "7" },
  { name: "skill8", id: "8" },
];

export const userTitle = [
  { name: "title1", id: "1" },
  { name: "title2", id: "2" },
  { name: "title3", id: "3" },
  { name: "title4", id: "4" },
  { name: "title5", id: "5" },
  { name: "title6", id: "6" },
  { name: "title7", id: "7" },
  { name: "title8", id: "8" },
];

export const GENDER = [
  { label: "Female", value: "FEMALE" },
  { label: "Male", value: "MALE" },
  { label: "Non-binary", value: "NON-BINARY" },
  { label: "Transgender", value: "TRANSGENDER" },
  { label: "Intersex", value: "INTERSEX" },
  { label: "Two Spirit", value: "TWO SPIRIT" },
  { label: "Gender Non-Conforming", value: "GENDER NON-CONFORMING" },
  { label: "Prefer Not To Say", value: "PREFER NOT TO SAY" },
];
export const DELETEACCOUNT = [
  {
    label: "I don't find Bloomster useful",
    value: "I don't find Bloomster useful",
  },
  {
    label: "I don't understand how Bloomster works",
    value: "I don't understand how Bloomster works",
  },
  {
    label: "I have safety/privacy concerns",
    value: "I have safety/privacy concerns",
  },
  {
    label: "Subscription is too expensive",
    value: "Subscription is too expensive",
  },
  {
    label: "My children are too young for this content",
    value: "My children are too young for this content",
  },
  {
    label: "My children are too old for this content",
    value: "My children are too old for this content",
  },
  { label: "Other", value: "Other" },
];
export const TeacherAssess = {
  name: "Primary Activity",
  description: "greenflag",
  sections: [
    {
      questions: [
        {
          question:
            "1.Click directly on a question's text to begin editing it. To change the question text, simply type the text into the text box. *",
          type: "radio",
        },
        {
          options: [
            {
              help: "Not meeting expectation",
              question: "1",
            },
            {
              help: "Approaching expectation",
              question: "2",
            },
            {
              help: "Meeting expectation",
              question: "3",
            },
            {
              help: "Exceeding expectation",
              question: "4",
            },
          ],
        },
      ],
    },
    {
      questions: [
        {
          question:
            "1.Click directly on a question's text to begin editing it. To change the question text, simply type the text into the text box. *",
          type: "radio",
        },
        {
          options: [
            {
              help: "Not meeting expectation",
              question: "1",
            },
            {
              help: "Approaching expectation",
              question: "2",
            },
            {
              help: "Meeting expectation",
              question: "3",
            },
            {
              help: "Exceeding expectation",
              question: "4",
            },
          ],
        },
      ],
    },
  ],
};

export const ParentAssess = {
  name: "Primary Activity",
  description: "greenflag",
  records: [
    [
      {
        question: "english Assess attribute",
        surveyName: "english Assess",
        type: "radio",
        description: "english Assess description",
        options: [
          {
            help: "Not meeting expectation",
            question: "english 1",
          },
        ],
      },
    ],
    [
      {
        question: "Maths Assess attribute",
        surveyName: "Maths Assess",
        type: "radio",
        description: "Maths Assess description",
        options: [
          {
            help: "Not meeting expectation",
            question: "Maths 1",
          },
        ],
      },
    ],
  ],
};

export const COUNTRYDATA = [
  {
    name: "Afghanistan",
    dial_code: "+93",
    code: "AF",
  },
  {
    name: "Aland Islands",
    dial_code: "+358",
    code: "AX",
  },
  {
    name: "Albania",
    dial_code: "+355",
    code: "AL",
  },
  {
    name: "Algeria",
    dial_code: "+213",
    code: "DZ",
  },
  {
    name: "AmericanSamoa",
    dial_code: "+1684",
    code: "AS",
  },
  {
    name: "Andorra",
    dial_code: "+376",
    code: "AD",
  },
  {
    name: "Angola",
    dial_code: "+244",
    code: "AO",
  },
  {
    name: "Anguilla",
    dial_code: "+1264",
    code: "AI",
  },
  {
    name: "Antarctica",
    dial_code: "+672",
    code: "AQ",
  },
  {
    name: "Antigua and Barbuda",
    dial_code: "+1268",
    code: "AG",
  },
  {
    name: "Argentina",
    dial_code: "+54",
    code: "AR",
  },
  {
    name: "Armenia",
    dial_code: "+374",
    code: "AM",
  },
  {
    name: "Aruba",
    dial_code: "+297",
    code: "AW",
  },
  {
    name: "Australia",
    dial_code: "+61",
    code: "AU",
  },
  {
    name: "Austria",
    dial_code: "+43",
    code: "AT",
  },
  {
    name: "Azerbaijan",
    dial_code: "+994",
    code: "AZ",
  },
  {
    name: "Bahamas",
    dial_code: "+1242",
    code: "BS",
  },
  {
    name: "Bahrain",
    dial_code: "+973",
    code: "BH",
  },
  {
    name: "Bangladesh",
    dial_code: "+880",
    code: "BD",
  },
  {
    name: "Barbados",
    dial_code: "+1246",
    code: "BB",
  },
  {
    name: "Belarus",
    dial_code: "+375",
    code: "BY",
  },
  {
    name: "Belgium",
    dial_code: "+32",
    code: "BE",
  },
  {
    name: "Belize",
    dial_code: "+501",
    code: "BZ",
  },
  {
    name: "Benin",
    dial_code: "+229",
    code: "BJ",
  },
  {
    name: "Bermuda",
    dial_code: "+1441",
    code: "BM",
  },
  {
    name: "Bhutan",
    dial_code: "+975",
    code: "BT",
  },
  {
    name: "Bolivia, Plurinational State of",
    dial_code: "+591",
    code: "BO",
  },
  {
    name: "Bosnia and Herzegovina",
    dial_code: "+387",
    code: "BA",
  },
  {
    name: "Botswana",
    dial_code: "+267",
    code: "BW",
  },
  {
    name: "Brazil",
    dial_code: "+55",
    code: "BR",
  },
  {
    name: "British Indian Ocean Territory",
    dial_code: "+246",
    code: "IO",
  },
  {
    name: "Brunei Darussalam",
    dial_code: "+673",
    code: "BN",
  },
  {
    name: "Bulgaria",
    dial_code: "+359",
    code: "BG",
  },
  {
    name: "Burkina Faso",
    dial_code: "+226",
    code: "BF",
  },
  {
    name: "Burundi",
    dial_code: "+257",
    code: "BI",
  },
  {
    name: "Cambodia",
    dial_code: "+855",
    code: "KH",
  },
  {
    name: "Cameroon",
    dial_code: "+237",
    code: "CM",
  },
  {
    name: "Canada",
    dial_code: "+1",
    code: "CA",
  },
  {
    name: "Cape Verde",
    dial_code: "+238",
    code: "CV",
  },
  {
    name: "Cayman Islands",
    dial_code: "+ 345",
    code: "KY",
  },
  {
    name: "Central African Republic",
    dial_code: "+236",
    code: "CF",
  },
  {
    name: "Chad",
    dial_code: "+235",
    code: "TD",
  },
  {
    name: "Chile",
    dial_code: "+56",
    code: "CL",
  },
  {
    name: "China",
    dial_code: "+86",
    code: "CN",
  },
  {
    name: "Christmas Island",
    dial_code: "+61",
    code: "CX",
  },
  {
    name: "Cocos (Keeling) Islands",
    dial_code: "+61",
    code: "CC",
  },
  {
    name: "Colombia",
    dial_code: "+57",
    code: "CO",
  },
  {
    name: "Comoros",
    dial_code: "+269",
    code: "KM",
  },
  {
    name: "Congo",
    dial_code: "+242",
    code: "CG",
  },
  {
    name: "Congo, The Democratic Republic of the Congo",
    dial_code: "+243",
    code: "CD",
  },
  {
    name: "Cook Islands",
    dial_code: "+682",
    code: "CK",
  },
  {
    name: "Costa Rica",
    dial_code: "+506",
    code: "CR",
  },
  {
    name: "Cote d'Ivoire",
    dial_code: "+225",
    code: "CI",
  },
  {
    name: "Croatia",
    dial_code: "+385",
    code: "HR",
  },
  {
    name: "Cuba",
    dial_code: "+53",
    code: "CU",
  },
  {
    name: "Cyprus",
    dial_code: "+357",
    code: "CY",
  },
  {
    name: "Czech Republic",
    dial_code: "+420",
    code: "CZ",
  },
  {
    name: "Denmark",
    dial_code: "+45",
    code: "DK",
  },
  {
    name: "Djibouti",
    dial_code: "+253",
    code: "DJ",
  },
  {
    name: "Dominica",
    dial_code: "+1767",
    code: "DM",
  },
  {
    name: "Dominican Republic",
    dial_code: "+1849",
    code: "DO",
  },
  {
    name: "Ecuador",
    dial_code: "+593",
    code: "EC",
  },
  {
    name: "Egypt",
    dial_code: "+20",
    code: "EG",
  },
  {
    name: "El Salvador",
    dial_code: "+503",
    code: "SV",
  },
  {
    name: "Equatorial Guinea",
    dial_code: "+240",
    code: "GQ",
  },
  {
    name: "Eritrea",
    dial_code: "+291",
    code: "ER",
  },
  {
    name: "Estonia",
    dial_code: "+372",
    code: "EE",
  },
  {
    name: "Ethiopia",
    dial_code: "+251",
    code: "ET",
  },
  {
    name: "Falkland Islands (Malvinas)",
    dial_code: "+500",
    code: "FK",
  },
  {
    name: "Faroe Islands",
    dial_code: "+298",
    code: "FO",
  },
  {
    name: "Fiji",
    dial_code: "+679",
    code: "FJ",
  },
  {
    name: "Finland",
    dial_code: "+358",
    code: "FI",
  },
  {
    name: "France",
    dial_code: "+33",
    code: "FR",
  },
  {
    name: "French Guiana",
    dial_code: "+594",
    code: "GF",
  },
  {
    name: "French Polynesia",
    dial_code: "+689",
    code: "PF",
  },
  {
    name: "Gabon",
    dial_code: "+241",
    code: "GA",
  },
  {
    name: "Gambia",
    dial_code: "+220",
    code: "GM",
  },
  {
    name: "Georgia",
    dial_code: "+995",
    code: "GE",
  },
  {
    name: "Germany",
    dial_code: "+49",
    code: "DE",
  },
  {
    name: "Ghana",
    dial_code: "+233",
    code: "GH",
  },
  {
    name: "Gibraltar",
    dial_code: "+350",
    code: "GI",
  },
  {
    name: "Greece",
    dial_code: "+30",
    code: "GR",
  },
  {
    name: "Greenland",
    dial_code: "+299",
    code: "GL",
  },
  {
    name: "Grenada",
    dial_code: "+1473",
    code: "GD",
  },
  {
    name: "Guadeloupe",
    dial_code: "+590",
    code: "GP",
  },
  {
    name: "Guam",
    dial_code: "+1671",
    code: "GU",
  },
  {
    name: "Guatemala",
    dial_code: "+502",
    code: "GT",
  },
  {
    name: "Guernsey",
    dial_code: "+44",
    code: "GG",
  },
  {
    name: "Guinea",
    dial_code: "+224",
    code: "GN",
  },
  {
    name: "Guinea-Bissau",
    dial_code: "+245",
    code: "GW",
  },
  {
    name: "Guyana",
    dial_code: "+595",
    code: "GY",
  },
  {
    name: "Haiti",
    dial_code: "+509",
    code: "HT",
  },
  {
    name: "Holy See (Vatican City State)",
    dial_code: "+379",
    code: "VA",
  },
  {
    name: "Honduras",
    dial_code: "+504",
    code: "HN",
  },
  {
    name: "Hong Kong",
    dial_code: "+852",
    code: "HK",
  },
  {
    name: "Hungary",
    dial_code: "+36",
    code: "HU",
  },
  {
    name: "Iceland",
    dial_code: "+354",
    code: "IS",
  },
  {
    name: "India",
    dial_code: "+91",
    code: "IN",
  },
  {
    name: "Indonesia",
    dial_code: "+62",
    code: "ID",
  },
  {
    name: "Iran, Islamic Republic of Persian Gulf",
    dial_code: "+98",
    code: "IR",
  },
  {
    name: "Iraq",
    dial_code: "+964",
    code: "IQ",
  },
  {
    name: "Ireland",
    dial_code: "+353",
    code: "IE",
  },
  {
    name: "Isle of Man",
    dial_code: "+44",
    code: "IM",
  },
  {
    name: "Israel",
    dial_code: "+972",
    code: "IL",
  },
  {
    name: "Italy",
    dial_code: "+39",
    code: "IT",
  },
  {
    name: "Jamaica",
    dial_code: "+1876",
    code: "JM",
  },
  {
    name: "Japan",
    dial_code: "+81",
    code: "JP",
  },
  {
    name: "Jersey",
    dial_code: "+44",
    code: "JE",
  },
  {
    name: "Jordan",
    dial_code: "+962",
    code: "JO",
  },
  {
    name: "Kazakhstan",
    dial_code: "+77",
    code: "KZ",
  },
  {
    name: "Kenya",
    dial_code: "+254",
    code: "KE",
  },
  {
    name: "Kiribati",
    dial_code: "+686",
    code: "KI",
  },
  {
    name: "Korea, Democratic People's Republic of Korea",
    dial_code: "+850",
    code: "KP",
  },
  {
    name: "Korea, Republic of South Korea",
    dial_code: "+82",
    code: "KR",
  },
  {
    name: "Kuwait",
    dial_code: "+965",
    code: "KW",
  },
  {
    name: "Kyrgyzstan",
    dial_code: "+996",
    code: "KG",
  },
  {
    name: "Laos",
    dial_code: "+856",
    code: "LA",
  },
  {
    name: "Latvia",
    dial_code: "+371",
    code: "LV",
  },
  {
    name: "Lebanon",
    dial_code: "+961",
    code: "LB",
  },
  {
    name: "Lesotho",
    dial_code: "+266",
    code: "LS",
  },
  {
    name: "Liberia",
    dial_code: "+231",
    code: "LR",
  },
  {
    name: "Libyan Arab Jamahiriya",
    dial_code: "+218",
    code: "LY",
  },
  {
    name: "Liechtenstein",
    dial_code: "+423",
    code: "LI",
  },
  {
    name: "Lithuania",
    dial_code: "+370",
    code: "LT",
  },
  {
    name: "Luxembourg",
    dial_code: "+352",
    code: "LU",
  },
  {
    name: "Macao",
    dial_code: "+853",
    code: "MO",
  },
  {
    name: "Macedonia",
    dial_code: "+389",
    code: "MK",
  },
  {
    name: "Madagascar",
    dial_code: "+261",
    code: "MG",
  },
  {
    name: "Malawi",
    dial_code: "+265",
    code: "MW",
  },
  {
    name: "Malaysia",
    dial_code: "+60",
    code: "MY",
  },
  {
    name: "Maldives",
    dial_code: "+960",
    code: "MV",
  },
  {
    name: "Mali",
    dial_code: "+223",
    code: "ML",
  },
  {
    name: "Malta",
    dial_code: "+356",
    code: "MT",
  },
  {
    name: "Marshall Islands",
    dial_code: "+692",
    code: "MH",
  },
  {
    name: "Martinique",
    dial_code: "+596",
    code: "MQ",
  },
  {
    name: "Mauritania",
    dial_code: "+222",
    code: "MR",
  },
  {
    name: "Mauritius",
    dial_code: "+230",
    code: "MU",
  },
  {
    name: "Mayotte",
    dial_code: "+262",
    code: "YT",
  },
  {
    name: "Mexico",
    dial_code: "+52",
    code: "MX",
  },
  {
    name: "Micronesia, Federated States of Micronesia",
    dial_code: "+691",
    code: "FM",
  },
  {
    name: "Moldova",
    dial_code: "+373",
    code: "MD",
  },
  {
    name: "Monaco",
    dial_code: "+377",
    code: "MC",
  },
  {
    name: "Mongolia",
    dial_code: "+976",
    code: "MN",
  },
  {
    name: "Montenegro",
    dial_code: "+382",
    code: "ME",
  },
  {
    name: "Montserrat",
    dial_code: "+1664",
    code: "MS",
  },
  {
    name: "Morocco",
    dial_code: "+212",
    code: "MA",
  },
  {
    name: "Mozambique",
    dial_code: "+258",
    code: "MZ",
  },
  {
    name: "Myanmar",
    dial_code: "+95",
    code: "MM",
  },
  {
    name: "Namibia",
    dial_code: "+264",
    code: "NA",
  },
  {
    name: "Nauru",
    dial_code: "+674",
    code: "NR",
  },
  {
    name: "Nepal",
    dial_code: "+977",
    code: "NP",
  },
  {
    name: "Netherlands",
    dial_code: "+31",
    code: "NL",
  },
  {
    name: "Netherlands Antilles",
    dial_code: "+599",
    code: "AN",
  },
  {
    name: "New Caledonia",
    dial_code: "+687",
    code: "NC",
  },
  {
    name: "New Zealand",
    dial_code: "+64",
    code: "NZ",
  },
  {
    name: "Nicaragua",
    dial_code: "+505",
    code: "NI",
  },
  {
    name: "Niger",
    dial_code: "+227",
    code: "NE",
  },
  {
    name: "Nigeria",
    dial_code: "+234",
    code: "NG",
  },
  {
    name: "Niue",
    dial_code: "+683",
    code: "NU",
  },
  {
    name: "Norfolk Island",
    dial_code: "+672",
    code: "NF",
  },
  {
    name: "Northern Mariana Islands",
    dial_code: "+1670",
    code: "MP",
  },
  {
    name: "Norway",
    dial_code: "+47",
    code: "NO",
  },
  {
    name: "Oman",
    dial_code: "+968",
    code: "OM",
  },
  {
    name: "Pakistan",
    dial_code: "+92",
    code: "PK",
  },
  {
    name: "Palau",
    dial_code: "+680",
    code: "PW",
  },
  {
    name: "Palestinian Territory, Occupied",
    dial_code: "+970",
    code: "PS",
  },
  {
    name: "Panama",
    dial_code: "+507",
    code: "PA",
  },
  {
    name: "Papua New Guinea",
    dial_code: "+675",
    code: "PG",
  },
  {
    name: "Paraguay",
    dial_code: "+595",
    code: "PY",
  },
  {
    name: "Peru",
    dial_code: "+51",
    code: "PE",
  },
  {
    name: "Philippines",
    dial_code: "+63",
    code: "PH",
  },
  {
    name: "Pitcairn",
    dial_code: "+872",
    code: "PN",
  },
  {
    name: "Poland",
    dial_code: "+48",
    code: "PL",
  },
  {
    name: "Portugal",
    dial_code: "+351",
    code: "PT",
  },
  {
    name: "Puerto Rico",
    dial_code: "+1939",
    code: "PR",
  },
  {
    name: "Qatar",
    dial_code: "+974",
    code: "QA",
  },
  {
    name: "Romania",
    dial_code: "+40",
    code: "RO",
  },
  {
    name: "Russia",
    dial_code: "+7",
    code: "RU",
  },
  {
    name: "Rwanda",
    dial_code: "+250",
    code: "RW",
  },
  {
    name: "Reunion",
    dial_code: "+262",
    code: "RE",
  },
  {
    name: "Saint Barthelemy",
    dial_code: "+590",
    code: "BL",
  },
  {
    name: "Saint Helena, Ascension and Tristan Da Cunha",
    dial_code: "+290",
    code: "SH",
  },
  {
    name: "Saint Kitts and Nevis",
    dial_code: "+1869",
    code: "KN",
  },
  {
    name: "Saint Lucia",
    dial_code: "+1758",
    code: "LC",
  },
  {
    name: "Saint Martin",
    dial_code: "+590",
    code: "MF",
  },
  {
    name: "Saint Pierre and Miquelon",
    dial_code: "+508",
    code: "PM",
  },
  {
    name: "Saint Vincent and the Grenadines",
    dial_code: "+1784",
    code: "VC",
  },
  {
    name: "Samoa",
    dial_code: "+685",
    code: "WS",
  },
  {
    name: "San Marino",
    dial_code: "+378",
    code: "SM",
  },
  {
    name: "Sao Tome and Principe",
    dial_code: "+239",
    code: "ST",
  },
  {
    name: "Saudi Arabia",
    dial_code: "+966",
    code: "SA",
  },
  {
    name: "Senegal",
    dial_code: "+221",
    code: "SN",
  },
  {
    name: "Serbia",
    dial_code: "+381",
    code: "RS",
  },
  {
    name: "Seychelles",
    dial_code: "+248",
    code: "SC",
  },
  {
    name: "Sierra Leone",
    dial_code: "+232",
    code: "SL",
  },
  {
    name: "Singapore",
    dial_code: "+65",
    code: "SG",
  },
  {
    name: "Slovakia",
    dial_code: "+421",
    code: "SK",
  },
  {
    name: "Slovenia",
    dial_code: "+386",
    code: "SI",
  },
  {
    name: "Solomon Islands",
    dial_code: "+677",
    code: "SB",
  },
  {
    name: "Somalia",
    dial_code: "+252",
    code: "SO",
  },
  {
    name: "South Africa",
    dial_code: "+27",
    code: "ZA",
  },
  {
    name: "South Sudan",
    dial_code: "+211",
    code: "SS",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    dial_code: "+500",
    code: "GS",
  },
  {
    name: "Spain",
    dial_code: "+34",
    code: "ES",
  },
  {
    name: "Sri Lanka",
    dial_code: "+94",
    code: "LK",
  },
  {
    name: "Sudan",
    dial_code: "+249",
    code: "SD",
  },
  {
    name: "Suriname",
    dial_code: "+597",
    code: "SR",
  },
  {
    name: "Svalbard and Jan Mayen",
    dial_code: "+47",
    code: "SJ",
  },
  {
    name: "Swaziland",
    dial_code: "+268",
    code: "SZ",
  },
  {
    name: "Sweden",
    dial_code: "+46",
    code: "SE",
  },
  {
    name: "Switzerland",
    dial_code: "+41",
    code: "CH",
  },
  {
    name: "Syrian Arab Republic",
    dial_code: "+963",
    code: "SY",
  },
  {
    name: "Taiwan",
    dial_code: "+886",
    code: "TW",
  },
  {
    name: "Tajikistan",
    dial_code: "+992",
    code: "TJ",
  },
  {
    name: "Tanzania, United Republic of Tanzania",
    dial_code: "+255",
    code: "TZ",
  },
  {
    name: "Thailand",
    dial_code: "+66",
    code: "TH",
  },
  {
    name: "Timor-Leste",
    dial_code: "+670",
    code: "TL",
  },
  {
    name: "Togo",
    dial_code: "+228",
    code: "TG",
  },
  {
    name: "Tokelau",
    dial_code: "+690",
    code: "TK",
  },
  {
    name: "Tonga",
    dial_code: "+676",
    code: "TO",
  },
  {
    name: "Trinidad and Tobago",
    dial_code: "+1868",
    code: "TT",
  },
  {
    name: "Tunisia",
    dial_code: "+216",
    code: "TN",
  },
  {
    name: "Turkey",
    dial_code: "+90",
    code: "TR",
  },
  {
    name: "Turkmenistan",
    dial_code: "+993",
    code: "TM",
  },
  {
    name: "Turks and Caicos Islands",
    dial_code: "+1649",
    code: "TC",
  },
  {
    name: "Tuvalu",
    dial_code: "+688",
    code: "TV",
  },
  {
    name: "Uganda",
    dial_code: "+256",
    code: "UG",
  },
  {
    name: "Ukraine",
    dial_code: "+380",
    code: "UA",
  },
  {
    name: "United Arab Emirates",
    dial_code: "+971",
    code: "AE",
  },
  {
    name: "United Kingdom",
    dial_code: "+44",
    code: "GB",
  },
  {
    name: "USA",
    dial_code: "+1",
    code: "US",
  },
  {
    name: "United States of America",
    dial_code: "+1",
    code: "US",
  },
  {
    name: "Uruguay",
    dial_code: "+598",
    code: "UY",
  },
  {
    name: "Uzbekistan",
    dial_code: "+998",
    code: "UZ",
  },
  {
    name: "Vanuatu",
    dial_code: "+678",
    code: "VU",
  },
  {
    name: "Venezuela, Bolivarian Republic of Venezuela",
    dial_code: "+58",
    code: "VE",
  },
  {
    name: "Vietnam",
    dial_code: "+84",
    code: "VN",
  },
  {
    name: "Virgin Islands, British",
    dial_code: "+1284",
    code: "VG",
  },
  {
    name: "Virgin Islands, U.S.",
    dial_code: "+1340",
    code: "VI",
  },
  {
    name: "Wallis and Futuna",
    dial_code: "+681",
    code: "WF",
  },
  {
    name: "Yemen",
    dial_code: "+967",
    code: "YE",
  },
  {
    name: "Zambia",
    dial_code: "+260",
    code: "ZM",
  },
  {
    name: "Zimbabwe",
    dial_code: "+263",
    code: "ZW",
  },
];

export const ASSESSMNET_DATA = [
  {
    key: "Music Score",
    value: [
      {
        score: 1,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 1,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 2,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 2,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 3,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 4,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 5,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
    ],
  },
  {
    key: "Fit Score",
    value: [
      {
        score: 1,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 1,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 2,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 2,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 3,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 4,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 5,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
    ],
  },
  {
    key: "Academic Score",
    value: [
      {
        score: 1,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 1,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 2,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 2,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 3,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 4,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 5,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
    ],
  },
  {
    key: "Arts Score",
    value: [
      {
        score: 1,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 1,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 2,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 2,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 3,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 4,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 5,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
    ],
  },
  {
    key: "Sports Score",
    value: [
      {
        score: 1,
        text: "[STUDENT] is not interested in arts - painting etc.",
      },
      {
        score: 1,
        text: "[STUDENT] is not active in arts - painting etc.",
      },
      {
        score: 2,
        text: "[STUDENT] is little bit interested in arts - painting etc.",
      },
      {
        score: 2,
        text: "[STUDENT] is least active in arts - painting etc.",
      },
      {
        score: 3,
        text: "[STUDENT] is  interested in arts - painting etc.",
      },
      {
        score: 4,
        text: "[STUDENT] is interested in arts - painting etc.",
      },
      {
        score: 5,
        text: "[STUDENT] is very interested in arts - painting etc.",
      },
    ],
  },
  {
    key: "Music Score",
    value: [
      {
        score: 1,
        text: "[STUDENT] is very interested in sports and would like to explore how he can do more.",
      },
      {
        score: 1,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 2,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 2,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 3,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 4,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
      {
        score: 5,
        text: "[STUDENT] is interested in academics and performs slightly above average in all his subjects.",
      },
    ],
  },
];

export const ALPHABET_SELECT = [
  {
    name: "A",
  },
  {
    name: "B",
  },
  {
    name: "C",
  },
  {
    name: "D",
  },
  {
    name: "E",
  },
  {
    name: "F",
  },
  {
    name: "G",
  },
  {
    name: "H",
  },
  {
    name: "I",
  },
  {
    name: "J",
  },
  {
    name: "K",
  },
  {
    name: "L",
  },
  {
    name: "M",
  },
  {
    name: "N",
  },
  {
    name: "O",
  },
  {
    name: "P",
  },
  {
    name: "Q",
  },
  {
    name: "R",
  },
  {
    name: "S",
  },
  {
    name: "T",
  },
  {
    name: "U",
  },
  {
    name: "V",
  },
  {
    name: "W",
  },
  {
    name: "X",
  },
  {
    name: "Y",
  },
  {
    name: "Z",
  },
];

export const PLAN = [
  { id: "001", isMonthly: true, amount: 14 },
  { id: "002", isMonthly: false, amount: 150 },
];

export const BLOG_DATA = [
  {
    name: `${SITEFNAME.NAME} Announcements`,
    title: " What is Holistic Growth?",
    description:
      "When you ask a child what they want to be when they grow up, you are likely....",
    value: "Read More",
    url: PATHS.BLOGDETAILSFOUR,
    image: image.blog_img,
  },
  {
    name: `${SITEFNAME.NAME} Announcements`,
    title: " How a Holistic Growth Approach Prepares Your Child for the Future",
    description:
      "“The future is completely open and we are writing it from moment to moment....",
    value: "Read More",
    url: PATHS.BLOGDETAILSTHREE,
    image: image.cpTeacherdtlBanner,
  },
  {
    name: `${SITEFNAME.NAME} Announcements`,
    title: " The Merits of Social Emotional Learning",
    description:
      "“It’s never that our young people lack greatness — it’s that society isn’t....",
    value: "Read More",
    url: PATHS.BLOGDETAIL,
    image: image.WHolisticgbnr,
  },
  {
    name: `${SITEFNAME.NAME} Announcements`,
    title: " The Benefits of a Personalized Learning Journey",
    description:
      "“The function of education is to teach one to think intensively and to think....",
    value: "Read More",
    url: PATHS.BLOGDETAILTWO,
    image: image.aboutmegraphics,
  },

  {
    name: `${SITEFNAME.NAME} Announcements`,
    title: "How Conventional Education is Limiting Your Child’s Development",
    description:
      "From socializing with our classmates to playground play, the experiences....",
    value: "Read More",
    url: PATHS.BLOGDETAILSFIVE,
    image: image.education_blog,
  },
  // {
  //   name: "Vicky Announcements",
  //   title: " Vicky welcomes Jennifer Wynn to our Board of New Member...",
  //   description:
  //     "When your purpose is big and bold, having the right partners is critical....",
  //   value: "Read More",
  // },
  // {
  //   name: "Vicky Announcements",
  //   title: " Vicky welcomes Jennifer Wynn to our Board of New Member...",
  //   description:
  //     "When your purpose is big and bold, having the right partners is critical....",
  //   value: "Read More",
  // },
  // {
  //   name: "Vicky Announcements",
  //   title: " Vicky welcomes Jennifer Wynn to our Board of New Member...",
  //   description:
  //     "When your purpose is big and bold, having the right partners is critical....",
  //   value: "Read More",
  // },
  // {
  //   name: "Vicky Announcements",
  //   title: " Vicky welcomes Jennifer Wynn to our Board of New Member...",
  //   description:
  //     "When your purpose is big and bold, having the right partners is critical....",
  //   value: "Read More",
  // },
  // {
  //   name: "Vicky Announcements",
  //   title: " Vicky welcomes Jennifer Wynn to our Board of New Member...",
  //   description:
  //     "When your purpose is big and bold, having the right partners is critical....",
  //   value: "Read More",
  // },
  // {
  //   name: "Vicky Announcements",
  //   title: " Vicky welcomes Jennifer Wynn to our Board of New Member...",
  //   description:
  //     "When your purpose is big and bold, having the right partners is critical....",
  //   value: "Read More",
  // },
  // {
  //   name: "Vicky Announcements",
  //   title: " Vicky welcomes Jennifer Wynn to our Board of New Member...",
  //   description:
  //     "When your purpose is big and bold, having the right partners is critical....",
  //   value: "Read More",
  // },
  // {
  //   name: "Vicky Announcements",
  //   title: " Vicky welcomes Jennifer Wynn to our Board of New Member...",
  //   description:
  //     "When your purpose is big and bold, having the right partners is critical....",
  //   value: "Read More",
  // },
  // {
  //   name: "Vicky Announcements",
  //   title: " Vicky welcomes Jennifer Wynn to our Board of New Member...",
  //   description:
  //     "When your purpose is big and bold, having the right partners is critical....",
  //   value: "Read More",
  // },
  // {
  //   name: "Vicky Announcements",
  //   title: " Vicky welcomes Jennifer Wynn to our Board of New Member...",
  //   description:
  //     "When your purpose is big and bold, having the right partners is critical....",
  //   value: "Read More",
  // },
  // {
  //   name: "Vicky Announcements",
  //   title: " Vicky welcomes Jennifer Wynn to our Board of New Member...",
  //   description:
  //     "When your purpose is big and bold, having the right partners is critical....",
  //   value: "Read More",
  // },
  // {
  //   name: "Vicky Announcements",
  //   title: " Vicky welcomes Jennifer Wynn to our Board of New Member...",
  //   description:
  //     "When your purpose is big and bold, having the right partners is critical....",
  //   value: "Read More",
  // },
  // {
  //   name: "Vicky Announcements",
  //   title: " Vicky welcomes Jennifer Wynn to our Board of New Member...",
  //   description:
  //     "When your purpose is big and bold, having the right partners is critical....",
  //   value: "Read More",
  // },
  // {
  //   name: "Vicky Announcements",
  //   title: " Vicky welcomes Jennifer Wynn to our Board of New Member...",
  //   description:
  //     "When your purpose is big and bold, having the right partners is critical....",
  //   value: "Read More",
  // }
];

export const BALANCED = {
  title: "What Is Balanced?",
  description:
    `How ${SITEFNAME.NAME} balances learning across all 5 dimensions – Social, Emotional, Intellectual, Mindfulness, and Physical – based on recommendations from experts in their field ensuring growth and development of your child’s whole being.`,
};

export const CUSTOMIZED = {
  title: "What Is Customized?",
  description:
    "Customize how learning is distributed across all 5 dimensions – Social, Emotional, Intellectual, Mindfulness, and Physical – building on recommendations from experts in their field and a natural inclination your child has towards either academics, sports, or the arts while still ensuring development of your child’s whole being.",
};

export const DIMENSION_HINT = [
  {
    name: "Progress: Intellectual",
    description:
      "Growth in a dimension is determined by the breadth of skills you have acquired in that dimension and your depth of understanding in each skill within that dimension. The progress chart aggregates both of these aspects to illustrate your child's progress within the intellectual dimension.",
  },
  {
    name: "Progress: Physical",
    description:
      "Growth in a dimension is determined by the breadth of skills you have acquired in that dimension and your depth of understanding in each skill within that dimension. The progress chart aggregates both of these aspects to illustrate your child's progress within the physical dimension.",
  },
  {
    name: "Progress: Social",
    description:
      "Growth in a dimension is determined by the breadth of skills you have acquired in that dimension and your depth of understanding in each skill within that dimension. The progress chart aggregates both of these aspects to illustrate your child's progress within the social dimension.",
  },
  {
    name: "Progress: Emotional",
    description:
      "Growth in a dimension is determined by the breadth of skills you have acquired in that dimension and your depth of understanding in each skill within that dimension. The progress chart aggregates both of these aspects to illustrate your child's progress within the emotional dimension.",
  },
  {
    name: "Progress: Mindfulness",
    description:
      "Growth in a dimension is determined by the breadth of skills you have acquired in that dimension and your depth of understanding in each skill within that dimension. The progress chart aggregates both of these aspects to illustrate your child's progress within the mindfulness dimension.",
  },
];

export const HOLISTIC_INFO = {
  name: "Holistic View",
  description: `
  <div>
  Holistic view provides a comprehensive and integrated perspective on how a learner is doing across all 5 dimensions - Social, Emotional, Intellectual, Mindfulness, and Physical. Holistic view consists of the following types of charts.<br/><br/>
    <ol>
      <li>
        <b>Where You Stand:</b> The inner ring of the chart shows your child's progress within each of the dimensions compared to experts' recommendation (outer ring). You can address the gaps highlighted in grey by enrolling your child in more courses in the relevant dimensions.<br/><br/>
      </li>
      <li>
        <b>Progress (Holistic):</b> Holistic growth encompasses the five key dimensions intrinsic to an individual's ability to lead a fulfilling life: the Social, Emotional, Intellectual, Mindfulness, and Physical. The holistic progress chart consolidates your child’s progress in each of the five dimensions to show how well they are performing and their readiness to be a leader in their chosen field.<br/><br/>
      </li>
      <li>
        <b>Progress (Dimension):</b> Growth in a dimension is determined by the breadth of skills you have acquired in that dimension and your depth of understanding in each skill within that dimension. The progress chart aggregates both of these aspects to illustrate your child's progress within each dimension.<br/><br/>
      </li>
    </ol>
  </div>`,
};

export const COMING_SOON = [
  {
    title: "network",
    description:
      "Build lifelong relationships with learners who share our passion for holistic growth and becoming confident, responsible, and self-aware individuals.",
  },
  {
    title: "messaging",
    description:
      "Connect with other learners who have embarked on their holistic growth journey with me to share experiences, support each other, and get inspired.",
  },
  {
    title: "resources",
    description:
      "We are working round the clock to develop these resources for you. Stay tuned for updates!",
  },
];

export const LAST_OPTION = [
  "None of the above",
  "None of the Above",
  "none of the above",
  "None of them",
  "All of the above",
  "All of the Above",
  "None of these above",
  "None of these",
  "none of them",
  "none of these above",
  "none of these",
  "None of above",
  "none of above",
  "none",
  "None",
  "Both of the above",
  "Both of the Above",
  "both of the above",
  "Both",
  "both",
  "All",
  "all",
  "All of these",
  "All of these above",
  "all of the above",
  "all of these",
  "all of these above",
];

export const FeedbackServey = {
  FeedBacksPickerData: [
    { label: "Twice or more a week", name: "Twice or more a week" },
    { label: "Once a week", name: "Once a week" },
    { label: "Once a fortnight", name: "Once a fortnight" },
    { label: "Once a month", name: "Once a month" },
    { label: "Rarely", name: "Rarely" },
  ],
  question: [
    {
      id: "21721c84-9fc2-4aa6-a0fd-032156e455",
      surveyName: "Survey for Course Name: Promoting Self-Improvement",
      surveyId: "32c997b7-63b4-4883-b991-2ca1c206c30c",
      description: "",
      question: `Does ${SITENAME.NAME} cover the skills and courses that are important for your child?`,
      minHelp: "Does not cover",
      maxHelp: "Covers completely",
      type: "RANGEQ",
    },
    {
      id: "764cb12c-847b-4c11-adaf-032156e4022",
      surveyName: "Survey for Course Name: Promoting Self-Improvement",
      surveyId: "32c997b7-63b4-4883-b991-2ca1c206c30c",
      description: "",
      question:
        "How dificult or easy is it to find the skills and courses you were looking for?",
      minHelp: "Very difficult",
      maxHelp: "Very easy",
      type: "RANGEQ",
    },
    {
      id: "764cb12c-847b-4c11-adaf-032156e403",
      surveyName: "Survey for Course Name: Promoting Self-Improvement",
      surveyId: "32c997b7-63b4-4883-b991-2ca1c206c30c",
      description: "",
      question: `How likely are you to recommend ${SITENAME.NAME} to your friends and family?`,
      minHelp: "Not likely",
      maxHelp: "Very likely",

      type: "RANGEQ",
    },
    // {
    //   id: "764cb12c-847b-4c11-adaf-032156e401",
    //   surveyName: "Survey for Course Name: Promoting Self-Improvement",
    //   surveyId: "32c997b7-63b4-4883-b991-2ca1c206c30c",
    //   description: "",
    //   question: "What can Vicky do to enhance your experience?",
    //   minHelp: null,
    //   maxHelp: null,

    //   type: "Text area"
    // },
    // {
    //   id: "764cb12c-847b-4c11-adaf-032156e402",
    //   surveyName: "Survey for Course Name: Promoting Self-Improvement",
    //   surveyId: "32c997b7-63b4-4883-b991-2ca1c206c30c",
    //   description: "",
    //   question: "Vicky may contact me about my feedback",
    //   minHelp: null,
    //   maxHelp: null,

    //   type: "Checkbox"
    // }
  ],
};

export const Intelligences = {
  title: `<div >
              <p>Don’t overthink it!</p>
              <p>&nbsp;</p>
              <p>
                Be honest and answer the first one that seems right to you.
              </p>
            </div>`,
  desc: `<div>
              <p>Were you surprised at your results?</p>
              <p>&nbsp;</p>
              <p>Perhaps there is an area you thought you would be higher? </p>
              <p>&nbsp;</p>
              <p>
                There is value in each of these areas, and the goal of being a
                successful adult is to become what is known as a “Whole Brain
                Learner”. That would mean that you are strong in each area with
                a score of 50% or higher.
              </p>
              <p>&nbsp;</p>
              <p>
                During your life these percentages will change and improve. Some
                areas may also decrease as you work on other areas.
              </p>
              <p>&nbsp;</p>
              <p>
                But all of this takes time, and experiences in each, to improve
                upon them.
              </p>
              <p>&nbsp;</p>
              <p>
                Click on each area shown in your results to learn more about
                that type of intelligence and ideas to use your strengths to
                improve your scores.
              </p>
            </div>`,
  testDesc: `<div>
      <p>
        Tests are usually scary for a lot of people because they think they
        aren’t smart enough. Did you know that there are different kinds of
        “Smarts”? Turns out there are a lot of ways you can be smart.
      </p>
      <p>&nbsp;</p>
      <p>
        Somebody can be “smart” by being good at playing an instrument, but
        really bad at listening to a lecture. Or maybe they are really good at
        Math but can have difficulty in cooking a meal. This test will not only
        show you where you are “smart”, but what areas you can improve in.
      </p>
      <p>&nbsp;</p>
      <p>
        Let’s find out how are you smart with a quick assessment. There are 40
        questions, which seems like a lot, but if you go with your first
        instinct and don’t overthink your answers, it will go faster than you
        think.
      </p>
      <p>&nbsp;</p>
      <p>Click “Begin Assessment” to find out how you are “smart”.</p>
    </div>`,
};

export const DIMHINT_SKILL = {
  name: "SKILL",
  description: "DESCRIPTION",
};

export const COURSE_GUIDE = [
  {
    sequence: 1,
    icon: image.Seriesicon,
    title: "Series",
    descArt:
      " A series of videos and illustrations with relatable characters and real-world application of relevant skills presented in an engaging story form to make learning easy and fun. Earn points for viewing each video or illustration.",
    desc: "A series of engaging short videos with key concepts summarized to make learning easy and fun. Earn points for watching each video.",
  },
  {
    sequence: 2,
    icon: image.wavehand,
    title: "Characters",
    desc: "Get to know the characters in the story. They are just like your friends and family!",
    descArt:
      "Get to know the characters in the story. They are just like your friends and family!",
  },

  {
    sequence: 3,
    icon: image.Scenenavigation,
    title: "Knowledge Check",
    desc: "Attempt the knowledge checks with one or more questions to validate your understanding. Learn why your selected option is correct or incorrect and earn points!",
    descArt:
      "Attempt the knowledge checks with one or more questions to validate your understanding. Learn why your selected option is correct or incorrect and earn points!",
  },
  {
    sequence: 4,
    icon: image.multipleintellQuiz,
    title: "Module Exercise",
    desc: "Engage friends and family, reflect, and practice your learning in the real world at the end of each module. Come back to complete the exercise, earn points, and finish strong!",
    descArt:
      "Engage friends and family, reflect, and practice your learning in the real world at the end of each module. Come back to complete the exercise, earn points, and finish strong!",
  },
  {
    sequence: 5,
    icon: image.money_bag,
    title: "Points Bag",
    desc: " Earn points as you go along. The more you do, the more you earn and win bragging rights with friends and family!",
    descArt:
      "Earn points as you go along. The more you do, the more you earn and win bragging rights with friends and family!",
  },
  {
    sequence: 6,
    icon: image.SceneRefrence,
    title: "References (optional)",
    desc: "Interested to learn more? Some courses provide references and additional resources that are available from the references tab to enhance your learning.",
    descArt:
      "Interested to learn more? Some courses provide references and additional resources that are available from the references tab to enhance your learning.",
  },
];

export const COURSE_GUIDE_INT = [
  {
    sequence: 1,
    icon: image.lesson_icon,
    title: "Lessons",
    desc: "A visual table of contents showing the lessons covered in this module. You can click on the lesson name to navigate directly to its videos.",
  },
  {
    sequence: 2,
    icon: image.Seriesicon,
    title: "Series",
    desc: "A series of engaging short videos with key concepts summarized to make learning easy and fun. Earn points for watching each video.",
  },
  {
    sequence: 3,
    icon: image.book_open_reader,
    title: "Quiz",
    desc: "Answer 10 or more single and multiple-choice questions to validate your understanding. Please make sure to answer all the questions in the quiz to receive an evaluation.",
  },
  {
    sequence: 4,
    icon: image.money_bag,
    title: "Points Bag",
    desc: "Earn points as you watch videos and complete the quiz. The more you do, the more you earn and win bragging rights with friends and family!",
  },

  {
    sequence: 5,
    icon: image.SceneRefrence,
    title: "References (optional)",
    desc: "Interested to learn more? Some courses provide references and additional resources that are available from the references tab to enhance your learning.",
  },
];

export const GROWTHDATA = [
  {
    title: "Social",
    skills: [
      "Effective Communication",
      "Conflict Resolution",
      "Relationship Management",
    ],
    otherSkills: ["Effective Communication", "Conflict Resolution"],
  },
  {
    title: "Emotional",
    //  skills: ["Self Regulation", "Critical Thinking", "Self Confidence"],
    skills: ["Self-Confidence", "Self-Regulation", "Fear Management"],
    otherSkills: ["Self-Confidence", "Self-Regulation"],
  },
  {
    title: "Mindfulness",
    skills: ["Mindfulness", "Compassion", "Gratitude"],
    otherSkills: ["Mindfulness", "Gratitude"],
  },
  {
    title: "Physical",
    skills: ["Yoga", "Physical Fitness", "Health & Nutrition"],
    otherSkills: ["Yoga", "Health & Nutrition"],
  },
  {
    title: "Intellectual",
    //  skills: ["Math", "English", "Finance"],
    skills: ["Critical Thinking", "Problem Solving", "Finance"],
    otherSkills: ["Critical Thinking", "Problem Solving"],
  },
];

export const holisticSkillData = [
  {
    dimension: "Social",
    Value: {
      X: "At the root level you enroll your child in courses",
      Y: "The sole purpose of a course is to teach your child a skill",
    },
    skills:
      "Skills include: critical thinking, problem solving, leadership, conflict resolution, mindfulness and many more...",
  },
  {
    dimension: "Physical",
    Value: {
      X: "Your child's learning in skills contribute to their learning in a dimension",
      Y: "A dimension is the area or the aspect of your child's growth",
    },
    skills:
      "We focus on five dimensions: Social, Emotional, Intellectual, Mindfulness, and Physical",
  },
  {
    dimension: "Intellectual",
    Value: {
      X: "Your child's learning in the five dimensions contribute to their overall holistic growth",
      Y: "Holistic development prepares your child for the challenges of the future",
    },
  },
  {
    dimension: "Emotional",
    Value: {
      X: "Your child's learning in the five dimensions contribute to their overall holistic growth",
      Y: "Holistic development prepares your child for the challenges of the future",
    },
  },
  {
    dimension: "Mindfulness",
    Value: {
      X: "Your child's learning in the five dimensions contribute to their overall holistic growth",
      Y: "Holistic development prepares your child for the challenges of the future",
    },
  },
];
