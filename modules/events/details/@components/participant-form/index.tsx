"use client";
import { useCreateParticipantMutation } from "@/appstore/events/participant/participant_api";
import Spinner from "@/modules/@common/loading_spinner";
import { Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PI from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

import {
  PreferredCountry,
  funding,
  preferredIntake,
  preferredStudyLevel,
  validationSchema,
} from "../../../helper";
import styles from "./lead_form.module.scss";
const PhoneInput = (PI as any).default !== undefined ? (PI as any).default : PI;

const ParticipantForm = ({ booknowRef, data }: any) => {
  const [parTData, { isLoading }] = useCreateParticipantMutation();
  const router = useRouter();
  const [dialCode, setDialCode] = useState("+880");

  const formSchema = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    preferredCountry: "",
    preferredStudyLevel: "",
    preferredIntake: "",
    funding: "",
    isAgree: false,
    isContactQuery: false,
    isReceiveUpdates: false,
    eventId: data?.id,
  };

  const createHandler = async (values: any, actions: any) => {
    try {
      const res: any = await parTData({
        firstName: values?.firstName,
        lastName: values?.lastName,
        email: values?.email,
        mobile: values?.mobile,
        preferredCountry: data?.country,
        preferredStudyLevel: values?.preferredStudyLevel,
        preferredIntake: values?.preferredIntake,
        leadType: "Event",
        funding: values?.funding,
        eventId: values?.eventId,
        isAgree: values?.isAgree,
        isContactQuery: values?.isContactQuery,
        isReceiveUpdates: values?.isReceiveUpdates,
      });

      if (!res?.error) {
        actions.resetForm();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration Successful",
          html: "Thank you for successfully registering! We are delighted to have you as part of our community. Your registration details have been received and processed.",
          didClose: () => router.push("/"),
          showConfirmButton: true,
          confirmButtonText: "OK",
          confirmButtonColor: "#ffe835",
          customClass: {
            confirmButton: "swl_custom_class", // Replace 'custom-success-button-class' with your desired class name
          },
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: false,
        });
      }
    } catch (err) {}
  };

  return (
    <section ref={booknowRef}>
      <div className="container">
        <div className="max-w-[1030px] mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.05)] py-[30px] lg:py-[80px]">
          <div className="max-w-[665px] mx-auto mb-[40px]">
            <h3 className="text-center mb-[15px]">Sign Up for {data?.title}</h3>
            <p className="text-center text-base mb-0">
              Interested in exploring your options to study abroad? Share your
              details with us below, and we will be in touch with you shortly!
            </p>
          </div>
          <div className="max-w-[785px] mx-auto">
            <Formik
              initialValues={formSchema}
              enableReinitialize={false}
              validationSchema={validationSchema}
              onSubmit={(values: any, actions: any) => {
                createHandler(values, actions);
              }}
            >
              {({
                handleSubmit,
                setFieldValue,
                errors,
                values,
                touched,
              }: any) => (
                <Form>
                  <div className={`grid grid-cols-1 gap-3 lg:grid-cols-2 `}>
                    <div>
                      <label
                        htmlFor="firstname"
                        className={`block mb-2 text-black `}
                      >
                        First Name <span className="text-danger">*</span>
                      </label>
                      <Field
                        type="text"
                        name="firstName"
                        className={`block w-full py-2 px-4 focus:border-black text-body outline-none placeholder:text-primary border-b bg-transparent border-b  `}
                        placeholder="First Name"
                      />
                      {errors?.firstName && touched?.firstName ? (
                        <p className="text-danger text-[12px] m-0">
                          {errors?.firstName}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="lastname"
                        className={`block mb-2 text-black `}
                      >
                        Last Name
                      </label>
                      <Field
                        type="text"
                        name="lastName"
                        className={`block w-full py-2 px-4 focus:border-black text-body outline-none placeholder:text-primary border-[#D9D9D9] bg-transparent border-b  `}
                        placeholder="Last Name"
                      />
                      {errors?.lastName && touched?.lastName ? (
                        <p className="text-danger text-[12px] m-0">
                          {errors?.lastName}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className={`block mb-2 text-black `}
                      >
                        Email <span className="text-danger">*</span>
                      </label>
                      <Field
                        type="email"
                        name="email"
                        className={`block w-full py-2 px-4 focus:border-black text-body outline-none placeholder:text-primary border-[#D9D9D9] bg-transparent border-b  `}
                        placeholder="Email Name"
                      />
                      {errors?.email && touched?.email ? (
                        <p className="text-danger text-[12px] m-0">
                          {errors?.email}
                        </p>
                      ) : null}
                    </div>
                    <div className={`prefarance_phone_input_white`}>
                      <label
                        htmlFor="mobile"
                        className={`block mb-2 text-black `}
                      >
                        Mobile Number <span className="text-danger">*</span>
                      </label>
                      <PhoneInput
                        country={"bd"}
                        countryCodeEditable={true}
                        className={`block w-full  px-4 placeholder:text-primary focus:border-black  outline-none text-body  border-grey  bg-transparent border-b `}
                        value={values?.mobile ?? dialCode}
                        onChange={(val: any, countryCode: any) => {
                          setDialCode(countryCode?.dialCode);
                          setFieldValue("mobile", `+${val}`);
                        }}
                      />
                      {errors?.mobile && touched?.mobile ? (
                        <small className="text-danger">{errors?.mobile}</small>
                      ) : null}
                    </div>

                    {/* <div>
                      <label
                        htmlFor="mobile"
                        className={`block mb-2 text-black `}
                      >
                        Preferred Country <span className="text-danger">*</span>
                      </label>
                      <Select
                        isClearable
                        instanceId="long-value-select" // this property use for console warning
                        // @ts-ignore
                        value={
                          values.preferredCountry
                            ? PreferredCountry.filter(
                                (item) => item.value == values.preferredCountry
                              )
                            : ""
                        }
                        className={`lead_white_form_wrapper`}
                        classNamePrefix={`react-select_white`}
                        placeholder="Select Country"
                        onChange={(e) =>
                          setFieldValue("preferredCountry", e?.value)
                        }
                        options={PreferredCountry}
                      />
                      {errors?.preferredCountry && touched?.preferredCountry ? (
                        <small className="text-danger">
                          {errors?.preferredCountry}
                        </small>
                      ) : null}
                    </div> */}
                    <div>
                      <label
                        htmlFor="mobile"
                        className={`block mb-2 text-black`}
                      >
                        Preferred Study Level{" "}
                        <span className="text-danger">*</span>
                      </label>
                      <Select
                        isClearable
                        instanceId="long-value-select" // this property use for console warning
                        className={`lead_white_form_wrapper`}
                        classNamePrefix={`react-select_white`}
                        // @ts-ignore
                        value={
                          values.preferredStudyLevel &&
                          values.preferredStudyLevel !== ""
                            ? preferredStudyLevel.filter(
                                (item) =>
                                  item.value == values.preferredStudyLevel
                              )
                            : ""
                        }
                        placeholder="Select Study Level"
                        options={preferredStudyLevel}
                        onChange={(e) =>
                          setFieldValue("preferredStudyLevel", e?.value)
                        }
                      />
                      {errors?.preferredStudyLevel &&
                      touched?.preferredStudyLevel ? (
                        <small className="text-danger">
                          {errors?.preferredStudyLevel}
                        </small>
                      ) : null}
                    </div>
                    <div>
                      <label
                        htmlFor="mobile"
                        className={`block mb-2 text-black `}
                      >
                        Preferred Intake <span className="text-danger">*</span>
                      </label>
                      <Select
                        isClearable
                        instanceId="long-value-select" // this property use for console warning
                        className={`lead_white_form_wrapper`}
                        classNamePrefix={`react-select_white`}
                        placeholder="Select Intake"
                        // @ts-ignore
                        value={
                          values.preferredIntake
                            ? preferredIntake.filter(
                                (item) => item.value == values.preferredIntake
                              )
                            : ""
                        }
                        options={preferredIntake}
                        onChange={(e) =>
                          setFieldValue("preferredIntake", e?.value)
                        }
                      />
                      {errors?.preferredIntake && touched?.preferredIntake ? (
                        <small className="text-danger">
                          {errors?.preferredIntake}
                        </small>
                      ) : null}
                    </div>
                    <div className=" col-span-2">
                      <label
                        htmlFor="mobile"
                        className={`block mb-2 text-black `}
                      >
                        Funding <span className="text-danger">*</span>
                      </label>
                      <Select
                        isClearable
                        instanceId="long-value-select" /// this property use for console warning
                        className={`lead_white_form_wrapper`}
                        classNamePrefix={`react-select_white`}
                        placeholder="Select Funding"
                        // @ts-ignore
                        value={
                          values.funding
                            ? funding.filter(
                                (item) => item.value == values.funding
                              )
                            : ""
                        }
                        options={funding}
                        onChange={(e) => setFieldValue("funding", e?.value)}
                      />
                      {errors?.funding && touched?.funding ? (
                        <small className="text-danger">{errors?.funding}</small>
                      ) : null}
                    </div>
                  </div>

                  <div className="text-primary">
                    <div className="mt-[30px] mb-3">
                      Moves International will not share your details with
                      others without your permission:
                    </div>

                    <label className={styles.chackboxContainer}>
                      I agree to Moves International{" "}
                      <Link
                        href="/terms"
                        className="text-[#002F5B] font-semibold hover:text-inherit"
                      >
                        Terms
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="text-[#002F5B] font-semibold  hover:text-inherit"
                      >
                        Privacy Policy
                      </Link>
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          setFieldValue("isAgree", e.target?.checked)
                        }
                      />
                      <span className={styles.checkmark}></span>
                      {errors?.isAgree && touched?.isAgree ? (
                        <p className="text-danger">{errors?.isAgree}</p>
                      ) : null}
                    </label>

                    <label className={styles.chackboxContainer}>
                      Please contact me by phone, email or SMS to assist with my
                      enquiry
                      <input
                        type="checkbox"
                        value={"isContactQuery"}
                        onChange={(e) =>
                          setFieldValue("isContactQuery", e.target?.checked)
                        }
                      />
                      <span className={styles.checkmark}></span>
                      {errors?.isContactQuery && touched?.isContactQuery ? (
                        <p className="text-danger">{errors?.isContactQuery}</p>
                      ) : null}
                    </label>

                    <label className={styles.chackboxContainer}>
                      I would like to receive updates and offers from Moves
                      International
                      <input
                        type="checkbox"
                        value={"isReceiveUpdates"}
                        onChange={(e) =>
                          setFieldValue("isReceiveUpdates", e.target?.checked)
                        }
                      />
                      <span className={styles.checkmark}></span>
                      {errors?.isReceiveUpdates && touched?.isReceiveUpdates ? (
                        <p className="text-danger">
                          {errors?.isReceiveUpdates}
                        </p>
                      ) : null}
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-secondary w-full mt-10"
                  >
                    {isLoading && <Spinner height="20px" />} I Want to Study
                    Abroad
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ParticipantForm;
