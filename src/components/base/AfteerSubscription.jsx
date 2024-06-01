import React, { useEffect, useState } from "react";
import { useForm, yupResolver, Yup, Modal, Button } from "../../utils/Packages";
import { useDispatch, useSelector } from "react-redux";
import { PATHS } from "../../utils";
import * as image from "../../resources/images";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import { MSG } from "../../utils/Messages";
const AfterSubscription = () => {

    let scriptString = '';
    useEffect(() => {
        document.title = "New After Subscription";
        window.dataLayer = window.dataLayer || [];
        // scriptString = `        
       	// 	<script> ` +
        //     function gtag() { dataLayer.push(arguments); }
        // gtag('js', new Date());
        // gtag('config', 'G-PB4KV6HMT0');
        // + `</script>
    	// 	`;
    }, [])

    return (
        <>
            <script async defer src="https://tools.luckyorange.com/core/lo.js?site-id=7f5c1aba"></script>
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-PB4KV6HMT0"></script> */}
            <div dangerouslySetInnerHTML={{ __html: scriptString }} />
        </>
    );
};

export default AfterSubscription;
