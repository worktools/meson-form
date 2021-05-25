import React, { FC } from "react";
import { css, cx } from "@emotion/css";
import { row } from "@worktools/flex-styles";

let DataPreview: FC<{
  data: any;
}> = (props) => {
  return (
    <div className={cx(row, styleContainer)}>
      <div className={styleLabel}>Submitted</div>
      <pre>{JSON.stringify(props.data, null, 2)}</pre>
    </div>
  );
};

export default DataPreview;

let styleContainer = css`
  padding: 16px;
`;

let styleLabel = css`
  margin-right: 16px;
`;
