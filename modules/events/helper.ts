import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required field"),
  email: Yup.string().required("Required field"),
  mobile: Yup.string().required("Required field"),
  preferredStudyLevel: Yup.string().required("Required field"),
  preferredIntake: Yup.string().required("Required field"),
  funding: Yup.string().required("Required field"),
  isAgree: Yup.bool().oneOf(
    [true],
    "Accept privacy policy & terms is required"
  ),
});

export const PreferredCountry = [
  { value: "UK", label: "UK" },
  { value: "USA", label: "USA" },
  { value: "Germany", label: "Germany" },
  { value: "Japan", label: "Japan" },
  { value: "Canada", label: "Canada" },
  { value: "Australia", label: "Australia" },
  { value: "Ireland", label: "Ireland" },
  { value: "Malaysia", label: "Malaysia" },
  { value: "Netherlands", label: "Netherlands" },
];

export const preferredStudyLevel = [
  { value: "Undergraduate", label: "Undergraduate" },
  { value: "Postgraduate", label: "Postgraduate" },
  { value: "Diploma", label: "Diploma" },
];

export const preferredIntake = [
  { value: "July 2023", label: "July 2023" },
  { value: "August 2023", label: "August 2023" },
  { value: "September 2023", label: "September 2023" },
  { value: "October 2023", label: "October 2023" },
  { value: "November 2023", label: "November 2023" },
  { value: "December 2023", label: "December 2023" },
  { value: "January 2024", label: "January 2024" },
  { value: "February 2024", label: "February 2024" },
  { value: "March 2024", label: "March 2024" },
  { value: "April 2024", label: "April 2024" },
  { value: "May 2024", label: "May 2024" },
  { value: "June 2024", label: "June 2024" },
  { value: "July 2024", label: "July 2024" },
];
export const funding = [
  { value: "Self-funded", label: "Self-funded" },
  { value: "Parents", label: "Parents" },
  { value: "Seeking Scholarship", label: "Seeking Scholarship" },
  { value: "Bank Loan", label: "Bank Loan" },
];
