import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Spin } from "antd";

const LoginLazy = React.lazy(() => import("./component/Login"));
const ComponentLayoutLazy = React.lazy(() => import("./component/Layout"));

const ProtectedRoute = ({ Element }: { Element: React.FC }) => {
  return localStorage.getItem("token") ? <Element /> : <Navigate to="/" />;
};

const App = () => {
  return (
    <Suspense
      fallback={
        <div
          style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Spin tip="Loading" size="large">
            <div className="content" />
          </Spin>
        </div>
      }
    >
      <Routes>
        <Route path="/workflow" element={<ProtectedRoute Element={ComponentLayoutLazy} />} />
        <Route path="/" element={<LoginLazy />} />
      </Routes>
    </Suspense>
  );
};

export default App;
