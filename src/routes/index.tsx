import App from "@/App";
import EditPost from "@/components/postsCard/EditPost";
import { SinglePost } from "@/components/postsCard/singlePostCard";
import CreatePost from "@/pages/CreatePost";

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
            {
                path: "/createPost",
                element: <CreatePost></CreatePost>,
            },
            {
                path: "/editPost/:id",
                element: <EditPost></EditPost>,
            },
        ],
    },
]);
