import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import LoginPage2 from "./features/login/LoginPage2";
import './App.css';

import LoginPage from "./features/login/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate replace to="/login" />,
    },
    {
        path: "/login",
        element: <LoginPage />,

    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
