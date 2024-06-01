import React, { useEffect, useState } from "react";
import WebLayout from "../layout/WebLayout";
import * as image from "../../resources/images";
import SubscriberForm from "./SubscriberForm";
import { DELETEACCOUNT } from "../../utils/DataObjects";
import { MSG } from "../../utils/Messages";
import { useForm, Controller, SelectPicker } from "../../utils/Packages";
import { getverifyUser, userDelete } from "../../redux/actions/APIs";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-bootstrap";
import SecHeader from "./SecHeader";
import { PATHS } from "../../utils";
import DeleteUserVerificationPopup from "./DeleteUserVerificationPopup";
import { EMAIL_REGEX } from "../../utils/Regex";
import { resetEmailResponse } from "../../redux/actions";
const CertificateImage = () => {

    return (
        <>
            <meta property="og:image" content="https://vickyknows.s3.amazonaws.com/email-template-images/Sample-JPEG-Image-File-Download-scaled.jpg" />
            <div>
                <img src="https://vickyknows.s3.amazonaws.com/email-template-images/Sample-JPEG-Image-File-Download-scaled.jpg" />
            </div >
        </>
    );
};

export default CertificateImage;
