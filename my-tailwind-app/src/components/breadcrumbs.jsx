import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((path) => path);

  return (
    <div className="p-4 text-gray-600 bg-gray-100 rounded-lg shadow-md w-full">
      <nav>
        <ol className="flex space-x-2">
          <li>
            <Link to="/" className="text-blue-500 hover:underline">Home</Link>
          </li>
          {pathnames.map((path, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return (
              <li key={index} className="flex items-center">
                <span className="mx-2">/</span>
                {isLast ? (
                  <span className="text-gray-800">{decodeURIComponent(path)}</span>
                ) : (
                  <Link to={routeTo} className="text-blue-500 hover:underline">
                    {decodeURIComponent(path)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
