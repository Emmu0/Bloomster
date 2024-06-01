/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MSG } from "../../utils/Messages";

import {
  Controller,
  GooglePlacesAutocomplete,
  geocodeByPlaceId,
} from "../../utils/Packages";
import { NUM_REGEX } from "../../utils/Regex";
import { getResetCard } from "../../redux/actions";

const AddressForm = (
  {
    register,
    errors,
    setValue,
    addressData,
    showAddress,
    showCheckout,
    billingAdd,
    billingData,
    learnerAdd,
    checkbox1,
    setcheckBox1,
    add,
    setAdd,
    addLear,
  },
  props
) => {
  const dispatch = useDispatch();
  const [address1, setAddress1] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [addCity, setAddCity] = useState("");

  const { getSelectedUser, loggedInUser, billingDetails } = useSelector(
    (state) => state.collections
  );

  useEffect(() => {
    setAddress1(addressData?.address1);
    setAddCity(addressData?.city);
  }, [addressData]);

  useEffect(() => {
    if (
      loggedInUser?.role?.name === "PARENT" &&
      getSelectedUser.isParent === false &&
      getSelectedUser?.address1 !== ""
    ) {
      setValue("address1", addressData?.address1);
      setValue("address1", addressData?.address2);
      setValue("city", addressData?.city);
      setValue("state", addressData?.state);
      setValue("zip", addressData?.zip);
      setZipCode(addressData?.zip);
      setAddCity(addressData?.city);

      if (addressData?.address2 === "null") {
        setValue("address2", "");
      } else {
        setValue("address2", addressData?.address2);
      }
    }
  }, [addressData]);

  useEffect(() => {
    if (
      loggedInUser?.role?.name === "PARENT" &&
      getSelectedUser?.address1 !== ""
    ) {
      setValue("address1", addressData?.address1);
      setValue("city", addressData?.city);
      setValue("state", addressData?.state);
      setValue("zip", addressData?.zip);
      setZipCode(addressData?.zip);
      setAddCity(addressData?.city);
      setValue("country", addressData?.country);

      if (addressData?.address2 === "null") {
        setValue("address2", "");
      } else {
        setValue("address2", addressData?.address2);
      }
    }
  }, [addressData, getSelectedUser, loggedInUser]);

  useEffect(() => {
    if (
      loggedInUser?.role?.name === "LEARNER" &&
      getSelectedUser?.parent?.address1 !== ""
    ) {
      setValue("address1", addressData?.address1);
      setValue("city", addressData?.city);
      setValue("state", addressData?.state);
      setValue("zip", addressData?.zip);
      setZipCode(addressData?.zip);
      setAddCity(addressData?.city);
      setValue("country", addressData?.country);

      if (
        getSelectedUser?.address2 === "null" ||
        getSelectedUser?.address2 === null
      ) {
        setValue("address2", "");
      } else {
        setValue("address2", addressData?.address2);
      }
    }
  }, [addressData]);
  const [addr2Disabled, setAddr2Disabled] = useState(false);
  useEffect(() => {
    if (showCheckout === true && getSelectedUser?.address1 !== "") {
      setAddr2Disabled(true);
      setValue("address1", addressData?.address1);
      // setValue("address2", addressData?.address2);
      setValue("city", addressData?.city);
      setValue("state", addressData?.state);
      setValue("country", "USA");
      setValue("zip", addressData?.zip);
      setZipCode(addressData?.zip);
      setAddCity(addressData?.city);
    }
  }, [addressData]);

  const setAddressData = (data) => {
    // setValue("address1", data?.value?.terms[0]?.value );
    geocodeByPlaceId(data?.value?.place_id).then((result) => {
      let addr = result[0]?.address_components;
      addr.map((val) => {
        if (val.types.includes("postal_code")) {
          setValue("zip", val?.long_name);
          setZipCode(val?.long_name);
        }
      });
    });
    let country = data?.value?.terms;

    setAddress1(data?.value?.terms[0]?.value);

    setValue(
      "address1",
      data?.value?.terms[0]?.value + "  " + data?.value?.terms[1]?.value
    );
    // setValue("address2", data?.value?.terms[1]?.value);
    setValue("country", country[country.length - 1]?.value);
    setValue("state", country[country.length - 2]?.value);
    setValue("city", country[country.length - 3]?.value);
    setAddCity(country[country.length - 3]?.value);
  };

  const clearAddress = () => {
    dispatch(getResetCard(true));
    setAddress1(undefined);
    setValue("address1", "");
    setValue("address2", "");
    setValue("country", "");
    setValue("state", "");
    setValue("city", "");
    setValue("zip", "");
    setZipCode(undefined);
    setAddCity(undefined);
    if (setcheckBox1) {
      setcheckBox1(false);
    }

    // setAdd(false);
  };

  useEffect(() => {
    if (add === false) {
      clearAddress();
    }
  }, [add]);

  useEffect(() => {
    if (addLear === false) {
      clearAddress();
    }
  }, [addLear]);

  //   useEffect(()=>{
  // if(errors.address1){
  //   setError("address1", { type: "custom", message: "address" })}
  // }
  //   ,[])

  return (
    <>
      <div className="input-group">
        <label>
          Address 1<span className="mandatoryField">*</span>
        </label>

        <div
          className={`form-group ${
            address1 ? "" : errors.city || errors.address1 ? "is-invalid" : ""
          }`}
        >
          {address1 ? (
            <div className="searchInputs">
              <input
                type="text"
                className={`form-control ${
                  address1
                    ? ""
                    : errors.city || errors.address1
                    ? "is-invalid"
                    : ""
                }`}
                disabled={true}
                defaultValue={address1}
                // placeholder="Address 1"
                {...register("address1", {
                  required: true,
                })}
              />
              <span
                className="closeicon"
                id="crossAddress"
                onClick={() => clearAddress()}
              >
                <i className="fa-solid fa-xmark"></i>
              </span>
            </div>
          ) : (
            <GooglePlacesAutocomplete
              autocompletionRequest={{
                componentRestrictions: {
                  country: ["us"],
                },
              }}
              apiKey={process.env.REACT_APP_GOOGLE_KEY}
              // placeholder="Address 1"
              autoFocus={false}
              returnKeyType={"default"}
              selectProps={{
                label: "",
                isClearable: true,
                defaultValue: address1,
                onChange: (text) => {
                  setAddressData(text);
                },
              }}
              onLoadFailed={(error) => {}}
            />
          )}
        </div>

        {address1
          ? ""
          : (errors.city || errors.address1) && (
              <p className="text-danger">{MSG.ADDR1REQ}</p>
            )}
      </div>

      <div className="input-group">
        <label>Address 2 (Optional)</label>
        <div className="form-group">
          <input
            type="text"
            maxLength="255"
            className={`form-control ${errors.address2 ? "is-invalid" : ""}`}
            disabled={
              addr2Disabled || (showAddress === true && addressData?.address2)
                ? true
                : false
            }
            // placeholder="Apt/Suite..."
            {...register("address2", {
              maxLength: {
                value: 254,
                message: MSG.MAX255CHREQ,
              },
            })}
          />
          {errors.address2 && (
            <p className="text-danger">{errors.address2.message}</p>
          )}
        </div>
      </div>
      <div className="input-group">
        <label>
          City<span className="mandatoryField">*</span>
        </label>
        <div className="form-group">
          <input
            type="text"
            // disabled={true}
            disabled={
              address1 && addCity ? true : address1 === undefined ? true : false
            }
            className={`form-control ${
              address1 && addCity ? "" : errors.city ? "is-invalid" : ""
            }`}
            // placeholder="City"
            id="city"
            // {...register("city", {
            //   required: true,
            // })}
            {...register("city", {
              required: {
                value: true,
                message: MSG.CITYREQ,
              },
            })}
          />
          {address1 && addCity
            ? ""
            : errors.city && (
                <p className="text-danger">{errors.city.message}</p>
              )}
        </div>
      </div>

      <div className="input-group ">
        <label>
          State<span className="mandatoryField">*</span>
        </label>
        <div className="form-group">
          <input
            type="text"
            id="state"
            disabled={true}
            className={`form-control ${
              address1 ? "" : errors.state ? "is-invalid" : ""
            }`}
            // placeholder="State"
            {...register("state", {
              required: true,
            })}
          />
          {address1
            ? ""
            : errors.state && <p className="text-danger">{MSG.STATEREQ}</p>}
        </div>
      </div>
      <div className="input-group ">
        <label>
          Country<span className="mandatoryField">*</span>
        </label>
        <div className="form-group">
          <input
            type="text"
            disabled={true}
            className={`form-control ${
              address1 ? "" : errors.country ? "is-invalid" : ""
            }`}
            // placeholder="Country"
            {...register("country", {
              required: true,
            })}
          />
        </div>
        {address1
          ? ""
          : errors.country && <p className="text-danger">{MSG.COUNTRYREQ}</p>}
      </div>
      <div className="input-group">
        <label>
          Zipcode<span className="mandatoryField">*</span>
        </label>
        <div className="form-group">
          <input
            type="text"
            maxLength="5"
            disabled={
              address1 && zipCode ? true : address1 === undefined ? true : false
            }
            className={`form-control ${
              address1 && zipCode ? "" : errors.zip ? "is-invalid" : ""
            }`}
            // placeholder="Zipcode"
            {...register("zip", {
              required: {
                value: true,
                message: MSG.ZCODE,
              },
              maxLength: 5,
              pattern: {
                value: NUM_REGEX,
                message: MSG.INZCODE,
              },
            })}
          />
        </div>

        {address1 && zipCode
          ? ""
          : errors.zip && <p className="text-danger">{errors.zip.message}</p>}
      </div>
    </>
  );
};

export default AddressForm;
