"use client";
import { Pagination, PaginationProps, Select, Slider, Table } from "antd";
import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox";
import { ColumnsType } from "antd/es/table";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import SearchInput from "@/modules/@common/search/search-input";
import { useGetAllInstitutionQuery } from "@/appstore/institution/institution-api";
import { generateQueryString } from "@/helpers/utils";
import { useRouter, useSearchParams } from "next/navigation";
import Skeleton from "@/modules/@common/skeleton";
import PaginationComponent from "@/modules/@common/pagination";
import { useGetStateQuery } from "@/appstore/course/course-api";

interface DataType {
  key: React.Key;
  instituteName: string;
  state: string;
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
    title: "INSTITUTE NAME",
    dataIndex: "instituteName",
    render: (_, record) => (
      <Link
        href="/institutions/institution-name"
        className="hover:text-secondary font-medium"
      >
        {record?.instituteName}
      </Link>
    ),
  },
  {
    title: "STATE",
    dataIndex: "state",
  },
];

const data: DataType[] = [
  {
    key: "1",
    instituteName: "International College of Management, Sydney Pty Limited",
    state: "NSW",
  },
  {
    key: "1",
    instituteName: "International College of Management, Sydney Pty Limited",
    state: "NSW",
  },
  {
    key: "1",
    instituteName: "International College of Management, Sydney Pty Limited",
    state: "NSW",
  },
  {
    key: "1",
    instituteName: "International College of Management, Sydney Pty Limited",
    state: "NSW",
  },
  {
    key: "1",
    instituteName: "International College of Management, Sydney Pty Limited",
    state: "NSW",
  },
  {
    key: "1",
    instituteName: "International College of Management, Sydney Pty Limited",
    state: "NSW",
  },
  {
    key: "1",
    instituteName: "International College of Management, Sydney Pty Limited",
    state: "NSW",
  },
  {
    key: "1",
    instituteName: "International College of Management, Sydney Pty Limited",
    state: "NSW",
  },
  {
    key: "1",
    instituteName: "International College of Management, Sydney Pty Limited",
    state: "NSW",
  },
  {
    key: "1",
    instituteName: "International College of Management, Sydney Pty Limited",
    state: "NSW",
  },
  {
    key: "1",
    instituteName: "International College of Management, Sydney Pty Limited",
    state: "NSW",
  },
  {
    key: "1",
    instituteName: "International College of Management, Sydney Pty Limited",
    state: "NSW",
  },
  {
    key: "1",
    instituteName: "International College of Management, Sydney Pty Limited",
    state: "NSW",
  },
  {
    key: "1",
    instituteName: "International College of Management, Sydney Pty Limited",
    state: "NSW",
  },
];

