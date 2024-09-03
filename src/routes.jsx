import { Logsheet, Monitoring } from "@/pages/dashboard";
import {
  ComputerDesktopIcon,
  PowerIcon,
  TableCellsIcon
} from "@heroicons/react/24/solid";

import { SignIn } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <ComputerDesktopIcon {...icon} />,
        name: "monitoring",
        path: "/monitoring",
        element: <Monitoring />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Logsheet Packing",
        path: "/logsheet",
        element: <Logsheet />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <PowerIcon {...icon} />,
        name: "Log Out",
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
];

export default routes;
