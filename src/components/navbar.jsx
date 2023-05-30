import Ytub from "../images/youtube.png";
import Video from "../images/videocamera_5631.png";
import Notification from "../images/3643784-bell-notification-notify-reminder-ring_113451.png";
import "../styles/navber.css";
function NavBar() {
  return (
    <div className="navbar">
      <div className="log">
        <img width={120} src={Ytub} alt="youtube" />
      </div>

      <div className="searchBar">
        <input type="text" placeholder="search" />
        
      </div>

      <div className="userOption">
        <div className="video">
          <img width={35} src={Video} alt="" />
        </div>
        <div className="video">
          <img width={35} src={Notification} alt="" />
        </div>
        <div className="profile">
          <p>P</p>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
