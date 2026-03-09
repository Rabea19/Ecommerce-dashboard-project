import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Package } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white p-6 space-y-6">
      <h2 className="text-2xl font-bold">Admin Panel</h2>

      <nav className="space-y-2">
        <SidebarLink
          to="/"
          icon={<LayoutDashboard size={18} />}
          label="Dashboard"
        />
        <SidebarLink to="/users" icon={<Users size={18} />} label="Users" />
        <SidebarLink
          to="/products"
          icon={<Package size={18} />}
          label="Products"
        />
      </nav>
    </div>
  );
}

function SidebarLink({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 p-3 rounded-lg transition ${
          isActive ? "bg-blue-600" : "hover:bg-gray-800"
        }`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}
