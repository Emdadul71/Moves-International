import React from "react";
import WhoUseCard from "@/modules/@common/who-use-card";

const WhoUse = ({ data }: any) => {
  const whoUseData = data && data?.whoUse;
  console.log("who", data);

  return (
    <section className="pb-0">
      <div className="container">
        <div className="max-w-[790px] w-full mx-auto mb-5 lg:mb-[60px]">
          <h2 className="text-center mb-5">{whoUseData?.title}</h2>
          {whoUseData?.shortDesc ? (
            <p className="text-center text-xl">{whoUseData?.shortDesc}</p>
          ) : null}
        </div>
        <div className="grid lg:grid-cols-3 gap-[30px] mb-5 lg:mb-10">
          {whoUseData?.useCradData?.map((item: any, i: any) => {
            const isFour = i == 4;
            return (
              <>
                <WhoUseCard key={i} data={item} />
                {isFour ? (
                  <div className="flex justify-center items-center ">
                    <p className="mb-0 text-lg text-primary">
                      RPL is a valuable tool for anyone who has developed
                      competencies through practical experience and wants to
                      receive formal recognition without undergoing additional
                      training or education. It’s especially beneficial for
                      those aiming to meet specific industry standards or
                      seeking to validate their expertise for career
                      progression.
                    </p>
                  </div>
                ) : null}
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoUse;
