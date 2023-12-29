import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "../node_modules/antd/dist/reset.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
