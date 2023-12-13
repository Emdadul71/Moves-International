import React from "react";

const TeamDetailsHero = ({ data }: any) => {
  return (
    <section className="bg-primary pt-5 lg:pt-[100px]">
      <div className="container">
        <div className="max-w-[1180px] ml-auto w-full">
          <h2 className="text-white">{data?.name}</h2>
          {data?.designation && (
            <div className="border-l border-l-[4px] border-l-secondary pl-4 ">
              <p className="text-white font-medium">
                {data?.designation?.name}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamDetailsHero;
