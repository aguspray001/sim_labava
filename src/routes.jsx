import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  ClipboardDocumentCheckIcon,
  VideoCameraIcon
} from "@heroicons/react/24/solid";
import { Home, Profile, DaftarRentStuff, DaftarRentRoom, Stuff } from "@/pages/dashboard";
import { PeminjamanRuangan, PeminjamanAlat, TambahInventaris, Kategori, UserRole, AddProdi, AddRoom, AddOwner, AddCondition } from "@/pages/form";
import { SignIn, SignUp } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Daftar Inventaris Lab",
        path: "/stuff",
        element: <Stuff />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Daftar Peminjam Alat",
        path: "/daftar-pinjam-alat",
        element: <DaftarRentStuff />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Daftar Peminjam Lab",
        path: "/daftar-pinjam-ruangan",
        element: <DaftarRentRoom />,
      },
    ],
  },
  {
    title: "Form Pages",
    layout: "dashboard",
    pages: [
      {
        icon: <ClipboardDocumentCheckIcon {...icon} />,
        name: "peminjaman alat",
        path: "/peminjaman-alat",
        element: <PeminjamanAlat />,
      },
      {
        icon: <VideoCameraIcon {...icon} />,
        name: "peminjaman ruangan",
        path: "/peminjaman-ruangan",
        element: <PeminjamanRuangan />,
      },
    ]
  },
  {
    title: "Admin Pages",
    layout: "dashboard",
    pages: [
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Tambah Inventaris",
        path: "/tambahInventaris",
        element: <TambahInventaris />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "User Role",
        path: "/add-user-role",
        element: <UserRole />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Program Studi",
        path: "/add-prodi",
        element: <AddProdi />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Ruangan Lab AVA",
        path: "/add-room",
        element: <AddRoom />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Owner Inventaris",
        path: "/add-owner",
        element: <AddOwner />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Kondisi Inventaris",
        path: "/add-condition",
        element: <AddCondition />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Kategori",
        path: "/kategori",
        element: <Kategori />,
      },
    ]
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "Log Out",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
