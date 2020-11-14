// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectURI = "https://spotify-clone-da423.web.app/";
const clientId = "8ba21bb3e6bd441fb6fe6e8935206efa";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromURL = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((valueMap, item) => {
      let parts = item.split("=");
      valueMap[parts[0]] = decodeURIComponent(parts[1]);
      return valueMap;
    }, {});
};

export const loginURL = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
