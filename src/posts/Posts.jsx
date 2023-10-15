import { useSelector } from "react-redux";
import Post from "./post";
import { ascendingPosts } from "../Slice/postSlice";

function Posts({ search, searchQuery, sortedPosts }) {
  const posts = useSelector((state) => state.post.post);

  return (
    <section className="flex flex-[9] flex-wrap justify-center">
      {(searchQuery ? search : sortedPosts).map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </section>
  );
}

export default Posts;
