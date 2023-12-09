"use client";
import {
  useCreateAppointmentMutation,
  useGetCounsellorQuery,
  useGetCounsellorServicesQuery,
  useGetCounsellorTimeSlotQuery,
} from "@/appstore/appointment/api";
import { useGetlevelQuery } from "@/appstore/course/course-api";
import Spinner from "@/modules/@common/loading_spinner";
import convertTimeSlotsToUserTimeZone from "@/modules/@common/time-zone/convert-zone";
import { Checkbox, DatePicker, Select, notification } from "antd";
import dayjs from "dayjs";
import { Field, Form, Formik } from "formik";
import moment from "moment";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFillExclamationCircleFill } from "react-icons/bs";
import Swal from "sweetalert2";
import * as Yup from "yup";
import countryData from "../../../../@data/country.json";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const LeadForm = () => {
  //states
  const [service, setService] = useState(null);
  const [appointmentDateData, setAppointmentDateData] = useState<any>(
    dayjs().format("YYYY-MM-DD")
  );
  const [teamId, setTeamId] = useState();
  const [timeZone, setTimeZone] = useState([]);

  //Query Strings
  const timeSlotQuery = `?appointmentDate=${appointmentDateData}&teamId=${teamId}`;
  const query = `?serviceSlug=${service}&bookingDate=${appointmentDateData}`;

  //API Calls
  const { data: counsellorTimeSlot, isLoading: timeSlotLoading } =
    useGetCounsellorTimeSlotQuery(
      { queryString: timeSlotQuery },
      { skip: appointmentDateData && teamId ? false : true }
    );
  const [createAppointment, { isLoading }] = useCreateAppointmentMutation();
  const { data: courseLevel, isLoading: isLevelLoading } = useGetlevelQuery({});
  const { data: counsellorData, isLoading: counsellorLoading } =
    useGetCounsellorQuery(
      { queryString: query },
      { skip: service ? false : true }
    );
  const { data: services, isLoading: serviceLoading } =
    useGetCounsellorServicesQuery({});

  //Data management
  useEffect(() => {
    const getTimeZone: any = convertTimeSlotsToUserTimeZone(
      counsellorTimeSlot?.timeSlots ?? [],
      counsellorTimeSlot?.time_zone
    );
    if (service && appointmentDateData && getTimeZone.length === 0) {
      openNotification(
        "No Meeting Times Available",
        "Counselor is not available on this date. Please try another date."
      );
    }
    setTimeZone(getTimeZone);
  }, [counsellorTimeSlot]);

  const courseTypeOption = courseLevel?.map((item: any, i: any) => {
    return { value: item?.slug, label: item?.name };
  });

  //initial State
  const formSchema = {
    name: "",
    email: "",
    mobile: "",
    ieltsScore: "",
    serviceSlug: undefined,
    teamId: undefined,
    pteScore: "",
    appointmentDate: dayjs().format("YYYY-MM-DD"),
    highestEduLevel: undefined,
    countryOfPassport: undefined,
    preferredUniversity: "",
    preferredSubject: "",
    timeSlot: "",
    isAgree: false,
  };

  //validation schema
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobile: Yup.string()
      .min(7, "Mobile number must be at least 7 characters")
      .required("Mobile number is required"),
    serviceSlug: Yup.string().required("Book for is required"),
    teamId: Yup.number().required("Counselor is required"),
    ieltsScore: Yup.string().matches(
      /^[0-9]$/,
      "IELTS score must be a single digit between 0 and 9"
    ),
    pteScore: Yup.number()
      .min(10, "PTE score must be at least 10")
      .max(90, "PTE score must be at most 90"),
    countryOfPassport: Yup.string().required("Country of passport is required"),
    highestEduLevel: Yup.string().required(
      "Highest education level is required"
    ),
    preferredUniversity: Yup.string().required(
      "Preferred university is required"
    ),
    preferredSubject: Yup.string().required("Preferred subject is required"),
    timeSlot: Yup.string().required("Meeting time is required"),
    isAgree: Yup.boolean()
      .oneOf([true], "Please agree to the terms")
      .required("You must agree to the terms"),
  });

  //notification
  const openNotification = (message: string, description: string) => {
    notification.open({
      message,
      description,
      icon: <BsFillExclamationCircleFill style={{ color: "red" }} />,
    });
  };

  //Form submission
  const createHandler = async (values: any, actions: any) => {
    const payload = values;
    delete payload?.isAgree;

    try {
      const res: any = await createAppointment(payload);

      if (!res?.error) {
        actions.resetForm();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Registration Successful",
          html: "Thank you for successfully registering! We are delighted to have you as part of our community. Your registration details have been received and processed.",
          showConfirmButton: true,
          confirmButtonText: "OK",
          confirmButtonColor: "#023047",
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

  return (
    <section className="bg-grey pt-5 lg:pt-[80px]">
      <div className="container">
        <div className="flex flex-col gap-7 max-w-[850px] mx-auto w-full bg-white p-5 lg:p-[50px]">
          <div className="max-w-[355px] mx-auto">
            <h2 className="mb-3 text-center">Get 100% FREE Consultation!</h2>
            <p className="mb-3 text-center">
              Applicable for International Students only
            </p>
          </div>
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
                        name="name"
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
                        name="email"
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
                        onChange={(_value, country, _event, formattedValue) => {
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
                    <div className="grid grid-cols-[1fr_1fr] gap-4">
                      <div>
                        <Field
                          type="text"
                          name="ieltsScore"
                          placeholder="IELTS Score"
                          className="border border-[#DBDBDB] rounded-[2px] w-full px-[15px] py-[8px] focus:outline-none"
                        />
                        {errors?.ieltsScore && touched?.ieltsScore ? (
                          <p className="text-red-500 text-[12px] m-0">
                            {errors?.ieltsScore}
                          </p>
                        ) : null}
                      </div>
                      <div>
                        <Field
                          type="text"
                          name="pteScore"
                          placeholder="PTE Score"
                          className="border border-[#DBDBDB] rounded-[2px] w-full px-[15px] py-[8px] focus:outline-none"
                        />
                        {errors?.pteScore && touched?.pteScore ? (
                          <p className="text-red-500 text-[12px] m-0">
                            {errors?.pteScore}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div>
                      <Select
                        placeholder="Highest education level"
                        style={{ width: "100%" }}
                        className="ant_selector_custom"
                        size="large"
                        onChange={(_val, item: any) => {
                          setFieldValue("highestEduLevel", item?.label);
                        }}
                        options={courseTypeOption}
                        value={
                          values?.highestEduLevel
                            ? values?.highestEduLevel
                            : undefined
                        }
                      />
                      {errors?.highestEduLevel && touched?.highestEduLevel ? (
                        <p className="text-red-500 text-[12px] m-0">
                          {errors?.highestEduLevel}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <Field
                        type="text"
                        name="preferredUniversity"
                        placeholder="Prefered University"
                        className="border border-[#DBDBDB] rounded-[2px] w-full px-[15px] py-[8px] focus:outline-none"
                      />
                      {errors?.preferredUniversity &&
                      touched?.preferredUniversity ? (
                        <p className="text-red-500 text-[12px] m-0">
                          {errors?.preferredUniversity}
                        </p>
                      ) : null}
                    </div>
                    <div>
                      <Field
                        type="text"
                        name="preferredSubject"
                        placeholder="Prefered Subject"
                        className="border border-[#DBDBDB] rounded-[2px] w-full px-[15px] py-[8px] focus:outline-none"
                      />
                      {errors?.preferredSubject && touched?.preferredSubject ? (
                        <p className="text-red-500 text-[12px] m-0">
                          {errors?.preferredSubject}
                        </p>
                      ) : null}
                    </div>
                    <div className="grid grid-cols-[1fr_1fr] gap-4">
                      <div>
                        <DatePicker
                          placeholder="Meeting Date"
                          className="w-full"
                          allowClear={false}
                          size="large"
                          onChange={(date, dateString) => {
                            setFieldValue(
                              "appointmentDate",
                              dayjs(date).format("YYYY-MM-DD")
                            );
                            setFieldValue("timeSlot", undefined);
                            setAppointmentDateData(
                              dayjs(dateString).format("YYYY-MM-DD")
                            );
                          }}
                          disabledDate={(current) =>
                            current &&
                            (current < moment().startOf("day") ||
                              current > moment().add(14, "days").endOf("day"))
                          }
                          defaultValue={
                            values?.appointmentDate &&
                            values?.appointmentDate !== ""
                              ? dayjs(values.appointmentDate, "YYYY-MM-DD")
                              : undefined
                          }
                        />
                        {errors?.appointmentDate && touched?.appointmentDate ? (
                          <p className="text-red-500 text-[12px] m-0">
                            {errors?.appointmentDate}
                          </p>
                        ) : null}
                      </div>
                      <div>
                        <Select
                          placeholder="Booking for"
                          style={{ width: "100%" }}
                          className="ant_selector_custom"
                          size="large"
                          onChange={(e) => {
                            setService(e);
                            setFieldValue("serviceSlug", e);
                            setFieldValue("teamId", undefined);
                            setFieldValue("timeSlot", undefined);
                            // setFieldValue("appointmentDate", undefined);
                          }}
                          options={services}
                          value={
                            values?.serviceSlug
                              ? values?.serviceSlug
                              : undefined
                          }
                        />
                        {errors?.serviceSlug && touched?.serviceSlug ? (
                          <p className="text-red-500 text-[12px] m-0">
                            {errors?.serviceSlug}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div className="grid grid-cols-[1fr_1fr] gap-4">
                      <div>
                        <Select
                          placeholder="Counsellor"
                          style={{ width: "100%" }}
                          className="ant_selector_custom"
                          onClick={() => {
                            if (!values?.serviceSlug) {
                              openNotification(
                                "'Book for' is required.",
                                "You must select 'Book for' before selecting a counselor."
                              );
                            }
                            if (
                              values?.serviceSlug &&
                              values?.appointmentDate &&
                              counsellorData?.length === 0
                            ) {
                              openNotification(
                                "No Counselor Availability",
                                "Counselor is currently unavailable on the selected date. Please consider choosing an alternative date or adjusting the weekday and try again. "
                              );
                            }
                          }}
                          size="large"
                          onChange={(val) => {
                            setFieldValue("teamId", val);
                            setTeamId(val);
                            setFieldValue("timeSlot", undefined);
                            // setFieldValue("appointmentDate", undefined);
                          }}
                          options={counsellorData}
                          value={values?.teamId ? values?.teamId : undefined}
                        />
                        {errors?.teamId && touched?.teamId ? (
                          <p className="text-red-500 text-[12px] m-0">
                            {errors?.teamId}
                          </p>
                        ) : null}
                      </div>
                      <div>
                        <Select
                          placeholder="Meeting TIme"
                          style={{ width: "100%" }}
                          className="ant_selector_custom"
                          size="large"
                          onClick={() => {
                            if (!values?.serviceSlug) {
                              openNotification(
                                "Counselor is required.",
                                "You must select Counselor before selecting meeting time."
                              );
                            }
                          }}
                          onChange={(val) => {
                            setFieldValue("timeSlot", val);
                          }}
                          options={
                            teamId && appointmentDateData ? timeZone : []
                          }
                          value={
                            values?.timeSlot && teamId && appointmentDateData
                              ? values?.timeSlot
                              : undefined
                          }
                        />
                        {errors?.timeSlot && touched?.timeSlot ? (
                          <p className="text-red-500 text-[12px] m-0">
                            {errors?.timeSlot}
                          </p>
                        ) : null}
                      </div>
                    </div>
                    <div className="flex flex-col gap-[15px]">
                      <p className="mb-0">
                        Moves International will not share your details with
                        others without your permission:
                      </p>
                      <div>
                        <Checkbox
                          onChange={(e) => {
                            setFieldValue("isAgree", e.target.checked);
                          }}
                        >
                          <span className="text-base">
                            I agree to Moves International{" "}
                            <Link href="#" className="hover:text-secondary">
                              {" "}
                              Terms{" "}
                            </Link>
                            and{" "}
                            <Link href="#" className="hover:text-secondary">
                              privacy policy
                            </Link>
                          </span>
                        </Checkbox>
                        {errors?.isAgree && touched?.isAgree ? (
                          <p className="text-red-500 text-[12px] m-0">
                            {errors?.isAgree}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isLoading}
                    onChange={handleSubmit}
                    className="btn btn-primary w-full"
                  >
                    {!isLoading ? (
                      "Help me Study Abroad"
                    ) : (
                      <Spinner height="20px" />
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
