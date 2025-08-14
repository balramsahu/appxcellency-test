import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
// import MinimalLayout from "./minimalLayout";
// import Authorized from "./authorized";
import MainLayout from "./mainLayout";

// component list
const Users = lazy(() => import('../pages/users'));
const Company = lazy(() => import('../pages/company'));
const HomePage = lazy(() => import('../pages/home'));

const LayoutModule = () => {
    return (
        <>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/user/:id" element={<Users />} />
                    <Route path="/company/:id" element={<Company />} />
                    <Route path="/company" element={<Company />} />
                </Route>
                {/* <Route element={<MinimalLayout />}>
                    <Route path="/login" element={<LoginPage />} />
                </Route> */}
                <Route element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                </Route>
                <Route
                    path="*"
                    element={
                        <Suspense fallback={<>...</>}>
                            <Navigate to="/" replace />
                        </Suspense>
                    }
                />
            </Routes>
        </>
    )
}

export default LayoutModule;