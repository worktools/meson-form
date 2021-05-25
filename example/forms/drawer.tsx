import React, { FC, useState } from "react";
import { css } from "@emotion/css";
import { lingual } from "../../src/lingual";
import { MesonFormDrawer } from "meson-form";
import { IMesonFieldItem } from "../../src/model/types";
import Button from "antd/lib/button";
import DataPreview from "kits/data-preview";
import { DocDemo, DocSnippet } from "@worktools/doc-frame";
import { getLink } from "util/link";

let DrawerPage: FC<{}> = (props) => {
  let [formVisible, setFormVisible] = useState(false);

  let [form, setForm] = useState({});

  let formItems: IMesonFieldItem[] = [
    {
      type: "input",
      name: "demo",
      label: "DEMO",
    },
  ];

  return (
    <div className={styleContainer}>
      <DocDemo title="Demo for drawer" link={getLink("drawer.tsx")}>
        <DocSnippet code={codeDrawer} />

        <div className={styleBoxArea}>
          <div>
            <Button
              onClick={() => {
                setFormVisible(true);
              }}
            >
              Open Form Drawer
            </Button>
          </div>
        </div>

        <div>
          <DataPreview data={form} />
        </div>
      </DocDemo>
      <MesonFormDrawer
        title={"DEMO form in drawer"}
        visible={formVisible}
        width={480}
        onClose={() => {
          setFormVisible(false);
        }}
        items={formItems}
        initialValue={form}
        onSubmit={(form) => {
          setFormVisible(false);
          setForm(form);
        }}
      />
    </div>
  );
};

export default DrawerPage;

let styleContainer = css``;

let styleBoxArea = css`
  padding: 20px;
`;

let styleHeader = css`
  background-color: rgb(28, 63, 118);
  color: white;
  height: 120px;
`;

let codeDrawer = `
// let formItems = ...

<MesonFormDrawer
  title={"DEMO form in drawer"}
  visible={formVisible}
  width={480}
  onClose={() => {
    setFormVisible(false);
  }}
  items={formItems}
  initialValue={form}
  onSubmit={(form) => {
    setFormVisible(false);
    setForm(form);
  }}
/>
`;
