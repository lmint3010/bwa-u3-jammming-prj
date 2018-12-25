var accessToken;
const clientId = "d045a66c2b5847058080fe2fdd0a3731";
const redirectUri = "https://wk8yo398wk.codesandbox.io/";

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const url = window.location.href;
    const tokenMatched = url.match(/access_token=([^&]*)/);
    const expirationMatched = url.match(/expires_in=([^&]*)/);
    if (tokenMatched && expirationMatched) {
      accessToken = tokenMatched[1];
      const expiration = Number(expirationMatched[1]);
      window.setTimeout(() => (accessToken = ""), expiration * 1000);
      window.history.pushState("Access Token", null, "/");
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: headers
    })
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse) {
          return jsonResponse.tracks.items.map(track => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
          }));
        }
        return [];
      });
  },

  savePlaylist(title, uris) {
    if (!title || !uris) {
      if (title === "") alert("Please Enter the name of Playlist");
      return;
    }
    const accessToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    let userId;
    return fetch("https://api.spotify.com/v1/me", { headers: headers })
      .then(response => response.json())
      .then(jsonResponse => {
        userId = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
          headers: headers,
          method: "POST",
          body: JSON.stringify({ name: title })
        })
          .then(response => response.json())
          .then(jsonResponse => {
            const playlistId = jsonResponse.id;
            return fetch(
              `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`,
              {
                headers: headers,
                method: "POST",
                body: JSON.stringify({ uris: uris })
              }
            );
          });
      });
  }
};

export default Spotify;
