import React from "react";

const MigrationDetailInfo = ({ data }: any) => {
  const Breadcrumb = data?.slug?.split("-");
  const finalBreadcrumb = Breadcrumb?.join(" ");

  const detailInfoData = data?.detailInfo;
  return (
    <section>
      <div className="container">
        <div className="flex flex-col gap-4 max-w-[830px] mx-auto w-full">
          <div className="flex ">
            <div className="bg-[#F7F9F9] px-4 py-[6px] rounded-full">
              {finalBreadcrumb}
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