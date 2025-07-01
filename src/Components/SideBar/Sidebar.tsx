import { useState } from "react";
import {
  LayoutDashboard,
  Rows3,
  Activity,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const sidebarItems = [
  { label: "Admin Support", icon: LayoutDashboard, path: "/Admin_Support" },
    { label: "Device", icon: Activity, path: "/Device" },
  { label: "HMS Customization", icon: Rows3, path: "/HMSCustomization" },
  { label: "HMS Custom View Assets", icon: Rows3, path: "/HMSCustomViewAssets" },
  { label: "Hotel Admin", icon: Rows3, path: "/Hotel_Admin" },
  { label: "Hotel Chain", icon: Rows3, path: "/Hotel_Chain" },
  { label: "Hotel Environment", icon: Rows3, path: "/Hotel_Environment" },
    { label: "Hotel", icon: Rows3, path: "/Hotel" },
  { label: "Onboarding Hotel", icon: Rows3, path: "/Onboarding_Hotel" },
  { label: "PMS Service", icon: Rows3, path: "/PMS_Service" },
  { label: "Room Events", icon: Rows3, path: "/Room_Event" },
  { label: "Room", icon: Rows3, path: "/Room" },
  { label: "Stream Events", icon: Rows3, path: "/Stream_Events" },
  { label: "User", icon: Users, path: "/User" },
];

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="position-relative z-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Compact Sidebar */}
      <div
        className="vh-100 bg-white shadow d-flex flex-column align-items-center py-4"
        style={{ width: "80px" }}
      >
        <div className="fw-bold fs-4 text-primary">:d</div>
        <div className="mt-4 d-flex flex-column gap-3">
          {sidebarItems.map((item) => (
            <item.icon key={item.label} size={22} className="text-secondary" />
          ))}
        </div>
      </div>

      {/* Full Sidebar on Hover */}
      {isHovered && (
        <div
          className="position-fixed top-0 start-0 vh-100 bg-white shadow px-3 py-4"
          style={{ width: "260px" }}
        >
          <div className="fw-bold fs-4 text-primary">:dashboard</div>
          <div className="mt-4 d-flex flex-column gap-2">
            {sidebarItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `d-flex align-items-center gap-2 px-3 py-2 rounded text-decoration-none ${
                    isActive ? "bg-primary text-white" : "text-dark hover-bg-light"
                  }`
                }
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
