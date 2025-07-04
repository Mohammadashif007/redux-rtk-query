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
import { useGetSinglePostQuery } from "@/redux/api/jsonPlaceholderApi";
import { useNavigate, useParams } from "react-router";

export function SinglePost() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data, isLoading, error } = useGetSinglePostQuery(id);
    console.log(data);
    if (isLoading) return <p className="text-center">Loading...😏</p>;
    if (error) return <p className="text-center">Something was wrong...😛</p>;

    const goBack = () => {
        
        navigate(-1);
    };

    return (
        <Card className="w-full my-5">
            <CardContent>
                <p className="text-xl my-3 font-bold">{data.title}</p>
                <p>{data.body}</p>
            </CardContent>
            <CardFooter>
                <Button className="mx-auto bg-blue-900 text-white cursor-pointer" onClick={goBack}>
                    Go Back
                </Button>
            </CardFooter>
        </Card>
    );
}
