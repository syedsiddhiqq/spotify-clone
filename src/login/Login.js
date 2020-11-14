//  File to handle login functionality.
import React from "react";
import { loginURL } from "../spotify/spotify";
import "./login.css";

function Login() {
  return (
    <div className="login">
      {/* Spotify logo start */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify-logo"
      />

      {/* Login with spotify button start*/}
      <a href={loginURL}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
