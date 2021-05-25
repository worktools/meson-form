import React, { FC, useState } from "react";
import { css } from "@emotion/css";
import { lingual } from "../../src/lingual";
import { MesonFormDropdown } from "meson-form";
import { IMesonFieldItem } from "../../src/model/types";
import DataPreview from "kits/data-preview";
import { DocDemo, DocSnippet } from "@worktools/doc-frame";
import { getLink } from "util/link";
import { Space } from "@worktools/flex-styles";

let DropdownPage: FC<{}> = (props) => {
  let [form, setForm] = useState({});

  let formItems: IMesonFieldItem[] = [
    {
      type: "input",
      name: "demo",
      label: "DEMO",
    },
    {
      type: "input",
      name: "demo",
      label: "DEMO",
    },
  ];

  return (
    <div className={styleContainer}>
      <DocDemo title="Demo of form in dropdown area" link={getLink("modal.tsx")}>
        <DocSnippet code={codeDropdown} />

        <div className={styleArea}>
          <MesonFormDropdown
            title={"Settings"}
            hideClose
            items={formItems}
            initialValue={form}
            labelClassName={styleLabel}
            onSubmit={(form) => {
              setForm(form);
            }}
            width={200}
          >
            Click to see dropdown
          </MesonFormDropdown>
        </div>
        <div>
          <DataPreview data={form} />
        </div>
        <Space height={40} />
      </DocDemo>
    </div>
  );
};

export default DropdownPage;

let styleContainer = css``;

let styleLabel = css`
  min-width: 60px;
`;

let styleArea = css`
  padding: 20px;
`;

let codeDropdown = `
// let formItems = ...

<MesonFormDropdown
  title={"Settings"}
  hideClose
  items={formItems}
  initialValue={form}
  labelClassName={styleLabel}
  onSubmit={(form) => {
    setForm(form);
  }}
  width={200}
>
  Click to see dropdown
</MesonFormDropdown>
`;
