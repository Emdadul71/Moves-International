import { htmlParse } from "@/helpers/utils";
import React from "react";

const MoreInfo = ({ data }: any) => {
  return (
    <section>
      <div className="container">{htmlParse(data?.moreInfo)}</div>
    </section>
  );
};

export default MoreInfo;
