import {
    createBrowserRouter,
    RouterProvider,
    Navigate,
} from "react-router-dom";
<<<<<<< HEAD
import LoginPage from "./features/login/LoginPage";
import './App.css';

=======
import LoginPage2 from "./features/login/LoginPage2";
import './App.css';

import LoginPage from "./features/login/LoginPage";

>>>>>>> 856ce26c49a3f55e4b7626b5ed3b5916819a9997
const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate replace to="/login" />,
    },
    {
        path: "/login",
        element: <LoginPage />,
<<<<<<< HEAD
=======

>>>>>>> 856ce26c49a3f55e4b7626b5ed3b5916819a9997
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
