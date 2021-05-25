import React, { useState, FC } from "react";
import { css, cx } from "@emotion/css";
import { column, row, fullscreen, expand } from "@worktools/flex-styles";
import { HashLink } from "@worktools/ruled-router/lib/dom";
import { genRouter, GenRouterTypeTree } from "controller/generated-router";
import FormBasic from "forms/basic";
import DraftForm from "forms/draft";
import ModalPage from "forms/modal";
import SelectPage from "forms/select-page";
import ValidationPage from "forms/validation";
import CustomPage from "forms/custom";
import AutoSavePage from "forms/auto-save";
import WrapMesonCore from "forms/wrap-meson-core";
import ModifyOnChange from "forms/modify-on-change";
import SwitchPage from "forms/switch";
import InlineFormPage from "forms/inline-form";
import FormBlankLabel from "forms/blank-label";
import DrawerPage from "forms/drawer";
import CustomMultiplePage from "forms/custom-multiple";
import GroupPage from "forms/group";
import DecorativePage from "forms/decorative";
import NoLabelPage from "forms/no-label";
import { DocSidebar, ISidebarEntry } from "@worktools/doc-frame";
import { findRouteTarget } from "@worktools/ruled-router/lib/dom";
import DropdownPage from "forms/dropdown";
import LoginValidations from "forms/login-validations";
import FormUseItems from "forms/use-items";
import FormRadio from "forms/radio";
import PageFooterButtons from "./footer-buttons";
import ExampleDatePicker from "forms/date-picker";
import ExampleTreeSelect from "forms/tree-select";
import ExampleFilterForm from "forms/filter-form";
import FormInputSuffix from "forms/input-suffix";
import CustomThemePage from "./custom-theme";
import PreviewMode from "./preview-mode";
import FormAsyncValidation from "forms/async-validation";
import FormRegisteredRenderer from "forms/registered-renderer";
import PageDebouncedInput from "./debounced-input";

let items: ISidebarEntry[] = [
  {
    title: "Basic",
    cnTitle: "基础",
    path: genRouter.home.name,
  },
  {
    title: "Use Fields from Hooks API",
    cnTitle: "Hooks API 用法",
    path: genRouter.useItems.name,
  },
  {
    title: "Modal",
    cnTitle: "弹出层",
    path: genRouter.modal.name,
  },
  {
    title: "Select",
    cnTitle: "下拉选择",
    path: genRouter.select.name,
  },
  {
    title: "Draft",
    cnTitle: "混合",
    path: genRouter.draft.name,
  },
  {
    title: "Drawer",
    cnTitle: "抽屉",
    path: genRouter.drawer.name,
  },
  {
    title: "Dropdown",
    cnTitle: "下拉菜单",
    path: genRouter.dropdown.name,
  },
  {
    title: "Validation",
    cnTitle: "校验",
    path: genRouter.validation.name,
  },
  {
    title: "Login validations",
    cnTitle: "登录相关校验",
    path: genRouter.loginValidations.name,
  },
  {
    title: "Custom",
    cnTitle: "自定义",
    path: genRouter.custom.name,
  },
  {
    title: "Custom multiple",
    cnTitle: "多项自定义",
    path: genRouter.customMultiple.name,
  },
  {
    title: "Auto save",
    cnTitle: "自动保存",
    path: genRouter.autoSave.name,
  },
  {
    title: "Use meson core",
    cnTitle: "使用 Meson code",
    path: genRouter.wrapMesonCore.name,
  },
  {
    title: "Modify on change",
    cnTitle: "修改的钩子",
    path: genRouter.modifyOnChange.name,
  },
  {
    title: "Switch",
    cnTitle: "开关",
    path: genRouter.switch.name,
  },
  {
    title: "Inline form",
    cnTitle: "行内模式",
    path: genRouter.inlineForm.name,
  },
  {
    title: "Filter form",
    cnTitle: "选择功能",
    path: genRouter.filterForm.name,
  },
  {
    title: "Blank label",
    cnTitle: "空白标签",
    path: genRouter.blankLabel.name,
  },
  {
    title: "Group",
    cnTitle: "分组",
    path: genRouter.group.name,
  },
  {
    title: "Decorative",
    cnTitle: "自定义穿插 Node",
    path: genRouter.decorative.name,
  },
  {
    title: "No label",
    cnTitle: "无 Label",
    path: genRouter.noLabel.name,
  },
  {
    title: "Radio",
    cnTitle: "单选",
    path: genRouter.radio.name,
  },
  {
    title: "Date Picker",
    cnTitle: "日期",
    path: genRouter.datePicker.name,
  },
  {
    title: "Tree Select",
    cnTitle: "树形选择",
    path: genRouter.treeSelect.name,
  },
  {
    title: "Footer buttons",
    cnTitle: "提交按钮",
    path: genRouter.footerButtons.name,
  },
  {
    title: "Input suffix",
    cnTitle: "输入框后缀",
    path: genRouter.inputSuffix.name,
  },
  {
    title: "Custom theme",
    cnTitle: "定制主题",
    path: genRouter.customTheme.name,
  },
  {
    title: "Async validation",
    cnTitle: "异步校验",
    path: genRouter.asyncValidation.name,
  },
  {
    title: "Registered renderer",
    cnTitle: "注册渲染器",
    path: genRouter.registeredRenderer.name,
  },
  {
    title: "Debounced input",
    path: genRouter.debouncedInput.name,
  },
];

