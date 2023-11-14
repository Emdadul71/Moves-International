"use client";
import { Collapse, CollapseProps, theme } from "antd";
import React, { CSSProperties } from "react";

const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: "How to get a scholarship to study abroad?",
    children: (
      <p className="text-lg font-normal">
        To apply for or avail a scholarship to study abroad, students have to
        visit the particular university’s website and fill in the necessary
        information. They will also be required to attach their academic
        documents as proof.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "2",
    label:
      "How to get an education loan for abroad studies without collateral?",
    children: (
      <p className="text-lg font-normal">
        To apply for or avail a scholarship to study abroad, students have to
        visit the particular university’s website and fill in the necessary
        information. They will also be required to attach their academic
        documents as proof.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "3",
    label: "How can I study abroad for free?",
    children: (
      <p className="text-lg font-normal">
        To apply for or avail a scholarship to study abroad, students have to
        visit the particular university’s website and fill in the necessary
        information. They will also be required to attach their academic
        documents as proof.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "4",
    label: "Is studying abroad worth it?",
    children: (
      <p className="text-lg font-normal">
        To apply for or avail a scholarship to study abroad, students have to
        visit the particular university’s website and fill in the necessary
        information. They will also be required to attach their academic
        documents as proof.
      </p>
    ),
    style: panelStyle,
  },
  {
    key: "5",
    label: "How many students go abroad to study from Bangladesh?",
    children: (
      <p className="text-lg font-normal">
        To apply for or avail a scholarship to study abroad, students have to
        visit the particular university’s website and fill in the necessary
        information. They will also be required to attach their academic
        documents as proof.
      </p>
    ),
    style: panelStyle,
  },
];
const SectionFaq = () => {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 16,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <section className="pt-5 lg:pt-[50px]">
      <div className="container">
        <div className="max-w-[625px] mx-auto text-center mb-5 lg:mb-[50px]">
          <h2>Frequently Asked Questions to study abroad</h2>
        </div>

        <div className="max-w-[1170px] mx-auto">
          <Collapse
            defaultActiveKey={["1"]}
            onChange={onChange}
            expandIconPosition="end"
            accordion={true}
            style={{ background: token.colorBgContainer }}
            items={getItems(panelStyle)}
            bordered={false}
            className="registration_process"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionFaq;
