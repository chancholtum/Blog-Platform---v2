import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Post({ post }) {
  const { title, image, categories, textInPost, id } = post;

  return (
    <div className=" mx-2 mb-8 w-full overflow-auto  transition-all duration-300 sm:mx-6 sm:w-[385px]">
      <Link to={`/post/${id}`}>
        <img
          src={image}
          alt="marcas radford"
          className="mx-auto  h-[280px] w-4/5 cursor-pointer rounded-lg object-cover transition-all  duration-300 sm:w-full"
        />
        <div className="flex flex-col items-center">
          <div className="mt-4 flex gap-4 text-sm text-red-500">
            {categories.map((category) => (
              <span> {category} </span>
            ))}
          </div>
          <span className="text-text-1 mt-4 cursor-pointer text-center text-2xl font-semibold transition-all duration-300 hover:underline">
            {title}
          </span>
          <hr />
        </div>
        <p className="text-post postdes text-text-3 mt-4 overflow-hidden text-ellipsis text-base">
          {textInPost}
        </p>
      </Link>
    </div>
  );
}

export default Post;
