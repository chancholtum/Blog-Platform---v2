import { useNavigate, useParams } from "react-router-dom";
// import { getCurrentPost } from "../Slice/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, editPost, getPosts } from "../Slice/postSlice";
import Comments from "./Comments";
import { useState } from "react";

function SinglePost() {
  const { postId } = useParams();
  const posts = useSelector(getPosts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const username = useSelector((state) => state.user.username);

  const [isEditPost, setIsEditPost] = useState(false);
  const [titlePost, setTitlePost] = useState("");
  const [categoriesEdit, setCategoriesEdit] = useState("Man United");
  const [contentPost, setContentPost] = useState("");

  const currentPost = posts.find((post) => post.id === postId);
  const { title, comment, categories, image, textInPost, author } = currentPost;

  function handleDeletePost() {
    dispatch(deletePost(postId));
    navigate("/");
  }

  function handleEditPost() {
    setIsEditPost(!isEditPost);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newPost = {
      title: titlePost,
      categories: [categoriesEdit],
      textInPost: contentPost,
      id: postId,
    };
    console.log(newPost);

    dispatch(editPost(newPost));

    setIsEditPost(!isEditPost);
  }

  return (
    <main className="mx-auto mb-5 flex w-4/5 flex-col items-center justify-center">
      <section className=" flex flex-col  md:w-3/5 xl:w-2/5">
        <img
          src={image}
          alt={title}
          className="mx-auto w-full rounded-2xl px-1 sm:px-0"
        />
        {isEditPost ? (
          <input
            type="text"
            placeholder="Title"
            defaultValue={title}
            className="mt-5 w-full rounded-xl bg-[#6F0079] px-4 py-2 text-2xl text-white outline-none "
            autoFocus={true}
            onChange={(e) => setTitlePost(e.target.value)}
          />
        ) : (
          <p className="relative z-0 mt-5 text-center text-3xl">{title}</p>
        )}

        <div className="mb-5 flex flex-col items-center  justify-between text-lg text-[#37003C]">
          <div>
            Author: <b>{author}</b>
          </div>

          {isEditPost ? (
            <select
              name="categories"
              id="categories"
              className="rounded-md bg-[#6F0079] px-2 text-white"
              onChange={(e) => setCategoriesEdit(e.target.value)}
            >
              <option value="Man United">Man United</option>
              <option value="Arsenal">Arsenal</option>
              <option value="Man City">Man City</option>
              <option value="Liverpool">Liverpool</option>
              <option value="Chelsea">Chelsea</option>
              <option value="Spurs">Spurs</option>
            </select>
          ) : (
            <div className="flex gap-4">
              {categories.map((category) => (
                <span className="flex gap-4 text-sm text-red-500">
                  {category}
                </span>
              ))}
            </div>
          )}
        </div>
        {isEditPost ? (
          <textarea
            placeholder="Your Content . . ."
            type="text"
            className=" mb-3 w-full resize-none rounded-xl bg-[#6F0079] px-4 py-2 text-xl font-light text-white outline-none"
            rows="5"
            defaultValue={textInPost}
            onChange={(e) => setContentPost(e.target.value)}
          ></textarea>
        ) : (
          <p className="w-full px-4 text-xl font-light leading-6 text-[#676667] first-letter:ml-5 first-letter:text-4xl first-letter:font-bold sm:px-0">
            {textInPost}
          </p>
        )}
        {username === author ? (
          <div className=" flex justify-end gap-3 text-xl text-[#37003C]">
            {isEditPost && (
              <button
                className="text-basw rounded-md bg-[#37003C] p-1 text-white transition-all duration-300 hover:bg-red-500"
                onClick={handleSubmit}
              >
                Edit Post
              </button>
            )}
            <button
              className="transition-all duration-300 hover:text-red-500"
              onClick={handleEditPost}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button
              className="transition-all duration-300 hover:text-red-500"
              onClick={handleDeletePost}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        ) : (
          ""
        )}
        {comment.length > 0 ? null : (
          <p className="mt-5 sm:-mb-10">
            Don't have any comment , You are first 👇
          </p>
        )}
        <Comments comment={comment} postId={postId} />
      </section>
    </main>
  );
}

export default SinglePost;
