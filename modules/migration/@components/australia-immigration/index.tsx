import React from "react";
import MigrationCard from "../migration-card";

const migrationCardData = [
  {
    id: 1,
    iconSrc: "/migration/gsm-visa.png",
    alt: "GSM Visa",
    title: "GSM Visa",
    link: "#",
  },
  {
    id: 2,
    iconSrc: "/migration/employer-sponsored.png",
    alt: "Employer Sponsored Visa",
    title: "Employer Sponsored Visa",
    link: "#",
  },
  {
    id: 3,
    iconSrc: "/migration/visitor-visa.png",
    alt: "Visitor Visa",
    title: "Visitor Visa",
    link: "#",
  },
  {
    id: 4,
    iconSrc: "/migration/global-talent-program.png",
    alt: "Global Talent Program",
    title: "Global Talent Program",
    link: "#",
  },
  {
    id: 5,
    iconSrc: "/migration/partner.png",
    title: "Partner Visa",
    link: "#",
  },
  {
    id: 6,
    iconSrc: "/migration/parents.png",
    title: "Parents Visa",
    link: "#",
  },
  {
    id: 7,
    iconSrc: "/migration/family.png",
    title: "Family Visa",
    link: "#",
  },
  {
    id: 8,
    iconSrc: "/migration/student.png",
    title: "Student Visa",
    link: "#",
  },
  {
    id: 9,
    iconSrc: "/migration/appeals.png",
    title: "Appeals & Reviews",
    link: "#",
  },
  {
    id: 10,
    iconSrc: "/migration/temporary-activity.png",
    title: "Temporary Activity Visa",
    link: "#",
  },
  {
    id: 11,
    iconSrc: "/migration/protection-visa.png",
    title: "Protection Visa",
    link: "#",
  },
  {
    id: 12,
    iconSrc: "/migration/business.png",
    title: "Business Visa",
    link: "#",
  },
];

const AustraliaImmigration = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-[930px] w-full mx-auto">
          <div className="max-w-[900px] w-full mx-auto lg:mb-[80px]">
            <h1 className="text-center h2">Australia Immigration</h1>
            <p className="text-center">
              Moves International provides all types of Australia Immigration
              services and guide you to study, work or settle in Australia. Our
              Immigration Agents in Australia provide expert guidance on
              immigration processes. Rely on our Migrant Agents in Australia for
              accurate and professional advice.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-[30px]">
            {migrationCardData?.map((item, i) => {
              return <MigrationCard key={i} data={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AustraliaImmigration;
