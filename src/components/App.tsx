import React, { Component } from "react";
import SocialMediaLink from "./SocialMediaLink";
import GithubIcon from "../icons/GithubIcon.tsx";
import styles from "./App.module.styl";

class App extends Component<{}> {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.headerText}>Andy Garron</div>
        <div className={styles.socialLinks}>
          <SocialMediaLink
            icon={GithubIcon}
            href={"https://github.com/andyg"}
            text={"GitHub"}
          />
        </div>
      </div>
    );
  }
}

export default App;
