import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import ProtectedRoute from "./ProtectedRoute"; // Ensure this is correctly implemented
import LandingPage from "@/pages/Landing4";
import GigWorkerDashboard from "@/pages/GigDashboard";
import ClientDashboard from "@/pages/ClinetDashboard";
import JobExplore from "@/pages/Explore1";
import { ClientProfile } from "@/pages/ClientProfile";
import { GigWorkerProfile } from "@/pages/GigWorkProfile";
import JobCreate from "@/pages/Form";


const Router = createBrowserRouter([
  {
    element: <App />, // Use App as a layout component
    children: [
      {
        element: <ProtectedRoute allowedRole="admin" />, // Protecting these routes
        children: [
          {
            path: "/",
            element: <LandingPage />,
          },
          {
            path: "/dashboard/gig",
            element: <GigWorkerDashboard />,
          },
          {
            path: "/dashboard/client",
            element: <ClientDashboard />,
          },
          {
            path: "/explore",
            element: < JobExplore/>,
          },
          {
            path: "/profile/client/:id",
            element: <ClientProfile />,
          },
          {
            path: "/profile/gig/:id",
            element: <GigWorkerProfile />,
          },
          // {
          //   path: "/settings",
          //   element: <SettingsPage />,
          // },
          {
            path: "/post-jobs",
            element: <JobCreate />,
          },
          // {
          //   path: "/certificate-submission",
          //   element: <CertificateSubmissionComponent />,
          // },
        ],
      },
      // {
      //   path: "/register",
      //   element: <RegisterationPage />,
      // },
    ],
  },
]);

export default Router;