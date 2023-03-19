import CreateFolderList from "./CreateFolderList";

function SideMenu() {
  return (
    <div className="side_menu">
      {folder.map((entry, index) => (
        <CreateFolderList entry={entry} key={index} styling="sidemenu" />
      ))}
    </div>
  );
}

export default SideMenu;

const folder = [
  {
    type: "folder",
    name: "Popular Communities",
    items: [
      {
        type: "anchor",
        name: "Ask Reddit",
        link: "#",
      },
      {
        type: "anchor",
        name: "No Stupid Questions",
        link: "#",
      },
      {
        type: "anchor",
        name: "Destiny The Game",
        link: "#",
      },
      {
        type: "anchor",
        name: "Axplain Like I'm Five",
        link: "#",
      },
      {
        type: "anchor",
        name: "Ask Men",
        link: "#",
      },
      {
        type: "anchor",
        name: "League of Legends",
        link: "#",
      },
      {
        type: "anchor",
        name: "Minecraft",
        link: "#",
      },
      {
        type: "anchor",
        name: "Politics",
        link: "#",
      },
    ],
  },
  {
    type: "folder",
    name: "Gaming",
    items: [
      {
        type: "anchor",
        name: "PC Gaming",
        link: "#",
      },
      {
        type: "anchor",
        name: "Console Gaming",
        link: "#",
      },
      {
        type: "anchor",
        name: "Mobile Gaming",
        link: "#",
      },
      {
        type: "anchor",
        name: "Esports",
        link: "#",
      },
      {
        type: "anchor",
        name: "Gaming News",
        link: "#",
      },
      {
        type: "anchor",
        name: "Gaming Reviews",
        link: "#",
      },
    ],
  },
  {
    type: "folder",
    name: "Sports",
    items: [
      {
        type: "anchor",
        name: "Football (Soccer)",
        link: "#",
      },
      {
        type: "anchor",
        name: "Basketball",
        link: "#",
      },
      {
        type: "anchor",
        name: "American Football",
        link: "#",
      },
      {
        type: "anchor",
        name: "Baseball",
        link: "#",
      },
      {
        type: "anchor",
        name: "Tennis",
        link: "#",
      },
      {
        type: "anchor",
        name: "Rugby",
        link: "#",
      },
      {
        type: "anchor",
        name: "Motorsports",
        link: "#",
      },
      {
        type: "anchor",
        name: "Olympic Sports",
        link: "#",
      },
      {
        type: "anchor",
        name: "Sports News",
        link: "#",
      },
    ],
  },
  {
    type: "folder",
    name: "Tv",
    items: [
      {
        type: "anchor",
        name: "TV Shows",
        link: "#",
      },
      {
        type: "anchor",
        name: "TV Series",
        link: "#",
      },
      {
        type: "anchor",
        name: "Streaming Services",
        link: "#",
      },
      {
        type: "anchor",
        name: "Documentaries",
        link: "#",
      },
      {
        type: "anchor",
        name: "Talk Shows",
        link: "#",
      },
      {
        type: "anchor",
        name: "Reality TV",
        link: "#",
      },
      {
        type: "anchor",
        name: "TV News and Reviews",
        link: "#",
      },
    ],
  },
  {
    type: "folder",
    name: "Travel",
    items: [
      {
        type: "anchor",
        name: "Destinations",
        link: "#",
      },
      {
        type: "anchor",
        name: "Travel Tips and Tricks",
        link: "#",
      },
      {
        type: "anchor",
        name: "Budget Travel",
        link: "#",
      },
      {
        type: "anchor",
        name: "Luxury Travel",
        link: "#",
      },
      {
        type: "anchor",
        name: "Travel Photography",
        link: "#",
      },
    ],
  },
  {
    type: "folder",
    name: "Health & Fitness",
    items: [
      {
        type: "anchor",
        name: "Nutrition and Diet",
        link: "#",
      },
      {
        type: "anchor",
        name: "Exercise and Workout Routines",
        link: "#",
      },
      {
        type: "anchor",
        name: "Mental Health",
        link: "#",
      },
      {
        type: "anchor",
        name: "Yoga and Meditation",
        link: "#",
      },
    ],
  },
  {
    type: "folder",
    name: "Fashion",
    items: [
      {
        type: "anchor",
        name: "Streetwear",
        link: "#",
      },
      {
        type: "anchor",
        name: "Accessories",
        link: "#",
      },
      {
        type: "anchor",
        name: "Sneakers and Footwear",
        link: "#",
      },
      {
        type: "anchor",
        name: "Beauty and Makeup",
        link: "#",
      },
      {
        type: "anchor",
        name: "Fashion News and Trends",
        link: "#",
      },
    ],
  },
];
