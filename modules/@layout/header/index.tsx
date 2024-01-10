"use client";
import SocialLinks from "@/modules/@common/social_links";
import {
  Button,
  Divider,
  Drawer,
  DrawerProps,
  RadioChangeEvent,
  Select,
  Space,
} from "antd";
import { Fragment, useEffect, useState } from "react";
import { CiClock2 } from "react-icons/ci";
import { FaMobileAlt, FaRegMap } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";
import Search from "@/modules/@common/search";
import SearchIcon from "@/modules/@common/search/search-icon";
import styles from "./header.module.scss";
import useScrollEffect from "@/hooks/use-scroll-effect";

import dataBurgerMenu from "@/helpers/data/burger-nav.json";
import navData1 from "@/helpers/data/nav.json";
import { useGetBroadFieldQuery } from "@/appstore/course/course-api";
import { insert } from "@/helpers/utils";

const Header = () => {
  const navDataRaw = [...navData1];

  //Broad Field API
  const { data: broadFieldData, isLoading: isbroadFieldLoading } =
    useGetBroadFieldQuery({});

  const course = broadFieldData?.map((item: any) => ({
    title: item?.label.slice(5),
    link: `/courses?broad=${item?.label}`,
    isAnchor: true,
  }));

  const topCourse = [
    { title: "Nursing Course", link: "/courses/top-courses/nursing-course" },
    { title: "Health Course", link: "/health-course" },
    {
      title: "Information Technology Course",
      link: "/information-technology-course",
    },
    {
      title: "Engineering Course",
      link: "/engineering-course",
    },
    {
      title: "Trading Course",
      link: "/trading-course",
    },
    {
      title: "Cookery Course",
      link: "/cookery-course",
    },
    {
      title: "PR Pathway Course",
      link: "/pr-pathway-course",
    },
  ];

  const topUniversities = [
    { title: "Nursing Course", link: "/courses/top-courses/nursing-course" },
    { title: "Health Course", link: "/health-course" },
    {
      title: "Information Technology Course",
      link: "/information-technology-course",
    },
    {
      title: "Engineering Course",
      link: "/engineering-course",
    },
    {
      title: "Trading Course",
      link: "/trading-course",
    },
    {
      title: "Cookery Course",
      link: "/cookery-course",
    },
    {
      title: "PR Pathway Course",
      link: "/pr-pathway-course",
    },
  ];

  const newItem = [
    { title: "Top courses in Australia", link: "#", grandChld: topCourse },
  ];

  const mergeItem = course && course?.length > 0 && newItem.concat(course);

  const courseData = {
    title: "Course Search",
    link: "/courses",
    children: mergeItem,
  };

  const navData = insert(navDataRaw, 1, courseData);

  const isScrollApplicable = useScrollEffect();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [selected, setSelected] = useState(null);
  const toggle = (i: any) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const path = usePathname();
  const [address, setAddress] = useState("sydney");

  // Scroll Efect

  return (
    <>
      <header className="sticky top-0  z-[999]">
        <div className="bg-primary">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] justify-between items-center lg:gap-5 py-2">
              <SocialLinks
                classes={{
                  root: `justify-center `,
                  iconStyle: `text-white`,
                }}
              />
              <div className="flex justify-center lg:justify-end items-center gap-1 lg:gap-5 ">
                <div className="flex py-2 gap-2 lg:gap-3">
                  {address === "sydney" && (
                    <>
                      <div className="hidden md:flex items-center gap-[6px] ">
                        <CiClock2 className="text-white" />
                        <div className="text-white text-[10px] lg:text-xs">
                          Mon – Fri 9.00 – 17.00
                        </div>
                      </div>

                      <div className="group">
                        <a
                          href="tel:880 0280689051"
                          className="flex items-center gap-[6px] text-white group-hover:text-secondary"
                        >
                          <FaMobileAlt className="text-white group-hover:text-secondary " />
                          <span className="text-[10px] lg:text-xs">
                            (02) 8068 9051
                          </span>
                        </a>
                      </div>

                      <div className="group">
                        <a
                          href="mailto:info@mieducation.com.au"
                          className="flex items-center gap-[6px] text-white  "
                        >
                          <HiOutlineEnvelope className="text-white group-hover:text-secondary" />
                          <span className="text-[10px] lg:text-xs group-hover:text-secondary">
                            info@mieducation.com.au
                          </span>
                        </a>
                      </div>

                      <div className="md:flex items-center gap-[6px] hidden">
                        <FaRegMap className="text-white" />
                        <div className="text-white text-[10px] lg:text-xs">
                          Level 2/251 Elizabeth St, Sydney NSW 2000
                        </div>
                      </div>
                    </>
                  )}
                  {address === "perth" && (
                    <>
                      <div className="hidden md:flex items-center gap-[6px] ">
                        <CiClock2 className="text-white" />
                        <div className="text-white text-[10px] lg:text-xs">
                          Mon – Fri 9.00 – 17.00
                        </div>
                      </div>

                      <div className="group">
                        <a
                          href="tel:880 0280689051"
                          className="flex items-center gap-[6px] text-white group-hover:text-secondary"
                        >
                          <FaMobileAlt className="text-white group-hover:text-secondary " />
                          <span className="text-[10px] lg:text-xs">
                            (02) 8068 9051
                          </span>
                        </a>
                      </div>

                      <div className="group">
                        <a
                          href="mailto:info@mieducation.com.au"
                          className="flex items-center gap-[6px] text-white  "
                        >
                          <HiOutlineEnvelope className="text-white group-hover:text-secondary" />
                          <span className="text-[10px] lg:text-xs group-hover:text-secondary">
                            info@mieducation.com.au
                          </span>
                        </a>
                      </div>

                      <div className="md:flex items-center gap-[6px] hidden">
                        <FaRegMap className="text-white" />
                        <div className="text-white text-[10px] lg:text-xs">
                          Suite: 1, 15 Delawney, Balcatta, Western
                          Australia-6021, Australia.
                        </div>
                      </div>
                    </>
                  )}
                  {address === "wollongong" && (
                    <>
                      <div className="hidden md:flex items-center gap-[6px] ">
                        <CiClock2 className="text-white" />
                        <div className="text-white text-[10px] lg:text-xs">
                          Mon – Fri 9.00 – 17.00
                        </div>
                      </div>

                      <div className="group">
                        <a
                          href="tel:880 0280689051"
                          className="flex items-center gap-[6px] text-white group-hover:text-secondary"
                        >
                          <FaMobileAlt className="text-white group-hover:text-secondary " />
                          <span className="text-[10px] lg:text-xs">
                            (02) 8068 9051
                          </span>
                        </a>
                      </div>

                      <div className="group">
                        <a
                          href="mailto:info@mieducation.com.au"
                          className="flex items-center gap-[6px] text-white  "
                        >
                          <HiOutlineEnvelope className="text-white group-hover:text-secondary" />
                          <span className="text-[10px] lg:text-xs group-hover:text-secondary">
                            info@mieducation.com.au
                          </span>
                        </a>
                      </div>

                      <div className="md:flex items-center gap-[6px] hidden">
                        <FaRegMap className="text-white" />
                        <div className="text-white text-[10px] lg:text-xs">
                          Level 2, 175 Keira Street, Wollongong- 2500 NSW,
                          Australia
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="hidden md:block">
                  <Select
                    labelInValue
                    defaultValue={{ value: "sydney", label: "Sydney" }}
                    style={{
                      width: 90,
                      height: "100%",
                      border: 0,
                      borderRadius: 0,
                    }}
                    className="nav_top"
                    onChange={(e: any) => setAddress(e.value)}
                    options={[
                      {
                        value: "sydney",
                        label: "Sydney",
                      },
                      {
                        value: "perth",
                        label: "Perth",
                      },
                      {
                        value: "wollongong",
                        label: "Wollongong",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="container">
            <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[230px_auto_auto] justify-between items-center relative">
              <div>
                <div className="absolute top-0 left-0 hidden lg:block">
                  <Link href="/">
                    <Image
                      src="/misc/logo.png"
                      alt="Study International Logo"
                      width={isScrollApplicable ? 132 : 240}
                      height={128}
                      className="transition-all duration-500"
                    />
                  </Link>
                </div>
                <Link href="/">
                  <Image
                    src="/misc/logo.png"
                    alt="Study International Logo"
                    width={120}
                    height={50}
                    blurDataURL="/misc/logo.png"
                    placeholder="blur"
                  />
                </Link>
              </div>

              {navData && navData?.length > 0 && (
                <nav className="hidden lg:block font-medium">
                  <ul className="flex items-center">
                    {navData?.map((item: any, index) => {
                      let p: any;
                      if (item.link == path && item.link != "/#") {
                        p = true;
                      }
                      item?.children &&
                        item?.children.length > 0 &&
                        item?.children?.map((itm: any) => {
                          if (itm?.link == path && itm?.link != "/#") {
                            p = true;
                          }
                          itm?.grandChld?.map((abc: any) => {
                            if (abc.link == path && abc?.link != "/#") {
                              p = true;
                            }
                          });
                        });

                      if (item?.isHidden) {
                        return null;
                      } else
                        return (
                          <li
                            key={index}
                            className={`relative text-black border-b-[3px] border-transparent hover:border-b-[3px] hover:border-secondary ${
                              styles.has_submenu
                            } ${p ? "border-secondary text-secondary" : ""}`}
                          >
                            {item?.link ? (
                              <Link
                                href={item.link}
                                className="flex items-center gap-2  cursor-pointer px-3 py-6 hover:text-inherit "
                              >
                                <span className="2lg:text-[15px] xl:text-base">
                                  {item?.title}
                                </span>
                                {item?.children && <FiChevronDown />}
                              </Link>
                            ) : (
                              <div className="flex items-center gap-2 cursor-pointer px-2 py-6 hover:text-inherit">
                                <span className="2lg:text-[15px] xl:text-base">
                                  {item?.title}
                                </span>
                                {item?.children && <FiChevronDown />}
                              </div>
                            )}
                            {item?.children && item?.children?.length > 0 && (
                              <div
                                className={`absolute bg-white p-4 rounded-lg shadow-xl  ${
                                  styles.submenu
                                } ${
                                  item?.isColTwo
                                    ? "grid grid-cols-2 gap-x-[60px]"
                                    : ""
                                }`}
                              >
                                {item?.children?.map((cldn: any, i: number) => {
                                  return (
                                    <div key={i} className="relative">
                                      <div
                                        className={`overflow-hidden group ${
                                          p
                                            ? "border-secondary text-secondary"
                                            : ""
                                        }`}
                                      >
                                        {cldn?.isAnchor ? (
                                          <>
                                            <a
                                              href={cldn?.link}
                                              className="flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition"
                                            >
                                              <span className="w-5 h-[2px] bg-black"></span>
                                              <span>{cldn?.title}</span>
                                            </a>
                                          </>
                                        ) : (
                                          <>
                                            {cldn?.link ? (
                                              <>
                                                <Link
                                                  href={`${
                                                    cldn?.link ? cldn?.link : ""
                                                  }`}
                                                  className="flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition"
                                                >
                                                  <span className="w-5 h-[2px] bg-black"></span>
                                                  <span>{cldn?.title}</span>
                                                </Link>
                                              </>
                                            ) : (
                                              <>
                                                <div className="flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition cursor-pointer">
                                                  <span className="w-5 h-[2px] bg-black"></span>
                                                  <span>{cldn?.title}</span>
                                                </div>
                                              </>
                                            )}
                                          </>
                                        )}

                                        {cldn?.grandChld && (
                                          <div className="min-w-[200px] left-[104%] top-0 absolute bg-white p-4 rounded-r-lg shadow-lg	 invisible group-hover:visible transition-all">
                                            {cldn?.grandChld?.map(
                                              (index: any, i: any) => {
                                                return (
                                                  <div
                                                    key={i}
                                                    className="relative "
                                                  >
                                                    <div className="overflow-hidden ">
                                                      {index?.isAnchor ? (
                                                        <>
                                                          <a
                                                            href={index?.link}
                                                            className="whitespace-nowrap flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition "
                                                          >
                                                            <span className="w-5 h-[2px] bg-black"></span>
                                                            {index?.title}
                                                          </a>
                                                        </>
                                                      ) : (
                                                        <>
                                                          <Link
                                                            href={index?.link}
                                                            className="whitespace-nowrap flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition "
                                                          >
                                                            <span className="w-5 h-[2px] bg-black"></span>
                                                            {index?.title}
                                                          </Link>
                                                        </>
                                                      )}
                                                    </div>
                                                  </div>
                                                );
                                              }
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}
                          </li>
                        );
                    })}
                  </ul>
                </nav>
              )}

              <div className="flex items-center gap-4">
                <div
                  className={`relative hidden lg:block  ${styles.burger_wrapper}`}
                >
                  <button className={`text-2xl mt-2`}>
                    <CgMenu />
                  </button>
                  {dataBurgerMenu && dataBurgerMenu?.length > 0 && (
                    <ul
                      className={`absolute bg-white p-4 rounded-lg shadow-xl min-w-max ${styles.burger_menu}`}
                    >
                      {dataBurgerMenu?.map((item, i) => {
                        return (
                          <li className="overflow-hidden" key={i}>
                            <Link
                              href={item?.link || "#"}
                              className="flex p-2 hover:text-inherit text-black font-normal items-center gap-2 translate-x-[-30px] hover:translate-x-0 transition delay-200"
                            >
                              <span className="w-5 h-[2px] bg-black"></span>
                              <span>{item?.title}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
                <SearchIcon classess={{ root: `!text-primary` }} />
                <Link href="/contact-us" className="btn btn-primary rounded-md">
                  Get in Touch
                </Link>
                <div className="block lg:hidden order-2">
                  <button
                    className={`text-2xl mt-1`}
                    onClick={() => setOpen(true)}
                  >
                    <CgMenu />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Drawer
        title={
          <div>
            <Link href="/">
              <Image
                src="/misc/logo-2.png"
                alt="Study International Logo"
                width={120}
                height={120}
                className="transition-all duration-500"
              />
            </Link>
          </div>
        }
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
        className="custom_nav_drawer"
      >
        <div
          className="flex flex-col overflow-auto"
          style={{ height: "calc(100vh - 60px" }}
        >
          <div>
            <>
              {navData && navData?.length > 0 ? (
                <div className="flex flex-col">
                  {navData?.map((item: any, i: any) => {
                    return (
                      <Fragment key={i}>
                        <div key={i} className="relative">
                          {item?.children && item?.children?.length > 0 ? (
                            <>
                              {item?.isHidden ? null : (
                                <div
                                  onClick={() => toggle(i)}
                                  className="flex items-center justify-between w-full py-2 z-10 gap-1"
                                >
                                  <span className="text-left text-base font-medium">
                                    {item.title}
                                  </span>

                                  {item?.children && (
                                    <>
                                      {selected == i ? (
                                        <FiChevronUp className="shrink-0" />
                                      ) : (
                                        <FiChevronDown className="shrink-0" />
                                      )}
                                    </>
                                  )}
                                </div>
                              )}
                            </>
                          ) : (
                            <>
                              <Link
                                href={item?.link || "#"}
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-between w-full py-2 z-10 gap-1"
                              >
                                <span className="text-left text-base font-medium">
                                  {item.title}
                                </span>
                              </Link>
                            </>
                          )}

                          <div>
                            {selected == i && (
                              <ul>
                                {item.children?.map((cldn: any, i: any) => {
                                  return (
                                    <li key={i} onClick={() => setOpen(false)}>
                                      <Link
                                        href={cldn?.link || "#"}
                                        className="flex p-2 text-base font-medium"
                                      >
                                        {cldn?.title}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              ) : null}
            </>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
