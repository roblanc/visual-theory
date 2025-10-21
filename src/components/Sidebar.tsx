import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Ideas", path: "/" },
    { name: "Products", path: "/products" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-background p-8 flex flex-col">
      <Link to="/" className="mb-12">
        <h1 className="text-2xl font-bold tracking-tight">VT</h1>
      </Link>

      <nav className="flex-1">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block text-sm transition-colors hover:text-foreground ${
                  location.pathname === item.path
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
