import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
import LoginPage from "./features/login/LoginPage";
import './App.css';

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
