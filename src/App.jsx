import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./components/layout/MainLayout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Users = lazy(() => import("./pages/Users"));
const Products = lazy(() => import("./pages/Products"));

function Loading() {
  return <div className="text-white p-8">Loading...</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
          </Route>
        </Routes>
      </Suspense>

      {/* 🟢 Toaster أسفل في المنتصف */}
      <Toaster
        position="bottom-center"
        reverseOrder={false} // الجديد يظهر بعد القديم وليس فوقه
        toastOptions={{
          duration: 3000,
          style: {
            background: "#1f2937",
            color: "#fff",
            textAlign: "center",
          },
        }}
      />
    </BrowserRouter>
  );
}
