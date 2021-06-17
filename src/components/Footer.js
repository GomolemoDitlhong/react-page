import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  transparent: {
    backgroundColor: "transparent",
    padding: "10px",
    "&$selected": {
      color: "red",
    },
  },
  // This is required for the '&$selected' selector to work
  selected: {},
});

function Footer() {
  const classes = styles();
  return (
    <BottomNavigation classes={{ root: classes.transparent, selected: classes.selected }}>
      <BottomNavigationAction value="recents" icon={<FacebookIcon style={{ fill: "#3b5998" }} />} />
      <BottomNavigationAction value="favorites" icon={<TwitterIcon style={{ fill: "#1DA1F2" }} />} />
      <BottomNavigationAction value="nearby" icon={<InstagramIcon style={{ fill: " #C13584" }} />} />
      <BottomNavigationAction value="folder" icon={<YouTubeIcon style={{ fill: "#c4302b" }} />} />
    </BottomNavigation>
  );
}

export default Footer;
