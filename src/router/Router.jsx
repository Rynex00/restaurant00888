import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Conponents/Home/Home/Home";
import About from "../Conponents/About/About";
import Portfolio from "../Conponents/Portfolio/Portfolio";
import Clients from "../Conponents/Clients/Clients";
import Blog from "../Conponents/Blog/Blog";
import Contact from "../Conponents/Contact/Contact";
import BookATable from "../Conponents/BookATable/BookATable";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/portfolio',
                element: <Portfolio />,
            },
            {
                path: '/clients',
                element: <Clients />,
            },
            {
                path: '/blog',
                element: <Blog />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/bookATable',
                element: <BookATable />,
            },
        ]
    }
])

export default router;