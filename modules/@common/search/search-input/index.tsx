import { Modal } from "antd";
import { log } from "console";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

interface propTypes {
  classess?: {
    root?: any;
  };
  type?: any;
}
const SearchInput = ({ type, classess }: propTypes) => {
  const [searchType, setSearchType] = useState(type ? type : "courses");
  const [value, setValue] = useState("");

  // similar behavior as an HTTP redirect
  // window.location.replace("http://stackoverflow.com");

  // similar behavior as clicking on a link
  // window.location.href = "http://stackoverflow.com";

  const handleSubmit = () => {
    if (value) {
      window.location.replace(
        searchType == "courses"
          ? `/courses?courseName=${value}`
          : `/institutions?instituteName=${value}`
      );
    } else {
      window.location.replace(
        searchType == "courses" ? `/courses` : `/institutions`
      );
    }
  };

  return (
    <>
      <div className="max-w-[850px] w-full mx-auto">
        <div className="flex justify-center items-center gap-[30px] max-w-[282px] mx-auto mb-4">
          <div
            className={`cursor-pointer text-base py-2 border-b   ${
              searchType == `courses`
                ? ` font-medium border-[#F86011]  transition-[border] duration-500`
                : ` border-transparent`
            } ${classess?.root ? classess.root : ``}`}
            onClick={() => setSearchType("courses")}
          >
            Courses Search
          </div>
          <div
            className={`cursor-pointer text-base py-2 border-b   ${
              searchType == `institutions`
                ? `text-primary  font-medium border-[#F86011] transition-[border] duration-500 whitespace-nowrap`
                : `border-transparent`
            } ${classess?.root ? classess.root : ``}`}
            onClick={() => setSearchType("institutions")}
          >
            Institutions Search
          </div>
        </div>

        <div className="grid grid-cols-[4fr_.8fr] gap-[20px]">
          <div>
            {searchType == `courses` && (
              <div className="max-w-[850px] mx-auto w-full relative">
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-full bg-[#F4FBFF] py-4 pr-8 pl-12 rounded-md focus:outline-none "
                  placeholder="Search Courses"
                  onChange={(e) => setValue(e.target.value)}
                  autoComplete=""
                  value={value}
                />
                <CiSearch className="text-lg absolute top-[50%] left-[20px] -translate-y-[50%]" />
              </div>
            )}
            {searchType == `institutions` && (
              <div className="max-w-[850px] mx-auto w-full relative">
                <input
                  type="text"
                  name=""
                  id=""
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full bg-[#F4FBFF] py-4 pr-8 pl-12 rounded-md focus:outline-none "
                  placeholder="Search Institutions"
                  value={value}
                  autoComplete=""
                />
                <CiSearch className="text-lg absolute top-[50%] left-[20px] -translate-y-[50%]" />
              </div>
            )}
          </div>
          <button
            className="btn btn-secondary rounded-md px-5"
            type="submit"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchInput;
