import { setOpenConfigurator, useMaterialTailwindController } from "@/context";
import routes from "@/routes";
import { DashboardNavbar, Footer } from "@/widgets/layout";
import SidebarWithBurgerMenu from "@/widgets/layout/sidenav-cpi";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton, Typography } from "@material-tailwind/react";
import { Route, Routes } from "react-router-dom";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <SidebarWithBurgerMenu routes={routes} />
      <div className="p-4 xl:mx-10">
        <div className="flex flex-row gap-3 items-center">
          <img
            src="https://cp.co.id/wp-content/uploads/2015/09/logo-cp.png"
            alt="brand"
            className="h-12 w-12"
          />
          <Typography variant="h5" className="font-bold">
            PT Charoen Pokphand Indonesia Tbk. | Demak
          </Typography>
        </div>
        <DashboardNavbar />
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
