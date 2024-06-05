import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ConfigProvider
    theme={{
      components: {
        Input: {
          colorBgContainer: "rgb(22 20 39 / 0.5)",
          hoverBorderColor: "rgb(40 38 55 / 1)",
          activeBorderColor: "rgb(141 140 149 / 1)",
          colorText: "white",
          colorTextPlaceholder: "rgb(141 140 149 / 1)",
          colorBorder: "rgb(40 38 55 / 1)",
        },
        Select: {
          optionSelectedColor: "white",
          optionSelectedBg: "rgb(70 69 83 / 0.5)",
          optionActiveBg: "rgb(70 69 83 / 0.5)",
          colorText: "white",
          colorBgContainer: "rgb(22 20 39 / 0.5)",
          colorPrimaryHover: "rgb(40 38 55 / 1)",
          colorBorder: "rgb(40 38 55 / 1)",
          colorPrimary: "rgb(141 140 149 / 1)",
        },
      },
      token: {
        colorPrimary: "#4312e5",
        boxShadow: "0 30px 60px 0 rgba(90, 116, 148, 0.15)",
        boxShadowSecondary: "0 30px 60px 0 rgba(90, 116, 148, 0.15)",
        colorBorder: "rgba(90, 116, 148, 0.15)",
        colorBorderSecondary: "rgba(90, 116, 148, 0.1)",
        colorFill: "rgb(203 213 225 / 0.6)",
        colorFillSecondary: "rgb(226 232 240 / 0.6)",
        colorFillTertiary: "rgb(241 245 249 / 0.6)",
        colorFillQuaternary: "rgb(248 250 252 / 0.6)",
        colorSuccess: "rgb(40 205 65 / 1)",
        colorError: "rgb(255 59 48 / 1)",
        colorInfo: "rgb(0 122 255 / 1)",
        colorWarning: "rgb(255 204 0 / 1)",
        colorText: "rgb(30 41 59 / 1)",
        colorTextBase: "rgb(30 41 59 / 1)",
      },
    }}
  >
    <App />
  </ConfigProvider>
);
