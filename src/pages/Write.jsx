import { useDispatch, useSelector } from "react-redux";
import TopBar from "../component/TopBar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPost } from "../Slice/postSlice";

function Write() {
  const username = useSelector((state) => state.user.username);
  const [titlePost, setTitlePost] = useState("");
  const [categories, setCategories] = useState("Man United");
  const [contentPost, setContentPost] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handlePostNews(e) {
    e.preventDefault();

    if (!titlePost && !contentPost) return;

    const newPost = {
      title: titlePost,
      author: username,
      textInPost: contentPost,
      categories: [categories],
      id: crypto.randomUUID(),
      comment: [],
      image:
        "https://www.worldcupupdates.org/wp-content/uploads/2023/06/Premier-League-2023-2024-club-1.png",
    };

    dispatch(addPost(newPost));

    setTitlePost("");
    setCategories("Man United");
    setContentPost("");

    console.log(newPost);
    navigate("/");
  }
  return (
    <>
      <TopBar />
      <div className="h-screen bg-[#3e0044]">
        <section className="mx-auto flex flex-col gap-5   px-2 py-2 md:w-1/3 md:pt-12">
          <img
            src="https://www.worldcupupdates.org/wp-content/uploads/2023/06/Premier-League-2023-2024-club-1.png"
            alt="PL 2023-2024"
            className="mx-auto  rounded-xl object-cover"
          />

          <form
            className=" flex w-full flex-col gap-3"
            onSubmit={handlePostNews}
          >
            <div className="flex items-center justify-around">
              <p className="text-white">Author : {username}</p>
              <select
                name="categories"
                id="categories"
                className="rounded-md bg-[#6F0079] px-2 text-white"
                onChange={(e) => setCategories(e.target.value)}
              >
                <option value="Man United">Man United</option>
                <option value="Arsenal">Arsenal</option>
                <option value="Man City">Man City</option>
                <option value="Liverpool">Liverpool</option>
                <option value="Chelsea">Chelsea</option>
                <option value="Spurs">Spurs</option>
              </select>
            </div>
            <div className=" flex  items-center gap-3">
              <label htmlFor="fileInput">
                <i className="fa-solid fa-plus flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border border-white text-white"></i>
              </label>
              <input type="file" id="fileInput" className="hidden" />
              <input
                type="text"
                placeholder="Title"
                className="w-full rounded-xl bg-[#6F0079] px-4 py-2 text-2xl text-white outline-none"
                autoFocus={true}
                value={titlePost}
                onChange={(e) => setTitlePost(e.target.value)}
              />
            </div>
            <div className=" flex items-center">
              <textarea
                placeholder="Your Content . . ."
                type="text"
                className=" w-full resize-none rounded-xl bg-[#6F0079] px-4 py-2 text-xl font-light text-white outline-none"
                rows="7"
                value={contentPost}
                onChange={(e) => setContentPost(e.target.value)}
              ></textarea>
            </div>
            <button className="rounded-xl border border-white bg-[#37003C] px-4 py-2 text-xl text-white transition-all duration-300 hover:bg-red-500">
              Post News
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Write;
