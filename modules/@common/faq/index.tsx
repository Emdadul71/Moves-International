"use client";
import { htmlParse } from "@/helpers/utils";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Faq = ({ data }: any) => {
  const [animationParent] = useAutoAnimate();
  const [selected, setSelected] = useState(null);
  const toggle = (i: any) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <section className="pt-[80px]">
      <div className="container">
        {data?.faq?.length > 0 ? (
          <>
            <div className="max-w-[625px] mx-auto">
              <h2 className="text-center mb-10">
                Frequently Asked Questions to study abroad
              </h2>
            </div>

            <div className="max-w-[900px] mx-auto flex flex-col gap-[10px]">
              {data?.faq?.map((item: any, i: any) => {
                return (
                  <div key={i} className="bg-[#FEEFE7] relative">
                    <button
                      onClick={() => toggle(i)}
                      className="flex items-center justify-between w-full px-5 py-4 z-10 font-medium lg:font-normal text-base lg:text-[20px]"
                    >
                      <span className="text-left">{item.question}</span>
                      {selected == i ? (
                        <FiChevronUp className="shrink-0" />
                      ) : (
                        <FiChevronDown className="shrink-0" />
                      )}
                    </button>

                    <div ref={animationParent}>
                      {selected == i && (
                        <div className="p-4 pt-0 block text-left">
                          {htmlParse(item.answer)}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default Faq;
