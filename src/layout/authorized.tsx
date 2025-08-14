import { Navigate, Outlet, useLocation } from "react-router";

const Authorized = () => {
    const location = useLocation()
    const userDetail = JSON.parse(sessionStorage.getItem("userAccess"));
    if (location.pathname.startsWith("/admin") && userDetail?.role !== "Admin") {
        return <Navigate to="/" replace />
    }
    if (!userDetail?.access) {
        return <Navigate to="/login" replace state={{ from: location }} />
    }

    return <Outlet />;
}

export default Authorized;