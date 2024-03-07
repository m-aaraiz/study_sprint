import { Routes, Route } from "react-router-dom";

/**
 * A route config for website routing for pages and layouts.
 * Contains functionality for protected and unprotected routes
 * @author
 * @version
 * @returns {RouteConfig}
 */
const RouteConfig = () => {
  //------------------------ ROUTES ------------------------//
  return (
    <Routes>
      {/* ------------------------ UNPROTECTED ROUTES ------------------------ */}

      {/* Homepage */}
      {/* <Route path="/" element={<Home />} /> */}

      {/* Login Page */}
      {/* <Route path="/login" element={<Login />} /> */}

      {/* ------------------------ PROTECTED ROUTES ------------------------ */}

      {/* Protected Layout Route */}
      {/* <Route element={<ProtectedLayout />}> */}
      {/* Add routes for protected access here ... */}
      {/* </Route> */}
    </Routes>
  );
};

export default RouteConfig;
