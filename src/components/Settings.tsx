import Flame from "../assets/Flame.svg";
import More from "../assets/More.svg";
import Top from "../assets/Top.svg";
import New from "../assets/New.svg";
import ArrowDown from "../assets/ArrowDown.svg";
import { useState } from "react";

function Settings({ isMobile }: { isMobile: boolean }) {
  const [browsingLocation, setBrowsingLocation] = useState("Poland");
  const [showBrowsingLocations, setShowBrowsingLocations] = useState(false);

  return (
    <div className="content-settings-options">
      <div className="settings__option settings-popular">
        <img src={Flame} />
        <p>Popular</p>
        {isMobile && <img src={ArrowDown} />}
      </div>

      {!isMobile && (
        <>
          <div
            className={`settings__option settings-lenguage ${
              showBrowsingLocations && "option-selected"
            } `}
            onClick={() => setShowBrowsingLocations(!showBrowsingLocations)}
          >
            <p className="name">{browsingLocation}</p>
            <img src={ArrowDown} />

            {showBrowsingLocations && (
              <div className="settings-lenguage-options">
                {locations.map(location => (
                  <p
                    className={`${
                      location === browsingLocation &&
                      "settings-selected-lenguage"
                    } `}
                    onClick={() => setBrowsingLocation(location)}
                  >
                    {location}
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="settings__option settings-new">
            <img src={New} />
            <p>New</p>
          </div>

          <div className="settings__option settings-top">
            <img src={Top} />
            <p>Top</p>
          </div>
        </>
      )}

      <div className="settings__option settings-more">
        <img src={More} />
        {isMobile && <img src={ArrowDown} />}
      </div>
    </div>
  );
}

export default Settings;

const locations = [
  "Everywhere",
  "Argentina",
  "Australia",
  "Belgium",
  "Brazil",
  "Canada",
  "Chile",
  "China",
  "Denmark",
  "Egypt",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "India",
  "Italy",
  "Japan",
  "Kenya",
  "Mexico",
  "Morocco",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Norway",
  "Poland",
  "Russia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "Tanzania",
  "Uganda",
  "United Kingdom",
  "United States",
];
