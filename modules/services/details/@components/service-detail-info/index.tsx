import { htmlParse } from "@/helpers/utils";
import React from "react";

const ServiceDetailInfo = ({ data }: any) => {
  const detailInfoData = data?.detailInfo;
  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-4 max-w-[830px] mx-auto w-full">
          {data?.path ? (
            <>
              <div className="flex ">
                <div className="bg-[#F7F9F9] px-4 py-[6px] rounded-full">
                  {data?.path}
                </div>
              </div>
            </>
          ) : null}

          <h2 className="h3 mb-0 lg:leading-[48px]">{detailInfoData?.title}</h2>
          <div>{htmlParse(detailInfoData?.description)}</div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailInfo;
