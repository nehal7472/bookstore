import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
const AdminLayout = () => {
  return (
    <div className="flex flex-col  md:flex-row h-auto md:h-screen overflow-hidden">
      <div className="w-full md:w-64 flex-shrink-0">
        <AdminSidebar />
      </div>
      <div className="flex-1 flex justify-center items-start p-4 ">
        <div className="w-full max-w-[1200px] h-full bg-white  rounded-xl shadow-md border border-gray-200  overflow-hidden flex flex-col">
          <div className="flex-1 overflow-y-auto px-4 py-4 sm:p-6 md:py-8 md:px-16">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
