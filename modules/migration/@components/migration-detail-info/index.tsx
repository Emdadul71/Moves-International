import React from "react";

const MigrationDetailInfo = ({ data }: any) => {
  const detailInfoData = data?.detailInfo;
  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-4 max-w-[830px] mx-auto w-full">
          <div className="flex ">
            <div className="bg-[#FEEFE7] text-secondary px-4 py-[6px] rounded-full">
              {data?.path}
            </div>
          </div>
          <h2 className="h3 mb-0 lg:leading-[48px]">{detailInfoData?.title}</h2>
          <p>{detailInfoData?.description}</p>
        </div>
      </div>
    </section>
  );
};

export default MigrationDetailInfo;
