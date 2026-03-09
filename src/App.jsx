import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./components/layout/MainLayout";
import Login from "./pages/Login";

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
          {/* اللوجين خارج اللياوت */}
          <Route path="/login" element={<Login />} />

          {/* كل صفحات الأدمن جوه MainLayout */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="products" element={<Products />} />
          </Route>

          {/* متضيفش أي Route path="*" بيحوّل على /login */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
