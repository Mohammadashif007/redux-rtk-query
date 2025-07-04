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
        createPostData: build.mutation({
            query: (newPost) => ({
                url: "/posts",
                method: "POST",
                body: newPost,
            }),
        }),
        updatePost: build.mutation({
            query: ({ id, ...patch }) => ({
                url: `/posts/${id}`,
                method: "PATCH",
                body: patch,
            }),
        }),
        deletePost: build.mutation({
            query: ({ id }) => ({
                url: `/posts/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetPostsQuery,
    useGetSinglePostQuery,
    useCreatePostDataMutation,
    useUpdatePostMutation,
    useDeletePostMutation
} = jsonPlaceholderApi;
