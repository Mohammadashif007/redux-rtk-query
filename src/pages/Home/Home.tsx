import { PostsCard } from "@/components/postsCard/postsCard";
import { useGetPostsQuery } from "@/redux/api/jsonPlaceholderApi";

const Home = () => {
    const { data: posts, isLoading, error } = useGetPostsQuery(undefined);
    if (isLoading) return <p className="text-center p-10">Loading ... 😏 </p>;
    if (error) return <p>Something was wrong</p>;

    return (
        <div>
            <h1 className="p-10">This is home page</h1>
            <div className="grid grid-cols-3 gap-3">
                {posts.map((post) => (
                    <PostsCard key={post.id} post={post}></PostsCard>
                ))}
            </div>
        </div>
    );
};

export default Home;
