"use client";
import { Select, Slider, Table } from "antd";
import Checkbox, { CheckboxChangeEvent } from "antd/es/checkbox";
import { ColumnsType } from "antd/es/table";
import React from "react";
import SearchInput from "../@common/search/search-input";
import Link from "next/link";
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};
interface DataType {
  key: React.Key;
  instituteName: string;
  state: string;
}
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

const Institutions = () => {
  return (
    <>
      <section className="bg-primary lg:pt-[100px]">
        <div className="container">
          <SearchInput />
        </div>
      </section>
      <section className="pt-[100px]">
        <div className="container">
          <div className="flex justify-between items-center mb-5 lg:mb-10">
            <div>
              <h1 className="lg:text-[24px] lg:leading-[33px] mb-[6px]">
                2401 Institute were found.
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
                  <span className="text-xs">Reset All</span>
                </button>
              </div>
              <div className="w-full h-[1px] bg-[#DBDADE] my-7"></div>
              <p className="text-primary font-medium mb-5">Search Criteria</p>
              <div className="flex flex-col gap-4">
                <Select
                  defaultValue="Popularity"
                  style={{ width: `100%` }}
                  size="large"
                  onChange={handleChange}
                  options={[
                    { value: "Popularity", label: "Popularity" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                  ]}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className="border border-[#d9d9d9] focus:outline-none py-2 px-2"
                  placeholder="Institute Name"
                />
                <Select
                  defaultValue="Institute Name"
                  style={{ width: `100%` }}
                  size="large"
                  onChange={handleChange}
                  options={[
                    { value: "Popularity", label: "Popularity" },
                    { value: "lucy", label: "Lucy" },
                    { value: "Yiminghe", label: "yiminghe" },
                  ]}
                />
              </div>
              <div className="w-full h-[1px] bg-[#DBDADE] my-7"></div>
              <p className="text-primary font-medium mb-5">Location</p>
              <div className="flex flex-col gap-[10px]">
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
              </div>
              <div className="w-full h-[1px] bg-[#DBDADE] my-7"></div>
              <p className="text-primary font-medium mb-5">Tuition Fees</p>
              <div className="flex items-center justify-between mb-4">
                <p className="mb-0 text-sm">$4.5k</p>
                <p className="mb-0 text-sm">$ 80k</p>
              </div>
              <Slider range defaultValue={[20, 50]} className="search_slider" />
            </div>
            <div>
              <Table
                columns={columns}
                dataSource={data}
                size="middle"
                className="border"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Institutions;
