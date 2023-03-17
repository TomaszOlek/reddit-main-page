import RepUp from "../assets/RepUp.svg"
import RepDown from "../assets/RepDown.svg"
import Comment from "../assets/Comment.svg"
import Share from "../assets/Share.svg"
import Save from "../assets/Save.svg"
import More from "../assets/More.svg"

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
  return (
    <div className="post">
      <div className="post-rep">
        <img src={RepUp}/>
        <p>{post.postReputation}</p>
        <img src={RepDown}/>
      </div>
      <div className="container">
        <div className="post-user">
          <img src={post.user.userImage} />
          <h4>{post.user.userName}</h4>
          <p>{post.created}</p>
        </div>

        <div className="post-content">
          <h2 className="post-content-title">{post.title}</h2>
          {post.postImage 
          && 
          <img 
            src={post.postImage} 
            className="post-content-image"
          />}
        </div>

        <div className="post-actions">
          <div className="post-action"><img src={Comment} /><p>{post.comments} Comments</p></div>
          <div className="post-action"><img src={Share} /><p>Share</p></div>
          <div className="post-action"><img src={Save} /><p>Save</p></div>
          <div className="post-action"><img src={More} /></div>
        </div>
      </div>
    </div>
  );
}

export default Post;