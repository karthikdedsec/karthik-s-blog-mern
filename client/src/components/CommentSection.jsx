import { Alert, Button, Textarea } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCommentSlice } from "../redux/comment/commentSlice";

function CommentSection({ postId }) {
  const dispatch = useDispatch();
  const { commentz } = useSelector((state) => state.comment);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState("");
  const [commentError, setCommentError] = useState(null);
  const [comments, setComments] = useState([]);

  //submit comment

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (comment.length > 200) {
      return;
    }
    try {
      const res = await fetch("/api/comment/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: comment,
          postId,
          userId: currentUser._id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setComment("");
        setCommentError(null);
        setComments([data, ...comments]);
      }
    } catch (error) {
      setCommentError(error.message);
    }
  };

  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await fetch(`/api/comment/getcomment/${postId}`);

        if (res.ok) {
          const data = await res.json();
          setComments(data);
          dispatch(setCommentSlice(data));
        } else {
          console.log("Failed to fetch comments:", res.status);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getComments();
  }, [postId]);

  const handleLike = async (commentId) => {
    try {
      if (!currentUser) {
        navigate("/sign-in");
        return;
      }
      const res = await fetch(`/api/comment/likeComment/${commentId}`, {
        method: "PUT",
      });
      if (res.ok) {
        const data = await res.json();
        setComments(
          comments.map((cmnt) =>
            cmnt._id === commentId
              ? {
                  ...cmnt,
                  likes: data.likes,
                  numberOfLikes: data.numberOfLikes,
                }
              : cmnt
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(comments);

  return (
    <div className="max-w-2xl mx-auto w-full p-3">
      {currentUser ? (
        <div className="flex items-center gap-1 my-5 text-gray-500 text-sm">
          <p>Signed in as:</p>
          <img
            className="h-5 w-5 object-cover rounded-full"
            src={currentUser.profilePicture}
            alt="profilePicture"
          />
          <Link
            className="text-xs text-cyan-600 hover:underline"
            to="/dashboard?tab=profile"
          >
            @{currentUser.username}
          </Link>
        </div>
      ) : (
        <div className="text-sm text-teal-500 my-5">
          sign in to leave a comment.
          <Link className="text-blue-500 pl-2 hover:underline" to={"/sign-in"}>
            Sign in
          </Link>
        </div>
      )}
      {currentUser && (
        <form
          onSubmit={handleSubmit}
          className="border border-teal-500 rounded-md p-3"
        >
          <Textarea
            onChange={(e) => setComment(e.target.value)}
            placeholder="Leave a comment.."
            rows={3}
            maxLength="200"
            value={comment}
          />
          <div className="flex justify-between items-center mt-5">
            <p className="text-gray-500 text-xs">
              {200 - comment.length} characters remaining
            </p>
            <Button type="submit" outline gradientDuoTone="greenToBlue">
              Add comment
            </Button>
          </div>
          {commentError && (
            <Alert color="failure" className="mt-5">
              {commentError}
            </Alert>
          )}
        </form>
      )}
      {comments && comments.length === 0 ? (
        <p className="text-sm my-5">No comments yet!</p>
      ) : (
        <>
          <div className="flex text-sm my-5 items-center gap-1">
            <p>Comments</p>
            <div className="border border-gray-400 py-1 px-2 rounded-sm">
              <p>{comments.length}</p>
            </div>
          </div>
          {comments.map(
            (comment) =>
              comment &&
              comment._id && (
                <Comment
                  key={comment._id}
                  comment={comment}
                  handleLike={handleLike}
                />
              )
          )}
        </>
      )}
    </div>
  );
}
export default CommentSection;
