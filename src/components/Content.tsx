
import User1pfp from "../assets/User1pfp.png"
import User2pfp from "../assets/User2pfp.png"
import User3pfp from "../assets/User3pfp.png"
import PostImage1 from "../assets/PostImage1.png"
import PostImage2 from "../assets/PostImage2.png"

import Settings from "./Settings"

function Content() {

  const postsData = [
    {
      Title: "What do you think about the new game based on the Harry Potter books and movies?",
      PostImage: PostImage1,
      Created: "5 minutes ago",
      Comments: 3,
      PostReputation: 10,
      User: {
        UserName: "VideoGames",
        UserImage: User1pfp,
      }
    },
    {
      Title: "A probe is about to be sent into space. On board will be a disk and a computer with a message from humanity. What are you sending?",
      PostImage: "",
      Created: "7 minutes ago",
      Comments: 1,
      PostReputation: 2,
      User: {
        UserName: "Green",
        UserImage: User2pfp,
      }
    },
    {
      Title: "What's your favorite shrek movie?",
      PostImage: PostImage2,
      Created: "25 minutes ago",
      Comments: 15,
      PostReputation: 33,
      User: {
        UserName: "Movie",
        UserImage: User3pfp,
      }
    }
  ]

  return (
    <div className="content">
      {/* Section */}
      <div className="content-settings">
        <h2>Popular</h2>
        <Settings />
      </div>

      {/* posts */}
      {postsData.map((post, index) => (
        <div key={index}>
          <div></div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Content;
