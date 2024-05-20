import { useState } from "react";
import {
  Card,
  // Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  Cog6ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

export function Sidebar(active) {
  const [activeItem, setActiveItem] = useState(active);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="fixed left-0 top-0 bg-red-600 h-full flex flex-col justify-between w-[20rem] border-r border-gray">
      <Card className="h-full flex flex-col justify-center gap-4 p-4 bg-[#B0DDBB]">
        {/* <div className="mb-2 p-4 ">
          <Typography variant="h5" color="blue-gray">
            SIDEBAR
          </Typography>
        </div> */}
        <List>
          <ListItem
            className={`h-16 rounded-lg mb-4 flex items-center ${
              activeItem.active === "Cek NIK"
                ? "bg-[#4aae64] text-white"
                : "text-[#4aae64] bg-opacity-10"
            }`}
            onClick={() => handleItemClick("Cek NIK")}
          >
            <ListItemPrefix className="w-16 h-16 rounded-lg flex items-center justify-center">
              <PresentationChartBarIcon
                className={`h-5 w-5 ${
                  activeItem.active === "Cek NIK" ? "text-white" : ""
                }`}
              />
            </ListItemPrefix>
            <Link
              to="/CekNik"
              className={`text-[#4aae64] ${
                activeItem.active === "Cek NIK" ? "text-white" : ""
              }`}
            >
              Cek NIK
            </Link>
          </ListItem>
          <ListItem
            className={`h-16 rounded-lg mb-4 flex items-center ${
              activeItem.active === "Laporan Penjualan"
                ? "bg-[#4aae64] text-white"
                : "text-[#4aae64] bg-opacity-10"
            }`}
            onClick={() => handleItemClick("Laporan Penjualan")}
          >
            <ListItemPrefix className="w-16 h-16 rounded-lg flex items-center justify-center">
              <ShoppingBagIcon
                className={`h-5 w-5 ${
                  activeItem.active === "Laporan Penjualan" ? "text-white" : ""
                }`}
              />
            </ListItemPrefix>
            <Link
              to="/Laporanpenjualan"
              className={`text-[#4aae64] ${
                activeItem.active === "Laporan Penjualan" ? "text-white" : ""
              }`}
            >
              Laporan Penjualan
            </Link>
          </ListItem>
          {/* pembatas */}
          <ListItem
            className={`h-16 rounded-lg mb-4 flex items-center ${
              activeItem.active === "Atur Stok"
                ? "bg-[#4aae64] text-white"
                : "text-[#4aae64] bg-opacity-10"
            }`}
            onClick={() => handleItemClick("Atur Stok")}
          >
            <ListItemPrefix className="w-16 h-16 rounded-lg flex items-center justify-center">
              <Cog6ToothIcon
                className={`h-5 w-5 ${
                  activeItem.active === "Atur Stok" ? "text-white" : ""
                }`}
              />
            </ListItemPrefix>
            <Link
              to="/atur-stok"
              className={`text-[#4aae64] ${
                activeItem.active === "Atur Stok" ? "text-white" : ""
              }`}
            >
              Atur Stok
            </Link>
          </ListItem>
          {/* pembatas */}
          <ListItem
            className={`h-16 rounded-lg mb-4 flex items-center ${
              activeItem.active === "Profile"
                ? "bg-[#4aae64] text-white"
                : "text-[#4aae64] bg-opacity-10"
            }`}
            onClick={() => handleItemClick("Profile")}
          >
            <ListItemPrefix className="w-16 h-16 rounded-lg flex items-center justify-center">
              <UserCircleIcon
                className={`h-5 w-5 ${
                  activeItem.active === "Profile" ? "text-white" : ""
                }`}
              />
            </ListItemPrefix>
            <Link
              to="/Profile"
              className={`text-[#4aae64] ${
                activeItem.active === "Profile" ? "text-white" : ""
              }`}
            >
              Profile
            </Link>
          </ListItem>
        </List>
      </Card>
    </div>
  );
}
