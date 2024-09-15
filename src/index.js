import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import ErrorPage from "./pages/ErrorPage";
import TradeMark from "./components/TradeMark";
import Owners from "./components/Owners";
import LogoComp from "./components/LogoComp";
import Brand from "./components/Brand";
import CopyRight from "./pages/Copyright";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/trademark",
        element: <TradeMark />,
      },
      {
        path: "/owners",
        element: <Owners />,
      },
      {
        path: "/logo",
        element: <LogoComp />,
      },
      {
        path: "/brand",
        element: <Brand />,
      },
      {
        path: "/registration",
        element: <CopyRight />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