const InstitutionsLanding = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const instituteName = searchParams.get("instituteName");
  const institutionType = searchParams.get("institutionType");
  const pageFromRoute = searchParams.get("page");
  const stateSlug = searchParams.get("stateSlug");
  const stateSlugArr = stateSlug ? stateSlug.split("_") : [];

  const [queryParams, setQueryParams] = useState<any>({
    page: pageFromRoute || 1,
    institutionType,
    instituteName,
    limit: 10,
    stateSlug: stateSlugArr,
  });

  const handleReset = () => {
    setQueryParams({
      page: pageFromRoute || 1,
      instituteName: "",
      institutionType: [],
      limit: 10,
      stateSlug: [],
    });
  };

  const onPageChange = (pageNumber: any) => {
    setQueryParams((prev: any) => ({ ...prev, page: pageNumber }));
  };

  const onChange2 = (checkedValues: any) => {
    setQueryParams((prev: any) => ({ ...prev, stateSlug: checkedValues }));
  };
  const queryString = generateQueryString(queryParams);

  const { data: institutionData, isLoading } = useGetAllInstitutionQuery({
    queryString,
  });
  const dataArray = institutionData && institutionData?.data;

  const totalCount = institutionData?.totalCount;

  useEffect(() => {
    const stateString = queryParams.stateSlug.join("_");

    const queryString = generateQueryString({
      totalInstitute: totalCount,
      ...queryParams,
      stateSlug: stateString,
      limit: "",
    });
    router.push(`/institutions/${queryString}`, { scroll: false });
  }, [queryString, totalCount]);

  // State Api
  const { data: stateData, isLoading: isStateLoading } = useGetStateQuery({
    countrySlug: "australia",
  });

  return (
    <>
      <section className="bg-primary lg:pt-[100px]">
        <div className="container">
          <SearchInput
            type={`institutions`}
            classess={{ root: `!text-white` }}
          />
        </div>
      </section>
      <section className="pt-[100px]">
        <div className="container">
          <div className="flex justify-between items-center mb-5 lg:mb-10">
            <div>
              <h1 className="flex text-lg lg:text-[24px] lg:leading-[33px] mb-[6px]">
                {!isLoading ? (
                  <> {totalCount} </>
                ) : (
                  <>
                    <Skeleton className="h-[30px] w-[70px]" />
                  </>
                )}
                Institute were found
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
          <div className="grid grid-cols-[300px_1fr] gap-[30px]">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-primary font-medium mb-0">Filter</p>
                <button>
                  <span className="text-xs" onClick={handleReset}>
                    Reset All
                  </span>
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
                  placeholder="Institute Name"
                  onChange={(e) =>
                    setQueryParams((prev: any) => ({
                      ...prev,
                      instituteName: e.target.value,
                    }))
                  }
                  value={queryParams?.instituteName}
                />
                <Select
                  defaultValue="Institute Type"
                  style={{ width: `100%` }}
                  size="large"
                  onChange={(val) =>
                    setQueryParams((prev: any) => ({
                      ...prev,
                      institutionType: val,
                    }))
                  }
                  options={[
                    { value: "Private", label: "Private" },
                    { value: "Government", label: "Government" },
                  ]}
                />
              </div>
              <div className="w-full h-[1px] bg-[#DBDADE] my-7"></div>
              <p className="text-primary font-medium mb-5">Location</p>

              <Checkbox.Group
                name={`sdfsdfsf`}
                options={stateData}
                value={stateSlugArr ? stateSlugArr : []}
                onChange={onChange2}
                className="flex flex-col gap-[10px]"
              />
              {/* <div className="flex flex-col gap-[10px]">
                <Checkbox onChange={onChange}>
                  Australian Capital Territory (25)
                </Checkbox>
                <Checkbox onChange={onChange}>New South Wales (47)</Checkbox>
                <Checkbox onChange={onChange}>Northern Territory (25)</Checkbox>
                <Checkbox onChange={onChange}>Queensland (25)</Checkbox>
                <Checkbox onChange={onChange}>South Australia (25)</Checkbox>
                <Checkbox onChange={onChange}>Tasmania (25)</Checkbox>
                <Checkbox onChange={onChange}>Victoria (25)</Checkbox>
                <Checkbox onChange={onChange}>Western Australia (25)</Checkbox>
              </div> */}
              {/* <div className="w-full h-[1px] bg-[#DBDADE] my-7"></div>
              <p className="text-primary font-medium mb-5">Tuition Fees</p>
              <div className="flex items-center justify-between mb-4">
                <p className="mb-0 text-sm">$4.5k</p>
                <p className="mb-0 text-sm">$ 80k</p>
              </div>
              <Slider
                range
                min={0}
                max={700000}
                defaultValue={[0, 700000]}
                onChange={(val: any) =>
                  setQueryParams((prev: any) => ({
                    ...prev,
                    feeFrom: val,
                    feeTo: val,
                  }))
                }
                // onAfterChange={(val: any) =>
                //   setQueryParams((prev: any) => ({
                //     ...prev,
                //     feeTo: val,
                //   }))
                // }
                className="search_slider"
              /> */}
            </div>
            {/* <div>
              <Table
                columns={columns}
                dataSource={data}
                size="middle"
                className="border"
              />
            </div> */}
            <div>
              <div className="md:grid lg:grid-cols-[282px_1fr] self-start py-4 px-5 gap-5 lg:gap-[70px] items-center w-full rounded hidden">
                <span className="text-primary text-sm font-semibold">
                  INSTITUTION NAME
                </span>
                <div className="grid md:grid-cols-3 gap-5 lg:gap-8">
                  <span className="text-primary text-sm font-semibold">
                    CRICOS CODE
                  </span>
                  <span className="text-primary text-sm font-semibold">
                    INSTITUTION TYPE
                  </span>
                  <span className="text-primary text-sm font-semibold">
                    WEBSITE
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {dataArray?.map((item: any, i: any) => {
                  return (
                    <div
                      className="grid lg:grid-cols-[282px_1fr] border  self-start py-4 px-5 gap-5 lg:gap-[70px] items-center w-full rounded"
                      key={i}
                    >
                      <Link href={`/institutions/${item?.institutionSlug}`}>
                        <h3 className="text-lg leading-[22px] hover:text-secondary transition-all mb-0 line-clamp-2">
                          {item?.institutionName}
                        </h3>
                      </Link>
                      <div className="grid md:grid-cols-3 gap-5 lg:gap-8">
                        <div className="lg:border-r">
                          <div className="text-primary text-sm font-semibold md:hidden">
                            CRICOS CODE
                          </div>
                          <div>{item?.providerCode}</div>
                        </div>
                        <div className="lg:border-r">
                          <div className="text-primary text-sm font-semibold md:hidden">
                            INSTITUTION TYPE
                          </div>
                          <div>{item?.institutionType}</div>
                        </div>
                        {item?.website && (
                          <div>
                            <div className="text-primary text-sm font-semibold md:hidden">
                              WEBSITE
                            </div>
                            <a
                              href={item?.website}
                              className="hover:text-secondary transition-all break-words	"
                            >
                              {item?.website}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              {totalCount > queryParams.limit ? (
                <div className="mt-6 lg:mt-10">
                  <PaginationComponent
                    onChange={onPageChange}
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

export default InstitutionsLanding;
