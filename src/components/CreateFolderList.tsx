import { useState } from "react";

import ArrowDown from "../assets/ArrowDown.svg";
import ArrowUp from "../assets/ArrowUp.svg";

interface CreateFolderListProps {
  entry: {
    type: string;
    name: string;
    icon?: string;
    link?: string;
    items?: CreateFolderListProps["entry"][];
  };
  styling: "navbar" | "sidemenu";
}

function CreateFolderList({ entry, styling }: CreateFolderListProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="folder">
      <div onClick={() => setIsExpanded(!isExpanded)}>
        <div
          className={`folder-item ${
            styling === "navbar" ? "navbar" : "sidemenu"
          }-item`}
        >
          {entry.icon && (
            <img src={entry.icon} className={"folder-item__icon"} />
          )}

          {entry.type === "folder" ? (
            <p className={`folder-name`}>{entry.name}</p>
          ) : (
            <a
              className={`${entry.icon ? "folder-name" : "folder-link"} `}
              href={`${entry.link}`}
            >
              {entry.name}
            </a>
          )}

          {entry.type === "folder" && (
            <>{isExpanded ? <img src={ArrowUp} /> : <img src={ArrowDown} />}</>
          )}
        </div>
      </div>

      {isExpanded && (
        <>
          {entry.items &&
            entry.type === "folder" &&
            entry.items.map((item, index) => (
              <CreateFolderList entry={item} key={index} styling={styling} />
            ))}
        </>
      )}
    </div>
  );
}

export default CreateFolderList;
