import { createBrowserRouter } from "react-router-dom";
import ChallengePage from "../pages/ChallengePage/ChallengePage";
import MyVersionPage from "../pages/MyVersionPage/MyVersionPage";

const basename =
  import.meta.env.MODE === "production"
    ? "/02-blog-preview-card-frontend-club"
    : "/";

const Router = createBrowserRouter(
  [
    {
      path: "/",
      element: <ChallengePage />,
    },
    {
      path: "/my-version",
      element: <MyVersionPage />,
    },
  ],
  { basename },
);

export default Router;
