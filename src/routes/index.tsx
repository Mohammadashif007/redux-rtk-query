import App from "@/App";
import { SinglePost } from "@/components/postsCard/singlePostCard";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/home",
                element: <Home></Home>,
            },
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: "/posts/:id",
                element: <SinglePost></SinglePost>,
            },
        ],
    },
]);
