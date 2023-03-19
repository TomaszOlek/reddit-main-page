
import trendingUser1 from "../assets/trendingUser1.png"
import trendingUser2 from "../assets/trendingUser2.png"
import trendingUser3 from "../assets/trendingUser3.png"
import trendingUser4 from "../assets/trendingUser4.png"
import trendingBackground1 from "../assets/trendingBackground1.png"
import trendingBackground2 from "../assets/trendingBackground2.png"
import trendingBackground3 from "../assets/trendingBackground3.png"
import trendingBackground4 from "../assets/trendingBackground4.png"

function TrendingPosts() {

  return (
    <div className="content-trending">
      <p>Trending today</p>
      <div className="content-trending__container"> 
        {trendingPost.map(( item ) => (
          <div className="trending__post">
            <img src={ item.background } alt="Trending Background" className="trending__post-background"/>

            <div className="trending__post-content">
              <div className="trending__post-content-user">
                <img src={ item.user.userIamge } alt=""/>
                <p>{ item.user.userName }</p>
              </div>
              <div className="trending__post-content-text">
                <h2>{ item.title }</h2>
                <p>{ item.description }</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrendingPosts

const trendingPost = [
  {
    user: {
      userName: "Formula1",
      userIamge: trendingUser1,
    },
    title: "2023 MoneyGram Haas VF-23 Livery",
    description: "Meet the new painting from the formula",
    background: trendingBackground1,
  },{
    user: {
      userName: "Minecraft1234",
      userIamge: trendingUser2,
    },
    title: "What would you add to minecraft?",
    description: "If there was one thing you could add to Minecraft what would it be?",
    background: trendingBackground2,
  },{
    user: {
      userName: "Lola",
      userIamge: trendingUser3,
    },
    title: "Miley Cyrus looks different",
    description: "Miley looks like a mix of Cher, Dolly Parton, and Kim Kardashian",
    background: trendingBackground3,
  },{
    user: {
      userName: "NBA",
      userIamge: trendingUser4,
    },
    title: "LeBron James is less than 100 POINTS",
    description: "Kareem Abdul-Jabbar is the all-time leading scorer in the NBA",
    background: trendingBackground4,
  }
]