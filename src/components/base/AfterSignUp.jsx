import React, { useEffect, useState } from "react";
import { useForm, yupResolver, Yup, Modal, Button } from "../../utils/Packages";
import { useDispatch, useSelector } from "react-redux";
import { PATHS } from "../../utils";
import * as image from "../../resources/images";
import { Helmet } from "react-helmet";
import {
    getAllUsersDetail,
    getDimensions,
    settingVerify,
    userAuthenticate,
    userDelete,
    userSignin,
} from "../../redux/actions/APIs";
import {
    isLoading,
    parentLoginAction,
    childLogin,
    resetLoginResponseFailure,
    showModal,
    resetResponse,
    enrollmentPopup,
    parentToolsModal,
    showModalObj,
    dimStore,
    setCourseModal,
    resetLoginResponse,
} from "../../redux/actions";
import { ModalFooter, NavLink } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { MSG } from "../../utils/Messages";
const AfterSignUp = () => {

    useEffect(() => {
        console.log('Tool 2:');
        console.log('New After Sign Up Page is Called');
        document.title = "After Signup Page";
    }, [])

    window.dataLayer = window.dataLayer || [];
    // const scriptString = `        
    //     <script> ` +
    //     function gtag() { dataLayer.push(arguments); }
    // gtag('js', new Date());
    // gtag('config', 'G-PB4KV6HMT0');
    // + `</script>
    // `;

    return (
        <>
            <script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=7f5c1aba"></script>
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-PB4KV6HMT0"></script> */}
            <div dangerouslySetInnerHTML={{ __html: scriptString }} />
        </>
    );
};

export default AfterSignUp;
