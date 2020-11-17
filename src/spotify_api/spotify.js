const clientId = "ff17aee3e9ca4715925e82943b3f1014";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

const redirectUri = "http://localhost:3000/";
const authEndpoint = "https://accounts.spotify.com/authorize";
export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getAccessURL = () => {
  return window.location.hash
    .substr(1)
    .split("&")
    .reduce((initial, item) => {
      const params = item.split("=");
      initial[params[0]] = params[1];
      return initial;
    }, {});
};
