import { useSelector } from "react-redux"
import Post from "./post"




function Posts() {
  const posts = useSelector((state)=>state.post.post)


  return (
    <section className="flex-[9] flex flex-wrap justify-center">
      {posts.map((post)=>
      (<Post post={post} key={post.id}/>))}

</section>
  )
}

export default Posts
    