let onSwitchPage = (path: string) => {
  let target = findRouteTarget(genRouter, path);
  if (target != null) {
    target.go();
  }
};

let Container: FC<{ router: GenRouterTypeTree["next"] }> = (props) => {
  let renderChild = () => {
    switch (props.router.name) {
      case "home":
        return <FormBasic />;
      case "draft":
        return <DraftForm />;
      case "modal":
        return <ModalPage />;
      case "drawer":
        return <DrawerPage />;
      case "select":
        return <SelectPage />;
      case "validation":
        return <ValidationPage />;
      case "login-validations":
        return <LoginValidations />;
      case "custom":
        return <CustomPage />;
      case "custom-multiple":
        return <CustomMultiplePage />;
      case "auto-save":
        return <AutoSavePage />;
      case "wrap-meson-core":
        return <WrapMesonCore />;
      case "modify-on-change":
        return <ModifyOnChange />;
      case "switch":
        return <SwitchPage />;
      case "inline-form":
        return <InlineFormPage />;
      case "blank-label":
        return <FormBlankLabel />;
      case "group":
        return <GroupPage />;
      case "dropdown":
        return <DropdownPage />;
      case "decorative":
        return <DecorativePage />;
      case "no-label":
        return <NoLabelPage />;
      case "use-items":
        return <FormUseItems />;
      case "radio":
        return <FormRadio />;
      case "footer-buttons":
        return <PageFooterButtons />;
      case "date-picker":
        return <ExampleDatePicker />;
      case "tree-select":
        return <ExampleTreeSelect />;
      case "filter-form":
        return <ExampleFilterForm />;
      case "input-suffix":
        return <FormInputSuffix />;
      case "custom-theme":
        return <CustomThemePage />;
      case "async-validation":
        return <FormAsyncValidation />;
      case "registered-renderer":
        return <FormRegisteredRenderer />;
      case "debounced-input":
        return <PageDebouncedInput />;
      default:
        return <FormBasic />;
    }
  };

  if (props.router.name === "preview-mode") {
    return <PreviewMode />;
  }

  return (
    <div className={cx(fullscreen, row, styleContainer)}>
      <DocSidebar
        title="Meson Form"
        currentPath={props.router.name}
        onSwitch={(item) => {
          onSwitchPage(item.path);
        }}
        items={items}
      />

      <div className={cx(expand, stylePage)}>{renderChild()}</div>
    </div>
  );
};

export default Container;

const styleContainer = css``;

let stylePage = css`
  padding: 40px;
`;
