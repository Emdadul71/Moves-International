import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { RiArrowRightLine } from "react-icons/ri";

const ServiceMore = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-5 lg:gap-[100px] max-w-[1070px] mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-[30px]">
            <div className="flex flex-col gap-[20px] self-start">
              <h2 className="mb-0">Scholarships</h2>
              <p className="mb-0 text-lg">
                We have scholarship programs for high-proficiency students who
                want to go abroad for higher studies (MBA, Ph.D., M.Phil.).
                There are so many universities and schools that constantly look
                for great scholars. We will ensure financial advantages through
                scholarships at the highest percentage for eligible candidates.
                Stay in touch and updated for upcoming scholarships in
                Australia. Let’s just set a meeting and discuss your ideas.
              </p>
              <p className="mb-0 text-lg">
                Our scholarship programs will include
              </p>
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
                </ul>
              </div>
              <div>
                <Link
                  href="#"
                  className="btn btn-primary inline-flex mt-auto rounded-md px-6 py-[10px]"
                >
                  <span> Find out More</span>
                  <div className=" relative">
                    <RiArrowRightLine />
                  </div>
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/misc/scholarship.jpg"
                alt="Moves International"
                width={520}
                height={540}
                blurDataURL="/misc/scholarship.jpg"
                placeholder="blur"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 lg:gap-[30px]">
            <div>
              <Image
                src="/misc/accommodation.jpg"
                alt="Moves International"
                width={520}
                height={540}
                blurDataURL="/misc/accommodation.jpg"
                placeholder="blur"
              />
            </div>
            <div className="flex flex-col gap-[20px] self-start">
              <h2 className="mb-0">Student Accommodation</h2>
              <p className="mb-0 text-lg">
                When a student gets selected and ready to go, accommodation is
                the first thing that comes to mind. We will let them know every
                detail of their accommodation. There are multiple options for
                selecting where to stay during the program. Most institutions
                provide places to stay for the students, but the case always
                does not remain the same. Ask our student Counsellor to know
                local information. We will arrange homestay, rental apartment,
                sublet, or hostel for secured accommodation.
              </p>
              <p className="mb-0 text-lg">
                Your stay will be included the following:
              </p>
              <div>
                <ul className="flex flex-col gap-3.5">
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg font-medium text-primary">
                        Fully decorated and furnished room
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg font-medium text-primary">
                        Affordable rents
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1.5 items-center">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg font-medium text-primary">
                        Laundry and maid services
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="flex gap-1.5 items-start">
                      <FiChevronRight className="text-secondary text-lg" />
                      <span className="text-lg font-medium text-primary">
                        Easy access to the hospitals, super shops, and your
                        institutions.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  href="#"
                  className="btn btn-primary inline-flex mt-auto rounded-md px-6 py-[10px]"
                >
                  <span> Find out More</span>
                  <div className=" relative">
                    <RiArrowRightLine />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceMore;
