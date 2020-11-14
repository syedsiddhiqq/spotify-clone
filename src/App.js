import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.css";
import { useDataLayerValue } from "./DataLayer";
import Login from "./login/Login";
import Player from "./player/Player";
import { getTokenFromURL } from "./spotify/spotify";

const spotify = new SpotifyWebApi();
//  This is the main app file js.. Every html will be rendered here..
// Evrything will be a compoennt here.
function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  // Run code on given condition
  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      console.log("Token generated is :: " + _token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playLists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playLists: playLists,
        });
      });

      spotify.getPlaylist("5vUWTgbg5qQyDVQyLS8rbE").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discoverWeekly: response,
        });
      });
    }
  }, []);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
