import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from "./pages/Home";
import NotFoundPage from "./component/NotFoundPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from './pages/Projects';
import Skills from './pages/Skills';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/skills",
                element: <Skills />,
            },
            {
                path: "/project",
                element: <Projects />,
            },
            {
                path: "/contact",
                element: <Contact />,
            }
        ]
    }
]);

export default Router
