
import Flame from "../assets/Flame.svg"
import More from "../assets/More.svg"
import ArrowDown from "../assets/ArrowDown.svg"

function Settings() {

  return (
    <div className="content-settings-options">
      <div className="settings__option">
        <img src={Flame}/>
        <p>Popular</p>
        <img src={ArrowDown}/>
      </div>
      <div className="settings__option">
        <img src={More}/>
        <img src={ArrowDown}/>
      </div>
    </div>
  )
}

export default Settings;
