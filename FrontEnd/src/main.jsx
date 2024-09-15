import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ComplainPostProvider from "./ComplainPostProvider.jsx";
// import ComplainPost from "./ComplainPost.jsx";
import CreatePost from "./CreatePost.jsx";
import StudentLogin from "./Componets/StudentLogIn/StudentLogin.jsx";
import YourPost from "./YourPost.jsx";
import AdminLogin from "./Componets/AdminLogin/AdminLogin.jsx";
import AdminMain from "./Componets/AdminLogin/AdminMain.jsx";
import StudentComplains from "./Componets/AdminLogin/StudentComplains.jsx";
import { Toaster } from "react-hot-toast";
import Bus from "./Componets/BusBooking/Bus.jsx";
import CreateApllication from "./CreateApllication.jsx";
import Gard from "./Componets/CoustomRoutes/Gard.jsx";
import Machine from "./Componets/WashingMachineControlling/Machine.jsx";
// import Washing from "./Componets/WashingMachine/Washing.jsx";
import WashingWithGard from "./Componets/WashingMachine/WashingWithGard.jsx";
import CreateTask from "./Componets/CreateTask/CreateTask.jsx";
import ShowTask from "./Componets/CreateTask/ShowTask.jsx";
import AdminTask from "./Componets/CreateTask/AdminTask.jsx";
// import ApplicationHandle from "./Componets/Application/ApplicationHandle.jsx";
import ApplicationProvider from "./Componets/Application/ApplicationProvider.jsx";
import StudentApplication from "./Componets/Application/StudentApplication.jsx";
import RatingPage from "./Componets/Rating/RatingPage.jsx";
import Home from "./Componets/Home/Home.jsx";
import HomePage from "./Componets/Home/HomePage.jsx";
// import BusDriving from "./Componets/BusDriving/BusDriving.jsx";
import BusLogin from "./Componets/BusDriving/BusLogin.jsx";
import BusControl from "./Componets/BusDriving/BusConttol.jsx";
// import StarRating from "./Componets/Rating/Rating.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
    children:[
      {
        path:"",
        element:<HomePage/>
      }
    ]
  },{
    path:"/BusDriver",
    element:<BusControl/>
  },
  {
    path:"/Rating",
    element:<RatingPage/>
  },
  {
    path: "/StudentLogin",
    element: <StudentLogin />,
  },
  {
    path:"/GardLogin",
    element: <Gard/>
  },
  {
    path:"/DriverLogin",
    element:<BusLogin/>
  },
  {
    path:'/WashingMachineControling',
    element:<Machine/>,
  },
  {
    path: "/AdminLogin",
    element: <AdminLogin />,
  },
  {
    path: "/AdminPanel",
    element: <AdminMain />,
    children: [
      {
        path: "",
        element: <StudentComplains />,
      },
      {
        path: "BookBus",
        element: <Bus />,
      },
      {
        path: "CreateTasks",
        element:<CreateTask/>
      },
      {
        path:"CreatedTasks",
        element:<ShowTask/>
      },
      {
        path:"YourTasks",
        element:<AdminTask/>
      },
      {
        path:"Application",
        element:<ApplicationProvider/>
      }
    ],
  },

  {
    path: "/StudentPanel",
    element: <App />,
    children: [
      {
        path: "",
        element: <ComplainPostProvider />,
      },
      {
        path: "CreatePost",
        element: <CreatePost />,
      },
      {
        path: "Laundary",
        element: <WashingWithGard/>,
      },
      {
        path: "BookBus",
        element: <Bus />,
      },
      {
        path: "Application",
        element: <CreateApllication />,
      },
      {
        path: "YourPost",
        element: <YourPost />,
      },
      {
        path:"CreatedApplication",
        element:<StudentApplication/>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-center" reverseOrder={false} />
    {/* <App/> */}
  </React.StrictMode>
);
