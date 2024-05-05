import { Layout, theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./pages/LandingPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AppHeader } from "./layoutComponents/AppHeader";
import { AppFooter } from "./layoutComponents/AppFooter";
import { AboutPage } from "./pages/AboutPage";
import { PricingPage } from "./pages/PricingPage";
import { ContactPage } from "./pages/ContactPage";
import { StepWorkflowPage } from "./pages/StepWorkflowPage";

function App() {
  const Wrapper = () => {
    const { token } = theme.useToken();
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <AppHeader />
        <Content
          style={{
            background: token.colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
        <AppFooter />
      </Layout>
    );
  };

  const router = createBrowserRouter([
    {
      element: <Wrapper />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/pricing",
          element: <PricingPage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/contact",
          element: <ContactPage />,
        },
        {
          path: "/products/step-workflow",
          element: <StepWorkflowPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
