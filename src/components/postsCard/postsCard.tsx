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

export function PostsCard({ post }: { post: any }) {
    const { title, body, id } = post;
    const navigate = useNavigate();

    const handleSinglePost = (id) => {
        navigate(`/posts/${id}`);
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
            </CardFooter>
        </Card>
    );
}
