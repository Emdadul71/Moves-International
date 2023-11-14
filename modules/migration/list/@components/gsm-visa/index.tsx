import { htmlParse } from "@/helpers/utils";
import React from "react";

const GSMVisa = ({ data }: any) => {
  console.log("moreInfo", data);

  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-[60px] max-w-[1070px] w-full mx-auto">
          <div className="flex flex-col gap-[30px] migration">
            <h2 className="h3 mb-0">
              Basic information to be submitted with EOI
            </h2>
            <p className="text-lg mb-0">
              You are required to provide information that is required to submit
              your expression of interest depending upon the type of visa that
              you are eligible for. However, following are some of the basic
              information that you need to successfully lodge your EOI
            </p>
            <ul className="flex flex-col gap-[14px] ">
              <li className="text-lg text-primary font-medium">
                Basic personal information
              </li>
              <li className="text-lg text-primary font-medium">
                Work experience information
              </li>
              <li className="text-lg text-primary font-medium">
                Qualification documents
              </li>
              <li className="text-lg text-primary font-medium">
                English Language Ability information (such as IELTS)
              </li>
              <li className="text-lg text-primary font-medium">
                Details of successful skills assessment, related to your
                nominated occupation
              </li>
            </ul>
            <p className="text-lg mb-0">
              1 July 2014, if a skills assessment is mandatory as part of a visa
              application, that assessment will only be valid for a period of
              three years from the date of issue, unless a shorter validity
              period is specified on the assessment.
            </p>
          </div>
          <div className="flex flex-col gap-[30px] migration">
            <h2 className="h3 mb-0">
              Basic information to be submitted with EOI
            </h2>

            <ul className="flex flex-col gap-[14px] ">
              <li className="text-lg text-primary font-medium">
                Basic personal information
              </li>
              <li className="text-lg text-primary font-medium">
                Work experience information
              </li>
              <li className="text-lg text-primary font-medium">
                Qualification documents
              </li>
              <li className="text-lg text-primary font-medium">
                English Language Ability information (such as IELTS)
              </li>
              <li className="text-lg text-primary font-medium">
                Details of successful skills assessment, related to your
                nominated occupation
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[30px] migration">
            <h2 className="h3 mb-0">
              Basic information to be submitted with EOI
            </h2>

            <ul className="flex flex-col gap-[14px] ">
              <li className="text-lg text-primary font-medium">
                Basic personal information
              </li>
              <li className="text-lg text-primary font-medium">
                Work experience information
              </li>
              <li className="text-lg text-primary font-medium">
                Qualification documents
              </li>
              <li className="text-lg text-primary font-medium">
                English Language Ability information (such as IELTS)
              </li>
              <li className="text-lg text-primary font-medium">
                Details of successful skills assessment, related to your
                nominated occupation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GSMVisa;
