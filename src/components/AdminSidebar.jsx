import { NavLink } from "react-router-dom";
import { FiSearch, FiUsers, FiLogOut, FiSettings } from "react-icons/fi";
import {
  HiOutlineViewGrid,
  HiOutlineDocumentReport,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineDownload,
} from "react-icons/hi";
import { FaBoxOpen } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";

const AdminSidebar = () => {
  const navItems = [
    { name: "Dashboard", path: "/admin", icon: <HiOutlineViewGrid /> },
    { name: "Customers", path: "/admin/customers", icon: <FiUsers /> },
    {
      name: "All reports",
      path: "/admin/reports",
      icon: <HiOutlineDocumentReport />,
    },
    {
      name: "Geography",
      path: "/admin/geography",
      icon: <HiOutlineLocationMarker />,
    },
    {
      name: "Conversations",
      path: "/admin/conversations",
      icon: <HiOutlineChatAlt2 />,
    },
    { name: "Export", path: "/admin/export", icon: <HiOutlineDownload /> },
    { name: "Products", path: "/admin/products", icon: <FaBoxOpen /> },
  ];

  return (
    <aside className="h-full w-full bg-white border-r border-gray-200 shadow-md p-4 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 mb-6 px-2 text-xl font-bold text-gray-800">
          <span className="text-orange-500 text-2xl">
            <MdMenuBook />
          </span>
          Book Store
        </div>

        <div className="relative mb-5 px-2">
          <FiSearch className="absolute top-2.5 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-3 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-100"
          />
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? " text-orange-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-8 border-t pt-4 px-2">
        <div className="flex items-center gap-3 mb-3">
          <img
            src="../../public/assets/profile.png"
            alt="Admin"
            className="w-9 h-9 rounded-full"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">Ahsanul Haque</p>
            <span className="text-xs text-white bg-yellow-500 rounded-full px-2 py-0.5">
              Admin
            </span>
          </div>
        </div>
        <NavLink
          to="#"
          className="flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-100 px-3 py-2 rounded-md"
        >
          <FiSettings />
          Settings
        </NavLink>
        <button className="w-full flex items-center gap-2 text-sm text-red-500 hover:bg-red-50 px-3 py-2 rounded-md mt-2">
          <FiLogOut />
          Log out
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
