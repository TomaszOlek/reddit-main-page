import RepUp from "../assets/RepUp.svg";
import RepDown from "../assets/RepDown.svg";
import Comment from "../assets/Comment.svg";
import Share from "../assets/Share.svg";
import Save from "../assets/Save.svg";
import More from "../assets/More.svg";
import { useState } from "react";

interface PostProps {
  post: {
    title: string;
    postImage: string;
    created: string;
    comments: number;
    postReputation: number;
    user: {
      userName: string;
      userImage: string;
    };
  };
}

function Post({ post }: PostProps) {
  const [isRepUpSelected, setIsRepUpSelected] = useState(false);
  const [isRepDownSelected, setIsRepDownSelected] = useState(false);

  const [repPoints, setRepPoints] = useState(post.postReputation);

  //Is there a better way to do this?
  const handelRep = (rep: "Up" | "Down") => {
    if (rep === "Up" && isRepUpSelected) {
      setIsRepUpSelected(false);
      setRepPoints(repPoints - 1);
    } else if (rep === "Up" && isRepDownSelected) {
      setIsRepUpSelected(true);
      setIsRepDownSelected(false);
      setRepPoints(repPoints + 2);
    } else if (rep === "Up" && !isRepDownSelected && !isRepUpSelected) {
      setIsRepUpSelected(true);
      setRepPoints(repPoints + 1);
    } else if (rep === "Down" && isRepUpSelected) {
      setIsRepUpSelected(false);
      setIsRepDownSelected(true);
      setRepPoints(repPoints - 2);
    } else if (rep === "Down" && isRepDownSelected) {
      setIsRepDownSelected(false);
      setRepPoints(repPoints + 1);
    } else {
      setIsRepDownSelected(true);
      setRepPoints(repPoints - 1);
    }
  };

  console.log(isRepUpSelected);

  return (
    <div className="post">
      <div className="post-rep">
        <div className={`${isRepUpSelected && "selected-option"}`}>
          <img src={RepUp} alt="RepUp" onClick={() => handelRep("Up")} />
        </div>
        <p>{repPoints}</p>
        <div className={`${isRepDownSelected && "selected-option"}`}>
          <img src={RepDown} alt="RepDown" onClick={() => handelRep("Down")} />
        </div>
      </div>
      <div className="container">
        <div className="post-user">
          <img src={post.user.userImage} />
          <h4>{post.user.userName}</h4>
          <p>{post.created}</p>
        </div>

        <div className="post-content">
          <h2 className="post-content-title">{post.title}</h2>
          {post.postImage && (
            <img src={post.postImage} className="post-content-image" />
          )}
        </div>

        <div className="post-actions">
          <div className="post-action">
            <img src={Comment} />
            <p>{post.comments} Comments</p>
          </div>
          <div className="post-action">
            <img src={Share} />
            <p>Share</p>
          </div>
          <div className="post-action">
            <img src={Save} />
            <p>Save</p>
          </div>
          <div className="post-action">
            <img src={More} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
