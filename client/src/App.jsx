import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "./components/auth/layout";
import { AuthLogin } from "./pages/auth/login";
import { AuthRegister } from "./pages/auth/register";
import AdminLayout from "./components/admin/layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header Comp</h1>

      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
