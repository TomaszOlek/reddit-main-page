import { useState } from "react"

import ArrowDown from "../assets/ArrowDown.svg"
import ArrowUp from "../assets/ArrowUp.svg"

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

interface EntryProps {
  entry: {
    type: string;
    name: string;
    icon?: string;
    link?: string;
    links?: EntryProps["entry"][];
  };
}

function Entry({ entry }: EntryProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return(
    <div>
      <div onClick={() => setIsExpanded(!isExpanded)} >
        <div className={`navbar-section-folder ${ !entry.icon && "link-spacing" }`}>
          {entry.icon &&  <img src={entry.icon} />}

          {entry.type === "folder" ? 
            <p className="folder-name">{entry.name}</p>
            :
            <a className={`folder-link ${entry.icon && "folder-name"} `} href={`${entry.link}`}>{entry.name}</a>
          }

          {entry.type === "folder" && <>{
            isExpanded ? 
            <img src={ArrowUp}/>
            : 
            <img src={ArrowDown}/>
          }</>}
        </div>
      </div>

      {isExpanded && (<>
        { entry.links && entry.type === "folder" &&
          entry.links.map((item)=>(
            <Entry entry={item} />
          ))
        }
      </>)}
    </div>
  )
}


function NavBar({menuOpen}: {
  menuOpen: boolean
}) {
  return (
    <div className={`navbar ${menuOpen ? "navbar-open" : "navbar-close"}`}>
      {
        directions.map((entry, index) => (<div className="navbar-section">
          <p className="navbar-section__text">{entry.name}</p>

          {entry.categores.map((item) =>
            <Entry entry={item}/>
          )}
        </div>))
      }

      {/* <div className="navbar-settings">
        {settings.map((item)=>(
          <Entry entry={item}/>
        ))}
      </div> */}
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
        name: "popular",
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
        links: [{
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
        links: [{
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
        links: [{
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
        links: [{
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
        links: [{
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
        links: [{
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
        links: [{
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
        links: [{
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
        name: "get app",
        link: "#",
        icon: Import,
      },
    ],
  },
]


