"use client";
import {
  useGetBroadFieldQuery,
  useGetCoursesQuery,
  useGetDetailedFieldQuery,
  useGetNarrowFieldQuery,
  useGetStateQuery,
  useGetlevelQuery,
} from "@/appstore/course/course-api";
import { generateQueryString } from "@/helpers/utils";
import PaginationComponent from "@/modules/@common/pagination";
import SearchInput from "@/modules/@common/search/search-input";
import Skeleton from "@/modules/@common/skeleton";
import { PaginationProps, Select, Slider, Tooltip } from "antd";
import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox";
import { ColumnsType } from "antd/es/table";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Value } from "sass";

interface DataType {
  key: React.Key;
  courseName: string;
  provider: string;
  level: string;
  duration: number;
}

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};

const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
  current,
  pageSize
) => {
  console.log(current, pageSize);
};

const columns: ColumnsType<DataType> = [
  {
    title: "Course Name",
    dataIndex: "courseName",
    render: (_, record) => (
      <Link
        href="/courses/courses-name"
        className="hover:text-secondary font-medium"
      >
        {record?.courseName}
      </Link>
    ),
  },
  {
    title: "Provider",
    dataIndex: "provider",
  },
  {
    title: "Level",
    dataIndex: "level",
  },
  {
    title: "Duration (Wks)",
    dataIndex: "duration",
  },
];

