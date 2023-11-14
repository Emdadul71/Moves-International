import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-auto bg-primary z-10">
      <div className="container">
        <div className="py-8 lg:pt-[100px] pb-8">
          <div className="grid lg:grid-cols-[1fr_900px]">
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

            <div className="grid grid-cols-1 md:grid-cols-[auto_auto_326px] gap-5 justify-between ">
              <ul className="flex flex-col gap-[10px]">
                <li>
                  <Link
                    href="/services"
                    className="text-white hover:text-secondary"
                  >
                    Education Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-secondary">
                    Study to Migration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/study"
                    className="text-white hover:text-secondary"
                  >
                    Study in Australia
                  </Link>
                </li>
                <li>
                  <Link
                    href="/life-in-australia"
                    className="text-white hover:text-secondary"
                  >
                    Life in Australia
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-secondary">
                    Top Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="text-white hover:text-secondary"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-white hover:text-secondary"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-white hover:text-secondary"
                  >
                    About Us
                  </Link>
                </li>
              </ul>

              <ul className="flex flex-col gap-[10px]">
                <li>
                  <Link
                    href="/services/student-consultancy"
                    className="text-white hover:text-secondary"
                  >
                    Student Consultancy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-secondary">
                    University Admission
                  </Link>
                </li>

                <li>
                  <Link href="#" className="text-white hover:text-secondary">
                    Professional Year Admission
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-secondary">
                    Student Visa Extension
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-secondary">
                    485 Visa Application
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-secondary">
                    OSHC & OVHC
                  </Link>
                </li>
              </ul>

              <div>
                <p className="text-white">
                  Sign up to our newsletter and get all of the latest news and
                  updates.
                </p>
                <div className="relative">
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
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-[#fff] my-11"></div>
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
