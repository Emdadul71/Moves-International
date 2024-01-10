import SocialLinks from "@/modules/@common/social_links";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto bg-primary z-10">
      <div className="container">
        <div className="py-8 lg:pt-[100px] pb-8">
          <div className="grid lg:grid-cols-[1fr_800px] gap-5 lg:gap-[100px] mb-5">
            <div className="flex flex-col gap-5">
              <Link href="/">
                <Image
                  src="/misc/logo-dark.png"
                  alt="Moves International"
                  width={154}
                  height={80}
                  blurDataURL="/misc/logo-dark.png"
                  placeholder="blur"
                />
              </Link>

              <p className="text-white mb-0">
                Address: Level 2/251 Elizabeth St, Sydney NSW 2000 Australia
              </p>
              <SocialLinks
                classes={{
                  root: `justify-start `,
                  iconStyle: `text-white`,
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[auto_auto_auto] gap-5 justify-between ">
              <ul className="flex flex-col gap-[10px]">
                <li className="text-white font-semibold">About</li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-white hover:text-secondary transition-all"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-white hover:text-secondary transition-all"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/virtual-counselling"
                    className="text-white hover:text-secondary transition-all"
                  >
                    Free Counselling
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-white hover:text-secondary transition-all"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>

              <ul className="flex flex-col gap-[10px]">
                <li className="text-white font-semibold">Services</li>
                <li>
                  <Link
                    href="/services/university-and-college-admissions"
                    className="text-white hover:text-secondary transition-all"
                  >
                    University & College Admissions
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/education-and-career-counselling"
                    className="text-white hover:text-secondary transition-all"
                  >
                    Education & Career Counselling
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/migration-advice-and-visa-application"
                    className="text-white hover:text-secondary transition-all"
                  >
                    Migration Advice & Visa Application
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/professional-year-program"
                    className="text-white hover:text-secondary transition-all"
                  >
                    Professional Year Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/health-insurance-oshc-ovhc"
                    className="text-white hover:text-secondary transition-all"
                  >
                    Health Insurance OSHC/OVHC
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/rpl"
                    className="text-white hover:text-secondary transition-all"
                  >
                    RPL
                  </Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-[10px]">
                <li className="text-white font-semibold">Migration</li>
                <li>
                  <Link
                    href="/migration/student-visa-subclass-500"
                    className="text-white hover:text-secondary transition-all"
                  >
                    Studying & Training Visas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/migration/visitor-subclass-600"
                    className="text-white hover:text-secondary transition-all"
                  >
                    Visitor Visas
                  </Link>
                </li>

                <li>
                  <Link
                    href="/migration/family-and-partner-visas"
                    className="text-white hover:text-secondary transition-all"
                  >
                    Family & Partner Visas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/migration/working-and-skilled-visa"
                    className="text-white hover:text-secondary transition-all"
                  >
                    Working and Skilled Visa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/migration/business-visa-subclass-456"
                    className="text-white hover:text-secondary transition-all"
                  >
                    Repealed Visas
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[550px] mx-auto">
            <div className="relative mb-4">
              <input
                type="text"
                name=""
                id=""
                className="w-full pl-5 pr-[120px] py-3 rounded-md focus:outline-none placeholder:text-black"
                placeholder="Your email"
              />
              <button className="btn btn-primary absolute top-[50%] translate-y-[-50%] right-[6px] rounded-md">
                Subscribe
              </button>
            </div>
            <p className="text-white mb-0 text-center">
              Sign up to our newsletter and get all of the latest news and
              updates.
            </p>
          </div>
          <div className="w-full h-[1px] bg-[#fff] mb-11 mt-6"></div>
          <p className="mb-0 text-white">
            Copyright © {new Date().getFullYear()} Moves International. All
            rights reserved. Design & Developed by:{" "}
            <a
              href="https://m4yours.com/"
              target="_blank"
              rel="nofollow"
              className="hover:text-secondary"
            >
              M4yours IT
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
