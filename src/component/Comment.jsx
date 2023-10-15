import { useDispatch, useSelector } from "react-redux";
import { deleteComment, editComment } from "../Slice/postSlice";
import { useState } from "react";

function Comment({ ment, postId }) {
  const { photo, commentName: name, commentText: text, commentId } = ment;
  const username = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  const [editVisitorMent, setEditVisitorMent] = useState("");
  const [edit, setEdit] = useState(false);

  function handleEdit() {
    setEdit(!edit);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!editVisitorMent) return;

    const editCommentVisitor = {
      commentText: editVisitorMent,
    };
    dispatch(editComment(postId, commentId, editCommentVisitor));

    setEdit(!edit);
    setEditVisitorMent("");
  }

  return (
    <div className="bg-bkg-2 relative flex w-full items-center gap-5 rounded-xl px-2 py-2 transition-all duration-300 md:px-6 md:py-4">
      <img
        src={photo}
        alt={name}
        className="h-14 w-14 rounded-full border-2 border-white sm:h-28 sm:w-28 sm:border-4"
      />
      <div className="text-white">
        <h3 className=" text-base font-semibold sm:text-xl">{name}</h3>
        {edit ? (
          <form
            className="flex flex-[9] items-center justify-center gap-2 rounded-full border border-white bg-[#6f0079] px-4"
            onSubmit={handleSubmit}
          >
            <input
              placeholder="Comment "
              className=" block w-full bg-inherit px-4 py-1 text-start text-sm text-white outline-none"
              defaultValue={text}
              autoFocus
              onChange={(e) => setEditVisitorMent(e.target.value)}
            />
          </form>
        ) : (
          <p className="text-sm sm:text-base">{text}</p>
        )}
      </div>
      {username === name ? (
        <div className="absolute bottom-2 right-5 flex gap-3 text-white">
          <button
            onClick={handleEdit}
            className="transition-all duration-300 hover:text-red-500"
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            onClick={() => dispatch(deleteComment(postId, commentId))}
            className="transition-all duration-300 hover:text-red-500"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Comment;
