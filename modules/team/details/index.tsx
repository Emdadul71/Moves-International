"use client";
import React from "react";
import TeamDetailsHero from "./@components/team-details-hero";
import QualityAndPrestigious from "@/modules/home/quality-and-prestigious";
import WebStories from "@/modules/home/web-stories";
import ReadyToGo from "@/modules/@common/ready-to-go";
import { Select } from "antd";
import { FiChevronRight } from "react-icons/fi";
import { BiSolidEnvelope } from "react-icons/bi";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import SocialLinks from "@/modules/@common/social_links";
import { htmlParse } from "@/helpers/utils";
import { useCreateParticipantMutation } from "@/appstore/events/participant/participant_api";
import Swal from "sweetalert2";
import { Field, Form, Formik } from "formik";
import { useGetCounsellorServicesQuery } from "@/appstore/appointment/api";
import countryData from "../../@data/country.json";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import * as Yup from "yup";
import { useCreateInquiryMutation } from "@/appstore/lead/api";
import Spinner from "@/modules/@common/loading_spinner";
import { usePathname, useRouter } from "next/navigation";
import TeamCounselorAppoint from "../@component/counsellor-appointment";

const TeamDetails = ({ data }: any) => {
  const pathName = usePathname();
  const [createInquiry, { isLoading }] = useCreateInquiryMutation();
  const { data: services, isLoading: serviceLoading } =
    useGetCounsellorServicesQuery("");
  const formSchema = {
    name: "",
    email: "",
    mobile: "",
    teamServiceSlug: "",
    countryOfPassport: "",
    message: "",
  };

  const createHandler = async (values: any, actions: any) => {
    try {
      const res: any = await createInquiry({
        name: values?.name,
        email: values?.email,
        mobile: values?.mobile,
        leadSource: pathName,
        teamServiceSlug: values?.teamServiceSlug,
        message: values?.message,
        countryOfPassport: values?.countryOfPassport,
        leadType: "Lead",
      });

      if (!res?.error) {
        actions.resetForm();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration Successful",
          html: "Thank you for successfully registering! We are delighted to have you as part of our community. Your registration details have been received and processed.",
          showConfirmButton: true,
          confirmButtonText: "OK",
          confirmButtonColor: "#ffe835",
          customClass: {
            confirmButton: "swl_custom_class",
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
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobile: Yup.string()
      .min(7, "Mobile number must be at least 7 characters")
      .required("Mobile number is required"),
    teamServiceSlug: Yup.string().required("Book for is required"),
    countryOfPassport: Yup.string().required("Country of passport is required"),
    message: Yup.string().required("Enquiry is required"),
  });

  return (
    <>
      <TeamDetailsHero data={data} />
      <section className="pt-5 lg:pt-[100px]">
        <div className="container">
          <div className="max-w-[1180px] grid lg:grid-cols-[1fr_410px] gap-[30px] ml-auto">
            <div className="flex flex-col gap-[30px]">
              <div className="grid md:grid-cols-[330px_1fr]">
                <div>
                  <Image
                    src={data?.profileImage}
                    alt="CEO"
                    width={330}
                    height={363}
                    blurDataURL="/misc/team-1.jpg"
                    placeholder="blur"
                    className="w-full"
                  />
                </div>
                <div className="bg-grey px-5 lg:pl-[40px] lg:pr-[80px] py-5 lg:py-[50px] ">
                  <h4 className="text-[26px]">Contact Details</h4>

                  <div className="flex flex-col gap-[10px] mb-[30px]">
                    <div className="flex items-center gap-[10px]">
                      <FaPhoneAlt className="text-secondary" />
                      <div className="text-black">{data?.mobile}</div>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <BiSolidEnvelope className="text-secondary" />
                      <div className="text-black">{data?.email}</div>
                    </div>
                    <div className="flex items-start gap-[10px]">
                      <IoMdPin className="text-secondary text-lg" />
                      <div className="text-black">{data?.address}</div>
                    </div>
                  </div>
                  <div>
                    <p className="mb-0 text-primary">Social Profiles</p>
                    <SocialLinks
                      classes={{
                        root: `justify-start `,
                        iconStyle: `text-black`,
                      }}
                      data={data}
                    />
                  </div>
                </div>
              </div>
              <div className="from_texteditor_wrapper">
                {htmlParse(data?.education)}
              </div>
              <div>{htmlParse(data?.biography)}</div>
            </div>
            <div className="flex flex-col gap-[26px] p-4 lg:px-[30px] lg:py-[50px] border border-dashed self-start md:sticky top-[130px]">
              <div className="max-w-[496px] w-full">
                <h2 className="mb-3 h3">Premium Expert Admission Guidance</h2>
                <p className="mb-0">
                  As your education consultant and migration agent, we'll help
                  you optimize your educational experience by finding the right
                  universities and courses for you.
                </p>
              </div>

              <div>
                <ul className="flex flex-col gap-3.5">
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg font-medium text-primary">
                        Application Fee Waiver
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg font-medium text-primary">
                        Up to 100% Scholarship on Admit
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg font-medium text-primary">
                        SOP & LOR Preparation
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg font-medium text-primary">
                        Education Loan
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg font-medium text-primary">
                        Visa Assistance
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              {data?.isCounsellor === true ? (
                <TeamCounselorAppoint teamId={data?.id} />
              ) : (
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
                      <div>
                        <div className="flex flex-col gap-[15px]">
                          <div>
                            <Field
                              type="text"
                              value={values?.name}
                              onChange={(e: any) => {
                                setFieldValue("name", e.target.value);
                              }}
                              placeholder="Full Name"
                              className="border border-[#DBDBDB] rounded-[2px] w-full px-[15px] py-[8px] focus:outline-none"
                            />
                            {errors?.name && touched?.name ? (
                              <p className="text-red-500 text-[12px] m-0">
                                {errors?.name}
                              </p>
                            ) : null}
                          </div>
                          <div>
                            <Field
                              type="email"
                              value={values?.email}
                              onChange={(e: any) => {
                                setFieldValue("email", e.target.value);
                              }}
                              placeholder="Email"
                              className="border border-[#DBDBDB] rounded-[2px] w-full px-[15px] py-[8px] focus:outline-none"
                            />
                            {errors?.email && touched?.email ? (
                              <p className="text-red-500 text-[12px] m-0">
                                {errors?.email}
                              </p>
                            ) : null}
                          </div>
                          <div>
                            <PhoneInput
                              inputClass="react_phone_style"
                              placeholder="Mobile number"
                              country={"au"}
                              countryCodeEditable={true}
                              value={values?.mobile ? values?.mobile : ""}
                              onChange={(
                                _value,
                                country,
                                _event,
                                formattedValue
                              ) => {
                                setFieldValue("mobile", formattedValue);
                              }}
                            />
                            {errors?.mobile && touched?.mobile ? (
                              <p className="text-red-500 text-[12px] m-0">
                                {errors?.mobile}
                              </p>
                            ) : null}
                          </div>
                          <div>
                            <Select
                              placeholder="Service"
                              style={{ width: "100%" }}
                              className="ant_selector_custom"
                              size="large"
                              onChange={(e) => {
                                setFieldValue("teamServiceSlug", e);
                              }}
                              options={services}
                              value={
                                values?.teamServiceSlug
                                  ? values?.teamServiceSlug
                                  : undefined
                              }
                            />
                            {errors?.teamServiceSlug &&
                            touched?.teamServiceSlug ? (
                              <p className="text-red-500 text-[12px] m-0">
                                {errors?.teamServiceSlug}
                              </p>
                            ) : null}
                          </div>
                          <div>
                            <Select
                              showSearch
                              placeholder="Country of passport"
                              style={{ width: "100%" }}
                              className="ant_selector_custom"
                              size="large"
                              onChange={(_val, item: any) => {
                                setFieldValue("countryOfPassport", item?.label);
                              }}
                              options={countryData}
                              value={
                                values?.countryOfPassport
                                  ? values?.countryOfPassport
                                  : undefined
                              }
                            />
                            {errors?.countryOfPassport &&
                            touched?.countryOfPassport ? (
                              <p className="text-red-500 text-[12px] m-0">
                                {errors?.countryOfPassport}
                              </p>
                            ) : null}
                          </div>
                          <div>
                            <Field
                              type="text"
                              as="textarea"
                              onChange={(e: any) => {
                                setFieldValue("message", e.target.value);
                              }}
                              placeholder="Enquiry in Short"
                              value={values?.message}
                              className="w-full border px-[15px] py-[8px] focus:outline-none rounded-[2px]"
                              rows={4}
                            />
                            {errors?.message && touched?.message ? (
                              <p className="text-red-500 text-[12px] m-0">
                                {errors?.message}
                              </p>
                            ) : null}
                          </div>
                        </div>
                        <div>
                          <button
                            disabled={isLoading}
                            className="btn btn-primary w-full rounded"
                          >
                            {isLoading && <Spinner height="20px" />} Submit
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              )}
            </div>
          </div>
        </div>
      </section>
      <QualityAndPrestigious />
      <WebStories />
      <ReadyToGo />
    </>
  );
};

export default TeamDetails;
