import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Pages/HomePage/HomePage";
import PageOne from "../Pages/PageOne/PageOne";
import PageTwo from "../Pages/PageTwo/PageTwo";
import PageThree from "../Pages/PageThree/PageThree";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {path: "", element: <HomePage />},
            {path: "/pageone", element: <PageOne />},
            {path: "/pagetwo", element: <PageTwo />},
            {path: "/pagethree", element: <PageThree />},
        ]
    }
])