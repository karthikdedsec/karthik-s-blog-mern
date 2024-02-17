import { Link } from "react-router-dom";

function PostCard({ post }) {
  return (
    <div className="group relative w-full border hover:border-gray-600 transition-all  h-[400px] overflow-hidden rounded-lg sm:w-[430px]">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt="image"
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20"
        />
      </Link>
      <div className="flex flex-col p-3 gap-2">
        <p className="text-lg font-semibold line-clamp-2">{post.title}</p>
        <span className="italic text-sm">{post.category}</span>
        <Link
          className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md m-2"
          to={`/post/${post.slug}`}
        >
          Read article
        </Link>
      </div>
    </div>
  );
}
export default PostCard;
