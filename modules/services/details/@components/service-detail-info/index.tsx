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
                <div className="bg-[#FEEFE7] text-secondary px-4 py-[6px] rounded-full">
                  {data?.path}
                </div>
              </div>
            </>
          ) : null}

          <h2 className=" mb-0">{detailInfoData?.title}</h2>
          <div>{htmlParse(detailInfoData?.description)}</div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailInfo;
