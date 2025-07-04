import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonPlaceholderApi = createApi({
    reducerPath: "jsonPlaceholderApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    endpoints: (build) => ({
        getPosts: build.query({
            query: () => "/posts",
        }),
        getSinglePost: build.query({
            query: (id) => `/posts/${id}`,
        }),
    }),
});

export const { useGetPostsQuery, useGetSinglePostQuery } = jsonPlaceholderApi;
