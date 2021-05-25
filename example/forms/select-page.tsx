import { css, cx } from "@emotion/css";
import React, { FC, useState } from "react";
import { IMesonCustomField, IMesonFieldItem, IMesonSelectItem } from "../../src/model/types";
import { MesonForm } from "../../src/form";
import DataPreview from "kits/data-preview";
import { DocDemo, DocSnippet, DocBlock } from "@worktools/doc-frame";
import { getLink } from "util/link";

let booleanOptions: IMesonSelectItem[] = [
  { value: true, display: "True" },
  { value: false, display: "False" },
];

const addressOptions: IMesonSelectItem[] = [
  {
    display: "上海",
    value: "shanghai",
  },
  {
    display: "北京",
    value: "beijing",
  },
];

let items: IMesonFieldItem[] = [
  {
    type: "select",
    label: "antd 风格",
    name: "status",
    options: booleanOptions,
    translateNonStringvalue: true,
    allowClear: true,
    placeholder: "请选择",
  },
  {
    type: "dropdown-select",
    label: "平台 风格",
    name: "address",
    options: addressOptions,
    allowClear: true,
    placeholder: "请选择",
    selectProps: {
      showSearch: true,
      searchPlaceholder: "TODO",
    },
  },
];

let itemsOfDisabled: IMesonFieldItem[] = [
  {
    type: "select",
    label: "BOOLEAN Disabled",
    disabled: true,
    name: "status",
    options: booleanOptions,
    translateNonStringvalue: true,
    allowClear: true,
  },
];

let SelectPage: FC<{}> = (props) => {
  let [form, setForm] = useState({});

  return (
    <div className={cx(styleContainer)}>
      <DocDemo title="Demo for select" link={getLink("select-page.tsx")} className={styleNarrow}>
        <MesonForm
          initialValue={form}
          items={items}
          onSubmit={(form) => {
            setForm(form);
          }}
        />
        <div>
          <DataPreview data={form} />
        </div>

        <DocSnippet code={codeSelect} />
      </DocDemo>

      <DocDemo title="Demo for select" link={getLink("select-page.tsx")} className={styleNarrow}>
        <DocBlock content={contentDisabled} />
        <DocSnippet code={codeDisabled} />

        <MesonForm
          initialValue={{}}
          items={itemsOfDisabled}
          onSubmit={(form) => {
            setForm(form);
          }}
        />
      </DocDemo>
    </div>
  );
};

export default SelectPage;

let styleContainer = css``;

let codeSelect = `
let booleanOptions: IMesonSelectItem[] = [
  { value: true, display: "True" },
  { value: false, display: "False" }
];

let items: IMesonFieldItem[] = [
  {
    type: 'select',
    label: "antd 风格",
    name: "status",
    options: booleanOptions,
    translateNonStringvalue: true,
    allowClear: true,
  },
  {
    type: "dropdown-select",
    label: "平台 风格",
    name: "address",
    options: addressOptions,
    allowClear: true,
  },
];

<MesonForm
  initialValue={{}}
  items={items}
  onSubmit={(form) => {
    setForm(form);
  }}
/>
`;

let codeDisabled = `
let items: IMesonFieldItem[] = [
  {
    type: 'select',
    label: "BOOLEAN",
    name: "status",
    options: booleanOptions,
    translateNonStringvalue: true,
    allowClear: true,

    disabled: true,
  },
];
`;

let styleNarrow = css`
  width: 480px;
`;

let contentDisabled = "Select 支持 `disabled` 支持 `allowClear` 属性.";
