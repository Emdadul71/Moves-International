import { useCreateContactMutation } from "@/appstore/contact_us/contact_api";
import Spinner from "@/modules/@common/loading_spinner";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import PI from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import styles from "./contact.module.scss";
import { staticAsset } from "@/helpers/utils";
const PhoneInput = (PI as any).default !== undefined ? (PI as any).default : PI;

const ContactForm = () => {
  const [parTData, { isLoading: createLoading }] = useCreateContactMutation();
  const [dialCode, setDialCode] = useState("+880");

  const createHandler = async (values: any, resetForm: any) => {
    try {
      const res: any = await parTData({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        subject: values.subject,
        mobile: values.mobile,
        message: values.message,
        isAgree: values.isAgree,
        recaptchaToken: values.recaptchaToken,
      });

      if (!res?.error) {
        resetForm();
        toast.success("Form submit successfull.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error(
          `${
            res?.error?.data?.message
              ? res?.error?.data?.message
              : "Somthing went wrong"
          }`,
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      }
    } catch (err) {}
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last Name is required"),
    mobile: Yup.string().required("Phone is required"),
    email: Yup.string().required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
    isAgree: Yup.bool().oneOf(
      [true],
      "Accept privacy policy & terms is required"
    ),
    recaptchaToken: Yup.string()
      .required("reCAPTCHA is required")
      .typeError("reCAPTCHA is required"),
  });
  return (
    <section>
      <div className="container">
        <div className="shadow-[0_0_20px_rgba(48,52,64,0.08)] lg:mt-[-87px] rounded-[6px] bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] items-start	">
            <div className="w-full h-full content-start	items-baseline">
              <Image
                src={staticAsset("/misc/contact-form.webp")}
                width={600}
                height={489}
                alt="Picture of the author"
                className="w-full h-full object-cover rounded-t-md lg:rounded-tr-none lg:rounded-l-md"
              />
            </div>

            <div className="py-5 lg:py-10 px-5 lg:px-[60px]">
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  mobile: undefined,
                  email: "",
                  subject: "",
                  message: "",
                  isAgree: false,
                }}
                enableReinitialize={true}
                validationSchema={validationSchema}
                onSubmit={(values: any, { resetForm }) => {
                  createHandler(values, resetForm);
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
                    <div className="">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-4">
                        <div>
                          <Field
                            type="text"
                            name="firstName"
                            className="border px-2 py-[10px] rounded placeholder:text-[15px] w-full"
                            placeholder="First Name*"
                          />
                          {errors?.firstName && touched?.firstName ? (
                            <span className="text-danger text-xs">
                              {errors?.firstName}
                            </span>
                          ) : null}
                        </div>

                        <div>
                          <Field
                            type="text"
                            name="lastName"
                            className="border px-2 py-[10px] rounded placeholder:text-[15px] w-full"
                            placeholder="Last Name*"
                          />
                          {errors?.lastName && touched?.lastName ? (
                            <span className="text-danger text-xs">
                              {errors?.lastName}
                            </span>
                          ) : null}
                        </div>

                        <div className="phon_input_wrapper">
                          <PhoneInput
                            country="bd"
                            countryCodeEditable={true}
                            value={values?.mobile ?? dialCode}
                            onChange={(e: any, countryCode: any) => {
                              setDialCode(countryCode?.dialCode);
                              setFieldValue("mobile", e);
                            }}
                          />
                          {errors?.mobile && touched?.mobile ? (
                            <span className="text-danger text-xs">
                              {errors?.mobile}
                            </span>
                          ) : null}
                        </div>

                        <div>
                          <Field
                            type="email"
                            name="email"
                            className="border px-2 py-[10px] rounded placeholder:text-[15px] w-full"
                            placeholder="Email*"
                          />
                          {errors?.email && touched?.email ? (
                            <span className="text-danger text-xs">
                              {errors?.email}
                            </span>
                          ) : null}
                        </div>

                        <div className="lg:col-span-2">
                          <Field
                            type="text"
                            name="subject"
                            className="border px-2 py-[10px] rounded placeholder:text-[15px] w-full"
                            placeholder="Subject*"
                          />
                          {errors?.subject && touched?.subject ? (
                            <span className="text-danger text-xs">
                              {errors?.subject}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-span-2 mt-3">
                        <textarea
                          name="message"
                          className="border min-h-[150px] overflow-auto px-2 py-[10px] placeholder:text-[15px] w-full"
                          placeholder="Message*"
                          onChange={(e) =>
                            setFieldValue("message", e.target.value)
                          }
                          value={
                            values.message && values.message !== ""
                              ? values.message
                              : ""
                          }
                        />
                        {errors?.message && touched?.message ? (
                          <span className="text-danger text-xs">
                            {errors?.message}
                          </span>
                        ) : null}
                      </div>

                      <label className={styles.chackboxContainer}>
                        I agree to Study International{" "}
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
                        <p className={`mt-1 ${styles.checkmark}`}></p>
                        {errors?.isAgree && touched?.isAgree ? (
                          <p className="text-danger">{errors?.isAgree}</p>
                        ) : null}
                      </label>

                      <div className="mt-3">
                        <ReCAPTCHA
                          sitekey={`${process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_KEY}`}
                          onChange={(e) => {
                            setFieldValue("recaptchaToken", e);
                          }}
                        />
                        {errors?.recaptchaToken ? (
                          <small className="text-danger">
                            {errors?.recaptchaToken}
                          </small>
                        ) : null}
                      </div>
                      {!createLoading ? (
                        <button
                          type="submit"
                          onChange={handleSubmit}
                          className="btn btn-secondary mt-[20px]"
                        >
                          Send Message
                        </button>
                      ) : (
                        <button
                          className={`btn btn-secondary mt-5 disabled w-[134px]`}
                        >
                          <Spinner height="20px" />
                        </button>
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactForm;