const CourseLanding = ({ data }: any) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const courseName = searchParams.get("courseName");
  const instituteName = searchParams.get("instituteName");
  const courseLevelSlug = searchParams.get("courseLevelSlug");
  const pageFromRoute = searchParams.get("page");
  const stateSlug = searchParams.get("stateSlug");
  const fieldBroad = searchParams.get("broad");
  const fieldNarrow = searchParams.get("narrow");
  const fieldDetailed = searchParams.get("detailed");
  const stateSlugArr = stateSlug ? stateSlug.split("_") : [];

  // const limit = 10;
  // const [page, setPage] = useState(pageFromRoute || 1);

  const [queryParams, setQueryParams] = useState<any>({
    page: pageFromRoute || 1,
    courseName,
    limit: 10,
    courseLevelSlug,
    instituteName,
    broad: fieldBroad,
    narrow: fieldNarrow,
    detailed: fieldDetailed,
    stateSlug: stateSlugArr,
  });

  const handleReset = () => {
    setQueryParams({
      page: 1,
      courseName: "",
      limit: 10,
      courseLevelSlug: null,
      instituteName: "",
      broad: null,
      narrow: null,
      detailed: null,
      stateSlug: [],
    });
  };

  const courseQueryString = generateQueryString(queryParams);

  const { data: courseData, isLoading } = useGetCoursesQuery({
    courseQueryString,
  });
  const { data: courseLevel, isLoading: isLevelLoading } = useGetlevelQuery({});

  const totalCount = courseData && courseData?.totalCount;
  const dataArray = courseData?.data;
  const len = courseData?.totalCount;

  const onChange = (pageNumber: any) => {
    setQueryParams((prev: any) => ({ ...prev, page: pageNumber }));
  };
  const onChange2 = (checkedValues: any) => {
    setQueryParams((prev: any) => ({ ...prev, stateSlug: checkedValues }));
  };

  useEffect(() => {
    const stateString = queryParams.stateSlug.join("_");
    const courseQueryString = generateQueryString({
      totalCourse: totalCount,
      ...queryParams,
      stateSlug: stateString,
      limit: "",
    });

    router.push(`/courses${courseQueryString}`, { scroll: false });
  }, [courseQueryString, totalCount]);

  const courseTypeOption = courseLevel?.map((item: any, i: any) => {
    return { value: item?.slug, label: item?.name };
  });

  //Broad Field API
  const { data: broadFieldData, isLoading: isbroadFieldLoading } =
    useGetBroadFieldQuery({});

  const broadFieldOption = broadFieldData?.map((item: any, i: any) => {
    return {
      value: item?.value,
      label: item?.label,
    };
  });

  //Narrow Field API
  const { data: narrowFieldData, isLoading: isNarrowFieldLoading } =
    useGetNarrowFieldQuery({ courseNarrow: queryParams.broad });

  const narrowFieldOption = narrowFieldData?.map((item: any, i: any) => {
    return {
      value: item?.value,
      label: item?.label,
    };
  });

  //Detailed Field API
  const { data: detailedFieldData, isLoading: isDetailedFieldLoading } =
    useGetDetailedFieldQuery({ courseDetailed: queryParams.narrow });

  const detailedFieldOption = detailedFieldData?.map((item: any, i: any) => {
    return {
      value: item?.value,
      label: item?.label,
    };
  });

  // State Api
  const { data: stateData, isLoading: isStateLoading } = useGetStateQuery({
    countrySlug: "australia",
  });

  return (
    <>
      <section className="bg-primary lg:pt-[100px]">
        <div className="container">
          <SearchInput type={`courses`} classess={{ root: `!text-white` }} />
        </div>
      </section>
      <section className="pt-5 lg:pt-[100px]">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-5 lg:mb-10 gap-5">
            <div>
              <h1 className="flex text-lg lg:text-[24px] lg:leading-[33px] mb-[6px]">
                {!isLoading ? (
                  <> {totalCount} </>
                ) : (
                  <>
                    <Skeleton className="h-[30px] w-[70px]" />
                  </>
                )}
                courses were found for
                <span className="text-secondary pl-[6px]"> {courseName}</span> .
              </h1>
              <p className="mb-0">
                To display a particular course's details please click on the
                course name in the list below.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <p className="mb-0">Sort by :</p>
              <Select
                defaultValue="Popularity"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "Popularity", label: "Popularity" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                ]}
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-[300px_1fr] gap-[30px]">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-primary font-medium mb-0">Filter</p>
                <button onClick={handleReset}>
                  <span className="text-xs">Reset All</span>
                </button>
              </div>
              <div className="w-full h-[1px] bg-[#DBDADE] my-7"></div>
              <p className="text-primary font-medium mb-5">Search Criteria</p>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-[#d9d9d9] focus:outline-none py-2 px-2"
                  placeholder="Course Name"
                  onChange={(e) =>
                    setQueryParams((prev: any) => ({
                      ...prev,
                      courseName: e.target.value,
                    }))
                  }
                  value={queryParams?.courseName}
                />
                <Select
                  allowClear
                  placeholder={"Course Type"}
                  loading={isLevelLoading}
                  style={{ width: `100%` }}
                  size="large"
                  value={
                    queryParams?.courseLevelSlug
                      ? queryParams?.courseLevelSlug
                      : null
                  }
                  onChange={(val) =>
                    setQueryParams((prev: any) => ({
                      ...prev,
                      courseLevelSlug: val,
                    }))
                  }
                  options={courseTypeOption}
                />

                {/* <Select
                  defaultValue="Course Language"
                  style={{ width: `100%` }}
                  size="large"
                  onChange={handleChange}
                  // options={[
                  //   { value: "english", label: "English" },
                  //   { value: "bengali", label: "Bengali" },
                  //   { value: "french", label: "French" },
                  // ]}
                /> */}
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-[#d9d9d9] focus:outline-none py-2 px-2"
                  placeholder="Institute Name"
                  value={queryParams?.instituteName}
                  onChange={(e) =>
                    setQueryParams((prev: any) => ({
                      ...prev,
                      instituteName: e.target.value,
                    }))
                  }
                />
                <p className="text-primary font-medium mb-0">
                  Search by Field of Education
                </p>
                <Select
                  placeholder="Broad Field"
                  style={{ width: `100%` }}
                  size="large"
                  value={queryParams?.broad}
                  options={broadFieldOption}
                  onChange={(val) =>
                    setQueryParams((prev: any) => ({
                      ...prev,
                      broad: val,
                      narrow: null,
                      detailed: null,
                    }))
                  }
                />
                <Select
                  disabled={queryParams?.broad ? false : true}
                  placeholder="Narrow Field"
                  style={{ width: `100%` }}
                  size="large"
                  value={queryParams?.narrow}
                  options={narrowFieldOption}
                  onChange={(val) =>
                    setQueryParams((prev: any) => ({
                      ...prev,
                      narrow: val,
                      detailed: null,
                    }))
                  }
                />
                <Select
                  disabled={queryParams?.narrow ? false : true}
                  placeholder="Detailed Field"
                  style={{ width: `100%` }}
                  size="large"
                  value={queryParams?.detailed}
                  options={detailedFieldOption}
                  onChange={(val) =>
                    setQueryParams((prev: any) => ({
                      ...prev,
                      detailed: val,
                    }))
                  }
                />
              </div>
              <div className="w-full h-[1px] bg-[#DBDADE] my-7"></div>
              <p className="text-primary font-medium mb-5">Location</p>

              {/* <div className="flex flex-col gap-[10px]">
                {stateData?.map((item: any, i: any) => {
                  return (
                    <Checkbox onChange={onChange} key={i}>
                      {item?.label}
                    </Checkbox>
                  );
                })}
              </div> */}

              <Checkbox.Group
                name={`sdfsdfsf`}
                options={stateData}
                value={stateSlugArr ? stateSlugArr : []}
                onChange={onChange2}
                className="flex flex-col gap-[10px]"
              />

              {/* <Checkbox.Group
              // style={{ width: "100%" }}
              // onChange={onChange2}
              // value={stateSlugArr ? stateSlugArr : []}
              // options={stateData}
              // className="flex flex-col gap-[10px]"
              >
                {stateData?.map((item: any, i: any) => {
                  return (
                    <div key={i}>
                      <Checkbox value={item?.value} onChange={onChange2}>
                        {item?.label}
                        {item?.count}
                      </Checkbox>
                    </div>
                  );
                })}
              </Checkbox.Group> */}

              <div className="w-full h-[1px] bg-[#DBDADE] my-7"></div>
              <p className="text-primary font-medium mb-5">Tuition Fees</p>
              <div className="flex items-center justify-between mb-4">
                <p className="mb-0 text-sm">$4.5k</p>
                <p className="mb-0 text-sm">$ 80k</p>
              </div>
              <Slider
                range
                defaultValue={[20, 50]}
                max={100}
                min={0}
                className="search_slider"
              />
            </div>
            <div>
              <div className="lg:grid lg:grid-cols-[230px_1fr]  pb-4 px-5 gap-5 lg:gap-[30px] items-center w-full rounded hidden">
                <span className="text-[#013046] uppercase">Course Name</span>
                <div className="grid grid-cols-2 md:grid-cols-[1.7fr_1fr_1fr_1fr] gap-5 lg:gap-3">
                  <span className="text-[#013046] uppercase">Provider</span>
                  <span className="text-[#013046] uppercase">Level </span>
                  <span className="text-[#013046] uppercase">
                    Duration (Wks){" "}
                  </span>
                  <span className="text-[#013046] uppercase">TUTION FEE</span>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {!isLoading ? (
                  <>
                    {len > 0 ? (
                      <>
                        {dataArray?.map((item: any, i: any) => {
                          return (
                            <div
                              className="grid lg:grid-cols-[230px_1fr] border  self-start py-4 px-5 gap-5 lg:gap-[30px] items-center w-full rounded"
                              key={i}
                            >
                              <Link
                                href={`/courses/${item?.courseCode}`}
                                className="pr-5"
                              >
                                <Tooltip title={item?.courseName}>
                                  <h3 className="text-base leading-[22px] hover:text-secondary transition-all mb-0 line-clamp-2">
                                    {item?.courseName}
                                  </h3>
                                </Tooltip>
                              </Link>
                              <div className="grid grid-cols-2 md:grid-cols-[1.7fr_1fr_1fr_1fr] gap-5 lg:gap-3">
                                <div className="lg:border-r pr-3">
                                  <div className="text-primary text-sm font-semibold lg:hidden">
                                    PROVIDER
                                  </div>
                                  <div className="text-xs">
                                    {item?.institution?.institutionName}
                                  </div>
                                </div>
                                <div className="lg:border-r pr-3">
                                  <div className="text-primary text-sm font-semibold lg:hidden">
                                    LEVEL
                                  </div>
                                  <div className="text-xs">
                                    {item?.course_courseLevelId_fkey?.name}
                                  </div>
                                </div>
                                <div className="lg:border-r pr-3">
                                  <div className="text-primary text-sm font-semibold lg:hidden">
                                    DURATION (WKS)
                                  </div>
                                  <div className="text-xs">
                                    {item?.durationWeeks}
                                  </div>
                                </div>
                                <div className="pr-3">
                                  <div className="text-primary text-sm font-semibold lg:hidden">
                                    TUTION FEE
                                  </div>
                                  {item?.tuitionFee && (
                                    <div className="text-xs">
                                      $ {item?.tuitionFee}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <div className="flex items-center justify-center min-h-[800px]">
                          <h3>No Course Found</h3>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {new Array(10).fill(0).map((_, i) => {
                      return <Skeleton className="h-[80px]" key={i} />;
                    })}
                  </>
                )}
              </div>

              {totalCount > queryParams.limit ? (
                <div className="mt-6 lg:mt-10">
                  <PaginationComponent
                    onChange={onChange}
                    total={totalCount}
                    page={queryParams.page}
                    limit={queryParams.limit}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseLanding;
