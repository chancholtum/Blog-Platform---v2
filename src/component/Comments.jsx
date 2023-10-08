import { useState } from "react";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../Slice/postSlice";

function Comments({ comment, postId }) {
  const [visitorMent, setVisitorMent] = useState("");
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (!visitorMent) return;

    const newComment = {
      photo:
        "https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/240521527_4374177845958670_230611608875898404_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=49d041&_nc_ohc=QZ9MgyQMdMEAX864Sho&_nc_ht=scontent.fbkk13-2.fna&oh=00_AfCEz2w5hIaZxFl6XIjC0Voerp2ueaq_MJUNSRvFZw0d6g&oe=652399A1",
      commentName: username,
      commentText: visitorMent,
      commentId: crypto.randomUUID(),
    };
    dispatch(addComment(postId, newComment));

    setVisitorMent("");
  }

  return (
    <>
      <section className="flex flex-col items-start justify-start gap-3 sm:mt-5">
        {comment.map((ment) => (
          <Comment ment={ment} postId={postId} />
        ))}
      </section>

      <div className="mt-5 flex w-full gap-1">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t39.30808-6/240521527_4374177845958670_230611608875898404_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=49d041&_nc_ohc=QZ9MgyQMdMEAX864Sho&_nc_ht=scontent.fbkk13-2.fna&oh=00_AfCEz2w5hIaZxFl6XIjC0Voerp2ueaq_MJUNSRvFZw0d6g&oe=652399A1"
          alt="manchester united boy"
        />

        <form
          className="flex flex-[9] items-center justify-center gap-2 rounded-full border border-white bg-[#6f0079] px-4"
          onSubmit={handleSubmit}
        >
          <input
            placeholder="Comment "
            className=" block w-full bg-inherit px-4 py-2 text-start text-sm text-white outline-none"
            value={visitorMent}
            onChange={(e) => setVisitorMent(e.target.value)}
          />
        </form>
      </div>
    </>
  );
}

export default Comments;
