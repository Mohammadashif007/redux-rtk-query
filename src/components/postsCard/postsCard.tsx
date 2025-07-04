import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";
import { useDeletePostMutation } from "@/redux/api/jsonPlaceholderApi";

export function PostsCard({ post }: { post: any }) {
    const [deletePost, { isLoading }] = useDeletePostMutation();
    const { title, body, id } = post;

    const navigate = useNavigate();

    const handleSinglePost = (id) => {
        navigate(`/posts/${id}`);
    };
    const handleEditPost = (id) => {
        navigate(`/editPost/${id}`);
    };

    const handleDeletePost = async (id) => {
        try {
            await deletePost(id).unwrap();
            console.log("✅ Deleted successfully");
        } catch (err) {
            console.error("❌ Failed to delete:", err);
        }
    };

    return (
        <Card className="w-full max-w-sm">
            <CardContent>
                <p className="text-xl my-3 font-bold">{title}</p>
                <p>{body}</p>
            </CardContent>
            <CardFooter>
                <Button
                    onClick={() => handleSinglePost(id)}
                    className="mx-auto cursor-pointer bg-amber-500 text-amber-50"
                >
                    Click
                </Button>
                <Button
                    onClick={() => handleEditPost(id)}
                    className="mx-auto cursor-pointer bg-amber-500 text-amber-50"
                >
                    Edit
                </Button>
                <Button
                    onClick={() => handleDeletePost(id)}
                    className="mx-auto cursor-pointer bg-amber-500 text-amber-50"
                >
                    {isLoading ? "Deleting..." : "Delete"}
                </Button>
            </CardFooter>
        </Card>
    );
}
