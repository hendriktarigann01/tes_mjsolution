import {
  LayoutDashboard,
  Edit3,
  FileText,
  FolderOpen,
  ChevronDown,
} from "lucide-react";

const Navbar = ({ isOpen, onClose }) => {
  const menuItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      active: true,
      path: "/dashboard",
    },
    {
      icon: Edit3,
      label: "Write",
      active: false,
      path: "/write",
      hasDropdown: true,
    },
    {
      icon: FileText,
      label: "Published",
      active: false,
      path: "/published",
    },
    {
      icon: FolderOpen,
      label: "Drafts",
      active: false,
      path: "/drafts",
    },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 -z-1 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 -z-1 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:inset-0
      `}
      >
        <div className="flex flex-col h-full pt-16 md:pt-0">
          {/* Navigation Menu */}
          <nav className="flex-1 px-2 py-4 bg-white">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className={`
        flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150
        ${
          item.active
            ? "bg-secondary text-primary border-r-2 border-primary"
            : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
        }
      `}
                  >
                    <div className="flex items-center">
                      <item.icon
                        className={`
                                    mr-3 h-5 w-5 flex-shrink-0
                                    ${item.active ? "text-primary" : "text-gray-400"}
                                  `}
                      />
                      {item.label}
                    </div>

                    {item.hasDropdown && (
                      <ChevronDown
                        className={`h-4 w-4 ${
                          item.active ? "text-primary" : "text-gray-400"
                        }`}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
