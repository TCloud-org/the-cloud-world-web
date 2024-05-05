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
      token: {
        colorPrimary: "#4312e5",
        boxShadow: "0 30px 60px 0 rgba(90, 116, 148, 0.15)",
        boxShadowSecondary: "0 30px 60px 0 rgba(90, 116, 148, 0.15)",
      },
    }}
  >
    <App />
  </ConfigProvider>
);
