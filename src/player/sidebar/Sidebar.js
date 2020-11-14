import React from "react";
import SideBarOption from "../SideBarOption/SideBarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import "./sidebar.css";
import { useDataLayerValue } from "../../DataLayer";

function Sidebar() {
  const [{ playLists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="side__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify-logo"
      />

      <SideBarOption title="Home" Icon={HomeIcon} />
      <SideBarOption title="Search" Icon={SearchIcon} />
      <SideBarOption title="Your Library" Icon={LibraryMusicIcon} />

      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />

      {playLists?.items?.map((playList) => (
        <SideBarOption title={playList.name} />
      ))}
    </div>
  );
}

export default Sidebar;
