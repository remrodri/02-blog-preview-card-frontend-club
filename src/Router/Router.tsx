import { createBrowserRouter } from "react-router-dom";
import ChallengePage from "../pages/ChallengePage/ChallengePage";
import MyVersionPage from "../pages/MyVersionPage/MyVersionPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <ChallengePage />,
    },
    {
        path: "/my-version",
        element: <MyVersionPage />,
    },
]);

export default Router;