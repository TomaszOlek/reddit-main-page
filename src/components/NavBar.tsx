
import CreateFolderList from "./CreateFolderList"

import Flame from "../assets/Flame.svg"
import Controler from "../assets/Controler.svg"
import Basicle from "../assets/Basicle.svg"
import Graph from "../assets/Graph.svg"
import Wallet from "../assets/Wallet.svg"
import TV from "../assets/TV.svg"
import Star from "../assets/Star.svg"
import More from "../assets/More.svg"

import Settings from "../assets/Settings.svg"
import Import from "../assets/Import.svg"


function NavBar({menuOpen, isMobile}: {
  menuOpen: boolean
  isMobile: boolean
}) {
  return (
    <div className={`navbar ${!isMobile ? "navbar-open" : (menuOpen ? "navbar-open" : "navbar-close")}`}>
      {
        directions.map((entry, index) => (
          <div className="navbar-section">
            <p className="navbar-section__text">{entry.name}</p>

            {entry.categores.map(( item, index ) =>
              <CreateFolderList entry={item} key={index} styling="navbar"/>
            )}
          </div>
        ))
      }
    </div>
  )
}

export default NavBar;

const directions = [
  {
    name: "feeds",
    categores: [
      {
        type: "anchor",
        name: "Popular",
        link: "#",
        icon: Flame,
      },
    ],
  },
  {
    name: "topics",
    categores: [
      {
        type: "folder",
        name: "Gaming",
        icon: Controler,
        items: [{
            type: "anchor",
            name: "PC Gaming",
            link: "#",
          },{
            type: "anchor",
            name: "Console Gaming",
            link: "#",
          },{
            type: "anchor",
            name: "Mobile Gaming",
            link: "#",
          },{
            type: "anchor",
            name: "Esports",
            link: "#",
          },{
            type: "anchor",
            name: "Gaming News",
            link: "#",
          }]
      },{
        type: "folder",
        name: "Sports",
        icon: Basicle,
        items: [{
            type: "anchor",
            name: "Football (Soccer)",
            link: "#",
          },{
            type: "anchor",
            name: "Basketball",
            link: "#",
          },{
            type: "anchor",
            name: "Baseball",
            link: "#",
          },{
            type: "anchor",
            name: "Tennis",
            link: "#",
          },{
            type: "anchor",
            name: "Rugby",
            link: "#",
          },{
            type: "anchor",
            name: "Olympic Sports",
            link: "#",
          },{
            type: "anchor",
            name: "Sports News",
            link: "#",
          }]
      },{
        type: "folder",
        name: "Business, Economics",
        icon: Graph,
        items: [{
            type: "anchor",
            name: "Stocks and Investing",
            link: "#",
          },{
            type: "anchor",
            name: "Personal Finance",
            link: "#",
          },{
            type: "anchor",
            name: "Entrepreneurship",
            link: "#",
          },{
            type: "anchor",
            name: "Small Business",
            link: "#",
          },{
            type: "anchor",
            name: "Corporate News",
            link: "#",
          },{
            type: "anchor",
            name: "Market Analysis",
            link: "#",
          }]
      },{
        type: "folder",
        name: "Crypto",
        icon: Wallet, 
        items: [{
            type: "anchor",
            name: "Cordano",
            link: "#",
          },{
            type: "anchor",
            name: "Dogecoin",
            link: "#",
          },{
            type: "anchor",
            name: "Bitcoin",
            link: "#",
          },{
            type: "anchor",
            name: "Basic Attention Token",
            link: "#",
          },{
            type: "anchor",
            name: "Bitcoin",
            link: "#",
          }]
      },{
        type: "folder",
        name: "Television",
        icon: TV, 
        items: [{
            type: "anchor",
            name: "TV Shows",
            link: "#",
          },{
            type: "anchor",
            name: "TV Series",
            link: "#",
          },{
            type: "anchor",
            name: "Streaming Services (Netflix, Amazon Prime, Hulu, etc.)",
            link: "#",
          },{
            type: "anchor",
            name: "Documentaries",
            link: "#",
          },{
            type: "anchor",
            name: "Talk Shows",
            link: "#",
          },{
            type: "anchor",
            name: "Reality TV",
            link: "#",
          },{
            type: "anchor",
            name: "TV News and Reviews",
            link: "#",
          }]
      },{
        type: "folder",
        name: "Celebrity",
        icon: Star, 
        items: [{
            type: "anchor",
            name: "Hollywood News",
            link: "#",
          },{
            type: "anchor",
            name: "Celebrity Gossip",
            link: "#",
          },{
            type: "anchor",
            name: "Celebrity Interviews",
            link: "#",
          },{
            type: "anchor",
            name: "Red Carpet Events",
            link: "#",
          },{
            type: "anchor",
            name: "Pop Culture",
            link: "#",
          },{
            type: "anchor",
            name: "Celebrity Memes",
            link: "#",
          }]
      },{
        type: "folder",
        name: "More Topics",
        icon: More, 
        items: [{
            type: "anchor",
            name: "Technology",
            link: "#",
          },{
            type: "anchor",
            name: "Science",
            link: "#",
          },{
            type: "anchor",
            name: "Health and Fitness",
            link: "#",
          },{
            type: "anchor",
            name: "Education",
            link: "#",
          },{
            type: "anchor",
            name: "Travel",
            link: "#",
          },{
            type: "anchor",
            name: "Food and Cooking",
            link: "#",
          },{
            type: "anchor",
            name: "Art and Design",
            link: "#",
          }]
      },
    ]
  },
  {
    name: "",
    categores: [
      {
        type: "folder",
        name: "Settings",
        icon: Settings,
        items: [{
            type: "anchor",
            name: "Account Settings",
            link: "#",
          },{
            type: "anchor",
            name: "Notification Settings",
            link: "#",
          },{
            type: "anchor",
            name: "Privacy Settings",
            link: "#",
          },{
            type: "anchor",
            name: "Community Settings",
            link: "#",
          },{
            type: "anchor",
            name: "Moderation Tools",
            link: "#",
          },{
            type: "anchor",
            name: "App Settings",
            link: "#",
          },{
            type: "anchor",
            name: "Accessibility Options",
            link: "#",
          }]
      },
      {
        type: "anchor",
        name: "Get App",
        link: "#",
        icon: Import,
      },
    ],
  },
]


