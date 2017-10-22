const client_id = 'c8fbf2165f0a475f8311a41d764df8f2';
const redirect_uri = "http://localhost:3000/";
const response_type = 'token';
let access_token = '';
const Spotify = {
  getAccessToken() {
    if(access_token.length > 0){
      return access_token;
    } else {
      const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
      const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/); }
       if (this.accessTokenMatch && this.expiresInMatch) {
        let access_token = this.accessTokenMatch[1];
        const expiresIn = this.expiresInMatch[1];
        window.setTimeout(() => access_token = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
        return access_token;
      } else {
        window.location = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=${response_type}&scope=playlist-modify-public&redirect_uri=${redirect_uri}`
      }
    },
    search(term) {
     const accessToken = Spotify.getAccessToken();
     return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
       headers: {
         Authorization: `Bearer ${accessToken}`
       }
     }).then(response => {
       return response.json();
     }).then(jsonResponse => {
       if (!jsonResponse.tracks) {
         return [];
       }
       return jsonResponse.tracks.items.map(track => ({
         id: track.id,
         name: track.name,
         artist: track.artists[0].name,
         album: track.album.name,
         uri: track.uri
       }));
     });
 },


}

export default Spotify;
