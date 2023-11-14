import { Modal, Tabs, TabsProps } from "antd";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";
import SearchInput from "../search-input";
interface propTypes {
  classess?: {
    root?: any;
  };
}
const SearchIcon = ({ classess }: propTypes) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("Course");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Tab 1",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Tab 2",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
  ];
  return (
    <>
      <BiSearch
        className="text-3xl cursor-pointer p-1"
        onClick={() => setIsModalOpen(true)}
      />
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="global_search"
        footer={false}
      >
        <div className="flex flex-col justify-center items-center h-full -mt-[80px] gap-[26px]">
          <div className="max-w-[770px] mx-auto">
            <h1 className="lg:text-[42px] text-center lg:leading-[55px]">
              Welcome to Moves International
            </h1>
            <p className="mb-0 text-center text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue
              vulputate orci tristique cras nec. Nec sem cursus mattis eu
              commodo mattis arcu lectus. Proin molestie.
            </p>
          </div>
          {/* <div className="flex items-center gap-[30px] max-w-[265px] mx-auto">
            <div
              className={`cursor-pointer text-base py-2 border-b ${
                search == `Course`
                  ? `text-primary  font-medium border-[#F86011]  transition-[border] duration-500`
                  : ` border-transparent`
              }`}
              onClick={() => setSearch("Course")}
            >
              Course Search
            </div>
            <div
              className={`cursor-pointer text-base py-2 border-b ${
                search == `Institution`
                  ? `text-primary  font-medium border-[#F86011] transition-[border] duration-500`
                  : `border-transparent`
              }`}
              onClick={() => setSearch("Institution")}
            >
              Institution Search
            </div>
          </div>

          <div className="max-w-[850px] w-full grid grid-cols-[4fr_.8fr] gap-[20px]">
            <div>
              {search == `Course` && (
                <div className="max-w-[850px] mx-auto w-full relative">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full bg-[#F4FBFF] py-4 pr-8 pl-12 rounded-md focus:outline-none "
                    placeholder="Search Here"
                  />
                  <CiSearch className="text-lg absolute top-[50%] left-[20px] -translate-y-[50%]" />
                </div>
              )}
              {search == `Institution` && (
                <div className="max-w-[850px] mx-auto w-full relative">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full bg-[#F4FBFF] py-4 pr-8 pl-12 rounded-md focus:outline-none "
                    placeholder="Search Here"
                  />
                  <CiSearch className="text-lg absolute top-[50%] left-[20px] -translate-y-[50%]" />
                </div>
              )}
            </div>
            <button className="btn btn-secondary rounded-md px-5">
              Search
            </button>
          </div> */}
          <SearchInput classess={{ root: `text-primary` }} />
        </div>
      </Modal>
    </>
  );
};

export default SearchIcon;
