// import {

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
    useCreatePostDataMutation,
    useUpdatePostMutation,
} from "@/redux/api/jsonPlaceholderApi";
import { useForm } from "react-hook-form";

const EditPost = () => {
    const { register, handleSubmit } = useForm();
    const [updatePost, { isLoading, isSuccess }] = useUpdatePostMutation();
    const onSubmit = async (data) => {
        console.log(data);
        const newPost = {
            id: 1,
            title: "New Post",
            body: "This is the body of the post.",
            userId: 1,
        };
        const res = await updatePost(newPost);
        console.log(res);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <Input
                placeholder="Title"
                className="mt-3"
                {...register("title")}
            ></Input>

            <Input
                placeholder="Description"
                className="mt-3"
                {...register("description")}
            ></Input>

            <Button
                className="bg-black text-white cursor-pointer mt-3"
                disabled={isLoading}
            >
                {isLoading ? "Editing...😴" : "Edit Post 🙄"}
            </Button>
        </form>
    );
};

export default EditPost;
