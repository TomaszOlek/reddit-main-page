
import User1pfp from "../assets/User1pfp.png"
import User2pfp from "../assets/User2pfp.png"
import User3pfp from "../assets/User3pfp.png"
import PostImage1 from "../assets/PostImage1.png"
import PostImage2 from "../assets/PostImage2.png"

import Settings from "./Settings"
import TrendingPosts from "./TrendingPosts"
import SideMenu from "./SideMenu"
import Post from "./Post"

function Content({ isMobile }: {
  isMobile: boolean
}) {

  return (
    <div className="content">

      {!isMobile && <TrendingPosts/> }

      <div className="content-container">
        <div className="content-container__posts">
          <div className="content-settings">
            <h2>Popular post</h2>
            <Settings />
          </div>

          <div className="content-posts">
            {postsData.map((post, index) => (
              <Post post={post} key={index} />
            ))}
          </div>
        </div>
        
        {!isMobile && <div className="content-posts-side_menu">
          <SideMenu/>
        </div>}
      </div>
    </div>
  )
}

const postsData = [
  {
    title: "What do you think about the new game based on the Harry Potter books and movies?",
    postImage: PostImage1,
    created: "5 minutes ago",
    comments: 3,
    postReputation: 10,
    user: {
      userName: "VideoGames",
      userImage: User1pfp,
    }
  },
  {
    title: "A probe is about to be sent into space. On board will be a disk and a computer with a message from humanity. What are you sending?",
    postImage: "",
    created: "7 minutes ago",
    comments: 1,
    postReputation: 2,
    user: {
      userName: "Green",
      userImage: User2pfp,
    }
  },
  {
    title: "What's your favorite shrek movie?",
    postImage: PostImage2,
    created: "25 minutes ago",
    comments: 15,
    postReputation: 33,
    user: {
      userName: "Movie",
      userImage: User3pfp,
    }
  }
]

export default Content;
